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
              values: [
                "Ouvrage 1",
                "Ouvrage 2",
                "Ouvrage 3",
              ],
              noneSelectedText:"Veuillez selectionner votre ouvrage ",
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
              hint: "Le nombre de pages doit être un entier. Ex: 50"
            },
            {
              type: 'input',
              inputType: 'number' ,
              label: 'Numéro',
              model: 'numero',
              placeholder: '0',
              maxlength: 5,
              featured: true,
              hint: "Le numéro est requis être un entier. Ex: 2"
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
                  form_data.set("titre", model.titre);
                  form_data.set("resume", model.resume);
                  form_data.set("ouvrage", model.ouvrage);
                  form_data.set("nb_pages", model.nb_pages);
                  form_data.set("numero", model.numero);
                  form_data.set("volume", model.volume);
                  form_data.set("url", model.url);
                  form_data.set("photo", model.photo);
                  form_data.set("fileselect", model.photo);
                  
                  axios.post("ajoutPublication.php", form_data)
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
    },
    mounted(){
    axios.post("getOuvrage.php")
    .then((response) => {console.log(response);
                        this.schema.fields.values=response.data;})
    .catch(function(error) {console.log(error);});
  }
  }
    
</script>