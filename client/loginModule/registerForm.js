/*Template.registerForm.onRendered(function(){
	$("select").material_select();
});*/
Template.registerForm.events({
	"click #return" : function(){
		myTemplate.set("loginForm");
	},
	"click #close":function(){
		$(".panelForm").css("opacity",0);

	},
	"submit form" : function(e){
		e.preventDefault();
		var user={
			"username": e.target.username.value,
			"email": e.target.email.value,
			"password": e.target.password.value,
			"profile": {
				"apellido":e.target.apellido.value,
				"carrera":e.target.carrera.value,		
			}
		}
		Accounts.createUser(user,function(e){
			if(e==undefined){
				Meteor.loginWithPassword(user.username,user.password);
			}
			FlowRouter.go ( '/');
		});
		return false;	
		
	}
	/*"click #registrar" : function(e) {
    	e.preventDefault();    
    	var user={
			"username": e.target.username.value,
			"email": e.target.email.value,
			"password": e.target.password.value,
			"apellido":e.target.apellido.value,
			"carrera":e.target.carrera.value,		
		}
    	Users.insert({username:user.username,email:user.email,password:user.password,apellido:user.apellido,carrera:user.carrera});
    	return false;
     },*/
});
 	