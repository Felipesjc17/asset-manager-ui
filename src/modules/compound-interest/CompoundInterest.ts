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

    const loading = ref(false)

    const form = reactive({
      periodMonths: '0',
      initialValue: '0',
      monthlyContribution: '0',
      correctContributionInflation: false,
      desiredIncome: '0',
      yield: {
        value: '0',
        type: 'MONTHLY'
      },
      administration: {
        value: '0',
        type: 'MONTHLY'
      },
      inflation: {
        value: '0',
        type: 'MONTHLY'
      }
    })
    const show = ref(true)

    const dataTable = ref<null | DataTable>(null)
    const dataChart = ref<null | DataLines>(null)
    const notification = ref<null | string>(null)

    const onSubmit = async () => {
      notification.value = null
      loading.value = true
      await CompoundInterestService.getDataService(form)
        .then((data) => {
          dataTable.value = {
            simulatedData: data.dataTable,
            simulatedDataFinal: data.dataTableFinal
          }

          dataChart.value = {
            valueWithIncome: data.dataChart?.valueWithIncome,
            desiredIncome: data.dataChart?.desiredIncome
          }
        })
        .catch(() => {
          notification.value = t('compoundInterest.notification.error.fetch')
        })
        .finally(() => (loading.value = false))
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

    const dismissibleAlert = ref(true)

    return {
      form,
      show,
      dataChart,
      dataTable,
      onSubmit,
      onReset,
      visibleChart,
      visibleTable,
      notification,
      dismissibleAlert,
      loading
    }
  }
})
