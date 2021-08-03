(()=>{"use strict";function e(e,a){for(var s=0;s<a.length;s++){var t=a[s];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}new(function(){function a(){!function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a),this.injectHTML(),this.headerSearchIcon=document.querySelector(".header-search-icon"),this.overlay=document.querySelector(".search-overlay"),this.closeIcon=document.querySelector(".close-live-search"),this.events()}var s,t;return s=a,(t=[{key:"events",value:function(){var e=this;this.closeIcon.addEventListener("click",(function(){e.closeOverlay()})),this.headerSearchIcon.addEventListener("click",(function(a){a.preventDefault(),e.openOverlay()}))}},{key:"openOverlay",value:function(){this.overlay.classList.add("search-overlay--visible")}},{key:"closeOverlay",value:function(){this.overlay.classList.remove("search-overlay--visible")}},{key:"injectHTML",value:function(){document.body.insertAdjacentHTML("beforeend",' <div class="search-overlay"> \x3c!--Delete the search-overlay class here.--\x3e\n        <div class="search-overlay-top shadow-sm">\n          <div class="container container--narrow">\n            <label for="live-search-field" class="search-overlay-icon"><i class="fas fa-search"></i></label>\n            <input type="text" id="live-search-field" class="live-search-field" placeholder="What are you interested in?">\n            <span class="close-live-search"><i class="fas fa-times-circle"></i></span>\n          </div>\n        </div>\n    \n        <div class="search-overlay-bottom">\n          <div class="container container--narrow py-3">\n            <div class="circle-loader"></div>\n            <div class="live-search-results live-search-results--visible">\n              <div class="list-group shadow-sm">\n                <div class="list-group-item active"><strong>Search Results</strong> (4 items found)</div>\n    \n                <a href="#" class="list-group-item list-group-item-action">\n                  <img class="avatar-tiny" src="https://gravatar.com/avatar/b9216295c1e3931655bae6574ac0e4c2?s=128"> <strong>Example Post #1</strong>\n                  <span class="text-muted small">by barksalot on 0/14/2019</span>\n                </a>\n                <a href="#" class="list-group-item list-group-item-action">\n                  <img class="avatar-tiny" src="https://gravatar.com/avatar/b9408a09298632b5151200f3449434ef?s=128"> <strong>Example Post #2</strong>\n                  <span class="text-muted small">by brad on 0/12/2019</span>\n                </a>\n                <a href="#" class="list-group-item list-group-item-action">\n                  <img class="avatar-tiny" src="https://gravatar.com/avatar/b9216295c1e3931655bae6574ac0e4c2?s=128"> <strong>Example Post #3</strong>\n                  <span class="text-muted small">by barksalot on 0/14/2019</span>\n                </a>\n                <a href="#" class="list-group-item list-group-item-action">\n                  <img class="avatar-tiny" src="https://gravatar.com/avatar/b9408a09298632b5151200f3449434ef?s=128"> <strong>Example Post #4</strong>\n                  <span class="text-muted small">by brad on 0/12/2019</span>\n                </a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>')}}])&&e(s.prototype,t),a}())})();