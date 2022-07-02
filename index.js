let  btc = 30498 , eth = 1883 , usdt = 0.99;
let monto = 0, saldo = 0, saldoBtc = 0, saldoEth = 0; saldoUsdt=0, btcInvested = 0, ethInvested = 0, usdtInvested = 0;
let transacciones = 0, totalAccount = 0;
const id ="", usuario = "", contrasena ="";
let registredUsers = 0;
const userList = [];
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
                newUser();
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
                    location.href = "operar.html";
                    // operar();
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