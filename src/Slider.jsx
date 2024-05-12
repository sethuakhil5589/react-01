import React from "react";

export default class Slider extends React.Component{
    state = {
        images : [
            "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://plus.unsplash.com/premium_photo-1664361480336-d99700a5733c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=1883&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D"
        ],
        index:0
    }
    nextImage = () =>{
        if(this.state.index<this.props.maxValue-1){
            this.setState({
                index: this.state.index + 1
            })
        }
        
        
    }
    // increment =() => {
    //             this.setState({
    //                 count:this.state.count +1
    //             })
    previousImage = () =>{
        if(this.state.index>this.props.minValue){
        this.setState ({
            index:this.state.index - 1
        })
    }
}
    render(){
        return(
            <div>
                <img src={this.state.images[this.state.index]} 
                alt="This is the alternate text for image"
                style={
                    {height:100,
                     width: 150
                    }
                }></img><br />
                <button onClick={this.nextImage} >Next</button>
                <button onClick={this.previousImage} >previous</button>
            </div>
        );
    }
}