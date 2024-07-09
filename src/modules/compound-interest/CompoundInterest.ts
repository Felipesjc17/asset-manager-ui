import { defineComponent, reactive, ref, nextTick } from 'vue'
import './CompoundInterest.scss'
import { useI18n } from 'vue-i18n'
import Filter from './components/filter/Filter.vue'
import Table from './components/table/Table.vue'
import CompoundInterestService from './CompoundInterest.service'
export default defineComponent({
  name: 'compound-interest',
  components: {
    [Filter.name as string]: Filter,
    [Table.name as string]: Table
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

    const data = CompoundInterestService

    return {
      form,
      show,
      data,
      onSubmit,
      onReset,
      t
    }
  }
})
