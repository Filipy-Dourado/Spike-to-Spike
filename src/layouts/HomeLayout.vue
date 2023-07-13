<template>

  <q-layout>
      <q-header elevated style="background-color: gold;">
        <q-toolbar >
          <q-toolbar-title style="text-align: center; color: black;">
              RATEL
          </q-toolbar-title>

        </q-toolbar>
      </q-header>

      <q-footer elevated style="background-color: gold;" >
        <q-toolbar>
          <q-toolbar-title></q-toolbar-title>
        </q-toolbar>
      </q-footer>

      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({

  name: 'HomeLayout',
  methods: {

 },
})
</script>

<style scoped>
.q-layout{
   background-image: url('src/assets/IMG3.jpeg');
   background-position: center;
   background-repeat: no-repeat;
     background-size: cover;
   /* background-attachment: fixed; */

  }

@media(max-width: 500px) and (max-height: 900px){
  .q-page{

  }
}
</style>
