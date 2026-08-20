<script setup>
import { computed } from 'vue'
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Filler
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale, Filler)

const props = defineProps({
  data: { type: Object, required: true } // { labels, datasets: [{ label, data }] }
})

// Paleta consistente com a identidade visual do SGA+
const palette = ['#2563EB', '#60A5FA', '#10B981']

const chartData = computed(() => ({
  labels: props.data.labels,
  datasets: props.data.datasets.map((ds, i) => ({
    label: ds.label,
    data: ds.data,
    borderColor: palette[i % palette.length],
    backgroundColor: `${palette[i % palette.length]}1A`,
    tension: 0.4,
    fill: i === 0,
    pointRadius: 3,
    pointBackgroundColor: palette[i % palette.length],
    borderWidth: 2.5
  }))
}))

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  interaction: { mode: 'index', intersect: false },
  plugins: {
    legend: {
      position: 'bottom',
      labels: { boxWidth: 8, boxHeight: 8, usePointStyle: true, font: { family: 'Inter', size: 12 } }
    },
    tooltip: {
      backgroundColor: '#0F172A',
      padding: 10,
      cornerRadius: 8,
      titleFont: { family: 'Inter' },
      bodyFont: { family: 'Inter' }
    }
  },
  scales: {
    y: { min: 0, max: 10, grid: { color: '#E2E8F0' }, ticks: { font: { family: 'Inter' } } },
    x: { grid: { display: false }, ticks: { font: { family: 'Inter' } } }
  }
}
</script>

<template>
  <div class="h-72">
    <Line :data="chartData" :options="chartOptions" />
  </div>
</template>
