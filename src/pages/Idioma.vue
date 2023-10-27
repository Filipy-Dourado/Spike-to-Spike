<template>
  <q-page class="column items-center">
   <div style="padding-top: 180px;">
    <q-form class="login" @submit.prevent="handleReset">
     <label style=" font-size: 20px; font-family: The Old English; padding-bottom: 40px;" class="column items-center">MUDAR IDIOMA</label>

    <div class="q-pa-md">
      <q-select class="text-center" v-model="model" use-input use-chips input-debounce="0"
           color="black" rounded borderless :options="options" @filter="filterFn">
           <template v-slot:no-option>
          <q-item>
            <q-item-section class="text-grey">
              No results
            </q-item-section>
          </q-item>
        </template>
          </q-select>

        </div>

      </q-form>
  </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useRouter , useRoute} from 'vue-router'

const stringOptions = ['PT-BR','EN-US']

export default defineComponent({

  data (){

 },

 name: 'IDIOMA',

  setup () {

   const options = ref(stringOptions)

   return {
    options,
    model: ref(null),


    filterFn (val, update, abort) {
        // call abort() at any time if you can't retrieve data somehow

        setTimeout(() => {
          update(
            () => {
              if (val === '') {
                options.value = stringOptions
              }
              else {
                const needle = val.toLowerCase()
                options.value = stringOptions.filter(v => v.toLowerCase().indexOf(needle) > -1)
              }
            },

            // "ref" is the Vue reference to the QSelect
            ref => {
              if (val !== '' && ref.options.length > 0) {
                ref.setOptionIndex(-1) // reset optionIndex in case there is something selected
                ref.moveOptionSelection(1, true) // focus the first selectable option and do not update the input-value
              }
            }
          )
        }, 300)
      },
    }

  }

})

</script>

<style scoped>

   .login{
        width: 300px;
        height: 300px;
        border-color: transparent;
      }

      .q-select {
        border-radius: 20px;
        border: 2px solid black;
        font-family: 'Times New Roman', Times, serif;
        font-size: 17px;
        min-width: 100px;
      }

 </style>
