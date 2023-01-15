import React from 'react';
import "../Style/Container.css"
import Comopnetns from './Comopnetns';
import "../Style/Componentbox.css"

const ContainerBox = () => {
  return (
    <div>
      <div className='MainBox'>
        <div className='sorting_div'></div>
        <div className='components_div'>
          <Comopnetns/>
        </div>
      </div>
    </div>
  );
}

export default ContainerBox;
