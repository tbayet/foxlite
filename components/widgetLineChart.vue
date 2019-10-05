<template>
  <Highcharts ref="highcharts" :options="options" />
</template>

<script>
import Highcharts from 'highcharts'
import loadMap from 'highcharts/modules/map.js'
import { genComponent } from 'vue-highcharts'

loadMap(Highcharts)

export default {
  name: 'WidgetLineChart',
  components: {
    Highcharts: genComponent('Highcharts', Highcharts)
  },
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      options: {
        title: {
          text: 'Market share by Month',
          x: -20 // center
        },
        xAxis: {
          categories: this.data.map(d => d.period.substring(0, 3))
        },
        yAxis: {
          title: {
            text: '%'
          }
        },
        tooltip: {
          valueSuffix: ' %'
        },
        series: [{
          data: this.data.map(d => parseFloat(d.value))
        }]
      }
    }
  }
}
</script>

<style scoped>
</style>
