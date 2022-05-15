<!-- Report view: info/evidences, alerts -->

<script setup>
// import TheWelcome from '@/components/TheWelcome.vue'
import ScanRequest from '@/components/ScanRequest.vue'
import Alert from '@/components/Alert.vue'
</script>

<template>
  <main>

    <!-- info/evidences -->

    <div v-for="alert of alerts" :key="alert.id">
      <br><hr>
      <p> <sup>(:{{alert.id}})</sup> {{ alert.description }} </p>
      <p style="font-size: 60%"> @ {{ alert.method }} {{ alert.uri }} </p>
      <p style="font-size: 80%"> {{ alert.solution }} </p>
      <p style="font-size: 80%"> {{ alert.otherinfo }} </p>
      <p style="font-size: 80%"> {{ alert.reference }} </p>
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
      const res = await axios.get('http://localhost:8000/reports/' + this.$route.params.report_id + '/alerts/');
      this.alerts = res.data;
    } catch (error) {
      console.log(error);
    }
  },
}
</script>
