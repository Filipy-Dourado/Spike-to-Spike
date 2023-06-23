<template>
  <q-page class="flex flex-center">
    <div>
      <label style="font-size: 20px;" class="column items-center">RESPEITAMOS A SUA</label>
      <label style="padding-bottom: 120px; font-size: 20px;" class="column items-center">PRIVACIDADE</label>
    <form action="#" method="get" class="column items-center">
    <fieldset class="login">
     <div class="q-pa-md">
      <q-input class="margem" outlined rounded color="white" :type="isPwd ? 'password' : 'text'" v-model="Senha" name="f-senha" >
        <!-- <template v-slot:append>
          <q-icon name="key" color="yellow" />
        </template> -->
      </q-input>
        </div>
      <div class="relative-position q-pa-md">
        <q-btn rounded class="absolute-center" color="yellow" label="Gerar chave"/>
      </div>
    </fieldset>
        </form>


  </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
// import router from './router'

export default defineComponent({
  data: function(){

 },
 methods: {
   irHome() {
      this.$router.push('/home')
   }
 },
  name: 'PRIVADO',
  setup (){

  }

})

</script>

<style scoped>
      .login{
        width: 300px;
        height: 300px;
        border-color: transparent;
      }
      fieldset{
        padding-top: 40px;
      }
      .margem{
          margin-bottom: 30px;
        }
 </style>

