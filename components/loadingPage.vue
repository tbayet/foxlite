<template lang="html">
  <TransitionFade>
    <div v-if="loading" id="container" no-body>
      <div class="loadingDiv rounded shadow-sm radio mx-auto" />
      <aside class="loadingDiv rounded shadow-sm tabs" />
      <div class="loadingDiv rounded shadow-sm content" />
    </div>
  </TransitionFade>
</template>

<script>
import TransitionFade from '~/components/transitionFade'

export default {
  components: {
    TransitionFade
  },
  data () {
    return {
      loading: false,
      endLoad: true
    }
  },
  methods: {
    start () {
      this.loading = true
    },
    finish () {
      setTimeout(() => { this.loading = false }, 800)
    }
  }
}
</script>

<style scoped>
@keyframes gradientBG {
0% {
  background-position: 75% 0%;
}
100% {
  background-position: 25% 0%;
}
}

#container {
  position: fixed;
  display: block;
  z-index: 100;
  height: calc(100vh - var(--toolbar-height));
  width: 100%;
  background-color: white;
}
.loadingDiv {
  margin: 10px;
  background: linear-gradient(to right, #eee 0%, #eee 45%, #e5e5e5 48%, #e5e5e5 52%, #eee 55%, #eee 100%);
  background-size: 400% 100%;
  background-position: 80% 0%;
  animation: gradientBG 1.5s ease infinite;
}
.radio {
  display: block;
  height: 40px;
  width: 500px;
}
.tabs {
  display: inline-block;
  width: 150px;
  height: 100%;
}
.content {
  display: inline-block;
  width: calc(100% - 210px);
  height: 100%;
}
</style>
