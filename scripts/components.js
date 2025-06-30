const navbarHTML = `
<!--=============================
      NAVBAR CON FILTROS INTEGRADOS Y LATERAL EN MÓVIL
=============================-->  
<nav class="navbar navbar-expand-lg navbar-dark py-2 fixed-top navbar-custom">
  <div class="container d-flex align-items-center justify-content-between mt-3 mb-3">
  <!-- Marca (GOLVINTAGE) a la izquierda -->
  <a class="navbar-brand fw-bold gradient-text d-flex align-items-center mb-0" href="./index.html">
    <img src="./assets/icons/logo.png" alt="Logo" width="32" height="32" class="me-2">
    GOLVINTAGE
  </a>

  <!-- Botón hamburguesa para móviles a la derecha -->
  <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>
    <!-- Menú en pantallas grandes -->
    <div class="collapse navbar-collapse d-none d-lg-flex w-100 ms-auto" id="navbarNav">
      <ul class="navbar-nav gap-2">
        <!-- A Pedido -->
        <li class="nav-item">
          <a class="btn-nav w-100 text-start" href="./pedido.html">A Pedido</a>
        </li>

        <!-- Selecciones Retro -->
        <li class="nav-item dropdown">
          <a class="btn-nav dropdown-toggle w-100 text-start" href="#" id="dropdownSeleccionesRetro" role="button" data-bs-toggle="dropdown" aria-expanded="false">Selecciones Retro</a>
          <ul class="dropdown-menu dropdown-menu-dark">
            <li><a class="dropdown-item" href="./camisetas.html?tipo=seleccion%20retro&equipo=alemania">Alemania</a></li>
            <li><a class="dropdown-item" href="./camisetas.html?tipo=seleccion%20retro&equipo=argentina">Argentina</a></li>
            <li><a class="dropdown-item" href="./camisetas.html?tipo=seleccion%20retro&equipo=brasil">Brasil</a></li>
            <li><a class="dropdown-item" href="./camisetas.html?tipo=seleccion%20retro&equipo=francia">Francia</a></li>
            <li><a class="dropdown-item" href="./camisetas.html?tipo=seleccion%20retro&equipo=italia">Italia</a></li>
            <li><a class="dropdown-item" href="./camisetas.html?tipo=seleccion%20retro&equipo=holanda">Holanda</a></li>
          </ul>
        </li>

        <!-- Clubs Retro -->
        <li class="nav-item dropdown">
          <a class="btn-nav dropdown-toggle w-100 text-start" href="#" id="dropdownClubsRetro" role="button" data-bs-toggle="dropdown" aria-expanded="false">Clubs Retro</a>
          <ul class="dropdown-menu dropdown-menu-dark">
            <li class="dropdown-submenu">
              <a class="dropdown-item dropdown-toggle" href="./camisetas.html?tipo=club%20retro&liga=inglaterra">Inglaterra</a>
              <ul class="dropdown-menu dropdown-menu-dark">
                <li><a class="dropdown-item" href="./camisetas.html?tipo=club%20retro&liga=inglaterra&equipo=manchester%20united">Manchester United</a></li>
                <li><a class="dropdown-item" href="./camisetas.html?tipo=club%20retro&liga=inglaterra&equipo=arsenal">Arsenal</a></li>
              </ul>
            </li>
            <li class="dropdown-submenu">
              <a class="dropdown-item dropdown-toggle" href="./camisetas.html?tipo=club%20retro&liga=italia">
                <span><img src="./assets/icons/Liga/SeriaA.png" width="18" class="me-2">Seria A</span>
              </a>
              <ul class="dropdown-menu dropdown-menu-dark">
                <li>
                  <a class="dropdown-item" href="./camisetas.html?tipo=club%20retro&liga=italia&equipo=milan">
                    <img src="./assets/icons/Teams/Milan.png" alt="milan" width="18" class="me-2">Milan
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="./camisetas.html?tipo=club%20retro&liga=italia&equipo=juventus">
                    <img src="./assets/icons/Teams/Juv.png" alt="juventus" width="18" class="me-2">Juventus
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <!-- Selecciones Actual -->
        <li class="nav-item dropdown">
          <a class="btn-nav dropdown-toggle w-100 text-start" href="#" id="dropdownSeleccionesActual" role="button" data-bs-toggle="dropdown" aria-expanded="false">Selecciones Actual</a>
          <ul class="dropdown-menu dropdown-menu-dark">
            <li><a class="dropdown-item" href="./camisetas.html?tipo=seleccion%20actual&equipo=brasil">Brasil</a></li>
            <li><a class="dropdown-item" href="./camisetas.html?tipo=seleccion%20actual&equipo=argentina">Argentina</a></li>
            <li><a class="dropdown-item" href="./camisetas.html?tipo=seleccion%20actual&equipo=francia">Francia</a></li>
            <li><a class="dropdown-item" href="./camisetas.html?tipo=seleccion%20actual&equipo=alemania">Alemania</a></li>
            <li><a class="dropdown-item" href="./camisetas.html?tipo=seleccion%20actual&equipo=inglaterra">Inglaterra</a></li>
          </ul>
        </li>

        <!-- Clubs Actual -->
        <li class="nav-item dropdown">
          <a class="btn-nav dropdown-toggle w-100 text-start" href="#" id="dropdownClubsActuales" role="button" data-bs-toggle="dropdown" aria-expanded="false">Clubs Actuales</a>
          <ul class="dropdown-menu dropdown-menu-dark">
            <li class="dropdown-submenu">
              <a class="dropdown-item dropdown-toggle" href="./camisetas.html?tipo=club%20actual&liga=espa%C3%B1a">España</a>
              <ul class="dropdown-menu dropdown-menu-dark">
                <li><a class="dropdown-item" href="./camisetas.html?tipo=club%20actual&liga=espa%C3%B1a&equipo=real%20madrid">Real Madrid</a></li>
                <li><a class="dropdown-item" href="./camisetas.html?tipo=club%20actual&liga=espa%C3%B1a&equipo=barcelona">Barcelona</a></li>
              </ul>
            </li>
            <li class="dropdown-submenu">
              <a class="dropdown-item dropdown-toggle" href="./camisetas.html?tipo=club%20actual&liga=francia">Francia</a>
              <ul class="dropdown-menu dropdown-menu-dark">
                <li><a class="dropdown-item" href="./camisetas.html?tipo=club%20actual&liga=francia&equipo=psg">PSG</a></li>
              </ul>
            </li>
          </ul>
        </li>

      </ul>
    </div>
  </div>
</nav>



<!-- OFFCANVAS NAVBAR LATERAL PARA MÓVILES -->
<div class="offcanvas offcanvas-start text-bg-dark" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" style="height: 100vh;">
  <div class="offcanvas-header">
    <a class="navbar-brand fw-bold" href="./index.html">
      <img src="./assets/icons/logo.png" alt="Logo" width="45" height="45" class="me-2">
    </a>
    <h5 class="offcanvas-title gradient-text" id="offcanvasNavbarLabel">Filtros</h5>
    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <ul class="navbar-nav flex-column gap-3">
      <li class="nav-item mb-3"><a class="btn-nav w-100 text-start" href="./pedido.html">A Pedido</a></li>

      <!-- Filtro: Selecciones Retro -->
      <li class="nav-item mb-3">
          <a class="btn-nav w-100 text-start d-flex justify-content-between align-items-center dropdown-toggle" data-bs-toggle="collapse" href="#collapseSeleccionesRetro">
            Selecciones Retro
            <span class="dropdown-icon">▼</span>
          </a>
        <div class="collapse" id="collapseSeleccionesRetro">
          <ul class="list-unstyled ps-3">
            <li>
              <a class="dropdown-item" href="./camisetas.html?tipo=seleccion%20retro&equipo=alemania">
                <span><img src="./assets/icons/Seleccion/Alemania.png" width="18" class="me-2">Alemania</span>
              </a>
            </li>
            <li>
            <a class="dropdown-item" href="./camisetas.html?tipo=seleccion%20retro&equipo=argentina">
              <span>
                <img src="./assets/icons/Seleccion/Argentina.png" width="18" class="me-2"> Argentina
              </span>
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="./camisetas.html?tipo=seleccion%20retro&equipo=brasil">
                <span>
                  <img src="./assets/icons/Seleccion/Brasil.png" width="18" class="me-2">Brasil
                </span>
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="./camisetas.html?tipo=seleccion%20retro&equipo=francia">
                <span>
                  <img src="./assets/icons/Seleccion/Francia.png" width="18" class="me-2">Francia
                </span>
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="./camisetas.html?tipo=seleccion%20retro&equipo=italia">
                <span>
                  <img src="./assets/icons/Seleccion/Italia.png" width="18" class="me-2">Italia
                </span>
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="./camisetas.html?tipo=seleccion%20retro&equipo=holanda">
                <span>
                  <img src="./assets/icons/Seleccion/Holanda.png" width="18" class="me-2">Holanda
                </span>
              </a>
            </li>
          </ul>
        </div>
      </li>
<!-- Filtro: Clubs Retro -->
<li class="nav-item mb-3">
  <a class="btn-nav w-100 text-start d-flex justify-content-between align-items-center dropdown-toggle" data-bs-toggle="collapse" href="#collapseClubsRetro">
    <span>Clubs Retro</span>
    <span class="dropdown-icon">▼</span>
  </a>
  <div class="collapse" id="collapseClubsRetro">
    <ul class="list-unstyled ps-2">
    
      <!-- Italia -->
      <li class="mt-2">
        <a class="btn-nav w-100 text-start d-flex justify-content-between align-items-center dropdown-toggle small" data-bs-toggle="collapse" href="#collapseClubsRetroItalia">
          <span><img src="./assets/icons/Liga/SeriaA.png" width="18" class="me-2">Seria A</span>
          <span class="dropdown-icon">▼</span>
        </a>
        <div class="collapse ps-2" id="collapseClubsRetroItalia">
          <ul class="list-unstyled ps-2">
            <li>
              <a class="dropdown-item d-flex align-items-center" href="./camisetas.html?tipo=club%20retro&liga=italia&equipo=milan">
                <img src="./assets/icons/Teams/Milan.png" alt="milan" width="18" class="me-2">Milan
              </a>
            </li>
             <li>
              <a class="dropdown-item d-flex align-items-center" href="./camisetas.html?tipo=club%20retro&liga=italia&equipo=juventus">
                <img src="./assets/icons/Teams/Juv.png" alt="milan" width="18" class="me-2">Juventus
              </a>
            </li>
          </ul>
        </div>
      </li>

      <!-- Alemania -->
      <li class="mt-2">
        <a class="btn-nav w-100 text-start d-flex justify-content-between align-items-center dropdown-toggle small" data-bs-toggle="collapse" href="#collapseClubsRetroAlemania">
          <span><img src="./assets/icons/Liga/Bundesliga.png" width="18" class="me-2">Bundesliga</span>
          <span class="dropdown-icon">▼</span>
        </a>
        <div class="collapse ps-2" id="collapseClubsRetroAlemania">
          <ul class="list-unstyled ps-2">
            <li>
              <a class="dropdown-item d-flex align-items-center" href="./camisetas.html?tipo=club%20retro&liga=alemania&equipo=schalke04">
                <img src="./assets/icons/Teams/Schalke04.png" alt="schalke04" width="18" class="me-2">Schalke 04
              </a>
            </li>
          </ul>
        </div>
      </li>

    </ul>
  </div>
</li>

      <!-- Filtro: Selecciones Actual -->
      <li class="nav-item mb-3">
         <a class="btn-nav w-100 text-start d-flex justify-content-between align-items-center dropdown-toggle small" data-bs-toggle="collapse" href="#collapseSeleccionesActual">
         Selecciones Actual
        <span class="dropdown-icon">▼</span>
         </a>
        <div class="collapse" id="collapseSeleccionesActual">
          <ul class="list-unstyled ps-3">
            <li>
              <a class="dropdown-item" href="./camisetas.html?tipo=seleccion%20actual&equipo=alemania">
                <span>
                  <img src="./assets/icons/Seleccion/Alemania.png" width="18" class="me-2">
                  Alemania
                </span>
              </a>
            </li>

            <li><a class="dropdown-item" href="./camisetas.html?tipo=seleccion%20actual&equipo=argentina">
            <span><img src="./assets/icons/Seleccion/Argentina.png" width="18" class="me-2"> Argentina</span></a></li>

            <li><a class="dropdown-item" href="./camisetas.html?tipo=seleccion%20actual&equipo=brasil">
            <span><img src="./assets/icons/Seleccion/Brasil.png" width="18" class="me-2">Brasil</span></a></li>
            
            <li><a class="dropdown-item" href="./camisetas.html?tipo=seleccion%20actual&equipo=francia">
            <span><img src="./assets/icons/Seleccion/Francia.png" width="18" class="me-2">Francia</span></a></li>

            <li><a class="dropdown-item" href="./camisetas.html?tipo=seleccion%20actual&equipo=inglaterra">
            <span><img src="./assets/icons/Seleccion/Inglaterra.png" width="18" class="me-2">Inglaterra</span></a></li>

            <li><a class="dropdown-item" href="./camisetas.html?tipo=seleccion%20actual&equipo=holanda">
            <span><img src="./assets/icons/Seleccion/Holanda.png" width="18" class="me-2">Holanda</span></a></li>
             
          </ul>
        </div>
      </li>

      <!-- Filtro: Clubs Actuales -->
      <li class="nav-item mb-3">
      <a class="btn-nav w-100 text-start d-flex justify-content-between align-items-center dropdown-toggle small" data-bs-toggle="collapse" href="#collapseClubsActuales">
      Clubs Actuales
      <span class="dropdown-icon">▼</span>
      </a>
        <div class="collapse" id="collapseClubsActuales">
          <ul class="list-unstyled ps-3">
            <!-- España -->
            <li class="mt-2">
              <a class="btn-nav w-100 text-start dropdown-toggle small" data-bs-toggle="collapse" href="#collapseClubsActualesEspana">
              <span>
               <img src="./assets/icons/Liga/laLiga.png" width="18" class="me-2">
                La Liga
              </span>
              <span class="dropdown-icon">▼</span>
              </a>
              <div class="collapse ps-2" id="collapseClubsActualesEspana">
                <ul class="list-unstyled ps-2">
                  <li>
                    <a class="dropdown-item" href="./camisetas.html?tipo=club%20actual&liga=espa%C3%B1a&equipo=barcelona">
                       <span>
                        <img src="./assets/icons/Teams/Barcelona.png" width="18" class="me-2">
                          Barcelona
                       </span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</div>
`;

const footerHTML = `
<footer id="contacto" class="text-white mt-auto">

  <!-- Redes sociales en franja superior con imagen de fondo -->
  <div class="footer-social text-center">
    <div class="container py-4 position-relative z-2">
      <h2 class="text-white mb-4">NUESTRAS REDES SOCIALES</h2>
      <div class="d-flex justify-content-center gap-4 flex-wrap mt-4">
        <!-- TikTok -->
        <a href="https://www.tiktok.com/@gol.vintage" target="_blank" aria-label="TikTok">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="white">
            <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323
              c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537
              c0,4.709-3.818,8.527-8.527,8.527s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202
              c-0.175-0.021-0.347-0.053-0.527-0.053c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298
              c0-0.095,0.042-19.594,0.042-19.594h4.016c0.378,3.591,3.277,6.425,6.901,6.685V22.323z"/>
          </svg>
        </a>
        <!-- Instagram -->
        <a href="https://www.instagram.com/gol.vintage4/" target="_blank" aria-label="Instagram">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="white">
            <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 
              C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 
              C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 
              C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 
              31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z 
              M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 
              C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"/>
          </svg>
        </a>
        <!-- Facebook -->
        <a href="https://www.facebook.com/marketplace/profile/61574555216598/" target="_blank" aria-label="Facebook">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="white">
            <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848
              c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588
              l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"/>
          </svg>
        </a>
      </div>
    </div>
  </div>

  <!-- Contenido principal del footer -->
  <div class="footer-prin pt-4 pb-3 px-3 px-md-5">
    <div class="container">
      <div class="row">
        <div class="col-md-4 mb-4">
          <h5>GolVintage</h5>
          <p class="text-secondary">Tu tienda para las camisetas de fútbol más legendarias.</p>
          <p class="text-secondary">📍 Pedidos para todo el Perú.</p>
        </div>
        <div class="col-md-4 mb-4 d-none d-md-block">
          <!-- Espacio vacío en pantallas grandes -->
        </div>
        <div class="col-md-4 mb-4 text-secondary">
          <h5>Contacto</h5>
          <p>📧 ventas@GolVintage.com</p>
          <div class="d-flex align-items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 32 32" fill="white">
                <path d="M16.002 3.2c-7.07 0-12.8 5.73-12.8 12.8 0 2.246.59 4.445 1.71 6.382L3.2 28.8l6.692-1.716c1.87 1.029 3.973 1.57 6.11 1.57 7.07 0 12.8-5.73 12.8-12.8s-5.73-12.754-12.8-12.754zm0 23.2c-1.843 0-3.648-.496-5.227-1.433l-.373-.22-3.98 1.016 1.067-3.88-.245-.39a10.3 10.3 0 01-1.57-5.32c0-5.714 4.653-10.368 10.368-10.368s10.368 4.653 10.368 10.368-4.653 10.368-10.368 10.368zm5.653-7.41c-.31-.155-1.837-.907-2.123-1.01-.286-.103-.495-.155-.704.155s-.81 1.01-.993 1.216c-.183.206-.366.233-.676.078s-1.32-.486-2.51-1.55c-.926-.825-1.55-1.843-1.73-2.15-.18-.31-.02-.478.135-.632.14-.14.31-.36.465-.54.155-.18.207-.31.31-.517.103-.206.05-.388-.026-.542s-.705-1.7-.966-2.327c-.254-.61-.512-.527-.704-.537l-.6-.01a1.13 1.13 0 00-.83.388c-.286.31-1.092 1.064-1.092 2.59s1.12 3.003 1.275 3.21c.155.206 2.21 3.38 5.356 4.743.748.322 1.33.514 1.785.656.75.238 1.432.205 1.97.124.6-.09 1.837-.75 2.097-1.473.26-.724.26-1.345.182-1.473-.078-.128-.28-.206-.59-.36z"/>
              </svg>
            <p class="mb-0">+51 993 698 755</p>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center mt-3">
      <p class="text-secondary">© 2025 GolVintage. Todos los derechos reservados.</p>
    </div>
  </div>
</footer>
`;



$(document).ready(function () {
  $("#navbar-component").html(navbarHTML);
  $("#footer-component").html(footerHTML);
});
