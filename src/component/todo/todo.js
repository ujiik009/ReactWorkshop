import React,{Component} from 'react'
import './todo.css'
export default class Todo extends Component{

    state = {
        inputText:'',
        listItem:[],
        count:0
    }

    addCount = ()=>{
       
        this.setState(
            {
                count:this.state.count+1
            }
        );
    }

    handleChangeText = (event)=>{
        
        this.setState({inputText:event.target.value})        
    }

    addTodo = ()=>{
        const listItem = this.state.listItem.concat(this.state.inputText);
        this.setState({
            listItem:listItem,
            inputText:"",
            count:listItem.length        
        })       
    }

    testfunc = (text)=>{
        alert(text);
        
    }

    deleteTodo = (index)=>{           
        const resule = this.state.listItem;
        resule.splice(index, 1);
        this.setState({
            listItem: resule,
            count:resule.length
        });
    }

    render() {
        let {titleName} = this.props;

      return (
        <div>
            {/* onChange */}
            <h1 className="center"> {titleName} {this.state.count}</h1>      
            <div className="input-group">
                <input type="text" className="form-control" onChange={this.handleChangeText} placeholder="Search for..." value={this.state.inputText}/>
                <span className="input-group-btn">
                    <button className="btn btn-default" type="button" onClick={this.addTodo}>Add.</button>
                </span>
            </div>
            <button type="button" className="btn btn-default" onClick={this.addCount}>add Count</button>
            
             <ul className="list-group">                            
                {
                    this.state.listItem.map((value,index)=>{
                        return(                        
                            <li className="list-group-item">{index+1}. {value} <span className="deleteTodo" onClick={this.deleteTodo.bind(this,index)}>x</span></li>
                        );
                    })                 
                }      
            </ul>
        </div>
      )
    }
}