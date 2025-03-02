
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://Ahmed-AbdElwanes.github.io/shop/',
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
    'index.csr.html': {size: 17768, hash: 'a54ffcb0211f2e2cdbe7d570d09bdea94e55ddf294690d0506610411c745c746', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1123, hash: '901852c294f93c1678e49d9dfda5e1f0deedda2a5624d08fc2a56703a882e388', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'auth/regester/index.html': {size: 18656, hash: 'e4350b536c780425470d0e1ca5a202dc749dab9780b29847aff2c0752c2c889b', text: () => import('./assets-chunks/auth_regester_index_html.mjs').then(m => m.default)},
    'auth/login/index.html': {size: 26835, hash: 'a33168483f6ed5b2d46ba6452ca3106559c0b7e3e152c408f36d1b37f66ecfeb', text: () => import('./assets-chunks/auth_login_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 18603, hash: 'f7decff975df148a242892349648276f906ce8511e703e1dd672d511d373c87d', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'carts/index.html': {size: 18603, hash: 'f7decff975df148a242892349648276f906ce8511e703e1dd672d511d373c87d', text: () => import('./assets-chunks/carts_index_html.mjs').then(m => m.default)},
    'contact/web/index.html': {size: 30535, hash: 'c905a58ea33e715c5f8d290fc18cfb6f17debb7650802ebd9327645a57c2395a', text: () => import('./assets-chunks/contact_web_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 21303, hash: '37f1fd3f2083b08bb11730ebba0aa03f32f2278723bd15b4ac17be4d0a07f895', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'contact/mobile/index.html': {size: 30538, hash: '921d258e1d1cbf2262ed651c3abe31fc91f3647ec64c363a751be3b76d33eaf8', text: () => import('./assets-chunks/contact_mobile_index_html.mjs').then(m => m.default)},
    'auth/index.html': {size: 18603, hash: 'f7decff975df148a242892349648276f906ce8511e703e1dd672d511d373c87d', text: () => import('./assets-chunks/auth_index_html.mjs').then(m => m.default)},
    'productDetails/index.html': {size: 30956, hash: '11c830e423591c7feabb53117914433c95d17ae9e7d552053ab4a4a85fa69351', text: () => import('./assets-chunks/productDetails_index_html.mjs').then(m => m.default)},
    'styles-OI3QXHWG.css': {size: 41935, hash: 'sTIgh1ni1cQ', text: () => import('./assets-chunks/styles-OI3QXHWG_css.mjs').then(m => m.default)}
  },
};
