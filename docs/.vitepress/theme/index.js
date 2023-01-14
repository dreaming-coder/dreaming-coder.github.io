// noinspection JSUnusedGlobalSymbols

import DefaultTheme from 'vitepress/theme'
import './styles/index.css'
import {defineAsyncComponent} from "vue";


export default {
    ...DefaultTheme,
    enhanceApp(ctx) {
        DefaultTheme.enhanceApp(ctx)
        // 批量注册组件
        const requireModules = import.meta.glob('./components/**/*.vue')
        for (const path in requireModules) {
            const result = path.match('.*/(.+).vue$')
            const modulesConent = requireModules[path]
            ctx.app.component(result[1], defineAsyncComponent(modulesConent))
        }
    }
}
