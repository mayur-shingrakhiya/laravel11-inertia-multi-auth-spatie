import { useForm, usePage } from "@inertiajs/react";
import FieldGroup from "../../Components/Form/FieldGroup";
import SubmitButton from "../../Components/Form/SubmitButton";
import TextInput from "../../Components/Form/TextInput";
import TextPassword from "../../Components/Form/TextPassword";
import BackButton from "../../Components/Button/BackButton";
import { route } from "ziggy-js";
import SVG from "../../Components/SVG/SVG";
import Checkbox from "../../Components/Checkbox/Checkbox";
import { useEffect, useState } from "react";

export default function Create(){
        const role = usePage().props.role;
        const given_permission = usePage().props.given_permission;
        const permissionsRecords = usePage().props.permissions;
        const [checkedPermissions, setCheckedPermissions] = useState(role ? given_permission : []);
        function togglePermission(permissionname) {
            if (checkedPermissions.includes(permissionname)) {
                setCheckedPermissions(
                    checkedPermissions.filter((perm) => perm !== permissionname)
                );
            } else {
                setCheckedPermissions([...checkedPermissions, permissionname]);
            }
        }

        useEffect(() => {
            setData("permissions", checkedPermissions);
        }, [checkedPermissions]);

        const {data, setData, processing, post,patch, errors } = useForm({
            name : role ? role.name : '',
        });
        
        function formSubmit(e) {
           
            e.preventDefault();
            if (role) {
                patch(route('roles.update',role.id))
            }else{
                post(route('roles.store'))
            }
        }
    return (<>


        <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
            <div className="px-5 py-4 sm:px-6 sm:py-5">
                <h3 className="text-base font-medium text-gray-800 dark:text-white/90">
                    {role ? 'Edit Role' : 'Create Role'} 
                </h3>
            </div>
            <div className="p-5 space-y-6 border-t border-gray-100 dark:border-gray-800 sm:p-6">
                <form onSubmit={formSubmit}>
                    <div className="-mx-2.5 flex flex-wrap gap-y-5">
                        <div className="w-full px-2.5">
                            <FieldGroup label="Name" htmlFor="name" error={errors.name}  required={true}>
                                <TextInput name="name" type="text" error={errors.name} placeholder="Enter Name" value={data.name} onChange={e => setData('name', e.target.value)} ></TextInput>
                            </FieldGroup>
                        </div>
                            <div className="w-full px-2.5">
                                <FieldGroup label="Permissions : " htmlFor="Permissions"  required={false}>
                                    <div className="flex flex-wrap items-center gap-4">
                                        {permissionsRecords &&
                                            permissionsRecords.map((permissionsRecord) => (
                                            <Checkbox
                                                onChange={() => togglePermission(permissionsRecord.name)}
                                                checked={checkedPermissions.includes(permissionsRecord.name)}
                                                key={permissionsRecord.id}
                                                label={permissionsRecord.name}
                                                checkboxId={`permission-${permissionsRecord.id}`}
                                                name="permissions[]"
                                                
                                            />
                                            ))}
                                    </div>
                                </FieldGroup>
                            </div>

                        
                        

                        

                        <div className="w-full px-2.5 xl:w-1/2">
                            <div className="flex items-center gap-3 mt-1">
                                <SubmitButton  disabled={processing} processingLabel={role ? 'Updating Role...' : 'Creating Role...'} name={role ? 'Update Role' : 'Create Role'}  type="submit"></SubmitButton>
                                <BackButton  href={route('roles.index')} text={`Cancel`} checked={false}></BackButton>
                            </div>
                        </div> 
                    </div> 

                    
                </form>
            </div>
        </div>
    
    </>)
}