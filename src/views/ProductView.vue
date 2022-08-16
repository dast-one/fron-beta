<!-- Product view: summary, reports, scanrequest -->

<script setup>
// import ScanRequest from '@/components/ScanRequest.vue'
import Report from '@/components/Report.vue'
import ProductItem from '@/components/ProductItem.vue'
import EcosystemIcon from '@/components/icons/IconEcosystem.vue'
</script>

<template>
  <main>

    <!-- <h2> Продукт </h2> -->

    <!-- overview -->
    <ProductItem>
      <template #icon> <EcosystemIcon /> </template>
      <template #heading> {{ product.name }} </template>
      <code style="font-size: 80%"> {{product.status}} {{product.product_type}} </code>
      <p v-html="product.description" /> <!-- TODO avoid v-html -->
      <p v-if="product.contact_name | product.contact_email">
        Контакты: {{ product.contact_name }} {{ product.contact_email }}
      </p>
      <i style="font-size: 80%"> {{ new Date(product.last_modified_at).toDateString() }} </i>
    </ProductItem>

    <!-- <hr> -->

    <!-- <ScanRequest /> here? (or below?) -->

    <!-- ReportZZZZ -->
    <h2 v-if="report_groups.length"> Стенды и отчёты </h2>
    <!-- RouterLink to scan request -->

    <div v-for="rg of report_groups" :key="rg.app_id">
      
      <h3>
        <sup>(:{{rg.app_id}})</sup>
        {{ rg.title }}
        <code style="font-size: 80%"> {{rg.type}} </code>
        <!-- RouterLink to scan request -->
      </h3>
      <p> {{rg.description}} </p>

      <br>

      <ol><li v-for="report of rg.dast_reports" :key="report.id">
        <sup>(:{{report.id}})</sup>
        <RouterLink :to="{ name: 'report', params: { report_id: report.id }}">
          {{ report.generated_ts }} </RouterLink>
      </li></ol>

    </div>

  </main>
</template>

<script>
import axios from "axios"
export default {
  name: "App",
  data() {
    return {
      product: {},
      // reports: [],
      report_groups: [],
    };
  },
  async created() {
    try {
      const res1 = await axios.get('/products/' + this.$route.params.product_id);
      this.product = res1.data;
      // const res2 = await axios.get('/products/' + this.$route.params.product_id + '/reports/', {params: {'flat':true}});
      // this.reports = res2.data;
      const res2 = await axios.get('/products/' + this.$route.params.product_id + '/reports/');
      this.report_groups = res2.data;
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
