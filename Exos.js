function attendre(ms) {
  // TODO: retourner une Promise qui se résout après ms millisecondes
  return new Promise(resolve => setTimeout(resolve, ms))
  // Indice : utilisez new Promise(resolve => setTimeout(resolve, ms))

}

async function attendreTout(msList) {
  // TODO: transformer chaque ms en Promise via attendre(), puis utiliser Promise.all
  // Indice : msList.map(ms => attendre(ms)) puis Promise.all(...)
  return Promise.all(msList.map(ms => attendre(ms)));
}

async function fetchWithCheck(url) {
  // TODO: 1) fetch(url)
  //       2) vérifier response.ok — si false, throw new Error(`HTTP ${response.status}`)
  //       3) retourner response.json()
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`)
  }
  return response.json
}

module.exports = { attendre, attendreTout, fetchWithCheck }