<template>
  <q-page class="flex flex-center">
    <div>
      <label style="padding-bottom: 40px;" class="column items-center">LOG EM SUA CONTA</label>
    <form class="login">
     <div class="q-pa-md">
         <q-input class="margem" rounded outlined v-model="email" filled type="email" fill-mask="" label="Email">
      <template v-slot:append>
          <q-icon name="email" color="yellow" />
        </template>
      </q-input>
      <q-input rounded outlined filled :type="isPwd ? 'password' : 'text'" v-model="Senha" name="f-senha" label="Password">
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            color="yellow"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
       <!-- </div> -->
        </div>
      <div class="relative-position q-pa-md">
        <q-btn rounded class="absolute-center" @click="irHome()" color="yellow" label="Logar"/>
      </div>
      <div class=" flex flex-center" style="margin-top: 30px;">
          <a class="esqueceu"><q-icon name="help" size="30px" class=""/>Esqueceu a senha?</a>
        </div>
      </form>
  </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
// import router from './router'

export default defineComponent({
  data: function(){
  return{

  }

 },
 methods: {
   irHome() {
      this.$router.push('/home')
   }
 },
  name: 'LOGIN',
  setup (){
   return{
      password: ref(''),
      isPwd: ref(true),
   }
  }

})

</script>

<style scoped>

      .login{
        width: 250px;
        height: 300px;
        border-color:transparent;
      }
      .margem{
          margin-bottom: 30px;
        }
        .esqueceu{
          color: white;
          cursor: pointer;
        }

 </style>

