import Table from 'react-bootstrap/Table';

function EmployeeDetails(props) {
  
  return (
    <div className="App">
      
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name </th>
            
            <th>Email</th>
            <th>Phone</th>
            <th>Birthdate</th>
          </tr>
        </thead>
        <tbody>
          {props.employees.map(employee => (
            <tr key = {employee.cell}>
              <td> 
                <img src = {employee.picture.thumbnail}/>
                </td>
              <td>{employee.name.first}</td>
              <td>{employee.email}</td>
              <td>{employee.phone}</td>
              <td>{employee.dob.date}</td>
            </tr>
          )

          )}
        </tbody>
      </Table>

    </div>
  );
}

export default EmployeeDetails;