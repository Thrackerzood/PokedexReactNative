/* eslint-disable */

export const loadDataPokemon = async (url:string) => {
    return await fetch(url, {
        method: 'GET'
    })
    .then(result => {
        return result.json()
    })
}