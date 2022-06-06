import React, { useEffect } from 'react';
import { useState } from 'react';
import {useNavigate,Link,useParams} from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';
//import {useNavigate} from "react-router-dom"
const AddEmployeeComponent=()=>{
    const [firstName,setfirstName]=useState('')
    const [lastName,setlastName]=useState('')
    const [emailId,setemailId]=useState('')
    const navigate = useNavigate();
    const {id}=useParams();

    const saveOrUpdateEmployee=(e)=>{
        e.preventDefault();

        const employee={firstName,lastName,emailId}

        if(id){
            EmployeeService.updateEmployee(id,employee).then((response)=>{
                console.log(response.data);
                navigate('/employees')
            }).catch(error=>{
                console.log(error);
            })
        }else{
        EmployeeService.createEmployee(employee).then((response)=>{
            console.log(response.data)
            navigate('/employees')
        }).catch(error=>{
            console.log(error);
        })
    }
}
    useEffect(()=>{
        EmployeeService.getEmployeeById(id).then((response)=>{
            setfirstName(response.data.firstName);
            setlastName(response.data.lastName);
            setemailId(response.data.emailId);
        }).catch(error=>{
            console.log(error);
        })
    },[id])
    

    const title=()=>{
        if(id){
            return<h2 className='text-center'>Update Employee</h2>
        }else
        {
            return<h2 className='text-center'>Add Employee</h2>
        }
    }
return(
<div>
    <br></br>
<div className='container'>
<div className='row'>
<div className='card col-md-6 offset-md-3 offset-md-3' >
{
    title()
}
<div className='card-body'>
       <form>
                      <div className='form-group mb-2'>
                          <label className="form-label">First Name</label>
                          <input placeholder='Enter First Name' name='firstName' className='form-control'
                          value={firstName} onChange={(e)=>setfirstName(e.target.value)}/>
                      </div>
                      <div className='form-group mb-2'>
                          <label className="form-label">Last Name</label>
                          <input type="text" placeholder='Enter Last Name' name='lastName' className='form-control'
                          value={lastName } onChange={(e)=>setlastName(e.target.value)}/>
                      </div>
                      <div className='form-group mb-2'>
                          <label  className="form-label">Email Id</label>
                          <input type="text" placeholder='Enter Email Id' name='emailId' className='form-control'
                          value={emailId} onChange={(e)=>setemailId(e.target.value)}/>
                      </div>
                      <button className='btn btn-success' onClick={(e)=>saveOrUpdateEmployee(e)}>Save</button>
                       <Link to="/employees" className='btn btn-danger' onClick={(e)=>navigate("/employee")} style={{marginLeft:"10px"}}>Cancel</Link> 
                  </form>
              </div>
        </div>
        </div>
    </div>
</div>

)
}
export default AddEmployeeComponent

//     constructor(props){
//         super(props)
//         this.state={
//             firstName:'',
//             lastName:'',
//             emailId:''
            
//         }
//         this.changeFirstNameHandler=this.changeFirstNameHandler.bind(this);
//         this.changeLastNameHandler=this.changeLastNameHandler.bind(this);
//         this.changeEmailIdHandler=this.changeEmailIdHandler.bind(this);
//         this.saveEmployee=this.saveEmployee.bind(this);
//     }
//     saveEmployee=(e)=>
//     {
//         e.preventDefault();
//         let employee={firstName:this.state.firstName,lastName:this.state.lastName,emailId:this.state.emailId};
//         console.log('employee=>' +JSON.stringify(employee));
//     }
//     changeFirstNameHandler=(event)=>{
//         this.setState({firstName:event.target.value});
//     }
//     changeLastNameHandler=(event)=>{
//         this.setState({lastName:event.target.value});
//     }
//    changeEmailIdHandler=(event)=>{
//         this.setState({emailId:event.target.value});
//     }

  
//     cancel=()=>
//     {
//         const navigate = useNavigate();
//         navigate("/employees");
        
//     }
//   render() {
//     return (
//       <div className='container'>
//           <div className='row'>
//               <h1 className='card col-md-6 offset-md-3 offset-md-3' ></h1>
//                 <h3 className='text-center'>Add Employee Details</h3>
//                 <div className='card-body'>
//                     <form>
//                         <div className='form-group'>
//                             <label>First Name</label>
//                             <input placeholder='First Name' name='firstName' className='form-control'
//                             value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
//                         </div>
//                         <div className='form-group'>
//                             <label>Last Name</label>
//                             <input placeholder='Last Name' name='lastName' className='form-control'
//                             value={this.state.lastName} onChange={this.changeLastNameHandler}/>
//                         </div>
//                         <div className='form-group'>
//                             <label>Email Id</label>
//                             <input placeholder='Email Id' name='emailId' className='form-control'
//                             value={this.state.emailId} onChange={this.changeEmailIdHandler}/>
//                         </div>
//                         <button className='btn btn-success' onClick={this.saveEmployee}>Save</button>
//                         <button className='btn btn-danger' onPress={()=>{this.props.navigation.navigate('employees')}} style={{marginLeft:"10px"}}>Cancel</button>
//                     </form>
//                 </div>
//           </div>
//       </div>
//     )
//   }












