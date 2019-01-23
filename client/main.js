Template.mainpage.onRendered(function(){
	$(".dropdown-button").dropdown();	
});

Template.mainnav.helpers({
	username:function(){
		//return Accounts.user().username;
		// mamni
		return Accounts.user().username;

	}
});
Template.mainnav.events({
	"click #logout":function(){
		Meteor.logout();
		FlowRouter.go("/");

	}
});

Template.mainnav.events({
	"click #loginabrir":function(){
		$(".panelForm").css("opacity",1)
	},
	"click #perfil":function(){
		FlowRouter.go ('users');

	},
	"click #home":function(e){
		FlowRouter.go("/");

	}
});
