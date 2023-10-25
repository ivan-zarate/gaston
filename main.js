const getProducts = () => {
    const producto = document.getElementById('productos')
    fetch('celulares.json')
        .then((resp) => resp.json())
        .then((data) => {
            producto.innerHTML = "";
            data.forEach(celulares => {
                let div = document.createElement('div');
                div.innerHTML += `
        <h3>Nombre: ${celulares.name}</h3>
        <article class="precio">
            <p>Version: ${celulares.version}</p>
            <i class="fa-solid fa-share-nodes"></i>
        </article>
        <p>$${celulares.precio}</p>
        
        <img src="${celulares.imagen}"></img>
        `
                producto.append(div)
            })
        })
}

const ingreso = (email, password) => {
    email = document.getElementById('email').value;
    let check = false
    for (letter in email) {
        if (email[letter] == '@') {
            check = true
            break
        }
    }
    if (check == true) {
        localStorage.setItem('Usuario', email);
        password = document.getElementById('password').value;
        if (password.length < 8) {
            document.getElementById('error').innerHTML = "Por favor ingrese una contraseña de al menos 8 caracteres"
        }
        else {
            password = toString();
            localStorage[password];
            document.getElementById('error').style.display = 'none';
            document.getElementById('saludos').innerHTML = "Gracias por registrarte " + email + "!";
            setTimeout(() => {
                location.href = '/index.html'
            }, 1500)
        }
    }
    else {
        document.getElementById('error').innerHTML = "Por favor ingrese un formato de email correcto, ej: juan@gmail.com"
    }
}
console.log(localStorage.getItem('Usuario'));
if (!localStorage.getItem('Usuario')) {
    document.getElementById('bienvenida').style.display = "none"
}
else {
    console.log("pasa?");
    const bienvenida = document.getElementById('bienvenida');
    bienvenida.innerHTML = "";
    let div = document.createElement('div');
    div.innerHTML += `
                <h5>Bienvenid@ ${localStorage.getItem('Usuario')}</h5>
                <button type="button" onclick="logOut()">LogOut</button>`
    bienvenida.append(div)
}

const logOut = () => {
    localStorage.removeItem('Usuario')
    document.getElementById('bienvenida').style.display = "none"
}