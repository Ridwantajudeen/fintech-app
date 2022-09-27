import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

import Historypage from './historypage';

const Example = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <Historypage ref={componentRef} />
      <button onClick={handlePrint}>Print this out!</button>
    </div>
  );
};
export default Example;