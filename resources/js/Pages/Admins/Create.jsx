import { useForm, usePage } from "@inertiajs/react";
import FieldGroup from "../../Components/Form/FieldGroup";
import SubmitButton from "../../Components/Form/SubmitButton";
import TextInput from "../../Components/Form/TextInput";
import TextPassword from "../../Components/Form/TextPassword";
import BackButton from "../../Components/Button/BackButton";
import { route } from "ziggy-js";
import Checkbox from "../../Components/Checkbox/Checkbox";
import { useEffect, useState } from "react";
export default function Create(){
    const admin = usePage().props.admin;
    const roles = usePage().props.roles;
    const [checkedRoles, SetCheckedRoles] = useState(admin ? usePage().props.hasRoles : []);

    function togglePermission(rolename) {
        if (checkedRoles.includes(rolename)) {
            SetCheckedRoles(
                checkedRoles.filter((perm) => perm !== rolename)
            );
        } else {
            SetCheckedRoles([...checkedRoles, rolename]);
        }
    }

    useEffect(() => {
        setData("roles", checkedRoles);
    }, [checkedRoles]);

     const {data, setData, processing, post,patch, errors } = useForm({
            firstname : admin ? admin.firstname : '',
            lastname : admin ? admin.lastname : '',
            email : admin ? admin.email : '',
            password : '',
        });
        
        function formSubmit(e) {
            e.preventDefault();
            if (admin) {
                patch(route('admins.update',admin.id))
            }else{
                post(route('admins.store'))
            }
        }
    return (<>


        <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
            <div className="px-5 py-4 sm:px-6 sm:py-5">
                <h3 className="text-base font-medium text-gray-800 dark:text-white/90">
                    {admin ? 'Edit Admin' : 'Create Admin'} 
                </h3>
            </div>
            <div className="p-5 space-y-6 border-t border-gray-100 dark:border-gray-800 sm:p-6">
                <form onSubmit={formSubmit}>
                    <div className="-mx-2.5 flex flex-wrap gap-y-5">
                        <div className="w-full px-2.5 xl:w-1/2">
                            <FieldGroup label="First Name" htmlFor="firstname" error={errors.firstname}  required={true}>
                                <TextInput name="firstname" type="text" error={errors.firstname} placeholder="Enter First Name" value={data.firstname} onChange={e => setData('firstname', e.target.value)} ></TextInput>
                            </FieldGroup>
                        </div>

                        <div className="w-full px-2.5 xl:w-1/2">
                            <FieldGroup label="Last Name" htmlFor="lastname" error={errors.lastname}  required={true}>
                                <TextInput name="lastname" type="text" error={errors.lastname} placeholder="Enter Last Name" value={data.lastname}  onChange={e => setData('lastname', e.target.value)} ></TextInput>
                            </FieldGroup>
                        </div>

                        <div className="w-full px-2.5 xl:w-1/2">
                            <FieldGroup label="Email" htmlFor="email" error={errors.email} required={true}>
                                <TextInput name="email" type="email" error={errors.email} placeholder="Enter Your Email" value={data.email} onChange={e => setData('email', e.target.value)} ></TextInput>
                            </FieldGroup>
                        </div>

                        <div className="w-full px-2.5 xl:w-1/2">
                            <FieldGroup label="Password" htmlFor="password" error={errors.password} required={admin ? false : true}>
                                <TextPassword name="password" type="password" error={errors.password} placeholder="Enter Your Password" onChange={e => setData('password', e.target.value)}></TextPassword>
                            </FieldGroup>
                        </div>

                        <div className="w-full px-2.5">
                            <FieldGroup label="Roles : " htmlFor="Roles"  required={false}>
                                <div className="flex flex-wrap items-center gap-4">
                                    {roles &&
                                        roles.map((roles) => (
                                        <Checkbox
                                            onChange={() => togglePermission(roles.name)}
                                            checked={checkedRoles.includes(roles.name)}
                                            key={roles.id}
                                            label={roles.name}
                                            checkboxId={`roles-${roles.id}`}
                                            name="roles[]"
                                            
                                        />
                                        ))}
                                </div>
                            </FieldGroup>
                        </div>

                        <div className="w-full px-2.5 xl:w-1/2">
                            <div className="flex items-center gap-3 mt-1">
                                <SubmitButton  disabled={processing} processingLabel={admin ? 'Updating Admin...' : 'Creating Admin...'} name={admin ? 'Update Admin' : 'Create Admin'}  type="submit"></SubmitButton>
                                <BackButton href={route('admins.index')} text={`Cancel`}></BackButton>
                            </div>
                        </div> 
                    </div> 

                    
                </form>
            </div>
        </div>
    
    </>)
}