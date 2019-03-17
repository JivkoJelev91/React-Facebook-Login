import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

class Facebook extends Component {
    state = {
        isLoggedIn : false,
        userID: '',
        name: '',
        email: '',
        picture: '',
    }

    profileStyle = {
        width: '30%',
        margin: 'auto',
        background: '#fff',
        padding: '5%',
        borderRadius: '15%'
    }

    imgStyle = {
        widht:'8em',
        height:'8em',
        borderRadius: '50%'
    }

    componentClicked = () => {
        console.log('clicked');
    }

    responseFacebook = (response) => {
        console.log(response);
        this.setState({
            isLoggedIn: true,
            userID: response.userID,
            name: response.name,
            email: response.email,
            picture: response.picture.data.url
        });
    }

    render() {
        if(this.state.isLoggedIn){
            return (
                <div style={this.profileStyle}>
                    <img src={this.state.picture} 
                    alt={this.state.name} 
                    style={this.imgStyle}/>
                    <h2>Welcome {this.state.name}</h2>
                    <h4>Email: {this.state.email}</h4>
                </div>
            )
        }else{
            return (
                <div>
                    <FacebookLogin
                    appId="553052098534419"
                    autoLoad={true}
                    fields="name,email,picture"
                    onClick={this.componentClicked}
                    callback={this.responseFacebook} />   
                </div>
            )
        }
    }
}

export default Facebook;