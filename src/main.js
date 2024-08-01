import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';

import 'primeicons/primeicons.css'
import Aura from '@primevue/themes/aura';

const app = createApp(App)
app.use(PrimeVue, {
    // Default theme configuration
    theme: {
        preset: Aura,
        options: {
            prefix: 'p',
            darkModeSelector: 'system',
            cssLayer: false
        }
    }
 });
app.mount('#app')
