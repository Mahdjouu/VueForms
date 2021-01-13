<template>
  <ouvrage></ouvrage>
</template>

<script>
import ouvrage from '../components/chercheur.vue';
export default {
  components: {
      ouvrage
    },
  data: function(){
    return {
      ouvrage:{}
    }
  }
}
</script>