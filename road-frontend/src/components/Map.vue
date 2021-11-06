<template>
  <div id="map"></div>
</template>

<script>
export default {
  name: "Map",
  x: 126.570667,
  y: 33.450701,
  data() {
    return {
      map: null,
      marker: null,
    };
  },

  created() {
    this.$root.$refs.Map = this;
  },
  mounted() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.x = position.coords.longitude;
          this.y = position.coords.latitude;

          if (window.kakao && window.kakao.maps) this.initMap();
          else this.loadKakaoMap();
        },
        function(error) {
          this.$ons.notification.alert("error 입니다." + error);
        },
        {
          enableHighAccuracy: false,
          maximumAge: 0,
          timeout: Infinity,
        }
      );
    }
  },

  methods: {
    loadKakaoMap() {
      const script = document.createElement("script");
      /* global kakao */
      script.onload = () => kakao.maps.load(this.initMap);
      script.src =
        "https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=" +
        process.env.VUE_APP_KAKAO_JAVASCRIPT_KEY;
      document.head.appendChild(script);
    },

    initMap() {
      // 맵 초기화
      let container = document.querySelector("#map");

      this.map = new kakao.maps.Map(container, {
        center: new kakao.maps.LatLng(this.y, this.x),
        level: 4,
      });

      this.map.setMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
    },
  },
};
</script>

<style scoped>
#map {
  width: 75%;
  height: 700px;
  margin-right: 0.5rem;
}
</style>
