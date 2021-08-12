import Search from './modules/search'

import Chat from './modules/chat'


//Call Chat ctor. only if the user has logged in.
if (document.querySelector("#chat-wrapper")) {   new Chat() }


if (document.querySelector(".header-search-icon")) {new Search()}