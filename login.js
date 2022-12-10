baseDeDatos = localStorage.getItem("sistema-de-login")
if(!baseDeDatos){
    cargarDatosInicialesDeLaBD()
}

function cargarDatosInicialesDeLaBD(){
    baseDeDatos={
        kilo:{
            password:"1234"
        },
        bolt:{
            password:"1234"
        }
    }
}
    button = document.getElementById('button')
    button.addEventListener('click',(e) => {
        e.preventDefault()
        const data = {
            username: username.value,
            password: password.value
        }
        datos = baseDeDatos[username.value]
        if(datos){
            if(datos.password != password.value){
                swal.fire("Contraseña incorrecta")
                return false;
            }
            window.open("carrousel.html","_self")
        }else{
                swal.fire("Credenciales incorrectas")
                return false;
            }
        
    }
    )
