<script setup lang="ts">

</script>

<template>
  <nav>
    <ul>
      <li>home</li>
      <li>posts</li>
      <li>notFound</li>
    </ul>
    <ul>
      <RouterLink to="/home">home</RouterLink>
      <RouterLink to="/posts">posts</RouterLink>
      <RouterLink to="/notFound">notFound</RouterLink>
    </ul>
  </nav>
  <div id="showcontent">
    <RouterView/>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

nav {
  border: 1px solid red;
  width: 100%;
}
ul {
  display: flex;
  justify-content:flex-start;
}

li {
  list-style: none;
  display: inline;
  min-width: 150px;
}
li:hover {
  background-color: red;
  cursor: pointer;
}

body {
  border:1px solid red;
  padding: 0;
}
</style>
