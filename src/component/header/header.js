import React,{Component} from 'react'
import './header.css'

export default class Header extends Component{


    render() {
        let number = 1000;
        let {userName} = this.props

        return (
             <div className="header">                
                <div className="logo-style">
                    <span className="source">Source</span><span className="">Work </span>
                    <span className="user-name">Welcome : {userName}</span>                    
                </div>             
             </div>
        )
    }
}

