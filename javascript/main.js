
//pensado en una tienda que si lleva productos iguales tiene descuento//
let producto = parseInt (prompt ("¿Cuántos llevas?"));
if(producto =3) {
    console.log("si los productos son iguales pagas 2 llevas 3");

}
else if (producto >=4){
    console.log("Obtenés un 15% de descuento");
}
else (producto<=2);  {
    console.log("el precio es el mismo que en la tienda");
}

//para validar el ingreso de datos//
let usuario = prompt ("ingresa tu correo");
let contraseña =prompt ("ingresa tu clave");

if ((usuario !="") && (contraseña !=""))
{console.log ("Bienvenido a la tienda");}
else{
    console.log("campos requeridos");
}

//pensado para el carrito de compras//
let opción= prompt("Ingresa una opción \n 1-transferencia bancaria \n 2-mercado pago \n 3-cuenta dni \n 4-tarjeta de crédito o débito \n 5-cuotas \n");
while(opción !="0"){
    switch(opción){
        case "1":
            console.log("Has seleccionado transferencia bancaria");
            break;

            case "2":
                console.log("Has seleccionado mercado pago");
                break;

                case "3":
                    console.log("Has seleccionado cuenta dni");
            break;

            case "4":
                console.log("Has seleccionado tarjeta de crédito o débito");
            break;

            case "5":
                console.log("Has seleccionado cuotas");
            break;  

            default:

                console.log  ("Opción no válida");
                break;}

                opción= prompt("Ingresa una opción \n 1-transferencia bancaria \n 2-mercado pago \n 3-cuenta dni \n 4-tarjeta de crédito o débito \n 5-cuotas \n");
                if (opción="0");
                console.log("Esperamos que disfrutes tu compra");}

                //para que calcule los descuentos//
              
             
               function restar(numeroA,numeroB){
               let resultado = numeroA-numeroB;
               console.log(resultado)}
               restar(10,8)
            
