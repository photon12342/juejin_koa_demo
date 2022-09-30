<template>
  <div class="home">
    <h1>接口获取的数据：{{msg}}</h1>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  data() {
    return {
      msg: '-'
    }
  },
  created() {
    axios.get('/api/api/get/userInfo')
      .then(res => {
          this.msg = res.data
      })
      .catch(e => { //捕获异常
          console.log(e.toString());
      });
  },
}
</script>
