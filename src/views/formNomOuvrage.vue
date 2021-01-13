<template>
  <nomOuvrage></nomOuvrage>
</template>

<script>
import nomOuvrage from '../components/chercheur.vue';
export default {
  components: {
    nomOuvrage
    },
  data: function(){
    return {
      nomOuvrage:{}
    }
  }
}
</script>