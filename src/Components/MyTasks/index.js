import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import Tags from '../Tags'
import Tasks from '../Tasks'

import './index.css'

class MyTasks extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tagsList: props.ListOfTags,
      newTaskList: [],
      inputValue: '',
      selectValue: props.ListOfTags[0].displayText,
      activeTab: '',
    }
  }

  changeSelectValue = event => {
    console.log(event.target.value)
    this.setState({selectValue: event.target.value})
  }

  changeInputValue = event => {
    this.setState({inputValue: event.target.value})
  }

  clickAddBtn = event => {
    console.log('hello')
    event.preventDefault()
    const {inputValue, selectValue} = this.state
    const newTask = {
      id: uuidv4(),
      task: inputValue,
      tag: selectValue,
    }
    console.log(newTask)

    this.setState(privwesValue => ({
      newTaskList: [...privwesValue.newTaskList, newTask],
      inputValue: '',
    }))
  }

  clickTab = name => {
    const {activeTab} = this.state
    if (activeTab === name) {
      this.setState({activeTab: ''})
    } else {
      this.setState({activeTab: name})
    }
  }

  render() {
    const {
      tagsList,
      newTaskList,
      inputValue,
      selectValue,
      activeTab,
    } = this.state

    let filterList
    if (activeTab === '') {
      filterList = newTaskList.filter(echValue => echValue.tag !== activeTab)
    } else {
      filterList = newTaskList.filter(echValue => echValue.tag === activeTab)
    }

    return (
      <div className="bg-container">
        <form className="form-container" onSubmit={this.clickAddBtn}>
          <h1 className="create-heading">Create a task!</h1>
          <label className="label" htmlFor="task">
            Task
          </label>
          <input
            className="input"
            type="text"
            placeholder="Enter the task here"
            id="task"
            value={inputValue}
            onChange={this.changeInputValue}
          />
          <label className="label" htmlFor="tags">
            Tags
          </label>
          <select
            className="input"
            id="tags"
            value={selectValue}
            onChange={this.changeSelectValue}
          >
            {tagsList.map(echValue => (
              <option
                className=""
                value={echValue.displayText}
                key={echValue.optionId}
              >
                {echValue.displayText}
              </option>
            ))}
          </select>
          <button type="submit" className="button">
            Add Task
          </button>
        </form>

        <div className="right-container">
          <h1 className="tag-heading">Tags</h1>
          <ul className="ul-list-tag">
            {tagsList.map(echValue => (
              <Tags
                listItems={echValue}
                key={echValue.optionId}
                clickTab={this.clickTab}
                isTrue={echValue.displayText === activeTab}
              />
            ))}
          </ul>
          <h1 className="tag-heading">Tasks</h1>
          {filterList.length === 0 ? (
            <p className="no-tasks-heading">No Tasks Added Yet</p>
          ) : (
            <ul className="ul-list-tasks">
              {filterList.map(echValue => (
                <Tasks listTask={echValue} key={echValue.id} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default MyTasks
