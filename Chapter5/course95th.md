Fixing The Month for Post Dates in Search Results
The date for a post when displayed in search results will currently show an incorrect month value. This is because months are zero based in JavaScript (January is represented as a 0 instead of a 1) and I forgot to add 1 to the the month value. It's very simple to fix this; simply find the date area in your front-end "search.js" module file, and instead of this line of code:
```
<span class="text-muted small">by ${post.author.username} on ${postDate.getMonth()}/${postDate.getDate()}/${postDate.getFullYear()}</span>
```
It should instead become:
```
<span class="text-muted small">by ${post.author.username} on ${postDate.getMonth() + 1}/${postDate.getDate()}/${postDate.getFullYear()}</span>
```
Thanks!
Brad
