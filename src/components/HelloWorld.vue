<script setup>
defineProps({
  msg1: {
    type: String,
    required: true
  },
  msg2: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <h3> {{ msg1 }}&nbsp;<sup class="red" style="font-size: 110%">&beta;</sup>&nbsp;{{ msg2 }} </h3>
    <!-- <p>типа hello</p> -->
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
