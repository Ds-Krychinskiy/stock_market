import React, { useCallback, useState } from "react";
import DropDownLists from "../../organisms/drop_down_list";

const CreateState = {
  sector: "",
  services: "",
  industry: "",
  country: "",
  exchange: "",
  marketCap: "",
};

// CreateState.industry = "kek"
// CreateState["industry"] = "kek"

const StockScreener = () => {
  const [state, setState] = useState(CreateState);
  const onAdd = useCallback((value: string, field: string) => {
    setState((_state) => ({ ..._state, [field]: value }));
  }, []);

  return (
    <div>
      <DropDownLists state={state} onChange={onAdd} />
    </div>
  );
};

export default StockScreener;
