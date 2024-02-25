<!-- Scan request form. -->

<script setup>
// import Alert from '@/components/Alert.vue'
import {
  CButton,
  CFormCheck,
} from '@coreui/vue'
</script>

<template>
  <main>

    <h3> Base URL </h3>
    <input v-model="burl" placeholder="http[s]://..." />
    <p class="small text-muted">
      Пожалуйста, всегда указывайте схему (протокол) и полное имя DNS.
    </p>

    <p class="small text-muted">
      Что собираемся делать с указанным Base URL:
      <br>
      <CFormCheck type="radio" inline name="gactiontype" label="Web-app/site DAST"
        v-model="actiontype" value="webdast"/>
      <CFormCheck type="radio" inline name="gactiontype" label="API Fuzzing"
        v-model="actiontype" value="apifuzz"/>
    </p>

    <div v-if="actiontype === 'apifuzz'">
      <h3> API Spec </h3>
      <CButton color="dark" variant="ghost" size="sm"
               v-if="!!oas"
               @click="this.$refs.file.value = null; oas = null;"
      > clear </CButton>
      <input ref="file" v-on:change="handleFileUpload($event)" type="file">
      <p class="small text-muted">
        Для API Fuzzing загрузите сюда спецификацию (Swagger/OpenAPI).
        <br>
        Убедитесь, что Base URL согласуется с путями endpoint'ов в спецификации.
      </p>
    </div>

    <h3> Necessary headers </h3>
    <textarea v-model="hdrs" placeholder="Authorization: Bearer ...klmn...&#10;Yet-Another-Header: its_value&#10;..."></textarea>
    <p class="small text-muted">
      <strong>Hint:</strong> Можно сюда подставить, например, <code class="small text-muted">cookie: ...</code>, которую можно вытащить из dev-tools браузера после аутентификации в вашем приложении.
    </p>



    <!-- <br><br><hr>

    <h3> Pre-scan
      <button class="btn-check">   check   </button>
    </h3>
    <pre style="white-space: pre-line; font-family: monospace;">
      curl -i -X GET \
    </pre>
    <pre v-if="hdrs" v-for="s of hdrs.split('\n')">  -H '{{ s }}' \ </pre>
    <pre v-if="burl" >  '{{ burl }}' </pre>
    <br> -->

    <!-- <br><br><hr>

    <h3 style="opacity: .5;"> Get ready and
      <button class="btn-fire" disabled>   fire!   </button>
    </h3>
    <p> <span style="opacity: .5;">Scanning restricted</span> until all the checks passed: </p>
    <ul>      
      <li v-if="!burl"> URL is not empty </li>
      <li v-if="false"> API spec. loaded is valid </li>      
      <li> [HAX?] got your acknowledgement </li>
      <li> Please put $10 in drive A: </li>
    </ul> -->

    <h3> Get ready and
      <!-- <button class="btn-fire" @click="requestScan" :disabled="!burl ? true : null">   fire!   </button> -->
      <CButton color="danger" variant="outline"
               :disabled="!burl ? true : null"
               @click="requestScan"
      > FIRE </CButton>
    </h3>
    <p class="small text-muted">
      <em>"Нажимая эту кнопку, <strong>я понимаю,</strong> что негативное тестирование предполагает заведомо невалидную нагрузку на сервисы, <strong>и подтверждаю</strong>, что имею право сделать это с тем, что указано в Base URL."</em>
    </p>

  </main>
</template>

<script>
  import axios from "axios"

  export default {
    name: "App",
    data() {
      return {
          actiontype: 'webdast',
          burl: '',
          hdrs: '',
          oas: null,
          link_to: 'app://fd/vuapi',
      };
    },
    methods: {
      handleFileUpload(event){
        this.oas = event.target.files[0];
      },
      requestScan(){
        let formData = new FormData();
        formData.append('base_url', this.burl);
        formData.append('headers', this.hdrs);
        formData.append('link_to', this.link_to);
        if (this.oas) {
          formData.append('file', this.oas);
        }
        axios.post('/scanreq', formData,
          // { headers: {'Content-Type': 'multipart/form-data'}, }
        );
      },
    }
  }
</script>

<style scoped>
  button {
/*    font-size: large;*/
    font-weight: bolder;
    font-variant: small-caps;
  }
/*  .btn-check {
    color: hsl(40, 80%, 50%);
  }
  .btn-fire {
    color: hsl(25, 80%, 50%);
  }*/
  input, textarea {
    width: 80%;
    font-size: 14px;
    font-family: monospace;
  }
</style>
