let btc = 30498;
let eth = 1883;
let usdt = 1 ;
let monto = 0;
let cashback = 0;
let operacion;
let saldo = 0;
let user = true;
let crypto;
let saldobtc = 0, saldoeth = 0; saldousdt=0;
let userpass = prompt("Ingrese su contraseña: ");
while(userpass != "pass"){
    userpass = prompt("Contraseña incorrecta, vuelve a ingresar contraseña: ");
}
    alert("BIENVENIDO!!!");

    function repetir(){
    operacion = prompt("Que desea hacer??: \n \n 1 - Ingresar dinero. \n 2 - Retirar dinero. \n 3 - Consultar saldos. \n 4 - Comprar cryptomoneda. \n 5 - Salir ");
if (operacion == "ingresar dinero" || operacion == "1"){
    monto = parseInt(prompt("Cuanto dinero desea ingresar?"));
    saldo = saldo + monto;
    console.log("Usted ingreso: " + monto + " pesos");
    repetir();
    }
else if((operacion == "retirar dinero") || (operacion == "2")) {
    monto = parseInt(prompt("Cuanto dinero desea retirar?"));
    saldo = saldo - monto;
    console.log("Usted retiró: " + monto + " pesos");
    repetir();
}
else if ((operacion == "consultar saldos") || (operacion == "3" )){
    console.log("Su saldo es: " + saldo + " pesos");
    repetir();
}
else if ((operacion == "comprar cryptomoneda") || (operacion == "4")) {
    crypto = prompt("Que cypto queres comprar?: \n 1 - Bitcoin(BTC). \n 2 - Ethereum(ETH). \n 3 - USDT. \n 4 - Salir.").toLowerCase();
        if((crypto == "1") || (crypto == "bitcoin" || (crypto == "btc"))){
            monto = parseInt(prompt("Cuantos pesos quieres intercambiar por Bitcoin? "));
            saldobtc = saldobtc + (monto / btc);
            console.log("Su saldo en Bitcoin es de: " + saldobtc)
        }
        else if ((crypto == "2") || (crypto == "ethereum" || (crypto == "eth"))){
            monto = parseInt(prompt("Cuantos pesos quieres intercambiar por Ethereum? "));
            alert("Usted compró: " + monto/eth + " ETH");
            saldoeth = saldoeth + (monto / eth);
            console.log("Su saldo en Ethereum es de: " + saldoeth)
        }
    }
}
    repetir();