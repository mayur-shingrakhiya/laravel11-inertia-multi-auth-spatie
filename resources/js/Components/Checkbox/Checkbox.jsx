export default function Checkbox({ label, checkboxId, name, checked, onChange }) {
  return (
    <label htmlFor={checkboxId} className="capitalize flex cursor-pointer items-center text-sm font-medium text-gray-700 select-none dark:text-gray-400">
        <div className="relative">
            <input type="checkbox" id={checkboxId} name={name} className="sr-only" checked={checked} onChange={onChange}/>
            <div className={`mr-3 flex h-5 w-5 items-center justify-center rounded-md border-[1.25px] hover:border-brand-500 dark:hover:border-brand-500 ${checked ? 'bg-brand-500 border-brand-500' : 'bg-transparent border-gray-300 dark:border-gray-700'}`}>
                <span className={checked ? '' : 'opacity-0'}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M11.6666 3.5L5.24992 9.91667L2.33325 7" stroke="white" strokeWidth="1.94437" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </span>
            </div>
        </div>
        {label}
    </label>
  );
}
