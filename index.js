let btc = 30498, eth = 1883, usdt = 1;
let monto = 0, saldo = 0, saldobtc = 0, saldoeth = 0; saldousdt=0;
let crypto, userpass, operacion;
alert("BIENVENIDO A NUESTRA APLICACIÓN");
userpass = prompt("Ingrese su contraseña: ");
/*Validacion de contraseña*/
while(userpass != "pass"){
    userpass = prompt("Contraseña incorrecta, vuelve a ingresar contraseña: ");
}
/* Si validacion de contraseña es correcta*/
alert("Hola!!!");
operar()