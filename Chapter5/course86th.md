Make This Quick Edit To Your Code
Hello!

Please jump into your postController.js file and find your exports.viewEditScreen function. Replace what we currently have with the code below; simply copy and paste and replace your existing function:
```
exports.viewEditScreen = async function(req, res) {
  try {
    let post = await Post.findSingleById(req.params.id, req.visitorId)
    if (post.isVisitorOwner) {
      res.render("edit-post", {post: post})
    } else {
      req.flash("errors", "You do not have permission to perform that action.")
      req.session.save(() => res.redirect("/"))
    }
  } catch {
    res.render("404")
  }
}
```
Essentially, I forgot that if we pass our Post model the current user ID it can figure out if the current request is the owner of the post or not. So then for the if statement condition, I'm using that isVisitorOwner property instead.

I strongly encourage you to copy and paste and use the code above as this will avoid frustration in further lessons; we eventually remove authorId from returned Post objects entirely; and the above code will work flawlessly with that architecture while the code from the previous video lesson won't.

Thanks, and enjoy!
Brad
