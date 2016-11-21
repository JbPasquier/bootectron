function navbarController(electron) {
    this.exit = () => {
      electron.remote.getCurrentWindow().close();
    };
    this.logout = () => {
      electron.dialog.showErrorBox('Nop', 'You can\'t logout because you arn\'t logged')
    }
}
