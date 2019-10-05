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
            :options="users"
            @change="onUserChange($event)"
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
    users () { return [''].concat(this.$store.state.users.list) },
    selected () { return this.$store.state.users.current }
  },
  methods: {
    ...mapActions({
      logIn: 'users/login'
    }),
    onUserChange (name) {
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
