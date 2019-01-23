 /*Perfil . appendSchema ({
         " username " : {
            Tipo : Cadena ,
            requerido :  verdadera
        },
        " LastName " : {

            Tipo : Cadena ,
            requerido :  verdadera
        }
})

Meteor.users.insert({
    username: 'admin',

    profile: {
                first_name: 'Clark',
                last_name: 'Kent'
    },

});*/
Template.perfil.onRendered(function(){
  document.getElementById("apellido").disabled = true;
  document.getElementById("username").disabled = true;

});

Template.perfil.helpers({
	username:function(){
		
		return Accounts.user().username;
	},
  apellido :function(){
      return Accounts.user().profile.apellido;
  },
  carrera :function(){
      return Accounts.user().profile.carrera;
  },
  email :function(e){
      return Accounts.user().emails[0].address;


  }
});

Template.perfil.events({
  "click #editar":function(e){

       document.getElementById("guardar").disabled = false;
      document.getElementById("cancelar").disabled = false;
       document.getElementById("editar").disabled = true;
  },
  "click #guardar":function(e){
      document.getElementById("guardar").disabled = true;
      document.getElementById("editar").disabled = false;
      document.getElementById("cancelar").disabled = true;
  }
});