FlowRouter.route("/",{
	action : function(params,queryParams) {
		BlazeLayout.render("mainpage",{mainmenu:"mainnav"});
	}
});

FlowRouter.route("/curso",{
	action : function(params,queryParams) {
		BlazeLayout.render("curso",{mainmenu:"mainnav"});
	}
});

FlowRouter.route("/contactar",{
	action : function(params,queryParams) {
		BlazeLayout.render("contact",{mainmenu:"mainnav"} );
	}
});
FlowRouter.route("/users",{	
	action : function(params,queryParams) {
		BlazeLayout.render("perfil",{mainmenu:"mainnav"});
	}
});
FlowRouter.route("/notificaciones",{	
	action : function(params,queryParams) {
		BlazeLayout.render("notificaciones",{mainmenu:"mainnav"});
	}
});
FlowRouter.route("/sistema_baneo",{	
	action : function(params,queryParams) {
		BlazeLayout.render("sistema_baneo",{mainmenu:"mainnav"});
	}
});
FlowRouter.route("/cursos",{	
	action : function(params,queryParams) {
		BlazeLayout.render("cursos",{mainmenu:"mainnav"});
	}
});
FlowRouter.route("/crearcurso",{	
	action : function(params,queryParams) {
		BlazeLayout.render("crearcurso",{mainmenu:"mainnav"});
	}
});