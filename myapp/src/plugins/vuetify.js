import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
      themes: {
        light: {
          primary: colors.blue.lighten3,
          secondary: colors.grey.darken1,
          accent: colors.shades.black,
          error: colors.red.accent3,
          background: colors.cyan.lighten5
        },
        dark: {
          primary: colors.grey.darken4,
          background: colors.grey.darken4 
       }
      }
    }
  });