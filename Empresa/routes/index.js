/* GET home page. */
/*exports.index = function(req, res){
  res.render('index', { title: 'IV App Empresas' });
};*/

//obtenemos toda la funcionalidad del modelo shop
var EMPRESA = require('../models/empresa');
 
module.exports = function(app)
{
 
	//http://localhost:3000/createTable
	//eliminamos si existe y creamos la tabla clientes
	app.get("/createTable", function(req, res){
		EMPRESA.createTable();
		res.end();
	});
 
	//http://localhost:3000/ordersTable
	//eliminamos si existe y creamos la tabla orders
	/*app.get("/ordersTable", function(req, res){
		SHOP.ordersTable();
		res.end();
	});*/
 
	//http://localhost:3000/insertUser
	//insertamos un nuevo cliente mandando un objeto a la función
	app.get("/insertUser", function(req, res)
	{
		EMPRESA.insertUser(
			{
				nombre:"PadeMobile",
				alumno:"Juan",
				fecha_inicio:"12/12/2009",
				fecha_finalizacion:"12/04/2011",
				calificacion:"10"
			}
		);
		res.end();
	});
 
	//http://localhost:3000/insertOrder
	//insertamos un nuevo pedido mandando un objeto a la función
/*	app.get("/insertOrder", function(req, res)
	{
		SHOP.insertOrder(
			{
				customerId:2,
			 	price:500
			}
		);
		res.end();
	});*/
 
	//obtenemos los datos de todos los usuarios
	app.get("/show", function(req, res){
		EMPRESA.getUsers(function(error, data)
		{
			res.render('index', { 
				title: 'Lista de mis empresas',
				empresas : data
			});
		});
	});
 
	//obtenemos los datos del usuario con id 2, cambia para probar
	/*app.get("/user", function(req, res){
		SHOP.getUser(1,function(error, data)
		{
			res.render('index', { 
				title: 'Un amigo',
				usuario : data
			});
		});
	});*/
 
	//obtenemos todos los datos de un usuario y sus pedidos
	//y los mostramos en la consola de node
	//http://localhost:3000/ordersUsers
	/*app.get("/ordersUsers", function(req,res){
		SHOP.user_orders(function(error,data){
			console.log(data);
		});
		res.end();
	})*/
}
