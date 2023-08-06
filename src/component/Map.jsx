import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
function Map() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return (
    <div
      className={styles.mapContainer}
      onClick={() => {
        navigate("form");
      }}
    >
      Map Position : {lat}
      {lng}
      <br />
      <button
        onClick={() => {
          setSearchParams({ lat: 60, lng: 23 });
        }}
      >
        Change pos
      </button>
    </div>
  );
}

export default Map;
