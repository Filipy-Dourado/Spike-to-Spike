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
   .layout{
  background:rgb(233, 147, 17);
  background: radial-gradient(
    circle,
    rgba(233, 147, 17, 1) 0%,
    rgba(245, 181, 8, 1) 100%
  );
      }
</style>
