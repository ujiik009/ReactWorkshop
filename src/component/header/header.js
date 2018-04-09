import React,{Component} from 'react'
import './header.css'
export class Header extends Component{

    constructor(props) {
        super(props);
        this.state = {
            userName: props.userName
        };
      }

    render() {
        // let number = 1000;
        let {userName,age} = this.props;

        return (
             <div className="header">                
                <div className="logo-style">
                    <span className="source">Source</span><span className="">Work </span>
                    <span className="user-name">Welcome : {userName} {age}</span>                    
                </div>             
             </div>
        )
    }
}





