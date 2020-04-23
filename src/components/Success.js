import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar'
import {List, ListItem} from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'

const Success = () => {
    

    return (
        <MuiThemeProvider>
            <React.Fragment>
                <AppBar title="Success" />
                <h1>ThankS For Choosing Us</h1>
                
            </React.Fragment>
        </MuiThemeProvider>
    )
}


export default Success