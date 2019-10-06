<template>
  <b-card id="market" class="bg-light" no-body>
    <b-form-group class="my-2 mx-auto bg-white">
      <b-form-radio-group
        v-model="year"
        :options="years"
        buttons
        button-variant="outline-primary"
        @change="onYearChange($event)"
      />
    </b-form-group>
    <b-tabs
      pills
      card
      vertical
      class="market__container"
      nav-class="bg-transparent"
      content-class="bg-white"
    >
      <b-tab
        v-for="(widget, i) in widgets"
        :key="i"
        :title="widget.title"
      >
        <TransitionFade v-if="!loading">
          <component :is="widget.component" v-if="data[0] != null" :data="data" />
          <p v-else>
            No data for this year
          </p>
        </TransitionFade>
        <Loader v-else />
      </b-tab>
    </b-tabs>
  </b-card>
</template>

<script>
import TransitionFade from '~/components/transitionFade'
import WidgetDataTable from '~/components/widgetDataTable'
import WidgetLineChart from '~/components/widgetLineChart'
import Loader from '~/components/loader'

export default {
  components: {
    TransitionFade,
    Loader
  },
  middleware: 'authenticated',
  data () {
    return {
      widgets: [
        {
          title: 'Data Table',
          component: WidgetDataTable
        }, {
          title: 'Line Chart',
          component: WidgetLineChart
        }
      ]
    }
  },
  computed: {
    data () { return this.$store.state.data.list },
    loading () { return !this.data || !this.data.length }
  },
  async asyncData ({ $axios, store, route }) {
    try {
      const years = await $axios.$get('/api/years')
      store.dispatch('data/load', { year: years[years.length - 1], merchant: route.params.merchant })
      return { years: years.sort((a, b) => a - b), year: years[years.length - 1] }
    } catch (err) {
      store.dispatch('notification/push', { type: 'danger', message: `Sorry! We have a problem with the server` })
      return false
    }
  },
  methods: {
    onYearChange (year) {
      this.$store.dispatch('data/load', { year, merchant: this.$route.params.merchant })
    }
  }
}
</script>

<style>
#market {
  margin: 0 auto;
  height: calc(100vh - var(--toolbar-height));
}
.market__container {
  height: 100%;
}
</style>
