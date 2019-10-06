<template>
  <div class="container">
    <p class="arrow title">
      &#8599;
    </p>
    <p class="title">
      Please log into your Merchant account
    </p>
  </div>
</template>

<script>

export default {
  middleware: 'authenticated'
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  height: calc(100vh - var(--toolbar-height));
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.arrow {
  position: absolute;
  top: 10vh;
  right: 20vw;
}
.title {
  font-family: var(--font-title);
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: var(--color-font-primary);
}
</style>
