
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
    'index.csr.html': {size: 17734, hash: 'd054e8a2b9d44e9ef45d2f0700b85a22ac89f25d7a4dff0a2fac21f45e437a53', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1089, hash: 'dea298bd92348982cd74990cc472cdaba6576ed351ce61f927cb97f5383ae364', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'auth/login/index.html': {size: 26801, hash: '65ce7dd3ebc9f37f7fb50a16d3f08c6653b33debf10beda093929a15a446399e', text: () => import('./assets-chunks/auth_login_index_html.mjs').then(m => m.default)},
    'auth/regester/index.html': {size: 18622, hash: '5b9a7686034f59c3967a2b9923f397b8106eb491e2fff972d5f58953060a3442', text: () => import('./assets-chunks/auth_regester_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 18569, hash: '7095f8697d989bd65aa7dd34b3c27f589d243e42db36a3c48e64e8900b0a612c', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'carts/index.html': {size: 18569, hash: '7095f8697d989bd65aa7dd34b3c27f589d243e42db36a3c48e64e8900b0a612c', text: () => import('./assets-chunks/carts_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 21272, hash: '2fe66fe8e61b1e84f67d635693f61c92f68b591291d1c8f29b999cc4cc306503', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'contact/mobile/index.html': {size: 30504, hash: '57dbdb69b2923f352ed9ad8984aafdd3ef9ca50c33bf78f85eaaf957c4e23c18', text: () => import('./assets-chunks/contact_mobile_index_html.mjs').then(m => m.default)},
    'auth/index.html': {size: 18569, hash: '7095f8697d989bd65aa7dd34b3c27f589d243e42db36a3c48e64e8900b0a612c', text: () => import('./assets-chunks/auth_index_html.mjs').then(m => m.default)},
    'contact/web/index.html': {size: 30501, hash: '772854634ba7bdc9fb34d6684913ffa5d3ac979de245513b66320d2a0800bb82', text: () => import('./assets-chunks/contact_web_index_html.mjs').then(m => m.default)},
    'productDetails/index.html': {size: 30922, hash: 'efe0488b6a61d49882aa56c55c64e89370db236dd06560ad91852edd60aaa5c3', text: () => import('./assets-chunks/productDetails_index_html.mjs').then(m => m.default)},
    'styles-OI3QXHWG.css': {size: 41935, hash: 'sTIgh1ni1cQ', text: () => import('./assets-chunks/styles-OI3QXHWG_css.mjs').then(m => m.default)}
  },
};
