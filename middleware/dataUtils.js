
const MONTH_STR = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const formatData = (merchantYearRevenues, marketYearRevenues) => {
  const marketShare = (merchantRevenue, marketRevenue) => ((merchantRevenue / marketRevenue) * 100).toFixed(2)
  const labelToMonth = label => MONTH_STR[parseInt(label.split('.')[1], 10) - 1]
  return merchantYearRevenues.values.map(merchantRevenue => ({
    index: parseInt(merchantRevenue.label.split('.')[1], 10) - 1,
    period: labelToMonth(merchantRevenue.label),
    value: marketShare(merchantRevenue.value, marketYearRevenues.values.find(marketRevenu => marketRevenu.label === merchantRevenue.label).value)
  }))
}

export default formatData
