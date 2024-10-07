import React from 'react';
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/inertia-react';

createInertiaApp({
    resolve: name => {
        const pages = import.meta.glob('../Pages/**/*.jsx');
        return pages[`../Pages/${name}.jsx`]();
    },
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(<App {...props} />);
    },
});