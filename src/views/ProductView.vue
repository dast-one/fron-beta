<!-- Product view: summary, reports, scanrequest -->

<script setup>
// import TheWelcome from '@/components/TheWelcome.vue'
import ScanRequest from '@/components/ScanRequest.vue'
import Report from '@/components/Report.vue'
</script>

<template>
  <main>
    <!-- overview -->
    <!-- <ScanRequest /> -->

    <ol><li v-for="report of reports" :key="report.id">
      <sup>(:{{report.id}})</sup>
      <RouterLink :to="{ name: 'report', params: { report_id: report.id }}">
        {{ report.generated_ts }} </RouterLink>
      <span style="font-size: 60%"> {{ report_id }} </span>
    </li></ol>

    <!-- ReportZZZZ -->
  </main>
</template>

<script>
import axios from "axios"
export default {
  name: "App",
  data() {
    return {
      reports: [],
    };
  },
  async created() {
    try {
      const res = await axios.get(`http://localhost:8000/reports/`);
      this.reports = res.data;
    } catch (error) {
      console.log(error);
    }
  },
}
</script>
<!-- <script>
export default {
  name: "App",
  data() {
    return {
      users: [],
    };
  },
  async mounted() {
    const { data } = await this.axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    this.users = data;
  },
};
</script> -->
