import { defineComponent, reactive, ref, nextTick, computed } from 'vue'
import './CompoundInterest.scss'
import { useI18n } from 'vue-i18n'
import FilterCompoundInterest from './components/filter/FilterCompoundInterest.vue'
import ChartCompoundInterest from './components/chart/ChartCompoundInterest.vue'
import TableCompoundInterest from './components/table/TableCompoundInterest.vue'
import CompoundInterestService from './CompoundInterest.service'

interface DataTable {
  simulatedData: object
  simulatedDataFinal: object
}

interface DataLines {
  valueWithIncome: number[]
  desiredIncome: number[]
}
export default defineComponent({
  name: 'compound-interest',
  components: {
    [FilterCompoundInterest.name as string]: FilterCompoundInterest,
    [TableCompoundInterest.name as string]: TableCompoundInterest,
    [ChartCompoundInterest.name as string]: ChartCompoundInterest
  },
  setup() {
    const { t } = useI18n()

    const form = reactive({
      periodMonths: '10',
      initialValue: '100',
      monthlyContribution: '100',
      correctContributionInflation: false,
      desiredIncome: '1000',
      yield: {
        value: '5',
        type: 'MONTHLY'
      },
      administration: {
        value: '1',
        type: 'MONTHLY'
      },
      inflation: {
        value: '1',
        type: 'MONTHLY'
      }
    })
    const show = ref(true)

    const dataTable = ref<null | DataTable>(null)
    const dataChart = ref<null | DataLines>(null)

    const onSubmit = async () => {
      event?.preventDefault()
      await CompoundInterestService.getDataService(form).then((data) => {
        dataTable.value = {
          simulatedData: data.dataTable,
          simulatedDataFinal: data.dataTableFinal
        }

        dataChart.value = {
          valueWithIncome: data.dataChart?.valueWithIncome,
          desiredIncome: data.dataChart?.desiredIncome
        }
      })
    }

    const onReset = () => {
      form.periodMonths = ''
      form.initialValue = ''
      form.monthlyContribution = ''
      form.correctContributionInflation = false
      form.desiredIncome = ''
      form.yield = { value: '', type: 'MONTHLY' }
      form.administration = { value: '', type: 'MONTHLY' }
      form.inflation = { value: '', type: 'MONTHLY' }

      // Trick to reset/clear native browser form validation state
      show.value = false

      nextTick(() => {
        show.value = true
      })
    }

    const visibleChart = computed(() => {
      return dataChart.value !== null
    })

    const visibleTable = computed(() => {
      return dataTable.value !== null
    })

    return {
      form,
      show,
      dataChart,
      dataTable,
      onSubmit,
      onReset,
      visibleChart,
      visibleTable
    }
  }
})
