document.addEventListener('DOMContentLoaded', () => {
    let saldo = 0;
    let stock1 = 1;
    let stock2 = 5;
    let stock3 = 5;
    const cuadroBalance = document.getElementById('balance');
    const botonDinero = document.getElementById('add-money');
    const botonCierre = document.getElementById('close');
    const selectorProductos = document.querySelectorAll('.product button');

    botonDinero.addEventListener('click', () => {
        saldo += 10000;
        actualizarSaldo(saldo);
    });

    botonCierre.addEventListener('click', () => {
        mostrarAlerta(`Compra cancelada. Devolucion: ${saldo}`, document.getElementById('message'), 1);
    });

    selectorProductos.forEach(button => {
        button.addEventListener('click', (e) => {
            const producto = e.target.parentElement;
            let precio = parseInt(producto.getAttribute('data-price'));
            let idProducto = producto.getAttribute('id');

            if (idProducto == 1) {
                if (stock1) {
                    if (saldo < precio) {
                        mostrarAlerta(`saldo insuficiente. Devolucion: ${saldo}`, document.getElementById('message'), 0);
                    } else {
                        saldo -= precio;
                        stock1--;
                        mostrarAlerta(`Compra exitosa. Devolucion: ${saldo}`, document.getElementById('message'), 1);
                    }
                } else {
                    mostrarAlerta('Sin existencia, elija otro producto o cancele compra', document.getElementById('message'), 2);
                }
            }

            if (idProducto == 2) {
                if (stock2) {
                    if (saldo < precio) {
                        mostrarAlerta(`saldo insuficiente. Devolucion: ${saldo}`, document.getElementById('message'), 0);
                    } else {
                        saldo -= precio;
                        stock2--;
                        mostrarAlerta(`Compra exitosa. Devolucion: ${saldo}`, document.getElementById('message'), 1);
                    }
                } else {
                    mostrarAlerta('Sin existencia, elija otro producto o cancele compra', document.getElementById('message'), 2);
                }
            }

            if (idProducto == 3) {
                if (stock3) {
                    if (saldo < precio) {
                        mostrarAlerta(`saldo insuficiente. Devolucion: ${saldo}`, document.getElementById('message'), 0);
                    } else {
                        saldo -= precio;
                        stock3--;
                        mostrarAlerta(`Compra exitosa. Devolucion: ${saldo}`, document.getElementById('message'), 1);
                    }
                } else {
                    mostrarAlerta('Sin existencia, elija otro producto o cancele compra', document.getElementById('message'), 2);
                }
            }

        });
    });

    function actualizarSaldo(s) {
        cuadroBalance.textContent = saldo;
    }

    function limpiarSaldo() {
        saldo = 0;
        cuadroBalance.textContent = saldo;
    }

    function mostrarAlerta(mensaje, referencia, num) {

        if (num === 0) {
            referencia.style.color = '#FF0000';
            referencia.textContent = mensaje;
        } else if (num === 2) {
            referencia.style.color = '#fff700';
            referencia.textContent = mensaje;
        } else {
            referencia.style.color = '#2AFF00';
            referencia.textContent = mensaje;
        }


        setTimeout(() => {
            referencia.textContent = ' ';
        }, 5000);

        if (num !== 2) {
            limpiarSaldo();
        }
    };

});