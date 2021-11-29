
<template>
  <div class="row container-fluid">
    <div class="col-2 bg-dark">
      <div class="d-flex flex-column align-items-center align-items-sm-start text-white min-vh-100">
        <a href="/" class="d-flex align-items-center text-white text-decoration-none">
          <span class="fs-5 d-none d-sm-inline">IP's control</span>
        </a>
        <ul class="nav flex-column nav-tabs-border-color:gray-300;">
          <li class="nav-item">
            <a href="#submenu1" data-bs-toggle="collapse" class="nav-link disabled px-0 align-middle">
              <i class="fs-6 bi bi-clipboard text-success"> Customers Data </i>
            </a>
            <router-link class="nav-link text-info" to="/clientes">
              <i class="bi bi-person-check" style="font-size: 1.0rem"><small> User</small></i>
            </router-link>
          </li>
          <li>
            <a href="#submenu1" data-bs-toggle="collapse" class="nav-link disabled px-0 align-middle">
              <i class="fs-6 bi-speedometer2 text-success"> Statistics </i>
            </a>
            <ul class="collapse show nav flex-column" id="submenu1" data-bs-parent="#menu">
              <li class="w-100 nav-item">
                <router-link class="nav-link text-info" to="/memoria">
                  <i class="bi bi-activity" style="font-size: 1.0rem"><small> RAM </small></i>
                </router-link>
              </li>

              <li class="w-100 nav-item">
                <router-link class="nav-link text-info" to="/drive"
                  ><i class="bi bi-hdd-rack" style="font-size: 1.0rem">
                    <small> HDD </small>
                  </i></router-link
                >
              </li>
              <li class="w-100 nav-item">
                <router-link class="nav-link text-info" to="/os">
                  <i class="bi bi-windows" style="font-size: 1.0rem"><small> S.O </small></i>
                </router-link>
              </li>
              <li class="w-100 nav-item">
                <router-link class="nav-link text-info" to="/cpu">
                <i class="bi bi-cpu" style="font-size: 1.0rem"><small> CPU </small></i>
                </router-link>
              </li>
            </ul>
          </li>
          <li>
            <a href="#submenu1" data-bs-toggle="collapse" class="nav-link disabled px-0 align-middle">
              <i class="fs-6 bi bi-graph-up-arrow text-success"> Graphics </i>
            </a>
            <ul class="collapse show nav flex-column" id="submenu1" data-bs-parent="#menu">
              <li class="w-100 nav-item">
                <router-link class="nav-link text-warning" to="/graficosCPU">
                  <i class="bi bi-fan" style="font-size: 1.0rem"><small> CPU </small></i>
                </router-link>
              </li>

              <li class="w-100 nav-item">
                <router-link class="nav-link text-warning" to="/graficosMEM">
                  <i class="bi bi-compass" style="font-size: 1.0rem"> <small> RAM </small></i>
                </router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a href="#submenu1" data-bs-toggle="collapse" class="nav-link disabled px-0 align-middle">
              <i class="fs-6 bi bi-clipboard text-success"> Support</i>
            </a>
            <ul class="collapse show nav flex-column" id="submenu1" data-bs-parent="#menu">
              <li class="w-100 nav-item">
                <router-link class="nav-link text-danger" to="/contacto">
                    <i class="bi bi-telephone-outbound" style="font-size: 1.0rem"><small> Help</small></i>
                  </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <div class="col-10">
      <div>
        <router-view />
      </div>
    </div>
  </div>
</template>

<style>
</style>
