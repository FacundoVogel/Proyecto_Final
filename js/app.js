document.addEventListener('DOMContentLoaded', () => {
    const formBusqueda = document.getElementById('form-busqueda');

    if (formBusqueda) {
        formBusqueda.addEventListener('submit', function(e) {
            e.preventDefault(); 
            
            const origen = document.getElementById('origen').value;
            const destino = document.getElementById('destino').value;
            const fecha = document.getElementById('fecha').value;
            const boton = this.querySelector('button[type="submit"]');

            // Efecto visual de carga en el botón
            const textoOriginal = boton.innerText;
            boton.innerText = 'Buscando...';
            boton.style.opacity = '0.7';

            setTimeout(() => {
                alert(`¡Búsqueda iniciada!\nOrigen: ${origen}\nDestino: ${destino}\nFecha: ${fecha}\n\nEn un entorno real, esto redirigiría a los resultados.`);
                
                boton.innerText = textoOriginal;
                boton.style.opacity = '1';
                this.reset();
            }, 1000);
        });
    }
});