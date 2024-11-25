document.addEventListener('DOMContentLoaded', () => {
    const carrito = document.querySelector('#lista-carrito tbody');
    const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
    
    // Recuperar el carrito almacenado previamente en localStorage
    let itemsCarrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Registrar eventos
    registrarEventosAgregar();

    if (vaciarCarritoBtn) {
        vaciarCarritoBtn.addEventListener('click', () => {
            itemsCarrito = [];
            localStorage.setItem('carrito', JSON.stringify(itemsCarrito)); // Actualizar el carrito en localStorage
            renderCarrito();
        });
    }

    function registrarEventosAgregar() {
        const botonesAgregar = document.querySelectorAll('.agregar-carrito');
        if (botonesAgregar.length) {
            botonesAgregar.forEach(boton => {
                boton.removeEventListener('click', agregarAlCarrito); // Evitar duplicar eventos
                boton.addEventListener('click', agregarAlCarrito);
            });
        }
    }

    function agregarAlCarrito(e) {
        const boton = e.target;

        // Crear un objeto del producto con los datos del botón
        const producto = {
            id: boton.dataset.id,
            nombre: boton.dataset.nombre,
            precio: parseFloat(boton.dataset.precio), // Convertir precio a número
            imagen: boton.dataset.img,
            cantidad: 1,
        };

        if (!producto.id || !producto.nombre || !producto.precio || !producto.imagen) {
            console.error('Faltan datos del producto. Verifica los atributos data-* en el HTML.');
            return;
        }

        // Agregar el producto al carrito
        itemsCarrito.push(producto);

        // Guardar el carrito en localStorage para persistencia entre recargas de página
        localStorage.setItem('carrito', JSON.stringify(itemsCarrito));
        
        renderCarrito();
        console.log(itemsCarrito);
    }

    function renderCarrito() {
        limpiarCarrito();

        itemsCarrito.forEach(producto => {
            const { id, nombre, precio, imagen, cantidad } = producto;

            const fila = document.createElement('tr');
            fila.innerHTML = `
                <td><img class="carrito-img" src="${imagen}" alt="Imagen de ${nombre}" width="50"></td>
                <td>${nombre}</td>
                <td>$${precio.toFixed(2)}</td>
                <td>${cantidad}</td>
                <td><a href="#" class="borrar-producto" data-id="${id}">X</a></td>
            `;
            carrito.appendChild(fila);
        });

        // Registrar eventos para borrar productos
        document.querySelectorAll('.borrar-producto').forEach(boton => {
            boton.addEventListener('click', eliminarProducto);
        });
    }

    function limpiarCarrito() {
        while (carrito.firstChild) {
            carrito.removeChild(carrito.firstChild);
        }
    }

    function eliminarProducto(e) {
        const id = e.target.dataset.id;
        itemsCarrito = itemsCarrito.filter(producto => producto.id !== id);

        // Actualizar el carrito en localStorage
        localStorage.setItem('carrito', JSON.stringify(itemsCarrito));

        renderCarrito();
    }

    // Renderizar el carrito al cargar la página
    renderCarrito();
});
