document.querySelectorAll('#offcanvasNavbar .btn-nav.dropdown-toggle').forEach(toggle => {
    toggle.addEventListener('click', function (e) {
      const currentCollapse = document.querySelector(this.getAttribute('href'));
      document.querySelectorAll('#offcanvasNavbar .collapse').forEach(collapse => {
        if (collapse !== currentCollapse) {
          collapse.classList.remove('show');
        }
      });
    });
  });

$(document).ready(function () {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        $(entry.target).addClass('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  $('.animated-up').each(function () {
    observer.observe(this);
  });

  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 50) {
      $('.navbar-custom').addClass('navbar-shrink');
    } else {
      $('.navbar-custom').removeClass('navbar-shrink');
    }
  });
});
  function capitalize(texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1);
  }
$(document).ready(function () {
  let productosGlobal = [];

  function actualizarBreadcrumb(tipo, liga, equipo, temporada, salida) {
    const $breadcrumb = $('#breadcrumb');
    $breadcrumb.empty();

    $breadcrumb.append(`<li class="ms-3 ">
      <a href="index.html" class="text-dark">
        <svg xmlns="./" width="20" height="20" fill="currentColor" style="vertical-align: middle; margin-right: 6px;" viewBox="0 0 24 24">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
        </svg>
      </a>

      </li>`);

    $breadcrumb.append(`<li class="ms-3">
      <span class="ms-3 text-dark">&gt;</span>
      <a href="./camisetas.html?filtro=todos" class="text-dark ms-3">Shop</a>
      </li>`);

    if (tipo) {
      const tipoURL = `./camisetas.html?tipo=${tipo}`;
      $breadcrumb.append(`<li class="ms-3">
        <span class="ms-3 text-dark">&gt;</span>
        <a class="text-dark ms-3" href="${tipoURL}">${capitalize(tipo)}</a>
      </li>`);
    }

    if (liga && tipo && tipo.toLowerCase().includes("club")) {
      const ligaURL = `./camisetas.html?tipo=${tipo}&liga=${liga}`;
      $breadcrumb.append(`<li class="ms-3">
        <span class="ms-3 text-dark">&gt;</span>
        <a  href="${ligaURL}" class="text-dark ms-3"> ${capitalize(liga)}</a>
      </li>`);
    }

    if (equipo) {
      const equipoURL = `./camisetas.html?tipo=${tipo}${liga && tipo.toLowerCase().includes("club") ? `&liga=${liga}` : ''}&equipo=${equipo}`;
      $breadcrumb.append(`<li class="ms-3">
        <span class="ms-3 text-dark">&gt;</span>
        <a  href="${equipoURL}" class="text-dark ms-3"> ${capitalize(equipo)}</a>
      </li>`);
    }

    if (temporada) {
        const temporadaURL = `./camisetas.html?tipo=${tipo}${tipo.toLowerCase().includes("club") && liga ? `&liga=${liga}` : ''}&equipo=${equipo}&temporada=${temporada}`;
        $breadcrumb.append(
          `<li class="ms-3">
           <span class="ms-3 text-dark">&gt;</span>
          <a  href="${temporadaURL}" class="text-dark ms-3"> ${capitalize(temporada)}</a>
      </li>`);
    }
    if (salida) {
      $breadcrumb.append(
        `<li class="breadcrumb-item active text-dark ms-3" aria-current="page">
         <span class="ms-3 text-dark">&gt;</span>
         <span class="ms-3"> ${capitalize(salida)}</span>
      </li>`);
    }
  }

  function getParametrosURL() {
    const params = new URLSearchParams(window.location.search);
    return {
      tipo: params.get("tipo") || 'todos',
      liga: params.get("liga") || '',
      equipo: params.get("equipo") || '',
      temporada: params.get("temporada") || '',
      salida: params.get("salida") || ''
    };
  }
  function extraerAnioFinal(temporada) {
    if (!temporada) return 0;
    const match = temporada.match(/\d{2,4}$/);
    if (match) {
      let anio = parseInt(match[0]);
      if (anio < 100) {
        anio += (anio < 30 ? 2000 : 1900);
      }
      return anio;
    }
    return 0;
  }

  function renderProductos(pagina = 1) {
    const { tipo: filtroTipo, liga: filtroLiga, equipo: filtroEquipo, temporada: filtroTemporada, salida: filtroSalida} = getParametrosURL();

    actualizarBreadcrumb(
      filtroTipo !== 'todos' ? filtroTipo : null,
      filtroLiga || null,
      filtroEquipo || null,
      filtroTemporada || null,
      filtroSalida || null
    );

    const $contenedor = $('#camisetas');
    const $paginacion = $('#paginacion');
    $contenedor.empty();
    $paginacion.empty();

    const productosFiltrados = productosGlobal.filter(p => {
  const tipo = (p.tipo || '').toLowerCase();
  const liga = (p.liga || '').toLowerCase();
  const equipo = (p.equipo || '').toLowerCase();
  const temporada = (p.temporada || '').toLowerCase();
  const salida = (p.salida || '').toLowerCase();

  return (
    (filtroTipo === 'todos' || tipo.includes(filtroTipo)) &&
    (!filtroLiga || liga.includes(filtroLiga)) &&
    (!filtroEquipo || equipo.includes(filtroEquipo)) &&
    (!filtroTemporada || temporada.includes(filtroTemporada)) &&
    (!filtroSalida || salida.includes(filtroSalida))
  );
});


    productosFiltrados.sort((a, b) => {
      const equipoA = (a.equipo || '').toLowerCase();
      const equipoB = (b.equipo || '').toLowerCase();
      if (equipoA < equipoB) return -1;
      if (equipoA > equipoB) return 1;
      const temporadaA = extraerAnioFinal(a.temporada);
      const temporadaB = extraerAnioFinal(b.temporada);
      return temporadaB - temporadaA;
    });

    const porPagina = 12;
    const totalPaginas = Math.ceil(productosFiltrados.length / porPagina);
    const inicio = (pagina - 1) * porPagina;
    const fin = inicio + porPagina;
    const productosPagina = productosFiltrados.slice(inicio, fin);

    let row;
    productosPagina.forEach((producto, index) => {
      if (index % 4 === 0) {
        row = $('<div class="row g-4"></div>');
        $contenedor.append(row);
      }

      const tarjeta = $(`
        <div class="col-6 col-md-6 col-lg-3 d-flex mb-4 tarjeta-producto fade-in" 
             data-tipo="${(producto.tipo || '').toLowerCase()}"
             data-liga="${(producto.liga || '').toLowerCase()}"
             data-equipo="${(producto.equipo || '').toLowerCase()}">
          <div class="card text-white h-100 flip-card w-100">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <div class="card-body d-flex flex-column text-black">
                  <span class="badge-tipo ${producto.tipo.toLowerCase()}">¡${producto.tipo}!</span>
                  <a href="./detalle.html?id=${producto.id}">
                    <img src="./${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                  </a>
                  <h5 class="card-title fw-bold mt-2">${producto.nombre}</h5>
                  <p class="text-secondary">${producto.jugador} ${producto.dorsal}</p>
                  <p>S/ ${producto.precio}</p>
                </div>
              </div>
            </div>
          </div>
        </div>`);
      row.append(tarjeta);
    });

    for (let i = 1; i <= totalPaginas; i++) {
      const boton = $(`<button class="btn btn-outline-dark mx-1 ${i === pagina ? 'active' : ''}">${i}</button>`);
      boton.on('click', () => renderProductos(i));
      $paginacion.append(boton);
    }
  }

  $.getJSON("data/stock.json", function (productos) {
    productosGlobal = productos;
    renderProductos();
  });

  if (window.location.pathname.includes("detalle.html")) {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");

    if (id) {
      $.getJSON("data/stock.json", function (productos) {
        const producto = productos.find(p => p.id == id);
        if (producto) {
          actualizarBreadcrumb(
            producto.tipo ? producto.tipo.toLowerCase() : null,
            producto.liga ? producto.liga.toLowerCase() : null,
            producto.equipo ? producto.equipo.toLowerCase() : null,
            producto.temporada ? producto.temporada.toLowerCase() : null,
            producto.salida ? producto.salida.toLowerCase() : null
          );
        }
      });
    }
  }
});



/* ============================
    Carousel PRODUCTO
============================ */ 
$(document).ready(function () {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');

  if (!id) return;

  $.getJSON('data/stock.json', function (productos) {
    const producto = productos.find(p => p.id == id);
    if (!producto) return $('#carouselProducto .carousel-inner').html('<p>Producto no encontrado</p>');

    const wrapper = $('#carouselProducto .carousel-inner');
    const thumbs = $('#carouselThumbs');

    wrapper.empty();
    thumbs.empty();

    producto.imagenes.forEach((img, i) => {
      const item = $(`
      <div class="carousel-item ${i === 0 ? 'active' : ''}" data-index="${i}">
        <div class="zoom-container position-relative">
          <button class="btn btn-light btn-sm btn-fullscreen position-absolute top-0 end-0 m-2" data-index="${i}" title="Ver imagen completa">
            ⛶
          </button>
          <img src="${img}" class="zoom-img" alt="Imagen ${i + 1}">
        </div>
      </div>
    `);
      wrapper.append(item);

      const thumb = $(`
        <img src="${img}" 
             class="thumb-img ${i === 0 ? 'active' : ''}" 
             data-bs-target="#carouselProducto" 
             data-bs-slide-to="${i}" 
             data-index="${i}">
      `);
      thumbs.append(thumb);
    });

/* ============================
    ZOOM ALTERNO
============================ */ 

$(document).on('click', '.btn-fullscreen', function () {
  const index = $(this).data('index');
  const modalInner = $('#carouselFullscreen .carousel-inner');
  modalInner.empty();

  producto.imagenes.forEach((img, i) => {
    const item = `
      <div class="carousel-item ${i === index ? 'active' : ''}">
        <img src="${img}" class="d-block w-100" style="max-height: 90vh; object-fit: contain;" alt="Imagen ${i + 1}">
      </div>
    `;
    modalInner.append(item);
  });

  // Reinicia el carrusel para aplicar transiciones correctamente
  const carousel = bootstrap.Carousel.getOrCreateInstance(document.getElementById('carouselFullscreen'));
  carousel.to(index); // lleva al slide correspondiente (más suave)
  
  const modal = new bootstrap.Modal(document.getElementById('modalFullscreen'));
  modal.show();
});

/* ============================
    EFECTO ZOOM
============================ */ 
let zoomActivo = false;

$(document).on("click", ".zoom-img", function (e) {
  const $img = $(this);
  zoomActivo = !zoomActivo;

  if (zoomActivo) {
    const rect = $img[0].getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    $img.css({
      transform: "scale(3)",
      "transform-origin": `${x}% ${y}%`,
      cursor: "move"
    });
  } else {
    $img.css({
      transform: "scale(1)",
      "transform-origin": "center center",
      cursor: "zoom-in"
    });
  }
});

/* ============================
    EFECTO MOVIMIENTO ZOOM
============================ */ 

$(document).on("mousemove", ".zoom-img", function (e) {
  if (!zoomActivo) return;

  const $img = $(this);
  const rect = $img[0].getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;

  $img.css({
    "transform-origin": `${x}% ${y}%`
  });
});


    $('#carouselProducto').on('slid.bs.carousel', function (e) {
      const index = $(e.relatedTarget).data('index');
      $('.thumb-img').removeClass('active').eq(index).addClass('active');
    });

    const tallas = producto.tallas.split(',').map(t => t.trim());

const html = `
  <h1 class="mb-4 "><span class="text-dark">${capitalize(producto.tipo)} - </span>
  <span class="text-skyblue">${producto.equipo} ${producto.temporada}</span>
  </h1>
  <table class="table transparent-table mb-4 mt-4">
  <tbody>
    <tr>
      <th scope="row">Temporada</th>
      <td class="text-dark text-center">${producto.temporada}</td>
    </tr>
    <tr>
      <th scope="row">Nombre</th>
      <td class="text-dark text-center">${producto.jugador}</td>
    </tr>
    <tr>
      <th scope="row">Dorsal</th>
      <td class="text-dark text-center">${producto.dorsal}</td>
    </tr>
     <tr>
      <th scope="row">Tipo</th>
      <td class="text-dark text-center">${producto.salida}</td>
    </tr>
     <tr>
      <th scope="row">Corte</th>
      <td class="text-dark text-center">${producto.corte}</td>
    </tr>
  </tbody>
</table>
  <h3 class="mb-4 ">
  <span class="text-primary-accent">S/ ${producto.precio}</span>
  </h3>
  <h6 for="selectTalla" class="form-label text-dark">Tallas Disponibles</h6>
  <select id="selectTalla" class="form-select w-auto mb-4 mt-4">
    <option value="" disabled selected>-- Elegir talla --</option>
    ${tallas.map(talla => `<option value="${talla}">${talla}</option>`).join('')}
  </select>

  <p> <span class="text-skyblue mb-1 mt-4">(Envío gratis para todo el Perú)</span></p>

  <a id="btnWhatsapp" 
     href="#" 
     class="btn btn-success mt-3 disabled" 
     target="_blank">
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 32 32" fill="white">
            <path d="M16.002 3.2c-7.07 0-12.8 5.73-12.8 12.8 0 2.246.59 4.445 1.71 6.382L3.2 28.8l6.692-1.716c1.87 1.029 3.973 1.57 6.11 1.57 7.07 0 12.8-5.73 12.8-12.8s-5.73-12.754-12.8-12.754zm0 23.2c-1.843 0-3.648-.496-5.227-1.433l-.373-.22-3.98 1.016 1.067-3.88-.245-.39a10.3 10.3 0 01-1.57-5.32c0-5.714 4.653-10.368 10.368-10.368s10.368 4.653 10.368 10.368-4.653 10.368-10.368 10.368zm5.653-7.41c-.31-.155-1.837-.907-2.123-1.01-.286-.103-.495-.155-.704.155s-.81 1.01-.993 1.216c-.183.206-.366.233-.676.078s-1.32-.486-2.51-1.55c-.926-.825-1.55-1.843-1.73-2.15-.18-.31-.02-.478.135-.632.14-.14.31-.36.465-.54.155-.18.207-.31.31-.517.103-.206.05-.388-.026-.542s-.705-1.7-.966-2.327c-.254-.61-.512-.527-.704-.537l-.6-.01a1.13 1.13 0 00-.83.388c-.286.31-1.092 1.064-1.092 2.59s1.12 3.003 1.275 3.21c.155.206 2.21 3.38 5.356 4.743.748.322 1.33.514 1.785.656.75.238 1.432.205 1.97.124.6-.09 1.837-.75 2.097-1.473.26-.724.26-1.345.182-1.473-.078-.128-.28-.206-.59-.36z"/>
          </svg>
    Comprar por WhatsApp
  </a>
`;

  $('#detalle-producto-info').html(html);

  // Activar botón cuando se elige una talla
  $('#selectTalla').on('change', function () {
    const tallaSeleccionada = $(this).val();
    const mensaje = `Hola, quiero información sobre ${producto.nombre} - Talla ${tallaSeleccionada} - Referencia: ${window.location.origin}/GolVintage/detalle.html?id=${producto.id}`;
    const url = `https://wa.me/51993698755?text=${encodeURIComponent(mensaje)}`;

    $('#btnWhatsapp')
      .attr('href', url)
      .removeClass('disabled');
  });
});
});
