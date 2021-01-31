const { app,BrowserView, BrowserWindow,Menu } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  const view = new BrowserView();

  const menutem = [
    {
      label : app.name,
      submenu:[
      {role:'reload'},
      {role:'quit'}
      ]
    }
  ];
  const menu = Menu.buildFromTemplate(menutem)
  Menu.setApplicationMenu(menu)
  win.setBrowserView(view)
  view.setBounds({x:0 ,y:0 , width:800,height:600})
  view.webContents.loadURL('http://localhost:8080')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})