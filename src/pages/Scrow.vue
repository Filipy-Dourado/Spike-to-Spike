<template>
  <q-page class="column items-center">
    <div class="login">
       <label class="column items-center" style="font-family: The Old English; padding-bottom: 40px; font-size: 20px;">TABELA DE SCROW</label>

       <div class="column items-center">
        <q-tabs>
        <q-btn-dropdown auto-close stretch flat class="column items-center">
          <template v-slot:label>
            <div>
              <div class="row justify-around items-center no-wrap">
                <q-icon name="money" />
              </div>
              <div class="row items-center no-wrap">
                Moeda
              </div>
            </div>
          </template>

          <q-list>
            <q-item clickable @click="tab = 'movies'">
              <q-item-section>USD</q-item-section>
            </q-item>

            <q-item clickable @click="tab = 'photos'">
              <q-item-section>BRL</q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
        </q-tabs>
       </div>

     <q-list>
      <q-item clickable v-ripple>
        <q-item-section class="column items-center">
          <q-item-label style="font-weight: bold;">50-200 BRL</q-item-label>
        </q-item-section>
      <q-separator vertical/>
        <q-item-section class="column items-center">
          <q-item-label style="font-weight: bold;">20.000 Sats</q-item-label>
        </q-item-section>
      </q-item>
       <q-separator/>

      <q-item clickable v-ripple>
        <q-item-section class="column items-center">
          <q-item-label style="font-weight: bold;">201-400 BRL</q-item-label>
        </q-item-section>
      <q-separator vertical/>
        <q-item-section class="column items-center">
          <q-item-label style="font-weight: bold;">150.000 Sats</q-item-label>
        </q-item-section>
      </q-item>
       <q-separator/>

      <q-item clickable v-ripple>
        <q-item-section class="column items-center">
          <q-item-label style="font-weight: bold;">401-600 BRL</q-item-label>
        </q-item-section>
      <q-separator vertical/>
        <q-item-section class="column items-center">
          <q-item-label style="font-weight: bold;">300.000 Sats</q-item-label>
        </q-item-section>
      </q-item>
       <q-separator/>

      <q-item clickable v-ripple>
        <q-item-section class="column items-center">
          <q-item-label style="font-weight: bold;">50-200</q-item-label>
        </q-item-section>
      <q-separator vertical/>
        <q-item-section class="column items-center">
          <q-item-label style="font-weight: bold;">20.000</q-item-label>
        </q-item-section>
      </q-item>
       <q-separator/>

      <q-item clickable v-ripple>
        <q-item-section class="column items-center">
          <q-item-label style="font-weight: bold;">50-200</q-item-label>
        </q-item-section>
      <q-separator vertical/>
        <q-item-section class="column items-center">
          <q-item-label style="font-weight: bold;">20.000</q-item-label>
        </q-item-section>
      </q-item>
        <q-separator/>

      <q-item clickable v-ripple>
        <q-item-section class="column items-center">
          <q-item-label style="font-weight: bold;">50-200</q-item-label>
        </q-item-section>
      <q-separator vertical/>
        <q-item-section class="column items-center">
          <q-item-label style="font-weight: bold;">20.000</q-item-label>
        </q-item-section>
      </q-item>
       <q-separator/>

      <q-item clickable v-ripple>
        <q-item-section class="column items-center">
          <q-item-label style="font-weight: bold;">50-200</q-item-label>
        </q-item-section>
      <q-separator vertical/>
        <q-item-section class="column items-center">
          <q-item-label style="font-weight: bold;">20.000</q-item-label>
        </q-item-section>
      </q-item>
       <q-separator/>
      <q-item clickable v-ripple>
        <q-item-section class="column items-center">
          <q-item-label style="font-weight: bold;">50-200</q-item-label>
        </q-item-section>
      <q-separator vertical/>
        <q-item-section class="column items-center">
          <q-item-label style="font-weight: bold;">20.000</q-item-label>
        </q-item-section>
      </q-item>
       <q-separator/>
      <q-item clickable v-ripple>
        <q-item-section class="column items-center">
          <q-item-label style="font-weight: bold;">50-200</q-item-label>
        </q-item-section>
      <q-separator vertical/>
        <q-item-section class="column items-center">
          <q-item-label style="font-weight: bold;">20.000</q-item-label>
        </q-item-section>
      </q-item>
       <q-separator/>
      <q-item clickable v-ripple>
        <q-item-section class="column items-center">
          <q-item-label style="font-weight: bold;">50-200</q-item-label>
        </q-item-section>
      <q-separator vertical/>
        <q-item-section class="column items-center">
          <q-item-label style="font-weight: bold;">20.000</q-item-label>
        </q-item-section>
      </q-item>
       <q-separator/>
      <q-item clickable v-ripple>
        <q-item-section class="column items-center">
          <q-item-label style="font-weight: bold;">50-200</q-item-label>
        </q-item-section>
      <q-separator vertical/>
        <q-item-section class="column items-center">
          <q-item-label style="font-weight: bold;">20.000</q-item-label>
        </q-item-section>
      </q-item>

    </q-list>
    </div>

  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'


// import router from './router'

export default defineComponent({
  data (){
   return {
   }


 },

  name: 'SCROW',

  setup (){

 },

})

</script>

<style scoped>
.login{
        width: 380px;
        height: 670px;
        background-color: gold;
        border: solid 1px black;
        border-radius: 25px;
        margin-top: 150px;
      }

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
