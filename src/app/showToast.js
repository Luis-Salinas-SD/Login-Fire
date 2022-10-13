export function showMessage(mensaje, tipo) {

    Toastify({
        text: mensaje,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: tipo === "success" ? "#58d68d " : "#e74c3c ",
        },
        onClick: function () { console.log('click sobre el toast') } // Callback after click
    }).showToast();

}