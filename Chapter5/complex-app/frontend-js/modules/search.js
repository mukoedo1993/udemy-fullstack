import axios from 'axios'

export default class Search {
    //1: Select DOM elements, and keep track of any useful data
    constructor () {
        this.injectHTML()
       this.headerSearchIcon = document.querySelector(".header-search-icon")
       this.overlay = document.querySelector(".search-overlay")
       this.closeIcon = document.querySelector(".close-live-search")
       this.inputField = document.querySelector("#live-search-field")
       this.resultsArea = document.querySelector(".live-search-results")
       this.loaderIcon = document.querySelector(".circle-loader") //As soon as someone is typing in this field of search (see the div class of live-search-results)

       this.typingWaitTimer 
       //waiting for 500ms to 700ms after it stopped typing new characters. Wait a tiny bit after they(users) stopped typing, and then send off a request.


       this.previousValue
       //Only if value in the field has changed, then we show a loading icon here.

       this.events()
    }


    //2: Events
    events() {
       this.inputField.addEventListener("keyup", () => this.keyPressHandler()) //So, once they click the key on the keyboard and release their finger from that key and then key comes up, 
                                                   // 

        this.closeIcon.addEventListener("click", () => {
            this.closeOverlay()
        })
        this.headerSearchIcon.addEventListener("click", (e) => {
            //prevent default behavior clicking on the link
            e.preventDefault()
            this.openOverlay()
        })
    }

    //3: Methods:
    keyPressHandler()
  {
    let value = this.inputField.value

    if (value != "" && value != this.previousValue) {
      clearTimeout(this.typingWaitTimer)
      this.showLoaderIcon()
      this.typingWaitTimer = setTimeout( () => this.sendRequest() , 3000)
      //If you typed alphabet 'p', and then wait for 2000ms, then you typed alphabet 'u', the clearTimeout will reset the time.
      //But if you finally typed 'y', and then wait for 3000ms, then typingWaitTimer will finish its mission.
    }

    this.previousValue = value
    this.showLoaderIcon()
  }


  sendRequest () {
    axios.post('/search', {searchTerm: this.inputField.value}).then(response => {
      console.log(response.data)
    }).catch(() => {
      alert("Hello, the request failed.")
    })
  
  }

    showLoaderIcon()
    {
      this.loaderIcon.classList.add("circle-loader--visible")
    }

    openOverlay()
 {
   this.overlay.classList.add("search-overlay--visible")

   //However, because 

   //This will focus the element, or in other words, place the user's cursor here, so that they can begin typing into the field. However, because of the div lives within
   // was hidden until this line of code ran, certain browsers will run into the issues that not be able to follow this element. What we can do to get around of this is 
   //after we make a search overlay visible, 

   setTimeout( () =>  this.inputField.focus(),50) //first argument: the function you want to run. Second argument: How long you are going to wait before running it.


  
 }

    closeOverlay()
 {
   this.overlay.classList.remove("search-overlay--visible")
 }
    injectHTML()
    {
        document.body.insertAdjacentHTML('beforeend', ` <div class="search-overlay"> <!--Delete the search-overlay class here.-->
        <div class="search-overlay-top shadow-sm">
          <div class="container container--narrow">
            <label for="live-search-field" class="search-overlay-icon"><i class="fas fa-search"></i></label>
            <input type="text" id="live-search-field" class="live-search-field" placeholder="What are you interested in?">
            <span class="close-live-search"><i class="fas fa-times-circle"></i></span>
          </div>
        </div>
    
        <div class="search-overlay-bottom">
          <div class="container container--narrow py-3">
            <div class="circle-loader"></div>
            <div class="live-search-results">
              <div class="list-group shadow-sm">
                <div class="list-group-item active"><strong>Search Results</strong> (4 items found)</div>
    
                <a href="#" class="list-group-item list-group-item-action">
                  <img class="avatar-tiny" src="https://gravatar.com/avatar/b9216295c1e3931655bae6574ac0e4c2?s=128"> <strong>Example Post #1</strong>
                  <span class="text-muted small">by barksalot on 0/14/2019</span>
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                  <img class="avatar-tiny" src="https://gravatar.com/avatar/b9408a09298632b5151200f3449434ef?s=128"> <strong>Example Post #2</strong>
                  <span class="text-muted small">by brad on 0/12/2019</span>
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                  <img class="avatar-tiny" src="https://gravatar.com/avatar/b9216295c1e3931655bae6574ac0e4c2?s=128"> <strong>Example Post #3</strong>
                  <span class="text-muted small">by barksalot on 0/14/2019</span>
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                  <img class="avatar-tiny" src="https://gravatar.com/avatar/b9408a09298632b5151200f3449434ef?s=128"> <strong>Example Post #4</strong>
                  <span class="text-muted small">by brad on 0/12/2019</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>`)
    }
}



