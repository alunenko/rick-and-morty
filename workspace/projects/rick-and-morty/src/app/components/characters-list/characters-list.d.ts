export interface ICharactersListResponse {
  info: ICharacterListInfo,
  results: ICharacterListResults[]
}

interface ICharacterListInfo {
  count: number,
  pages: number,
  next: string | null,
  prev: string | null
}

export interface ICharacterListResults {
  id: number,
  name: string,
  status: string,
  species: string,
  type: string,
  gender: string,
  origin: ICharacterListResultsOrigin,
  location: ICharacterListResultsLocation,
  image: string,
  episode: string[],
  url: string,
  created: string
}

interface ICharacterListResultsOrigin {
  name: string,
  url: string
}

interface ICharacterListResultsLocation {
  name: string,
  url: string
}
