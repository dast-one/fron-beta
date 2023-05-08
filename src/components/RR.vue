<script setup>
import {
  // CCallout,
  CCard,
  CCardBody,
  CCardFooter,
  CCardText,
  // CCardTitle,
} from '@coreui/vue'
</script>

<template>
  <!-- <CCallout color="light" class="ms-3">
    <pre><code><slot name="qry"></slot></code></pre>
    <pre><samp><slot name="res"></slot></samp></pre>
  </CCallout> -->

  <CCard class="ms-3" style="max-width: 700px">
  <CCardBody>
    <!-- <CCardTitle> Пример запроса-ответа </CCardTitle> -->
    <CCardText>
      <pre><code><slot name="qry"></slot></code></pre>
    </CCardText>
  </CCardBody>
  <CCardFooter><pre><samp><slot name="res"></slot></samp></pre></CCardFooter>
  </CCard>

  <!-- <slot></slot> -->
</template>

<style scoped>
pre {
  font-size: x-small;
}
.card-footer {
  max-height: 333px;
  overflow: auto;
}
</style>
