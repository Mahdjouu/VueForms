<template>
  <div class="page">
  <h2>Ajout d'une publication</h2>
    <div class="form">
    <vue-form-generator :schema="schema" :model="model" :options="formOptions"></vue-form-generator>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueFormGenerator from 'vue-form-generator'
import 'vue-form-generator/dist/vfg.css'
Vue.use(VueFormGenerator)

export default {
    data () {
    return {
      model: {
        nom: "Nom du système",
        description: "Description du système"
      },
      schema: {
        fields: [
          {
            type: 'input',
            inputType: 'text',
            label: 'Nom',
            model: 'nom',
            required: true,
            featured:true,
            preview:true,
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'Description',
            model: 'description',
            placeholder: 'Description du système en question',
            featured: true,
            required: true
          },

        ]
      },
      formOptions: {
        validateAfterLoad: true,
        validateAfterChanged: true,
        validateAsync: true
      }
    }
  }
}
    
</script>