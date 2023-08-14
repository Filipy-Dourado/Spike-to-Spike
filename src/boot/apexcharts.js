import VueApexCharts from "vue3-apexcharts";
import Vue from 'vue';
import { boot } from "quasar/wrappers";

 export default boot (({app}) => {
  app.use(VueApexCharts)
 })

