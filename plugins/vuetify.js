import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import colors from 'vuetify/es5/util/colors'

const ICONS =  {
  'color_select': 'color_lens',
  'edit_tool_open': 'create',
  'edit_tool_close': 'arrow_forward',
  'download': 'cloud_download',
  'file_input':'cloud_upload',
  'paint_mode': 'brush',
  'eraser': 'format_color_reset',
  'line_width': 'brightness_1'
}

Vue.use(Vuetify, {
  icons: ICONS,
  theme: {
    primary: '#A9D157',
    accent: '#F19937',
    secondary: '#9E8A64',
    info: colors.teal.lighten1,
    warning: colors.amber.base,
    error: colors.deepOrange.accent4,
    success: colors.green.accent3,
    footer: '#5F4D34'
  },
  options: {
    customProperties: true
  }
})
