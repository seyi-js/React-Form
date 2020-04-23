import React, {useState} from 'react'
import UserDetailsForm from './UserDetailsForm'
import UserPersonalDetails from './UserPersonalDetails'
import Confirm from './Confirm'
import Success from './Success'

const UserForm = () => {
    const [step, setStep] = useState(1)
    const [ firstName, setFirstName ] = useState( '' );
    const [ lastName, setLastName ] = useState( '' );
    const [ email, setEmail ] = useState( '' );
    const [ occupation, setOccupation ] = useState( '' );
    const [ city, setCity ] = useState( '' );
    const [ bio, setBio ] = useState( '' ); 
    const values = { firstName, lastName, email, occupation, city, bio, }
    const setVariables = {setBio,setCity,setEmail,setFirstName,setLastName,setOccupation}
    //Proceed to Next Step
    const nextStep = () => {
        setStep( step + 1)
    }

     //Proceed to Prevois Step
     const prevStep = () => {
        setStep( step - 1)
    }
    switch ( step ) {
        case 1:
            return (
                <UserDetailsForm nextStep={ nextStep }
                    values={ values }
                    setVariables={setVariables}
                />
            )
            case 2:
            return (
                <UserPersonalDetails nextStep={ nextStep } prevStep={prevStep}
                    values={ values }
                    setVariables={setVariables}
                />
            )
        case 3:
            return (
                <Confirm nextStep={ nextStep } prevStep={prevStep}
                    values={ values }
                    
                />
            )
        case 4:
            return <Success/>
        
    } 
    
}

export default UserForm