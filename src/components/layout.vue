<script setup lang="ts">
</script>
<template>
    <div>
      <el-container>
        <el-header class="header"><Header></Header></el-header>
        <el-container>
          <el-aside width="200px"><Lefter></Lefter></el-aside>
          <el-container>
            <el-main><Righter></Righter></el-main>
          </el-container>
        </el-container>
      </el-container>
      <el-footer><Footer></Footer></el-footer>
    </div>
  </template>
<style scoped>
.header{
    color: #000;
}
</style>

  