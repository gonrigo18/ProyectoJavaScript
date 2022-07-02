/*

    INICIO DECLARACION DE FUNCIONES

*/
function showContent(id,e) {
    document.getElementById("error").style.display='none';

    if (e.checked) {
        document.getElementById(id).style.display='block';
    }else{
        document.getElementById(id).style.display='none';
    }
}

function deposito() {
    document.getElementById("error").style.display='none';

    let valor= parseInt(document.getElementById("depositbtn").value);
    if(!isNaN(valor))
    {
        totalAccount = totalAccount + valor;
        document.getElementById("total").innerHTML=" $ " + totalAccount;
    }
}

function retiro() {
    document.getElementById("error").style.display='none';

    let valor= parseInt(document.getElementById("withdrawbtn").value);
    if(!isNaN(valor))
    {
        if(valor<=totalAccount)
        {
            totalAccount=totalAccount-valor;
            document.getElementById("total").innerHTML= " $  " + totalAccount;
        }else{
            document.getElementById("error").innerHTML="La cantidad no puede superar el saldo";
            document.getElementById("error").style.display='block';
        }
    }
}
function buyBtc(){
    document.getElementById("error").style.display='none';

    let valor= parseInt(document.getElementById("buybtc").value);
    if(!isNaN(valor)){
        saldoBtc = saldoBtc + (valor / btc);
        document.getElementById("btctotal").innerHTML= "  " + saldoBtc;
    }
}
function buyEth(){
    document.getElementById("error").style.display='none';

    let valor2= parseInt(document.getElementById("buyeth").value);
    if(!isNaN(valor2)){
        saldoEth = saldoEth + (valor2 / eth);
        document.getElementById("ethtotal").innerHTML="  " + saldoEth;
    }
}
function buyUsdt(){
    document.getElementById("error").style.display='none';

    let valor3= parseInt(document.getElementById("buyusdt").value);
    if(!isNaN(valor3)){
        saldoUsdt = saldoUsdt + (valor3 / usdt);
        document.getElementById("usdttotal").innerHTML="  " + saldoUsdt;
    }
}

function investBtc(){
    document.getElementById("errorbtc").style.display='none';

    let valor= parseFloat(document.getElementById("investbtc").value);
    if(!isNaN(valor)){
        if ((valor+btcInvested) > saldoBtc){
            document.getElementById("errorbtc").innerHTML="La cantidad no puede superar el saldo";
            document.getElementById("errorbtc").style.display='block';
        }
        else{
        btcInvested = btcInvested + valor;
        document.getElementById("btcinvesttotal").innerHTML= "  " + btcInvested;
        }
    }
}
function investEth(){
    document.getElementById("erroreth").style.display='none';

    let valor= parseFloat(document.getElementById("investeth").value);
    if(!isNaN(valor)){
        if ((valor+ethInvested) > saldoEth){
            document.getElementById("erroreth").innerHTML="La cantidad no puede superar el saldo";
            document.getElementById("erroreth").style.display='block';
        }
        else{
        ethInvested = ethInvested + valor;
        document.getElementById("ethinvesttotal").innerHTML= "  " + ethInvested;
        }
    }
}
function investUsdt(){
    document.getElementById("errorusdt").style.display='none';

    let valor= parseFloat(document.getElementById("investusdt").value);
    if(!isNaN(valor)){
        if ((valor+usdtInvested) > saldoUsdt){
            document.getElementById("errorusdt").innerHTML="La cantidad no puede superar el saldo";
            document.getElementById("errorusdt").style.display='block';
        }
        else{
        usdtInvested = usdtInvested + valor;
        document.getElementById("usdtinvesttotal").innerHTML= "  " + usdtInvested;
        }
    }
}

    /* inicio funcion para insertar dom */
function dom (){
    if (cryptoList.length === 0) {
        document.getElementById("nameTitle").innerHTML = " Usted no esta invirtiendo";
    }
    else{
    let dom = cryptoList.map(function(bar){
        return '<li>'+bar.moneda+' '+bar.cantidad+'</li>'
    })
    document.getElementById("nameTitle").innerHTML = " Sus inversiones son: \n" + dom;
    }
    document.getElementById("cantTransacciones").innerHTML = " Cantidad de transacciones: \n" + transacciones;
}

function newUser(){
    class UsuariosRegistrados{
        constructor(usuario, contrasena) {
            this.usuario = document.getElementById('registroUsuario').value;
            this.contrasena = document.getElementById('registroContraseña').value;
        }
    }
    const newUser = new UsuariosRegistrados(id, usuario, contrasena);
    userList.push(newUser);
    registredUsers = userList.length ;
    document.getElementById("usuariosregistrados").innerHTML= registredUsers;
    }
    /* fin funcion dom */

// function validation(newUser){
//     let repeat=false;
//     userList.forEach(element => {
//         if (element.usuario == newUser.usuario){
//             element.contrasena += newUser.contrasena;
//             repeat = true;
//         }
//     });
//     if(!repeat){
//         userList.push(newUser);
//     }
// }

/*

    FIN DECLARACION DE FUNCIONES

*/