document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Verificar credenciales
    if ((username === 'Lautaro' && password === '445590') ||
        (username === 'Florencia' && password === '1995') ||
        (username === 'r' && password === '3') ||
        (username === 't' && password === '4')) {
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('panel').style.display = 'block';
    } else {
        alert('Usuario o contraseña incorrectos.');
    }
});


document.getElementById('button1').addEventListener('click', function() {
    openPopup('popup1', 'https://www.enacom.gob.ar/imei');
});

document.getElementById('button2').addEventListener('click', function() {
    openPopup('popup2', 'https://imeicheck.com/imei-check');
});



// Agrega más eventos de clic para botones adicionales según sea necesario

function openPopup(popupId, url) {
    var popup = document.getElementById(popupId);
    var iframe = popup.querySelector('iframe');
    iframe.src = url;
    popup.style.display = 'block';
}

function closePopup(popupId) {
    var popup = document.getElementById(popupId);
    popup.style.display = 'none';
}


//calculadora
document.getElementById('calculatorForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var numToMultiply = parseFloat(document.getElementById('numToMultiply').value);
    var iphoneModel = document.getElementById('iphoneModel').value;
    var price = 0;
    
    // Obtener el precio correspondiente al modelo seleccionado
    switch (iphoneModel) {
        case '5S':
            price = 10;
            break;
        case '6':
            price = 16;
            break;
        case 'SE1':
            price = 18;
            break;
        case '6S':
            price = 18;
            break;
        case '7':
            price = 32;
            break;
        case '7Plus':
            price = 34;
            break;
        case '8':
            price = 38;
            break;
        case '8Plus':
            price = 38;
            break;
        case 'X':
            price = 64;
            break;
        default:
            break;
    }
    
    // Calcular el precio total multiplicando el precio del iPhone por el número ingresado
    var totalPrice = price * numToMultiply;
    
    // Mostrar el resultado
    document.getElementById('result').innerText = 'El precio total es: $' + totalPrice + ' Ars Aproximadamente';
    document.getElementById('result').style.display = 'block';
});
