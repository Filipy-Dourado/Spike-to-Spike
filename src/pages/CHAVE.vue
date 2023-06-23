<template>
  <q-page class="flex flex-center">
    <div>
 <h5></h5>
    <form action="#" method="get" class="column items-center">
    <fieldset class="login">

     <div class="q-pa-md">
        <!-- <div class="q-gutter-md row items-start"> -->
      <label>Digite sua chave:</label>
      <q-input  filled :type="isPwd ? 'password' : 'text'" v-model="Senha" name="f-senha" >
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            color="primary"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
       <!-- </div> -->
        </div>
      <div class="relative-position q-pa-md">
        <q-btn class="absolute-center" @click="irHome()" color="primary" label="Enviar"/>
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
  name: 'CHAVE',
  setup (){
   return{
      password: ref(''),
      isPwd: ref(true),
   }
  }

})

</script>

<style scoped>
      alinhar{
        text-align: center;
      }
      .login{
        background-color: white ;
        width: 350px;
        height: 250px;
        border-radius: 20px;
        border-color: #1976D2;
      }
      input{
        width: 260px;
        height: 50px;
        border-radius: 10px;
        margin-left: 30px;
        margin-bottom: 15px;
      }
      fieldset{
        padding-top: 40px;
      }
      p{
        text-align: center;
        margin-top: 10px;
      }
      .cadastrar{
        border-radius: 5px;
        margin-left: 80px;
      }

 </style>

