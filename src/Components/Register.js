import {React,useState,useEffect} from 'react'
import { Form,FloatingLabel,Row,Col,Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import NavigationBar from './NavigationBar'

export default function() {

  useEffect(()=>{
    if(localStorage.getItem("user-info")){
      history.push("/")
    }
  },[])

  const[name,setName] = useState('')
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const history = useHistory();

  async function Register(){
    let mem = {name,email,password}

    let result = await fetch("http://localhost:8080/api/Members/addMember",{
      method:"POST",
      body:JSON.stringify(mem),
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
      }
    })
    result = await result.text()
    localStorage.setItem("user-info",JSON.stringify(result))
    history.push("/")
  }

  return (
    <div>
      <NavigationBar/>
      <center>
      <br/>
    <div className='shadow-lg p-4 mb-5 bg-white rounded col-md-4'>
      <br/>
      <h3>Register Now</h3>
      <Form >
      <FloatingLabel controlId="f1" label="Enter Name" className="mb-3">
          <Form.Control type="text" placeholder="Enter Name" defaultValue={name} onChange={(e)=>setName(e.target.value)} required autoComplete='off' />
      </FloatingLabel>
      <FloatingLabel controlId="f2" label="Email address" className="mb-3">
          <Form.Control type="email" placeholder="name@example.com" defaultValue={email} onChange={(e)=>setEmail(e.target.value)} required autoComplete='off' />
      </FloatingLabel>
      <FloatingLabel controlId="f3" label="Password">
        <Form.Control type="password" placeholder="Password" defaultValue={password} onChange={(e)=>setPassword(e.target.value)} required autoComplete='off' />
      </FloatingLabel><br/>
      <Row>
        <Col>
          <Button variant="primary" onClick={Register} style={{width:"100%"}}>Register</Button>{' '}
        </Col>
        <Col>
          <Button variant="secondary" style={{width:"100%"}}>Reset</Button>{' '}
        </Col>
      </Row>
      </Form>
    </div>
    </center>
    </div>
  )
}
