const Post = require('../models/Post')

exports.viewCreateScreen = function(req, res) {
    res.render('create-post'
  //  , {username: req.session.user.username, avatar: req.session.user.avatar} // commented in course 71st
    )
}


exports.create = function(req, res) {
    let post = new Post(req.body, req.session.user._id) // pass the submitted form data

    //Set this method up so it will return a promise...

    post.create().then(function() {
        res.send("New post created.")

    }).catch(function(errors) {
        res.send(errors)
    })
}

exports.viewSingle = async function(req, res) {
   try {
    let post = await Post.findSingleById(req.params.id, req.visitorId) // A new instance of blueprint of our model
    //when we create it, it will return a promise.


    res.render('single-post-screen', {post: post}) //passes the post as the variable of post
   } catch {
    // 404 
    res.render('404')
 }
}


exports.viewEditScreen = async function(req, res) {
    try{
        let post = await Post.findSingleById(req.params.id) //whatever value it resolves with
        res.render("edit-post", {post: post})
    } catch {
        res.render("404")
    }

}