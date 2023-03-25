<script setup>
import {
  CCol, CRow,
  // CCallout,
  CCard,
  CCardBody,
  CCardFooter,
  CCardImage,
  CCardText,
  CCardTitle, CCardSubtitle,
  CImage,
} from '@coreui/vue'
</script>

<template>
  <div class="about">
    <!-- <h1>This is an about page</h1> -->

    <div>
      <!-- <h2>DAST #ONE</h2> -->
      <CRow class="g-0">
        <CCol :md="4">
          <!-- https://www.maxpixel.net/Rabbit-Easter-Bunny-Cute-Hare-Cartoon-Easter-6141260
          License use Creative Commons Zero - CC0. A referral link to Max Pixel (not required). -->
          <CImage align="center" rounded src="src/assets/rabbit6141260m.png" height="120" />
        </CCol>
        <CCol :md="8">
            <h2> DAST #ONE </h2>
            <small> <em> Распушите то, что написал ваш кролик </em> </small>
            <p class="text-muted" style="font-size: small;">
              <span style="font-size: smaller;"> пер. Google Translate, оригинал: </span>
              <br>
              <em>"Fuzz the stuff your bunny wrote"</em> &mdash; dast.one
            </p>
        </CCol>
      </CRow>

      <br><hr><br>

      <p> Динамическому тестированию (DAST, Fuzzing) подвергается развёрнутый экземпляр приложения (web-приложение, API). </p>
      <p> Для тестирования единичного сервиса требуется: </p>
      <ol>
        <li>
          точка входа, URL
          <p class="small text-muted">
            +список исключений, которые не следует сканировать, например, url смежных сервисов, logout-paths;
          </p>
        </li>
        <li>
          учётная запись, auth-токен, заголовок
          <p class="small text-muted">
            либо алгоритм получения соотв. токена/заголовка/cookie;
          </p>
        </li>
        <li>
          API-спецификация
          <p class="small text-muted">
            если объект исследования - API, то нужна его спецификация в машиночитаемом виде (Swagger/OpenAPI), в крайнем случае хотя бы примеры вызовов;
          </p>
        </li>
      </ol>
      <p> и главное &mdash; понимание, что негативное тестирование предполагает заведомо невалидную нагрузку на сервисы. Ровно поэтому рекомендуем подвергать тестированию только "staging"-компоненты. </p>

      <br><hr><br>
      
      <!-- <h3>Something fuzzy and dynamic is coming.</h3> -->
      <p style="font-size: 80%;">
        <span class="blur1"> Something fuzzy and dynamic is </span>
        <span class="blur2"> coming. Somethi/g fuzynaming. </span>
        <span class="blur3"> Something fuzzy and ﷺdyis coming. </span>
        <span class="blur4"> Something fuzzy and Something </span>
        <span class="blur5"> fuzzy and dynamic ﷐is 󠁫comin+/v+g. </span>
        <span class="blur6"> dynami⁠c �������is 󠁫coming. </span>
        <span class="blur7"> �g�in󠠀�g�in򠠠����g�in󠠀�g�i󠀢n </span>
      </p>
      <p class="blur1" style="font-size: 80%; margin-top: .5em;"> – as it `radamsa` says </p>
    </div>

  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
.blur1 {
  opacity: .8;
  text-shadow: 0 0 5px rgba(0,0,0,0.1);
}
.blur2 {
  opacity: .8;
  text-shadow: 0 0 5px rgba(0,0,0,0.2);
}
.blur3 {
  opacity: .7;
  text-shadow: 0 0 5px rgba(0,0,0,0.3);
}
.blur4 {
  opacity: .6;
  text-shadow: 0 0 5px rgba(0,0,0,0.4);
}
.blur5 {
  opacity: .5;
  text-shadow: 0 0 5px rgba(0,0,0,0.5);
}
.blur6 {
  opacity: .4;
  text-shadow: 0 0 5px rgba(0,0,0,0.6);
}
.blur7 {
  opacity: .3;
  text-shadow: 0 0 5px rgba(0,0,0,0.9);
}
</style>
