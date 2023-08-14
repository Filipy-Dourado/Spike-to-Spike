<template>

  <q-layout>
      <q-header style="background-color: transparent;">
        <q-toolbar style="position: fixed;">
          <q-toolbar-title class="column items-center" style="color: black;">
          </q-toolbar-title>

      <q-btn-dropdown flat   color="yellow" icon="person" text-color="black">
      <q-list>
        <q-item clickable v-close-popup >
          <q-item-section>
            <q-item-label>Área do usuário</q-item-label>
          </q-item-section>
         </q-item>
         <q-item clickable v-close-popup >
          <q-item-section>
            <q-item-label>Idioma</q-item-label>
          </q-item-section>
        </q-item>
        <q-item   clickable v-close-popup >
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
import useAuthUser from 'src/composables/UseAuthUser';
import {useRouter} from 'vue-router';
import { useQuasar } from 'quasar';
import router from 'src/router';

export default defineComponent({

  name: 'HomeLayout',

  setup () {

   const $q = useQuasar ()

   const router = useRouter()

   const {logout} = useAuthUser ()

   const handleLogout = async () => {
    $q.dialog({
      title: 'Sair da Ratel',
      message: 'Tem certeza que deseja deslogar da sua conta?',
      cancel: true,
      persistent: true
    }).onOk (async () => {
       await logout()
       router.replace({name: 'login'})
    })
   }
    return {
    handleLogout
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

