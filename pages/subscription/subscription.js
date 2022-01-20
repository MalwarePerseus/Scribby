import React from 'react';
import { ContainerBlock } from '../components';

const data = {
    title: "Netflix",
    
}

function subscription() {
    
  return (
    <ContainerBlock>
        <div>
            <h1>{data.title}</h1>
            <div className='flex flex-row'>
                <div className='flex-column'>
                   <div> Hello </div>
                   <div>DOughnut Chart</div>
                </div>
                <div>Bar Chart</div>    
            </div>            
        </div>
    </ContainerBlock>
    );
}

export default subscription;
