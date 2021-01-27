<template>
  <div class="page">
  <h2>Ajout d'un nom d'ouvrage</h2>
    <div class="form">
    <vue-form-generator :schema="schema" :model="model" :options="formOptions"></vue-form-generator>
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