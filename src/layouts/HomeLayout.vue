<template>

  <q-layout>
      <q-header elevated>
        <q-toolbar>
          <q-toolbar-title style="text-align: center">
              Spike to Spike
          </q-toolbar-title>

        </q-toolbar>
      </q-header>

      <q-footer elevated >
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
</style>
