import Cocktail from "./SingleCocktail";

interface ICocktailsProp {
  drinks: any[];
}

const Cocktails: React.FC<ICocktailsProp> = ({ drinks }) => {
  if (!drinks) {
    return <h2>No matching cocktails.</h2>;
  }
  const formattedDrinks = drinks.map((drink: any) => {
    const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = drink;
    return {
      id: idDrink,
      name: strDrink,
      image: strDrinkThumb,
      info: strAlcoholic,
      glass: strGlass,
    };
  });
  return (
    <>
      {formattedDrinks.map((drink) => {
        return <Cocktail key={drink.id} {...drink} />;
      })}
    </>
  );
};
export default Cocktails;
