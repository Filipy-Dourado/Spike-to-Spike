
const routes = [
  {
    path: '/',
    component: () => import('layouts/AcessoLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/ESCOLHA.vue') },


    ]
  },
  {
    path: '/',
    component: () => import('layouts/HomeLayout.vue'),
    children: [
      { path: 'home', name: ' home', component: () => import('pages/HOME.vue') },


    ]
  },
  {
    path: '/',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      // { path: '', component: () => import('pages/APRESENTAR.vue') },
      { path: 'login', name:'login', component: () => import('pages/LOGIN.vue') },
      { path: 'cadastro', name:'cadastro', component: () => import('src/pages/EMAIL.vue') },
      { path: 'privado', name:'privado', component: () => import('pages/PRIVADO.vue') },
      { path: 'verificar', name: ' verificar', component: () => import('pages/VERIFICAREMAIL.vue') },
      // { path: 'chave', name:'chave', component: () => import('pages/CHAVE.vue') },
      { path: 'singin', name: 'singin', component: () => import('pages/SINGUP-SINGIN.vue') },

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
