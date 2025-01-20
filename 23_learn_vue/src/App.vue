<template>
  Hello world
  <h1><TestG /></h1>
  <!-- Attribute Bindings -->

  <a :href="google">Direct to google</a>
</template>

<style>
* {
  background-color: black;
  color: white;
}
h1 {
  color: red;
}
</style>

<script lang="ts" setup>
import TestG from './components/TestG.vue'
const google = 'https://google.com'
</script>
