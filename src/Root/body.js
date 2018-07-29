import React,{Component} from 'react'

export default class Body extends Component{
    
    componentDidMount(){
        this.props.onClick();
    }

    render(){
        return (<div className="childElement"></div>);
    }
}