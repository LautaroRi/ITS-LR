<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-primary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link  class="nav-link" to="/">Home</router-link>
            </li>
          <li class="nav-item">
            <router-link  class="nav-link" to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link  class="nav-link" to="/nuestrasnoticias">Noticias</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/publicaciones">Publicación</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div class="container mt-3"> 
    <router-view/>
  </div> 
</template>

<style>

</style>
