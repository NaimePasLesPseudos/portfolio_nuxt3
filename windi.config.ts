import { defineConfig } from 'windicss/helpers'
import colors from 'windicss/colors'


export default defineConfig({
  preflight: false,
  theme: {
      extend: {
          colors: {
              grey: colors.gray,
          },
      },
  },
})