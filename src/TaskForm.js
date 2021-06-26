import React from 'react';
import './TaskForm.css';


class TaskForm extends React.Component {
    state = {
        text : '',
        sortClass: 'bttn-sort sortDown',
        sortFlag: 'desc',
        errormsg: ""
    };

    handleChange = (event) =>{
        this.setState({text:event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        var errormsg = "";
        if(this.state.text.length > 0 && this.state.text.length <= 20){
            this.props.newTask({
                text: this.state.text,
                complete: false
            })
        }
        else{
            errormsg = "Must be 20 characters or less";
        }
        this.setState({errormsg:errormsg});
        this.setState({text:''});
    }

    sortType = (event) => {
        event.preventDefault();
        var sortflag = this.state.sortFlag;
		sortflag = (sortflag === "desc") ? 'asc' : 'desc';
		var sortclass = (sortflag === 'desc') ? 'bttn-sort sortDown' : 'bttn-sort sortUp';
		this.setState({sortFlag : sortflag,sortClass: sortclass},()=>{
			this.props.sortTask({
                sortType: this.state.sortFlag
		    })
        })
    }

    render() {
        return(
            <div className = "form-task">
                <div className="form-input">
                    <input id = "inputText"
                        type = "text"
                        placeholder = "Add a task"
                        value = {this.state.text}
                        onChange = {this.handleChange} />
                    <input className="button-add" type = "button" value = "Add" onClick = {this.handleSubmit} />
                    <input type="button" className={this.state.sortClass} value ="Sort" onClick={this.sortType}/>
                </div>
                <div>
                    <span style={{color: "#c22a22"}}>{this.state.errormsg}</span>
                </div>
            </div>
        );
    }
}
export default TaskForm;