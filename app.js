var express = require('express'), 
    http = require('http'), 
    path = require('path'),
    Post = require('./Post'),
    bodyParser = require('body-parser');

var app = express();

app.configure(function() {
    app.set('port', process.env.PORT || 3000);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'ejs');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development',function(){
  app.use(express.errorHandler());
})

app.get('/', function(request, response){
     Post.find({}).sort({createdAt: 'desc'}).exec(function(error,posts){
    if(error){
      response.send(500,'There was an error');
    }else{
      // response.send(200,'great');
      response.render('index',{ posts:posts });
    }
  })
})

app.post('/tweet',function(request, response){
  console.log(request.body)
  var post = new Post({
    content: request.body.content
  })
  post.save(function(error, model){
    if(error){
      response.send(500, 'There was an error');
    }else{
      response.redirect('/');
    }
  })

})

app.get('/tweets.json',function(request,response){
   Post.find({}).sort({createdAt: 'desc'}).exec(function(error,posts){
    if(error){
      response.send(500,{
        success: false
      });
    }else{
      response.send(200,{
        success:true,
        posts:posts
      })
    }
  })
})

http.createServer(app).listen(app.get('port'), function(){
    console.log("Express server listening on port " + app.get('port'));
});




