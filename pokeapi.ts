async function getNomPokemon(name: string) {
  try {
    const resPoke = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
    if (!resPoke.ok) throw new Error(`HTTP ${resPoke.status}`)

    const pokeData = await resPoke.json()
    const abilities = pokeData?.abilities?.map((a: any) => a.ability) ?? []

    console.log({ pokemon: pokeData.name, abilities })
    return { pokemon: pokeData.name, abilities }
  } catch (error) {
    console.log(error)
    return { A: 'Erreur' }
  }
}

getNomPokemon('eevee')