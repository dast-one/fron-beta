<script setup>
defineProps({
  n: {
    // type: Number,
    required: true
  }
})
</script>

<template>
    <!-- <sup>(:{{ n }})</sup> -->
    <sup>:{{ n }} </sup>
</template>

<style scoped>
sup {
  /*font-weight: bolder;*/
  font-size: x-small;
  color: hsla(250, 40%, 80%, 1.0);
}
</style>
