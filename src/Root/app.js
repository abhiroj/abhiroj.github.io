import React,{Component} from 'react'
import Nav from './nav'
import Body from './body'
import ReactDOM from 'react-dom'

export default class App extends Component{
    
    constructor(props){
        super(props);
        this.state={
            navit:['About Me','Projects','Contact'],
            that:'abhiroj95@gmail.com'
        }
        this.handleClick=this.handleClick.bind(this);   

    }

    render(){
        return (
            <div className="page-content">
            <Nav onClick={this.handleClick} data={this.state.navit}/>
            <Body onClick={()=>{
                {this.handleClick();}
            }}/>
            </div>
        ); 
        }

    getThat(){
        return this.state.that;
    }    

    handleClick(key=this.state.navit[0]){
        const AboutMe=()=>{
        return (<div><p>Hello, I'm Abhiroj.</p>
            <p className="para">
            I am a technology enthusiast who likes to learn stuff , implement and solve problems (one at a time ;). I have worked on projects based on <code> Java </code>, <code> Python </code>,& <code> JavaScript</code>. I am an avid-reader and a fan of  'Dan Brown' &nbsp; & &nbsp; 'Ayn Rand'.In my spare time,I like to play football & I also support Real Madrid FC.  
            </p>
            <p className="para">
                You can easily contact me here : <a id="someThing" title="JS required to view" onClick={()=>{
                    var elem=document.querySelector('#someThing');
                    elem.innerHTML=this.getThat();
                    elem.setAttribute('onClick','');
                    elem.setAttribute('href','mailto:'+this.getThat());
                    }}>here's my email</a></p>
            <p className="para">
            You can also find me on <a href="https://www.github.com/AbhirojPanwar"> Github </a>,<a href="https://www.topcoder.com/members/Abhiroj/">TopCoder</a>,<a href="https://stackoverflow.com/users/story/3841509">Stack Overflow</a>,<a href="https://www.linkedin.com/in/abhirojpanwar/"> LinkedIn</a>
            </p>
        </div>);
            };
        const Projects=()=>{
                return <p>Involved with these projects</p>;
                };
        const Contacts=()=>{
                    return <p>You can find me here, here and here!!</p>;
                    };    
        var child=document.querySelector('.childElement');
        console.log("click on ",key);
        switch(key){
            case this.state.navit[0]:
            ReactDOM.render(<AboutMe />,child);
            break;
            case this.state.navit[1]:
            ReactDOM.render(<Projects />,child);
            break;
            case this.state.navit[2]:
            ReactDOM.render(<Contacts />,child);
            break;
            default:
            console.log('No Match');
        }
    }
}