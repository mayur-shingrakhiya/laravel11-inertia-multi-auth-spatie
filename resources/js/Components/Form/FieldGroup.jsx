export default function FieldGroup({label, htmlFor , error, required , children}) {
    return (<>
    <div>
        {label && (<label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
            {label} {required && (<span className="text-error-500">*</span>)}
        </label>)}
        {children}
        {error && (
            <p className="text-theme-xs text-error-500">{error}</p>
        )}
    </div>
    </>)
}