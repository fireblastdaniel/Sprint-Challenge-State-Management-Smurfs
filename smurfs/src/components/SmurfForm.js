import React, { useState, useContext } from 'react';
import { SmurfFormContext } from '../contexts/SmurfFormContext'

const SmurfForm = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [height, setHeight] = useState('')

    const updateName = e => { setName(e.target.value) }
    const updateAge = e => { setAge(e.target.value) }
    const updateHeight = e => { setHeight(e.target.value) }

    const addSmurf = useContext(SmurfFormContext)

    const newSmurf = e => {
        e.preventDefault();
        const smurf = {
            name: name,
            age: age,
            height: height,
            id: Date.now()
        }

        addSmurf(smurf)
    }

    return (
        <div>
            <form>
                <input type='text' placeholder='name' onChange={updateName} />
                <input type='text' placeholder='age' onChange={updateAge} />
                <input type='text' placeholder='height' onChange={updateHeight} />
                <input type='submit' onClick={newSmurf} />
            </form>
        </div>
    );
}

export default SmurfForm