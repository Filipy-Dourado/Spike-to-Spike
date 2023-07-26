
const routes = [
  {
    path: '/',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      // { path: '', component: () => import('pages/APRESENTAR.vue') },
      { path: '', name:'escolhaDefault', component: () => import('src/pages/ESCOLHA.vue') },
      { path: 'login', name:'login', component: () => import('src/pages/Login.vue') },
      { path: 'cadastro', name:'cadastro', component: () => import('src/pages/CAD-EMAIL.vue') },
      { path: 'escolha', name:'escolha', component: () => import('src/pages/ESCOLHA.vue') },
      { path: 'signin', name: 'signin', component: () => import('src/pages/SIGNUP-SIGNIN.vue') },
      { path: 'email-confirmation', name: 'email-confirmation', component: () => import('src/pages/VERIFICAREMAIL.vue') },
      { path: 'nova-senha', name: 'nova-senha', component: () => import('src/pages/RecuperarSenha.vue') },

    ]
  },

  {
    path: '/',
    component: () => import('layouts/HomeLayout.vue'),
    children: [
      { path: 'home', name: 'home', component: () => import('src/pages/Home.vue') },

    ],
    // meta: {
    //   requiresAuth: true
    // }
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
