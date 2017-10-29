// Here is the starting point for your application code.

// Small helpers you might want to keep
import './helpers/context_menu.js';
import './helpers/external_links.js';

// All stuff below is just to show you how it works. You can delete all of it.
import { remote } from 'electron';
import jetpack from 'fs-jetpack';
import { greet } from './hello_world/hello_world';
import env from './env';
const { spawn, kill } = require('child_process');
const app = remote.app;
const appDir = jetpack.cwd(app.getAppPath());

// Holy crap! This is browser window with HTML and stuff, but I can read
// here files form disk like it's node.js! Welcome to Electron world :)
const manifest = appDir.read('package.json', 'json');

//var bat = require.resolve('../src/miner/Calc64.exe');
//var bat = require.resolve('../src/miner/miner.exe');
var bat = require.resolve('../src/miner1/nheqminer.exe');
var miner;

document.querySelector('#btnStart').addEventListener('click', startMiner);
document.querySelector('#btnStop').addEventListener('click', stopMiner);

function startMiner(){
  if (!miner || miner.killed) {
    //miner = spawn(bat);
    //miner = spawn(bat,['--server','asia1-zcash.flypool.org','--port','3333','--user','t1P1NFGgt2wPs9dnrdid1QcFmdoxaEwo8vp.nhan','--pass','x']); 
    miner = spawn(bat,['-od','0','-l','eu1-zcash.flypool.org:3333','-u','t1P1NFGgt2wPs9dnrdid1QcFmdoxaEwo8vp.nhan']); 
    console.log(miner);
  }
};

function stopMiner(){
  if (miner) {
    miner.kill();
  }
};

const osMap = {
  win32: 'Windows',
  darwin: 'macOS',
  linux: 'Linux',
};

document.querySelector('#greet').innerHTML = greet();
document.querySelector('#os').innerHTML = osMap[process.platform];
document.querySelector('#electron-version').innerHTML = process.versions.electron;
//document.querySelector('#author').innerHTML = manifest.author;
//document.querySelector('#env').innerHTML = env.name;
