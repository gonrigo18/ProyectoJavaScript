let cryptomonedas = btc = 30498 , eth = 1883 , usdt = 1;
let monto = 0, saldo = 0, saldobtc = 0, saldoeth = 0; saldousdt=0;
let crypto, userpass, operacion;
let saldoTotal1 = 0, saldoTotal2 = 0, saldoTotal3 = 0, transacciones = 0;
const cryptoList = [];
const container = document.querySelector(".container"),
    pwShowHide = document.querySelectorAll(".showHidePw"),
    pwFields = document.querySelectorAll(".password"),
    signUp = document.querySelector(".signup-link"),
    login = document.querySelector(".login-link");


    // cambio de formulario de login a formulario de registro
    signUp.addEventListener("click", ( )=>{
        container.classList.add("active");
    });
    login.addEventListener("click", ( )=>{
        container.classList.remove("active");
    });

    // Registrar usuario
    document.getElementById('registrar').addEventListener('click', function(){
        let registerAccount = document.getElementById('registroUsuario').value;
        let registerPassword = document.getElementById('registroContraseña').value;

        if ((registerAccount !== "") && (registerPassword !== "")){
            if(localStorage.getItem(registerAccount)){
                document.getElementById('mensaje').innerText = "El usuario ya existe";
            }else{
                localStorage.setItem(registerAccount,registerPassword);
                document.getElementById('mensaje').innerText = "Usted se registró correctamente";
            }

        }else{
            document.getElementById('mensaje').innerText = "Los campos usuario y contraseña no pueden estar vacios"
        }
    })

    // validacion de login
    document.getElementById('loguear').addEventListener('click', function(){
        let loginAccount = document.getElementById('loginUsuario').value;
        let loginPassword = document.getElementById('loginPassword').value;
        if ((loginAccount !== "") && (loginPassword !== "")){
            if (loginAccount in localStorage){
                if(loginPassword == localStorage.getItem(loginAccount)){
                    alert("BIENVENIDO A NUESTRA APLICACIÓN!!!");
                    operar();
                }else{
                    document.getElementById('mensaje1').innerText = "Contraseña incorrecta";
                }
                }else{
                    document.getElementById('mensaje1').innerText = "Usuario no encontrado, por favor registrese";
        }
        }else{
            document.getElementById('mensaje1').innerText = "Los campos usuario y contraseña no pueden estar vacios";
        }
})