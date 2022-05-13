import { useGetCocktailDetailsQuery } from "../data/cocktailApi";

const CocktailDetails = ({ id }) => {
  const { data, isLoading, isError } = useGetCocktailDetailsQuery(id);

  return (
    <>
      {isError && <p>er is een error</p>}
      {isLoading && <p>Loading...</p>}
      {data &&
        data.drinks.map(({ idDrink, strDrink }) => (
          <p key={idDrink}>{strDrink}</p>
        ))}
    </>
  );
};

export default CocktailDetails;
