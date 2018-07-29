//Master Component
import React,{Component} from 'react'

export default class Nav extends Component{
    
    constructor(props){
        super(props);
    }

    componentDidMount(){
        console.log("Component Mounted");
    }

    render(){
        return (
            <ul className="nav-container list-group">
            {this.props.data.map(item=><li key={item} className="nav-element" onClick={()=>this.props.onClick(item)}>{item}</li>)}
                </ul>
        );
    }
}