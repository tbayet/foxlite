<template>
  <div id="app">
    <b-navbar fixed="top" type="dark" variant="info">
      <b-navbar-brand to="/">
        {{ siteName }}
      </b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-select
            :value="selected"
            :options="merchants"
            @change="onMerchantChange($event)"
          />
        </b-nav-form>
      </b-navbar-nav>
    </b-navbar>
    <nuxt />
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      siteName: 'Foxlite'
    }
  },
  computed: {
    merchants () { return [''].concat(this.$store.state.merchant.list) },
    selected () { return this.$store.state.merchant.current }
  },
  methods: {
    ...mapActions({
      logIn: 'merchant/login'
    }),
    onMerchantChange (name) {
      this.logIn(name)
      this.$router.push('/market')
    }
  }
}
</script>

<style>
#app {
  margin-top: var(--toolbar-height);
  font-family: var(--font-primary);
  font-size: 16px;
}
</style>
