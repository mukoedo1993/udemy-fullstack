const Post = require('../models/Post')

exports.viewCreateScreen = function(req, res) {
    res.render('create-post'
  //  , {username: req.session.user.username, avatar: req.session.user.avatar} // commented in course 71st
    )
}


exports.create = function(req, res) {
    let post = new Post(req.body, req.session.user._id) // pass the submitted form data

    //Set this method up so it will return a promise...

    post.create().then(function(newId) {
       req.flash("success", "new post successfully created")
       console.log("line 17th")
       console.log(newId)
       req.session.save(() => res.redirect(`/post/${newId}`))

    }).catch(function(errors) {
      errors.forEach(error => req.flash("errors", error))
      req.session.save(() => res.redirect("/create-post"))
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
       if(post.authorId == req.visitorId) {
        res.render("edit-post", {post: post})
       } else {
        req.flash("errors", "You do not have permission to perform that action.")
        req.session.save(() => res.redirect("/")) // manually save our session data
       }

    } catch {
        res.render("404")
    }

}


exports.edit = async function(req, res) {
    let post = new Post(req.body, req.visitorId, req.params.id) //req.body is the blueprint of submitted data

    post.update().then((status) => {
        // the post was sucessfully updated in the database
        // or user did have permission, but there were validation errors.
        if (status == "success") {
            //post was updated in db
            req.flash("success", "Post successfully updated.")
            req.session.save(function() {
                res.redirect(`/post/${req.params.id}/edit`)
            })
        } else {
            post.errors.forEach(function(error) {
                req.flash("errors", error)
            })
            req.session.save(function() {
                res.redirect(`/post/${req.params.id}/edit`)
            })
        }

    }).catch(() => {
        //a post with the requested ID doesn't exist
        // or if the current visitor is not the owner of the requested post
        req.flash("errors", "You do not have permission to perform that action.")
        console.log("nima zhale")
        req.session.save( function() { // manually save the data
            res.redirect("/")
        })
    })
}