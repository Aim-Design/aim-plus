<template>
  <div class="container">
    <nav>
      <ul>
        <li><router-link to="/button">Button</router-link></li>
        <li><router-link to="/icon">Icon</router-link></li>
        <li><router-link to="/input">Input</router-link></li>
        <li><router-link to="/link">Link</router-link></li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>
<script lang="ts" setup></script>

<style scoped lang="less">
nav {
  margin-bottom: 40px;

  ul {
    display: flex;
    flex-wrap: wrap;
  }
  li {
    display: inline-block;
  }
  li + li {
    border-left: solid 1px #bbb;
    padding-left: 10px;
    margin-left: 10px;
  }
}
.container {
  padding: 10px 40px 0;
}
.v-link-active {
  color: #bbb;
}
</style>
