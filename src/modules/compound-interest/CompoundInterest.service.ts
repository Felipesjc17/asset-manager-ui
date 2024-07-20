const data = {
  dataTable: {
    simulatedData: [
      {
        initialValue: 1000,
        yield: 100,
        desiredIncome: 1000,
        administration: 0,
        inflation: 0,
        contribution: 500,
        finalValue: 0
      },
      {
        initialValue: 1600,
        yield: 160,
        desiredIncome: 1000,
        administration: 0,
        inflation: 0,
        contribution: 500,
        finalValue: 2260
      },
      {
        initialValue: 2260,
        yield: 226,
        desiredIncome: 1000,
        administration: 0,
        inflation: 0,
        contribution: 500,
        finalValue: 2986
      }
    ],
    simulatedDataFinal: {
      totalMonth: 3,
      accumulatedIncome: 486,
      accumulatedDesiredIncome: 10008,
      accumulatedAdministration: 0,
      accumulatedInflation: 0,
      accumulatedMonthlyContribution: 1500,
      accumulatedTotal: 2986
    }
  },
  //dados grafico
  dataChart: {
    labels: ['Mês 0', '1', '2', '3', '4', '5', '6'],
    datasets: [
      {
        label: 'Rendimento Mensal em R$',
        backgroundColor: '#f87979',
        id: 'line',
        data: [40, 50, 60, 70, 80, 90, 100]
      },
      {
        label: 'Renda atual atualizada com dados de inflação',
        backgroundColor: '#55555',
        data: [50, 55, 60, 65, 70, 75, 80]
      }
    ]
  }
}
export default data
