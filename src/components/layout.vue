<script setup lang="ts">
</script>
<template>
    <div>
      <el-container>
        <el-header class="header"><Header></Header></el-header>
        <el-container>
          <el-aside width="200px"><Lefter></Lefter></el-aside>
          <el-container>
            <el-main>
              <el-page-header :icon="ArrowLeft">
                <template #content>
      <span class="text-large font-600 mr-3"> {{ $route.name}} </span>
    </template>
              <router-view></router-view>
            </el-page-header>
            </el-main>
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
<script lang="ts" setup>
import { ArrowLeft } from '@element-plus/icons-vue'
</script>
  