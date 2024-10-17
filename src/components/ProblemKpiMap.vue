<script setup>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { MapChart, BarChart } from "echarts/charts";
import { TooltipComponent, GridComponent } from "echarts/components";
import VChart from "vue-echarts";
import { ref, onMounted } from "vue";
import * as echarts from "echarts";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

import kazakhstanMap from "../assets/kz.json";
const option = ref({});
const isLoading = ref(false);
use([CanvasRenderer, MapChart, BarChart, TooltipComponent, GridComponent]);

const data = ref([
  { name: "Астана", value: 12 },
  { name: "Алматы", value: 21 },
  { name: "Шымкент", value: 9 },
  { name: "Абайская область", value: 14 },
  { name: "Акмолинская область", value: 57 },
  { name: "Актюбинская область", value: 6 },
  { name: "Алматинская область", value: 43 },
  { name: "Атырауская область", value: 11 },
  { name: "Восточно-Казахстанская область", value: 2 },
  { name: "Жамбылская область", value: 19 },
  { name: "Жетысуская область", value: 3 },
  { name: "Западно-Казахстанская область", value: 28 },
  { name: "Карагандинская область", value: 8 },
  { name: "Костанайская область", value: 21 },
  { name: "Кызылординская область", value: 19 },
  { name: "Мангистауская область", value: 47 },
  { name: "Павлодарская область", value: 12 },
  { name: "Северо-Казахстанская область", value: 1 },
  { name: "Туркестанская область", value: 3 },
  { name: "Улытауская область", value: 43 },
]);

const mapOption = ref({
  id: 0,
  tooltip: {
    trigger: "item",
    formatter: "{b}: {c}",
  },
  series: [
    {
      type: "map",
      map: "kazakhstan",
      roam: false,
      label: {
        show: true,
        formatter: function (params) {
          return params.value;
        },
        fontSize: 25,
        fontWeight: "bold",
        color: "#8694bf",
      },
      emphasis: {
        label: {
          show: true,
          color: "#fff",
        },
        itemStyle: {
          areaColor: "#1ebbe3",
        },
      },
      itemStyle: {
        borderColor: "#fff",
        borderWidth: 2,
        areaColor: "#f1f0f5",
      },
      data: data.value,
      animationDurationUpdate: 1000,
      universalTransition: true,
    },
  ],
});

const barOption = ref({
  id: 1,
  tooltip: {
    trigger: "item",
    formatter: "{b}: {c}",
  },
  xAxis: {
    type: "value",
  },
  yAxis: {
    type: "category",
    axisLabel: {
      rotate: 30,
    },
    data: data.value.map((item) => item.name),
  },
  series: [
    {
      type: "bar",
      itemStyle: {
        color: "#8694bf",
      },
      data: data.value.map((item) => item.value),
      animationDurationUpdate: 1000,
      universalTransition: true,
    },
  ],
});

onMounted(() => {
  option.value = mapOption.value;
  echarts.registerMap("kazakhstan", kazakhstanMap);
});

const onChangeOption = () => {
  isLoading.value = true;
  switch (option.value.id) {
    case 0:
      option.value = barOption.value;
      break;
    case 1:
      option.value = mapOption.value;
      break;
    default:
      break;
  }

  setTimeout(() => {
    isLoading.value = false;
  }, 1800);
};
</script>

<template>
  <div class="container">
    <div class="map-header">
      <div class="text-h6">{{ t("problemPage.problemMap.title") }}</div>
      <q-btn
        padding="sm"
        round
        :loading="isLoading"
        style="color: #656c7d"
        outline
        icon="my_location"
        no-caps=""
        @click="onChangeOption"
      />
    </div>
    <v-chart class="chart" :option="option" autoresize />
  </div>
</template>

<style lang="sass" scoped>
.container
  height: 78vh
  background-color: #fff
  border-radius: 20px
  padding: 20px
  overflow: hidden
.map-header
  display: flex
  justify-content: space-between
  div
    color: #656c7d
    font-weight: bold
    font-size: 20px
</style>
