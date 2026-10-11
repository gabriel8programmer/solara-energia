import { ref, computed } from 'vue'

export function useCalculator() {
  const selectedRange = ref('R$ 600 a R$ 1.200')
  const propertyType = ref('Residência')

  // Mapa de estimativas médias com base na faixa de conta de luz
  const estimatesMap = {
    'Até R$ 300': {
      avgBill: 250,
      panels: 4,
      monthlySavings: 230,
      co2Year: 1.2,
      paybackYears: 3.8
    },
    'R$ 300 a R$ 600': {
      avgBill: 480,
      panels: 8,
      monthlySavings: 450,
      co2Year: 2.3,
      paybackYears: 3.9
    },
    'R$ 600 a R$ 1.200': {
      avgBill: 900,
      panels: 14,
      monthlySavings: 840,
      co2Year: 4.5,
      paybackYears: 4.0
    },
    'R$ 1.200 a R$ 3.000': {
      avgBill: 2000,
      panels: 30,
      monthlySavings: 1880,
      co2Year: 9.8,
      paybackYears: 3.7
    },
    'Acima de R$ 3.000': {
      avgBill: 4500,
      panels: 68,
      monthlySavings: 4250,
      co2Year: 22.0,
      paybackYears: 3.5
    }
  }

  const currentEstimate = computed(() => {
    return estimatesMap[selectedRange.value] || estimatesMap['R$ 600 a R$ 1.200']
  })

  const yearlySavings = computed(() => {
    return currentEstimate.value.monthlySavings * 12
  })

  const twentyFiveYearsSavings = computed(() => {
    return currentEstimate.value.monthlySavings * 12 * 25
  })

  return {
    selectedRange,
    propertyType,
    currentEstimate,
    yearlySavings,
    twentyFiveYearsSavings
  }
}
