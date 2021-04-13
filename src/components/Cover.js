import React, {Component} from "react";
import EmployeeDetails from './EmployeeDetails';
import Search from './Search';
import Header from './Header';
import axios from 'axios';

class Cover extends Component {
  
 
  state = {
    employees: [],
    filteredEmployees: []
  };

  componentDidMount(){
    axios.get('https://randomuser.me/api/?results=10')
    .then(response => {
    
      console.log(response.data.results)
      
      this.setState({employees: response.data.results, filteredEmployees: response.data.results});
      
  });
  }

  handleSearch = (e) => {
    const searched = this.state.employees.filter(employee => employee.name.first.toLowerCase().includes(e.target.value.toLowerCase()));
    this.setState({filteredEmployees: searched});
  }

  handleSort = () => {
    const sorted = this.state.employees.filter(employee => employee.name.first.toLowerCase().sort((a, b) => a.first.localeCompare(b.first)));
    this.setState({filteredEmployees: sorted})
     
  }
  
  render() {
    return (
      <div>
        <Header>Hello</Header>
        <Search handleSearch = {this.handleSearch}
                handleSort = {this.handleSort}/>
                
         
        <EmployeeDetails
            employees = {this.state.filteredEmployees}/>
      
      </div>
    );
  }
}


export default Cover;