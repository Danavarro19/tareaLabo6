
var bandera=true;
inventario = [];

class Producto{
  constructor(codigo, descripcion, tipo, precioCompra, precioVenta, stock){
    this.codigo=codigo;
    this.descripcion=descripcion;
    this.tipo=tipo;
    this.precioCompra=parseInt(precioCompra);
    this.precioVenta=parseInt(precioVenta);

    this.stock=parseInt(stock);
  }
  vender(cantidad=1){
    this.stock = this.stock - cantidad;
  }

  comprar(cantidad=1){
    this.stock = this.stock + cantidad;
  }
}

class Venta{
  constructor([...productos]){

  }
}

Producto.properties = ["codigo","descripcion","tipo","precio de compra", "precio de venta", "cantidad"];

while (bandera){
  let opcion = mostrarMenu();
  switch (opcion) {

    case '1':
      let product = [];
      for (let i = 0; i<Producto.properties.length; i++){
        product[i]=prompt(Producto.properties[i]+": ");
      }
      agregarProducto(product);
      break;

    case '2':
      console.log(inventario);
      let toChange = prompt("Ingrese el codigo del producto a modificar");
      let producto = buscarProducto(toChange);
      let toDo = prompt("1-Aumentas stock\n2-Diminuir stock");
      var cantidad = parseInt(prompt("cantidad"));
      switch (toDo) {
        case '1':
          producto.comprar(cantidad);
          break;
        case '2':
          producto.vender(cantidad);
          break;
        default:
          console.log("opcion no valida");
          break;
      }
      break;

    case '3':
      let toSale = [];
      let j=0;
      while (true){
        let a= prompt("Ingrese codigo de producto, escriba exit para salir");
        if (a == "exit") break;
        else {
          toSale[j] = buscarProducto(a);
        }
        j++;
      }
      procesarVenta(toSale);
      break;

    case '4':
      break;
    case '5':
      break;
    case '6':
      bandera=false;
      alert("adios");
      break;
    default:
      console.log("Ingrese opcion valida");
      break;
  }
}

function mostrarMenu(){
  return prompt("1-Agregar producto\n2-Modificar stock\n3-Resgistrar venta y reducir stock\n4-Mostrar promedio de ventas realizadas\n5-Mostrar productos con stock 0\n6-Salir del sistema");
}

function agregarProducto([codigo, descripcion, tipo, precioCompra, precioVenta, stock]){
  inventario.push(new Producto(codigo, descripcion, tipo, precioCompra,precioVenta, stock));

}

function buscarProducto(codigo){
  for (let i of inventario) {
    if (i.codigo==codigo){
      return i;
    }
  }
}

function procesarVenta([...productos], cantidad){
  for (let i of productos){
    i.vender(parseInt(prompt("cantidad de "+i.descripcion)));
  }
}
