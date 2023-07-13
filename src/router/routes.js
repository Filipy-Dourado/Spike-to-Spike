
const routes = [
  {
    path: '/',
    component: () => import('layouts/AcessoLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/ESCOLHA.vue') },
      { path: 'singin2', name: 'singin2', component: () => import('src/pages/SIGNUP-SIGNIN-2.vue') },
      { path: 'singin', name: 'singin', component: () => import('src/pages/SIGNUP-SIGNIN.vue') },

    ]
  },

  {
    path: '/',
    component: () => import('layouts/HomeLayout.vue'),
    children: [
      { path: 'home', name: ' home', component: () => import('pages/HOME.vue') },
      { path: 'verificar', name: ' verificar', component: () => import('src/pages/VERIFICAREMAIL.vue') },
      { path: 'nova-senha', name: 'nova-senha', component: () => import('src/pages/SENHA.vue') }

    ]
  },

  {
    path: '/',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      // { path: '', component: () => import('pages/APRESENTAR.vue') },
      { path: 'login-email', name:'login-email', component: () => import('src/pages/LOG-EMAIL.vue') },
      { path: 'cadastro-email', name:'cadastro-email', component: () => import('src/pages/CAD-EMAIL.vue') },
      { path: 'login-privado', name:'cadastro-privado', component: () => import('src/pages/LOG-PRIVADO.vue') },
      { path: 'cadastro-privado', name:'login-privado', component: () => import('src/pages/CAD-PRIVADO.vue') },

    ]
  },
  // {
  //   path: '/Home',
  //   component: () => import('layouts/MainLayout.vue'),
  //   children: [
  //     { path: '', component: () => import('pages/LOGIN.vue') }
  //   ]
  // },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
