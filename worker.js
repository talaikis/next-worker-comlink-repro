// This is a module worker, so we can use imports (in the browser too!)
import pi from './utils/pi'
import * as ComLink from 'comlink'


const workerApi = {
  logout
}

async function logout (tokenId, scp, key, stage) {
}

ComLink.expose(workerApi)
