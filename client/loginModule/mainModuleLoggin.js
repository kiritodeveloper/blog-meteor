myTemplate= new ReactiveVar();
myTemplate.set("loginForm");
Template.mainModuleLoggin.helpers({
	template:function(){
		return myTemplate.get();
	}
});