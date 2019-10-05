<template>
  <b-card id="market" class="bg-light" no-body>
    <b-form-group class="my-2 mx-auto bg-white">
      <b-form-radio-group
        v-model="year"
        :options="years"
        buttons
        button-variant="outline-primary"
        @change="onYearChange"
      />
    </b-form-group>
    <b-tabs
      pills
      card
      vertical
      class="market__container"
      nav-class="market__tabs bg-transparent"
      content-class="market__content bg-white"
    >
      <b-tab title="Tab name" active>
        <b-card-text v-if="!loading">
          Tab Content
        </b-card-text>
      </b-tab>
      <b-tab title="Tab namfe">
        <b-card-text v-if="!loading">
          Tab Content
        </b-card-text>
      </b-tab>
    </b-tabs>
  </b-card>
</template>

<script>
export default {
  middleware: 'authenticated',
  data () {
    return {
    }
  },
  computed: {
    data () { return this.$store.state.data.list },
    loading () { return !this.data || !this.data.length }
  },
  async asyncData ({ $axios, store, route }) {
    const years = await $axios.$get('/api/years')
    store.dispatch('data/load', { year: years[years.length - 1], merchant: route.params.merchant })
    return { years: years.sort((a, b) => a - b), year: years[years.length - 1] }
  },
  methods: {
    onYearChange () {
      this.$store.dispatch('data/load', { year: this.year, merchant: this.$route.params.merchant })
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
