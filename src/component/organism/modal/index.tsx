import { useState } from "react";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

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
      <Button onClick={handleOpen}>Advanced Search...</Button>
      <Modal 
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box >
            <Drop state={state} onChange={getValueFromDropdownList}></Drop>
            <Button onClick={() => console.log()} children={"Search..."} />
        </Box>
      </Modal>
    </>
  );
};

export default BasicModal;
