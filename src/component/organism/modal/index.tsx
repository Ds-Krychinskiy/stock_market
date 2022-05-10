import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

import { StateProps } from "../../../state/Stock_Screener_State/interface";
import Button from "../../atoms/button";
import Drop from "../drop_down_list";

interface ModalProps {
  state: StateProps;
  getValueFromDropdownList: (value: string | number, field: string) => void;
}

const BasicModal: React.FC<ModalProps> = ({
  state,
  getValueFromDropdownList,
}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button variant={"chart"} onClick={handleOpen}>Расширенный поиск</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Drop state={state} onChange={getValueFromDropdownList}></Drop>
          </DialogContentText>
        </DialogContent>
        <Button variant={"chart"} onClick={() => console.log()} children={"Search..."} />
      </Dialog>
    </>
  );
};

export default BasicModal;
