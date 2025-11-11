import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import HealthCheck from '../../src/routes/HealthCheck'
import * as healthCheckUtils from '../../src/utils/healthCheckUtils.ts'

describe('HealthCheck', () => {
  beforeEach(() => {
    vi.spyOn(healthCheckUtils, 'fetchHealthData')
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('renders without crashing', async () => {
    vi.mocked(healthCheckUtils.fetchHealthData).mockResolvedValue('12345')
    const { container } = render(<HealthCheck />)
    expect(container).toBeTruthy()
    // Wait for async operations to complete - Loading... should disappear
    await waitFor(() => {
      expect(screen.queryByText('Loading...')).toBeNull()
    })
    // Verify the component rendered the uptime
    expect(screen.getByText(/Up for:/)).toBeTruthy()
  })

  it('displays the Health Check heading', async () => {
    vi.mocked(healthCheckUtils.fetchHealthData).mockResolvedValue('12345')
    render(<HealthCheck />)
    const heading = screen.getByText('Health Check')
    expect(heading).toBeTruthy()
    expect(heading.tagName).toBe('H1')
    // Wait for async operations to complete
    await waitFor(() => {
      expect(screen.queryByText('Loading...')).toBeNull()
    })
  })

  it('shows loading state initially', () => {
    vi.mocked(healthCheckUtils.fetchHealthData).mockImplementation(
      () => new Promise(() => {}) // Never resolves
    )
    render(<HealthCheck />)
    expect(screen.getByText('Loading...')).toBeTruthy()
  })

  it('displays formatted uptime after loading', async () => {
    vi.mocked(healthCheckUtils.fetchHealthData).mockResolvedValue('93784')
    render(<HealthCheck />)

    await waitFor(() => {
      expect(screen.queryByText('Loading...')).toBeNull()
    })

    expect(screen.getByText(/Up for:/)).toBeTruthy()
    expect(screen.getByText(/1d 2h 3m 4s/)).toBeTruthy()
  })

  it('handles error message from API', async () => {
    vi.mocked(healthCheckUtils.fetchHealthData).mockResolvedValue('Error connecting to server')
    render(<HealthCheck />)

    await waitFor(() => {
      expect(screen.queryByText('Loading...')).toBeNull()
    })

    expect(screen.getByText(/Up for:/)).toBeTruthy()
    // The error message is rendered as part of the formatted text
    const container = screen.getByText(/Up for:/).parentElement
    expect(container?.textContent).toContain('Error connecting to server')
  })

  it('calls fetchHealthData on mount', async () => {
    vi.mocked(healthCheckUtils.fetchHealthData).mockResolvedValue('12345')
    render(<HealthCheck />)
    expect(healthCheckUtils.fetchHealthData).toHaveBeenCalledTimes(1)
    // Wait for async operations to complete
    await waitFor(() => {
      expect(screen.queryByText('Loading...')).toBeNull()
    })
  })
})

