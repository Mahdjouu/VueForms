<template>
  <div class="page">
  <h2>Ajout d'une publication</h2>
    <div class="form">
      <form action="ajoutSysteme.php" method="POST">
        <vue-form-generator :schema="schema" :model="model" :options="formOptions"></vue-form-generator>
      </form>
    </div>
    {{model}}
  </div>
</template>

<script>

  import axios from 'axios';

  export default {
      data: function() {
      return {
        model: {
          nom: "",
          description: ""
        },
        schema: {
          fields: [
            {
              type: 'input',
              inputType: 'text',
              label: 'Nom',
              model: 'nom',
              placeholder: 'Nom du système',
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
            {
              type: 'submit',
              onSubmit(model) {
                console.log(model);
                  var form_data = new FormData();
                  for ( var key in model ) {
                    form_data.append(key, model[key]);
                  }
                  axios.post("ajoutSysteme.php", form_data)
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