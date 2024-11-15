// Mostrar el carrusel en un modal
function mostrarCarrusel(categoria) {
    const contenedor = document.getElementById('carrusel-3d-container-modal');
    contenedor.innerHTML = ''; // Limpiar el carrusel previo

    let imagenes = [];
    if (categoria === 'infraestructura') {
        imagenes = [
            { src: 'img/infCercano.JPG', alt: 'Infrestructura Cercano' },
            { src: 'img/infMedio.JPG', alt: 'Infrestructura Medio' },
            { src: 'img/infLejano.JPG', alt: 'Infrestructura Lejano' }
        ];
    } else if (categoria === 'objeto') {
        imagenes = [
            { src: 'img/objCercano.JPG', alt: 'Objeto Cercano' },
            { src: 'img/objMedio.JPG', alt: 'Objeto Medio' },
            { src: 'img/objLejano.JPG', alt: 'Objeto Lejano' }
        ];
    } else if (categoria === 'persona') {
        imagenes = [
            { src: 'img/personCercana.JPG', alt: 'Persona Cercano' },
            { src: 'img/personMedio.JPG', alt: 'Persona Medio' },
            { src: 'img/personLejana.JPG', alt: 'Persona Lejano' }
        ];
    }

    // Crear elementos de imagen para el carrusel
    imagenes.forEach((imgData, index) => {
        const imgDiv = document.createElement('div');
        imgDiv.className = 'carrusel-item';
        
        if (index === 0) imgDiv.classList.add('active'); // El primer elemento será visible inicialmente

        const img = document.createElement('img');
        img.src = imgData.src;
        img.alt = imgData.alt;

        imgDiv.appendChild(img);
        contenedor.appendChild(imgDiv);

                // Crear un elemento de texto para mostrar el nombre de la imagen
                const imgText = document.createElement('p');
                imgText.className = 'carrusel-text';
                imgText.textContent = imgData.alt; // Usar el texto del atributo alt como nombre
        
                // Añadir imagen y texto al div de la imagen
                imgDiv.appendChild(img);
                imgDiv.appendChild(imgText);
                
                contenedor.appendChild(imgDiv);
            });
        

    // Mostrar el modal
    const modal = document.getElementById('carrusel-3d-modal');
    modal.style.display = 'flex';

    iniciarCarrusel();
}

function cerrarModal() {
    const modal = document.getElementById('carrusel-3d-modal');
    modal.style.display = 'none';
    detenerCarrusel();
}

let carruselInterval;
function iniciarCarrusel() {
    const items = document.querySelectorAll('.carrusel-item');
    let index = 0;

    items.forEach(item => item.classList.remove('active'));
    if (items.length > 0) items[0].classList.add('active'); 

    carruselInterval = setInterval(() => {
        items[index].classList.remove('active');
        index = (index + 1) % items.length;
        items[index].classList.add('active');
    }, 8000);
}

function detenerCarrusel() {
    clearInterval(carruselInterval);
}

// Agregar eventos de clic en las tarjetas para abrir el carrusel
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        const categoria = card.getAttribute('data-category');
        mostrarCarrusel(categoria);
    });
});


// Agregar eventos de hover para cambiar el brillo de las tarjetas
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        document.querySelectorAll('.card').forEach(c => {
            if (c !== card) {
                c.style.filter = 'brightness(0.6)'; // Reducir brillo en tarjetas no seleccionadas
            }
        });
    });

    card.addEventListener('mouseleave', () => {
        document.querySelectorAll('.card').forEach(c => {
            c.style.filter = 'brightness(1)'; // Restaurar brillo de todas las tarjetas
        });
    });
});
