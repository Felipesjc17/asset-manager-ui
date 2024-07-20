import { defineComponent, reactive, ref, nextTick } from 'vue'
import './CompoundInterest.scss'
import { useI18n } from 'vue-i18n'
import FilterCompoundInterest from './components/filter/FilterCompoundInterest.vue'
import ChartCompoundInterest from './components/chart/ChartCompoundInterest.vue'
import TableCompoundInterest from './components/table/TableCompoundInterest.vue'
import CompoundInterestService from './CompoundInterest.service'
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
      periodMonths: '',
      initialValue: '',
      monthlyContribution: '',
      correctContributionInflation: false,
      yield: {
        value: '',
        period: 'MONTHLY'
      },
      administration: {
        value: '',
        period: 'MONTHLY'
      },
      inflation: {
        value: '',
        period: 'MONTHLY'
      }
    })
    const show = ref(true)

    const onSubmit = () => {
      // event.preventDefault()
      alert(JSON.stringify(form))
    }

    const onReset = () => {
      form.periodMonths = ''
      form.initialValue = ''
      form.monthlyContribution = ''
      form.correctContributionInflation = false
      form.yield = { value: '', period: 'MONTHLY' }
      form.administration = { value: '', period: 'MONTHLY' }
      form.inflation = { value: '', period: 'MONTHLY' }

      // Trick to reset/clear native browser form validation state
      show.value = false

      nextTick(() => {
        show.value = true
      })
    }

    const dataTable = CompoundInterestService.dataTable
    const dataChart = CompoundInterestService.dataChart

    return {
      form,
      show,
      dataChart,
      dataTable,
      onSubmit,
      onReset,
      t
    }
  }
})
