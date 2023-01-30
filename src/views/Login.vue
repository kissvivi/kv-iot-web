<script setup lang="ts">
import { NInput, NButton, NCard, NGradientText, NInputGroup} from 'naive-ui'
import { GlassesOutline, Glasses } from '@vicons/ionicons5'
import { useRouter } from 'vue-router'

import { ref } from 'vue'

import { ElMessage } from "element-plus";

import { ILoginApi } from '../services/api/type'
// const name = ref("admin");
// const password =ref("123456");
const routAndPassword= ref({name:"admin",password:"123456"});

const router = useRouter();
// routAndPassword.value.name = name
// routAndPassword.value.password = password
const login=()=>{
    // console.log(name,password)

    if (routAndPassword.value.name=="admin" && routAndPassword.value.password == "admin"){
        // console.log(name,password)
        console.log(routAndPassword)
        router.push("/layout")
    }else{
        ElMessage.warning('用户名或密码错误')
       
    } 
}

</script>
<template>
    <!-- <h2>KV-IOT云边物联网平台</h2> -->
    <div class="main">
        
        <div class = "ssvg">
            <h2>KV-IOT云边物联网平台</h2>
  <svg width="800" height="359" viewBox="0 0 967 595">
    <g fill-rule="nonzero" fill="none">
      <path id="shape_1" d="M221.101537 249.120871c26.405346 53.573775 26.105285 107.848516 8.501721 147.402986-17.703584 39.454332-52.710671 64.088255-91.618548 84.416249-39.007897 20.227855-82.016604 36.249919-125.1253314 25.73544-43.1087273-10.51448-86.31747479-47.465364-94.41911496-90.324385-8.10164016-42.85902 19.10386756-91.626177 53.31079266-147.102573C6.0580017 213.87233 47.566405 151.886971 94.675942 147.280628c47.209558-4.606343 100.120269 48.266467 126.425595 101.840243z" fill="#8857BF"/>
      <path id="shape_2" d="M203.14275153 141.5672134C248.32686559 68.49632184 314.74427343 27.5036269 376.4142264 18.85911236c61.62415864-8.44606319 118.3787435 15.53236238 172.85884618 47.55564878 54.43430614 32.22173798 106.7925733 72.53417278 126.86565957 133.19046472 20.07308574 60.65629108 7.9831095 141.58013092-38.10154436 184.13373965-46.08465334 42.55360958-126.31663125 46.49270186-220.0732424 46.99439793-93.71081681.3032447-200.97679476-3.1515038-242.54278566-57.17098087-41.64231455-54.14162064-17.53884653-159.04642197 27.7215918-231.99516917z" fill="#6A4495" opacity=".7952939"/>
      <path id="shape_3" d="M674.1432899.37496108c44.77109071-.22025805 81.22510008 17.81019281 102.0705012 42.6815596 20.7450406 24.90596631 25.81403283 56.61995357 26.69927113 89.55174707.78488003 32.966393-2.57947148 67.25097633-23.84847972 92.88642258-21.26900824 25.63544626-60.37523398 42.65464775-91.90615413 34.04334947-31.53092058-8.61129738-55.42069925-42.98808124-81.52471861-84.2931556-26.00366065-41.33967474-54.08828315-89.70973276-41.68606472-123.01170824C576.3827812 18.86370914 629.40511737.52772688 674.1432899.37496108z" fill="#5780BF"/>
      <path id="shape_4" d="M671.87878892 219.95253056c34.36766966-51.45824202 83.20985764-79.29801887 127.81857265-83.97550003 44.57074238-4.53580365 84.81818917 14.14255906 123.22545101 38.55390194 38.36929172 24.55302471 75.04008598 54.87698953 87.95839346 99.03421643 12.91830748 44.1572269 2.17395717 102.09585427-32.07191423 131.56809906-34.2458709 29.47224566-92.09697414 30.29847156-159.59650028 28.3121708-67.46155503-2.12798087-144.5854171-7.29998846-173.1419754-47.21878033-28.60841431-40.0086091-8.61155186-114.90568134 25.8079728-166.27410787z" fill="#FFB4BC"/>
    </g>
  </svg>
    <!-- <h2>KV-IOT</h2> -->
  </div>
        <n-card class="login">
            <n-gradient-text >
                <h1>kv-iot物联网</h1>
            </n-gradient-text>
            <div class="info">
                <div class="name">
                <n-input-group>
                        <!-- 用户名： -->
                    <n-input placeholder="请输入用户名" v-model:value="routAndPassword.name" size="large" type="text" />
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
      v-model:value="routAndPassword.password"
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
                <n-button size="large" @click="login" type="success">
                    登录
                </n-button>
            </div>

        </n-card>
        
    </div>
</template>

<style scoped>
.main {
    /* background-image: url('./333.png'); */
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
    border-radius: 12px;

    display: flex;
    flex-direction: column;
    width: 30%;
    /* height: 40%; */
    background-color: rgba(224, 222, 222, 0.474)
        /* background-image: linear-gradient(to right, #fefefeff 0%, #fffbf9ff 100%); */
}
.ssvg{
    display: flex;
    flex-direction: column;
    margin-top: 10%;
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