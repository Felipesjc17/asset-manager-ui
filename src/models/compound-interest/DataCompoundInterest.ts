import DataChart from './DataChart'
export default class DataCompoundInterest {
  dataTable: Object
  dataChart: DataChart
  dataTableFinal: Object

  constructor(obj: DataCompoundInterest) {
    this.dataTable = obj.dataTable
    this.dataChart = obj.dataChart
    this.dataTableFinal = obj.dataTableFinal
  }
}
