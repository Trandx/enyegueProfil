<template>
  <nav-bar v-bind="$attrs"></nav-bar>
</template>

<script>
import NavBar from "../NavBar"
export default {
    name: 'Header',
    components: {
        NavBar,
    },
}
</script>

<style>

</style>