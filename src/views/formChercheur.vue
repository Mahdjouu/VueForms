<template>
  <div class="page">
  <h2>Ajout d'un chercheur</h2>
    <div class="form">
      <form action="ajoutChercheur.php" method="POST">
        <vue-form-generator :schema="schema" :model="model" :options="formOptions"></vue-form-generator>
      </form>
    </div>
    {{model}}
  </div>
</template>

<script>

  import axios from "axios";
  
  export default {

    data: function() {
      return {
        model: {
          photo: null,
          prenom: 'Prénom',
          nom: 'Nom',
          //affiliation:'Affiliation',
          url: 'www.son_site.fr'
        },
        schema: {
          fields: [
            {
              type: "image",
              label: "Photo",
              model: "photo",
              hideInput: true,
              browse: true,
              required: true,
              featured:true,
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
              label: 'Nom',
              model: 'nom',
              placeholder: 'Nom',
              featured: true,
              required: true
            },
            /*{
              type: 'input',
              inputType: 'text',
              label: 'Affiliation',
              model: 'affiliation',
              hint: " (laboratoire)",
              placeholder: 'Affiliation',
              featured: true,
              required: true
            },*/
            {
              type: 'input',
              inputType: 'text',
              label: 'URL / Site Web',
              model: 'url',
              placeholder: 'www.son_site.fr',
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