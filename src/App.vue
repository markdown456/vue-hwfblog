<template>
  <div id="app">
    <!-- 路由占位符 -->
    <!-- 头部 -->
      <router-view name="Headerbar"></router-view>
        <!-- 头部 -->
    <router-view></router-view>
      <!-- 底部 -->
      <router-view name="Footer"></router-view>
      <!-- 底部 -->
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
</style>
