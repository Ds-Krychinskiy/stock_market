import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useHistory } from "react-router";

const Links = () => {
  const history = useHistory();

  const showCurrentValue = () => {
    history.push("/currency/current_value");
  };
  const showHistoricalData = () => {
    history.push("/currency/historical_data");
  };

  return (
    <div>
      <Tabs aria-label="simple tabs example">
        <Tab value={0} onClick={showCurrentValue} label="Current Value" />
        <Tab value={1} onClick={showHistoricalData} label="Historical Data" />
      </Tabs>
    </div>
  );
};
export default Links;
