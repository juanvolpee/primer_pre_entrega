let gastoTotal = 0

function incrementarTotal(){
    gastoTotal = gastoTotal + precio
}



let producto=parseInt(prompt("🔺SIN ALCOHOL🔺\n1-Coca cola....$1000\n2-Speed chico...$500\n3-Speed Grande...$700\n4-Sprite...$1000\n🔰CON ALCOHOL🔰\n5-Vodka SKY....$2800\n6-Fernet 750ml...$3000\n7-Gancia...$1500\n0-FINALIZAR COMPRA"));
coca=0
speedCh=0
SpeedGde=0
sprite=0
vodka=0
fernet=0
gancia=0
while(producto!=0){
    switch(producto){
    case 1:
        alert("Agregaste Coca cola al carrito...😁")
        gastoTotal =gastoTotal+1000;
        coca=coca+1
        break;
    case 2:
        alert("Agregaste Speed chico al carrito...😁")
        gastoTotal =gastoTotal+500;
        speedCh=speedCh+1
        break;
    case 3:
        alert("Agregaste Speed Grande al carrito...😁")
        gastoTotal =gastoTotal+700;
        SpeedGde=SpeedGde+1
        break;
    case 4:
        alert("Agregaste Sprite al carrito...😁")
        gastoTotal =gastoTotal+1000;
        sprite=sprite+1
        break;
    case 5:
        alert("Agregaste Vodka SKY al carrito...😁")
        gastoTotal =gastoTotal+2800;
        vodka=vodka+1
        break;
    case 6:
        alert("Agregaste Fernet 750ml al carrito...😁")
        gastoTotal =gastoTotal+3000;
        fernet=fernet+1
        break; 
    case 7:
        alert("Agregaste Gancia al carrito...😁")
        gastoTotal =gastoTotal+1500;
        gancia=gancia+1
        break;       
    default:
        alert("Ingreso una opcion incorrecta👀")
    }
    producto=parseInt(prompt("🔺SIN ALCOHOL🔺\n1-Coca cola....$1000\n2-Speed chico...$500\n3-Speed Grande...$700\n4-Sprite...$1000\n🔰CON ALCOHOL🔰\n5-Vodka SKY....$2800\n6-Fernet 750ml...$3000\n7-Gancia...$1500\n0-FINALIZAR COMPRA"));
}

alert("Gasto total 💲 "+gastoTotal)
alert("📋Ingrese a consola para ver el resumen de compra...Gracias📋")
console.log("⛔RESUMEN DE COMPRA⛔\n--------------------\n"+coca+"--> Coca cola\n"+speedCh+"--> Speed Chico\n"+SpeedGde+"--> Speed Grande\n"+sprite+"--> Sprite\n"+vodka+"--> Vodka\n"+fernet+"--> Fernet\n"+gancia+"--> Gancia\n--------------------\nGasto total 💲 "+gastoTotal)
