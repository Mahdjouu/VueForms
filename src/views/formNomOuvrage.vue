<template>
  <div class="page">
  <h2>Ajout d'un nom d'ouvrage</h2>
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
        nom: 'Nom de l\'ouvrage',
        abbreviation: 'Abbr',
        type: 'conference',
      },
      schema: {
        fields: [
          {
            type: 'input',
            inputType: 'text',
            label: 'Nom de l\'ouvrage',
            model: 'nom',
            placeholder: 'Nom de l\'ouvrage',
            featured: true,
            required: true
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'Abbréviation',
            model: 'abbreviation',
            placeholder: 'Abbr',
            featured: true,
            required: true
          },
          {
            type: 'radios',
            label: 'Type d\'ouvrage',
            model: 'type',
            values: [
              "conférence",
              "journal",
              "livre"
            ],
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