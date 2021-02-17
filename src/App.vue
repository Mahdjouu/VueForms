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
    background: whitesmoke;
    transition-property: margin-top,margin-right;
    transition-duration: .5s,.1s;
    transition-delay: 0;
    transition-timing-function: cubic-bezier(0.22,0.99,0.62,1);
    -moz-transition-property: margin-top,margin-right;
    -moz-transition-duration: .5s,.1s;
    -moz-transition-delay: 0;
    -moz-transition-timing-function: cubic-bezier(0.22,0.99,0.62,1);
    -o-transition-property: margin-top,margin-right;
    -o-transition-duration: .5s,.1s;
    -o-transition-delay: 0;
    -o-transition-timing-function: cubic-bezier(0.22,0.99,0.62,1);
    -ms-transition-property: margin-top,margin-right;
    -ms-transition-duration: .5s,.1s;
    -ms-transition-delay: 0;
    -ms-transition-timing-function: cubic-bezier(0.22,0.99,0.62,1);
    -webkit-transition-property: margin-top,margin-right;
    -webkit-transition-duration: .5s,.1s;
    -webkit-transition-delay: 0;
    -webkit-transition-timing-function: cubic-bezier(0.22,0.99,0.62,1);
  
    position: fixed;
    top: 0;
    width: 60%;

    border: 1px solid #ccc !important;
    border-radius: 20px;
    padding: 1%;
    transform: translate(32%, 3%);
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
