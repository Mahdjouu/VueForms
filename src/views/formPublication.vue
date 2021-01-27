<template>
  <div class="page">
    <h2>Ajout d'une publication</h2>
      <p>Si vous ne trouvez pas l'ouvrage que vous souhaitez ajouter, veuillez vous rendre à l'onglet <router-link to="/formOuvrage"> Ouvrage</router-link> </p>
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
          image: null,
          titre: "Titre de la publication",
          resume: "Resumé",
          ouvrage: "Nom de l'ouvrage de provenance",
          nb_pages: 0,
          numero:0,
          volume : 0,
          url:"www.lien-publication.fr"
        },
        schema: {
          fields: [
            {
              type: 'image',
              label: 'Illustration',
              model: 'image',
              hideInput: true,
              required: true,
              featured:true,
              browse: true,
              preview:true,
            },
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
              featured: true,
              required: true,
            },
            {
              type: 'input',
              inputType: 'number' ,
              label: 'Nombre de pages',
              model: 'nb_pages',
              maxlength: 10,
              featured: true,
              required: true,
              hint: "Le nombre de pages est requis et doit être un entier. Ex: 50"
            },
            {
              type: 'input',
              inputType: 'number' ,
              label: 'Numéro',
              model: 'numero',
              maxlength: 5,
              featured: true,
              required: true,
              hint: "Le numéro est requis et doit être un entier. Ex: 2"
            },
            {
              type: 'input',
              inputType: 'number' ,
              label: 'Volume',
              model: 'volume',
              maxlength: 5,
              featured: true,
              required: true,
              hint: "Le volume est requis et doit être un entier. Ex: 3"
            },
            {
              type: 'input',
              inputType: 'text',
              label: 'Lien / URL',
              model: 'url',
              placeholder: 'url',
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