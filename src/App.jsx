import { useGetCocktailsByInputQuery } from "./data/cocktailApi";
import { useState } from "react";
import CocktailDetails from "./components/CocktailDetails";
import { useEffect } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [cocktailId, setCocktailId] = useState(null);

  const { data, isLoading, isError } = useGetCocktailsByInputQuery(input);

  return (
    <>
      <section>
        <h1>Cocktails</h1>

        <input
          type="text"
          placeholder="find your cocktail"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        {isError && <p>er is een error</p>}
        {isLoading && <p>Loading...</p>}
        <div className="cards">
          {data &&
            data.drinks.map(({ strDrink, idDrink, strDrinkThumb }) => (
              <div className="card" key={idDrink}>
                <img
                  className="card-img-top"
                  src={strDrinkThumb}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">{strDrink}</h5>
                  <a
                    href="#"
                    className="btn btn-primary"
                    onClick={() => setCocktailId(idDrink)}
                  >
                    Details
                  </a>
                </div>
              </div>
            ))}
        </div>
      </section>
      <aside>
        {cocktailId == null && <p>Please pick your cocktail</p>}
        {cocktailId && <CocktailDetails id={cocktailId} />}
      </aside>
    </>
  );
};

export default App;
