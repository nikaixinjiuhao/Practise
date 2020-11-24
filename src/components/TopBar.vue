<template>
  <div>
    <ul>
      <li>
        <router-link to="/">首页</router-link>
      </li>
      <li>
        <router-link to="/relative">vue相关</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'topbar'
  }
</script>
<style>
  li{
    list-style: none;
    display: inline-block;
    margin-right: 15px;
    color: #42b983;
  }
</style>
