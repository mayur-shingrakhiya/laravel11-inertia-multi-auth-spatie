import { Link, useForm, usePage } from "@inertiajs/react";
import FieldGroup from "../../Components/Form/FieldGroup";
import SubmitButton from "../../Components/Form/SubmitButton";
import TextInput from "../../Components/Form/TextInput";
import TextPassword from "../../Components/Form/TextPassword";
import FalshAlert from "../../Components/Alert/FalshAlert";
import LoginLayout from "../../Layouts/LoginLayout";

function SignIn() {
    const {data, setData, errors, post, processing , clearErrors  } = useForm({
      email : '',
      password : '',
    });
    function formSubmit(e) {
        e.preventDefault()
        post('/signin/post');
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
                      <span className="p-2 text-gray-400 bg-white dark:bg-gray-900 sm:px-5 sm:py-2">Sign In Page</span>
                    </div>
                  </div>
                  { flash.success &&  <FalshAlert flashType="success" flashMessage={flash.success}></FalshAlert> }
                  { flash.error &&  <FalshAlert flashType="error" flashMessage={flash.error}></FalshAlert> }
                  <form onSubmit={formSubmit}>
                    <div className="space-y-5">
                      <FieldGroup label="Email" htmlFor="email" error={errors.email}  required={true}>
                        <TextInput name="email" type="email" value={data.email} error={errors.email} placeholder="Enter You Email" 
                        onChange={e => setData('email', e.target.value)}
                        ></TextInput>
                      </FieldGroup>
                      
                      <FieldGroup label="Password" htmlFor="password" error={errors.password} required={true}>
                        <TextPassword name="password" type="password" value={data.password}  error={errors.password} placeholder="Enter You Password" 
                        onChange={e => setData('password', e.target.value)}
                        ></TextPassword>
                      </FieldGroup>

                      <SubmitButton  disabled={processing} processingLabel="Signing In..." name="Sign In" type="submit"></SubmitButton>
                      
                    </div>
                  </form>
                  <div className="mt-5">
                  
                    <p className="text-sm font-normal text-center text-gray-700 dark:text-gray-400 sm:text-start">
                      Don't have an account?
                      <Link href="/signup" className="text-brand-500 hover:text-brand-600 dark:text-brand-400" >Sign Up</Link>
                    </p>
                  </div>
                </div>
              </div>
       
</>)
}


SignIn.layout = page => <LoginLayout children={page} title="SignIn" />

export default SignIn