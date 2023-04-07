import React from "react";

class Person extends React.Component {
constructor (Props){
super (Props);
this.state = {
    profil : { fullName: "souhaila",
    bio : "web", 
    imageSrc:'https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png',
    profession: "ux" },
    moutingTime:0,
}
}
componentDidMount(){
setInterval(() => {
    this.setState( {moutingTime:this.state.moutingTime+1})
}, 1000)
}

change=()=>{
    this.setState({shows:!this.state.shows})

}

render(){

return (
   <div> 
     {this.state.shows? 
    <>
    <h1> je suis {this.state.profil.fullName} </h1>
    <h1> je suis {this.state.profil.bio} </h1>
    <h1> je suis {this.state.profil.profession} </h1>
    <img src={this.state.profil.imageSrc} alt='image'/>
    </>:
    null
    }
    <button onClick={()=>this.change()}> show</button>
   
    </div>
   
    );
}

}
export default Person