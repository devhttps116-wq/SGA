<script setup>
import { computed } from 'vue'
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const props = defineProps({
  labels: { type: Array, required: true },
  data: { type: Array, required: true }
})

const chartData = computed(() => ({
  labels: props.labels,
  datasets: [
    {
      label: 'Frequência (%)',
      data: props.data,
      backgroundColor: '#60A5FA',
      hoverBackgroundColor: '#2563EB',
      borderRadius: 6,
      maxBarThickness: 28
    }
  ]
}))

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: {
      backgroundColor: '#0F172A',
      padding: 10,
      cornerRadius: 8,
      callbacks: { label: (ctx) => `${ctx.parsed.y}% de presença` }
    }
  },
  scales: {
    y: { min: 80, max: 100, grid: { color: '#E2E8F0' }, ticks: { font: { family: 'Inter' } } },
    x: { grid: { display: false }, ticks: { font: { family: 'Inter' } } }
  }
}
</script>

<template>
  <div class="h-72">
    <Bar :data="chartData" :options="chartOptions" />
  </div>
</template>
