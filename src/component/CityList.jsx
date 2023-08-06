import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
import Cityitem from "./Cityitem";
function CityList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on the city on the side map." />
    );
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => {
        return <Cityitem city={city} key={city.id} />;
      })}
    </ul>
  );
}

export default CityList;
