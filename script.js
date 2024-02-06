document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Verificar credenciales
    if ((username === 'Lautaro' && password === '445590') ||
        (username === 'e' && password === '2') ||
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

document.getElementById('calculatorForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var result = num1 * num2;
    document.getElementById('result').innerText = 'El valor aproximado de su desbloqueo seria: Ars$' + result;
    document.getElementById('result').style.display = 'block';
});
