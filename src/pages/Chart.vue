<template>
  <q-page class="flex flex-center">
    <apexchart type="area"  height="500px" width="700px" :options="chartOptions" :series="series"></apexchart>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useQuasar } from 'quasar';
import apexchart from 'src/boot/apexcharts';



export default defineComponent({
  data (){
  return{
    series: [{
            name: 'Volume de compra',
            data: [31, 40, 28, 51, 42, 109, 100],
          }, {
            name: 'Volume de venda',
            data: [11, 32, 45, 32, 34, 52, 41]
          }],

          chartOptions: {
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'smooth'
            },
            xaxis: {
              type: 'datetime',
              categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
            },
            tooltip: {
              x: {
                format: 'dd/MM/yy HH:mm'
              },
              y: {

              }
            },
          },

  }

 },

  name: 'CHART',


  setup (){

  return{

  }

 }

})

</script>


<style scoped>
.apexcharts-menu-icon, .apexcharts-reset-icon, .apexcharts-zoom-icon {
    transform: inherit;
    display: none;
    position: fixed;
}

.q-page{

  }

@media(max-width: 500px) and (max-height: 900px){
  .q-page{

  }
}
 </style>
