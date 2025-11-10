# 🧪 Vitest Testing Guide for Spend-Wise

A complete, production-ready testing setup for the **Spend-Wise Web Application**, built using **Vite** and **React**.  
This guide shows how to configure Vitest, test UI components, and use extended matchers effectively.

---

## 📦 1. Installation

Run this command in your project root:

```bash
npm install --save-dev vitest @testing-library/react @testing-library/jest-dom jsdom
```
💡 ```jsdom``` simulates a browser environment so your components can be tested like in a real DOM.
---

## ⚙️ 2. Configuration — vite.config.ts

Add the following test configuration inside your Vite setup:
```
/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,           // allows using describe, it, expect globally
    environment: 'jsdom',    // simulates browser
    setupFiles: './src/setupTests.ts', // load test utilities
    css: true,               // allow CSS imports
    coverage: {
      reporter: ['text', 'json', 'html'], // code coverage formats
    },
  },
})
```

## 🧰 3. Setup File — src/setupTests.ts

This file activates the extended matchers from Testing Library:
```import '@testing-library/jest-dom'
```

## 🧩 4. Example Component — src/components/Login.tsx

Here’s a realistic example of a login form used in Spend-Wise:

```
import { useState } from 'react'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !password) {
      setError('Please enter both email and password')
      return
    }

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      alert('Login successful!')
    }, 500)
  }

  return (
    <div>
      <h2>Login to Spend-Wise</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      {error && <p role="alert">{error}</p>}
    </div>
  )
}
```

## 🧪 5. Test File — src/components/Login.test.tsx

Here’s a comprehensive Vitest test suite with examples of the most commonly used Testing Library methods and extended matchers.

```
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import Login from './Login'

// --- Test Suite for Spend-Wise Login Component ---
describe('Login Component (Spend-Wise)', () => {
  // 1️⃣ Basic Rendering
  it('renders login heading and inputs', () => {
    render(<Login />)
    expect(screen.getByText('Login to Spend-Wise')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
  })

  // 2️⃣ Extended Matcher: toBeDisabled / toBeEnabled
  it('disables login button during loading', async () => {
    const mockAlert = vi.spyOn(window, 'alert').mockImplementation(() => {})
    render(<Login />)

    fireEvent.change(screen.getByPlaceholderText('Email'), {
      target: { value: 'user@spendwise.com' },
    })
    fireEvent.change(screen.getByPlaceholderText('Password'), {
      target: { value: 'pass123' },
    })

    const button = screen.getByRole('button', { name: /login/i })
    fireEvent.click(button)

    expect(button).toBeDisabled()
    await waitFor(() => expect(button).toBeEnabled())
    expect(mockAlert).toHaveBeenCalledWith('Login successful!')

    mockAlert.mockRestore()
  })

  // 3️⃣ Error Handling & Assertions
  it('shows error message when fields are empty', () => {
    render(<Login />)
    fireEvent.click(screen.getByRole('button', { name: /login/i }))
    expect(screen.getByRole('alert')).toHaveTextContent(
      'Please enter both email and password'
    )
  })

  // 4️⃣ Input Change and Value Assertions
  it('updates input fields correctly', () => {
    render(<Login />)
    const emailInput = screen.getByPlaceholderText('Email')
    const passwordInput = screen.getByPlaceholderText('Password')

    fireEvent.change(emailInput, { target: { value: 'hello@spendwise.com' } })
    fireEvent.change(passwordInput, { target: { value: 'abc123' } })

    expect(emailInput).toHaveValue('hello@spendwise.com')
    expect(passwordInput).toHaveValue('abc123')
  })

  // 5️⃣ Using Multiple Extended Matchers
  it('checks multiple UI properties using jest-dom matchers', () => {
    render(<Login />)
    const heading = screen.getByText('Login to Spend-Wise')
    const emailInput = screen.getByPlaceholderText('Email')
    const passwordInput = screen.getByPlaceholderText('Password')
    const button = screen.getByRole('button', { name: /login/i })

    expect(heading).toBeVisible()
    expect(emailInput).toBeEnabled()
    expect(passwordInput).toHaveAttribute('type', 'password')
    expect(button).toHaveTextContent('Login')
    expect(button).toHaveClass('') // (works if you have class-based styling)
  })
})
```

 ---

## 🧠 6. Extended Matchers Reference

Here are **commonly used matchers** from [`@testing-library/jest-dom`](https://github.com/testing-library/jest-dom) that you can use with **Vitest**:

| Matcher | Description | Example |
|----------|--------------|----------|
| `.toBeInTheDocument()` | Checks if an element exists in the DOM | `expect(button).toBeInTheDocument()` |
| `.toBeVisible()` | Ensures an element is visible | `expect(heading).toBeVisible()` |
| `.toBeDisabled()` / `.toBeEnabled()` | Check form states | `expect(button).toBeDisabled()` |
| `.toHaveTextContent()` | Verify exact text content | `expect(alert).toHaveTextContent('Error!')` |
| `.toHaveValue()` | Verify input or form field value | `expect(input).toHaveValue('user@spendwise.com')` |
| `.toHaveAttribute()` | Check for specific HTML attributes | `expect(link).toHaveAttribute('href', '/home')` |
| `.toHaveClass()` | Check element’s CSS class | `expect(div).toHaveClass('active')` |
| `.toContainElement()` | Verify that a parent element contains a child | `expect(container).toContainElement(button)` |
| `.toBeEmptyDOMElement()` | Ensure an element has no child nodes | `expect(div).

***

***
