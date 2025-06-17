import { useForm, usePage } from "@inertiajs/react";
import FieldGroup from "../../Components/Form/FieldGroup";
import SubmitButton from "../../Components/Form/SubmitButton";
import TextInput from "../../Components/Form/TextInput";
import TextPassword from "../../Components/Form/TextPassword";
import BackButton from "../../Components/Button/BackButton";
import { route } from "ziggy-js";

export default function Create(){
        const permission = usePage().props.permission;
        const {data, setData, processing, post,patch, errors } = useForm({
            name : permission ? permission.name : '',
        });
        
        function formSubmit(e) {
            e.preventDefault();
            if (permission) {
                patch(route('permissions.update',permission.id))
            }else{
                post(route('permissions.store'))
            }
        }
    return (<>


        <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
            <div className="px-5 py-4 sm:px-6 sm:py-5">
                <h3 className="text-base font-medium text-gray-800 dark:text-white/90">
                    {permission ? 'Edit Permission' : 'Create Permission'} 
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

                        <div className="w-full px-2.5 xl:w-1/2">
                            <div className="flex items-center gap-3 mt-1">
                                <SubmitButton  disabled={processing} processingLabel={permission ? 'Updating Permission...' : 'Creating Permission...'} name={permission ? 'Update Permission' : 'Create Permission'}  type="submit"></SubmitButton>
                                <BackButton href={route('permissions.index')} text={`Cancel`}></BackButton>
                            </div>
                        </div> 
                    </div> 

                    
                </form>
            </div>
        </div>
    
    </>)
}