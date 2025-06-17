import { Link, useForm, usePage } from "@inertiajs/react";
import FieldGroup from "../../Components/Form/FieldGroup";
import TextInput from "../../Components/Form/TextInput";
import TextPassword from "../../Components/Form/TextPassword";
import SubmitButton from "../../Components/Form/SubmitButton";
import FalshAlert from "../../Components/Alert/FalshAlert";
import LoginLayout from "../../Layouts/LoginLayout";

function SignUp() {
    const {data, setData, processing, post, errors } = useForm({
        firstname : '',
        lastname : '',
        email : '',
        password : '',
    });
    function formSubmit(e) {
        e.preventDefault();
        post('signup/create')
    }
     const { flash } = usePage().props
    return (<>  
          <div>
            <div>
              <div className="relative py-3 sm:py-5">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200 dark:border-gray-800"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="p-2 text-gray-400 bg-white dark:bg-gray-900 sm:px-5 sm:py-2">Sign Up Page</span>
                </div>
              </div>
              { flash.success &&  <FalshAlert flashType="success" flashMessage={flash.success}></FalshAlert> }
              { flash.error &&  <FalshAlert flashType="error" flashMessage={flash.error}></FalshAlert> }
              <form onSubmit={formSubmit}>
                <div className="space-y-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <FieldGroup label="First Name" htmlFor="firstname" error={errors.firstname}  required={true}>
                        <TextInput name="firstname" type="text" error={errors.firstname} placeholder="Enter First Name" onChange={e => setData('firstname', e.target.value)} ></TextInput>
                    </FieldGroup>

                    <FieldGroup label="Last Name" htmlFor="lastname" error={errors.lastname}  required={true}>
                        <TextInput name="lastname" type="text" error={errors.lastname} placeholder="Enter Last Name"  onChange={e => setData('lastname', e.target.value)} ></TextInput>
                    </FieldGroup>
                  </div>

                  <FieldGroup label="Email" htmlFor="email" error={errors.email} required={true}>
                      <TextInput name="email" type="email" error={errors.email} placeholder="Enter Your Email" onChange={e => setData('email', e.target.value)} ></TextInput>
                  </FieldGroup>

                  <FieldGroup label="Password" htmlFor="password" error={errors.password} required={true}>
                      <TextPassword name="password" type="password" error={errors.password} placeholder="Enter Your Password" onChange={e => setData('password', e.target.value)}></TextPassword>
                  </FieldGroup>

                  <SubmitButton  disabled={processing} processingLabel="Signing Up..." name="Sign Up" type="submit"></SubmitButton>
                </div>  
              </form>
              <div className="mt-5">  
                  <p className="text-sm font-normal text-center text-gray-700 dark:text-gray-400 sm:text-start">
                    Already have an account? 
                    <Link href="/" className="text-brand-500 hover:text-brand-600 dark:text-brand-400" > Sign In</Link>
                  </p>
              </div>
            </div>
          </div> 
    </>)
}

SignUp.layout = page => <LoginLayout children={page} title="SignIn" />

export default SignUp