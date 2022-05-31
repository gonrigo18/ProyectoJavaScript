/*

    INICIO DECLARACION DE FUNCIONES

*/

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
    operacion = prompt("Que desea hacer??: \n \n 1 - Ingresar dinero. \n 2 - Retirar dinero. \n 3 - Consultar saldos. \n 4 - Comprar cryptomoneda. \n 5 - Cerrar sesión ");
    /*inicio operacion ingresar dinero*/
    if (operacion == "ingresar dinero" || operacion == "1"){
        monto = parseInt(prompt("Cuanto dinero desea ingresar?"));
        saldo = saldo + monto;
        console.log("Usted ingreso: " + monto + " pesos");
        seguirOperando();
    }
    /* fin operacion ingresar dinero*/
    /*inicio operacion retirar dinero*/
    else if((operacion == "retirar dinero") || (operacion == "2")) {
        monto = parseInt(prompt("Cuanto dinero desea retirar?"));
        saldo = saldo - monto;
        console.log("Usted retiró: " + monto + " pesos");
        seguirOperando();
    }
    /*fin operacion retirar dinero*/
    /*inicio operacion consultar saldo*/
    else if ((operacion == "consultar saldos") || (operacion == "3" )){
        console.log("Su saldo es: " + saldo + " pesos");
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
}
/*fin fuincion repetir */

/*

    FIN DECLARACION DE FUNCIONES

*/