import { defineComponent, ref } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'filter-compound-interest',
  emit: ['simulate', 'reset-form'],
  props: {
    form: { type: Object, required: true }
  },
  setup(_, { emit }) {
    const { t } = useI18n()

    const optionsPeriod = [
      { text: t('compoundInterest.filters.monthly'), value: 'MONTHLY' },
      { text: t('compoundInterest.filters.yearly'), value: 'YEARLY' }
    ]
    const show = ref(true)

    const onSubmit = (event: Event) => {
      event.preventDefault()
      emit('simulate')
    }

    const onReset = (event: Event) => {
      event.preventDefault()
      emit('reset-form')
    }

    return {
      onSubmit,
      onReset,
      show,
      optionsPeriod,
      t
    }
  }
})
