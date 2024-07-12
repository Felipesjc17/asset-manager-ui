import { defineComponent, ref, watch } from 'vue'
import router from './router'
import Menu from './models/menu/Menu'

export default defineComponent({
  name: 'App',
  setup() {
    const menu = ref(Menu)

    const $router = ref(router)

    watch(
      $router,
      (val) => {
        menu.value.forEach((item) => {
          item.active = item.link === val.currentRoute.path
        })
      },
      { deep: true }
    )

    return {
      menu,
      router
    }
  }
})
