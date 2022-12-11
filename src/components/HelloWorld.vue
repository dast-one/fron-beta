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
    <h3 class="blur3"> {{ msg1 }}&nbsp;<sup class="red" style="font-size: 110%">&beta;</sup>&nbsp;{{ msg2 }} </h3>
    <div v-if="!!whoami" style="text-align: center">
      <span class="blur7"> for </span>
      <span class="blur3"> {{ whoami.split('@')[0] }} </span>
      <span class="blur7" v-if="!!whoami.split('@')[1]"> @{{ whoami.split('@')[1] }} </span>
    </div>
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

.blur1 {
  opacity: .8;
  text-shadow: 0 0 5px rgba(0,0,0,0.1);
}
.blur2 {
  opacity: .8;
  text-shadow: 0 0 5px rgba(0,0,0,0.2);
}
.blur3 {
  opacity: .7;
  text-shadow: 0 0 5px rgba(0,0,0,0.3);
}
.blur4 {
  opacity: .6;
  text-shadow: 0 0 5px rgba(0,0,0,0.4);
}
.blur5 {
  opacity: .5;
  text-shadow: 0 0 5px rgba(0,0,0,0.5);
}
.blur6 {
  opacity: .4;
  text-shadow: 0 0 5px rgba(0,0,0,0.6);
}
.blur7 {
  opacity: .3;
  text-shadow: 0 0 5px rgba(0,0,0,0.9);
}
</style>

<script>
import axios from "axios"
export default {
  name: "App",
  data() {
    return {
      whoami: '',
    };
  },
  async created() {
    try {
      const res = await axios.get(`/whoami/`);
      this.whoami = res.data;
    } catch (error) {
      console.log(error);
    }
  },
}
</script>
