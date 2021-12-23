import { gql } from '@apollo/client';


const CHARACTERS = gql`
  query characters($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      info {
        count
        pages
      }
      results {
        id
        image
        name
        species
        location {
          id
          name
        }
      }
    }
  }
`;
const EPISODES = gql`
  query allepisodes($page: Int, $filter: FilterEpisode) {
    episodes(page: $page, filter: $filter) {
        info {
            count
            pages
        }
    results {
        id
        name
        air_date
        characters {
        id
        image
        }
    }
}
}`;

export { CHARACTERS, EPISODES }