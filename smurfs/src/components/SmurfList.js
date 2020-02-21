import React, { useContext } from 'react';
import {SmurfContext} from '../contexts/SmurfContext';

import SmurfCard from './SmurfCard';

const SmurfList = () => {
    const smurfs = useContext(SmurfContext);
    console.log(smurfs)
    return (
        <div className='smurf-list'>
            {smurfs.map( smurf => (
                <SmurfCard key={smurf.id} name={smurf.name} age={smurf.age} height={smurf.height} />
            ))}
        </div>
    )
}

export default SmurfList;