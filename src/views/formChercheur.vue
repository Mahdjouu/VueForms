<template>
  <div class="page">
  <h2>Ajout d'un chercheur</h2>
    <div class="form">
      <input type="file" accept="image/*" @change="uploadImage($event)" id="photo">
      <vue-form-generator :schema="schema" :model="model" :options="formOptions"></vue-form-generator>

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
          photo: null,
          prenom: '',
          nom: '',
          url: ''
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
                  if(key=="photo"){
                    var b64 =model[key],
                    arr = b64.split(','), 
                    mime = arr[0].match(/:(.*?);/)[1],
                    bstr = atob(arr[1]), 
                    n = bstr.length, 
                    u8arr = new Uint8Array(n);
                    while(n--){
                      u8arr[n] = bstr.charCodeAt(n);
                    }
                    var filename = '';
                    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                    var charactersLength = characters.length;
                    for ( var i = 0; i < 10; i++ ) {
                        filename += characters.charAt(Math.floor(Math.random() * charactersLength));
                    }
                    model[key]=new File([u8arr], filename, {type:mime});
                  }
                  form_data.append(key, model[key]);
                }
                axios.post("ajoutChercheur.php", form_data)
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
      uploadImage(event) {
        //const URL = '';
        let data = new FormData();
        data.append('name', 'my-picture');
        data.append('file', event.target.files[0]);

        /*let config = {
          header : {
            'Content-Type' : 'image/png'
          }
        }*/
      }
    }
  }  
</script>