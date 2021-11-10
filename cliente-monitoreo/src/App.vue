
<template>
<div class="row container-fluid">
    <div class="col-2 bg-dark">
      <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
        <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <span class="fs-5 d-none d-sm-inline">control IP's</span>
        </a>
      <ul class="nav flex-column nav-tabs-border-color:gray-300; ">
        <li class="nav-item">
          <a href="#submenu1" data-bs-toggle="collapse" class="nav-link disabled px-0 align-middle">
            <i class="fs-5 bi bi-clipboard text-success"> Datos Clientes </i> 
          </a>
            <router-link  class="nav-link text-info" to="/clientes"><i class="bi bi-person-check" style="font-size: 1.2rem;"> Clientes </i></router-link>
        </li>
        <li>
          <a href="#submenu1" data-bs-toggle="collapse" class="nav-link disabled px-0 align-middle">
            <i class="fs-5 bi-speedometer2 text-success"> Estadísticas </i> 
          </a>
          <ul class="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
            <li class="w-100 nav-item">
              <router-link class="nav-link text-info" to="/memoria"><i class="bi bi-activity" style="font-size: 1.2rem;"> Memory </i></router-link>
            </li>
            <li class="w-100 nav-item">
              <router-link class="nav-link text-info" to="/drive"><i class="bi bi-hdd-rack" style="font-size: 1.2rem;"> Drive </i></router-link>
            </li>
            <li class="w-100 nav-item">
              <router-link class="nav-link text-info" to="/os"><i class="bi bi-windows" style="font-size: 1.2rem;"> S.O </i></router-link>
            </li>
            <li class=" w-100 nav-item">
              <router-link class="nav-link text-info" to="/cpu"><i class="bi bi-cpu" style="font-size: 1.2rem;"> CPU </i></router-link>
            </li>
          </ul>
          </li>
            <li class="nav-item">
              <a href="#submenu1" data-bs-toggle="collapse" class="nav-link disabled px-0 align-middle">
                <i class="fs-5 bi bi-clipboard text-success"> Soporte Técnico </i> 
              </a>
              <ul class="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                <li class=" w-100 nav-item">
                  <router-link class="nav-link text-danger" to="/contacto"><i class="bi bi-telephone-outbound" style="font-size: 1.2rem;"> Contact </i></router-link>
                </li>
              </ul>
          </li>
        </ul>
    </div>
  </div>
  <div class="col-10">
    <div class="container mt-3"> 
      <router-view/>
    </div> 
  </div>
</div>
</template>

<style>

</style>
