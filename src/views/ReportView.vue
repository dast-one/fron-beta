<!-- Report view: info/evidences, alerts -->

<script setup>
import Alert from '@/components/Alert.vue'
import RR from '@/components/RR.vue'

import { CBadge } from '@coreui/vue'
</script>

<template>
  <main>

    <h2 v-if="alerts.length"> Результаты тестирования </h2>

    <!-- info/evidences -->

    <div v-for="alert of alerts">
      <hr>
      <h3>
        <CBadge v-if="alert.riskcode <= 1" color="info">FYI</CBadge>
        <CBadge v-if="alert.riskcode == 2" color="warning">warn</CBadge>
        <CBadge v-if="alert.riskcode == 3" color="danger">danger</CBadge>
        {{ alert.name }}
      </h3>
      <!-- <RouterLink :to="{ name: 'alert', params: { alert_id: alert.id }}">
        {{ alert.generated_ts }} </RouterLink> -->

      <p v-html="alert.description" />
      <!-- <pre>{{ alert.description }}</pre> -->
      <!-- <p> {{ alert.description }} </p> -->
      <!-- <br> -->

      <ul style="list-style: none;">
        <li v-for="ai of alert.instances" :key="ai.id">
          <div v-if="ai.uri=='(SAMPLE)'">
            <!-- <code v-if="ai.attack" style="font-size: 80%"> {{ai.attack}} </code> -->
            <!-- <code v-if="ai.evidence" style="font-size: 80%"> {{ai.evidence}} </code> -->
            <h4> Пример запроса-ответа </h4>
            <RR v-if="ai.request_header || ai.request_body || ai.response_header || ai.response_body">
              <template #qry>{{ ai.request_header.trim() }}{{ ai.request_body.trim() }}</template>
              <template #res>{{ ai.response_header.trim() }}{{ ai.response_body.trim() }}</template>
            </RR>
            <h4> Далее &ndash; где встречалась соотв. ситуация </h4>
          </div>

          <div v-else>
            <code style="font-size: small"> @ {{ ai.method }} {{ ai.uri }} </code>
            <RR v-if="ai.request_header || ai.request_body || ai.response_header || ai.response_body">
              <template #qry>{{ ai.request_header.trim() }}{{ ai.request_body.trim() }}</template>
              <template #res>{{ ai.response_header.trim() }}{{ ai.response_body.trim() }}</template>
            </RR>
          </div>
        </li>
      </ul>

      <br>
      <p style="font-size: 80%" v-html="alert.solution" />
      <p style="font-size: 80%" v-html="alert.otherinfo" />
      <p style="font-size: 80%" v-html="alert.reference" />


    </div>

  </main>
</template>

<script>
import axios from "axios"
export default {
  props: ['report_id'],
  name: "App",
  data() {
    return {
      alerts: [],
    };
  },
  async created() {
    try {
      const res = await axios.get(`/report`, {params: {
        // report_id: this.$route.params.report_id
        report_id: this.report_id
      }});
      this.alerts = res.data;
    } catch (error) {
      console.log(error);
    }
  },
}
</script>
