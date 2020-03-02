var store = {
    state: {
      url: 'http://localhost:8080/account/'
    },
    setStateAction (newValue) {
      this.state.url = newValue
     },
    clearStateAction () {
       this.state.url = ''
     }
  }
