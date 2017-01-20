Meteor.publish('snippets', function() {
    return Snippets.find({
        owner: this.userId
            //this.userId is the logged in user
    });
})

Snippets.allow({
    insert: function(userId, fields) {
        return userId; //make sure user is logged in
    }
})
