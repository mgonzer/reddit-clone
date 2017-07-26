import React, {Component} from 'react'
// import { Dropdown } from 'semantic-ui-react'

class DropDownMenu extends Component {
  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }



handleChange(event){

  this.props.changeSortedBy(event.target.value)
}

render(){
 return(
   <select
     id="button-change"
     onChange={this.handleChange}
     >
     <option value='votes'>Votes</option>
     <option value="created">Date</option>
     <option value='title'>Title</option>
   </select>
)
}
}
export default DropDownMenu

//
// <Dropdown id="dropdown-menu" text='Sort'>
//   <Dropdown.Menu>
//     <Dropdown.Item text='Votes' selected />
//     <Dropdown.Item text='Date'  />
//     <Dropdown.Item text='Title'  />
//   </Dropdown.Menu>
// </Dropdown>
