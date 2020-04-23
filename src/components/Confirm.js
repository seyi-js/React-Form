import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar'
import {List, ListItem} from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'

const Confirm= ({nextStep, prevStep, values:{ firstName, email, bio, city, lastName, occupation}}) => {
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
                <AppBar title="Confirm User Details" />
                <List>
                    <ListItem primaryText="First Name" secondaryText={firstName} />
                    <ListItem primaryText="Last Name" secondaryText={lastName} />
                    <ListItem primaryText="Email" secondaryText={email} />
                    <ListItem primaryText="Occupation" secondaryText={occupation} />
                    <ListItem primaryText="Bio" secondaryText={bio} />
                    <ListItem primaryText="City" secondaryText={city} />
                </List>

               <br/>
                <RaisedButton label="Confirm & Continue"
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

export default Confirm