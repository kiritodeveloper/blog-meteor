PERFIL = new Mongo.Collection("perfil");
Cursos = new Mongo.Collection('cursos');
var cursoss=new SimpleSchema({
	nombre:{
		type:String
	},
	detalle:{
		type:String
	},
	inicio:{
		type:Date
	},
	fin:{
		type:Date
	},
	userId:{
		type:String
	}
});
Cursos.attachSchema(cursoss);  
//Users = new Mongo.Collection("users");*/
