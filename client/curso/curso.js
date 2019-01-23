Template.mostrarcurso.onRendered(function(){
	$("#container_curso").risizeDiv(function(num){
		$(".rectangle_hidden").animate({scrollTop:num},400);
	})
});
Template.curso.helpers({
	list: function(){
		console.log(Cursos.find().fetch());
		return Cursos.find();
	}
});
//Meteor.subscribe('list', function() {});