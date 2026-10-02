import {
  ApplicationConfig,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

function removeLoader() {
  const loader = document.getElementById('loader');
  console.log(loader);

  if (loader) {
    loader.classList.add('fade-out'); // Opcional: animación CSS
    setTimeout(() => loader.remove(), 3000);
  }
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideAppInitializer(async () => {
      // TODO: Aca podrian ir configuraciones de carga inicial
      removeLoader();
    }),
  ],
};
