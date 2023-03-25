<!-- Scan request form. -->

<script setup>
// import Alert from '@/components/Alert.vue'
</script>

<template>
  <main>

    <h3> Base URL </h3>
    <!-- <p> Base URLBase URLBase URLBase URLBase URLBase URL </p> -->
    <input v-model="burl" placeholder="http[s]://..." />

    <h3> API Spec (Swagger/OpenAPI) </h3>
    <!-- <p> API SpecAPI SpecAPI SpecAPI SpecAPI SpecAPI Spec </p> -->
    <input ref="file" v-on:change="handleFileUpload($event)" type="file">

    <h3> Necessary headers </h3>
    <!-- <p> Headers Headers Headers Headers Headers Headers </p> -->
    <textarea v-model="hdrs" placeholder="Authorization: Bearer ...klmn...&#10;Yet-Another-Header: its_value&#10;..."></textarea>



    <br><br><hr>

    <h3> Pre-scan
      <button class="btn-check">   check   </button>
    </h3>
    <!-- <p> Such `curl`(s) gonna be issued: </p> -->
    <pre style="white-space: pre-line; font-family: monospace;">
      curl -i -X GET \
    </pre>
    <pre v-if="hdrs" v-for="s of hdrs.split('\n')">  -H '{{ s }}' \ </pre>
    <pre v-if="burl" >  '{{ burl }}' </pre>
    <br>

    <br><br><hr>

    <h3 style="opacity: .5;"> Get ready and
      <button class="btn-fire" disabled>   fire!   </button>
    </h3>
    <p> <span style="opacity: .5;">Scanning restricted</span> until all the checks passed: </p>
    <ul>      
      <li v-if="!burl"> URL is not empty </li>
      <li v-if="false"> API spec. loaded is valid </li>      
      <!-- <li> got your acknowledgement </li> -->
      <li> Please put $10 in drive A: </li>
    </ul>

  </main>
</template>

<script>
  import axios from "axios"

  export default {
    name: "App",
    data() {
      return {
          burl: '',
          hdrs: '',
      };
    },
    methods: {
      handleFileUpload(event){
        let formData = new FormData();
        formData.append('file', event.target.files[0]);
        axios.post('/up', formData,
          // { headers: {'Content-Type': 'multipart/form-data'}, }
        );
      },
    }
  }
</script>

<style scoped>
  button {
    font-size: large;
    font-weight: bolder;
    font-variant: small-caps;
  }
  .btn-check {
    color: hsl(40, 80%, 50%);
  }
  .btn-fire {
    color: hsl(25, 80%, 50%);
  }
  input, textarea {
    width: 80%;
    font-size: 14px;
    font-family: monospace;
  }
</style>
