<script setup>
import ProductItem from './ProductItem.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
</script>

<template>

  <h2>Мои продукты</h2>

  <ProductItem v-for="product of products" :key="product.id">

    <template #icon>
      <EcosystemIcon />
    </template>

    <template #heading>
      <RouterLink :to="{ name: 'product', params: { product_id: product.id }}">
        <sup style="font-size: 60%"> :{{product.id}} </sup>
        {{ product.name }}
      </RouterLink>
    </template>

    <code style="font-size: 80%"> {{product.status}} {{product.product_type}} </code>
    <p v-html="product.description" /> <!-- TODO avoid v-html -->
    <p v-if="product.contact_name | product.contact_email">
      Контакты: {{ product.contact_name }} {{ product.contact_email }}
    </p>
    <i style="font-size: 80%"> {{ new Date(product.last_modified_at).toDateString() }} </i>

    <!-- {
      "id": 5,
      "status": "active",
      "name": "ааа",
      "description": "aaa",
      "sol": "ааа",
      "ims": "аааа",
      "ocean": "",
      "product_type": "Разработка",
      "contact_name": "Я",
      "contact_email": "iapr--@smth.tld",
      "location": "Внутреннее",
      "created_at": "2022-03-16T07:36:36.705031",
      "last_modified_at": "2022-03-16T11:58:20.029379"
    } -->

  </ProductItem>

</template>

<script>
import axios from "axios"
export default {
  name: "App",
  data() {
    return {
      products: [],
    };
  },
  async created() {
    try {
      const res = await axios.get(`/products/`);
      this.products = res.data;
    } catch (error) {
      console.log(error);
    }
  },
}
</script>
