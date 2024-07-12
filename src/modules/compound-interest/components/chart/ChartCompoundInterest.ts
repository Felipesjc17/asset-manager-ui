import { defineComponent } from 'vue'
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
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export default defineComponent({
  name: 'chart-compound-interest',
  components: {
    Line
  },
  data() {
    return {
      data: {
        labels: ['Mês 0', '1', '2', '3', '4', '5', '6'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            id: 'line',
            data: [40, 39, 10, 40, 39, 80, 40]
          },
          {
            label: 'Data two',
            backgroundColor: '#55555',
            data: [100, 509, 10, 40, 39, 80, 40]
          }
        ]
      },

      options: {
        responsive: true,
        maintainAspectRatio: false,
        tooltips: {
          intersect: true
        }
      }
    }
  }
})
