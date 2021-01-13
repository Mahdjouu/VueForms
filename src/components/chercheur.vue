<template>
   <form id="formchercheur" @submit="checkForm" action="" method="post">

    <p v-if="errors.length">
        <b>Veuillez corriger les erreurs suivantes:</b>
        <ul>
        <li  v-for="error in errors" :key="error.message">{{ error }}</li>
        </ul>
    </p>

  <p>
    <label for="lastname">Nom</label>
    <input id="lastname" v-model="lastname" type="text" name="lastname" placeholder="Nom du chercheur">
  </p>

  <p>
    <label for="firstname">Prénom</label>
    <input id="firstname" v-model="firstname" type="text" name="firstname" placeholder="Prénom du chercheur">
  </p>

  <p>
    <label for="url">URL</label>
    <input id="url" v-model="url" type="text" name="url" placeholder="Lien utile lié au chercheur">
  </p>

  <p>
    <label for="avatar">Photo</label>
    <button class="upload_image" @click="onPickFile">Télécharger</button>
    <input id="avatar" type="file" ref="fileInput" accept="image/*" @change="onFilePicked" name="avatar">
  </p>

  <p>
    <input type="submit" value="Valider" >
  </p>

   </form> 

</template>

<script>

export default {
  name: 'chercheur',
  props: {

  },
  
  data(){
      return {
          form:{
                errors: [],
                firstname:'',
                lastname: '',
                url: '',
                avatar: null
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
  },
}
    
</script>