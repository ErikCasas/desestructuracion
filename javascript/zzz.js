//EJECUTAR EL COMANDO ===> node zzz.js

const { exec } = require('child_process');

function JsEsIncreible(url) {
  let command = '';

  if (process.platform === 'win32') {
    command = `start ${url}`;
  } else if (process.platform === 'linux') {
    command = `xdg-open ${url}`;
  } else if (process.platform === 'darwin') {
    command = `open ${url}`;
  }

  exec(command, (error, _stdout, _stderr) => {
    if (error) {
      console.error(`Error :c ${error.message}`);
    }
  });
}

JsEsIncreible('https://procatinator.com/');
