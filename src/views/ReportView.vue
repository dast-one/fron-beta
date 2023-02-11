<!-- Report view: info/evidences, alerts -->

<script setup>
import Alert from '@/components/Alert.vue'

import { CBadge } from '@coreui/vue'
</script>

<template>
  <main>

    <h2 v-if="alerts.length"> Результаты тестирования </h2>

    <!-- info/evidences -->

    <div v-for="alert of alerts">

      <br><hr>

      <!-- <h3 v-html="alert.name" /> -->
      <h5>
        <CBadge v-if="alert.riskcode <= 1" color="info">FYI</CBadge>
        <CBadge v-if="alert.riskcode == 2" color="warning">warn</CBadge>
        <CBadge v-if="alert.riskcode == 3" color="danger">danger</CBadge>
        {{ alert.name }}
      </h5>
      <!-- <RouterLink :to="{ name: 'alert', params: { alert_id: alert.id }}">
        {{ alert.generated_ts }} </RouterLink> -->

      <p v-html="alert.description" />
      <!-- <pre>{{ alert.description }}</pre> -->
      <!-- <p> {{ alert.description }} </p> -->

      <br>
      <ul> <li v-for="ai of alert.instances" :key="ai.id">
      <code style="font-size: 80%"> @ {{ ai.method }} {{ ai.uri }} </code>
      <!-- <code v-if="ai.attack" style="font-size: 80%"> {{ai.attack}} </code> -->
      <!-- <code v-if="ai.evidence" style="font-size: 80%"> {{ai.evidence}} </code> -->
      <pre style="font-size: 80%"><code>{{ ai.request_header }}{{ ai.request_body }}</code></pre>
      <pre style="font-size: 80%"><samp>{{ ai.response_header }}{{ ai.response_body }}</samp></pre>
      </li> </ul>

      <br>
      <p style="font-size: 80%" v-html="alert.solution" />
      <p style="font-size: 80%" v-html="alert.otherinfo" />
      <p style="font-size: 80%" v-html="alert.reference" />


    </div>

    <br><br> <!-- TODO style this with css instead -->

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
      // const res = await axios.get(`/reports/${this.$route.params.report_id}/`);
      const res = await axios.get(`/report/`, {params: {
        report_id: this.$route.params.report_id
      }});
      this.alerts = res.data;
    } catch (error) {
      console.log(error);
    }
  },
}
</script>
