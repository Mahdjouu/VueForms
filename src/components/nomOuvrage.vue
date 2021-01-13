<template>
   <form id="formnomouvrage" @submit="checkForm" action="" method="post">

    <p v-if="errors.length">
        <b>Veuillez corriger les erreurs suivantes:</b>
        <ul>
        <li  v-for="error in errors" :key="error.message">{{ error }}</li>
        </ul>
    </p>

  <p>
    <label for="name">Nom de l'ouvrage</label>
    <input id="name" v-model="name" type="text" name="name" placeholder="Nom">
  </p>

  <p>
    <label for="abbreviation">Abreviation</label>
    <input id="abbreviation" v-model="abbreviation" type="text" name="abbreviation" placeholder="Abbreviation du nom de l'ouvrage">
  </p>

  <p>
    <label for="type_ouvrage">Abreviation</label>
    <input type="radio" id="conference" value="conference" v-model="type_ouvrage">
    <label for="conference">conference</label>
    <input type="radio" id="journal" value="journal" v-model="type_ouvrage">
    <label for="journal">Journal</label>
    <input type="radio" id="livre" value="livre" v-model="type_ouvrage">
    <label for="livre">Livre</label>
    <br>
    <span>L'ouvrage en question est donc un(e) {{ type_ouvrage }}</span>
  </p>


  <p>
    <input type="submit" value="Valider" >
  </p>

   </form> 

</template>

<script>

export default {
  name: 'nomOuvrage',
  props: {

  },
  
  data(){
      return {
          form:{
                errors: [],
                name:'',
                abbréviation: '',
                type_ouvrage:''
          }
      }
  },

  methods:{
   
  },
}
    
</script>