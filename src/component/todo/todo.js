import React,{Component} from 'react'

export default class Todo extends Component{

    state = {
        inputText:'',
        listItem:[]
    }

    

    handleChangeText = (event)=>{
        this.setState({inputText:event.target.value})        
    }

    addTodo = ()=>{
        this.setState({
            listItem:this.state.listItem.concat(this.state.inputText),
            inputText:""
        })
    }

    render() {
        let {titleName} = this.props;

      return (
        <div>
            {/* onChange */}
            <h1 className="center"> {titleName} </h1>      
            <div className="input-group">
                <input type="text" className="form-control" onChange={this.handleChangeText} placeholder="Search for..." value={this.state.inputText}/>
                <span className="input-group-btn">
                    <button className="btn btn-default" type="button" onClick={this.addTodo}>Add.</button>
                </span>
            </div>
            
             <ul className="list-group">                            
                 {
                    this.state.listItem.map((value,index)=>{
                        return(                        
                            <li className="list-group-item">{index+1}. {value}</li>
                        );
                    })                 
                }      
            </ul>
             

        </div>
      )
    }
}