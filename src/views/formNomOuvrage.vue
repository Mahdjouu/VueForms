<template>
  <div class="page">
  <h2>Ajout d'un nom d'ouvrage</h2>
    <div class="form">
      <form action="ajoutNomOuvrage.php" method="POST">
        <vue-form-generator :schema="schema" :model="model" :options="formOptions"></vue-form-generator>
      </form>
    </div>
    {{model}}
  </div>
</template>

<script>

  const axios = require('axios');

  export default {
    
      data: function() {
      return {
        model: {
          nom: '',
          abbreviation: '',
          type: '',
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
                form_data.set("nom", model.nom);
                form_data.set("abbreviation", model.abbreviation);
                form_data.set("type", model.type);
                  axios.post("ajoutNomOuvrage.php", form_data)
                  .then(function (response) {console.log(response);})
                  .catch(function (error) {console.log(error);});
              },
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