import { mergeConfigs } from '@unocss/core'
import config from './.nuxt/uno.config.mjs'
import presetIcons from '@unocss/preset-icons'
import presetUno from '@unocss/preset-uno'
import presetRemToPx from '@unocss/preset-rem-to-px'

export default mergeConfigs([config, {
  presets: [
        presetUno(),
        presetRemToPx(),
        presetIcons({ /* options */ }),
    ]
}])