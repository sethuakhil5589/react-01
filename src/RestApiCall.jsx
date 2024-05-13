import React from "react";
export default class RestApiCall extends React.Component{
    state ={
        loading: true,
        user: null
    }
    async componentDidMount(){
        const urlToHit = "https://api.github.com/users/mojombo";
        const response = await fetch(urlToHit);
        const dataRetrieved = await response.json();
        this.setState({user: dataRetrieved, loading:false})
        console.log(dataRetrieved);
    }
    render(){
        return(
        <div>
            name:{this.state.loading || !this.state.user ? (
                <div>Loading....</div>
            ): (
                <div>
                    Login Name:<div>{this.state.user.login}</div>
                    Login Name:<div>{this.state.user.url}</div>
                </div>
            )}
        </div>
        );
    }
}