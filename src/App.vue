<template>
  <div id="app">
    <!-- 路由占位符 -->
    <!-- 头部 -->
      <router-view name="Headerbar" v-if="isRouterAlive"></router-view>
        <!-- 头部 -->

    <router-view v-if="isRouterAlive"></router-view>
    
      <!-- 底部 -->
      <router-view name="Footer" v-if="isRouterAlive"></router-view>
      <!-- 底部 -->
  </div>
</template>

<script>
export default {
  name: 'app',
  provide() {
    return {
      reload: this.reload
    }
  },
  data() {
    return {
      isRouterAlive: true
    }
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function() {
        this.isRouterAlive = true
      }) 
    }
  }
}
</script>

<style>
</style>
