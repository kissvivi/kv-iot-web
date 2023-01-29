<script setup lang="ts">
import { NInput, NButton, NCard, NGradientText, NInputGroup } from 'naive-ui'
import { GlassesOutline, Glasses } from '@vicons/ionicons5'
import footer from '../components/footer.vue'
</script>
<template>
    <div class="main">
        <n-card class="login">
            <n-gradient-text gradient="linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)">
                <h1>kv-iot物联网</h1>
            </n-gradient-text>
            <div class="info">
                <div class="name">
                <n-input-group>
                        <!-- 用户名： -->
                    <n-input placeholder="请输入用户名" size="large" type="text" />
                </n-input-group>
            </div>
            <div class="password">
                <n-input-group>
                        <!-- 密码： -->
                        <n-input
      type="password"
      show-password-on="click"
      placeholder="请输入密码"
      size="large"
      :maxlength="8"
    >
      <template #password-visible-icon>
        <n-icon :size="16" :component="GlassesOutline" />
      </template>
      <template #password-invisible-icon>
        <n-icon :size="16" :component="Glasses" />
      </template>
    </n-input>
                </n-input-group>
            </div>
            </div>
            <div class="btn">
                <n-button size="large" type="success">
                    登录
                </n-button>
            </div>

        </n-card>
    </div>
    <footer></footer>
</template>

<style scoped>
.main {
    background-image: url('./111.jpg');
    /* background-size: 100%;  */
    background-repeat: no-repeat;
    background-size: 100% 100%;
    /* background-attachment: fixed; */
    height: 100%;
    /* background-color: aqua; */
    display: flex;
    justify-content: center;

    align-items: center;
}

.login {
    border-radius: 16px;

    display: flex;
    flex-direction: column;
    width: 30%;
    /* height: 40%; */
    background-color: rgba(254, 254, 254, 0.474)
        /* background-image: linear-gradient(to right, #fefefeff 0%, #fffbf9ff 100%); */
}

.info {
    margin: 16px;
    display: flex;
    flex-direction: column;
}
.name{
    margin: 8px;
}
.password{
    margin: 8px;
}

.btn {
    margin: 16px;
    display: flex;
}
</style>
<style>
.n-card.n-card--bordered {
    border: none;
}

html,
body,
#app {
    height: 100%;
    margin: 0;
    padding: 0;
}
</style>