Template.loginForm.events({
	"click #registerbtn" :function(e){
		e.preventDefault();
		myTemplate.set("registerForm");
	},
	"click #close" : function(e){
		e.preventDefault();
		$(".panelForm").css("opacity",0)
	},
	// servidor
	"submit form": function(e){
			e.preventDefault();
			Meteor.loginWithPassword(e.target.username.value,e.target.password.value); 
		$(".panelForm").css("opacity",0)
		return false;
	}
	
  
	
});

