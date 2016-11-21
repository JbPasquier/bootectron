function mainController(electron) {
    this.menu = ['Hello', 'Sweet', 'Home'];
    this.title = 'Hello, world!';
    this.description = "My name is AnguBootstrap";
    this.alert = () => {electron.clipboard.writeText('Do you like bananas ?'); electron.dialog.showErrorBox('Hey dude', 'Message copié dans le presse papier')};
}
