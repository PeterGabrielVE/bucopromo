/*
=========================================
Brain Core - Creative Dev Company
Ing Juan Pablo Perez
www.braincore.live
=========================================
*/

class bccore {

  page(bcx, bcl, pg) {

    if (bcx == bcl + '-' + pg) {

      console.log('PG:' + pg)
      return pg

    }
  }

  bcurl() {
    return 'https://bucopromo.com/manager/'
  }

  bcworkman(a,b,c,d){
    const ac = new bccore();

    if(b=='title-home'){
      $('title').empty()
      $('title').append(a)
    }

    if(b=='copyright'){

      $('.copyright').empty()
      $('.copyright').append(a)

    }

    if(b=='logo-home'){
      $('.logo-home').prop('src','bcpower/box/logoerp.png')
    }

    if(b=='nm-app'){
      $('.nm-app').empty()
      $('.nm-app').append(a)
    }

    if(b=='header-profile-user'){
      $('.header-profile-user').prop('src','bcpower/box/avatar-1.png')
    }

    if(b=='tablet'){
      $(a).empty()
      $(a).append('<div class="'+c+'" id="'+d+'"></div>')
    }

    if(b=='title-page'){
      $(a).empty()
      $(a).append(c)
    }


  }

  bcpagecore(a,b,c,d,e,f,g){

    const ac = new bccore();

    if(a=='login'){

      $(b).empty()
      $(b).append('  <div class="col-lg-6">\n' +
          '                                    <div class=" p-4  h-100">\n' +
          '                                        <div class="bg-overlay"></div>\n' +
          '                                        <div class="position-relative h-100 d-flex flex-column">\n' +
          '                                            <div class="mb-4">\n' +
          '                                                <a href="index.html" class="d-block">\n' +
          '                                                    <img  alt="" class="logo-home" src="bcpower/box/logoerp.png">\n' +
          '                                                </a>\n' +
          '                                            </div>\n' +
          '                                        </div>\n' +
          '                                    </div>\n' +
          '                                </div>\n' +
          '                                <!-- end col -->\n' +

          '                                <div class="col-lg-6">\n' +
          '                                    <div class="p-lg-5 p-4">\n' +
          '                                        <div>\n' +
          '                                            <h5 class="bc-text-home saludo">Buenas Noches !</h5>\n' +
          '                                            <p class="text-muted">Inicie con su usuario SportMan</p>\n' +
          '                                        </div>\n' +

          '                                        <div class="mt-4">\n' +
          '                                            <form action="index.html">\n' +

          '                                                <div class="mb-3">\n' +
          '                                                    <label for="username" class="form-label">Usuario</label>\n' +
          '                                                    <input type="text" class="form-control us" id="username" placeholder="Enter username">\n' +
          '                                                </div>\n' +

          '                                                <div class="mb-3">\n' +
          '                                                    <div class="float-end">\n' +
          '                                                        <a href="#!" class="text-muted">Se me olvido mi Password</a>\n' +
          '                                                    </div>\n' +
          '                                                    <label class="form-label" for="password-input">Password</label>\n' +
          '                                                    <div class="position-relative auth-pass-inputgroup mb-3">\n' +
          '                                                        <input type="password" class="form-control pe-5 ps" placeholder="Enter password" id="password-input">\n' +
          '                                                        <button class="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon" type="button" id="password-addon"><i class="ri-eye-fill align-middle ps-icon"></i></button>\n' +
          '                                                    </div>\n' +
          '                                                </div>\n' +

          '                                                <div class="form-check">\n' +
          '                                                    <input class="form-check-input" type="checkbox" value="" id="auth-remember-check">\n' +
          '                                                    <label class="form-check-label" for="auth-remember-check">Remember me</label>\n' +
          '                                                </div>\n' +

          '                                                <div class="mt-4">\n' +
          '                                                    <button class="btn bc-btn-secondary w-100 login" type="button">Iniciar</button>\n' +
          '                                                </div>\n' +


          '                                            </form>\n' +
          '                                        </div>\n' +
          '                                    </div>\n' +
          '                                </div>\n' +
          '                                <!-- end col -->')


      console.log(new Date())
      ac.horasaludo(new Date())

      $('.ps-icon').click(function(){
        ac.revelpass('#password-input','.ps-icon')
      });


      $('.login').click(function() {

        console.log('Login')

        var us = $('.us').val()
        var ps = $('.ps').val()

        if (!us || !ps) {
          Swal.fire('¡Tiene que ingresar un usuario y contraseña!')
          return false
        }

        ac.login(us, ps)

      })



    }

    if(a=='logo'){
      $(b).show()
      $(b).empty()
      $(b).append('<span class="logo-sm">\n' +
          '                        <img class="bclogo-sm"  alt="" height="22">\n' +
          '                    </span>\n' +
          '                    <span class="logo-lg">\n' +
          '                        <img class="bclogo" alt="" height="37">\n' +
          '                    </span>')

      ac.bcquery('info','settings','logo-sm','logo','.bclogo-sm',0,0,0)
      ac.bcquery('info','settings','logo-panel','logo','.bclogo',0,0,0)

    }

    if(a=='menu'){

      $(b).empty()
      $(b).append('                <li class="menu-title"><span data-key="t-menu">Menu</span></li>\n' +
          '                        <li class="nav-item v-dashboard">\n' +
          '                            <a class="nav-link link-dashboard"   role="button" aria-expanded="false" aria-controls="sidebarDashboards">\n' +
          '                                <i class="ri-mac-line"></i> <span>Dashboard</span>\n' +
          '                            </a>\n' +
          '                        </li>\n' +
          '                        <li class="nav-item v-marcaciones">\n' +
          '                            <a class="nav-link link-marcaciones"   role="button" aria-expanded="false" aria-controls="sidebarDashboards">\n' +
          '                                <i class="ri-fingerprint-line"></i> <span>Marcaciones</span>\n' +
          '                            </a>\n' +
          '                        </li>\n' +
          '                        <li class="nav-item v-personal">\n' +
          '                            <a class="nav-link link-personal"   role="button" aria-expanded="false" aria-controls="sidebarDashboards">\n' +
          '                                <i class="ri-file-user-fill"></i> <span>Personal</span>\n' +
          '                            </a>\n' +
          '                        </li>\n' +
          '                        <li class="nav-item v-ubicaciones">\n' +
          '                            <a class="nav-link link-ubicaciones"   role="button" aria-expanded="false" aria-controls="sidebarDashboards">\n' +
          '                                <i class="ri-map-pin-line "></i> <span>Ubicaciones</span>\n' +
          '                            </a>\n' +
          '                        </li>\n' +
          '                        <li class="nav-item v-reportes">\n' +
          '                            <a class="nav-link link-reportes"   role="button" aria-expanded="false" aria-controls="sidebarDashboards">\n' +
          '                                <i class=" ri-pie-chart-line  "></i> <span>Reportes</span>\n' +
          '                            </a>\n' +
          '                        </li>\n' +
          '                        <li class="nav-item v-ajustes">\n' +
          '                            <a class="nav-link link-ajustes"   role="button" aria-expanded="false" aria-controls="sidebarDashboards">\n' +
          '                                <i class="ri-tools-fill "></i> <span>Ajustes</span>\n' +
          '                            </a>\n' +
          '                        </li>' +
          '                        <li  class="menu-title v-licencias"><span data-key="t-menu">Opciones Administrador</span></li>'+
          '                        <li class="nav-item v-licencias">\n' +
          '                            <a class="nav-link link-licencias"  role="button" aria-expanded="false" aria-controls="sidebarDashboards">\n' +
          '                                <i class="ri-file-lock-line "></i> <span>Licencias</span>\n' +
          '                            </a>\n' +
          '                        </li>' +
          '')

      ac.menu(localStorage.getItem('lv'))

    }

    if(a=='options'){
      $(b).empty()
      $(b).append('<div class="ms-1 header-item d-none d-sm-flex">\n' +
          '                    <button type="button" class="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle" data-toggle="fullscreen">\n' +
          '                        <i class=\'bx bx-fullscreen fs-22\'></i>\n' +
          '                    </button>\n' +
          '                </div>\n' +
          '\n' +
          '                <div class="ms-1 header-item d-none d-sm-flex">\n' +
          '                    <button type="button" class="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle light-dark-mode">\n' +
          '                        <i class=\'bx bx-moon fs-22\'></i>\n' +
          '                    </button>\n' +
          '                </div>\n' +
          '\n' +
          '                <div class="dropdown topbar-head-dropdown ms-1 header-item" id="notificationDropdown">\n' +
          '                    <button type="button" class="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle" id="page-header-notifications-dropdown" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false">\n' +
          '                        <i class=\'bx bx-bell fs-22\'></i>\n' +
          '                        <span class="position-absolute topbar-badge fs-10 translate-middle badge rounded-pill bg-danger">0<span class="visually-hidden">unread messages</span></span>\n' +
          '                    </button>\n' +
          '                    <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0" aria-labelledby="page-header-notifications-dropdown">\n' +
          '\n' +
          '                        <div class="dropdown-head bg-primary bg-pattern rounded-top">\n' +
          '                            <div class="p-3">\n' +
          '                                <div class="row align-items-center">\n' +
          '                                    <div class="col">\n' +
          '                                        <h6 class="m-0 fs-16 fw-semibold text-white"> Notifications </h6>\n' +
          '                                    </div>\n' +
          '                                    <div class="col-auto dropdown-tabs">\n' +
          '                                        <span class="badge bg-light-subtle text-body fs-13"> 0 New</span>\n' +
          '                                    </div>\n' +
          '                                </div>\n' +
          '                            </div>\n' +
          '\n' +
          '                            <div class="px-2 pt-2">\n' +
          '                                <ul class="nav nav-tabs dropdown-tabs nav-tabs-custom" data-dropdown-tabs="true" id="notificationItemsTab" role="tablist">\n' +
          '                                    <li class="nav-item waves-effect waves-light">\n' +
          '                                        <a class="nav-link active" data-bs-toggle="tab" href="#all-noti-tab" role="tab" aria-selected="true">\n' +
          '                                            All (0)\n' +
          '                                        </a>\n' +
          '                                    </li>\n' +
          '                                    <li class="nav-item waves-effect waves-light">\n' +
          '                                        <a class="nav-link" data-bs-toggle="tab" href="#messages-tab" role="tab" aria-selected="false">\n' +
          '                                            Messages\n' +
          '                                        </a>\n' +
          '                                    </li>\n' +
          '                                    <li class="nav-item waves-effect waves-light">\n' +
          '                                        <a class="nav-link" data-bs-toggle="tab" href="#alerts-tab" role="tab" aria-selected="false">\n' +
          '                                            Alerts\n' +
          '                                        </a>\n' +
          '                                    </li>\n' +
          '                                </ul>\n' +
          '                            </div>\n' +
          '\n' +
          '                        </div>\n' +
          '\n' +
          '                        <div class="tab-content position-relative" id="notificationItemsTabContent">\n' +
          '                            <div class="tab-pane fade show active py-2 ps-2" id="all-noti-tab" role="tabpanel">\n' +
          '                                <div data-simplebar style="max-height: 300px;" class="pe-2">\n' +


          '\n' +
          '                                    <div class="my-3 text-center view-all">\n' +
          '                                        <button type="button" class="btn btn-soft-success waves-effect waves-light">View\n' +
          '                                            All Notifications <i class="ri-arrow-right-line align-middle"></i></button>\n' +
          '                                    </div>\n' +
          '                                </div>\n' +
          '\n' +
          '                            </div>\n' +
          '\n' +
          '                            <div class="tab-pane fade py-2 ps-2" id="messages-tab" role="tabpanel" aria-labelledby="messages-tab">\n' +
          '                                <div data-simplebar style="max-height: 300px;" class="pe-2">\n' +


          '                                    <div class="my-3 text-center view-all">\n' +
          '                                        <button type="button" class="btn btn-soft-success waves-effect waves-light">View\n' +
          '                                            All Messages <i class="ri-arrow-right-line align-middle"></i></button>\n' +
          '                                    </div>\n' +
          '                                </div>\n' +
          '                            </div>\n' +
          '                            <div class="tab-pane fade p-4" id="alerts-tab" role="tabpanel" aria-labelledby="alerts-tab"></div>\n' +
          '\n' +
          '                            <div class="notification-actions" id="notification-actions">\n' +
          '                                <div class="d-flex text-muted justify-content-center">\n' +
          '                                    Select <div id="select-content" class="text-body fw-semibold px-1">0</div> Result <button type="button" class="btn btn-link link-danger p-0 ms-3" data-bs-toggle="modal" data-bs-target="#removeNotificationModal">Remove</button>\n' +
          '                                </div>\n' +
          '                            </div>\n' +
          '                        </div>\n' +
          '                    </div>\n' +
          '                </div>\n' +
          '\n' +
          '                <div class="dropdown ms-sm-3 header-item topbar-user">\n' +
          '                    <button type="button" class="btn" id="page-header-user-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n' +
          '                        <span class="d-flex align-items-center">\n' +
          '                            <img class="rounded-circle header-profile-user"  alt="Header Avatar">\n' +
          '                            <span class="text-start ms-xl-2">\n' +
          '                                <span class="d-none d-xl-inline-block ms-1 fw-medium user-name-text">'+localStorage.getItem('name')+'</span>\n' +
          '                                <span class="d-none d-xl-block ms-1 fs-12 user-name-sub-text">'+localStorage.getItem('email')+'</span>\n' +
          '                            </span>\n' +
          '                        </span>\n' +
          '                    </button>\n' +
          '                    <div class="dropdown-menu dropdown-menu-end">\n' +
          '                        <!-- item-->\n' +
          '                        <h6 class="dropdown-header">Welcome '+localStorage.getItem('name')+'!</h6>\n' +
          '                        <a class="dropdown-item" href="pages-profile.html"><i class="mdi mdi-account-circle text-muted fs-16 align-middle me-1"></i> <span class="align-middle">Profile</span></a>\n' +
          '                        <div class="dropdown-divider"></div>\n' +
          '                        <a class="dropdown-item" href="index.html"><i class="mdi mdi-logout text-muted fs-16 align-middle me-1"></i> <span class="align-middle" data-key="t-logout">Logout</span></a>\n' +
          '                    </div>\n' +
          '                </div>')


      ac.bcworkman('header-profile-user','header-profile-user',0,0)

    }

    //Dashboard Central

    if(a=='contadores'){
      $(b).empty()
      $(b).append('   <div class="col-xl-4">\n' +
          '                                    <div class="card card-animate">\n' +
          '                                        <div class="card-body">\n' +
          '                                            <div class="d-flex align-items-center">\n' +
          '                                                <div class="avatar-sm flex-shrink-0">\n' +
          '                                                    <span class="avatar-title bg-success-subtle text-success rounded-2 fs-2">\n' +
          '                                                        <i data-feather="user-check" class="text-success"></i>\n' +
          '                                                    </span>\n' +
          '                                                </div>\n' +

          '                                                <div class="flex-grow-1 overflow-hidden ms-3">\n' +
          '                                                    <p class="text-uppercase fw-medium text-muted text-truncate mb-3">Usuarios Activos</p>\n' +
          '                                                    <div class="d-flex align-items-center mb-3">\n' +
          '                                                        <h4 class="flex-grow-1 mb-0"><span class="counter-value uactivos" data-target="0">0</span></h4>\n' +
          '                                                        <span class="badge bg-success-subtle text-success fs-12"><i class="ri-arrow-down-s-line fs-13 align-middle me-1"></i>0.00 %</span>\n' +
          '                                                    </div>\n' +
          '                                                    <p class="text-muted text-truncate mb-0">Marcacion Hoy</p>\n' +
          '                                                </div>\n' +

          '                                            </div>\n' +
          '                                        </div><!-- end card body -->\n' +
          '                                    </div>\n' +
          '                                </div><!-- end col -->\n' +
          '\n' +
          '                                <div class="col-xl-4">\n' +
          '                                    <div class="card card-animate">\n' +
          '                                        <div class="card-body">\n' +
          '                                            <div class="d-flex align-items-center">\n' +
          '                                                <div class="avatar-sm flex-shrink-0">\n' +
          '                                                    <span class="avatar-title bg-danger-subtle rounded-2 fs-2">\n' +
          '                                                        <i data-feather="user-x" class="text-danger"></i>\n' +
          '                                                    </span>\n' +
          '                                                </div>\n' +

          '                                                <div class="flex-grow-1 ms-3">\n' +
          '                                                    <p class="text-uppercase fw-medium text-muted mb-3">Usuarios Inactivos</p>\n' +
          '                                                    <div class="d-flex align-items-center mb-3">\n' +
          '                                                        <h4 class="flex-grow-1 mb-0"><span class="counter-value uinactivos" data-target="0">0</span></h4>\n' +
          '                                                        <span class="badge bg-danger-subtle text-danger fs-12"><i class="ri-arrow-up-s-line fs-13 align-middle me-1"></i>0 %</span>\n' +
          '                                                    </div>\n' +
          '                                                    <p class="text-muted mb-0">Sin Marcaciones</p>\n' +
          '                                                </div>\n' +

          '                                            </div>\n' +
          '                                        </div><!-- end card body -->\n' +
          '                                    </div>\n' +
          '                                </div><!-- end col -->\n' +
          '\n' +
          '                                <div class="col-xl-4">\n' +
          '                                    <div class="card card-animate">\n' +
          '                                        <div class="card-body">\n' +
          '                                            <div class="d-flex align-items-center">\n' +
          '                                                <div class="avatar-sm flex-shrink-0">\n' +
          '                                                    <span class="avatar-title bg-warning-subtle text-warning rounded-2 fs-2">\n' +
          '                                                        <i data-feather="clock" class="text-warning"></i>\n' +
          '                                                    </span>\n' +
          '                                                </div>\n' +
          '                                                <div class="flex-grow-1 overflow-hidden ms-3">\n' +
          '                                                    <p class="text-uppercase fw-medium text-muted text-truncate mb-3">Total Usuarios</p>\n' +
          '                                                    <div class="d-flex align-items-center mb-3">\n' +
          '                                                        <h4 class="flex-grow-1 mb-0"><span class="counter-value utotales" data-target="0">0</span></h4>\n' +
          '                                                        <span class="badge bg-warning-subtle text-warning fs-12"><i class="ri-arrow-down-s-line fs-13 align-middle me-1"></i>100 %</span>\n' +
          '                                                    </div>\n' +
          '                                                    <p class="text-muted text-truncate mb-0">Total de Usuarios</p>\n' +
          '                                                </div>\n' +
          '                                            </div>\n' +
          '                                        </div><!-- end card body -->\n' +
          '                                    </div>\n' +
          '                                </div><!-- end col -->')

      ac.bcquery('info','contadores','usuarios-activos',localStorage.getItem('cmp'),0,0,0,0)


    }

    if(a=='licencias'){

      $(b).empty()
      $(b).append('<div class="container-fluid">\n' +
          '\n' +
          '                    <div class="position-relative mx-n4 mt-n4">\n' +
          '                        <div class="profile-wid-bg profile-setting-img">\n' +
          '                            <img  class="profile-wid-img" alt="">\n' +
          '                            <div class="overlay-content">\n' +



          '                            </div>\n' +
          '                        </div>\n' +
          '                    </div>\n' +
          '\n' +
          '                    <div class="row">\n' +
          '                        <!--end col-->\n' +
          '                        <div class="col-xxl-12">\n' +
          '                            <div class="card mt-xxl-n5">\n' +
          '                                <div class="card-header">\n' +
          '                                    <ul class="nav nav-tabs-custom rounded card-header-tabs border-bottom-0" role="tablist">\n' +

          '                                        <li class="nav-item">\n' +
          '                                            <a class="nav-link active" data-bs-toggle="tab" href="#tabLicencias" role="tab">\n' +
          '                                                <i class="fas fa-home"></i> Licencias\n' +
          '                                            </a>\n' +
          '                                        </li>\n' +
          '                                    </ul>\n' +
          '                                </div>\n' +
          '                                <div class="card-body p-4">\n' +
          '                                    <div class="tab-content">\n' +
          '                                        <!--end tab-pane-->\n' +
          '                                        <div class="tab-pane active" id="tabLicencias" role="tabpanel">\n' +

          '                                            <form action="javascript:void(0);">\n' +
          '                                                <div class="row g-2">\n' +
          '                                                    <div class="col-lg-12">\n' +
          '                                                        <div class="text-end">\n' +
          '                                                            <button type="button" class="btn btn-secondary btn-cr-empresas">Crear Empresa</button>\n' +
          '                                                            <button type="button" class="btn btn-secondary btn-lista-empresas">Lista de Empresas</button>\n' +
          '                                                        </div>\n' +
          '                                                    </div>\n' +
          '                                                    <!--end col-->\n' +
          '                                                </div>\n' +
          '                                                <!--end row-->\n' +
          '                                            </form>\n' +

          '                                            <div class="mb-1 border-bottom pb-2">\n' +
          '                                                <h5 class="card-title bc-empresa-title">Empresas Licenciadas</h5>\n' +
          '                                            </div>' +
                                  '                    <div class="row ">\n' +
                                  '                        <div class="col-lg-12">\n' +
                                  '                            <div class="card">\n' +
                                  '                                <div class="card-body tbm-empresas"></div>\n' +
                                  '                            </div>\n' +
                                  '                        </div><!--end col-->\n' +
                                  '                    </div><!--end row-->' +
          '                                        </div>\n' +
          '                                        <!--end tab-pane-->\n' +
          '                                    </div>\n' +
          '                                </div>\n' +
          '                            </div>\n' +
          '                        </div>\n' +
          '                        <!--end col-->\n' +
          '                    </div>\n' +
          '                    <!--end row-->\n' +
          '\n' +
          '                </div>')

      $('.btn-lista-empresas').hide()
      $('.btn-cr-empresas').show()
      ac.bcworkman('.bc-empresa-title','title-page','Empresas Licenciadas',0)

      ac.bcquery('info','settings','bg-licencia','bg-licencia','.profile-wid-img',0,0,0)
      ac.bcworkman('.tbm-empresas','tablet','t-empresas','t-empresas')
      ac.bctablet('empresas','t-empresas', 0, 0, 0,0,0,0)

      $('.btn-cr-empresas').click(function() {

        $('.btn-cr-empresas').hide()
        $('.btn-lista-empresas').show()
          ac.bcworkman('.bc-empresa-title','title-page','Creación de Empresas - Campos Requeridos <span class="text-danger">***</span>',0)
          ac.bcpagecore('crear-empresa','.tbm-empresas',0,0,0,0,0)
          ac.bcpagecore('menu','.navbar-nav',0,0,0,0,0)

      })

      $('.btn-lista-empresas').click(function() {

        $('.btn-cr-empresas').show()
        $('.btn-lista-empresas').hide()
        ac.bcworkman('.bc-empresa-title','title-page','Empresas Licenciadas',0)
        ac.bcworkman('.tbm-empresas','tablet','t-empresas','t-empresas')
        ac.bctablet('empresas','t-empresas', 0, 0, 0,0,0,0)
        ac.bcpagecore('menu','.navbar-nav',0,0,0,0,0)

      })


    }

    if(a=='start-page-title'){

      $(b).empty()
      $(b).prepend(' <!-- start page title -->\n' +
          '                    <div class="row">\n' +
          '                        <div class="col-12">\n' +
          '                            <div class="page-title-box d-sm-flex align-items-center justify-content-between">\n' +
          '                                <h4 class="mb-sm-0 nm-app"></h4>\n' +
          '\n' +
          '                                <div class="page-title-right">\n' +
          '                                    <ol class="breadcrumb m-0">\n' +
          '                                        <li class="breadcrumb-item"><a href="javascript: void(0);">Dashboard</a></li>\n' +
          '                                        <li class="breadcrumb-item active nm-app"></li>\n' +
          '                                    </ol>\n' +
          '                                </div>\n' +
          '\n' +
          '                            </div>\n' +
          '                        </div>\n' +
          '                    </div>\n' +
          '                    <!-- end page title -->')

      ac.bcworkman('FingerScan Neo','nm-app',0,0)


    }

    if(a=='kpistart'){
      $(b).empty()
      $(b).append('              <div class="start-page-title"></div><div class="row project-wrapper">\n' +
          '                        <div class="col-xxl-8">\n' +
          '                            <div class="row v-contadores"></div><!-- end row -->\n' +
          '                            <div class="row">\n' +
          '                                <div class="col-xl-12">\n' +
          '                                    <div class="card">\n' +
          '                                        <div class="card-body p-0 pb-2 tbm-marcaciones"></div><!-- end card body -->\n' +
          '                                    </div><!-- end card -->\n' +
          '                                </div><!-- end col -->\n' +
          '                            </div><!-- end row -->\n' +

          '                        </div><!-- end col -->\n' +
          '\n' +
          '                        <div class="col-xxl-4">\n' +
          '                            <div class="card">\n' +
          '                                <div class="card-header border-0">\n' +
          '                                    <h4 class="card-title mb-0">Registro Diario </h4>\n' +
          '                                </div><!-- end cardheader -->\n' +
          '                                <div class="card-body pt-0">\n' +
          '                                    <div class="upcoming-scheduled">\n' +
          '                                        <input type="text" class="form-control fecha-marcacion" data-provider="flatpickr" data-date-format="d M, Y" data-deafult-date="today" data-inline-date="true">\n' +
          '                                    </div>\n' +
          '\n' +
          '                                    <h6 class="text-uppercase fw-semibold mt-4 mb-3 text-muted">Marcaciones:</h6>\n' +

          '                                    <div class="bc-timeline"></div><!-- end -->\n' +

          '\n' +
          '                                </div><!-- end cardbody -->\n' +
          '                            </div><!-- end card -->\n' +
          '                        </div><!-- end col -->\n' +
          '\n' +
          '                    </div><!-- end row -->\n')
      localStorage.setItem('area-main',a)
      ac.bcpagecore('contadores','.v-contadores',0,0,0,0,0)
      ac.bcworkman('.tbm-marcaciones','tablet','t-marcaciones','t-marcaciones')
      ac.bctablet('marcaciones-home','t-marcaciones', 0, 0, 0,0,0,0)
      ac.bcquery('data','marcaciones','timeline',localStorage.getItem('cmp'),'.bc-timeline',0,0,0)
      $('.fecha-marcacion').flatpickr({
        inline: true,
        altInput: true,
        altFormat: "F j, Y",
        dateFormat: "Y-m-d",
            onChange: function(selectedDates, dateStr, instance) {
              let fecha = JSON.parse(JSON.stringify(selectedDates));
              let dt=fecha[0].split("T")
              console.log(dt[0])
              ac.bcquery('data','marcaciones','timeline',localStorage.getItem('cmp'),'.bc-timeline',dt[0],0,0)
              ac.bcpagecore('contadores','.v-contadores',0,0,0,0,0)
              ac.bcpagecore('menu','.navbar-nav',0,0,0,0,0)
            },
      }
      )









    }

    if(a=='crear-empresa'){

      $(b).empty()
      $(b).append(     '                            <form action="javascript:void(0);">\n' +
          '                                                <div class="row">\n' +
          '                                                    <div class="col-lg-4">\n' +
          '                                                        <div class="mb-3">\n' +
          '                                                            <label for="Empresa" class="form-label">Empresa <span class="text-danger">*</span></label>\n' +
          '                                                            <input type="text" class="form-control mne" id="Empresa" placeholder="Nombre de Empresa">\n' +
          '                                                        </div>\n' +
          '                                                    </div>\n' +
          '                                                    <!--end col-->\n' +
          '                                                    <div class="col-lg-4">\n' +
          '                                                        <div class="mb-3">\n' +
          '                                                            <label for="Ruc" class="form-label">RUC <span class="text-danger">*</span></label>\n' +
          '                                                            <input type="text" class="form-control ruc" id="Ruc" placeholder="RUC de la Empresa" >\n' +
          '                                                        </div>\n' +
          '                                                    </div>\n' +
          '                                                    <div class="col-lg-4">\n' +
          '                                                        <div class="mb-3">\n' +
          '                                                            <label for="Contacto" class="form-label">Contacto <span class="text-danger">*</span></label>\n' +
          '                                                            <input type="text" class="form-control cnt" id="Contacto" placeholder="Contacto de la Empresa" >\n' +
          '                                                        </div>\n' +
          '                                                    </div>\n' +
          '                                                    <!--end col-->\n' +
          '                                                    <div class="col-lg-6">\n' +
          '                                                        <div class="mb-3">\n' +
          '                                                            <label for="phone" class="form-label">Teléfono <span class="text-danger">*</span></label>\n' +
          '                                                            <input type="text" class="form-control ph" id="phone" placeholder="Teléfono de Contacto" >\n' +
          '                                                        </div>\n' +
          '                                                    </div>\n' +
          '                                                    <!--end col-->\n' +
          '                                                    <div class="col-lg-6">\n' +
          '                                                        <div class="mb-3">\n' +
          '                                                            <label for="email" class="form-label">Email <span class="text-danger">*</span></label>\n' +
          '                                                            <input type="email" class="form-control em" id="email" placeholder="Email de contacto" >\n' +
          '                                                        </div>\n' +
          '                                                    </div>\n' +
          '                                                    <div class="col-lg-4">\n' +
          '                                                        <div class="mb-3">\n' +
          '                                                            <label for="CUsuarios" class="form-label">Cantidad de Usuarios <span class="text-danger">*</span></label>\n' +
          '                                                            <input type="text" class="form-control cu" id="CUsuarios" placeholder="Numero de usuarios" >\n' +
          '                                                        </div>\n' +
          '                                                    </div>\n' +
          '                                                    <!--end col-->\n' +
          '                                                    <div class="col-lg-4">\n' +
          '                                                        <div class="mb-3">\n' +
          '                                                            <label for="TLicencia" class="form-label">Tiempo de la Licencia <span class="text-danger">*</span></label>\n' +
          '                                                            <input type="text" class="form-control tl" id="TLicencia" placeholder="Tiempo" >\n' +
          '                                                        </div>\n' +
          '                                                    </div>\n' +
          '                                                    <!--end col-->\n' +
          '                                                    <div class="col-lg-4">\n' +
          '                                                        <div class="mb-3">\n' +
          '                                                            <label for="CUsuario" class="form-label">Costo por Usuario <span class="text-danger">*</span></label>\n' +
          '                                                            <input type="email" class="form-control cpu" id="CUsuario" placeholder="Costo" >\n' +
          '                                                        </div>\n' +
          '                                                    </div>\n' +
          '                                                    <!--end col-->\n' +
          '                                                    <div class="col-lg-12">\n' +
          '                                                        <div class="hstack gap-2 justify-content-end">\n' +
          '                                                            <button type="button" class="btn btn-secondary go-save-info">Guardar Información</button>\n' +
          '                                                            <button type="button" class="btn btn-secondary go-editar-info">Guardar Información</button>\n' +
          '                                                            <button type="button" class="btn btn-soft-danger btn-cancel">Cancel</button>\n' +
          '                                                        </div>\n' +
          '                                                    </div>\n' +
          '                                                    <!--end col-->\n' +
          '                                                </div>\n' +
          '                                                <!--end row-->\n' +
          '                                            </form>\n')

      $('.go-editar-info').hide()
      $('.go-save-info').show()

      $('.btn-cancel').click(function() {

        $('.btn-cr-empresas').show()
        $('.btn-lista-empresas').hide()
        ac.bcworkman('.bc-empresa-title','title-page','Empresas Licenciadas',0)
        ac.bcworkman('.tbm-empresas','tablet','t-empresas','t-empresas')
        ac.bctablet('empresas','t-empresas', 0, 0, 0,0,0,0)
        ac.bcpagecore('menu','.navbar-nav',0,0,0,0,0)

      })

      $('.go-save-info').click(function() {ac.bcform(a)})




    }

    if(a=='ajustes'){

      $(b).empty()
      $(b).append('<div class="container-fluid">\n' +
          '\n' +
          '                    <div class="position-relative mx-n4 mt-n4">\n' +
          '                        <div class="profile-wid-bg profile-setting-img">\n' +
          '                            <img  class="profile-wid-img" alt="">\n' +
          '                            <div class="overlay-content"></div>\n' +
          '                        </div>\n' +
          '                    </div>\n' +
          '\n' +
          '                    <div class="row">\n' +
          '                        <!--end col-->\n' +
          '                        <div class="col-xxl-12">\n' +
          '                            <div class="card mt-xxl-n5">\n' +
          '                                <div class="card-header">\n' +
          '                                    <ul class="nav nav-tabs-custom rounded card-header-tabs border-bottom-0" role="tablist">\n' +

          '                                        <li class="nav-item">\n' +
          '                                            <a class="nav-link active" data-bs-toggle="tab" href="#tabAjustes" role="tab">\n' +
          '                                                <i class="fas fa-home"></i> Ajustes\n' +
          '                                            </a>\n' +
          '                                        </li>\n' +
          '                                    </ul>\n' +
          '                                </div>\n' +
          '                                <div class="card-body p-4">\n' +
          '                                    <div class="tab-content">\n' +
          '                                        <!--end tab-pane-->\n' +
          '                                        <div class="tab-pane active" id="tabAjustes" role="tabpanel">' +
          '                                            <div class="mb-3">\n' +
          '                                                <h5 class="card-title text-decoration-underline mb-3">Ajustes Generales:</h5>\n' +
          '                                                <ul class="list-unstyled mb-0">\n' +
          '                                                    <li class="d-flex mt-2">\n' +
          '                                                        <div class="flex-grow-1">\n' +
          '                                                            <label class="form-check-label fs-14" for="desktopNotification">\n' +
          '                                                                Ver el la ubicacion en el historial en la Aplicacion\n' +
          '                                                            </label>\n' +
          '                                                            <p class="text-muted">Los usuarios pueden ver la ubicacion donde marcaron.</p>\n' +
          '                                                        </div>\n' +
          '                                                        <div class="flex-shrink-0">\n' +
          '                                                            <div class="form-check form-switch">\n' +
          '                                                                <input class="form-check-input ubh-app" type="checkbox" role="switch" id="ubh-app"/>\n' +
          '                                                            </div>\n' +
          '                                                        </div>\n' +
          '                                                    </li>\n' +

          '                                                </ul>\n' +
          '                                            </div>\n' +
          '                                            <div class="mb-5">\n' +
          '                                                <h5 class="card-title text-decoration-underline mb-3">Distancia de Marcación:</h5>\n' +
          '                                                <p class="text-muted">Esta es la distancia minima a la cual pueden marcar los usuarios:</p>\n' +
          '                                                <div class="mb-3 col-3">\n' +
          '                                            <label class="form-label" for="psa">Distancia (mts)</label>\n' +
          '                                            <div class="position-relative auth-pass-inputgroup">\n' +
          '                                                <input type="number" class="form-control pe-5 password-input dst"  placeholder="0" id="dst" >\n' +
          '                                            </div>\n' +
          '                                            <div id="passwordInput" class="form-text">Distancia minima de marcacion para los usuarios.</div>\n' +
          '                                        </div>\n' +
          '                                                <div class="hstack gap-2 mt-3">\n' +
          '                                                    <a href="javascript:void(0);" class="btn btn-soft-danger go-update-dst">Guardar Distancia</a>\n' +
          '                                                </div>\n' +
          '                                            </div>' +


          '                                            <div>\n' +
          '                                                <h5 class="card-title text-decoration-underline mb-3">Cambio de Contraseña:</h5>\n' +
          '                                                <p class="text-muted">Quiere cambiar su contraseña de inicio al ERP:</p>\n' +
          '                                                <div class="mb-3 col-3">\n' +
          '                                            <label class="form-label" for="psa">Contraseña</label>\n' +
          '                                            <div class="position-relative auth-pass-inputgroup">\n' +
          '                                                <input type="password" class="form-control pe-5 password-input psa" onpaste="return false" placeholder="*************" id="psa" aria-describedby="passwordInput" pattern="(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required >\n' +
          '                                                <button class="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon " type="button" id="psa-btn"><i class="ri-eye-fill align-middle psa-icon"></i></button>\n' +
          '                                            </div>\n' +
          '                                            <div id="passwordInput" class="form-text">No menor a 8 caracteres.</div>\n' +
          '                                        </div>\n' +
          '                                        <div class="mb-3 col-3">\n' +
          '                                            <label class="form-label" for="psb">Confirmar Contraseña</label>\n' +
          '                                            <div class="position-relative auth-pass-inputgroup mb-3">\n' +
          '                                                <input type="password" class="form-control pe-5 password-input psb" onpaste="return false" placeholder="*************" pattern="(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" id="psb" required >\n' +
          '                                                <button class="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon " type="button" id="psb-btn"><i class="ri-eye-fill align-middle psb-icon"></i></button>\n' +
          '                                            </div>\n' +
          '                                        </div>' +
          '                                                <div class="hstack gap-2 mt-3">\n' +
          '                                                    <a href="javascript:void(0);" class="btn btn-soft-danger go-update-ps">Cambiar Contraseña</a>\n' +
          '                                                </div>\n' +
          '                                            </div>' +
          '                                         </div>\n' +
          '                                        <!--end tab-pane-->\n' +
          '                                    </div>\n' +
          '                                </div>\n' +
          '                            </div>\n' +
          '                        </div>\n' +
          '                        <!--end col-->\n' +
          '                    </div>\n' +
          '                    <!--end row-->\n' +
          '\n' +
          '                </div>')


      ac.bcquery('info','settings','bg-licencia','bg-licencia','.profile-wid-img',0,0,0)
      ac.bcquery('info','ajustes','mensajeria',localStorage.getItem('cmp'),'.msn-app',0,0,0)
      ac.bcquery('info','ajustes','historial',localStorage.getItem('cmp'),'.ubh-app',0,0,0)
      ac.bcquery('info','ajustes','distancia',localStorage.getItem('cmp'),'.dst',0,0,0)


      $('.psa-icon').click(function(){
        ac.revelpass('#psa','.psa-icon')
      });

      $('.psb-icon').click(function(){
        ac.revelpass('#psb','.psb-icon')
      });

      $('.go-update-ps').click(function() {

        ac.bcform('update-ps')

      })

      $('.go-update-dst').click(function() {

        ac.bcform('update-dst')

      })

      $('.msn-app').on('change', function () {

        if ($('.msn-app').prop("checked") == true) {

              localStorage.setItem('msn-check', 1)
              ac.bcform('msn-app')

        }

        if ($('.msn-app').prop("checked") == false) {

              localStorage.setItem('msn-check', 0)
              ac.bcform('msn-app')

        }

      })

      $('.ubh-app').on('change', function () {

        if ($('.ubh-app').prop("checked") == true) {

          localStorage.setItem('ubh-check', 1)
          ac.bcform('ubh-app')

        }

        if ($('.ubh-app').prop("checked") == false) {

          localStorage.setItem('ubh-check', 0)
          ac.bcform('ubh-app')

        }

      })




    }

    if(a=='ubicaciones'){

      $(b).empty()
      $(b).append('<div class="container-fluid">\n' +
          '\n' +
          '                    <div class="position-relative mx-n4 mt-n4">\n' +
          '                        <div class="profile-wid-bg profile-setting-img">\n' +
          '                            <img  class="profile-wid-img" alt="">\n' +
          '                            <div class="overlay-content"></div>\n' +
          '                        </div>\n' +
          '                    </div>\n' +
          '\n' +
          '                    <div class="row">\n' +
          '                        <!--end col-->\n' +
          '                        <div class="col-xxl-12">\n' +
          '                            <div class="card mt-xxl-n5">\n' +
          '                                <div class="card-header">\n' +
          '                                    <ul class="nav nav-tabs-custom rounded card-header-tabs border-bottom-0" role="tablist">\n' +

          '                                        <li class="nav-item">\n' +
          '                                            <a class="nav-link active" data-bs-toggle="tab" href="#tabubicaciones" role="tab">\n' +
          '                                                <i class="fas fa-home"></i> Ubicaciones\n' +
          '                                            </a>\n' +
          '                                        </li>\n' +
          '                                    </ul>\n' +
          '                                </div>\n' +
          '                                <div class="card-body p-4">\n' +
          '                                    <div class="tab-content">\n' +
          '                                        <!--end tab-pane-->\n' +
          '                                        <div class="tab-pane active" id="tabubicaciones" role="tabpanel">\n' +

          '                                            <form action="javascript:void(0);">\n' +
          '                                                <div class="row g-2">\n' +
          '                                                    <div class="col-lg-12">\n' +
          '                                                        <div class="text-end">\n' +
          '                                                            <button type="button" class="btn btn-secondary btn-cr-ubicaciones">Crear Ubicacion</button>\n' +
          '                                                            <button type="button" class="btn btn-secondary btn-lista-ubicaciones">Lista de Ubicaciones</button>\n' +
          '                                                        </div>\n' +
          '                                                    </div>\n' +
          '                                                    <!--end col-->\n' +
          '                                                </div>\n' +
          '                                                <!--end row-->\n' +
          '                                            </form>\n' +

          '                                            <div class="mb-1 border-bottom pb-2">\n' +
          '                                                <h5 class="card-title bc-ubicaciones-title">Ubicaciones Disponibles</h5>\n' +
          '                                            </div>' +
          '                    <div class="row ">\n' +
          '                        <div class="col-lg-12">\n' +
          '                            <div class="card">\n' +
          '                                <div class="card-body tbm-ubicaciones"></div>\n' +
          '                            </div>\n' +
          '                        </div><!--end col-->\n' +
          '                    </div><!--end row-->' +
          '                                        </div>\n' +
          '                                        <!--end tab-pane-->\n' +
          '                                    </div>\n' +
          '                                </div>\n' +
          '                            </div>\n' +
          '                        </div>\n' +
          '                        <!--end col-->\n' +
          '                    </div>\n' +
          '                    <!--end row-->\n' +
          '\n' +
          '                </div>')

      $('.btn-lista-ubicaciones').hide()
      $('.btn-cr-ubicaciones').show()
      ac.bcworkman('.bc-ubicaciones-title','title-page','Ubicaciones Disponibles',0)

      ac.bcquery('info','settings','bg-licencia','bg-licencia','.profile-wid-img',0,0,0)
      ac.bcworkman('.tbm-ubicaciones','tablet','t-ubicaciones','t-ubicaciones')
      ac.bctablet('ubicaciones','t-ubicaciones', 0, 0, 0,0,0,0)

      $('.btn-cr-ubicaciones').click(function() {

        $('.btn-cr-ubicaciones').hide()
        $('.btn-lista-ubicaciones').show()
        ac.bcworkman('.bc-ubicaciones-title','title-page','Creación de Ubicacion - Campos Requeridos <span class="text-danger">***</span>',0)
        ac.bcpagecore('crear-ubicaciones','.tbm-ubicaciones',0,0,0,0,0)
        ac.bcpagecore('menu','.navbar-nav',0,0,0,0,0)

      })

      $('.btn-lista-ubicaciones').click(function() {

        $('.btn-cr-ubicaciones').show()
        $('.btn-lista-ubicaciones').hide()
        ac.bcworkman('.bc-ubicaciones-title','title-page','Ubicaciones Disponibles',0)
        ac.bcworkman('.tbm-ubicaciones','tablet','t-ubicaciones','t-ubicaciones')
        ac.bctablet('ubicaciones','t-ubicaciones', 0, 0, 0,0,0,0)
        ac.bcpagecore('menu','.navbar-nav',0,0,0,0,0)

      })


    }

    if(a=='crear-ubicaciones'){

      $(b).empty()
      $(b).append(     '                            <form action="javascript:void(0);">\n' +
          '                                                <div class="row">\n' +
          '                                                    <div class="col-lg-4">\n' +
          '                                                        <div class="mb-3">\n' +
          '                                                            <label for="Ubicacion" class="form-label">Ubicacion <span class="text-danger">*</span></label>\n' +
          '                                                            <input type="text" class="form-control mnu" id="Ubicacion" placeholder="Ubicacion o Referencia">\n' +
          '                                                        </div>\n' +
          '                                                    </div>\n' +

          '                                                    <div class="col-lg-4">\n' +
          '                                                        <div class="mb-3">\n' +
          '                                                            <label for="Direccion" class="form-label">Direccion <span class="text-danger">*</span></label>\n' +
          '                                                            <input type="text" class="form-control addr" id="Direccion" placeholder="Direccion" >\n' +
          '                                                        </div>\n' +
          '                                                    </div>\n' +
          '                                                    <div class="col-lg-4">\n' +
          '                                                        <div class="mb-3">\n' +
          '                                                            <label for="Telefono" class="form-label">Telefono</label>\n' +
          '                                                            <input type="text" class="form-control ph" id="Telefono" placeholder="Telefono" >\n' +
          '                                                        </div>\n' +
          '                                                    </div>\n' +
          '                                                    <div class="col-lg-6">\n' +
          '                                                        <div class="mb-3">\n' +
          '                                                            <label for="Contacto" class="form-label">Ubicacion en Mapa</label>\n' +
          '                                                            <input type="text" class="form-control bdireccion" id="pac-input" placeholder="Buscar Direccion" >\n' +
          '                                                        </div>\n' +
          '                                                    </div>\n' +
          '                                                    <div class="col-lg-6"></div>\n' +

          '                                                    <div class="col-lg-12">\n' +
          '                                                        <div class="mb-3">\n' +
          '                                                            <div id="map"></div>' +
          '                                                        </div>\n' +
          '                                                    </div>\n' +

          '                                                    <div class="col-lg-12">\n' +
          '                                                        <div class="hstack gap-2 justify-content-end">\n' +
          '                                                            <button type="button" class="btn btn-secondary go-save-info">Guardar Información</button>\n' +
          '                                                            <button type="button" class="btn btn-secondary go-editar-info">Guardar Información</button>\n' +
          '                                                            <button type="button" class="btn btn-soft-danger btn-cancel">Cancel</button>\n' +
          '                                                        </div>\n' +
          '                                                    </div>\n' +
          '                                                    <!--end col-->\n' +
          '                                                </div>\n' +
          '                                                <!--end row-->\n' +
          '                                            </form>\n')

      $('.go-editar-info').hide()
      $('.go-save-info').show()
      localStorage.setItem('xm',0)
      localStorage.removeItem('xmap')
      ac.map('map','9.009501117200834','-79.49985325247826',10,1,0)

      $('.btn-cancel').click(function() {

        $('.btn-cr-ubicaciones').show()
        $('.btn-lista-ubicaciones').hide()
        ac.bcworkman('.bc-ubicaciones-title','title-page','Ubicaciones Disponibles',0)
        ac.bcworkman('.tbm-ubicaciones','tablet','t-ubicaciones','t-ubicaciones')
        ac.bctablet('ubicaciones','t-ubicaciones', 0, 0, 0,0,0,0)
        ac.bcpagecore('menu','.navbar-nav',0,0,0,0,0)

      })

      $('.go-save-info').click(function() {ac.bcform(a)})




    }

    if(a=='personal'){

      $(b).empty()
      $(b).append('<div class="container-fluid">\n' +
          '\n' +
          '                    <div class="position-relative mx-n4 mt-n4">\n' +
          '                        <div class="profile-wid-bg profile-setting-img">\n' +
          '                            <img  class="profile-wid-img" alt="">\n' +
          '                            <div class="overlay-content"></div>\n' +
          '                        </div>\n' +
          '                    </div>\n' +
          '\n' +
          '                    <div class="row">\n' +
          '                        <!--end col-->\n' +
          '                        <div class="col-xxl-12">\n' +
          '                            <div class="card mt-xxl-n5">\n' +
          '                                <div class="card-header">\n' +
          '                                    <ul class="nav nav-tabs-custom rounded card-header-tabs border-bottom-0" role="tablist">\n' +

          '                                        <li class="nav-item">\n' +
          '                                            <a class="nav-link active" data-bs-toggle="tab" href="#tabpersonal role="tab">\n' +
          '                                                <i class="fas fa-home"></i> Personal\n' +
          '                                            </a>\n' +
          '                                        </li>\n' +
          '                                    </ul>\n' +
          '                                </div>\n' +
          '                                <div class="card-body p-4">\n' +
          '                                    <div class="tab-content">\n' +
          '                                        <!--end tab-pane-->\n' +
          '                                        <div class="tab-pane active" id="tabpersonal" role="tabpanel">\n' +

          '                                            <form action="javascript:void(0);">\n' +
          '                                                <div class="row g-2 mb-3">\n' +
          '                                                    <div class="col-lg-12">\n' +
          '                                                        <div class="text-end">\n' +
          '                                                            <button type="button" class="btn btn-secondary btn-cr-personal">Crear Personal</button>\n' +
          '                                                            <button type="button" class="btn btn-secondary btn-lista-personal">Lista de Personal</button>\n' +
          '                                                        </div>\n' +
          '                                                    </div>\n' +
          '                                                    <!--end col-->\n' +
          '                                                </div>\n' +
          '                                                <!--end row-->\n' +
          '                                            </form>\n' +
          '                                            </div>' +
                                '                    <div class="row ">\n' +
                                '                        <div class="col-lg-9">\n' +
                '                                            <div class="mb-1 border-bottom pb-2">\n' +
                '                                                <h5 class="card-title bc-personal-title">Lista de Personal</h5>\n' +
                '                                            </div>' +
                                '                        </div><!--end col-->\n' +
                                '                        <div class="col-lg-3 w-all-check">' +
                                                              ' <div class="form-check form-switch form-switch-success mb-3">\n' +
          '                                                        <input class="form-check-input ub-all" type="checkbox" role="switch" id="ub-all">\n' +
          '                                                        <label class="form-check-label" for="ub-all">Todas las ubicaciones</label>\n' +
          '                                                    </div>' +
          '                                               </div><!--end col-->\n' +
                                '                    </div><!--end row-->' +
                                  '                    <div class="row ">\n' +
                                  '                        <div class="col-lg-12">\n' +
                                  '                            <div class="card">\n' +
                                  '                                <div class="card-body tbm-personal"></div>\n' +
                                  '                            </div>\n' +
                                  '                        </div><!--end col-->\n' +
                                  '                    </div><!--end row-->' +
          '                                        </div>\n' +
          '                                        <!--end tab-pane-->\n' +
          '                                    </div>\n' +
          '                                </div>\n' +
          '                            </div>\n' +
          '                        </div>\n' +
          '                        <!--end col-->\n' +
          '                    </div>\n' +
          '                    <!--end row-->\n' +
          '\n' +
          '                </div>')

      $('.btn-lista-personal').hide()
      $('.w-all-check').hide()
      $('.btn-cr-personal').show()
      ac.bcworkman('.bc-personal-title','title-page','Lista de Personal',0)

      ac.bcquery('info','settings','bg-licencia','bg-licencia','.profile-wid-img',0,0,0)
      ac.bcworkman('.tbm-personal','tablet','t-personal','t-personal')
      ac.bctablet('personal','t-personal', 0, 0, 0,0,0,0)

      $('.btn-cr-personal').click(function() {

        $('.btn-cr-personal').hide()
        $('.btn-lista-personal').show()
        ac.bcworkman('.bc-personal-title','title-page','Creación de Personal - Campos Requeridos <span class="text-danger">***</span>',0)
        ac.bcpagecore('crear-personal','.tbm-personal',0,0,0,0,0)
        ac.bcpagecore('menu','.navbar-nav',0,0,0,0,0)

      })

      $('.btn-lista-personal').click(function() {

        $('.btn-cr-personal').show()
        $('.btn-lista-personal').hide()
        ac.bcworkman('.bc-personal-title','title-page','Lista de Personal',0)
        ac.bcworkman('.tbm-personal','tablet','t-personal','t-personal')
        ac.bctablet('personal','t-personal', 0, 0, 0,0,0,0)
        ac.bcpagecore('menu','.navbar-nav',0,0,0,0,0)

      })


    }

    if(a=='crear-personal'){

      $(b).empty()
      $(b).append(     '                            <form action="javascript:void(0);">\n' +
          '                                                <div class="row">\n' +
          '                                                    <div class="col-lg-4">\n' +
          '                                                        <div class="mb-3">\n' +
          '                                                            <label for="ncolaborador" class="form-label">Numero de Colaborador <span class="text-danger">*</span></label>\n' +
          '                                                            <input type="text" class="form-control ne" id="ncolaborador" placeholder="# numero id">\n' +
          '                                                        </div>\n' +
          '                                                    </div>\n' +

          '                                                    <div class="col-lg-8">\n' +
          '                                                        <div class="mb-3">\n' +
          '                                                            <label for="Nombre" class="form-label">Nombre <span class="text-danger">*</span></label>\n' +
          '                                                            <input type="text" class="form-control nmp" id="Nombre" placeholder="Nombre del Personal">\n' +
          '                                                        </div>\n' +
          '                                                    </div>\n' +
          '                                                    <div class="col-lg-4">\n' +
          '                                                        <div class="mb-3">\n' +
          '                                                            <label for="Email" class="form-label">Email</label>\n' +
          '                                                            <input type="text" class="form-control em" id="Email" placeholder="Email" >\n' +
          '                                                        </div>\n' +
          '                                                    </div>\n' +
          '                                                    <div class="col-lg-4">\n' +
          '                                                        <div class="mb-3">\n' +
          '                                                            <label for="Telefono" class="form-label">Telefono</label>\n' +
          '                                                            <input type="text" class="form-control ph" id="Telefono" placeholder="Telefono" >\n' +
          '                                                        </div>\n' +
          '                                                    </div>\n' +
          '                                                    <div class="col-lg-4">\n' +
          '                                                        <div class="mb-3">                                                        ' +
              '                                                        <label for="cargo" class="form-label">Cargo</label>\n' +
              '                                                        <select class="form-control cargo"  id="cargo"></select>\n' +
          '                                                        </div>' +
          '                                                    </div>' +
          '                                                    </div>\n' +

          '                                                    <div class="col-lg-12">\n' +
          '                                                        <div class="hstack gap-2 justify-content-end">\n' +
          '                                                            <button type="button" class="btn btn-secondary go-save-info">Guardar Información</button>\n' +
          '                                                            <button type="button" class="btn btn-secondary go-editar-info">Guardar Información</button>\n' +
          '                                                            <button type="button" class="btn btn-soft-danger btn-cancel">Cancel</button>\n' +
          '                                                        </div>\n' +
          '                                                    </div>\n' +
          '                                                    <!--end col-->\n' +
          '                                                </div>\n' +
          '                                                <!--end row-->\n' +
          '                                            </form>\n')

      $('.go-editar-info').hide()
      $('.go-save-info').show()

      ac.bcquery('data','settings','select',localStorage.getItem('cmp'),'.cargo','cargo',0,1)

      $('.btn-cancel').click(function() {

        $('.btn-cr-personal').show()
        $('.btn-lista-personal').hide()
        ac.bcworkman('.bc-personal-title','title-page','Lista de Personal',0)
        ac.bcworkman('.tbm-personal','tablet','t-personal','t-personal')
        ac.bctablet('personal','t-personal', 0, 0, 0,0,0,0)
        ac.bcpagecore('menu','.navbar-nav',0,0,0,0,0)

      })

      $('.go-save-info').click(function() {ac.bcform(a)})




    }

    if(a=='marcaciones'){

      $(b).empty()
      $(b).append('<div class="container-fluid">\n' +
          '\n' +
          '                    <div class="position-relative mx-n4 mt-n4">\n' +
          '                        <div class="profile-wid-bg profile-setting-img">\n' +
          '                            <img  class="profile-wid-img" alt="">\n' +
          '                            <div class="overlay-content"></div>\n' +
          '                        </div>\n' +
          '                    </div>\n' +
          '\n' +
          '                    <div class="row">\n' +
          '                        <!--end col-->\n' +
          '                        <div class="col-xxl-12">\n' +
          '                            <div class="card mt-xxl-n5">\n' +
          '                                <div class="card-header">\n' +
          '                                    <ul class="nav nav-tabs-custom rounded card-header-tabs border-bottom-0" role="tablist">\n' +

          '                                        <li class="nav-item">\n' +
          '                                            <a class="nav-link active" data-bs-toggle="tab" href="#tabpersonal role="tab">\n' +
          '                                                <i class="fas fa-home"></i> Marcaciones\n' +
          '                                            </a>\n' +
          '                                        </li>\n' +
          '                                    </ul>\n' +
          '                                </div>\n' +
          '                                <div class="card-body p-4">\n' +
          '                                    <div class="tab-content">\n' +
          '                                        <!--end tab-pane-->\n' +
          '                                        <div class="tab-pane active" id="tabpersonal" role="tabpanel">\n' +
          '                                            <div class="mb-1 border-bottom pb-2">\n' +
          '                                                <h5 class="card-title bc-marcaciones-title">Registro de Marcaciones</h5>\n' +
          '                                            </div>' +
          '                    <div class="row ">\n' +
          '                        <div class="col-lg-12">\n' +
          '                            <div class="card">\n' +
          '                                <div class="card-body tbm-marcaciones"></div>\n' +
          '                            </div>\n' +
          '                        </div><!--end col-->\n' +
          '                    </div><!--end row-->' +
          '                                        </div>\n' +
          '                                        <!--end tab-pane-->\n' +
          '                                    </div>\n' +
          '                                </div>\n' +
          '                            </div>\n' +
          '                        </div>\n' +
          '                        <!--end col-->\n' +
          '                    </div>\n' +
          '                    <!--end row-->\n' +
          '\n' +
          '                </div>')


      ac.bcworkman('.bc-marcaciones-title','title-page','Registro de Marcaciones',0)

      ac.bcquery('info','settings','bg-licencia','bg-licencia','.profile-wid-img',0,0,0)
      ac.bcworkman('.tbm-marcaciones','tablet','t-marcaciones','t-marcaciones')
      ac.bctablet('marcaciones','t-marcaciones', 0, 0, 0,0,0,0)
      ac.bcpagecore('menu','.navbar-nav',0,0,0,0,0)

    }

    if(a=='perfil-personal'){

      $(b).empty()
      $(b).append('                <div class="container-fluid">\n' +
          '                    <div class="profile-foreground position-relative mx-n4 mt-n4">\n' +
          '                        <div class="profile-wid-bg">\n' +
          '                            <img  alt="" class="profile-wid-img bc-profile-wid-img" />\n' +
          '                        </div>\n' +
          '                    </div>\n' +
          '                    <div class="pt-4 mb-4 mb-lg-3 pb-lg-4 profile-wrapper">\n' +
          '                        <div class="row g-4">\n' +
          '                            <div class="col-auto">\n' +
          '                                <div class="avatar-lg">\n' +
          '                                    <img src="bcpower/box/avatar-1.png" alt="user-img" class="img-thumbnail rounded-circle" />\n' +
          '                                </div>\n' +
          '                            </div>\n' +
          '                            <!--end col-->\n' +
          '                            <div class="col">\n' +
          '                                <div class="p-2">\n' +
          '                                    <h3 class="text-white mb-1 bc-text-dark nm"></h3>\n' +
          '                                    <p class="text-white text-opacity-75 bc-text-dark cargo"></p>\n' +
          '                                    <div class="hstack text-white-50 gap-1 bc-text-dark">\n' +
          '                                        <div class="me-2 ubicacion"></div>\n' +
          '                                    </div>\n' +
          '                                </div>\n' +
          '                            </div>\n' +
          '                            <!--end col-->\n' +
          '                            <div class="col-12 col-lg-auto order-last order-lg-0">\n' +
          '                                <div class="row text text-white-50 text-center">\n' +
          '                                    <div class="col-lg-6 col-4">\n' +
          '                                        <div class="p-2">\n' +
          '                                            <h4 class="text-white mb-1 bc-text-dark ufch bc-font-18">5:54am</h4>\n' +
          '                                            <h4 class="fs-14 mb-0 bc-text-dark txp ">Ingreso</h4>\n' +
          '                                        </div>\n' +
          '                                    </div>\n' +
          '                                </div>\n' +
          '                            </div>\n' +
          '                            <!--end col-->\n' +
          '\n' +
          '                        </div>\n' +
          '                        <!--end row-->\n' +
          '                    </div>\n' +
          '\n' +
          '                    <div class="row">\n' +
          '                        <div class="col-lg-12">\n' +
          '                            <div>\n' +
          '                                <div class="d-flex profile-wrapper">\n' +
          '                                    <!-- Nav tabs -->\n' +
          '                                    <ul class="nav nav-pills animation-nav profile-nav gap-2 gap-lg-3 flex-grow-1" role="tablist">\n' +
          '                                        <li class="nav-item">\n' +
          '                                            <a class="nav-link fs-14 active" data-bs-toggle="tab" href="#overview-tab" role="tab">\n' +
          '                                                <i class="ri-airplay-fill d-inline-block d-md-none"></i> <span class="d-none d-md-inline-block">Informacion</span>\n' +
          '                                            </a>\n' +
          '                                        </li>\n' +

          '                                </div>\n' +
          '                                <!-- Tab panes -->\n' +
          '                                <div class="tab-content pt-4 text-muted">\n' +
          '                                    <div class="tab-pane active" id="overview-tab" role="tabpanel">\n' +
          '                                        <div class="row">\n' +
          '                                            <div class="col-xxl-3">\n' +
          '                                                <div class="card">\n' +
          '                                                    <div class="card-body">\n' +
          '                                                        <h5 class="card-title mb-3">Información del Colaborador</h5>\n' +
          '                                                        <div class="table-responsive">\n' +
          '                                                            <table class="table table-borderless mb-0">\n' +
          '                                                                <tbody>\n' +
          '                                                                    <tr>\n' +
          '                                                                        <th class="ps-0" scope="row">Nombre</th>\n' +
          '                                                                        <td class="text-muted nm"></td>\n' +
          '                                                                    </tr>\n' +
          '                                                                    <tr>\n' +
          '                                                                        <th class="ps-0" scope="row">Telefono</th>\n' +
          '                                                                        <td class="text-muted ph"></td>\n' +
          '                                                                    </tr>\n' +
          '                                                                    <tr>\n' +
          '                                                                        <th class="ps-0" scope="row">E-mail</th>\n' +
          '                                                                        <td class="text-muted em"></td>\n' +
          '                                                                    </tr>\n' +
          '                                                                    <tr>\n' +
          '                                                                        <th class="ps-0" scope="row">Ultima ubicacion</th>\n' +
          '                                                                        <td class="text-muted ubx">\n' +
          '                                                                        </td>\n' +
          '                                                                    </tr>\n' +
          '                                                                </tbody>\n' +
          '                                                            </table>\n' +
          '                                                        </div>\n' +
          '                                                    </div><!-- end card body -->\n' +
          '                                                </div><!-- end card -->\n' +
          '                                                <!--end card-->\n' +
          '                                                <div class="card">\n' +
          '                                                    <div class="card-body">' +
          '                                                       <div id="map-perfil" class="map"></div>' +
          '                                                    </div>' +
          '                                                </div>\n' +
          '                                            </div>\n' +
          '                                            <!--end col-->\n' +
          '                                            <div class="col-xxl-9">\n' +
          '                                                <div class="card">\n' +
          '                                                    <div class="card-body tbm-marcaciones-ps"></div>\n' +
          '                                                    <!--end card-body-->\n' +
          '                                                </div>' +
          '                                            </div><!-- end card -->\n' )


      ac.bcquery('info','settings','bg-licencia','bg-licencia','.profile-wid-img',0,0,0)





    }

    if(a=='reportes'){
      $(b).empty()
      $(b).append('              <div class="start-page-title"></div><div class="row project-wrapper">\n' +
          '                        <div class="col-xxl-12"><div class="row v-contadores"></div></div>\n' +
          '                        <div class="col-xxl-6">' +
          '                            <div class="card">\n' +
          '                                <div class="card-header">\n' +
          '                                    <h4 class="card-title mb-0">Reporte de Ubicaciones - Marcaciones</h4>\n' +
          '                                </div><!-- end card header -->\n' +
          '                                <div class="card-body">\n' +
          '                                    <div id="bar_chart" data-colors=\'["--vz-success"]\' class="apex-charts" dir="ltr"></div>\n' +
          '                                </div><!-- end card-body -->\n' +
          '                            </div><!-- end card -->' +
          '                         </div><!-- end col -->\n' +
          '                        <div class="col-xxl-6">\n' +
          '                            <div class="row">\n' +
          '                                <div class="col-xl-12">\n' +
          '                                    <div class="card">' +
          '                                <div class="card-header">\n' +
          '                                    <h4 class="card-title mb-0">Reporte de Marcaciones Activos - Inactivos</h4>\n' +
          '                                </div><!-- end card header -->\n' +
          '                                <div class="card-body">\n' +
          '                                     <div id="column_chart" data-colors=\'["--vz-danger", "--vz-primary", "--vz-success"]\' class="apex-charts" dir="ltr"></div>\n' +
          '                                </div><!-- end card-body -->' +
          '                             </div><!-- end card -->\n' +
          '                                </div><!-- end col -->\n' +
          '                            </div><!-- end row -->\n' +
          '                        </div><!-- end col -->\n' +
          '                        <div class="row">\n' +
          '                        <div class="col-xl-8">\n' +
          '                            <div class="card">\n' +
          '                                <div class="card-header align-items-center d-flex">\n' +
          '                                    <h4 class="card-title mb-0 flex-grow-1">Ultimas Marcaciones</h4>\n' +
          '                                </div><!-- end card header -->\n' +
          '                                <div class="card-body tbm-marcaciones"></div><!-- end cardbody -->\n' +
          '                            </div><!-- end card -->\n' +
          '                        </div><!-- end col -->\n' +
          '\n' +
          '                        <div class="col-xl-4">\n' +
          '                            <div class="card">\n' +
          '                                <div class="card-header align-items-center border-0 d-flex">\n' +
          '                                    <h4 class="card-title mb-0 flex-grow-1">Generador de Reportes</h4>\n' +
          '                                    <div class="flex-shrink-0">\n' +
          '                                        <ul class="nav justify-content-end nav-tabs-custom rounded card-header-tabs border-bottom-0" role="tablist">\n' +
          '                                            <li class="nav-item">\n' +
          '                                                <a class="nav-link active" data-bs-toggle="tab" href="#buy-tab" role="tab" aria-selected="false">Reportes</a>\n' +
          '                                            </li>\n' +
          '                                        </ul><!-- end ul -->\n' +
          '                                    </div>\n' +
          '                                </div><!-- end cardheader -->\n' +
          '                                <div class="card-body p-0">\n' +
          '                                    <div class="tab-content p-0">\n' +
          '                                        <div class="tab-pane active" id="buy-tab" role="tabpanel">\n' +
          '                                            <div class="p-3 bg-success-subtle">\n' +
          '                                                <h6 class="mb-0 text-success">Reportes Generales</h6>\n' +
          '                                            </div>\n' +
          '                                            <div class="p-3">\n' +
          '                                                <div class="row">\n' +
          '                                                    <div class="col-6">\n' +
          '                                                        <div class="mb-3">\n' +
          '                                                            <label>Mes :</label>\n' +
          '                                                            <select class="form-select rp-meses"> </select>\n' +
          '                                                        </div>\n' +
          '                                                    </div><!-- end col -->\n' +
          '                                                    <div class="col-6">\n' +
          '                                                        <div class="mb-3">\n' +
          '                                                            <label>Ubicación :</label>\n' +
          '                                                            <select class="form-select rp-ubicacion"></select>\n' +
          '                                                        </div>\n' +
          '                                                    </div><!-- end col -->\n' +
          '                                                </div><!-- end row -->\n' +

          '                                                <div class="mt-3 pt-2">\n' +
          '                                                    <button type="button" class="btn btn-success w-100 generar-reporte-go">Generar</button>\n' +
          '                                                </div>\n' +
          '                                            </div>\n' +
          '                                        </div><!-- end tabpane -->\n' +
          '                                    </div><!-- end tab pane -->\n' +
          '                                </div><!-- end card body -->\n' +
          '                            </div><!-- end card -->\n' +
          '                        </div><!-- end col -->\n' +
          '                    </div><!-- end row --><!-- end col -->\n' +

          '                    </div><!-- end row -->\n')

       ac.bcpagecore('contadores','.v-contadores',0,0,0,0,0)
       ac.bcworkman('.tbm-marcaciones','tablet','t-marcaciones','t-marcaciones')
       ac.bctablet('marcaciones-home','t-marcaciones', 0, 0, 0,0,0,0)
       ac.bcquery('data','reportes','meses',localStorage.getItem('cmp'),'.rp-meses','Todos',0,1)
       ac.bcquery('data','reportes','g-ubicaciones',localStorage.getItem('cmp'),'.rp-ubicacion','Todos',0,1)

      var deferred = $.Deferred();
      deferred.done(function() {
        ac.bcquery('data','reportes','ubicaciones',localStorage.getItem('cmp'),0,0,0,0)
        ac.bcquery('data','reportes','marcaciones-activos-inactivos',localStorage.getItem('cmp'),0,0,0,0)
      })
      .then(function() {

        $('#bar_chart').empty()
        ac.apexchartjs('bar_chart',0,0,0,0,0)

        $('#column_chart').empty()
        ac.apexchartjs('column_chart',0,0,0,0,0)


      });
      deferred.resolve();

      $('.generar-reporte-go').click(function() {

        var rmes=$('.rp-meses').val()
        var rubc=$('.rp-ubicacion').val()

        localStorage.setItem('rp-mes',rmes)
        localStorage.setItem('rp-rubc',rubc)

        ac.bcpagecore('menu','.navbar-nav',0,0,0,0,0)
        ac.bcpagecore('reportes-general','.bc-main',rmes,rubc,0,0,0)
        ac.bcpagecore('start-page-title','.start-page-title',0,0,0,0,0)

      })



    }

    if(a=='reportes-general'){
      $(b).empty()
      $(b).append('              <div class="start-page-title"></div>' +
          '                       <div class="row project-wrapper">\n' +
          '                        <div class="col-xxl-12">' +
          '                            <div class="card">\n' +
          '                                <div class="card-header">' +
          '                                  <div class="row">' +
          '                                    <div class="col-lg-10">' +
          '                                         <h4 class="card-title mb-0">Reporte General</h4>' +
          '                                     </div>\n' +
          '                                     <div class="col-lg-2">' +
          '                                      <div class="live-preview">\n' +
          '                                        <div class="d-flex flex-wrap gap-2 ">\n' +
          '                                            <button type="button" class="btn btn-success waves-effect waves-light excel-go">Excel</button>\n' +
          '                                            <button type="button" class="btn btn-dark waves-effect waves-light csv-go">CSV</button>' +
          '                                        </div>' +
          '                                      </div>' +
          '                                     </div>' +
          '                                   </div> ' +
          '                                 </div><!-- end card header -->\n' +
          '                                <div class="card-body tbm-marcaciones"></div><!-- end card-body -->\n' +
          '                            </div><!-- end card -->' +
          '                         </div><!-- end col -->\n' +
          '                       </div><!-- end row -->\n')


      ac.bcworkman('.tbm-marcaciones','tablet','t-marcaciones','t-marcaciones')
      ac.bctablet('reporte-general','t-marcaciones', c, d, 0,0,0,0)
      $('.excel-go').click(function() {ac.bcdownload(c,d,'excel')})
      $('.csv-go').click(function() {ac.bcdownload(c,d,'csv')})


    }

    if(a=='confirmacion'){

      $(b).empty()
      $(b).append('                     <div class="col-lg-6">\n' +
          '                                    <div class=" p-4  h-100">\n' +
          '                                        <div class="bg-overlay"></div>\n' +
          '                                        <div class="position-relative h-100 d-flex flex-column">\n' +
          '                                            <div class="mb-4">\n' +
          '                                                <a href="index.html" class="d-block">\n' +
          '                                                    <img  alt="" class="logo-home" src="bcpower/box/logoerp.png">\n' +
          '                                                </a>\n' +
          '                                            </div>\n' +
          '                                        </div>\n' +
          '                                    </div>\n' +
          '                                </div>\n' +
          '                                <!-- end col -->\n' +

          '                                <div class="col-lg-6">\n' +
          '                                    <div class="p-lg-5 p-4">\n' +
          '                                        <div>\n' +
          '                                            <h5 class="bc-text-home saludo">Buen dia!</h5>\n' +
          '                                            <p class="text-confirmacion">¡Correo '+c+' confirmado!</p>\n' +
          '                                        </div>\n' +
          '                                    </div>\n' +
          '                                </div>\n' +
          '                                <!-- end col -->')


      console.log(new Date())
      ac.horasaludo(new Date())

    }

    //ac.maincore()


  }


  //Funciones Especiales

  killlogin() {
    const ac = new bccore()
    var lx = $.post(ac.bcurl() + "bcpower/phx/bc.php", {vo: 'kill'});
    lx.done(function (r) {
      console.log('Kill Session:' + r.kill)
      localStorage.clear()
      const bcx = $('#bc').data("id")
      const bcl = $('#bc-lic').data("id")
      console.log('Ready BC-R Cod #' + bcl)
      localStorage.setItem('bcx', bcx)
      localStorage.setItem('bc-lic', bcl)

    })

  }

  horasaludo(date) {

  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;

  if(ampm=='am'){
    $('.saludo').empty()
    $('.saludo').append('¡Buenos Dias!')
  }

    if(ampm=='pm'){
      $('.saludo').empty()
      $('.saludo').append('¡Buenos Tardes!')
    }

    if(ampm=='pm' && parseInt(hours)>6){
      $('.saludo').empty()
      $('.saludo').append('¡Buenos Noches!')
    }

  return strTime;
}

  revelpass(a,b){

    if($(b).hasClass('fas-fa-eye') && ($(a).val() != ""))
    {
      $(a).removeAttr('type');

      $(b).addClass('fas-fa-eye-slash').removeClass('fas-fa-eye');

    }
    else
    {
      $(a).attr('type','password');
      $(b).addClass('fas-fa-eye').removeClass('fas-fa-eye-slash');

    }

  }

  bcdownload(a,b,c) {
    const ac = new bccore()
    location.href = ac.bcurl() + "bcpower/phx/bc.php?vo=bcquery&at=reporte-general&a=excel-reporte&b="+localStorage.getItem('cmp')+"&c="+a+"&d="+b+"&e="+c
  }

  gettoken(i) {

    const ac = new bccore();

    function getUrlParams(prop) {
      var params = {};
      var search = decodeURIComponent(window.location.href.slice(window.location.href.indexOf('?') + 1));
      var definitions = search.split('#');
      definitions.forEach(function (val, key) {
        var parts = val.split('=', 2);
        params[parts[0]] = parts[1];
      });

      return (prop && prop in params) ? params[prop] : params;
    }

    var token = getUrlParams(i);

    if (token != '[object Object]') {

      if(i=='email') {
        localStorage.setItem('token', token)
        console.log('log:' + token)
        ac.bcquery('info','correo-confirmacion',token,0,0,0,0,0)
        ac.bcpagecore('confirmacion','.w-confirmacion',token,0,0,0,0)
      }

    }

  }




  //Estructura General

  bcconstructor(a){

    const ac = new bccore();

    if (a == 'login') {
      ac.bcpagecore(a,'.w-login',0,0,0,0,0)
    }

    if (a == 'panel') {
      ac.bcpagecore('logo','.logo',0,0,0,0,0)
      ac.bcpagecore('menu','.navbar-nav',0,0,0,0,0)
     // ac.bcpagecore('options','.w-options',0,0,0,0,0)
      //Dashboard Central
     // ac.bcpagecore('kpistart','.bc-main',0,0,0,0,0)
     // ac.bcpagecore('start-page-title','.start-page-title',0,0,0,0,0)


    }

    if(a=='dashboard') {
      //Dashboard Central
      ac.bcpagecore('menu','.navbar-nav',0,0,0,0,0)
      ac.bcpagecore('kpistart','.bc-main',0,0,0,0,0)
      ac.bcpagecore('start-page-title','.start-page-title',0,0,0,0,0)

    }

    if(a=='ajustes') {
      //Dashboard Central
      ac.bcpagecore('menu','.navbar-nav',0,0,0,0,0)
      ac.bcpagecore('ajustes','.bc-main',0,0,0,0,0)
    }

    if(a=='reportes') {
      //Dashboard Central
      ac.bcpagecore('menu','.navbar-nav',0,0,0,0,0)
      ac.bcpagecore('reportes','.bc-main',0,0,0,0,0)
      ac.bcpagecore('start-page-title','.start-page-title',0,0,0,0,0)

    }

    if(a == 'confirmacion') {
      ac.gettoken('email')
    }




  }

  bcform(a){

    const ac = new bccore();
    var dt = new FormData()

    if(a=='crear-empresa') {

      console.log('Crear Empresa')

      var mne = $('.mne').val()
      var ruc = $('.ruc').val()
      var ph = $('.ph').val()
      var em = $('.em').val()
      var cu = $('.cu').val()
      var cpu = $('.cpu').val()
      var tl = $('.tl').val()
      var cnt = $('.cnt').val()

      if(!mne ||!ruc ||!ph ||!em ||!cu ||!cpu ||!tl ||!cnt) {

        Swal.fire('¡Complete los campos obligatorios!', '', 'error')
        return false

      }

      dt.append('a', mne)
      dt.append('b', ruc)
      dt.append('c', ph)
      dt.append('d', em)
      dt.append('e', cpu)
      dt.append('f', tl)
      dt.append('g', cu)
      dt.append('h', cnt)

    }

    if(a=='editar-empresa') {

      console.log('Editar Empresa')

      var mne = $('.mne').val()
      var ruc = $('.ruc').val()
      var ph = $('.ph').val()
      var em = $('.em').val()
      var cu = $('.cu').val()
      var cpu = $('.cpu').val()
      var tl = $('.tl').val()
      var cnt = $('.cnt').val()

      if(!mne ||!ruc ||!ph ||!em ||!cu ||!cpu ||!tl ||!cnt) {

        Swal.fire('¡Complete los campos obligatorios!', '', 'error')
        return false

      }

      dt.append('a', mne)
      dt.append('b', ruc)
      dt.append('c', ph)
      dt.append('d', em)
      dt.append('e', cpu)
      dt.append('f', tl)
      dt.append('g', cu)
      dt.append('h', cnt)
      dt.append('i', localStorage.getItem('id-empresa'))

    }

    if(a=='update-ps'){

      console.log('Editar Empresa')

      var psa = $('.psa').val()
      var psb = $('.psb').val()

      if(psa== '' || psb==''){
        Swal.fire('¡Contraseñas no pueden estar vacias!', '', 'error')
        return false
      }

      if(psa!=psb){
        Swal.fire('¡Contraseñas deben ser iguales!', '', 'error')
        return false
      }

      dt.append('a', psb)
      dt.append('b', localStorage.getItem('cmp'))
    }

    if(a=='update-dst'){

      console.log('Editar Empresa')

      var dst = $('.dst').val()

      if(dst== ''){
        Swal.fire('¡Distancia no puede estar vacio!', '', 'error')
        return false
      }


      dt.append('a', dst)
      dt.append('b', localStorage.getItem('cmp'))
    }

    if(a=='msn-app'){
      dt.append('a', localStorage.getItem('msn-check'))
      dt.append('b', localStorage.getItem('cmp'))
    }

    if(a=='ubh-app'){
      dt.append('a', localStorage.getItem('ubh-check'))
      dt.append('b', localStorage.getItem('cmp'))
    }

    if(a=='crear-ubicaciones'){

      var nmu = $('.mnu').val()
      var addr = $('.addr').val()
      var ph = $('.ph').val()

      if(localStorage.getItem('xm')==0){
        Swal.fire('¡Debe seleccionar una ubicacion en el Mapa!', '', 'error')
        return false
      }

      dt.append('a', nmu)
      dt.append('b', addr)
      dt.append('c', ph)
      dt.append('d', localStorage.getItem('xmap'))
      dt.append('e', localStorage.getItem('cmp'))

    }

    if(a=='editar-ubicaciones'){

      var nmu = $('.mnu').val()
      var addr = $('.addr').val()
      var ph = $('.ph').val()


      dt.append('a', nmu)
      dt.append('b', addr)
      dt.append('c', ph)
      dt.append('d', localStorage.getItem('xmap'))
      dt.append('e', localStorage.getItem('id-ubicacion'))

    }

    if(a=='crear-personal'){

      var ne = $('.ne').val()
      var nmp = $('.nmp').val()
      var em = $('.em').val()
      var ph = $('.ph').val()
      var cargo = $('.cargo').val()


      dt.append('a', ne)
      dt.append('b', nmp)
      dt.append('c', em)
      dt.append('d', ph)
      dt.append('e', cargo)
      dt.append('f', localStorage.getItem('cmp'))

    }

    if(a=='editar-personal'){

      var ne = $('.ne').val()
      var nmp = $('.nmp').val()
      var em = $('.em').val()
      var ph = $('.ph').val()
      var cargo = $('.cargo').val()


      dt.append('a', ne)
      dt.append('b', nmp)
      dt.append('c', em)
      dt.append('d', ph)
      dt.append('e', cargo)
      dt.append('f', localStorage.getItem('id-personal'))

    }


    dt.append('at', a)
    dt.append('vo', 'insertcore')

    $.ajax({
      url: ac.bcurl() + 'bcpower/phx/bc.php',
      type: 'POST',
      cache: false,
      contentType: false,
      processData: false,
      data: dt,
      success: function (r) {

        if(a=='crear-empresa' && r.sc==true) {
          Swal.fire('¡Empresa '+mne+' creada con exito!', '', 'success')
          $('.btn-cr-empresas').show()
          $('.btn-lista-empresas').hide()
          ac.bcworkman('.bc-empresa-title','title-page','Empresas Licenciadas',0)
          ac.bcworkman('.tbm-empresas','tablet','t-empresas','t-empresas')
          ac.bctablet('empresas','t-empresas', 0, 0, 0,0,0,0)
          ac.bcpagecore('menu','.navbar-nav',0,0,0,0,0)
        }else{
          Swal.fire('¡Empresa ya esta registrada!', '', 'error')
        }

        if(a=='editar-empresa' && r.sc==true) {
          Swal.fire('¡Empresa '+mne+' actualizada con exito!', '', 'success')
          $('.btn-cr-empresas').show()
          $('.btn-lista-empresas').hide()
          ac.bcworkman('.bc-empresa-title','title-page','Empresas Licenciadas',0)
          ac.bcworkman('.tbm-empresas','tablet','t-empresas','t-empresas')
          ac.bctablet('empresas','t-empresas', 0, 0, 0,0,0,0)
          ac.bcpagecore('menu','.navbar-nav',0,0,0,0,0)
        }

        if(a=='update-ps' && r.sc==true){
          Swal.fire('¡Contraseña actualizada con exito!', '', 'success')
          ac.bcquery('info','ajustes','mensajeria',localStorage.getItem('cmp'),'.msn-app',0,0,0)
          ac.bcquery('info','ajustes','historial',localStorage.getItem('cmp'),'.ubh-app',0,0,0)
          ac.bcquery('info','ajustes','distancia',localStorage.getItem('cmp'),'.dst',0,0,0)
          ac.bcpagecore('menu','.navbar-nav',0,0,0,0,0)
        }

        if(a=='update-dst' && r.sc==true){
          Swal.fire('¡Distancia actualizada con exito!', '', 'success')
          ac.bcquery('info','ajustes','mensajeria',localStorage.getItem('cmp'),'.msn-app',0,0,0)
          ac.bcquery('info','ajustes','historial',localStorage.getItem('cmp'),'.ubh-app',0,0,0)
          ac.bcquery('info','ajustes','distancia',localStorage.getItem('cmp'),'.dst',0,0,0)
          ac.bcpagecore('menu','.navbar-nav',0,0,0,0,0)
        }

        if(a=='msn-app' && r.sc==true){
          Swal.fire('¡Ajustes de Mensajeria en el App Realizado!', '', 'success')
        }

        if(a=='ubh-app' && r.sc==true){
          Swal.fire('¡Ajustes de Historial de Ubicacion en el App Realizado!', '', 'success')
        }

        if(a=='crear-ubicaciones' && r.sc==true){

          Swal.fire('¡Ubicacion '+nmu+' creada con exito!', '', 'success')
          $('.btn-cr-ubicaciones').show()
          $('.btn-lista-ubicaciones').hide()
          ac.bcworkman('.bc-ubicaciones-title','title-page','Ubicaciones Disponibles',0)
          ac.bcworkman('.tbm-ubicaciones','tablet','t-ubicaciones','t-ubicaciones')
          ac.bctablet('ubicaciones','t-ubicaciones', 0, 0, 0,0,0,0)
          ac.bcpagecore('menu','.navbar-nav',0,0,0,0,0)

        }

        if(a=='editar-ubicaciones' && r.sc==true){

          Swal.fire('¡Ubicacion '+nmu+' actualizada con exito!', '', 'success')
          $('.btn-cr-ubicaciones').show()
          $('.btn-lista-ubicaciones').hide()
          ac.bcworkman('.bc-ubicaciones-title','title-page','Ubicaciones Disponibles',0)
          ac.bcworkman('.tbm-ubicaciones','tablet','t-ubicaciones','t-ubicaciones')
          ac.bctablet('ubicaciones','t-ubicaciones', 0, 0, 0,0,0,0)
          ac.bcpagecore('menu','.navbar-nav',0,0,0,0,0)

        }

        if(a=='crear-personal' && r.sc==true){

          Swal.fire('¡El Colaborador '+nmp+' registrado con exito!', '', 'success')

          $('.btn-cr-personal').show()
          $('.btn-lista-personal').hide()
          ac.bcworkman('.bc-personal-title','title-page','Lista de Personal',0)
          ac.bcworkman('.tbm-personal','tablet','t-personal','t-personal')
          ac.bctablet('personal','t-personal', 0, 0, 0,0,0,0)
          ac.bcpagecore('menu','.navbar-nav',0,0,0,0,0)

        }

        if(a=='editar-personal'&& r.sc==true){

          Swal.fire('¡El Colaborador '+nmp+' actualizado con exito!', '', 'success')

          $('.btn-cr-personal').show()
          $('.btn-lista-personal').hide()
          ac.bcworkman('.bc-personal-title','title-page','Lista de Personal',0)
          ac.bcworkman('.tbm-personal','tablet','t-personal','t-personal')
          ac.bctablet('personal','t-personal', 0, 0, 0,0,0,0)
          ac.bcpagecore('menu','.navbar-nav',0,0,0,0,0)

        }

        $('input').val('')
      }
    });



  }

  bcquery(at,a,b,c,d,e,f,g){

    const ac = new bccore()
    var lx = $.post(ac.bcurl() + "bcpower/phx/bc.php", {vo: 'bcquery', at: at, a: a, b: b, c: c, d: d, e: e, f: f, g: g});

    lx.done(function (r) {

      if(at=='info'){

        console.log('Informacion Basica '+a+' | '+c)

        if(c=='logo'){$(d).prop('src', ac.bcurl() +'bcpower/box/'+r.item)}

        if(c=='bg-licencia'){$(d).prop('src', ac.bcurl() +'bcpower/box/'+r.item)}

        if(a=='correo-confirmacion'){
          if(r.sc==true) {Swal.fire('¡Hemos confirmado tu correo!', '', 'success')}
        }


      }

      if(at=='data'){

        console.log('Informacion Lista '+a)

        if(g==0){$(d).empty()}

        if(a=='settings' && b=='select'){$(d).empty();$(d).prepend('<option value="0">Seleccione '+e+'</option>')}
        if(a=='reportes' && b=='ubicaciones'){var ubic=[], pc=[]}
        if(a=='reportes' && b=='marcaciones-activos-inactivos'){var mes=[], psa=[],psx=[]}
        if(a=='reportes' && b=='meses'){$(d).empty();$(d).prepend('<option value="0">'+e+'</option>')}
        if(a=='reportes' && b=='g-ubicaciones'){$(d).empty();$(d).prepend('<option value="0">'+e+'</option>')}


        $.each(r.lx, function (key, bc) {

          //console.log('item: '+bc.item)

          if(a=='settings' && b=='select'){

            $(d).append('<option value="'+bc.item+'">'+bc.item+'</option>')

          }

          if(a=='marcaciones' && b=='timeline'){

            $(d).append('<div class="mini-stats-wid d-flex align-items-center mt-3">\n' +
                '                                        <div class="flex-shrink-0 avatar-sm">\n' +
                '                                            <span class="mini-stat-icon avatar-title rounded-circle text-success bg-success-subtle fs-4">\n' +
                '                                                '+bc.dia+'\n' +
                '                                            </span>\n' +
                '                                        </div>\n' +
                '                                        <div class="flex-grow-1 ms-3">\n' +
                '                                            <h6 class="mb-1">'+bc.np+'</h6>\n' +
                '                                            <p class="text-muted mb-0">'+bc.ub+' </p>\n' +
                '                                        </div>\n' +
                '                                        <div class="flex-shrink-0">\n' +
                '                                            <p class="text-muted mb-0">'+bc.hora+'</p>\n' +
                '                                        </div>\n' +
                '                                    </div>')

          }

          if(a=='reportes' && b=='ubicaciones'){ubic.push(bc.nmu);pc.push(bc.pc)}

          if(a=='reportes' && b=='marcaciones-activos-inactivos'){mes.push(bc.mes);psa.push(bc.psa);psx.push(bc.psx)}

          if(a=='reportes' && b=='meses'){$(d).append('<option value="'+bc.item+'">'+bc.item+'</option>')}

          if(a=='reportes' && b=='g-ubicaciones'){$(d).append('<option value="'+bc.item+'">'+bc.item+'</option>')}


        })

        if(a=='reportes' && b=='ubicaciones'){
          console.log(ubic)
          localStorage.setItem('ubic-rep', JSON.stringify(ubic));
          console.log(pc)
          localStorage.setItem('pc-rep', JSON.stringify(pc));
        }

        if(a=='reportes' && b=='marcaciones-activos-inactivos'){
          console.log(mes)
          localStorage.setItem('mes-rep', JSON.stringify(mes));
          console.log(psa)
          localStorage.setItem('psa-rep', JSON.stringify(psa));
          console.log(psx)
          localStorage.setItem('psx-rep', JSON.stringify(psx));
        }


      }

      if(at=='delete'){

        if(a=='empresas') {
          console.log('Eliminar ' + a)
          Swal.fire('¡Empresa eliminada con exito!', '', 'success')
          $('.btn-cr-empresas').show()
          $('.btn-lista-empresas').hide()
          ac.bcworkman('.bc-empresa-title', 'title-page',
              'Empresas Licenciadas', 0)
          ac.bcworkman('.tbm-empresas', 'tablet', 't-empresas', 't-empresas')
          ac.bctablet('empresas', 't-empresas', 0, 0, 0, 0, 0, 0)
          ac.bcpagecore('menu', '.navbar-nav', 0, 0, 0, 0, 0)
        }

        if(a=='ubicaciones') {

          Swal.fire('¡Ubicacion eliminada con exito!', '', 'success')
          $('.btn-cr-ubicaciones').show()
          $('.btn-lista-ubicaciones').hide()
          ac.bcworkman('.bc-ubicaciones-title','title-page','Ubicaciones Disponibles',0)
          ac.bcworkman('.tbm-ubicaciones','tablet','t-ubicaciones','t-ubicaciones')
          ac.bctablet('ubicaciones','t-ubicaciones', 0, 0, 0,0,0,0)
          ac.bcpagecore('menu','.navbar-nav',0,0,0,0,0)


        }

        if(a=='personal') {

          Swal.fire('¡El Colaborador se ha inactivado en el sistema!', '', 'success')

          $('.btn-cr-personal').show()
          $('.btn-lista-personal').hide()
          ac.bcworkman('.bc-personal-title','title-page','Lista de Personal',0)
          ac.bcworkman('.tbm-personal','tablet','t-personal','t-personal')
          ac.bctablet('personal','t-personal', 0, 0, 0,0,0,0)
          ac.bcpagecore('menu','.navbar-nav',0,0,0,0,0)


        }

      }

    })


  }

  bctablet(at,a, b, c, d,e,f,g) {
    const ac = new bccore()
    console.log('Tabla:'+at)

    var lmt=25
    if(at=='empresas') {

      var columns = [
        {name: 'Empresa'},
        {name: 'Contacto'},
        {name: 'Telefono'},
        {name: 'Email'},
        {name: 'Usuarios'},
        {name: 'Vencimiento'},
        {
          name: 'Actions',
          formatter: function(e) {
            return gridjs.html(
                '<div class="list-item bc-aling-right">' +
                '<a href="#!" class="edit' + e + '"><i class="ri-pencil-line bc-icon"></i></a>' +
                '<a href="#!" class="del' + e + ' mg-left"><i class="ri-delete-bin-line bc-icon"></i></a>' +
                '</div>'
            );
          },
        }]

      var apidata = {
        url: ac.bcurl() + "bcpower/phx/bc.php?vo=bcquery&at=tabla&a="+at,
        then: data => data.lx.map(bc => [bc.nme, bc.cnt, bc.ph, bc.em, bc.cu, bc.vence, bc.id])
      }

    }

    if(at=='ubicaciones') {

      var columns = [
        {name: 'Ubicacion'},
        {name: 'Direccion'},
        {name: 'Telefono'},
        {name: 'Usuarios'},
        {
          name: 'Actions',
          formatter: function(e) {
            return gridjs.html(
                '<div class="list-item bc-aling-right">' +
                '<a href="#!" class="edit' + e + '"><i class="ri-pencil-line bc-icon"></i></a>' +
                '<a href="#!" class="del' + e + ' mg-left"><i class="ri-delete-bin-line bc-icon"></i></a>' +
                '</div>'
            );
          },
        }]

      var apidata = {
        url: ac.bcurl() + "bcpower/phx/bc.php?vo=bcquery&at=tabla&a="+at+"&b="+localStorage.getItem('cmp'),
        then: data => data.lx.map(bc => [bc.nmu, bc.adr, bc.ph, bc.usx, bc.id])
      }

    }

    if(at=='personal') {
      var lmt=100
      var columns = [
        {name: '# Empleado'},
        {name: 'Cargo'},
        {name: 'Nombre'},
        {name: 'Telefono'},
        {name: 'Ubicaciones'},
        {
          name: 'Actions',
          formatter: function(e) {
            return gridjs.html(
                '<div class="list-item bc-aling-right">' +
                '<a href="#!" class="det' + e + '" ><i class="ri-file-user-fill bc-icon"></i></a>' +
                '<a href="#!" class="ubic' + e + ' mg-left" ><i class="ri-global-line bc-icon"></i></a>' +
                '<a href="#!" class="edit' + e + ' mg-left"><i class="ri-pencil-line bc-icon"></i></a>' +
                '<a href="#!" class="del' + e + ' mg-left"><i class="ri-delete-bin-line bc-icon"></i></a>' +
                '</div>'
            );
          },
        }]

      var apidata = {
        url: ac.bcurl() + "bcpower/phx/bc.php?vo=bcquery&at=tabla&a="+at+"&b="+localStorage.getItem('cmp'),
        then: data => data.lx.map(bc => [bc.ne, bc.cargo, bc.nm, bc.ph, bc.uxu, bc.id])
      }

    }

    if(at=='marcaciones') {

      var lmt=100
      var columns = [
        {name: 'Fecha - Hora'},
        {name: 'idp',hidden: true},
        {name: 'Colaborador'},
        {name: 'Ubicacion'},
        {name: 'Distacia (mts)',formatter: function(g) {

          var g=g.split('-');
          if(parseInt(g[0])>parseInt(g[1])){return gridjs.html('<span class="text-danger">'+g[0]+'</span>');}
          if(parseInt(g[0])<=parseInt(g[1])){return gridjs.html('<span class="text-dark">'+g[0]+'</span>');}

          }},
        {name: 'Entrada - Salida',formatter: function(e) {

          if(e==1) {
            return gridjs.html(
                '<i class="ri-arrow-right-line bc-text-success bc-icon"></i> '
            );
          }

          if(e==2) {
              return gridjs.html(
                  '<i class=" ri-arrow-left-line bc-text-danger bc-icon"></i> '
              );
            }

          },

        },
        {
          name: 'Actions',
          formatter: function(e) {
            return gridjs.html(
                '<div class="list-item bc-aling-right">' +
                '<a href="#!" class="det' + e + '" ><i class="ri-file-user-fill bc-icon"></i></a>' +
                '</div>'
            );
          },
        }]

      var apidata = {
        url: ac.bcurl() + "bcpower/phx/bc.php?vo=bcquery&at=tabla&a="+at+"&b="+localStorage.getItem('cmp'),
        then: data => data.lx.map(bc => [bc.fch, bc.idp, bc.np, bc.ub, bc.ds, bc.tipo, bc.id])
      }

    }

    if(at=='marcaciones-home') {

      var lmt=5
      var columns = [
        {name: 'Fecha - Hora'},
        {name: 'idp',hidden: true},
        {name: 'Colaborador'},
        {name: 'Ubicacion'},
        {name: 'Distacia (mts)',formatter: function(g) {

            var g=g.split('-');
            if(parseInt(g[0])>parseInt(g[1])){return gridjs.html('<span class="text-danger">'+g[0]+'</span>');}
            if(parseInt(g[0])<=parseInt(g[1])){return gridjs.html('<span class="text-dark">'+g[0]+'</span>');}

          }},
        {name: 'Entrada - Salida',formatter: function(e) {

            if(e==1) {
              return gridjs.html(
                  '<i class="ri-arrow-right-line bc-text-success bc-icon"></i> '
              );
            }

            if(e==2) {
              return gridjs.html(
                  '<i class=" ri-arrow-left-line bc-text-danger bc-icon"></i> '
              );
            }

          },

        },
        {
          name: 'Actions',
          formatter: function(e) {
            return gridjs.html(
                '<div class="list-item bc-aling-right">' +
                '<a href="#!" class="det' + e + '" ><i class="ri-file-user-fill bc-icon"></i></a>' +
                '</div>'
            );
          },
        }]

      var apidata = {
        url: ac.bcurl() + "bcpower/phx/bc.php?vo=bcquery&at=tabla&a="+at+"&b="+localStorage.getItem('cmp'),
        then: data => data.lx.map(bc => [bc.fch, bc.idp, bc.np, bc.ub, bc.ds, bc.tipo, bc.id])
      }

    }

    if(at=='ubicaciones-personal'){

      var columns = [
        {name: 'Ubicacion'},
        {name: 'Direccion', formatter: function(f) {
                return f
          }
        },
        {name: 'Status',hidden:true, formatter: function(g) {
            return g
          }
        },
        {
          name: 'Actions',
          formatter: function(e) {

            var idx=e.split('-');

            if(idx[1]==0) {
              return gridjs.html(
                  '<div class="list-item bc-aling-right">' +
                  '<div class="form-check form-switch mb-2">\n' +
                  '     <input class="form-check-input check-ubi ubp' + idx[0] +
                  '" type="checkbox" role="switch" id="ubp' + idx[0] + '">\n' +
                  '</div>' +
                  '</div>'
              );
            }

            if(idx[1]==1) {
              return gridjs.html(
                  '<div class="list-item bc-aling-right">' +
                  '<div class="form-check form-switch mb-2">\n' +
                  '     <input class="form-check-input check-ubi ubp' + idx[0] +
                  '" type="checkbox" role="switch" id="ubp' + idx[0] + '" checked>\n' +
                  '</div>' +
                  '</div>'
              );
            }



          },
        }
        ]

      var apidata = {
        url: ac.bcurl() + "bcpower/phx/bc.php?vo=bcquery&at=tabla&a="+at+"&b="+localStorage.getItem('cmp')+"&c="+b,
        then: data => data.lx.map(bc => [bc.nmu, bc.adr, bc.uxp, bc.id])
      }

    }

    if(at=='marcaciones-ps') {

      var columns = [
        {name: 'Fecha - Hora'},
        {name: 'idp',hidden: true},
        {name: 'Ubicacion'},
        {name: 'Distacia (mts)'},
        {name: 'Entrada - Salida',formatter: function(e) {

            if(e==1) {
              return gridjs.html(
                  '<i class="ri-arrow-right-line bc-text-success bc-icon"></i> '
              );
            }

            if(e==2) {
              return gridjs.html(
                  '<i class=" ri-arrow-left-line bc-text-danger bc-icon"></i> '
              );
            }

          },

        },
        {
          name: 'Actions',hidden: true,
          formatter: function(e) {
            return gridjs.html(
                '<div class="list-item bc-aling-right">' +
                '<a href="#!" class="det' + e + '" ><i class="ri-file-user-fill bc-icon"></i></a>' +
                '</div>'
            );
          },
        }]

      var apidata = {
        url: ac.bcurl() + "bcpower/phx/bc.php?vo=bcquery&at=tabla&a="+at+"&b="+localStorage.getItem('cmp')+"&c="+b,
        then: data => data.lx.map(bc => [bc.fch, bc.idp, bc.ub, bc.ds, bc.tipo, bc.id])
      }

    }

    if(at=='reporte-general') {

      var columns = [
        {name: 'Fecha - Hora'},
        {name: 'Numero de Colaborador'},
        {name: 'Colaborador'},
        {name: 'Ubicacion'},
        {name: 'Distacia (mts)',formatter: function(g) {

            var g=g.split('-');
            if(parseInt(g[0])>parseInt(g[1])){return gridjs.html('<span class="text-danger">'+g[0]+'</span>');}
            if(parseInt(g[0])<=parseInt(g[1])){return gridjs.html('<span class="text-dark">'+g[0]+'</span>');}

          }},


        ]


      var apidata = {
        url: ac.bcurl() + "bcpower/phx/bc.php?vo=bcquery&at=tabla&a="+at+"&b="+localStorage.getItem('cmp')+"&c="+b+"&d="+c,
        then: data => data.lx.map(bc => [bc.fch, bc.ne, bc.np, bc.ub, bc.ds, bc.tipo])
      }

    }

     const grid =document.getElementById(a) && new gridjs.Grid({
        columns: columns,
        pagination: {limit: lmt},
        //sort: !0,
        search: true,
        server: apidata,
        autoWidth:true
      }).render(document.getElementById(a))

     grid.on("cellClick", function(...lx){

          console.log(lx)

          if(at=='empresas') {

            var id = JSON.parse(lx[1].data)

                console.log(id)

              $('.edit'+id).click(function() {
                console.log('Edicion de id:'+id)
                $('.btn-cr-empresas').hide()
                $('.btn-lista-empresas').show()
                ac.bcworkman('.bc-empresa-title','title-page','Edicion Empresa - Campos Requeridos <span class="text-danger">***</span>',0)
                ac.bcpagecore('crear-empresa','.tbm-empresas',0,0,0,0,0)
                ac.bcpagecore('menu','.navbar-nav',0,0,0,0,0)
                ac.bcquery('info','info-empresa','editar',id,0,0,0,0)

              })

              $('.del'+id).click(function() {
                console.log('Edicion de id:'+id)
                ac.bcquery('delete','company',id,0,0,0,0,0)

              })



          }

          if(at=='ubicaciones') {

            var id = JSON.parse(lx[1].data)

            console.log(id)

            $('.edit'+id).click(function() {
              console.log('Edicion de id:'+id)
              $('.btn-cr-ubicaciones').hide()
              $('.btn-lista-ubicaciones').show()
              ac.bcworkman('.bc-ubicaciones-title','title-page','Edicion ubicaciones - Campos Requeridos <span class="text-danger">***</span>',0)
              ac.bcpagecore('crear-ubicaciones','.tbm-ubicaciones',0,0,0,0,0)
              ac.bcpagecore('menu','.navbar-nav',0,0,0,0,0)
              ac.bcquery('info','info-ubicaciones','editar',id,0,0,0,0)

            })

            $('.del'+id).click(function() {
              console.log('Edicion de id:'+id)
              ac.bcquery('delete','ubicaciones',id,0,0,0,0,0)

            })



          }

          if(at=='personal') {

            var id = JSON.parse(lx[1].data)
            console.log(id)

            $('.ubic'+id).click(function() {

              console.log('Edicion de id:'+id)
              $('.btn-cr-personal').hide()
              $('.btn-lista-personal').show()
              ac.bcquery('info','info-personal','perfil',id,'ubicaciones-personal',0,0,0)
              ac.bcworkman('.tbm-personal','tablet','t-ubicaciones','t-ubicaciones')
              ac.bctablet('ubicaciones-personal','t-ubicaciones', id, 0, 0,0,0,0)
              ac.bcpagecore('menu','.navbar-nav',0,0,0,0,0)


            })

            $('.edit'+id).click(function() {
              console.log('Edicion de id:'+id)
              $('.btn-cr-personal').hide()
              $('.btn-lista-personal').show()
              ac.bcworkman('.bc-personal-title','title-page','Creación de Personal - Campos Requeridos <span class="text-danger">***</span>',0)
              ac.bcpagecore('crear-personal','.tbm-personal',0,0,0,0,0)
              ac.bcpagecore('menu','.navbar-nav',0,0,0,0,0)
              ac.bcquery('info','info-personal','editar',id,0,0,0,0)

            })

            $('.del'+id).click(function() {
              console.log('Edicion de id:'+id)
              ac.bcquery('delete','personal',id,0,0,0,0,0)

            })

            $('.det'+id).click(function() {

              ac.bcpagecore('perfil-personal','.bc-main',0,0,0,0,0)
              ac.bcpagecore('menu','.navbar-nav',0,0,0,0,0)
              ac.bcquery('info','info-personal','perfil',id,'perfil-personal',0,0,0)

            })

          }

          if(at=='ubicaciones-personal') {

            var uoj = JSON.stringify(lx[3]._cells);
            var uoj = JSON.parse(uoj);
            var idx=uoj[3].data
            console.log(idx)
            var idx=idx.split('-')
            var id=idx[0]

            console.log('ID Personal Ubicacion '+id)

            $('.ubp'+id).on('change', function () {

              if ($('.ubp'+id).prop("checked") == true) {

                console.log('Checked: Ubicacion'+id+' us:'+localStorage.getItem('nmp-personal'))
                ac.bcquery('register','ubicaciones-ps',id,localStorage.getItem('id-personal'),0,0,0,0)
                ac.bcpagecore('menu','.navbar-nav',0,0,0,0,0)

              }

              if ($('.ubp'+id).prop("checked") == false) {

                console.log('UnChecked: Ubicacion'+id+' us:'+localStorage.getItem('nmp-personal'))
                ac.bcquery('delete','ubicaciones-ps',id,localStorage.getItem('id-personal'),0,0,0,0)
                ac.bcpagecore('menu','.navbar-nav',0,0,0,0,0)
                $('.ub-all').prop('checked',false)

              }

            })


          }

          if(at=='marcaciones' || at=='marcaciones-home') {

            var id = JSON.parse(lx[1].data)
            console.log(id)

            $('.det'+id).click(function() {
              console.log('Edicion de id:'+id)
              let obj = JSON.parse(JSON.stringify(lx[3]._cells));
              console.log(obj[1].data)
              let idp = parseInt(obj[1].data)
              ac.bcpagecore('perfil-personal','.bc-main',0,0,0,0,0)
              ac.bcpagecore('menu','.navbar-nav',0,0,0,0,0)
              ac.bcquery('info','info-personal','perfil',idp,'perfil-personal',0,0,0)

            })

          }

        })


    ac.maincore()

  }

  login(us, ps) {

    const ac = new bccore()
    var lx = $.post(ac.bcurl() + "bcpower/phx/bc.php", {vo: 'login', a: us, b: ps});
    lx.done(function (r) {

      if (r.sc == true) {
        localStorage.setItem('ids', r.ids)
        localStorage.setItem('name', r.nm)
        localStorage.setItem('email', r.em)
        localStorage.setItem('phone', r.ph)
        localStorage.setItem('id', r.id)
        localStorage.setItem('lv', r.lv)
        localStorage.setItem('cmp', r.cmp)
        location.href = 'panel.html';

      }

      if (r.sc == false) {

        $('input').val('')
        Swal.fire('¡No hemos encontrado su usuario!')
        return false
      }

    })

  }

  wacthdog(a){

    const ac = new bccore()
    var lx = $.post(ac.bcurl() + "bcpower/phx/bc.php", {vo: 'wacthdog', a: a});
    lx.done(function (r) {

      if (r.wacthdog == true) {
        console.log('Dog Happy and Sleep')

      }

      if (r.wacthdog == false) {

        $('#layout-wrapper').empty()
        location.href = 'index.html';

      }

    })
  }

  menu(a){
    const ac = new bccore()

    $('.v-dashboard').hide()
    $('.v-marcaciones').hide()
    $('.v-personal').hide()
    $('.v-ubicaciones').hide()
    $('.v-reportes').hide()
    $('.v-ajustes').hide()
    $('.v-licencias').hide()

    var lx = $.post(ac.bcurl() + "bcpower/phx/bc.php", {vo: 'menu', at: 0, a:a });

    lx.done(function (r) {

      $.each(r.lx, function (key, bc) {

        $('.v-'+bc.item).show()

        $('.link-'+bc.item).click(function() {
          ac.bcconstructor(bc.item)
          console.log(bc.item)
        })


      })


    })


  }


  //Extras JS

  map(a,b,c,d,e,f){

    if(e==0){

      const myLatLng = { lat: parseFloat(b), lng: parseFloat(c) };
      console.log(myLatLng)

      const map = new google.maps.Map(document.getElementById(a), {
        zoom: 14,
        center: myLatLng,
      });

      new google.maps.Marker({
        position: myLatLng,
        map,
        title: f,
      });



    }

    if(e==1) {
      const map = new google.maps.Map(document.getElementById(a), {
        center: {lat: parseFloat(b), lng: parseFloat(c)},
        zoom: d,
        mapTypeId: "roadmap",
      });
      // Create the search box and link it to the UI element.
      const input = document.getElementById("pac-input");
      const searchBox = new google.maps.places.SearchBox(input);

      map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
      // Bias the SearchBox results towards current map's viewport.
      map.addListener("bounds_changed", () => {
        searchBox.setBounds(map.getBounds());
      });

      let markers = [];

      // Listen for the event fired when the user selects a prediction and retrieve
      // more details for that place.
      searchBox.addListener("places_changed", () => {
        const places = searchBox.getPlaces();

        if (places.length == 0) {
          return;
        }

        // Clear out the old markers.
        markers.forEach((marker) => {
          marker.setMap(null);
        });
        markers = [];

        // For each place, get the icon, name and location.
        const bounds = new google.maps.LatLngBounds();

        places.forEach((place) => {
          if (!place.geometry || !place.geometry.location) {
            console.log("Returned place contains no geometry");
            return;
          }

          const icon = {
            url: place.icon,
            size: new google.maps.Size(71, 71),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(25, 25),
          };

          // Create a marker for each place.
          markers.push(
              new google.maps.Marker({
                map,
                icon,
                title: place.name,
                position: place.geometry.location,
              })
          );

          if (place.geometry.viewport) {
            // Only geocodes have viewport.
            bounds.union(place.geometry.viewport);
          } else {
            bounds.extend(place.geometry.location);
          }

          console.log('xmap:' + place.geometry.location)
          var xmap = place.geometry.location
          localStorage.setItem('xmap', xmap)
          localStorage.setItem('xm', 1)
        });
        map.fitBounds(bounds);
      });
    }

  }

  apexchartjs(a,b,c,d,e,f){

    const ac = new bccore()

    if(a=='bar_chart') {

      var cat=JSON.parse(localStorage.getItem('ubic-rep'))
      var data=JSON.parse(localStorage.getItem('pc-rep'))

      var options = {
        series: [
          {
            data: data,
          }],
        chart: {
          type: 'bar',
          height: 350
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true,
          }
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: cat,
        }
      };

      var chart = new ApexCharts(document.querySelector('#' + a), options)
      chart.render();
    }

    if(a=='column_chart') {

      var cat=JSON.parse(localStorage.getItem('mes-rep'))
      var data=JSON.parse(localStorage.getItem('psa-rep'))
      var datb=JSON.parse(localStorage.getItem('psx-rep'))

      var options = {
        series: [{
          name: 'Activos',
          data: data
        }, {
          name: 'Inactivos',
          data: datb
        }],
        chart: {
          type: 'bar',
          height: 350
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        xaxis: {
          categories: cat,
        },
        yaxis: {
          title: {
            text: '(Cantidad)'
          }
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return " " + val + " Marcaciones"
            }
          }
        }
      };

      var chart = new ApexCharts(document.querySelector('#' + a), options);
      chart.render();


    }


  }

  //Estructuras JS

  maincore(){

    const ac = new bccore();
    var d = document.querySelector('.navbar-menu').innerHTML, M = 7, t = 'en',
        a = localStorage.getItem('language');

    function o() {
      n(null === a ? t : a);
      var e = document.getElementsByClassName('language');
      e && Array.from(e).
          forEach(function(t) {
            t.addEventListener('click',
                function(e) {n(t.getAttribute('data-lang'));});
          });
    }

    function n(e) {
      document.getElementById('header-lang-img') &&
      ('en' == e ? document.getElementById(
          'header-lang-img').src = 'assets/images/flags/us.svg' : 'sp' == e
          ? document.getElementById(
              'header-lang-img').src = 'assets/images/flags/spain.svg'
          : 'gr' == e ? document.getElementById(
              'header-lang-img').src = 'assets/images/flags/germany.svg' : 'it' ==
          e ? document.getElementById(
              'header-lang-img').src = 'assets/images/flags/italy.svg' : 'ru' == e
              ? document.getElementById(
                  'header-lang-img').src = 'assets/images/flags/russia.svg'
              : 'ch' == e
                  ? document.getElementById(
                      'header-lang-img').src = 'assets/images/flags/china.svg'
                  : 'fr' == e
                      ? document.getElementById(
                          'header-lang-img').src = 'assets/images/flags/french.svg'
                      : 'ar' == e && (document.getElementById(
                      'header-lang-img').src = 'assets/images/flags/ae.svg'), localStorage.setItem(
          'language', e), null == (a = localStorage.getItem('language')) &&
      n(t), (e = new XMLHttpRequest).open('GET',
          'assets/lang/' + a + '.json'), e.onreadystatechange = function() {
        var a;
        4 === this.readyState && 200 === this.status &&
        (a = JSON.parse(this.responseText), Object.keys(a).
            forEach(function(t) {
              var e = document.querySelectorAll('[data-key=\'' + t + '\']');
              Array.from(e).forEach(function(e) {e.textContent = a[t];});
            }));
      }, e.send());
    }

    function s() {
      var e;
      document.querySelectorAll('.navbar-nav .collapse') &&
      (e = document.querySelectorAll('.navbar-nav .collapse'), Array.from(e).
          forEach(function(t) {
            var a = new bootstrap.Collapse(t, {toggle: !1});
            t.addEventListener('show.bs.collapse', function(e) {
              e.stopPropagation();
              var e = t.parentElement.closest('.collapse');
              e
                  ? (e = e.querySelectorAll('.collapse'), Array.from(e).
                      forEach(function(e) {
                        e = bootstrap.Collapse.getInstance(e);
                        e !== a && e.hide();
                      }))
                  : (e = function(e) {
                    for (var t = [], a = e.parentNode.firstChild; a;) 1 ===
                    a.nodeType && a !== e && t.push(a), a = a.nextSibling;
                    return t;
                  }(t.parentElement), Array.from(e).
                      forEach(function(e) {
                        2 < e.childNodes.length &&
                        e.firstElementChild.setAttribute('aria-expanded', 'false');
                        e = e.querySelectorAll('*[id]');
                        Array.from(e).
                            forEach(function(e) {
                              e.classList.remove('show'), 2 < e.childNodes.length &&
                              (e = e.querySelectorAll('ul li a'), Array.from(e).
                                  forEach(function(e) {
                                    e.hasAttribute('aria-expanded') &&
                                    e.setAttribute('aria-expanded', 'false');
                                  }));
                            });
                      }));
            }), t.addEventListener('hide.bs.collapse', function(e) {
              e.stopPropagation();
              e = t.querySelectorAll('.collapse');
              Array.from(e).
                  forEach(function(e) {
                    (childCollapseInstance = bootstrap.Collapse.getInstance(
                        e)).hide();
                  });
            });
          }));
    }

    function i() {
      var n, e = document.documentElement.getAttribute('data-layout'),
          t = sessionStorage.getItem('defaultAttribute'), t = JSON.parse(t);
      !t || 'twocolumn' != e && 'twocolumn' != t['data-layout'] ||
      (document.querySelector('.navbar-menu') && (document.querySelector(
          '.navbar-menu').innerHTML = d), (n = document.createElement(
          'ul')).innerHTML = '<a href="#" class="logo"><img src="assets/images/logo-sm.png" alt="" height="22"></a>', Array.from(
          document.getElementById('navbar-nav').querySelectorAll('.menu-link')).
          forEach(function(e) {
            n.className = 'twocolumn-iconview';
            var t = document.createElement('li'), a = e;
            a.querySelectorAll('span').
                forEach(function(e) {
                  e.classList.add('d-none');
                }), e.parentElement.classList.contains('twocolumn-item-show') &&
            e.classList.add('active'), t.appendChild(a), n.appendChild(
                t), a.classList.contains('nav-link') &&
            a.classList.replace('nav-link', 'nav-icon'), a.classList.remove(
                'collapsed', 'menu-link');
          }), (e = (e = '/' == location.pathname
          ? 'index.html'
          : location.pathname.substring(1)).substring(e.lastIndexOf('/') + 1)) &&
      (t = document.getElementById('navbar-nav').
          querySelector('[href="' + e + '"]')) &&
      (e = t.closest('.collapse.menu-dropdown')) &&
      (e.classList.add('show'), e.parentElement.children[0].classList.add(
          'active'), e.parentElement.children[0].setAttribute('aria-expanded',
          'true'), e.parentElement.closest('.collapse.menu-dropdown')) &&
      (e.parentElement.closest('.collapse').
          classList.
          add('show'), e.parentElement.closest(
          '.collapse').previousElementSibling &&
      e.parentElement.closest('.collapse').
          previousElementSibling.
          classList.
          add('active'), e.parentElement.parentElement.parentElement.parentElement.closest(
          '.collapse.menu-dropdown')) &&
      (e.parentElement.parentElement.parentElement.parentElement.closest(
          '.collapse').
          classList.
          add('show'), e.parentElement.parentElement.parentElement.parentElement.closest(
          '.collapse').previousElementSibling) &&
      e.parentElement.parentElement.parentElement.parentElement.closest(
          '.collapse').
          previousElementSibling.
          classList.
          add('active'), document.getElementById(
          'two-column-menu').innerHTML = n.outerHTML, Array.from(
          document.querySelector('#two-column-menu ul').querySelectorAll('li a')).
          forEach(function(a) {
            var n = (n = '/' == location.pathname
                ? 'index.html'
                : location.pathname.substring(1)).substring(
                n.lastIndexOf('/') + 1);
            a.addEventListener('click', function(e) {
              var t;
              (n != '/' + a.getAttribute('href') ||
                  a.getAttribute('data-bs-toggle')) &&
              document.body.classList.contains('twocolumn-panel') &&
              document.body.classList.remove(
                  'twocolumn-panel'), document.getElementById('navbar-nav').
                  classList.
                  remove('twocolumn-nav-hide'), document.querySelector(
                  '.hamburger-icon').classList.remove('open'), (e.target &&
                  e.target.matches('a.nav-icon') || e.target &&
                  e.target.matches('i')) && (null !==
              document.querySelector('#two-column-menu ul .nav-icon.active') &&
              document.querySelector('#two-column-menu ul .nav-icon.active').
                  classList.
                  remove('active'), (e.target.matches('i')
                  ? e.target.closest('a')
                  : e.target).classList.add('active'), 0 <
              (t = document.getElementsByClassName(
                  'twocolumn-item-show')).length &&
              t[0].classList.remove('twocolumn-item-show'), t = (e.target.matches(
                  'i') ? e.target.closest('a') : e.target).getAttribute('href').
                  slice(1), document.getElementById(t)) &&
              document.getElementById(t).
                  parentElement.
                  classList.
                  add('twocolumn-item-show');
            }), n != '/' + a.getAttribute('href') ||
            a.getAttribute('data-bs-toggle') ||
            (a.classList.add('active'), document.getElementById('navbar-nav').
                classList.
                add('twocolumn-nav-hide'), document.querySelector(
                '.hamburger-icon') &&
            document.querySelector('.hamburger-icon').classList.add('open'));
          }), 'horizontal' !==
      document.documentElement.getAttribute('data-layout') &&
      ((t = new SimpleBar(document.getElementById('navbar-nav'))) &&
      t.getContentElement(), e = new SimpleBar(
          document.getElementsByClassName('twocolumn-iconview')[0])) &&
      e.getContentElement());
    }

    function l(e) {
      if (e) {
        var t = e.offsetTop, a = e.offsetLeft, n = e.offsetWidth,
            o = e.offsetHeight;
        if (e.offsetParent) for (; e.offsetParent;) t += (e = e.offsetParent).offsetTop, a += e.offsetLeft;
        return t >= window.pageYOffset && a >= window.pageXOffset && t + o <=
            window.pageYOffset + window.innerHeight && a + n <=
            window.pageXOffset + window.innerWidth;
      }
    }

    function r() {
      'vertical' != document.documentElement.getAttribute('data-layout') &&
      'semibox' != document.documentElement.getAttribute('data-layout') ||
      (document.getElementById(
          'two-column-menu').innerHTML = '', document.querySelector(
          '.navbar-menu') && (document.querySelector(
          '.navbar-menu').innerHTML = d), document.getElementById('scrollbar').
          setAttribute('data-simplebar', ''), document.getElementById(
          'navbar-nav').
          setAttribute('data-simplebar', ''), document.getElementById(
          'scrollbar').
          classList.
          add('h-100')), 'twocolumn' ==
      document.documentElement.getAttribute('data-layout') &&
      (document.getElementById('scrollbar').
          removeAttribute('data-simplebar'), document.getElementById('scrollbar').
          classList.
          remove('h-100')), 'horizontal' ==
      document.documentElement.getAttribute('data-layout') && b();
    }

    function m() {
      feather.replace();
      var e = document.documentElement.clientWidth, e = (e < 1025 && 767 < e
          ? (document.body.classList.remove('twocolumn-panel'), 'twocolumn' ==
          sessionStorage.getItem('data-layout') &&
          (document.documentElement.setAttribute('data-layout',
              'twocolumn'), document.getElementById('customizer-layout03') &&
          document.getElementById('customizer-layout03').
              click(), i(), u(), s()), 'vertical' ==
          sessionStorage.getItem('data-layout') &&
          document.documentElement.setAttribute('data-sidebar-size',
              'sm'), 'semibox' == sessionStorage.getItem('data-layout') &&
          document.documentElement.setAttribute('data-sidebar-size',
              'sm'), document.querySelector('.hamburger-icon') &&
          document.querySelector('.hamburger-icon').classList.add('open'))
          : 1025 <= e
              ? (document.body.classList.remove('twocolumn-panel'), 'twocolumn' ==
              sessionStorage.getItem('data-layout') &&
              (document.documentElement.setAttribute('data-layout',
                  'twocolumn'), document.getElementById('customizer-layout03') &&
              document.getElementById('customizer-layout03').
                  click(), i(), u(), s()), 'vertical' ==
              sessionStorage.getItem('data-layout') &&
              document.documentElement.setAttribute('data-sidebar-size',
                  sessionStorage.getItem('data-sidebar-size')), 'semibox' ==
              sessionStorage.getItem('data-layout') &&
              document.documentElement.setAttribute('data-sidebar-size',
                  sessionStorage.getItem(
                      'data-sidebar-size')), document.querySelector(
                  '.hamburger-icon') && document.querySelector('.hamburger-icon').
                  classList.
                  remove('open'))
              : e <= 767 && (document.body.classList.remove(
                  'vertical-sidebar-enable'), document.body.classList.add(
                  'twocolumn-panel'), 'twocolumn' ==
              sessionStorage.getItem('data-layout') &&
              (document.documentElement.setAttribute('data-layout', 'vertical'), y(
                  'vertical'), s()), 'horizontal' !=
              sessionStorage.getItem('data-layout') &&
              document.documentElement.setAttribute('data-sidebar-size',
                  'lg'), document.querySelector('.hamburger-icon')) &&
              document.querySelector('.hamburger-icon').
                  classList.
                  add('open'), document.querySelectorAll(
          '#navbar-nav > li.nav-item'));
      Array.from(e).
          forEach(function(e) {
            e.addEventListener('click', c.bind(this), !1), e.addEventListener(
                'mouseover', c.bind(this), !1);
          });
    }

    function c(e) {
      if (e.target && e.target.matches('a.nav-link span')) if (0 ==
          l(e.target.parentElement.nextElementSibling)) {
        e.target.parentElement.nextElementSibling.classList.add(
            'dropdown-custom-right'), e.target.parentElement.parentElement.parentElement.parentElement.classList.add(
            'dropdown-custom-right');
        var t = e.target.parentElement.nextElementSibling;
        Array.from(t.querySelectorAll('.menu-dropdown')).
            forEach(function(e) {e.classList.add('dropdown-custom-right');});
      } else if (1 == l(e.target.parentElement.nextElementSibling) && 1848 <=
          window.innerWidth) for (var a = document.getElementsByClassName(
          'dropdown-custom-right'); 0 < a.length;) a[0].classList.remove(
          'dropdown-custom-right');
      if (e.target && e.target.matches('a.nav-link')) if (0 ==
          l(e.target.nextElementSibling)) {
        e.target.nextElementSibling.classList.add(
            'dropdown-custom-right'), e.target.parentElement.parentElement.parentElement.classList.add(
            'dropdown-custom-right');
        t = e.target.nextElementSibling;
        Array.from(t.querySelectorAll('.menu-dropdown')).
            forEach(function(e) {e.classList.add('dropdown-custom-right');});
      } else if (1 == l(e.target.nextElementSibling) && 1848 <=
          window.innerWidth) for (a = document.getElementsByClassName(
          'dropdown-custom-right'); 0 < a.length;) a[0].classList.remove(
          'dropdown-custom-right');
    }

    function O() {
      var e = document.documentElement.clientWidth;
      767 < e && document.querySelector('.hamburger-icon').
          classList.
          toggle('open'), 'horizontal' ===
      document.documentElement.getAttribute('data-layout') &&
      (document.body.classList.contains('menu') ? document.body.classList.remove(
          'menu') : document.body.classList.add('menu')), 'vertical' ===
      document.documentElement.getAttribute('data-layout') &&
      (e <= 1025 && 767 < e
          ? (document.body.classList.remove('vertical-sidebar-enable'), 'sm' ==
          document.documentElement.getAttribute('data-sidebar-size')
              ? document.documentElement.setAttribute('data-sidebar-size', '')
              : document.documentElement.setAttribute('data-sidebar-size', 'sm'))
          : 1025 < e
              ? (document.body.classList.remove(
                  'vertical-sidebar-enable'), 'lg' ==
              document.documentElement.getAttribute('data-sidebar-size')
                  ? document.documentElement.setAttribute('data-sidebar-size',
                      'sm')
                  : document.documentElement.setAttribute('data-sidebar-size',
                      'lg'))
              : e <= 767 && (document.body.classList.add(
              'vertical-sidebar-enable'), document.documentElement.setAttribute(
              'data-sidebar-size', 'lg'))), 'semibox' ===
      document.documentElement.getAttribute('data-layout') && (767 < e ? 'show' ==
      document.documentElement.getAttribute('data-sidebar-visibility')
          ? 'lg' == document.documentElement.getAttribute('data-sidebar-size')
              ? document.documentElement.setAttribute('data-sidebar-size', 'sm')
              : document.documentElement.setAttribute('data-sidebar-size', 'lg')
          : (document.getElementById('sidebar-visibility-show').
              click(), document.documentElement.setAttribute('data-sidebar-size',
              document.documentElement.getAttribute('data-sidebar-size'))) : e <=
          767 && (document.body.classList.add(
              'vertical-sidebar-enable'), document.documentElement.setAttribute(
              'data-sidebar-size', 'lg'))), 'twocolumn' ==
      document.documentElement.getAttribute('data-layout') &&
      (document.body.classList.contains('twocolumn-panel')
          ? document.body.classList.remove('twocolumn-panel')
          : document.body.classList.add('twocolumn-panel'));
    }

    function G() {
      document.addEventListener('DOMContentLoaded', function() {
        var e = document.getElementsByClassName('code-switcher');
        Array.from(e).
            forEach(function(a) {
              a.addEventListener('change', function() {
                var e = a.closest('.card'), t = e.querySelector('.live-preview'),
                    e = e.querySelector('.code-view');
                a.checked ? (t.classList.add('d-none'), e.classList.remove(
                    'd-none')) : (t.classList.remove('d-none'), e.classList.add(
                    'd-none'));
              });
            }), feather.replace();
      }), window.addEventListener('resize',
          m), m(), Waves.init(), document.addEventListener('scroll', function() {
        var e;
        (e = document.getElementById('page-topbar')) &&
        (50 <= document.body.scrollTop || 50 <= document.documentElement.scrollTop
            ? e.classList.add('topbar-shadow')
            : e.classList.remove('topbar-shadow'));
      }), window.addEventListener('load', function() {
        var e;
        ('twocolumn' == document.documentElement.getAttribute('data-layout')
            ? u
            : g)(), (e = document.getElementsByClassName('vertical-overlay')) &&
        Array.from(e).
            forEach(function(e) {
              e.addEventListener('click', function() {
                document.body.classList.remove(
                    'vertical-sidebar-enable'), 'twocolumn' ==
                sessionStorage.getItem('data-layout')
                    ? document.body.classList.add('twocolumn-panel')
                    : document.documentElement.setAttribute('data-sidebar-size',
                        sessionStorage.getItem('data-sidebar-size'));
              });
            }), E();
      }), document.getElementById('topnav-hamburger-icon') &&
      document.getElementById('topnav-hamburger-icon').
          addEventListener('click', O);
      var e = sessionStorage.getItem('defaultAttribute'), e = JSON.parse(e),
          t = document.documentElement.clientWidth;
      'twocolumn' == e['data-layout'] && t < 767 && Array.from(
          document.getElementById('two-column-menu').querySelectorAll('li')).
          forEach(function(e) {
            e.addEventListener('click',
                function(e) {document.body.classList.remove('twocolumn-panel');});
          });
    }

    function u() {
      feather.replace();
      var e, t, a = '/' == location.pathname
          ? 'index.html'
          : location.pathname.substring(1);
      (a = a.substring(a.lastIndexOf('/') + 1)) &&
      ('twocolumn-panel' == document.body.className &&
      document.getElementById('two-column-menu').
          querySelector('[href="' + a + '"]').
          classList.
          add('active'), (a = document.getElementById('navbar-nav').
          querySelector('[href="' + a + '"]')) ? (a.classList.add(
          'active'), t = ((e = a.closest('.collapse.menu-dropdown')) &&
      e.parentElement.closest('.collapse.menu-dropdown')
          ? (e.classList.add('show'), e.parentElement.children[0].classList.add(
              'active'), e.parentElement.closest('.collapse.menu-dropdown').
              parentElement.
              classList.
              add('twocolumn-item-show'), e.parentElement.parentElement.parentElement.parentElement.closest(
              '.collapse.menu-dropdown') &&
          (t = e.parentElement.parentElement.parentElement.parentElement.closest(
              '.collapse.menu-dropdown').
              getAttribute(
                  'id'), e.parentElement.parentElement.parentElement.parentElement.closest(
              '.collapse.menu-dropdown').
              parentElement.
              classList.
              add('twocolumn-item-show'), e.parentElement.closest(
              '.collapse.menu-dropdown').
              parentElement.
              classList.
              remove('twocolumn-item-show'), document.getElementById(
              'two-column-menu').querySelector('[href="#' + t + '"]')) &&
          document.getElementById('two-column-menu').
              querySelector('[href="#' + t + '"]').
              classList.
              add('active'), e.parentElement.closest('.collapse.menu-dropdown'))
          : (a.closest('.collapse.menu-dropdown').
              parentElement.
              classList.
              add('twocolumn-item-show'), e)).getAttribute(
          'id'), document.getElementById('two-column-menu').
          querySelector('[href="#' + t + '"]') &&
      document.getElementById('two-column-menu').
          querySelector('[href="#' + t + '"]').
          classList.
          add('active')) : document.body.classList.add('twocolumn-panel'));
    }

    function g() {
      var e = '/' == location.pathname
          ? 'index.html'
          : location.pathname.substring(1);
      (e = e.substring(e.lastIndexOf('/') + 1)) &&
      (e = document.getElementById('navbar-nav').
          querySelector('[href="' + e + '"]')) &&
      (e.classList.add('active'), e = e.closest('.collapse.menu-dropdown')) &&
      (e.classList.add('show'), e.parentElement.children[0].classList.add(
          'active'), e.parentElement.children[0].setAttribute('aria-expanded',
          'true'), e.parentElement.closest('.collapse.menu-dropdown')) &&
      (e.parentElement.closest('.collapse').
          classList.
          add('show'), e.parentElement.closest(
          '.collapse').previousElementSibling &&
      e.parentElement.closest('.collapse').
          previousElementSibling.
          classList.
          add('active'), e.parentElement.parentElement.parentElement.parentElement.closest(
          '.collapse.menu-dropdown')) &&
      (e.parentElement.parentElement.parentElement.parentElement.closest(
          '.collapse').
          classList.
          add('show'), e.parentElement.parentElement.parentElement.parentElement.closest(
          '.collapse').previousElementSibling) &&
      (e.parentElement.parentElement.parentElement.parentElement.closest(
          '.collapse').
          previousElementSibling.
          classList.
          add('active'), 'horizontal' ==
      document.documentElement.getAttribute('data-layout')) &&
      e.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.closest(
          '.collapse') &&
      e.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.closest(
          '.collapse').previousElementSibling.classList.add('active');
    }

    function l(e) {
      if (e) {
        var t = e.offsetTop, a = e.offsetLeft, n = e.offsetWidth,
            o = e.offsetHeight;
        if (e.offsetParent) for (; e.offsetParent;) t += (e = e.offsetParent).offsetTop, a += e.offsetLeft;
        return t >= window.pageYOffset && a >= window.pageXOffset && t + o <=
            window.pageYOffset + window.innerHeight && a + n <=
            window.pageXOffset + window.innerWidth;
      }
    }

    function D() {
      var e = document.querySelectorAll('.counter-value');

      function s(e) {return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');}

      e && Array.from(e).
          forEach(function(o) {
            !function e() {
              var t = +o.getAttribute('data-target'), a = +o.innerText,
                  n = t / 250;
              n < 1 && (n = 1), a < t ? (o.innerText = (a + n).toFixed(
                  0), setTimeout(e, 1)) : o.innerText = s(t), s(o.innerText);
            }();
          });
    }

    function b() {
      document.getElementById(
          'two-column-menu').innerHTML = '', document.querySelector(
          '.navbar-menu') && (document.querySelector(
          '.navbar-menu').innerHTML = d), document.getElementById('scrollbar').
          removeAttribute('data-simplebar'), document.getElementById(
          'navbar-nav').
          removeAttribute('data-simplebar'), document.getElementById('scrollbar').
          classList.
          remove('h-100');
      var a = M, n = document.querySelectorAll('ul.navbar-nav > li.nav-item'),
          o = '', s = '';
      Array.from(n).
          forEach(function(e, t) {
            t + 1 === a && (s = e), a < t + 1 &&
            (o += e.outerHTML, e.remove()), t + 1 === n.length &&
            s.insertAdjacentHTML && s.insertAdjacentHTML('afterend',
                '<li class="nav-item">\t\t\t\t\t\t<a class="nav-link" href="#sidebarMore" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarMore">\t\t\t\t\t\t\t<i class="ri-briefcase-2-line"></i> <span data-key="t-more">More</span>\t\t\t\t\t\t</a>\t\t\t\t\t\t<div class="collapse menu-dropdown" id="sidebarMore"><ul class="nav nav-sm flex-column">' +
                o + '</ul></div>\t\t\t\t\t</li>');
          });
    }

    function y(e) {
      'vertical' == e
          ? (document.getElementById(
              'two-column-menu').innerHTML = '', document.querySelector(
              '.navbar-menu') && (document.querySelector(
              '.navbar-menu').innerHTML = d), document.getElementById(
              'theme-settings-offcanvas') && (document.getElementById(
              'sidebar-size').style.display = 'block', document.getElementById(
              'sidebar-view').style.display = 'block', document.getElementById(
              'sidebar-color').style.display = 'block', document.getElementById(
              'sidebar-img') && (document.getElementById(
              'sidebar-img').style.display = 'block'), document.getElementById(
              'layout-position').style.display = 'block', document.getElementById(
              'layout-width').style.display = 'block', document.getElementById(
              'sidebar-visibility').style.display = 'none'), r(), g(), E(), p())
          : 'horizontal' == e ? (b(), document.getElementById(
              'theme-settings-offcanvas') && (document.getElementById(
              'sidebar-size').style.display = 'none', document.getElementById(
              'sidebar-view').style.display = 'none', document.getElementById(
              'sidebar-color').style.display = 'none', document.getElementById(
              'sidebar-img') && (document.getElementById(
              'sidebar-img').style.display = 'none'), document.getElementById(
              'layout-position').style.display = 'block', document.getElementById(
              'layout-width').style.display = 'block', document.getElementById(
              'sidebar-visibility').style.display = 'none'), g()) : 'twocolumn' == e
              ? (document.getElementById('scrollbar').
                  removeAttribute('data-simplebar'), document.getElementById(
                  'scrollbar').classList.remove('h-100'), document.getElementById(
                  'theme-settings-offcanvas') && (document.getElementById(
                  'sidebar-size').style.display = 'none', document.getElementById(
                  'sidebar-view').style.display = 'none', document.getElementById(
                  'sidebar-color').style.display = 'block', document.getElementById(
                  'sidebar-img') && (document.getElementById(
                  'sidebar-img').style.display = 'block'), document.getElementById(
                  'layout-position').style.display = 'none', document.getElementById(
                  'layout-width').style.display = 'none', document.getElementById(
                  'sidebar-visibility').style.display = 'none'))
              : 'semibox' == e && (document.getElementById(
              'two-column-menu').innerHTML = '', document.querySelector(
              '.navbar-menu') && (document.querySelector(
              '.navbar-menu').innerHTML = d), document.getElementById(
              'theme-settings-offcanvas') && (document.getElementById(
              'sidebar-size').style.display = 'block', document.getElementById(
              'sidebar-view').style.display = 'none', document.getElementById(
              'sidebar-color').style.display = 'block', document.getElementById(
              'sidebar-img') && (document.getElementById(
              'sidebar-img').style.display = 'block'), document.getElementById(
              'layout-position').style.display = 'block', document.getElementById(
              'layout-width').style.display = 'none', document.getElementById(
              'sidebar-visibility').style.display = 'block'), r(), g(), E(), p());
    }

    function E() {
      /*document.getElementById('vertical-hover').
          addEventListener('click', function() {
            'sm-hover' ===
            document.documentElement.getAttribute('data-sidebar-size')
                ? document.documentElement.setAttribute('data-sidebar-size',
                    'sm-hover-active')
                : (document.documentElement.getAttribute(
                    'data-sidebar-size'), document.documentElement.setAttribute(
                    'data-sidebar-size', 'sm-hover'));
          });*/
    }

    function e(e) {
      if (e == e) {
        switch (e['data-layout']) {
          case'vertical':
            T('data-layout', 'vertical'), sessionStorage.setItem('data-layout',
                'vertical'), document.documentElement.setAttribute('data-layout',
                'vertical'), y('vertical'), s();
            break;
          case'horizontal':
            T('data-layout', 'horizontal'), sessionStorage.setItem('data-layout',
                'horizontal'), document.documentElement.setAttribute(
                'data-layout', 'horizontal'), y('horizontal');
            break;
          case'twocolumn':
            T('data-layout', 'twocolumn'), sessionStorage.setItem('data-layout',
                'twocolumn'), document.documentElement.setAttribute('data-layout',
                'twocolumn'), y('twocolumn');
            break;
          case'semibox':
            T('data-layout', 'semibox'), sessionStorage.setItem('data-layout',
                'semibox'), document.documentElement.setAttribute('data-layout',
                'semibox'), y('semibox');
            break;
          default:
            'vertical' == sessionStorage.getItem('data-layout') &&
            sessionStorage.getItem('data-layout') ? (T('data-layout',
                'vertical'), sessionStorage.setItem('data-layout',
                'vertical'), document.documentElement.setAttribute('data-layout',
                'vertical'), y('vertical'), s()) : 'horizontal' ==
            sessionStorage.getItem('data-layout') ? (T('data-layout',
                'horizontal'), sessionStorage.setItem('data-layout',
                'horizontal'), document.documentElement.setAttribute(
                'data-layout', 'horizontal'), y('horizontal')) : 'twocolumn' ==
            sessionStorage.getItem('data-layout') ? (T('data-layout',
                'twocolumn'), sessionStorage.setItem('data-layout',
                'twocolumn'), document.documentElement.setAttribute('data-layout',
                'twocolumn'), y('twocolumn')) : 'semibox' ==
                sessionStorage.getItem('data-layout') &&
                (T('data-layout', 'semibox'), sessionStorage.setItem(
                    'data-layout',
                    'semibox'), document.documentElement.setAttribute(
                    'data-layout', 'semibox'), y('semibox'));
        }
        switch (e['data-topbar']) {
          case'light':
            T('data-topbar', 'light'), sessionStorage.setItem('data-topbar',
                'light'), document.documentElement.setAttribute('data-topbar',
                'light');
            break;
          case'dark':
            T('data-topbar', 'dark'), sessionStorage.setItem('data-topbar',
                'dark'), document.documentElement.setAttribute('data-topbar',
                'dark');
            break;
          default:
            'dark' == sessionStorage.getItem('data-topbar') ? (T('data-topbar',
                'dark'), sessionStorage.setItem('data-topbar',
                'dark'), document.documentElement.setAttribute('data-topbar',
                'dark')) : (T('data-topbar', 'light'), sessionStorage.setItem(
                'data-topbar', 'light'), document.documentElement.setAttribute(
                'data-topbar', 'light'));
        }
        switch ('hidden' === e['data-sidebar-visibility'] ? (T(
            'data-sidebar-visibility', 'hidden'), sessionStorage.setItem(
            'data-sidebar-visibility',
            'hidden'), document.documentElement.setAttribute(
            'data-sidebar-visibility', 'hidden')) : (T('data-sidebar-visibility',
            'show'), sessionStorage.setItem('data-sidebar-visibility',
            'show'), document.documentElement.setAttribute(
            'data-sidebar-visibility', 'show')), e['data-layout-style']) {
          case'default':
            T('data-layout-style', 'default'), sessionStorage.setItem(
                'data-layout-style',
                'default'), document.documentElement.setAttribute(
                'data-layout-style', 'default');
            break;
          case'detached':
            T('data-layout-style', 'detached'), sessionStorage.setItem(
                'data-layout-style',
                'detached'), document.documentElement.setAttribute(
                'data-layout-style', 'detached');
            break;
          default:
            'detached' == sessionStorage.getItem('data-layout-style') ? (T(
                'data-layout-style', 'detached'), sessionStorage.setItem(
                'data-layout-style',
                'detached'), document.documentElement.setAttribute(
                'data-layout-style', 'detached')) : (T('data-layout-style',
                'default'), sessionStorage.setItem('data-layout-style',
                'default'), document.documentElement.setAttribute(
                'data-layout-style', 'default'));
        }
        switch (e['data-sidebar-size']) {
          case'lg':
            T('data-sidebar-size', 'lg'), document.documentElement.setAttribute(
                'data-sidebar-size', 'lg'), sessionStorage.setItem(
                'data-sidebar-size', 'lg');
            break;
          case'sm':
            T('data-sidebar-size', 'sm'), document.documentElement.setAttribute(
                'data-sidebar-size', 'sm'), sessionStorage.setItem(
                'data-sidebar-size', 'sm');
            break;
          case'md':
            T('data-sidebar-size', 'md'), document.documentElement.setAttribute(
                'data-sidebar-size', 'md'), sessionStorage.setItem(
                'data-sidebar-size', 'md');
            break;
          case'sm-hover':
            T('data-sidebar-size',
                'sm-hover'), document.documentElement.setAttribute(
                'data-sidebar-size', 'sm-hover'), sessionStorage.setItem(
                'data-sidebar-size', 'sm-hover');
            break;
          default:
            'sm' == sessionStorage.getItem('data-sidebar-size')
                ? (document.documentElement.setAttribute('data-sidebar-size',
                    'sm'), T('data-sidebar-size', 'sm'), sessionStorage.setItem(
                    'data-sidebar-size', 'sm'))
                : 'md' == sessionStorage.getItem('data-sidebar-size')
                    ? (document.documentElement.setAttribute('data-sidebar-size',
                        'md'), T('data-sidebar-size', 'md'), sessionStorage.setItem(
                        'data-sidebar-size', 'md'))
                    : 'sm-hover' == sessionStorage.getItem('data-sidebar-size')
                        ? (document.documentElement.setAttribute('data-sidebar-size',
                            'sm-hover'), T('data-sidebar-size',
                            'sm-hover'), sessionStorage.setItem('data-sidebar-size',
                            'sm-hover'))
                        : (document.documentElement.setAttribute('data-sidebar-size',
                            'lg'), T('data-sidebar-size',
                            'lg'), sessionStorage.setItem('data-sidebar-size', 'lg'));
        }
        switch (e['data-bs-theme']) {
          case'light':
            T('data-bs-theme', 'light'), document.documentElement.setAttribute(
                'data-bs-theme', 'light'), sessionStorage.setItem('data-bs-theme',
                'light');
            break;
          case'dark':
            T('data-bs-theme', 'dark'), document.documentElement.setAttribute(
                'data-bs-theme', 'dark'), sessionStorage.setItem('data-bs-theme',
                'dark');
            break;
          default:
            sessionStorage.getItem('data-bs-theme') && 'dark' ==
            sessionStorage.getItem('data-bs-theme')
                ? (sessionStorage.setItem('data-bs-theme',
                    'dark'), document.documentElement.setAttribute('data-bs-theme',
                    'dark'), T('data-bs-theme', 'dark'))
                : (sessionStorage.setItem('data-bs-theme',
                    'light'), document.documentElement.setAttribute('data-bs-theme',
                    'light'), T('data-bs-theme', 'light'));
        }
        switch (e['data-layout-width']) {
          case'fluid':
            T('data-layout-width',
                'fluid'), document.documentElement.setAttribute(
                'data-layout-width', 'fluid'), sessionStorage.setItem(
                'data-layout-width', 'fluid');
            break;
          case'boxed':
            T('data-layout-width',
                'boxed'), document.documentElement.setAttribute(
                'data-layout-width', 'boxed'), sessionStorage.setItem(
                'data-layout-width', 'boxed');
            break;
          default:
            'boxed' == sessionStorage.getItem('data-layout-width')
                ? (sessionStorage.setItem('data-layout-width',
                    'boxed'), document.documentElement.setAttribute(
                    'data-layout-width', 'boxed'), T('data-layout-width', 'boxed'))
                : (sessionStorage.setItem('data-layout-width',
                    'fluid'), document.documentElement.setAttribute(
                    'data-layout-width', 'fluid'), T('data-layout-width', 'fluid'));
        }
        switch (e['data-sidebar']) {
          case'light':
            T('data-sidebar', 'light'), sessionStorage.setItem('data-sidebar',
                'light'), document.documentElement.setAttribute('data-sidebar',
                'light');
            break;
          case'dark':
            T('data-sidebar', 'dark'), sessionStorage.setItem('data-sidebar',
                'dark'), document.documentElement.setAttribute('data-sidebar',
                'dark');
            break;
          case'gradient':
            T('data-sidebar', 'gradient'), sessionStorage.setItem('data-sidebar',
                'gradient'), document.documentElement.setAttribute('data-sidebar',
                'gradient');
            break;
          case'gradient-2':
            T('data-sidebar', 'gradient-2'), sessionStorage.setItem(
                'data-sidebar',
                'gradient-2'), document.documentElement.setAttribute(
                'data-sidebar', 'gradient-2');
            break;
          case'gradient-3':
            T('data-sidebar', 'gradient-3'), sessionStorage.setItem(
                'data-sidebar',
                'gradient-3'), document.documentElement.setAttribute(
                'data-sidebar', 'gradient-3');
            break;
          case'gradient-4':
            T('data-sidebar', 'gradient-4'), sessionStorage.setItem(
                'data-sidebar',
                'gradient-4'), document.documentElement.setAttribute(
                'data-sidebar', 'gradient-4');
            break;
          default:
            sessionStorage.getItem('data-sidebar') && 'light' ==
            sessionStorage.getItem('data-sidebar') ? (sessionStorage.setItem(
                'data-sidebar', 'light'), T('data-sidebar',
                'light'), document.documentElement.setAttribute('data-sidebar',
                'light')) : 'dark' == sessionStorage.getItem('data-sidebar')
                ? (sessionStorage.setItem('data-sidebar', 'dark'), T(
                    'data-sidebar',
                    'dark'), document.documentElement.setAttribute('data-sidebar',
                    'dark'))
                : 'gradient' == sessionStorage.getItem('data-sidebar')
                    ? (sessionStorage.setItem('data-sidebar', 'gradient'), T(
                        'data-sidebar',
                        'gradient'), document.documentElement.setAttribute(
                        'data-sidebar', 'gradient'))
                    : 'gradient-2' == sessionStorage.getItem('data-sidebar')
                        ? (sessionStorage.setItem('data-sidebar',
                            'gradient-2'), T('data-sidebar',
                            'gradient-2'), document.documentElement.setAttribute(
                            'data-sidebar', 'gradient-2'))
                        : 'gradient-3' == sessionStorage.getItem('data-sidebar')
                            ? (sessionStorage.setItem('data-sidebar',
                                'gradient-3'), T('data-sidebar',
                                'gradient-3'), document.documentElement.setAttribute(
                                'data-sidebar', 'gradient-3'))
                            : 'gradient-4' ==
                            sessionStorage.getItem('data-sidebar') &&
                            (sessionStorage.setItem('data-sidebar',
                                'gradient-4'), T('data-sidebar',
                                'gradient-4'), document.documentElement.setAttribute(
                                'data-sidebar', 'gradient-4'));
        }
        switch (e['data-sidebar-image']) {
          case'none':
            T('data-sidebar-image', 'none'), sessionStorage.setItem(
                'data-sidebar-image',
                'none'), document.documentElement.setAttribute(
                'data-sidebar-image', 'none');
            break;
          case'img-1':
            T('data-sidebar-image', 'img-1'), sessionStorage.setItem(
                'data-sidebar-image',
                'img-1'), document.documentElement.setAttribute(
                'data-sidebar-image', 'img-1');
            break;
          case'img-2':
            T('data-sidebar-image', 'img-2'), sessionStorage.setItem(
                'data-sidebar-image',
                'img-2'), document.documentElement.setAttribute(
                'data-sidebar-image', 'img-2');
            break;
          case'img-3':
            T('data-sidebar-image', 'img-3'), sessionStorage.setItem(
                'data-sidebar-image',
                'img-3'), document.documentElement.setAttribute(
                'data-sidebar-image', 'img-3');
            break;
          case'img-4':
            T('data-sidebar-image', 'img-4'), sessionStorage.setItem(
                'data-sidebar-image',
                'img-4'), document.documentElement.setAttribute(
                'data-sidebar-image', 'img-4');
            break;
          default:
            sessionStorage.getItem('data-sidebar-image') && 'none' ==
            sessionStorage.getItem('data-sidebar-image')
                ? (sessionStorage.setItem('data-sidebar-image', 'none'), T(
                    'data-sidebar-image',
                    'none'), document.documentElement.setAttribute(
                    'data-sidebar-image', 'none'))
                : 'img-1' == sessionStorage.getItem('data-sidebar-image')
                    ? (sessionStorage.setItem('data-sidebar-image', 'img-1'), T(
                        'data-sidebar-image',
                        'img-1'), document.documentElement.setAttribute(
                        'data-sidebar-image', 'img-2'))
                    : 'img-2' == sessionStorage.getItem('data-sidebar-image')
                        ? (sessionStorage.setItem('data-sidebar-image', 'img-2'), T(
                            'data-sidebar-image',
                            'img-2'), document.documentElement.setAttribute(
                            'data-sidebar-image', 'img-2'))
                        : 'img-3' == sessionStorage.getItem('data-sidebar-image')
                            ? (sessionStorage.setItem('data-sidebar-image',
                                'img-3'), T('data-sidebar-image',
                                'img-3'), document.documentElement.setAttribute(
                                'data-sidebar-image', 'img-3'))
                            : 'img-4' ==
                            sessionStorage.getItem('data-sidebar-image') &&
                            (sessionStorage.setItem('data-sidebar-image', 'img-4'), T(
                                'data-sidebar-image',
                                'img-4'), document.documentElement.setAttribute(
                                'data-sidebar-image', 'img-4'));
        }
        switch (e['data-layout-position']) {
          case'fixed':
            T('data-layout-position', 'fixed'), sessionStorage.setItem(
                'data-layout-position',
                'fixed'), document.documentElement.setAttribute(
                'data-layout-position', 'fixed');
            break;
          case'scrollable':
            T('data-layout-position', 'scrollable'), sessionStorage.setItem(
                'data-layout-position',
                'scrollable'), document.documentElement.setAttribute(
                'data-layout-position', 'scrollable');
            break;
          default:
            sessionStorage.getItem('data-layout-position') && 'scrollable' ==
            sessionStorage.getItem('data-layout-position') ? (T(
                'data-layout-position', 'scrollable'), sessionStorage.setItem(
                'data-layout-position',
                'scrollable'), document.documentElement.setAttribute(
                'data-layout-position', 'scrollable')) : (T(
                'data-layout-position', 'fixed'), sessionStorage.setItem(
                'data-layout-position',
                'fixed'), document.documentElement.setAttribute(
                'data-layout-position', 'fixed'));
        }
        switch (e['data-preloader']) {
          case'disable':
            T('data-preloader', 'disable'), sessionStorage.setItem(
                'data-preloader',
                'disable'), document.documentElement.setAttribute(
                'data-preloader', 'disable');
            break;
          case'enable':
            T('data-preloader', 'enable'), sessionStorage.setItem(
                'data-preloader',
                'enable'), document.documentElement.setAttribute('data-preloader',
                'enable'), (t = document.getElementById('preloader')) &&
            window.addEventListener('load',
                function() {t.style.opacity = '0', t.style.visibility = 'hidden';});
            break;
          default:
            var t;
            sessionStorage.getItem('data-preloader') && 'disable' ==
            sessionStorage.getItem('data-preloader') ? (T('data-preloader',
                'disable'), sessionStorage.setItem('data-preloader',
                'disable'), document.documentElement.setAttribute(
                'data-preloader', 'disable')) : 'enable' ==
            sessionStorage.getItem('data-preloader')
                ? (T('data-preloader', 'enable'), sessionStorage.setItem(
                    'data-preloader',
                    'enable'), document.documentElement.setAttribute(
                    'data-preloader', 'enable'), (t = document.getElementById(
                    'preloader')) && window.addEventListener('load',
                    function() {t.style.opacity = '0', t.style.visibility = 'hidden';}))
                : document.documentElement.setAttribute('data-preloader',
                    'disable');
        }
        switch (e['data-body-image']) {
          case'img-1':
            T('data-body-image', 'img-1'), sessionStorage.setItem(
                'data-sidebabodyr-image',
                'img-1'), document.documentElement.setAttribute('data-body-image',
                'img-1'), document.getElementById('theme-settings-offcanvas') &&
            document.documentElement.removeAttribute('data-sidebar-image');
            break;
          case'img-2':
            T('data-body-image', 'img-2'), sessionStorage.setItem(
                'data-body-image',
                'img-2'), document.documentElement.setAttribute('data-body-image',
                'img-2');
            break;
          case'img-3':
            T('data-body-image', 'img-3'), sessionStorage.setItem(
                'data-body-image',
                'img-3'), document.documentElement.setAttribute('data-body-image',
                'img-3');
            break;
          case'none':
            T('data-body-image', 'none'), sessionStorage.setItem(
                'data-body-image', 'none'), document.documentElement.setAttribute(
                'data-body-image', 'none');
            break;
          default:
            sessionStorage.getItem('data-body-image') && 'img-1' ==
            sessionStorage.getItem('data-body-image') ? (sessionStorage.setItem(
                'data-body-image', 'img-1'), T('data-body-image',
                'img-1'), document.documentElement.setAttribute('data-body-image',
                'img-1'), document.getElementById('theme-settings-offcanvas') &&
            document.getElementById('sidebar-img') && (document.getElementById(
                'sidebar-img').style.display = 'none', document.documentElement.removeAttribute(
                'data-sidebar-image'))) : 'img-2' ==
            sessionStorage.getItem('data-body-image') ? (sessionStorage.setItem(
                'data-body-image', 'img-2'), T('data-body-image',
                'img-2'), document.documentElement.setAttribute('data-body-image',
                'img-2')) : 'img-3' == sessionStorage.getItem('data-body-image')
                ? (sessionStorage.setItem('data-body-image', 'img-3'), T(
                    'data-body-image',
                    'img-3'), document.documentElement.setAttribute(
                    'data-body-image', 'img-3'))
                : 'none' == sessionStorage.getItem('data-body-image') &&
                (sessionStorage.setItem('data-body-image', 'none'), T(
                    'data-body-image',
                    'none'), document.documentElement.setAttribute(
                    'data-body-image', 'none'));
        }
      }
    }

    function p() {
      setTimeout(function() {
        var e, t, a = document.getElementById('navbar-nav');
        a && (a = a.querySelector('.nav-item .active'), 300 <
        (e = a ? a.offsetTop : 0)) &&
        (t = document.getElementsByClassName('app-menu')
            ? document.getElementsByClassName('app-menu')[0]
            : '') && t.querySelector('.simplebar-content-wrapper') && setTimeout(
            function() {
              t.querySelector('.simplebar-content-wrapper').scrollTop = 330 == e
                  ? e + 85
                  : e;
            }, 0);
      }, 250);
    }

    var f, h, v, I, S, w, A, L, B, k, z, q, x = new Event('resize');

    function T(n, e) {
      Array.from(document.querySelectorAll('input[name=' + n + ']')).
          forEach(function(a) {
            e == a.value ? a.checked = !0 : a.checked = !1, a.addEventListener(
                'change', function() {
                  document.documentElement.setAttribute(n,
                      a.value), sessionStorage.setItem(n,
                      a.value), o(), 'data-layout-width' == n && 'boxed' ==
                  a.value
                      ? (document.documentElement.setAttribute(
                          'data-sidebar-size',
                          'sm-hover'), sessionStorage.setItem('data-sidebar-size',
                          'sm-hover'), document.getElementById(
                          'sidebar-size-small-hover').checked = !0)
                      : 'data-layout-width' == n && 'fluid' == a.value &&
                      (document.documentElement.setAttribute('data-sidebar-size',
                          'lg'), sessionStorage.setItem('data-sidebar-size',
                          'lg'), document.getElementById(
                          'sidebar-size-default').checked = !0), 'data-layout' ==
                  n && ('vertical' == a.value
                      ? (y('vertical'), s(), feather.replace())
                      : 'horizontal' == a.value ? (document.getElementById(
                          'sidebarimg-none') &&
                      document.getElementById('sidebarimg-none').click(), y(
                          'horizontal'), feather.replace()) : 'twocolumn' ==
                      a.value
                          ? (y(
                              'twocolumn'), document.documentElement.setAttribute(
                              'data-layout-width',
                              'fluid'), document.getElementById(
                              'layout-width-fluid').
                              click(), i(), u(), s(), feather.replace())
                          : 'semibox' == a.value &&
                          (y('semibox'), document.documentElement.setAttribute(
                              'data-layout-width',
                              'fluid'), document.getElementById(
                              'layout-width-fluid').
                              click(), document.documentElement.setAttribute(
                              'data-layout-style',
                              'default'), document.getElementById(
                              'sidebar-view-default').
                              click(), s(), feather.replace()));
                  var e, t = 'block';
                  'semibox' ==
                  document.documentElement.getAttribute('data-layout') &&
                  ('hidden' ==
                  document.documentElement.getAttribute('data-sidebar-visibility')
                      ? (document.documentElement.removeAttribute(
                          'data-sidebar'), document.documentElement.removeAttribute(
                          'data-sidebar-image'), document.documentElement.removeAttribute(
                          'data-sidebar-size'), t = 'none')
                      : (document.documentElement.setAttribute('data-sidebar',
                          sessionStorage.getItem(
                              'data-sidebar')), document.documentElement.setAttribute(
                          'data-sidebar-image', sessionStorage.getItem(
                              'data-sidebar-image')), document.documentElement.setAttribute(
                          'data-sidebar-size', sessionStorage.getItem(
                              'data-sidebar-size')))), document.getElementById(
                      'sidebar-size').style.display = t, document.getElementById(
                      'sidebar-color').style.display = t, document.getElementById(
                      'sidebar-img') && (document.getElementById(
                      'sidebar-img').style.display = t), 'data-preloader' == n &&
                  'enable' == a.value ? (document.documentElement.setAttribute(
                      'data-preloader', 'enable'), (e = document.getElementById(
                      'preloader')) && setTimeout(
                      function() {e.style.opacity = '0', e.style.visibility = 'hidden';},
                      1e3), document.getElementById('customizerclose-btn').
                      click()) : 'data-preloader' == n && 'disable' == a.value &&
                      (document.documentElement.setAttribute('data-preloader',
                          'disable'), document.getElementById(
                          'customizerclose-btn').click()), 'data-bs-theme' == n &&
                  window.dispatchEvent(x);
                });
          }), document.getElementById('collapseBgGradient') && Array.from(
          document.querySelectorAll('#collapseBgGradient .form-check input')).
          forEach(function(e) {
            var t = document.getElementById('collapseBgGradient');
            1 == e.checked && new bootstrap.Collapse(t,
                {toggle: !1}).show(), document.querySelector(
                '[data-bs-target=\'#collapseBgGradient\']') &&
            document.querySelector('[data-bs-target=\'#collapseBgGradient\']').
                addEventListener('click', function(e) {
                  document.getElementById('sidebar-color-gradient').click();
                });
          }), document.querySelectorAll(
          '[data-bs-target=\'#collapseBgGradient.show\']') && Array.from(
          document.querySelectorAll(
              '[data-bs-target=\'#collapseBgGradient.show\']')).
          forEach(function(e) {
            e.addEventListener('click', function() {
              var e = document.getElementById('collapseBgGradient');
              new bootstrap.Collapse(e, {toggle: !1}).hide();
            });
          }), Array.from(document.querySelectorAll('[name=\'data-sidebar\']')).
          forEach(function(e) {
            document.querySelector('[data-bs-target=\'#collapseBgGradient\']') &&
            (document.querySelector(
                '#collapseBgGradient .form-check input:checked')
                ? document.querySelector(
                    '[data-bs-target=\'#collapseBgGradient\']').
                    classList.
                    add('active')
                : document.querySelector(
                    '[data-bs-target=\'#collapseBgGradient\']').
                    classList.
                    remove('active'), e.addEventListener('change', function() {
              document.querySelector(
                  '#collapseBgGradient .form-check input:checked')
                  ? document.querySelector(
                      '[data-bs-target=\'#collapseBgGradient\']').
                      classList.
                      add('active')
                  : document.querySelector(
                      '[data-bs-target=\'#collapseBgGradient\']').
                      classList.
                      remove('active');
            }));
          });
    }

    function C(e, t, a, n) {
      var o = document.getElementById(a);
      n.setAttribute(e, t), o && document.getElementById(a).click();
    }

    function N() {
      document.webkitIsFullScreen || document.mozFullScreen ||
      document.msFullscreenElement ||
      document.body.classList.remove('fullscreen-enable');
    }

    function F() {
      var t = 0;
      Array.from(document.getElementsByClassName('cart-item-price')).
          forEach(function(e) {
            t += parseFloat(e.innerHTML);
          }), document.getElementById('cart-item-total') &&
      (document.getElementById('cart-item-total').innerHTML = '$' + t.toFixed(2));
    }

    function H() {
      Array.from(
          document.querySelectorAll('#notificationItemsTabContent .tab-pane')).
          forEach(function(e) {
            0 < e.querySelectorAll('.notification-item').length
                ? e.querySelector('.view-all') &&
                (e.querySelector('.view-all').style.display = 'block')
                : (e.querySelector('.view-all') && (e.querySelector(
                    '.view-all').style.display = 'none'), e.querySelector(
                    '.empty-notification-elem') ||
                (e.innerHTML += '<div class="empty-notification-elem">\t\t\t\t\t\t\t<div class="w-25 w-sm-50 pt-3 mx-auto">\t\t\t\t\t\t\t\t<img src="assets/images/svg/bell.svg" class="img-fluid" alt="user-pic">\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t<div class="text-center pb-5 mt-2">\t\t\t\t\t\t\t\t<h6 class="fs-18 fw-semibold lh-base">Hey! You have no any notifications </h6>\t\t\t\t\t\t\t</div>\t\t\t\t\t\t</div>'));
          });
    }

    function W() {
      var e;
      'horizontal' !== document.documentElement.getAttribute('data-layout') &&
      (document.getElementById('navbar-nav') &&
      (e = new SimpleBar(document.getElementById('navbar-nav'))) &&
      e.getContentElement(), document.getElementsByClassName(
          'twocolumn-iconview')[0] && (e = new SimpleBar(
          document.getElementsByClassName('twocolumn-iconview')[0])) &&
      e.getContentElement(), clearTimeout(q));
    }

    sessionStorage.getItem('defaultAttribute')
        ? ((f = {})['data-layout'] = sessionStorage.getItem(
            'data-layout'), f['data-sidebar-size'] = sessionStorage.getItem(
            'data-sidebar-size'), f['data-bs-theme'] = sessionStorage.getItem(
            'data-bs-theme'), f['data-layout-width'] = sessionStorage.getItem(
            'data-layout-width'), f['data-sidebar'] = sessionStorage.getItem(
            'data-sidebar'), f['data-sidebar-image'] = sessionStorage.getItem(
            'data-sidebar-image'), f['data-layout-position'] = sessionStorage.getItem(
            'data-layout-position'), f['data-layout-style'] = sessionStorage.getItem(
            'data-layout-style'), f['data-topbar'] = sessionStorage.getItem(
            'data-topbar'), f['data-preloader'] = sessionStorage.getItem(
            'data-preloader'), f['data-body-image'] = sessionStorage.getItem(
            'data-body-image'), e(f))
        : (L = document.documentElement.attributes, f = {}, Array.from(L).
            forEach(function(e) {
              var t;
              e && e.nodeName && 'undefined' != e.nodeName &&
              (t = e.nodeName, f[t] = e.nodeValue, sessionStorage.setItem(t,
                  e.nodeValue));
            }), sessionStorage.setItem('defaultAttribute', JSON.stringify(f)), e(
            f), (L = document.querySelector(
            '.btn[data-bs-target="#theme-settings-offcanvas"]')) &&
        L.click()), i(), h = document.getElementById(
        'search-close-options'), v = document.getElementById(
        'search-dropdown'), (I = document.getElementById('search-options')) &&
    (I.addEventListener('focus', function() {
      0 < I.value.length
          ? (v.classList.add('show'), h.classList.remove('d-none'))
          : (v.classList.remove('show'), h.classList.add('d-none'));
    }), I.addEventListener('keyup', function(e) {
      var o, t;
      0 < I.value.length ? (v.classList.add('show'), h.classList.remove(
          'd-none'), o = I.value.toLowerCase(), t = document.getElementsByClassName(
          'notify-item'), Array.from(t).forEach(function(e) {
        var t, a, n = '';
        e.querySelector('h6') ? (t = e.getElementsByTagName(
            'span')[0].innerText.toLowerCase(), n = (a = e.querySelector('h6').
            innerText.
            toLowerCase()).includes(o) ? a : t) : e.getElementsByTagName(
                'span') &&
            (n = e.getElementsByTagName('span')[0].innerText.toLowerCase()), n &&
        (e.style.display = n.includes(o) ? 'block' : 'none');
      })) : (v.classList.remove('show'), h.classList.add('d-none'));
    }), h.addEventListener('click', function() {
      I.value = '', v.classList.remove('show'), h.classList.add('d-none');
    }), document.body.addEventListener('click', function(e) {
      'search-options' !== e.target.getAttribute('id') &&
      (v.classList.remove('show'), h.classList.add('d-none'));
    })), S = document.getElementById(
        'search-close-options'), w = document.getElementById(
        'search-dropdown-reponsive'), A = document.getElementById(
        'search-options-reponsive'), S && w && A && (A.addEventListener('focus',
        function() {
          0 < A.value.length ? (w.classList.add('show'), S.classList.remove(
              'd-none')) : (w.classList.remove('show'), S.classList.add('d-none'));
        }), A.addEventListener('keyup', function() {
      0 < A.value.length
          ? (w.classList.add('show'), S.classList.remove('d-none'))
          : (w.classList.remove('show'), S.classList.add('d-none'));
    }), S.addEventListener('click', function() {
      A.value = '', w.classList.remove('show'), S.classList.add('d-none');
    }), document.body.addEventListener('click', function(e) {
      'search-options' !== e.target.getAttribute('id') &&
      (w.classList.remove('show'), S.classList.add('d-none'));
    })), (L = document.querySelector('[data-toggle="fullscreen"]')) &&
    L.addEventListener('click', function(e) {
      e.preventDefault(), document.body.classList.toggle(
          'fullscreen-enable'), document.fullscreenElement ||
      document.mozFullScreenElement || document.webkitFullscreenElement
          ? document.cancelFullScreen
              ? document.cancelFullScreen()
              : document.mozCancelFullScreen
                  ? document.mozCancelFullScreen()
                  : document.webkitCancelFullScreen &&
                  document.webkitCancelFullScreen()
          : document.documentElement.requestFullscreen
              ? document.documentElement.requestFullscreen()
              : document.documentElement.mozRequestFullScreen
                  ? document.documentElement.mozRequestFullScreen()
                  : document.documentElement.webkitRequestFullscreen &&
                  document.documentElement.webkitRequestFullscreen(
                      Element.ALLOW_KEYBOARD_INPUT);
    }), document.addEventListener('fullscreenchange',
        N), document.addEventListener('webkitfullscreenchange',
        N), document.addEventListener('mozfullscreenchange',
        N), B = document.getElementsByTagName(
        'HTML')[0], (z = document.querySelectorAll('.light-dark-mode')) &&
    z.length && z[0].addEventListener('click', function(e) {
      B.hasAttribute('data-bs-theme') && 'dark' == B.getAttribute('data-bs-theme')
          ? C('data-bs-theme', 'light', 'layout-mode-light', B)
          : C('data-bs-theme', 'dark', 'layout-mode-dark',
              B), window.dispatchEvent(x);
    }), G(), D(), r(), document.getElementsByClassName('dropdown-item-cart') &&
    (k = document.querySelectorAll('.dropdown-item-cart').length, Array.from(
        document.querySelectorAll(
            '#page-topbar .dropdown-menu-cart .remove-item-btn')).
        forEach(function(e) {
          e.addEventListener('click', function(e) {
            k--, this.closest('.dropdown-item-cart').
                remove(), Array.from(
                document.getElementsByClassName('cartitem-badge')).
                forEach(
                    function(e) {e.innerHTML = k;}), F(), document.getElementById(
                'empty-cart') &&
            (document.getElementById('empty-cart').style.display = 0 == k
                ? 'block'
                : 'none'), document.getElementById('checkout-elem') &&
            (document.getElementById('checkout-elem').style.display = 0 == k
                ? 'none'
                : 'block');
          });
        }), Array.from(document.getElementsByClassName('cartitem-badge')).
        forEach(function(e) {e.innerHTML = k;}), document.getElementById(
        'empty-cart') && (document.getElementById(
        'empty-cart').style.display = 'none'), document.getElementById(
        'checkout-elem') && (document.getElementById(
        'checkout-elem').style.display = 'block'), F()), document.getElementsByClassName(
        'notification-check') &&
    (H(), Array.from(document.querySelectorAll('.notification-check input')).
        forEach(function(t) {
          t.addEventListener('change', function(e) {
            e.target.closest('.notification-item').
                classList.
                toggle('active');
            var t = document.querySelectorAll(
                '.notification-check input:checked').length;
            e.target.closest('.notification-item').
                classList.
                contains('active'), document.getElementById(
                'notification-actions').style.display = 0 < t
                ? 'block'
                : 'none', document.getElementById('select-content').innerHTML = t;
          }), document.getElementById('notificationDropdown').
              addEventListener('hide.bs.dropdown', function(e) {
                t.checked = !1, document.querySelectorAll('.notification-item').
                    forEach(function(e) {
                      e.classList.remove('active');
                    }), document.getElementById(
                    'notification-actions').style.display = '';
              });
        }), document.getElementById('removeNotificationModal').
        addEventListener('show.bs.modal', function(e) {
          document.getElementById('delete-notification').
              addEventListener('click', function() {
                Array.from(document.querySelectorAll('.notification-item')).
                    forEach(function(e) {
                      e.classList.contains('active') && e.remove();
                    }), H(), document.getElementById(
                    'NotificationModalbtn-close').click();
              });
        })), [].slice.call(
        document.querySelectorAll('[data-bs-toggle="tooltip"]')).
        map(function(e) {return new bootstrap.Tooltip(e);}), [].slice.call(
        document.querySelectorAll('[data-bs-toggle="popover"]')).
        map(function(e) {
          return new bootstrap.Popover(e);
        }), document.getElementById('reset-layout') &&
    document.getElementById('reset-layout').
        addEventListener('click',
            function() {
          sessionStorage.clear(), window.location.reload();}), z = document.querySelectorAll(
        '[data-toast]'),  Array.from(
        document.querySelectorAll('.dropdown-menu a[data-bs-toggle="tab"]')).
        forEach(function(e) {
          e.addEventListener('click', function(e) {
            e.stopPropagation(), bootstrap.Tab.getInstance(e.target).show();
          });
        }), o(), s(), p(), window.addEventListener('resize',
        function() {q && clearTimeout(q), q = setTimeout(W, 2e3);});

  }




}
