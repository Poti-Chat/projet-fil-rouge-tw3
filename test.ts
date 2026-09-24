let nom: string = "kylian"
const num: number = 1


type Resultat =
  | { ok: true; valeur: number }
  | { ok: false; erreur: string }

const bon: Resultat = { ok: true, valeur: 42 }
const mauvaos: Resultat = { ok: false, erreur: "échec" }


type config = {

}

// JavaScript non typé : tout est permis jusqu'au crash en prod
async function chargerUtilisateur(id: number) {
  try {
    const resUser = await fetch(`/api/users/${id}`)
    if (!resUser.ok) throw new Error(`HTTP ${resUser.status}`)
    const userData = await resUser.json()
    if (!userData) { }

    const resPosts = await fetch(`/api/users/${userData.id}/posts`)

    if (!resPosts.ok) throw new Error(`HTTP ${resPosts.status}`)
    const dataPosts = await resPosts.json()
    if (!dataPosts) { }
    return { ok: true, valeur: { utilisateur: userData, posts: dataPosts } }
  } catch (error) {

  }
}

// Ces appels ne déclenchent AUCUNE erreur :
chargerUtilisateur("abc")   // → plante en prod (user.id sur un string ?)
chargerUtilisateur(null)    // → plante en prod

