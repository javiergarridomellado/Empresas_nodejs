//creamos la base de datos tienda y el objeto SHOP donde iremos almacenando la info
var sqlite3 = require('sqlite3').verbose(),
db = new sqlite3.Database('emp'),
EMPRESA = {};
 
//elimina y crea la tabla clientes
EMPRESA.createTable = function()
{
	db.run("DROP TABLE IF EXISTS empresas");
	db.run("CREATE TABLE IF NOT EXISTS empresas (id INTEGER PRIMARY KEY AUTOINCREMENT, nombre TEXT, alumno TEXT, fecha_inicio DATE, fecha_finalizacion DATE, calificacion INTEGER)");
	console.log("La tabla empresas ha sido correctamente creada");
}
 
//elimina y crea la tabla orders
//EMPRESA.ordersTable = function()
//{
//	db.run("DROP TABLE IF EXISTS orders");
//	db.run("CREATE TABLE IF NOT EXISTS orders (id INTEGER PRIMARY KEY AUTOINCREMENT, customerId INTEGER, price INT)");
//	console.log("La tabla orders ha sido correctamente creada");
//}
 
//inserta un nuevo usuario en la tabla clientes
EMPRESA.insertUser = function(userData)
{
	var stmt = db.prepare("INSERT INTO empresas VALUES (?,?,?,?,?,?)");
	stmt.run(null,userData.nombre,userData.alumno,userData.fecha_inicio,userData.fecha_finalizacion,userData.calificacion);
	stmt.finalize();
}
 
//inserta un nuevo pedido en la tabla orders
//SHOP.insertOrder = function(userData)
//{
	//var stmt = db.prepare("INSERT INTO orders VALUES (?,?,?)");
	//stmt.run(null,userData.customerId,userData.price);
	//stmt.finalize();
//}
 
//obtiene todos los clientes y sus pedidos, utilizamos left join por
//si el cliente no tiene pedidos nos devulelva el registro con valores null

 
//obtenemos todos los clientes de la tabla clientes
//con db.all obtenemos un array de objetos, es decir todos
EMPRESA.getUsers = function(callback)
{
	db.all("SELECT * FROM empresas", function(err, rows) {
		if(err)
		{
			throw err;
		}
		else
		{
			callback(null, rows);
		}
	});
}
 
//obtenemos un usuario por su id, en este caso hacemos uso de db.get
//ya que sólo queremos una fila
//SHOP.getUser = function(userId,callback)
//{
//	stmt = db.prepare("SELECT * FROM clientes WHERE id = ?");
	//pasamos el id del cliente a la consulta
  //  stmt.bind(userId); 
    //stmt.get(function(error, row)
    //{
    //	if(error) 
      //  {
        //    throw err;
        //} 
        //else 
        //{
        	//retornamos la fila con los datos del usuario
          //  if(row) 
           // {
            //    callback("", row);
            //}
            //else
            //{
           // 	console.log("El usuario no existe");
            //}
        //}
    //});
//}
//exportamos el modelo para poder utilizarlo con require
module.exports = EMPRESA;