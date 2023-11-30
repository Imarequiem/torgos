<template>
  <div id="app">
    <router-view />
    <Footer />
  </div>
</template>
<script>
import Footer from "@/components/Footer.vue";
export default {
  name: "App",
  components: {
    Footer,
  },
};
</script>
<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
}
</style>
