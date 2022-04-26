import Link from 'next/link';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import { usePathName } from '../hooks/usePathNames';
import { useContext } from 'react';
import AuthContext from "../context/AuthContext"
import { useRouter } from 'next/router';

const validate = (values) =>{
  const errors ={}
  if(!values.email){
      errors.email = 'Requerido'
  }else if(!values.password){
    errors.password = 'Requerido'
}
      
  return errors
}

const SignIn = () =>{
  usePathName();
  const initialValues = {email:'', password:'' };
  const {setIsLogged} = useContext(AuthContext);
  const router = useRouter();

  const loginUser = async (author) =>{
    try {
      let result = await axios.post('http://localhost:3001/login',{
        email: author.email,
        password: author.password
      });
      setIsLogged(true);
      router.back();
    } catch (error) {
      console.log(error);
    }
  }

  return(
    <div>
      <div className="login">
        <div className="login-header">
          <h1>Sing In</h1>
        </div>
        <Formik
          initialValues={initialValues}
          validate={validate}
          onSubmit={(values, actions) =>{
              loginUser(values)
              actions.resetForm(initialValues)
          }}
          >
            <Form className="login-form">
              <Field name="email" type="text" placeholder="Email"/>
              <ErrorMessage className="validation" name="email"/>
              <br/>
              <Field name="password" type="password" placeholder="Password"/>
              <ErrorMessage className="validation" name="password"/>
              <br/>
              <button type="submit" value="Login" className="login-button"> Sing in </button>
              <br/>
              <Link href='/signup' className="sign-up">Don't have an account? Sign Up</Link><br/>
            </Form>
          </Formik>
      </div>
    </div>  
  )
}

export default SignIn