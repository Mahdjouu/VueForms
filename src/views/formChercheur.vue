<template>
  <div class="page">
  <h2>Ajout d'un chercheur</h2>
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
        avatar: null,
        prenom: 'Prénom',
        nom: 'Nom',
        url: 'www.son_site.fr'
      },
      schema: {
        fields: [
          {
            type: "image",
            label: "Photo",
            model: "avatar",
            hideInput: true,
            required: true,
            featured:true,
            browse: true,
            preview:true,
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'Prénom',
            model: 'prenom',
            placeholder: 'Prénom',
            featured: true,
            required: true
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'Name',
            model: 'nom',
            placeholder: 'Nom',
            featured: true,
            required: true
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'URL / Site Web',
            model: 'url',
            placeholder: 'www.son_site.fr',
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