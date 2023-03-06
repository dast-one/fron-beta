<!-- Product view: summary, reports, scanrequest -->

<script setup>
// import ScanRequest from '@/components/ScanRequest.vue'
import Report from '@/components/Report.vue'
import ProductItem from '@/components/ProductItem.vue'
import EcosystemIcon from '@/components/icons/IconEcosystem.vue'
import Mark from '@/components/Mark.vue'
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

    <div v-for="rg of report_groups" :key="rg.app_id"
      :class="{ inactive: rg.type_ == 'deleted' }">
      
      <h3>
        {{ rg.title }}
        <code style="font-size: small;"> {{rg.type_}} </code>
        <Mark :n=rg.app_id v-if="APPDBG" />
        <!-- RouterLink to scan request -->
      </h3>
      <p style="font-size: 80%"> {{rg.description}} </p>

      <!-- <br> -->

      <ol><li v-for="report of rg.dast_reports" :key="report.id">
        <RouterLink :to="{ name: 'report', query: { report_id: report.id }}">
          {{ report.generated_ts }} </RouterLink>
        <span v-if="report.alert_uniq_count > 0"> *<sup style="font-size: xx-small;">{{report.alert_uniq_count}}</sup> </span>
        <Mark :n=report.id v-if="APPDBG" />
      </li></ol>

    </div>

  </main>
</template>

<script>
import axios from "axios"
export default {
  props: ['product_id'],
  name: "App",
  data() {
    return {
      product: {},
      report_groups: [],
    };
  },
  async created() {
    try {
      const res1 = await axios.get(`/product/`, {params: {
        // product_id: this.$route.params.product_id
        product_id: this.product_id
      }});
      this.product = res1.data;
      const res2 = await axios.get(`/reports/`, {params: {
        // product_id: this.$route.params.product_id
        product_id: this.product_id
      }});
      this.report_groups = res2.data;
    } catch (error) {
      console.log(error);
    }
  },
}
</script>

<style type="text/css">
.inactive {
  opacity: .5;
}
</style>
