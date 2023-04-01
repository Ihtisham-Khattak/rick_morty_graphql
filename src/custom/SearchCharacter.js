import { useQuery, gql } from "@apollo/client";

const GET_SEARCH_CHAR = gql`
  query Get_Character($id: ID!) {
    character(id: $id) {
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
export const SearchCharacter = (id) => {
  const { error, loading, data } = useQuery(GET_SEARCH_CHAR, {
    variables: {
      id,
    },
  });
  return {
    error,
    loading,
    data,
  };
};
