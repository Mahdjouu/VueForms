<template>
  <div class="page">
    <h2>Ajout d'une publication</h2>
      <p>Si vous ne trouvez pas l'ouvrage que vous souhaitez ajouter, veuillez vous rendre à l'onglet <router-link to="/formOuvrage"> Ouvrage</router-link> </p>
    <div class="form">
      <form action="ajoutPublication.php" method="POST">
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

  import axios from 'axios';

  export default {
      data: function() {
      return {
        model: {
          photo: null,
          titre: "",
          resume: "",
          ouvrage: "",
          nb_pages: null,
          numero: null,
          volume : null,
          url:""
        },
        schema: {
          fields: [

            {
              type: 'input',
              inputType: 'text',
              label: 'Titre',
              model: 'titre',
              placeholder: 'Titre',
              featured: true,
              required: true
            },
            {
              type: 'textArea',
              label: 'Résumé de l\'article',
              placeholder: 'Résumé de l\'article',
              model: 'resume',
              featured: true,
              required: true,
            },
            {
              type: 'select',
              label: 'Ouvrage',
              model: 'ouvrage',
              values:[
                "Ouvrage1",
                "Ouvrage2",
                "Ouvrage3",
                "Ouvrage4"
              ],
              placeholder: 'Ouvrage',
              featured: true,
              required: true,
            },
            {
              type: 'input',
              inputType: 'number' ,
              label: 'Nombre de pages',
              placeholder: '0',
              model: 'nb_pages',
              maxlength: 10,
              featured: true,
              hint: "Le nombre de pages est requis et doit être un entier. Ex: 50"
            },
            {
              type: 'input',
              inputType: 'number' ,
              label: 'Numéro',
              model: 'numero',
              placeholder: '0',
              maxlength: 5,
              featured: true,
              hint: "Le numéro est requis et doit être un entier. Ex: 2"
            },
            {
              type: 'input',
              inputType: 'number' ,
              label: 'Volume',
              model: 'volume',
              placeholder: '0',
              maxlength: 5,
              featured: true,
              hint: "Le volume est requis et doit être un entier. Ex: 3"
            },
            {
              type: 'input',
              inputType: 'text',
              label: 'Lien / URL',
              model: 'url',
              placeholder: 'www.site-de-larticle.fr',
              featured: true,
            },
            {
              type: 'submit',
              onSubmit(model) {
                console.log(model);
                  var form_data = new FormData();
                  for ( var key in model ) {
                    form_data.append(key, model[key]);
                  }
                  axios.post("ajoutPublication.php", form_data)
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
    },
    methods:{
      photoChange(e) {
      this.photo = e.target.files[0];
      }
    }
  }
    
</script>