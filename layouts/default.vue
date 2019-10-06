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
    <b-alert
      v-if="notification"
      :variant="notification.type"
      dismissible
      fade
      show
      class="notification"
    >
      {{ notification.message }}
    </b-alert>
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
    selected () { return this.$store.state.merchant.current },
    notification () { return this.$store.state.notification.notification }
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

<style scoped>
#app {
  margin-top: var(--toolbar-height);
  font-family: var(--font-primary);
  font-size: 16px;
}
.notification {
  z-index: 1000;
  position: fixed;
  bottom: 20px;
  right: 50px;
}
</style>
