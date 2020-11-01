import React from 'react';
// import Input from './table/Input';
import ModalDialog from "./modals/ModalDialog";

function App() {
  const [open, toggleDialog] = React.useState(true);

  const manualFilling = (event) => {
      event.stopPropagation();
      event.preventDefault();
      toggleDialog(false);
  };
  const randomFilling = (event) => {
      event.stopPropagation();
      event.preventDefault();
      toggleDialog(false);
  };
    return (
      <div>
        <ModalDialog open={open}
                     handleIn={(event) => manualFilling(event)}
                     handleRand={(event) => randomFilling(event)}/>
      </div>
    );
}
export default App;
