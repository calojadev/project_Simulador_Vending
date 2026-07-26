# Simulador Vending Machine

Proyecto que simula el funcionamiento de una máquina expendedora. Lo hice para profundizar en JavaScript puro, practicando manejo del DOM, Event Listeners y otras funciones propias del lenguaje.

## 🚀 Demo

https://calojadev.github.io/project_Simulador_Vending/

## 🛠️ Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript (vanilla)

## ✨ Funcionalidades

- Simulación de saldo: el usuario puede agregar dinero a la máquina.
- Selección de productos (agua, refresco y snack), cada uno con su propio precio.
- Control de stock por producto: si no hay existencia, se avisa y no se permite la compra.
- Validación de saldo insuficiente antes de procesar la compra.
- Mensajes de estado (compra exitosa, saldo insuficiente, sin stock) con colores distintos según el caso.
- Cancelación de compra con devolución del saldo acumulado.

## 📂 Estructura del proyecto

```
project_Simulador_Vending/
├── index.html          # Estructura de la máquina expendedora
├── script.js            # Lógica del simulador (saldo, stock, eventos)
├── css/
│   ├── styles.css        # Estilos principales
│   └── normalize.css     # Reset de estilos base
└── img/                   # Imágenes de los productos
```

## 📌 Posibles mejoras a futuro

- Agregar más productos de forma dinámica en vez de tenerlos hardcodeados.
- Guardar el stock y saldo con localStorage para persistencia.
- Migrar la lógica a una versión con backend (Node.js) para simular una máquina real conectada a una base de datos.

## 👤 Autor

Desarrollado por **calojaDev**.

---
Proyecto realizado con fines de aprendizaje. ¡Cualquier sugerencia es bienvenida!
