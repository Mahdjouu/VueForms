<template>
   <form id="formouvrage" @submit="checkForm" action="" method="post">

    <p v-if="errors.length">
        <b>Veuillez corriger les erreurs suivantes:</b>
        <ul>
        <li  v-for="error in errors" :key="error.message">{{ error }}</li>
        </ul>
    </p>

   <p>
    <label for="nom_ouvrage">Liste des noms d'ouvrage de la base de données : </label>
        (Si le nom de l'ouvrage que vous souhaitez ajouter n'est pas dans cette liste veuillez l'ajouter via le formulaire en question) 
        <select v-model="nom_ouvrage" multiple>
        <option>Nom d'Ouvrage 1</option>
        <option>Nom d'Ouvrage 2</option>
        <option>Nom d'Ouvrage 3</option>
        <option>Nom d'Ouvrage 4</option>
        <option>Nom d'Ouvrage 5</option>
        <option>Nom d'Ouvrage 6</option>
    </select>
    <br>
    <span>Vous souhaitez ajouter à la base de donnée l'ouvrage {{ nom_ouvrage }}</span>
    </p>  

    <p>
        <label for="annee_parution">Année de parution</label>
        <input id="annee_parution" v-model.number="annee_parution" type="number" name="annee_parution" placeholder="1900">
    </p>

  <p>
    <label for="lieu_parution">Lieu de parution</label>
    <input id="lieu_parution" v-model="lieu_parution" type="text" name="lieu_parution" placeholder="Ville/Pays">
  </p>


  <p>
    <input type="submit" value="Valider" >
  </p>

   </form> 

</template>

<script>

export default {
  name: 'ouvrage',
  props: {

  },
  
  data(){
      return {
          form:{
                errors: [],
                nom_ouvrage : '',
                annee_parution : null,
                lieu_parution : ''
                
          }
      }
  },

  methods:{
  }
}
    
</script>