import Link from 'next/link';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const validate = (values) =>{
  const errors ={}
  if(!values.name){
      errors.name = 'Requerido'
  }else if(!values.lastname){
      errors.lastname = 'Requerido'
  }else if(!values.email){
      errors.email = 'Requerido'
  }else if(!values.password){
    errors.password = 'Requerido'
}
      
  return errors
}

const SignUp = () =>{
  const initialValues = {name:'', lastname:'', email:'', password:'' }

  const registrerUser = async (author) =>{
    try {
      let result = await fetch('http://localhost:3001/registrer',{
        "method": "POST",
        "headers": { "Content-type": "application/json" },
        "body": JSON.stringify(author)
    });
    } catch (error) {
      console.log(error);
    }
  }
    return(
      <div>
        <div className="login">
          <div className="login-header">
            <h1>Sing Up</h1>
          </div>
          <Formik
          initialValues={initialValues}
          validate={validate}
          onSubmit={(values, actions) =>{
            registrerUser(values)
              actions.resetForm(initialValues)
          }}
          >
            <Form className="login-form">
              <Field  name="name" type="text" placeholder="Name" />
              <ErrorMessage className="validation" name="name"/>
              <br/>
              <Field name="lastname" type="text" placeholder="Lastname"/>
              <ErrorMessage className="validation" name="lastname"/>
              <br/>
              <Field name="email" type="text" placeholder="Email"/>
              <ErrorMessage className="validation" name="email"/>
              <br/>
              <Field name="password" type="password" placeholder="Password"/>
              <ErrorMessage className="validation" name="password"/>
              <br/>
              <button className="login-button" type="submit">Sing Up</button>
              <br/>
              <Link href='/signin' className="sign-up">Already have an account? Sign In</Link><br/>
            </Form>
          </Formik>
        </div>
      </div>  
    )
  }
  
  export default SignUp