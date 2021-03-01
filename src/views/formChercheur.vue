<template>
  <div class="page">
  <h2>Ajout d'un chercheur</h2>
    <div class="form">
      <form action="ajoutChercheur.php" method="POST">
        <input
          type="file"
          id="fileselect"
          @change="photoChange"
          accept="image/jpeg, image/png, image/jpg, image/gif"
        />
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
          prenom: '',
          nom: '',
          url: '',
          photo: null
        },
        schema: {
          fields: [
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
            {
              type: 'input',
              inputType: 'text',
              label: 'URL / Site Web',
              model: 'url',
              placeholder: 'www.son_site.fr',
              featured: true,
            },
            {
              type: 'submit',
              onSubmit(model) {
                console.log(model);
                var form_data = new FormData();
                form_data.set("nom", model.nom);
                form_data.set("prenom", model.prenom);
                form_data.set("photo", model.photo);
                form_data.set("fileselect", model.photo);
                form_data.set("url", model.url);
                axios.post("ajoutChercheur.php", form_data)
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
    },
    methods:{
      photoChange(e) {
      this.photo = e.target.files[0];
      }
    }
  }  
</script>