# E-Commerce de Ropa Deportiva Femenina

Este proyecto es una **e-commerce** desarrollada con **React**, destinada a la venta de ropa deportiva femenina. La app permite explorar productos, filtrarlos por categoría, ver detalles, gestionar un carrito de compras y finalizar la compra ingresando datos personales.  

---

## 📦 Tecnologías y Dependencias

La aplicación utiliza las siguientes dependencias principales:

- [React](https://reactjs.org/) - Biblioteca principal para construir la interfaz de usuario.
- [React Bootstrap](https://react-bootstrap.github.io/) - Componentes y estilos predefinidos para un diseño responsive.
- [React Router](https://reactrouter.com/en/main) - Manejo de rutas y navegación en la app.
- [Firebase](https://firebase.google.com/docs/web) - Base de datos en tiempo real para almacenar productos y órdenes.
- [Material-UI (MUI)](https://mui.com/) - Uso de iconos y botones, específicamente para el **carrito de compras**.

---

## 🎯 Funcionalidades

1. **Inicio / Home**
   - Muestra todos los productos disponibles.
   - Posibilidad de filtrar productos por categoría (Zapatillas, Remeras, Conjuntos, Calzas).

2. **Detalle de Producto**
   - Visualiza información detallada de cada producto (imagen, título, precio).
   - Incrementar o disminuir la cantidad de productos y agregar al  carrito.

3. **Carrito de Compra**
   - Eliminar productos individualmente o vaciar el carrito completo.
   - Visualización del total de la compra.
   - Ir al Checkout para finalizar la compra.

4. **Finalizar Compra**
   - Formulario para ingresar datos personales (email, nombre y número de celular).
   - Confirmación de la compra y registro en Firebase.

---

## 🚀 Instalación y Uso

1. Clonar el repositorio:

```bash
git clone https://github.com/tu-usuario/tu-repo-ecommerce.git
cd tu-repo-ecommerce
```

2. Instalar dependencias:

```bash
npm install
```

3. Configurar Firebase:

- Crear un proyecto en [Firebase](https://firebase.google.com/).
- Obtener la configuración de la base de datos y colocarla en `src/firebase/config.js`.

4. Ejecutar la app en modo desarrollo:

```bash
npm start
```

5. La app estará disponible en [http://localhost:5173/](http://localhost:5173/).

---

## 📁 Estructura del Proyecto

```
src/
│
├── components/      # Componentes reutilizables.
├── context/         # Contexto para el carrito.
├── assets/          # Recursos.
├── firebase/        # Configuración y funciones de Firebase
├── App.jsx          # Componente principal con React Router
└── index.js         # Entrada de la aplicación
```

---

## 🔗 Documentación Oficial

- [React](https://reactjs.org/docs/getting-started.html)
- [React Bootstrap](https://react-bootstrap.github.io/getting-started/introduction)
- [React Router](https://reactrouter.com/en/main/start/overview)
- [Firebase](https://firebase.google.com/docs/web/setup)
- [Material-UI (MUI)](https://mui.com/material-ui/getting-started/overview/)

---

## 💡 Notas

- La app está optimizada para dispositivos móviles y desktop gracias a **React Bootstrap**.
- El carrito está gestionado con **React Context API**, separando la lógica de UI de la funcionalidad.
- Se recomienda usar **Firebase Firestore** para almacenar productos y órdenes de compra.

---

## 📌 Autor

- Nombre: Jenifer Mariela Godoy Bustos
- Email: jeni.godoy@gmail.com
- Proyecto desarrollado como Proyecto Final del curso de React JS.

