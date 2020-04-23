import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const UserPersonalDetails = ({nextStep, prevStep, values, setVariables:{setBio, setOccupation, setCity}}) => {
    const Next = (e) => {
        e.preventDefault()
        nextStep()
    }

    const Back = (e) => {
        e.preventDefault()
        prevStep()
    }

    return (
        <MuiThemeProvider>
            <React.Fragment>
                <AppBar title="Enter Personal Details" />
                <TextField hintText="Enter Your Occupation"
                floatingLabelText="Occupation"
                onChange={e => setOccupation(e.target.value) }
                    defaultValue={ values.occupation } />
                <br />
                <TextField hintText="Enter City"
                floatingLabelText="City"
                onChange={e => setCity(e.target.value) }
                    defaultValue={ values.city } />
                <br />
                <TextField hintText="Enter Bio"
                floatingLabelText="Bio"
                onChange={e => setBio(e.target.value) }
                    defaultValue={ values.bio } />
                <br />
                <RaisedButton label="Continue"
                primary={true}
                styles={styles.button} onClick={e=> Next(e)}  />
                <RaisedButton label="Back"
                primary={false}
                styles={styles.button} onClick={e=> Back(e)}  />
                
            </React.Fragment>
        </MuiThemeProvider>
    )
}
const styles = {
    button: {
        margin: 15
    }
}

export default UserPersonalDetails