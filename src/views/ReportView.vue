<!-- Report view: info/evidences, alerts -->

<script setup>
import Alert from '@/components/Alert.vue'
</script>

<template>
  <main>

    <!-- info/evidences -->

    <div v-for="alert of alerts" :key="alert.id">
      <br><hr>
      <sup>(:{{alert.id}})</sup>
      <span v-html="alert.description"/>
      <code style="font-size: 80%"> @ {{ alert.method }} {{ alert.uri }} </code>
      <p style="font-size: 80%" v-html="alert.solution" />
      <p style="font-size: 80%" v-html="alert.otherinfo" />
      <p style="font-size: 80%" v-html="alert.reference" />
      <!-- <RouterLink :to="{ name: 'alert', params: { alert_id: alert.id }}">
        {{ alert.generated_ts }} </RouterLink> -->
    </div>

  </main>
</template>

<script>
import axios from "axios"
export default {
  name: "App",
  data() {
    return {
      alerts: [],
    };
  },
  async created() {
    try {
      const res = await axios.get('/reports/' + this.$route.params.report_id + '/alerts/');
      this.alerts = res.data;
    } catch (error) {
      console.log(error);
    }
  },
}
</script>
