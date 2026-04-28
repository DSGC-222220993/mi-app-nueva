# MiAppNueva

La aplicación cuenta con un sistema de navegación dinámico y una sección de Contacto funcional que valida correos de Gmail, Hotmail u Outlook. Los mensajes enviados se almacenan de forma externa para permitir el despliegue en entornos estáticos como GitHub Pages.

- Frontend: Angular (Standalone Components).

- Estilos: CSS3.

- Backend Falso: Integración con MockAPI para persistencia de datos.

## Funcionalidades

- Navegación básica entre páginas (home, perfil, contacto, acerca, 404).
- Formulario de contacto funcional con validación de email (solo Gmail/Hotmail/Outlook) y envío a MockAPI.
- SSR configurado y estilos básicos con colores personalizados.

## Preparación del entorno

Antes de empezar, asegúrate de tener instalado Node.js (versión 18 o superior).

1. Clonar e instalar dependencias

git clone https://github.com/tu-usuario/mi-app-nueva.git
cd mi-app-nueva
npm install

2. Configurar MockAPI
Para que el formulario de contacto funcione, necesitas tu propia llave de API:

- Crea una cuenta en mockapi.io.

- Crea un nuevo proyecto y un recurso llamado messages.

- Define el esquema de messages con los campos: email (string), message (string) y date (date).

- Copia tu API Endpoint y pégalo en la variable MOCK_API_URL dentro de src/app/pages/contacto/contacto.ts.

## Uso en local

Para levantar el servidor de desarrollo:

npx ng serve
Navega a http://localhost:4200/. La aplicación se recargará automáticamente si realizas cambios.

## Notas

- Páginas placeholder: Home, Acerca y Perfil solo tienen texto estático; no hay lógica interactiva ni datos reales.
- Falta de robustez: No hay manejo de errores amigable (solo alerts), estados de carga, o validación completa (ej. sanitización de inputs, XSS).
- Validación restrictiva: El email solo acepta dominios específicos; no soporta corporativos.
- Sin persistencia: Datos del formulario se pierden al recargar.
- Arquitectura básica: Falta capa de servicios, configuración de entorno, y gestión de estado.
- Otros: Contador de caracteres desincronizado, sin internacionalización, y algunos componentes con código incompleto.

Es la etapa inicial de la página y unicamente se desarrollo para conocer como es trabajar con Angular.
