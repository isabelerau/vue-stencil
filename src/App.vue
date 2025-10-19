<template>
  <div style="padding: 20px;">
    <h1>Vue with POC Stencil</h1>
    <my-component name="Vue User: Isabele"></my-component>
  </div>
</template>

<script>

export default {
  mounted() {
    this.$el.querySelector('my-component').addEventListener('nameChanged', e => {
      console.log('From Vue:', e.detail);
    });
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
