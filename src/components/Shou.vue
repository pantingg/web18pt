<template>
  <div id="main">
      <Dao></Dao>
          <router-view></router-view>
  </div>
</template>
<script>
import Dao from "./Dao";
export default {
  name: "Shou",
  components: {
    Dao
  },
};
</script>
<style scoped>
</style>