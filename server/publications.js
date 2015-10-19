Meteor.publish('posts', fucntion(){
	return Posts.find();
});