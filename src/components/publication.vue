<template>
   <form id="formpublication" @submit="checkForm" action="" method="post">

    <p v-if="errors.length">
        <b>Veuillez corriger les erreurs suivantes:</b>
        <ul>
        <li  v-for="error in errors" :key="error.message">{{ error }}</li>
        </ul>
    </p>

  <p>
    <label for="titre">Titre</label>
    <input id="titre" v-model="titre" type="text" name="titre" placeholder="Titre de la publication">
  </p>

  <p>
    <label for="avatar">Photo</label>
    <button class="upload_image" @click="onPickFile">Télécharger</button>
    <input id="avatar" type="file" ref="fileInput" accept="image/*" @change="onFilePicked" name="avatar">
  </p>

  <p>
      <span>Resumé de la publication :</span>
    <br>
    <textarea v-model="resume" placeholder="Veuillez entrer un résumé de la publication à ajouter"></textarea>
  </p>

   <p>
    <label for="ouvrage">Liste des noms d'ouvrage de la base de données : </label>
        (Si le l'ouvrage que vous souhaitez ajouter n'est pas dans cette liste veuillez l'ajouter via le formulaire en question) 
        <select v-model="ouvrage" multiple>
        <option>Ouvrage 1</option>
        <option>Ouvrage 2</option>
        <option>Ouvrage 3</option>
        <option>Ouvrage 4</option>
        <option>Ouvrage 5</option>
        <option>Ouvrage 6</option>
    </select>
    <br>
    <span>Vous souhaitez ajouter à la base de donnée une publication liée à l'ouvrage l'ouvrage {{ nom_ouvrage }}</span>
    </p>  

    <p>
        <label for="nb_pages">Nombre de pages : </label>
        <input id="nb_pages" v-model.number="nb_pages" type="number" name="nb_pages" placeholder="1">
    </p>

    <p>
        <label for="numero">Numéro : </label>
        <input id="numero" v-model.number="numero" type="number" name="numero" placeholder="0">
    </p>

    <p>
        <label for="volume">Volume : </label>
        <input id="volume" v-model.number="volume" type="number" name="volume" placeholder="0">
    </p>

  <p>
    <label for="lien_article">Lien de l'article : </label>
    <input id="lien_article" v-model="lien_article" type="text" name="lien_article" placeholder="URL">
  </p>

  <p>
    <input type="submit" value="Valider" >
  </p>

   </form> 

</template>

<script>

export default {
  name: 'publication',
  props: {

  },
  
  data(){
      return {
          form:{
                errors: [],
                titre : '',
                resume : '',
                ouvrage : '',
                nb_pages : null,
                numero : null,
                volume: null,
                lien_article : '',
                avatar : null
                
          }
      }
  },

  methods:{
    onPickFile () {
      this.$refs.fileInput.click()
    },
    onFilePicked (event) {
      const files = event.target.files
      //let filename = files[0].name
      const fileReader = new FileReader()
      fileReader.addEventListener('load', () => {
        this.imageUrl = fileReader.result
      })
      fileReader.readAsDataURL(files[0])
      this.image = files[0]
    }
  }
}
    
</script>