import axios from "axios"

type ResultType = {
    url: string
    name: string
}

type GettingAllPokemons = {
    name: string
    images: {front: string, back: string}[]
    types: any[]
}

export function gettingAll(tmpArray : any[] | null = [], pokemonData:any) : GettingAllPokemons[] | null {
      pokemonData.pages[0].results.map(async (result:ResultType) => {
        const { data } = await axios.get(result.url)        
        tmpArray!.push({name: data.name, types: data.types, images: {front: data.sprites.front_default, back: data.sprites.back_default}})
    })     
    return tmpArray
}