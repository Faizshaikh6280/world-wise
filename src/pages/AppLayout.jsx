import styles from "./AppLayout.module.css";
import SideBar from "../component/SideBar";
import Map from "../component/Map";
function AppLayout() {
  return (
    <div className={styles.app}>
      <SideBar />
      <Map />
    </div>
  );
}

export default AppLayout;
