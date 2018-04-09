import React, { Component } from 'react';
import {Header} from './component/header/header'
import Footer from './component/footer/footer'
import Todo from './component/todo/todo'
import './App.css';
import './assets/bower_components/bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
    
    render(){
        return (
            <div>
                {/* component header */}
                <Header userName="Apirat" age="20"/>                
                    <div className="row">
                        <div className="col-md-6">
                            <Todo titleName="text1"/>
                        </div>
                        <div className="col-md-6">
                            <Todo titleName="text2"/>
                        </div>                
                    </div>                
                {/* component footer */}
                <Footer/>
            </div>
        )
    }
}

export default App;