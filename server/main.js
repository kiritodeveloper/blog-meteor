import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
	Meteor.methods({
		"addCourse": function(msnObj){
			Cursos.insert(msnObj);
			return true;
		}
	});
	Meteor.publish('list', function() {
	  console.log(Cursos.find());
	  return Cursos.find();
	});
  
});
