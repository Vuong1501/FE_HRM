/**
 * Format ngày tháng sang dạng dd/MM/yyyy
 * @param {string|Date} date
 */
export function formatDate(date) {
  if (!date) return ''
  return new Date(date).toLocaleDateString('vi-VN')
}

/**
 * Format ngày giờ sang dạng dd/MM/yyyy HH:mm
 * @param {string|Date} date
 */
export function formatDateTime(date) {
  if (!date) return ''
  return new Date(date).toLocaleString('vi-VN')
}

/**
 * Format số phút thành chuỗi giờ:phút (vd: 90 -> "1h 30p")
 * @param {number} minutes
 */
export function formatMinutes(minutes) {
  if (!minutes || minutes < 0) return '0p'
  const h = Math.floor(minutes / 60)
  const m = minutes % 60
  if (h === 0) return `${m}p`
  if (m === 0) return `${h}h`
  return `${h}h ${m}p`
}

/**
 * Format số tiền VND
 * @param {number} amount
 */
export function formatCurrency(amount) {
  if (amount == null) return ''
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(amount)
}

/**
 * Lấy chữ cái đầu của tên (dùng cho avatar)
 * @param {string} name
 */
export function getInitials(name) {
  if (!name) return 'U'
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}
