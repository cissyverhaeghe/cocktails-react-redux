import { useGetCocktailDetailsQuery } from "../data/cocktailApi";

const CocktailDetails = ({ id }) => {
  const { data, isLoading, isError } = useGetCocktailDetailsQuery(id);

  return (
    <>
      {isError && <p>er is een error</p>}
      {isLoading && <p>Loading...</p>}
      {data &&
        data.drinks.map(
          ({
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strDrink,
            strInstructions,
            strDrinkThumb,
          }) => (
            <div>
              <h1>{strDrink}</h1>
              <img alt="cocktail" src={strDrinkThumb}></img>
              <p>INGREDIENTS:</p>
              <p>{strIngredient1}</p>
              <p>{strIngredient2}</p>
              <p>{strIngredient3}</p>
              <p>INSTRUCTIONS:</p>
              <p>{strInstructions}</p>
            </div>
          )
        )}
    </>
  );
};

export default CocktailDetails;
