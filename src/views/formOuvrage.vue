<template>
  <div class="page">
  <h2>Ajout d'un ouvrage</h2>
  <p>Si vous ne trouvez pas le nom de l'ouvrage que vous souhaitez ajouter, veuillez vous rendre à l'onglet <router-link to="/formNomOuvrage"> Nom d'ouvrage</router-link> </p>
    <div class="form">
    <vue-form-generator :schema="schema" :model="model" :options="formOptions"> </vue-form-generator>
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
        nom: 'Nom',
        annee: '2021',
        lieu: 'France',
      },
      schema: {
        fields: [
          {
            type: 'select',
            label: 'Nom de l\'ouvrage',
            model: 'nom',
            values: [
              "Nom1",
              "Nom2",
              "Nom3"
            ],
            default: null,
            featured: true,
            required: true
          },
          {
            type: 'input',
            inputType: 'number',
            maxlength: 4,
            label: 'Année de parution',
            model: 'annee',
            default: 2021,
            placeholder: '2021',
            featured: true,
            required: true,
            hint: "L'année est requise doit être un entier. Ex: 2021",
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'Lieu de parution',
            model: 'lieu',
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