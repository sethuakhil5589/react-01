import React from "react";
export default class UserInput extends React.Component{
    state = {
        name: "your name",
        remeberMe: true,
        country: "USA",
        radio: true
    }
    // changesInForm= (event)=>{
    //     // console.log(event.target.value);
    //     this.setState({name: event.target.value});
    // }
    // checkBoxChecked= (event) =>{
    //     this.setState({remeberMe:event.target.checked})
    // }
    // handleSelect= (event) =>{
    //     this.setState({country: event.target.value})
    // }
    handleSubmit= () =>{
        console.log(this.state)
    }
    handleAll= (event,inputName,isChecked)=>{
        this.setState({[inputName]: isChecked ? event.target.checked : event.target.value})
    }
    render(){
        return(
            <div>
                <input onChange={event => this.handleAll(event,"name")} type="text" ></input>
                <input 
                    type="checkbox"
                    onChange={event => this.handleAll(event,"remeberMe",true)}
                    checked={this.state.remeberMe}
                />
                <label>Remember Me?</label>
                <select 
                value={this.state.country}
                onChange={event => this.handleAll(event,"country")}
                >
                <option>India</option>
                <option>Russia</option>
                <option>USA</option>
                <option>Germany</option>
                <option>UK</option>
                </select>
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        );
    }
}