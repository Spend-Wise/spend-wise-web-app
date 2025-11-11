import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { fetchHealthData, formatDuration } from '../../src/utils/healthCheckUtils.ts'

describe('healthCheckUtils', () => {
  describe('fetchHealthData', () => {
    beforeEach(() => {
      global.fetch = vi.fn() as typeof fetch
    })

    afterEach(() => {
      vi.restoreAllMocks()
    })

    it('should return uptime_seconds when API call succeeds', async () => {
      const mockResponse = {
        json: vi.fn().mockResolvedValue({ uptime_seconds: '12345' }),
      } as Partial<Response>
      vi.mocked(global.fetch).mockResolvedValue(mockResponse as Response)

      const result = await fetchHealthData()

      expect(result).toBe('12345')
      expect(global.fetch).toHaveBeenCalledWith('http://127.0.0.1:8000/health')
    })

    it('should return error message when API call fails', async () => {
      vi.mocked(global.fetch).mockRejectedValue(new Error('Network error'))

      const result = await fetchHealthData()

      expect(result).toBe('Error connecting to server')
    })

    it('should return error message when response is not ok', async () => {
      const mockResponse = {
        json: vi.fn().mockRejectedValue(new Error('Invalid JSON')),
      } as Partial<Response>
      vi.mocked(global.fetch).mockResolvedValue(mockResponse as Response)

      const result = await fetchHealthData()

      expect(result).toBe('Error connecting to server')
    })
  })

  describe('formatDuration', () => {
    it('should format seconds correctly', () => {
      expect(formatDuration('60')).toBe('0d 0h 1m 0s')
    })

    it('should format minutes correctly', () => {
      expect(formatDuration('3660')).toBe('0d 1h 1m 0s')
    })

    it('should format hours correctly', () => {
      expect(formatDuration('36600')).toBe('0d 10h 10m 0s')
    })

    it('should format days correctly', () => {
      expect(formatDuration('90000')).toBe('1d 1h 0m 0s')
    })

    it('should format multiple days correctly', () => {
      expect(formatDuration('259200')).toBe('3d 0h 0m 0s')
    })

    it('should format complex duration correctly', () => {
      expect(formatDuration('93784')).toBe('1d 2h 3m 4s')
    })

    it('should return original string if input is not a number', () => {
      expect(formatDuration('Error connecting to server')).toBe('Error connecting to server')
    })

    it('should return original string if input is NaN', () => {
      expect(formatDuration('invalid')).toBe('invalid')
    })

    it('should handle zero seconds', () => {
      expect(formatDuration('0')).toBe('0d 0h 0m 0s')
    })

    it('should handle large numbers', () => {
      expect(formatDuration('86400')).toBe('1d 0h 0m 0s')
      expect(formatDuration('172800')).toBe('2d 0h 0m 0s')
    })

    it('should handle fractional seconds by truncating', () => {
      expect(formatDuration('90.5')).toBe('0d 0h 1m 30s')
    })
  })
})

