import styles from "./CountryList.module.css";
import Countryitem from "./Countryitem";

import Spinner from "./Spinner";
import Message from "./Message";
import { useCities } from "../../context/CitiesContext";

function CountryList() {
  const { isLoading, cities } = useCities();
  if (isLoading) return <Spinner />;
  const country = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country)) {
      return [...arr, { country: city.country, emoji: city.emoji }];
    } else return arr;
  }, []);
  if (!country.length)
    return (
      <Message message="Add your first country by clicking on the city on the side map." />
    );
  return (
    <ul className={styles.countryList}>
      {country.map((country) => {
        return <Countryitem country={country} key={crypto.randomUUID()} />;
      })}
    </ul>
  );
}

export default CountryList;
