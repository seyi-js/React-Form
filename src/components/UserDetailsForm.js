import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const UserDetailsForm = ({nextStep, values, setVariables:{setFirstName, setLastName, setEmail}}) => {
    const Next = (e) => {
        e.preventDefault()
        nextStep()
    }


    return (
        <MuiThemeProvider>
            <React.Fragment>
                <AppBar title="Enter User Details" />
                <TextField hintText="Enter First Name"
                floatingLabelText="First Name"
                onChange={e => setFirstName(e.target.value) }
                    defaultValue={ values.firstName } />
                <br />
                <TextField hintText="Enter Last Name"
                floatingLabelText="Last Name"
                onChange={e => setLastName(e.target.value) }
                    defaultValue={ values.lastName } />
                <br />
                <TextField hintText="Enter Email"
                floatingLabelText="Email"
                onChange={e => setEmail(e.target.value) }
                    defaultValue={ values.email } />
                <br />
                <RaisedButton label="Continue"
                primary={true}
                styles={styles.button} onClick={e=> Next(e)}  />
                
            </React.Fragment>
        </MuiThemeProvider>
    )
}
const styles = {
    button: {
        margin: 15
    }
}

export default UserDetailsForm