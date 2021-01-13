<template>
   <form id="formsysteme" @submit="checkForm" action="" method="post">

    <p v-if="errors.length">
        <b>Veuillez corriger les erreurs suivantes:</b>
        <ul>
        <li  v-for="error in errors" :key="error.message">{{ error }}</li>
        </ul>
    </p>

  <p>
    <label for="name">Nom</label>
    <input id="name" v-model="name" type="text" name="name" placeholder="Nom du système">
  </p>

  <p>
    <span>Description du système :</span>
    <br>
    <textarea v-model="description" placeholder="Veuillez entrer une description du système à ajouter "></textarea>
  </p>

  <p>
    <input type="submit" value="Valider" >
  </p>

   </form> 

</template>

<script>

export default {
  name: 'systeme',
  props: {

  },
  
  data(){
      return {
          form:{
                errors: [],
                name:'',
                description:''
          }
      }
  },

  methods:{
   
  },
}
    
</script>