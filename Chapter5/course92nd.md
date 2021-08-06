How To Create DB Indexes From Within Node.js Code
Hello everyone, this is a quick note about MongoDB indexes; if you're not particularly curious about MongoDB you can safely skip this article and move onto the next lesson.

If you'd rather create indexes on your database collections without going into the Atlas website you can use the code below:
```
postsCollection.createIndex({title: "text", body: "text"})
```
For example, you could include this code towards the top of your Post.js model file.  MongoDB will only create the index if one doesn't already exist; so leaving this in your code wouldn't be a huge problem; although just to be clean and safe you could comment it out once you know the index has been created.

This way if you ever move to a new database you can just uncomment the line and the index will be created automatically.

If you'd like to see a list of all the indexes you currently have on a collection you can use this code:
```
async function checkIndexes() {
  const indexes = await postsCollection.indexes()
  console.log(indexes)
}
checkIndexes()
```

You can delete an index by taking note of its name from the above list, and then you'd pass the name of the index as an argument like this:
```
postsCollection.dropIndex("namehere")
```

Thanks!
Brad
