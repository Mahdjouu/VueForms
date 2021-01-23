<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/formChercheur"> Ajout de chercheur</router-link> |
      <router-link to="/formNomOuvrage"> Nom d'ouvrage</router-link> |
      <router-link to="/formOuvrage"> Ouvrage </router-link> |
      <router-link to="/formPublication" > Publication</router-link> |
      <router-link to="/formSysteme"> Systeme</router-link> |
      <router-link to="/about"> About</router-link>
    </div>
    <router-view/>
    <footer>BOUZOUINA Mahdjouba </footer>
  </div>
</template>

<style>
  #app {
    font-family:'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100%;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
  .page{
    height: 90%;
  }

  .form {
    width:50%;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    padding: 2%;
  }

  footer{
    position:absolute;
    bottom:2%;
    width:100%;
    padding-top:50px;
    }
</style>
