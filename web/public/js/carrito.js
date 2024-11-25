document.addEventListener('DOMContentLoaded', () => {
    const carrito = document.querySelector('#lista-carrito tbody');
    const botonesAgregar = document.querySelectorAll('.agregar-carrito');
    const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
    let itemsCarrito = [];

    // Registrar los eventos
    if (botonesAgregar.length) {
        botonesAgregar.forEach(boton => {
            boton.addEventListener('click', agregarAlCarrito);
        });
    }

    if (vaciarCarritoBtn) {
        vaciarCarritoBtn.addEventListener('click', () => {
            itemsCarrito = [];
            renderCarrito();
        });
    }

    function agregarAlCarrito(e) {
        const boton = e.target;
        const producto = {
            id: boton.dataset.id,
            nombre: boton.dataset.nombre,
            precio: boton.dataset.precio,
            imagen: boton.dataset.img,
            cantidad: 1,
        };

        // Verificar si el producto ya está en el carrito
        const existe = itemsCarrito.some(item => item.id === producto.id);
        if (existe) {
            // Incrementar cantidad
            itemsCarrito = itemsCarrito.map(item => {
                if (item.id === producto.id) {
                    item.cantidad++;
                }
                return item;
            });
        } else {
            // Agregar nuevo producto
            itemsCarrito.push(producto);
        }

        renderCarrito();
    }

    function renderCarrito() {
        limpiarCarrito();

        itemsCarrito.forEach(producto => {
            const { id, nombre, precio, imagen, cantidad } = producto;

            const fila = document.createElement('tr');
            fila.innerHTML = `
                <td><img class="carrito-img" src="${imagen}" alt="Imagen"></td>
                <td>${nombre}</td>
                <td>${precio}</td>
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
        renderCarrito();
    }
});
