import { useState, useEffect } from 'react'

/**
 * Hook debounce giá trị đầu vào (dùng cho search)
 * @param {any} value - Giá trị cần debounce
 * @param {number} delay - Thời gian delay (ms)
 */
export function useDebounce(value, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay)
    return () => clearTimeout(timer)
  }, [value, delay])

  return debouncedValue
}
