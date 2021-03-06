const {
    app,
    Menu,
    // Tray,
    powerSaveBlocker,
    BrowserWindow
} = require('electron');
const path = require('path');
const url = require('url');
let mainWindow;

function createWindow() {
    const sleepPreventer = powerSaveBlocker.start('prevent-display-sleep');
    mainWindow = new BrowserWindow();
    mainWindow.setFullScreen(true);
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));
    // mainWindow.webContents.openDevTools();
    mainWindow.on('closed', function() {
        powerSaveBlocker.stop(sleepPreventer);
        mainWindow = null;
    });
}
app.on('ready', createWindow);
app.on('window-all-closed', function() {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
app.on('activate', function() {
    if (mainWindow === null) {
        createWindow();
    }
});
/*
let tray = null;
app.on('ready', () => {
    tray = new Tray('./assets/favicon.png');
    const contextMenu = Menu.buildFromTemplate([{
        label: 'Activate Bananas',
        type: 'radio'
    }, {
        label: 'Activate Unicorn-mode',
        type: 'radio'
    }, {
        label: 'Like it',
        type: 'radio',
        checked: true
    }, {
        label: 'Fave it',
        type: 'radio'
    }]);
    tray.setToolTip('Hello my name is Bootectron.');
    tray.setContextMenu(contextMenu);
});
*/
