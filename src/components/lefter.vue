<template>
    <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
      <el-radio-button :label="false">expand</el-radio-button>
      <el-radio-button :label="true">collapse</el-radio-button>
    </el-radio-group> -->
    <el-menu
      :router='true'
      default-active="2"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-sub-menu index="/system/list">
        <template #title>
          <el-icon><location /></el-icon>
          <span>系统管理</span>
        </template>
        <el-menu-item-group>
          <template #title><span>权限管理</span></template>
          <el-menu-item index="1-1">权限列表</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="用户管理">
          <el-menu-item index="1-3">用户列表</el-menu-item>
        </el-menu-item-group>
        <el-sub-menu index="1-4">
          <template #title><span>资源管理</span></template>
          <el-menu-item index="1-4-1">资源列表</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="/layout/data/list">
        <el-icon><icon-menu /></el-icon>
        <template #title>连接管理</template>
      </el-menu-item>
      <el-menu-item index="/layout/product/list">
        <el-icon><document /></el-icon>
        <template #title>产品管理</template>
      </el-menu-item>
      <el-menu-item index="/layout/device/list">
        <el-icon><setting /></el-icon>
        <template #title>设备管理</template>
      </el-menu-item>
    </el-menu>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'
  import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
  } from '@element-plus/icons-vue'
  
  const isCollapse = ref(false)
  const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
  const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
  </script>
  
  <style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 800px;
  }
  </style>
  