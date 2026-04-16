import { useState, useCallback } from 'react'

/**
 * Hook quản lý trạng thái loading, error, data cho các API call
 * @param {Function} apiFunc - hàm gọi API
 * @returns {{ data, loading, error, execute }}
 */
export function useApi(apiFunc) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const execute = useCallback(async (...args) => {
    setLoading(true)
    setError(null)
    try {
      const result = await apiFunc(...args)
      setData(result)
      return result
    } catch (err) {
      setError(err?.message || 'Đã xảy ra lỗi')
      throw err
    } finally {
      setLoading(false)
    }
  }, [apiFunc])

  return { data, loading, error, execute }
}
