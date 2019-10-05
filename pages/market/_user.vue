<template>
  <b-card id="market" no-body>
    <b-tabs
      pills
      card
      vertical
      class="market__container"
      nav-wrapper-class="market__tabs"
      content-class="market__content"
    >
      <b-tab title="Tab name" active>
        <b-card-text>
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
      siteName: 'Foxlite'
    }
  },
  computed: {
  }
}
</script>

<style>
#market {
  margin: 0 auto;
  height: calc(100vh - var(--toolbar-height));
  border: solid 1px black
}
.market__container {
  height: 100%;
}
</style>
