import { createApp } from 'vue'
import components from '@/components/ui';
import directives from "@/directives";
import router from "@/router/router";
import store from "@/store/store";
import App from './App'

const app = createApp(App)
components.forEach(component => {
    app.component(component.name, component)
})
directives.forEach(directive => {
    app.directive(directive.name, directive);
})

app
    .use(router)
    .use(store)
    .mount('#app')
