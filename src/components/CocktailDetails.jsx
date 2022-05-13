import { useGetCocktailDetailsQuery } from "../data/cocktailApi";

const CocktailDetails = ({ id }) => {
  const { data, isLoading, isError } = useGetCocktailDetailsQuery(id);

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};

export default CocktailDetails;
