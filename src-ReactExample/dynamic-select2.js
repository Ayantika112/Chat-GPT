import { useState } from "react";
import WeatherApp from "./Components/WeatherApp";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [secSelect, setSeleect2Data] = useState({});
  var count = 0;
  let dataMap = {
    India: {
      1: "aa_India",
      2: "bb_India",
      3: "cc_India",
    },
    pune: {
      1: "aa_pune",
      2: "bb_pune",
      3: "cc_pune",
    },
    Undefine:{}
  };
  function chengeVlue(e) {
    var country = e.target.value;
    setSeleect2Data(dataMap[country]);
    console.log(secSelect);
  }
  return (
    <>
      <div>
        {/* <WeatherApp/> */}
        <select onClick={(e) => chengeVlue(e)}>
          <option value={"Undefine"}>Undefined</option>
          <option value={"India"}>India</option>
          <option value={"pune"}>pune</option>
        </select>
      </div>
      {Object.values(secSelect).length > 0 ? (
        <select>
          {Object.values(secSelect).map((value, index) => {
            return (
              // <div key={index}>
              <option value={value}>{value}</option>
              // </div>
            );
          })}
        </select>
      ) : (
        <>
          <div>No Data Available here </div>
        </>
      )}
    </>
  );
}
export default App;
