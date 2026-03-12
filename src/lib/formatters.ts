export const formatDataUsage = (mb: number, unit: 'MB' | 'GB') => {
  if (unit === 'GB') return `${(mb / 1024).toFixed(4)} GB`
  return `${Math.round(mb).toLocaleString()} MB`
}

export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(amount)
}
