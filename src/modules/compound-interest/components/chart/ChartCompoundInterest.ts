import { defineComponent, watch, ref, computed, type PropType } from 'vue'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  PointElement,
  CategoryScale,
  LineElement,
  LinearScale
} from 'chart.js'
import { Line } from 'vue-chartjs'
import { useI18n } from 'vue-i18n'
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

interface DataSet {
  label: string
  backgroundColor: string
  id?: string
  data: number[]
}

interface DataChart {
  labels: string[]
  datasets: DataSet[]
}

interface DataLines {
  valueWithIncome: number[]
  desiredIncome: number[]
}

export default defineComponent({
  name: 'chart-compound-interest',
  components: {
    Line
  },
  props: { data: { type: Object as PropType<DataLines>, required: true } },
  setup(props) {
    const { t } = useI18n()
    const options = {
      responsive: true,
      maintainAspectRatio: false,
      tooltips: {
        intersect: true
      }
    }

    const getLabels = (length: number) => {
      const arrayLabels: string[] = []
      for (let i = 0; i < length; i += 1) {
        arrayLabels.push(`${t('compoundInterest.chart.month')} ${i}`)
      }
      return arrayLabels
    }

    const dataChart = computed(() => {
      return {
        labels: getLabels(props.data.valueWithIncome.length),
        datasets: [
          {
            label: 'Valor inicial somado com Rendimento em R$',
            backgroundColor: '#00FFFF',
            id: 'line',
            data: props.data.valueWithIncome.map((n) => parseFloat(n.toFixed(2)))
          },
          {
            label: 'Renda desejada atualizada com dados de inflação',
            backgroundColor: '#FFFF00',
            id: 'line2',
            data: props.data.desiredIncome.map((n) => parseFloat(n.toFixed(2)))
          }
        ]
      }
    })

    return {
      dataChart,
      options
    }
  }
})
