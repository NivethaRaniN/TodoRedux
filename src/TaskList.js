import React from 'react';
import TaskForm from './TaskForm';
import './TaskList.css';
import DeleteIcon from '@material-ui/icons/Delete';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
/*import {connect} from 'react-redux';
import {addTask} from './action';*/

class TaskList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            tasks : [],
        };
        this.addTask = this.addTask.bind(this);
        this.toggleCheckbox = this.toggleCheckbox.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleTaskUp = this.handleTaskUp.bind(this);
        this.handleTaskDown = this.handleTaskDown.bind(this);
    }

    addTask = (task) => {
        let newtasks = [...this.state.tasks,task];
        this.setState({tasks:newtasks});
    }

    toggleCheckbox = (e,id) => {
        if(e.target.checked || !e.target.checked){
            this.setState({
                tasks : this.state.tasks.map((item,index) => {
                    if(index === id){
                        return{
                            text : item.text,
                            complete : !item.complete
                        }
                    }
                    else { return item}
                }
            )
            })
        }
    }

    handleDelete = (e,id) => {
        let newTasks = [...this.state.tasks];
        newTasks.splice(id, 1);
        this.setState({tasks: newTasks});
    }

    handleTaskUp = (e,id) => {
        let newTasks = [...this.state.tasks];
        if(id > 0){
            let temp = newTasks[id];
            newTasks[id] = newTasks[id-1];
            newTasks[id-1] = temp;
            this.setState({tasks: newTasks});
        }
    }

    handleTaskDown = (e,id) => {
        let newTasks = [...this.state.tasks];
        if(id < newTasks.length-1){
            let temp = newTasks[id];
            newTasks[id] = newTasks[id+1];
            newTasks[id+1] = temp;
            this.setState({tasks: newTasks});
        }
    }

    handleSort = (sort) => {
        var sortArr = this.state.tasks;
        if(sortArr.length !== 0){
		    sortArr.sort(function(a, b) {
			    if(sort.sortType === "asc"){
				    return a.text === b.text ? 0 : a.text < b.text ? -1 : 1;
			    }
			    else if(sort.sortType === "desc"){
				    return a.text === b.text ? 0 : a.text > b.text ? -1 : 1;
			    }
		    });
        }
		this.setState({tasks:sortArr})
	}

 
    render() {
        return(
            <div className="parent-flex">
                <div className= "task-Parent">
                    <p style={{ color: '#444444',fontSize:'36px', fontFamily:'OpenSans-Light'}}> Tasks </p>
                    <TaskForm newTask = {this.addTask} sortTask = {this.handleSort}/>
                    <div className = "list-Tasks">
                        <div className ="todo-tasks">
                            <p style={{ color: '#8B9DA7',fontSize:'20px', fontFamily:'OpenSans'}}>To-do </p>
                            {this.state.tasks && this.state.tasks.map((item, index)=> {
                            return(
                            !item.complete &&
                            <div className="task-elements" key = {index}>
                                <input type="checkbox" style={{width:'10%'}} defaultChecked = {false} onChange={(e) =>{this.toggleCheckbox(e,index)}}/>
                                <span style={{width:'50%'}}>{item.text}</span>
                                <div style={{width:'30%'}}>
                                    <KeyboardArrowUpIcon style={{ fontSize: 15 }}  onClick ={(e) => {this.handleTaskUp(e,index)}}/>
                                    <KeyboardArrowDownIcon style={{ fontSize: 15 }}  onClick ={(e) => {this.handleTaskDown(e,index)}}/>
                                    <DeleteIcon style={{ fontSize: 12 }}  onClick ={(e) => {this.handleDelete(e,index)}}/>
                                </div>
                            </div>
                            )
                            })
			                }
                        </div>
                        <div className="completed-tasks">
                            <p style={{ color: '#8B9DA7',fontSize:'20px', fontFamily:'OpenSans'}}>Completed</p>
                            {this.state.tasks && this.state.tasks.map((item, index)=> {
                            return(
                            item.complete && 
                            <div className="task-elements" key = {index}>
                                <input type="checkbox" style={{width:'10%'}} defaultChecked= "true" onChange={(e) =>{this.toggleCheckbox(e,index)}}/>
                                <span style={{width:'50%'}} className="complete-text">{item.text}</span>
                                <div style={{width:'30%'}}>
                                    <KeyboardArrowUpIcon style={{ fontSize: 15}}  onClick ={(e) => {this.handleTaskUp(e,index)}}/>
                                    <KeyboardArrowDownIcon style={{ fontSize: 15}}  onClick ={(e) => {this.handleTaskDown(e,index)}}/>
                                    <DeleteIcon style={{ fontSize: 15}}  onClick ={(e) => {this.handleDelete(e,index)}}/>
                                </div>
                            </div>
                            )
                            })
			                }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default TaskList;

/*const mapStateToProps = state => ({
    tasks: state
  })
  
  const mapDispatchToProps = dispatch => ({
    addTask: () => dispatch(addTask())
  })

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(TaskList)*/

