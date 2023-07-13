<template>

  <q-layout>

      <!-- <q-header elevated>
        <q-toolbar>
          <q-toolbar-title style="position: center">
              Exchange
          </q-toolbar-title>

        </q-toolbar>
      </q-header> -->

      <!-- <q-footer elevated>
        <q-toolbar>
          <q-toolbar-title>teste</q-toolbar-title>
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

  name: 'AcessoLayout',

})
</script>
<style scoped>

 .q-layout{
   background-image: url('src/assets/IMG8.jpeg');

   background-position: center;
   background-repeat: no-repeat;
     background-size: cover;
   /* background-attachment: fixed; */

  }

@media(max-width: 500px) and (max-height: 900px){
  .q-layout{
   background-image: url('src/assets/IMGm8.jpeg');
  }
}


</style>
