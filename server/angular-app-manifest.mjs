
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/shop/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/shop/home",
    "route": "/shop"
  },
  {
    "renderMode": 2,
    "route": "/shop/auth"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YA3PTIWF.js"
    ],
    "route": "/shop/auth/login"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YA3PTIWF.js"
    ],
    "route": "/shop/auth/regester"
  },
  {
    "renderMode": 2,
    "route": "/shop/home"
  },
  {
    "renderMode": 2,
    "route": "/shop/productDetails"
  },
  {
    "renderMode": 2,
    "route": "/shop/carts"
  },
  {
    "renderMode": 2,
    "route": "/shop/about"
  },
  {
    "renderMode": 2,
    "redirectTo": "/shop/contact/web",
    "route": "/shop/contact"
  },
  {
    "renderMode": 2,
    "route": "/shop/contact/web"
  },
  {
    "renderMode": 2,
    "route": "/shop/contact/mobile"
  },
  {
    "renderMode": 2,
    "route": "/shop/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 17734, hash: 'a15e2402d7e7ac478018178edd518a3cbce0b39348c37057b4cc7c6ee6e294a5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1089, hash: 'b55bfae68d0e60a2db61c85eda579c471c19358b714222f10ca0ed9ffd7b841e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'auth/login/index.html': {size: 26801, hash: '6509eff865bd11b933860901a650c4e3ebd520e7e80af5ccd196ba6d7fdc64b7', text: () => import('./assets-chunks/auth_login_index_html.mjs').then(m => m.default)},
    'auth/index.html': {size: 18569, hash: 'cc8e5f21929eedb73cf8453e73b0301d8074c2899442e2cfe7705bc113de637d', text: () => import('./assets-chunks/auth_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 18569, hash: 'cc8e5f21929eedb73cf8453e73b0301d8074c2899442e2cfe7705bc113de637d', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'carts/index.html': {size: 18569, hash: 'cc8e5f21929eedb73cf8453e73b0301d8074c2899442e2cfe7705bc113de637d', text: () => import('./assets-chunks/carts_index_html.mjs').then(m => m.default)},
    'contact/web/index.html': {size: 30501, hash: '3e41dcc13067d6d775453777c3b3a2228b71a72006cca99fad9ecf4d0981bf4b', text: () => import('./assets-chunks/contact_web_index_html.mjs').then(m => m.default)},
    'contact/mobile/index.html': {size: 30504, hash: '10c2c8393f1f948d36f77fb3d5cc4d5c7f7cf136e4214e1a72dacbc079ab3df9', text: () => import('./assets-chunks/contact_mobile_index_html.mjs').then(m => m.default)},
    'auth/regester/index.html': {size: 18622, hash: '4cc468a83345d335ec0cb658ab242dc5faa9f21809fc306e26593699d7c7245c', text: () => import('./assets-chunks/auth_regester_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 21269, hash: '3078102b28c444834f096f3825b6f77e2f515916d989de586bf3c09495762e16', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'productDetails/index.html': {size: 30922, hash: '988b997305627652cfb8f32b9163723de177b2820162f76615cbb744b976f9d1', text: () => import('./assets-chunks/productDetails_index_html.mjs').then(m => m.default)},
    'styles-OI3QXHWG.css': {size: 41935, hash: 'sTIgh1ni1cQ', text: () => import('./assets-chunks/styles-OI3QXHWG_css.mjs').then(m => m.default)}
  },
};
