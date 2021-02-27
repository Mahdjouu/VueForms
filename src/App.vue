<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> 
      <router-link to="/formChercheur">Ajout de chercheur</router-link> 
      <router-link to="/formNomOuvrage">Nom d'ouvrage</router-link> 
      <router-link to="/formOuvrage">Ouvrage </router-link> 
      <router-link to="/formPublication" >Publication</router-link> 
      <router-link to="/formSysteme">Systeme</router-link> 
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    <div class=foot>BOUZOUINA Mahdjouba</div>
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
    padding: 1%;
    margin-bottom: 1%;
  }
  #nav a {
    font-weight: bold;
    color: #2c3e50;
    padding-right: 1%;
    padding-left: 1%;
  }
  #nav a.router-link-exact-active {
    color: #42b983;
  }
  
  .page{
    margin-top:5%;
  }
  .form {
    width:50%;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    padding: 2%;
  }
  .radio-list{
    text-align: left;
  }
  .foot{
    bottom:2%;
    width:100%;
    padding-top:50px;
  }
  
</style>
