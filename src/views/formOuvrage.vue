<template>
  <div class="page">
  <h2>Ajout d'un ouvrage</h2>
  <p>Si vous ne trouvez pas le nom de l'ouvrage que vous souhaitez ajouter, veuillez vous rendre à l'onglet <router-link to="/formNomOuvrage"> Nom d'ouvrage</router-link> </p>
    <div class="form">
    <vue-form-generator :schema="schema" :model="model" :options="formOptions"> </vue-form-generator>
    </div>
    {{model}}
  </div>
</template>

<script>

  import axios from 'axios';

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
            {
              type: 'submit',
              onSubmit(model) {
                console.log(model);
                  var form_data = new FormData();
                  for ( var key in model ) {
                    form_data.append(key, model[key]);
                  }
                  axios.post("ajoutNomOuvrage.php", form_data)
                  .then(function (response) {console.log(response);})
                  .catch(function (error) {console.log(error);});
              },
              label: '',
              buttonText: "Ajouter",
              validateBeforeSubmit: true
            },
          ]
        },
        formOptions: {
          validateAfterLoad: false,
          validateAfterChange: true,
          validateAsync: true
        }
      }
    }
  }
    
</script>