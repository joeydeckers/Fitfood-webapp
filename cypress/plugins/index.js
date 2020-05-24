const Nuxt = require('nuxt').Nuxt;
const Builder = require('nuxt').Builder;
const resolve = require('path').resolve;

module.exports = async (on, conf) => { // make sure to include "async"!
  conf = {
    ...conf,
    ...{
      dev: false,
      rootDir: resolve(__dirname, '../../'),
      modules: [
        // Doc: https://bootstrap-vue.js.org
        'bootstrap-vue/nuxt',
      ],
      css: [
        '@/assets/css/main.css',
      ],
    }
  }

  nuxt = new Nuxt(conf)
  await new Builder(nuxt).build()
  await nuxt.server.listen(4000, 'localhost')
  return conf;
};
