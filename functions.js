/*

    INICIO DECLARACION DE FUNCIONES

*/
/* inicio calse constructora de cuentas*/

class Cuenta{
    constructor(usuario, contraseña) {
        this.usuario  = usuario.toLowerCase();
        this.contraseña = contraseña.toLowerCase();
    }
}
const cuenta1 = new Cuenta("gonzalo", "pass");

/* fin clase constructora cuentas*/

/* inicio funcion seguir operando*/
function seguirOperando(){
    operacion = prompt("Desea seguir operando?: \n 1 - Si \n 2 - No");
    if ((operacion == 1) || (operacion == "si")){
        operar();
    }else{
        alert("Gracias por elegirnos!!");
    }
}
/* fin funcion seguir operando */
/* inicio funcion comprar */
function comprar(){
    crypto = prompt("Que cypto queres comprar?: \n 1 - Bitcoin(BTC). \n 2 - Ethereum(ETH). \n 3 - USDT. \n 4 - Volver al menu anterior.");
    /* Comprar bitcoin */
        if((crypto == "1") || (crypto == "bitcoin" || (crypto == "btc"))){
            monto = parseInt(prompt("Cuantos pesos quieres intercambiar por Bitcoin? "));
            alert("Usted compró: " + monto/btc + " BTC");
            saldobtc = saldobtc + (monto / btc);
            console.log("Su saldo en Bitcoin es de: " + saldobtc);
            seguirComprando();
        }
        /* Comprar ethereum */
        else if ((crypto == "2") || (crypto == "ethereum" || (crypto == "eth"))){
            monto = parseInt(prompt("Cuantos pesos quieres intercambiar por Ethereum? "));
            alert("Usted compró: " + monto/eth + " ETH");
            saldoeth = saldoeth + (monto / eth);
            console.log("Su saldo en Ethereum es de: " + saldoeth);
            seguirComprando();
        }
        /* comprar usdt */
        else if ((crypto == "3") || (crypto == "USDT" || (crypto == "usdt"))){
            monto = parseInt(prompt("Cuantos pesos quieres intercambiar por Usdt? "));
            alert("Usted compró: " + monto/usdt + " USDT");
            saldousdt = saldousdt + (monto / usdt);
            console.log("Su saldo en USDT es de: " + saldousdt);
            seguirComprando();
        }
        else if ((crypto == "4") || (crypto == "volver" )) {
            operar();
        }
        else{
            alert("Opcion incorrecta");
            comprar();
        }
    }
    /* fin funcion comprar */
    /* inicio funcion seguir comprando */
function seguirComprando(){
    operacion = prompt("Desea seguir comprando?: \n 1 - Si \n 2 - No");
    if ((operacion == "1") || (operacion == "si")){
        comprar();
    }else{
        operar();
    }
}
/* fin funcion seguir comprando */
/* inicio funcion repetir*/
function operar(){
/*que operacion desea realizar*/
    operacion = prompt("Que desea hacer??: \n \n 1 - Ingresar dinero. \n 2 - Retirar dinero. \n 3 - Consultar saldos. \n 4 - Comprar cryptomoneda. \n 5 - Invertir \n 6 - Cerrar sesión ");
    /*inicio operacion ingresar dinero*/
    if (operacion == "ingresar dinero" || operacion == "1"){
        monto = parseInt(prompt("Cuanto dinero desea ingresar?"));
        saldo = saldo + monto;
        alert("Usted ingreso: " + monto + " pesos");
        seguirOperando();
    }
    /* fin operacion ingresar dinero*/
    /*inicio operacion retirar dinero*/
    else if((operacion == "retirar dinero") || (operacion == "2")) {
        monto = parseInt(prompt("Cuanto dinero desea retirar?"));
        saldo = saldo - monto;
        alert("Usted retiró: " + monto + " pesos");
        seguirOperando();
    }
    /*fin operacion retirar dinero*/
    /*inicio operacion consultar saldo*/
    else if ((operacion == "consultar saldo") || (operacion == "3" )){
        alert("Su saldo es: " + saldo + " pesos");
        seguirOperando();
    }
    /* fin operacion consultar saldo*/
    /*incio operacion comprar crypto*/
    else if ((operacion == "comprar cryptomoneda") || (operacion == "4")) {
        crypto = prompt("Que cypto queres comprar?: \n 1 - Bitcoin(BTC). \n 2 - Ethereum(ETH). \n 3 - USDT. \n 4 - Volver al menu anterior.");
        /* Comprar bitcoin */
        if((crypto == "1") || (crypto == "bitcoin" || (crypto == "btc"))){
            monto = parseInt(prompt("Cuantos pesos quieres intercambiar por Bitcoin? "));
            alert("Usted compró: " + monto/btc + " BTC");
            saldobtc = saldobtc + (monto / btc);
            console.log("Su saldo en Bitcoin es de: " + saldobtc);
            seguirComprando();
        }
        /* Comprar ethereum */
        else if ((crypto == "2") || (crypto == "ethereum" || (crypto == "eth"))){
            monto = parseInt(prompt("Cuantos pesos quieres intercambiar por Ethereum? "));
            alert("Usted compró: " + monto/eth + " ETH");
            saldoeth = saldoeth + (monto / eth);
            console.log("Su saldo en Ethereum es de: " + saldoeth);
            seguirComprando();
        }
        /* comprar usdt */
        else if ((crypto == "3") || (crypto == "USDT" || (crypto == "usdt"))){
            monto = parseInt(prompt("Cuantos pesos quieres intercambiar por Usdt? "));
            alert("Usted compró: " + monto/usdt + " USDT");
            saldousdt = saldousdt + (monto / usdt);
            console.log("Su saldo en USDT es de: " + saldousdt);
            seguirComprando();
        }
        else if ((crypto == "4") || (crypto == "volver")) {
            operar();
        }
        else{
            alert("Opcion incorrecta");
            comprar();
        }
    }
    else if ((operacion == "invertir") || (operacion == "5")) {
        invertir();

    }
    else if ((operacion == "cerrar sesion") || (operacion == "6")) {
        alert("Gracias por elegirnos!!!")
    }
    else{
        alert("Opcion incorrecta");
            operar();
    }
}
/*fin funcion repetir */

/* inicio array de funciones */
function invertir(){
    class CryptoInvertida{
        constructor(moneda, cantidad) {
            this.moneda  = moneda.toLowerCase();
            this.cantidad = parseInt(cantidad);
        }
    }
    const cryptoList = [];
    let enter = prompt("Que criptomoneda desea invertir? \n 1 - Bitcoin(BTC). \n 2 - Ethereum(ETH). \n 3 - USDT. \n 4 - Consultar inversiones. \n 5 - Volver al menu anterior." );
    if((enter == "1") || (enter == "bitcoin" || (enter == "btc"))){
        let moneda1 = "BTC";
        let monto1 = prompt("Cuantos $ desea invertir en Bitcoin? ");
        const cryptoInvertida1 = new CryptoInvertida(moneda1, monto1);
        console.log(cryptoInvertida1);
        alert("Usted compro $ " + cryptoInvertida1.cantidad + " en " + cryptoInvertida1.moneda);
        cryptoList.push(cryptoInvertida1);
        for (const moneda of cryptoList){
            alert( moneda.moneda + moneda.cantidad);
        }
        enter = prompt("Desea seguir invirtiendo? \n 1 - Si. \n 2 - No. ");
        if ((enter == "1") || (enter == "si")){
            invertir();
        }
        else {
            operar();
        }
    }
    /* Comprar ethereum */
    else if ((enter == "2") || (enter == "ethereum" || (enter == "eth"))){
        let moneda2 = "ETH";
        let monto2 = prompt("Cuantos $ desea invertir en Ethereum? ");
        const cryptoInvertida2 = new CryptoInvertida(moneda2, monto2);
        alert("Usted compro $ " + cryptoInvertida2.cantidad + " en " + cryptoInvertida2.moneda);
        cryptoList.push(cryptoInvertida2);
        for (const moneda of cryptoList){
            alert( moneda.moneda + moneda.cantidad);
        }
        enter = prompt("Desea seguir invirtiendo? \n 1 - Si. \n 2 - No. ");
        if ((enter == "1") || (enter == "si")){
            invertir();
        }
        else {
            operar();
        }
    }
    /* comprar usdt */
    else if ((enter == "3") || (enter == "USDT" || (enter == "usdt"))){
        let moneda3 = "USDT";
        let monto3 = prompt("Cuantos $ desea invertir en USDT? ");
        const cryptoInvertida3 = new CryptoInvertida(moneda3, monto3);
        alert("Usted compro $ " + cryptoInvertida3.cantidad + " en " + cryptoInvertida3.moneda);
        cryptoList.push(cryptoInvertida3);
        for (const moneda of cryptoList){
            alert( moneda.moneda + moneda.cantidad);
        }
        enter = prompt("Desea seguir invirtiendo? \n 1 - Si. \n 2 - No. ");
        if ((enter == "1") || (enter == "si")){
            invertir();
        }
        else {
            operar();
        }
    }
    else if ((enter == "4") || (enter == "consultar")){
        alert("USTED ESTA INVIRTIENDO EN: .....")
        enter = prompt("Desea seguir invirtiendo? \n 1 - Si. \n 2 - No. ");
        if ((enter == "1") || (enter == "si")){
            invertir();
        }
        else {
            operar();
        }
    }else if ((enter == "5") || (enter == "Volver")){
        operar();
    }
    else{
        alert("Opción incorrecta, vuelva a ingresar una opción valida.")
        invertir();
    }
}
/* fin array de funciones*/

/*

    FIN DECLARACION DE FUNCIONES

*/