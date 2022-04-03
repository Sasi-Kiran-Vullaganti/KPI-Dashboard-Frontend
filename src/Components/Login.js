import { React,useState,useEffect} from 'react'
import NavigationBar from './NavigationBar'
import { Form,FloatingLabel,Row,Col,Button, } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'


export default function Login() {
  async function getMembers() {
    await fetch('http://localhost:8080/api/Members/AllMembers')
      .then((response) => response.json());
  }
  
  const mems = getMembers();
  const history = useHistory();
  useEffect(()=>{
    if(localStorage.getItem("user-info")){
      history.push("/")
    }
  },[])
  const[email,setEmail] = useState("")
  const[password,setPassword] = useState("")

  

  function login(){
    console.warn(email,password)
  }
  return (
    <div>
      <NavigationBar/>
      <center>
      <br/>
    <div className='shadow-lg p-4 mb-5 bg-white rounded col-md-4'>
      <br/>
        <h3>Welcome to Samsung Team</h3>
      <h3>Login Now</h3>
      <Form >
      <FloatingLabel controlId="f2" label="Email address" className="mb-3">
          <Form.Control type="email" placeholder="name@example.com" defaultValue={email} onChange={(e)=>setEmail(e.target.value)} required autoComplete='off' />
      </FloatingLabel>
      <FloatingLabel controlId="f3" label="Password">
        <Form.Control type="password" placeholder="Password" defaultValue={password} onChange={(e)=>setPassword(e.target.value)} required autoComplete='off' />
      </FloatingLabel><br/>
      <Row>
        <Col>
          <Button variant="primary" onClick={login}  style={{width:"100%"}}>Login</Button>{' '}
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
