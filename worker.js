import * as ComLink from 'comlink'


const workerApi = {
  logout
}

async function logout (tokenId, scp, key, stage) {
}

ComLink.expose(workerApi)
