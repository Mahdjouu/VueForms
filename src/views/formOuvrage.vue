<template>
  <div class="page">
  <h2>Ajout d'un ouvrage</h2>
  <p>Si vous ne trouvez pas le nom de l'ouvrage que vous souhaitez ajouter, veuillez vous rendre à l'onglet <router-link to="/formNomOuvrage"> Nom d'ouvrage</router-link> </p>
    <div class="form">
      <form action="ajoutOuvrage.php" method="POST">
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
          nom: '',
          annee: '',
          lieu: '',
        },
        schema: {
          fields: [
            {
              type: 'select',
              label: 'Nom de l\'ouvrage',
              model: 'nom',
              values: [
                "Nom 1",
                "Nom 2",
                "Nom 3",
              ],
              noneSelectedText:"Veuillez selectionner le nom de votre ouvrage ",
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
              hint: "L'année doit être un entier. Ex: 2021",
            },
            {
              type: 'input',
              inputType: 'text',
              label: 'Lieu de parution',
              model: 'lieu',
              featured: true,
            },
            {
              type: 'submit',
              onSubmit(model) {
                console.log(model);
                var form_data = new FormData();
                form_data.set("nom", model.nom);
                form_data.set("annee", model.annee);
                form_data.set("lieu", model.lieu);
                  axios.post("ajoutOuvrage.php", form_data)
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
    mounted(){
    axios.post("getNomOuvrage.php")
    .then((response) => {console.log(response);
                        this.schema.fields.values=response.data;})
    .catch(function(error) {console.log(error);});
  }
  }
    
</script>