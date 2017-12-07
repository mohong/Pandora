var Event = require('./Event');

Event.listen('event', function(data){
    console.log('yes, I recieve ' + data);
})

Event.trigger('event', 'hello world');