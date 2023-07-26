<template>

  <q-layout class="layout">
      <!-- <q-header elevated>
        <q-toolbar>
          <q-toolbar-title style="text-align: center">
              Spike to Spike
          </q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-footer elevated>
        <q-toolbar>
          <q-toolbar-title></q-toolbar-title>
        </q-toolbar>
      </q-footer> -->

      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({

  name: 'LoginLayout'
})
</script>
<style scoped>
.q-layout{
   background-image: url('src/assets/IMG5.jpeg');
   background-position: center;
   background-repeat: no-repeat;
     background-size: cover;
   /* background-attachment: fixed; */

  }

@media(max-width: 500px) and (max-height: 900px){
  .q-layout{

  }
}
</style>
