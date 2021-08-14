export default class Chat {
    constructor () {
        alert("Chat feature is loading")


        this.openedYet = false
        this.chatWrapper = document.querySelector("#chat-wrapper")
        this.openIcon = document.querySelector(".header-chat-icon")

        this.injectHTML()

        this.chatField = document.querySelector("#chatField")
        this.chatForm = document.querySelector("#chatForm")


        this.closeIcon = document.querySelector(".chat-title-bar-close") //Because this element doesn't even exist before we inject the HTML.

        this.events()


        // Create a few properties select the text field.


    }

    // Events
    events() {
        this.chatForm.addEventListener("submit", (e) => {
            e.preventDefault() //When this form is submitted, we want to prevent a hard reload. We want to stop that default behavior.
            this.sendMessageToServer()

        })

        this.openIcon.addEventListener("click", () => this.showChat())

        this.closeIcon.addEventListener("click", () => this.hideChat())
    }

    // Methods
    sendMessageToServer() {
        this.socket.emit('chatMessageFromBrowser', {message: this.chatField.value})

        this.chatField.value = ''
        
        this.chatField.focus()
    }

    hideChat () {
        this.chatWrapper.classList.remove("chat--visible") 


    }

    showChat () {

        // For the first time, it is false. But once it is called, it will be true.
        if (!this.openedYet) {
            this.openConnection()
        }

        this.openedYet = true
        this.chatWrapper.classList.add("chat--visible") 
    }

    openConnection () {

        this.socket = io() //It will open a connection between the browser and the server.
        this.socket.on('chatMessageFromServer' , function (data) {
            alert(data.message)
        })

        
    }

    injectHTML() {
        this.chatWrapper.innerHTML = `
        <div class="chat-title-bar">Chat <span class="chat-title-bar-close"><i class="fas fa-times-circle"></i></span></div>
        <div id="chat" class="chat-log"></div>

        <form id="chatForm" class="chat-form border-top">
        <input type="text" class="chat-field" id="chatField" placeholder="Type a message…" autocomplete="off">
      </form>
        `
    }
}