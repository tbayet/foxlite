<template>
  <TransitionFade>
    <div class="loader__container">
      <div class="loader" />
    </div>
  </TransitionFade>
</template>

<script>
import TransitionFade from '~/components/transitionFade'

export default {
  name: 'Loader',
  components: {
    TransitionFade
  }
}
</script>

<style scoped>
.loader__container {
  position: absolute;
  top: 0;
  width: 90%;
  padding: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loader {
  border: 16px solid #f3f3f3;
  border-top: 16px solid #3498db;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
