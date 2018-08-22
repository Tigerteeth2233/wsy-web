<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div><input type="text" v-model="name" placeholder="姓名"></div>
    <button @click="submit">提交</button>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'HelloWorld',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',
            name: ''
        };
    },
    methods: {
        submit() {
            axios.post('/api/login', { name: this.name }).then(res => {
                if (res.status === 200) {
                    alert('成功');
                }
            });
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
