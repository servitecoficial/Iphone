document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Verificar credenciales
    if ((username === 'Lautaro' && password === '445590') ||
        (username === 'Florencia' && password === '1995') ||
        (username === 'Invitado' && password === 'Invitado') ||
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
        case 'XR':
                price = 110;
                break;
         case 'XS':
            price = 110;
            break;
         case 'XSMax':
            price = 115;
            break;
        
        default:
            break;
     case '11':
            price = 125;
            break;
         case '11Pro':
            price = 150;
            break;
         case '11ProMax':
            price = 160;
            break;
        case 'SE2Gen':
            price = 120;
            break;
        case '12Mini':
            price = 130;
            break;
        case '12':
            price = 155;
            break;
        case '12Pro':
            price = 170;
            break;
        case '12ProMax':
            price = 180;
            break;
        case 'SE3Gen':
            price = 130;
            break;
        case '13Mini':
            price = 300;
            break;
        
    }
    
    // Calcular el precio total multiplicando el precio del iPhone por el número ingresado
    var totalPrice = price * numToMultiply;
    
    // Mostrar el resultado
    document.getElementById('result').innerText = 'El valor total es: $' + totalPrice + ' Ars Aproximadamente';
    document.getElementById('result').style.display = 'block';
});


 function calcularPrecio() {
    // Obtener el valor seleccionado del select
    const selectedValue = document.getElementById("iphoneModel").value;
    console.log(selectedValue)
    // Realizar la solicitud HTTP para obtener el valor de compra del dólar blue
    fetch('https://dolarapi.com/v1/dolares/blue')
        .then(response => response.json())
        .then(data => {
            const blueBuyValue = data.venta;
            // Calcular el precio multiplicando el valor seleccionado por el valor de compra del dólar blue
            const precioTotal = selectedValue * blueBuyValue;
            // Mostrar el precio en el div result
			  document.getElementById('result').style.display = 'block';
            document.getElementById("result").textContent = `Cotizacion total: $${precioTotal.toFixed(2)} Aproximadamente`;
        })
        .catch(error => {
            console.error('Se produjo un error al obtener los datos:', error);
            // Manejar el error de alguna manera
        });
}

// Llamar a la función calcularPrecio() al cargar la página
window.onload = calcularPrecio;