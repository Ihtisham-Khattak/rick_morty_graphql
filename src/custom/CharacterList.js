import { useQuery, gql } from "@apollo/client";

const GET_RICK_MORTY = gql`
  query {
    characters {
      results {
        id
        name
        status
        species
        gender
        image
      }
    }
  }
`;
export const CharacterList = () => {
  const { error, loading, data } = useQuery(GET_RICK_MORTY);

  return {
    error,
    loading,
    data,
  };
};
