import './bootstrap';
import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import { route } from 'ziggy-js';
import MainLayout from './Layouts/MainLayout';
window.route = route;
window.route = (name, params, absolute) =>
    route(name, params, absolute, Ziggy);
createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
    // return pages[`./Pages/${name}.jsx`]
    let page =  pages[`./Pages/${name}.jsx`]
    page.default.layout = page.default.layout || ((page) => <MainLayout children={page}/>)
    return page;
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)
  },
})