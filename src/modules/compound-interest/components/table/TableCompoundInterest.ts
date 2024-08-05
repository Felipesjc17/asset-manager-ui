import { defineComponent } from 'vue'

export default defineComponent({
  name: 'table-compound-interest',
  props: {
    data: { type: Object, required: true }
  },
  setup() {
    const translationPath = 'compoundInterest.table'

    return {
      translationPath
    }
  }
})