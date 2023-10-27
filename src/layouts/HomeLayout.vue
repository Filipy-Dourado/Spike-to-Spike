<template>

  <q-layout>
      <q-header style="background-color: transparent;">
        <q-toolbar style="position: fixed;">
          <q-toolbar-title class="column items-center" style="color: black;">
          </q-toolbar-title>

      <q-btn-dropdown flat   color="yellow" icon="person" text-color="black">
      <q-list>
        <q-item clickable v-close-popup >
          <q-item-section @click="IrHome()">
            <q-item-label>Ofertas</q-item-label>
          </q-item-section>
         </q-item>
        <q-item clickable v-close-popup >
          <q-item-section @click="IrUsuário()">
            <q-item-label>Área do usuário</q-item-label>
          </q-item-section>
         </q-item>
         <q-item clickable v-close-popup >
          <q-item-section @click="irIdioma()">
            <q-item-label>Idioma</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-close-popup >
          <q-item-section>
            <q-item-label @click="handleLogout" >Sair</q-item-label>
          </q-item-section>
        </q-item>
        </q-list>
        </q-btn-dropdown>

        </q-toolbar>

      </q-header>



      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
</template>
<script>
import { defineComponent, ref } from 'vue';


export default defineComponent({

  name: 'HomeLayout',

  setup () {


  },

  methods:{

  irIdioma(){
  this.$router.push('/idioma')
 },

  IrUsuário(){
    this.$router.push('/area-do-usuario')
  },

  IrHome(){
    this.$router.push('/home')
  }
}


})
</script>

<style scoped>
.q-layout{

   /* background-image: url('src/assets/IMG3.jpeg'); */
   background-position: center;
   background-repeat: no-repeat;
   background-size: auto;

  }

@media(max-width: 500px) and (max-height: 900px){
  .q-layout{

  }
}
</style>

