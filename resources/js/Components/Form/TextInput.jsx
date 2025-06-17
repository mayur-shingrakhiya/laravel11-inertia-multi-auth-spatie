export default function TextInput({name, type, error, placeholder, ...props}) {
    return (<>
        <input  
        type={type} 
        id={name} 
        name={name} 
        placeholder={placeholder} 
        {...props}
       
        className={`dark:bg-dark-900 h-11 w-full rounded-lg border ${error ? `border-error-300` : `border-gray-300`}  bg-transparent py-2.5 pl-4 pr-11 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800`}/>
    </>)
}