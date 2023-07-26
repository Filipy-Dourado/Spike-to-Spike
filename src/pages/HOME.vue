<template>
  <q-page padding class="">
  <div class="column items-center">
    <label style=" font-size: 30px; font-family: The Old English; margin-bottom: 40px; font-weight: bold;
    margin-top: 25px;" class="column items-center">Ofertas</label>
    <div class="flex items-baseline">
      <q-btn-group push  style=" margin-bottom: 22px;">
      <q-btn color="yellow" text-color="black" icon="language" push label="País"/>
      <q-btn color="amber" text-color="black"  icon="shop" push label="Compra" />
      <q-btn color="yellow" text-color="black" icon="sell" push label="Venda" />
      <q-btn color="amber" text-color="black" icon="payment" push label="Pagamento"/>
      <q-btn color="yellow" text-color="black" icon="timeline" push label="Destino" />
    </q-btn-group>
  </div>
    </div>

    <div class="q-pa-md">
    <q-list>
      <q-item>
        <q-item-section side top>
          <q-icon name="circle" color="green" />
          <q-item-label caption> </q-item-label>
        </q-item-section>
        <q-item-section avatar>
          <q-avatar style="font-size: 60px;">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
          <div v-if="user">
            <q-item-label style="font-weight: bold;">{{ user.user_metadata.name }}</q-item-label>
          </div>
        </q-item-section>
        <!-- <q-icon name="star" color="yellow" /> -->
        <q-item-section>
          <q-item-label style="font-weight: bold;">Sats</q-item-label>
          <q-item-label> 120.000</q-item-label>
          <q-item-label style="font-weight: bold;">BRL/BTC</q-item-label>
          <q-item-label>350.000</q-item-label>

        </q-item-section>
        <q-item-section>
          <q-item-label style="font-weight: bold;">Expiry</q-item-label>
          <q-item-label> 3 hs</q-item-label>
          <q-item-label style="font-weight: bold;">Bond</q-item-label>
          <q-item-label> 5%</q-item-label>
        </q-item-section>
        <q-item-section>
          <q-item-label style="font-weight: bold;">Premium</q-item-label>
          <q-item-label> 3%</q-item-label>
          <q-item-label style="font-weight: bold;">Timer</q-item-label>
          <q-item-label> 50 hs</q-item-label>
        </q-item-section>
      </q-item>
    <q-separator spaced inset />

    <q-item>
      <q-item-section side top>
          <q-icon name="circle" color="green" />
          <q-item-label caption> </q-item-label>
        </q-item-section>
        <q-item-section avatar>
          <q-avatar style="font-size: 60px;">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
        </q-item-section>
        <!-- <q-icon name="star" color="yellow" /> -->
        <q-item-section>
          <q-item-label style="font-weight: bold;">Sats</q-item-label>
          <q-item-label> 120.000</q-item-label>
          <q-item-label style="font-weight: bold;">BRL/BTC</q-item-label>
          <q-item-label>350.000</q-item-label>
        </q-item-section>
        <q-item-section>
          <q-item-label style="font-weight: bold;">Expiry</q-item-label>
          <q-item-label> 3 hs</q-item-label>
          <q-item-label style="font-weight: bold;">Bond</q-item-label>
          <q-item-label> 5%</q-item-label>
        </q-item-section>
        <q-item-section>
          <q-item-label style="font-weight: bold;">Premium</q-item-label>
          <q-item-label> 3%</q-item-label>
          <q-item-label style="font-weight: bold;">Timer</q-item-label>
          <q-item-label> 50 hs</q-item-label>
        </q-item-section>
        <q-item-section side top>
          <q-item-label caption></q-item-label>
        </q-item-section>
      </q-item>
    <q-separator spaced inset />

    <q-item>
      <q-item-section side top>
          <q-icon name="circle" color="green" />
          <q-item-label caption> </q-item-label>
        </q-item-section>
        <q-item-section avatar>
          <q-avatar style="font-size: 60px;">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
        </q-item-section>
        <!-- <q-icon name="star" color="yellow" /> -->
        <q-item-section>
          <q-item-label style="font-weight: bold;">Sats</q-item-label>
          <q-item-label> 120.000</q-item-label>
          <q-item-label style="font-weight: bold;">BRL/BTC</q-item-label>
          <q-item-label>350.000</q-item-label>
        </q-item-section>
        <q-item-section>
          <q-item-label style="font-weight: bold;">Expiry</q-item-label>
          <q-item-label> 3 hs</q-item-label>
          <q-item-label style="font-weight: bold;">Bond</q-item-label>
          <q-item-label> 5%</q-item-label>
        </q-item-section>
        <q-item-section>
          <q-item-label style="font-weight: bold;">Premium</q-item-label>
          <q-item-label> 3%</q-item-label>
          <q-item-label style="font-weight: bold;">Timer</q-item-label>
          <q-item-label> 50 hs</q-item-label>
        </q-item-section>
        <q-item-section side top>
          <q-item-label caption></q-item-label>
        </q-item-section>
      </q-item>
    <q-separator spaced inset />

    <q-item>
      <q-item-section side top>
          <q-icon name="circle" color="green" />
          <q-item-label caption> </q-item-label>
        </q-item-section>
        <q-item-section avatar>
          <q-avatar style="font-size: 60px;">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
        </q-item-section>
        <!-- <q-icon name="star" color="yellow" /> -->
        <q-item-section>
          <q-item-label style="font-weight: bold;">Sats</q-item-label>
          <q-item-label> 120.000</q-item-label>
          <q-item-label style="font-weight: bold;">BRL/BTC</q-item-label>
          <q-item-label>350.000</q-item-label>
        </q-item-section>
        <q-item-section>
          <q-item-label style="font-weight: bold;">Expiry</q-item-label>
          <q-item-label> 3 hs</q-item-label>
          <q-item-label style="font-weight: bold;">Bond</q-item-label>
          <q-item-label> 5%</q-item-label>
        </q-item-section>
        <q-item-section>
          <q-item-label style="font-weight: bold;">Premium</q-item-label>
          <q-item-label> 3%</q-item-label>
          <q-item-label style="font-weight: bold;">Timer</q-item-label>
          <q-item-label> 50 hs</q-item-label>
        </q-item-section>
        <q-item-section side top>
          <q-item-label caption></q-item-label>
        </q-item-section>
      </q-item>
    <q-separator spaced inset />

    <q-item>
      <q-item-section side top>
          <q-icon name="circle" color="green" />
          <q-item-label caption> </q-item-label>
        </q-item-section>
        <q-item-section avatar>
          <q-avatar style="font-size: 60px;">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
        </q-item-section>
        <!-- <q-icon name="star" color="yellow" /> -->
        <q-item-section>
          <q-item-label style="font-weight: bold;">Sats</q-item-label>
          <q-item-label> 120.000</q-item-label>
          <q-item-label style="font-weight: bold;">BRL/BTC</q-item-label>
          <q-item-label>350.000</q-item-label>
        </q-item-section>
        <q-item-section>
          <q-item-label style="font-weight: bold;">Expiry</q-item-label>
          <q-item-label> 3 hs</q-item-label>
          <q-item-label style="font-weight: bold;">Bond</q-item-label>
          <q-item-label> 5%</q-item-label>
        </q-item-section>
        <q-item-section>
          <q-item-label style="font-weight: bold;">Premium</q-item-label>
          <q-item-label> 3%</q-item-label>
          <q-item-label style="font-weight: bold;">Timer</q-item-label>
          <q-item-label> 50 hs</q-item-label>
        </q-item-section>
        <q-item-section side top>
          <q-item-label caption></q-item-label>
        </q-item-section>
      </q-item>
      <q-separat spaced inset />
    </q-list>

  </div>
</q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import useAuthUser from 'src/composables/UseAuthUser'

// import router from './router'

export default defineComponent({
  data (){
   return

 },

  name: 'HOME',
  setup (){
 const {user} = useAuthUser()


 return {
  user,
  }
 },

})

</script>

<style scoped>
.q-toolbar{
  width:auto;
}
     .q-item{
      cursor: pointer;
     }


      @media(max-width: 390px){
        .q-btn{
          width: 75px;
        }

      }
 </style>
