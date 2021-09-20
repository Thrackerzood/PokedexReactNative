/* eslint-disable */

export interface IColorBackgound{
  props:{
    background: string
  }
}
export interface INavigationBar {
    props: {
        height?: string
        switchState: Boolean
        setStateSwitch: React.Dispatch<React.SetStateAction<boolean>>
    }
}
export interface ISearch{
    search: string
}

export interface IData {
    count: number
    next: string
    previous: any
    results: IStat[];
 }
 
 export interface IStat {
         name: string;
         url: string;
 }
 
 export interface IStatPokemon {
     descriptions: Description[]
     gene_modulo: number
     highest_stat: Language
     id: number
     possible_values: number[]
   }
   
   export interface Description {
     description: string
     language: Language
   }
   
 interface Language {
     name: string
     url: string
   }
   
 
 export interface IPokemonDescription {
   base_happiness: number
   capture_rate: number
   color: PokemonUniversalInterface
   egg_groups: PokemonUniversalInterface[]
   evolution_chain: EvolutionChain
   evolves_from_species: PokemonUniversalInterface
   flavor_text_entries: FlavorTextEntry[]
   form_descriptions: never[]
   forms_switchable: false
   gender_rate: number
   genera: Genera[]
   generation: Language
   growth_rate: Language
   habitat: Language
   has_gender_differences: false
   hatch_counter: number
   id: number
   is_baby: false
   is_legendary: false
   is_mythical: false
   name: string
   names: Name[]
   order: number
   pal_park_encounters: PalParkEncounter[]
   pokedex_numbers: PokedexNumber[]
   shape: PokemonUniversalInterface
   varieties: Variety[]
 }
 
 
 
 interface EvolutionChain {
   url: string
 }
 
 interface FlavorTextEntry {
   flavor_text: string
   language: Language
   version: PokemonUniversalInterface
 }
 
 
 interface Genera {
   genus: string
   language: PokemonUniversalInterface
 }
 
 
 interface Name {
   language: Language
   name: string
 }
 
 
 interface PalParkEncounter {
   area: PokemonUniversalInterface
   base_score: number
   rate: number
 }
 
 
 
 interface PokedexNumber {
   entry_number: number
   pokedex: PokemonUniversalInterface
 }
 
 
 interface Variety {
   is_default: true
   pokemon: PokemonUniversalInterface
 }
 
 interface PokemonUniversalInterface {
   name: string
   url: string
 }
//pokemon//
export interface PokemonData{
    data: IPokemon[]
  }
  export interface IPokemon {
     abilities: Ability[]
     base_experience: number
     description: string
     forms: Form[]
     game_indices: Index[]
     height: number
     held_items: never[]
     id: number
     is_default: boolean & true
     location_area_encounters: string
     moves: Mfe[]
     name: string
     order: number
     past_types: never[]
     species: Type2
     sprites: Sprites
     stats: Stat[]
     types: Type[]
     weight: number
   }
  
   export interface IPokemonProps{
    prop:{
      props: 
      {
        data: IPokemon 
      }
    }
  }
  
  interface Ability {
     ability: Ability2
     is_hidden: boolean
     slot: number
   }
   
  interface Ability2 {
     name: string
     url: string
   }
   
  interface Form {
     name: string
     url: string
   }
   
  interface Index {
     game_index: number
     version: Version
   }
   
  interface Version {
     name: string
     url: string
   }
   
  interface Mfe {
     move: Move
     version_group_details: VersionGroupDetail[]
   }
   
  interface Move {
     name: string
     url: string
   }
   
  interface VersionGroupDetail {
     level_learned_at: number
     move_learn_method: MoveLearnMethod
     version_group: Type2
   }
   
  interface MoveLearnMethod {
     name: string
     url: string
   }
   
  interface Sprites {
     back_default: string
     back_female: any //иногда бывает у некоторых покемонов если задать null | string - то выдает ошибку (не знаю как исправить)
     back_shiny: string
     back_shiny_female: any
     front_default: string
     front_female: any
     front_shiny: string
     front_shiny_female: any
     other: Other
     versions: Versions
   }
   
  interface Other {
     dream_world: DreamWorld
     "official-artwork": OfficialArtwork
   }
   
  interface DreamWorld {
     front_default: string
     front_female: any
   }
   
  interface OfficialArtwork {
     front_default: string
   }
   
  interface Versions {
     "generation-i": GenerationI
     "generation-ii": GenerationIi
     "generation-iii": GenerationIii
     "generation-iv": GenerationIv
     "generation-v": GenerationV
     "generation-vi": GenerationVi
     "generation-vii": GenerationVii
     "generation-viii": GenerationViii
   }
   
  interface GenerationI {
     "red-blue": ColorGeneration
     yellow: ColorGeneration
   }
   
   interface ColorGeneration {
     back_default: string
     back_gray: string
     front_default: string
     front_gray: string
   }
   
   
  interface GenerationIi {
     crystal: Color
     gold:Color
     silver: Color
   }
  
   interface Color {
     back_default: string
     back_shiny: string
     front_default: string
     front_shiny: string
   }
  
   
  interface GenerationIii {
     emerald: Emerald
     "firered-leafgreen": FireredLeafgreen
     "ruby-sapphire": FireredLeafgreen
   }
   
   interface Emerald {
     front_default: string
     front_shiny: string
   }
   
  interface FireredLeafgreen {
     back_default: string
     back_shiny: string
     front_default: string
     front_shiny: string
   }
   
   
  interface GenerationIv {
     "diamond-pearl": DiamondPearl
     "heartgold-soulsilver": DiamondPearl
     platinum: DiamondPearl
   }
   
  interface DiamondPearl {
     back_default: string
     back_female: any
     back_shiny: string
     back_shiny_female: any
     front_default: string
     front_female: any
     front_shiny: string
     front_shiny_female: any
   }
   
   
  interface GenerationV {
     "black-white": BlackWhite
   }
   
  interface BlackWhite {
     animated: Animated
     back_default: string
     back_female: any
     back_shiny: string
     back_shiny_female: any
     front_default: string
     front_female: any
     front_shiny: string
     front_shiny_female: any
   }
   
  interface Animated {
     back_default: string
     back_female: any
     back_shiny: string
     back_shiny_female: null
     front_default: string
     front_female: null
     front_shiny: string
     front_shiny_female: null
   }
   
  interface GenerationVi {
     "omegaruby-alphasapphire": OmegarubyAlphasapphire
     "x-y": XY
   }
   
  interface OmegarubyAlphasapphire {
     front_default: string
     front_female: null
     front_shiny: string
     front_shiny_female: null
   }
   
  interface XY {
     front_default: string
     front_female: null
     front_shiny: string
     front_shiny_female: null
   }
   
  interface GenerationVii {
     icons: Icons
     "ultra-sun-ultra-moon": UltraSunUltraMoon
   }
   
  interface Icons {
     front_default: string
     front_female: null
   }
  
   interface UltraSunUltraMoon {
     front_default: string
     front_female: null
     front_shiny: string
     front_shiny_female: null
   }
   
  interface GenerationViii {
     icons: Icons2
   }
   
  interface Icons2 {
     front_default: string
     front_female: any
   }
   interface Type2 {
     name: any
     url: string
   }
   export interface Stat {
     base_stat: number
     effort: number
     stat: Stat2
     max?: string
     maxAll?: string
   }
   
   interface Stat2 {
     name: any
     url: string
   }
  
   interface Type {
     slot: number
     type: Type2
   }
   
  
   
  export interface IColorPokemonObj {
    fire: string;
    grass: string;
    electric: string;
    water: string;
    ground: string;
    rock: string;
    fairy: string;
    poison: string;
    bug: string;
    dragon: string;
    psychic: string;
    flying: string;
    fighting: string;
    normal: string ,
    ice: string,
    ghost:string,
    dark: string,
    unknown: string,
  }
  export interface IColorStatObj{
    attack: string;
    defense: string;
    'special-attack': string;
    'special-defense': string;
    speed: string;
    hp: string;
  }
  export interface IColorPokemonObj {
    fire: string;
    grass: string;
    electric: string;
    water: string;
    ground: string;
    rock: string;
    fairy: string;
    poison: string;
    bug: string;
    dragon: string;
    psychic: string;
    flying: string;
    fighting: string;
    normal: string ,
    ice: string,
    ghost:string,
    dark: string,
    unknown: string,
  }
  export interface IColorStatObj{
    attack: string;
    defense: string;
    'special-attack': string;
    'special-defense': string;
    speed: string;
    hp: string;
  }
//