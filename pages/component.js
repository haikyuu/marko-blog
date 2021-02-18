module.exports = class {
    onCreate() {
        console.log("created")
        this.state = {
            isMenuOpen: false,
        }
    }
    openMenu() {
        console.log('open')
        this.state.isMenuOpen = true
    }
    closeMenu() {
        console.log('close')
        this.state.isMenuOpen = false
    }
}
