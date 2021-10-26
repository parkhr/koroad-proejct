<template>
  <div class="side-weather-detail">
    weather
    <div>제보정보 (YY.MM.DD.HH)</div>
    <!-- <div>사고정보 (YY.MM.DD.HH)</div>
      <div>CCTV정보 (YY.MM.DD.HH)</div>
      <div>날씨정보 (YY.MM.DD.HH)</div> -->
    <div>도로명</div>
    <div v-for="content in contents" v-bind:key="content">
      {{ content }}
    </div>
  </div>
</template>
