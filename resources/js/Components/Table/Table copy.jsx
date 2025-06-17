import SVG from "../SVG/SVG";

export default function Table({columns}) {
    return (<>
    {/* table header start */}
    
    <div className="grid grid-cols-12 border-t border-gray-200 dark:border-gray-800" >
        <div className="col-span-2 flex items-center border-r border-gray-200 px-4 py-3 dark:border-gray-800">
            <div className="flex w-full cursor-pointer items-center justify-between">
                <p className="text-theme-xs font-medium text-gray-700 dark:text-gray-400"> User </p>
                <span className="flex flex-col gap-0.5">
                    <SVG className="fill-gray-300 dark:fill-gray-700" svgicon={`M4.40962 0.585167C4.21057 0.300808 3.78943 0.300807 3.59038 0.585166L1.05071 4.21327C0.81874 4.54466 1.05582 5 1.46033 5H6.53967C6.94418 5 7.18126 4.54466 6.94929 4.21327L4.40962 0.585167Z`}></SVG>
                    <SVG className="fill-gray-300 dark:fill-gray-700" svgicon={`M4.40962 4.41483C4.21057 4.69919 3.78943 4.69919 3.59038 4.41483L1.05071 0.786732C0.81874 0.455343 1.05582 0 1.46033 0H6.53967C6.94418 0 7.18126 0.455342 6.94929 0.786731L4.40962 4.41483Z`}></SVG>
                </span>
            </div>
        </div>
        <div className="col-span-2 flex items-center border-r border-gray-200 px-4 py-3 dark:border-gray-800">
            <div className="flex w-full cursor-pointer items-center justify-between">
                <p className="text-theme-xs font-medium text-gray-700 dark:text-gray-400"> Position </p>
                <span className="flex flex-col gap-0.5">
                    <SVG className="fill-gray-300 dark:fill-gray-700" svgicon={`M4.40962 0.585167C4.21057 0.300808 3.78943 0.300807 3.59038 0.585166L1.05071 4.21327C0.81874 4.54466 1.05582 5 1.46033 5H6.53967C6.94418 5 7.18126 4.54466 6.94929 4.21327L4.40962 0.585167Z`}></SVG>
                    <SVG className="fill-gray-300 dark:fill-gray-700" svgicon={`M4.40962 4.41483C4.21057 4.69919 3.78943 4.69919 3.59038 4.41483L1.05071 0.786732C0.81874 0.455343 1.05582 0 1.46033 0H6.53967C6.94418 0 7.18126 0.455342 6.94929 0.786731L4.40962 4.41483Z`}></SVG>
                </span>
            </div>
        </div>
        <div className="col-span-2 flex items-center border-r border-gray-200 px-4 py-3 dark:border-gray-800">
            <div className="flex w-full cursor-pointer items-center justify-between">
                <p className="text-theme-xs font-medium text-gray-700 dark:text-gray-400" > Office </p>
                <span className="flex flex-col gap-0.5">
                    <SVG className="fill-gray-300 dark:fill-gray-700" svgicon={`M4.40962 0.585167C4.21057 0.300808 3.78943 0.300807 3.59038 0.585166L1.05071 4.21327C0.81874 4.54466 1.05582 5 1.46033 5H6.53967C6.94418 5 7.18126 4.54466 6.94929 4.21327L4.40962 0.585167Z`}></SVG>
                    <SVG className="fill-gray-300 dark:fill-gray-700" svgicon={`M4.40962 4.41483C4.21057 4.69919 3.78943 4.69919 3.59038 4.41483L1.05071 0.786732C0.81874 0.455343 1.05582 0 1.46033 0H6.53967C6.94418 0 7.18126 0.455342 6.94929 0.786731L4.40962 4.41483Z`}></SVG>
                </span>
            </div>
        </div>
        <div className="col-span-1 flex items-center border-r border-gray-200 px-4 py-3 dark:border-gray-800">
            <div className="flex w-full cursor-pointer items-center justify-between">
                <p className="text-theme-xs font-medium text-gray-700 dark:text-gray-400"> Age </p>
                <span className="flex flex-col gap-0.5">
                    <SVG className="fill-gray-300 dark:fill-gray-700" svgicon={`M4.40962 0.585167C4.21057 0.300808 3.78943 0.300807 3.59038 0.585166L1.05071 4.21327C0.81874 4.54466 1.05582 5 1.46033 5H6.53967C6.94418 5 7.18126 4.54466 6.94929 4.21327L4.40962 0.585167Z`}></SVG>
                    <SVG className="fill-gray-300 dark:fill-gray-700" svgicon={`M4.40962 4.41483C4.21057 4.69919 3.78943 4.69919 3.59038 4.41483L1.05071 0.786732C0.81874 0.455343 1.05582 0 1.46033 0H6.53967C6.94418 0 7.18126 0.455342 6.94929 0.786731L4.40962 4.41483Z`}></SVG>
                </span>
            </div>
        </div>
        <div className="col-span-2 flex items-center border-r border-gray-200 px-4 py-3 dark:border-gray-800" >
            <div className="flex w-full cursor-pointer items-center justify-between">
                <p className="text-theme-xs font-medium text-gray-700 dark:text-gray-400" > Start date </p>
                <span className="flex flex-col gap-0.5">
                    <SVG className="fill-gray-300 dark:fill-gray-700" svgicon={`M4.40962 0.585167C4.21057 0.300808 3.78943 0.300807 3.59038 0.585166L1.05071 4.21327C0.81874 4.54466 1.05582 5 1.46033 5H6.53967C6.94418 5 7.18126 4.54466 6.94929 4.21327L4.40962 0.585167Z`}></SVG>
                    <SVG className="fill-gray-300 dark:fill-gray-700" svgicon={`M4.40962 4.41483C4.21057 4.69919 3.78943 4.69919 3.59038 4.41483L1.05071 0.786732C0.81874 0.455343 1.05582 0 1.46033 0H6.53967C6.94418 0 7.18126 0.455342 6.94929 0.786731L4.40962 4.41483Z`}></SVG>
                </span>
            </div>
        </div>
        <div className="col-span-2 flex items-center border-r border-gray-200 px-4 py-3 dark:border-gray-800" >
            <div className="flex w-full cursor-pointer items-center justify-between">
                <p className="text-theme-xs font-medium text-gray-700 dark:text-gray-400" > Salary </p>
                <span className="flex flex-col gap-0.5">
                    <SVG className="fill-gray-300 dark:fill-gray-700" svgicon={`M4.40962 0.585167C4.21057 0.300808 3.78943 0.300807 3.59038 0.585166L1.05071 4.21327C0.81874 4.54466 1.05582 5 1.46033 5H6.53967C6.94418 5 7.18126 4.54466 6.94929 4.21327L4.40962 0.585167Z`}></SVG>
                    <SVG className="fill-gray-300 dark:fill-gray-700" svgicon={`M4.40962 4.41483C4.21057 4.69919 3.78943 4.69919 3.59038 4.41483L1.05071 0.786732C0.81874 0.455343 1.05582 0 1.46033 0H6.53967C6.94418 0 7.18126 0.455342 6.94929 0.786731L4.40962 4.41483Z`}></SVG>
                </span>
            </div>
        </div>
        <div className="col-span-1 flex items-center border-r border-gray-200 px-4 py-3 dark:border-gray-800">
            <div className="flex w-full cursor-pointer items-center justify-between">
                <p className="text-theme-xs font-medium text-gray-700 dark:text-gray-400"> Action </p>
                <span className="flex flex-col gap-0.5">
                    <SVG className="fill-gray-300 dark:fill-gray-700" svgicon={`M4.40962 0.585167C4.21057 0.300808 3.78943 0.300807 3.59038 0.585166L1.05071 4.21327C0.81874 4.54466 1.05582 5 1.46033 5H6.53967C6.94418 5 7.18126 4.54466 6.94929 4.21327L4.40962 0.585167Z`}></SVG>
                    <SVG className="fill-gray-300 dark:fill-gray-700" svgicon={`M4.40962 4.41483C4.21057 4.69919 3.78943 4.69919 3.59038 4.41483L1.05071 0.786732C0.81874 0.455343 1.05582 0 1.46033 0H6.53967C6.94418 0 7.18126 0.455342 6.94929 0.786731L4.40962 4.41483Z`}></SVG>
                </span>
            </div>
        </div>
    </div>
    {/* table header end */}
    {/* table body start */}
    <template x-for="person in paginatedData">
        <div className="grid grid-cols-12 border-t border-gray-100 dark:border-gray-800">
            <div className="col-span-2 flex items-center border-r border-gray-100 px-4 py-[17.5px] dark:border-gray-800">
                <p className="block text-theme-sm font-medium text-gray-800 dark:text-white/90" x-text="person.name" > Lindsey Curtis </p>
            </div>
            <div className="col-span-2 flex items-center border-r border-gray-100 px-4 py-[17.5px] dark:border-gray-800" >
                <p className="text-theme-sm text-gray-700 dark:text-gray-400" x-text="person.position" ></p>
            </div>
            <div className="col-span-2 flex items-center border-r border-gray-100 px-4 py-[17.5px] dark:border-gray-800" >
                <p className="text-theme-sm text-gray-700 dark:text-gray-400" x-text="person.office" ></p>
            </div>
            <div className="col-span-1 flex items-center border-r border-gray-100 px-4 py-[17.5px] dark:border-gray-800" >
                <p className="text-theme-sm text-gray-700 dark:text-gray-400" x-text="person.age" ></p>
            </div>
            <div className="col-span-2 flex items-center border-r border-gray-100 px-4 py-[17.5px] dark:border-gray-800">
                <p className="text-theme-sm text-gray-700 dark:text-gray-400" x-text="person.startDate"></p>
            </div>
            <div className="col-span-2 flex items-center border-r border-gray-100 px-4 py-[17.5px] dark:border-gray-800">
                <p className="text-theme-sm text-gray-700 dark:text-gray-400" x-text="person.salary"></p>
            </div>
            <div className="col-span-1 flex items-center px-4 py-[17.5px]">
                <div className="flex w-full items-center gap-2">
                    <button className="text-gray-500 hover:text-error-500 dark:text-gray-400 dark:hover:text-error-500">
                        <SVG svgicon={`M7.04142 4.29199C7.04142 3.04935 8.04878 2.04199 9.29142 2.04199H11.7081C12.9507 2.04199 13.9581 3.04935 13.9581 4.29199V4.54199H16.1252H17.166C17.5802 4.54199 17.916 4.87778 17.916 5.29199C17.916 5.70621 17.5802 6.04199 17.166 6.04199H16.8752V8.74687V13.7469V16.7087C16.8752 17.9513 15.8678 18.9587 14.6252 18.9587H6.37516C5.13252 18.9587 4.12516 17.9513 4.12516 16.7087V13.7469V8.74687V6.04199H3.8335C3.41928 6.04199 3.0835 5.70621 3.0835 5.29199C3.0835 4.87778 3.41928 4.54199 3.8335 4.54199H4.87516H7.04142V4.29199ZM15.3752 13.7469V8.74687V6.04199H13.9581H13.2081H7.79142H7.04142H5.62516V8.74687V13.7469V16.7087C5.62516 17.1229 5.96095 17.4587 6.37516 17.4587H14.6252C15.0394 17.4587 15.3752 17.1229 15.3752 16.7087V13.7469ZM8.54142 4.54199H12.4581V4.29199C12.4581 3.87778 12.1223 3.54199 11.7081 3.54199H9.29142C8.87721 3.54199 8.54142 3.87778 8.54142 4.29199V4.54199ZM8.8335 8.50033C9.24771 8.50033 9.5835 8.83611 9.5835 9.25033V14.2503C9.5835 14.6645 9.24771 15.0003 8.8335 15.0003C8.41928 15.0003 8.0835 14.6645 8.0835 14.2503V9.25033C8.0835 8.83611 8.41928 8.50033 8.8335 8.50033ZM12.9168 9.25033C12.9168 8.83611 12.581 8.50033 12.1668 8.50033C11.7526 8.50033 11.4168 8.83611 11.4168 9.25033V14.2503C11.4168 14.6645 11.7526 15.0003 12.1668 15.0003C12.581 15.0003 12.9168 14.6645 12.9168 14.2503V9.25033Z`}></SVG>
                    </button>
                    <button className="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white/90" > 
                        <SVG svgicon={`M17.0911 3.53206C16.2124 2.65338 14.7878 2.65338 13.9091 3.53206L5.6074 11.8337C5.29899 12.1421 5.08687 12.5335 4.99684 12.9603L4.26177 16.445C4.20943 16.6931 4.286 16.9508 4.46529 17.1301C4.64458 17.3094 4.90232 17.3859 5.15042 17.3336L8.63507 16.5985C9.06184 16.5085 9.45324 16.2964 9.76165 15.988L18.0633 7.68631C18.942 6.80763 18.942 5.38301 18.0633 4.50433L17.0911 3.53206ZM14.9697 4.59272C15.2626 4.29982 15.7375 4.29982 16.0304 4.59272L17.0027 5.56499C17.2956 5.85788 17.2956 6.33276 17.0027 6.62565L16.1043 7.52402L14.0714 5.49109L14.9697 4.59272ZM13.0107 6.55175L6.66806 12.8944C6.56526 12.9972 6.49455 13.1277 6.46454 13.2699L5.96704 15.6283L8.32547 15.1308C8.46772 15.1008 8.59819 15.0301 8.70099 14.9273L15.0436 8.58468L13.0107 6.55175Z`}></SVG>
                    </button>
                </div>
            </div>
        </div>
    </template>
    {/* table body end */}
    {/* Pagination Controls  */}
    <div className="border-t border-gray-100 py-4 pl-[18px] pr-4 dark:border-gray-800">
        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between">
            <div className="flex items-center justify-center gap-0.5 pb-4 xl:justify-normal xl:pt-0">
                <button className="mr-2.5 flex items-center justify-center rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 text-gray-700 shadow-theme-xs hover:bg-gray-50 disabled:opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03]">
                    Previous
                </button>
                <button className="text-gray-700 dark:text-gray-400 flex h-10 w-10 items-center justify-center rounded-lg text-sm font-medium hover:bg-blue-500/[0.08] hover:text-brand-500 dark:hover:text-brand-500"> 1 </button>
                <template x-if="currentPage > 3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-blue-500/[0.08] hover:text-brand-500 dark:hover:text-brand-500" >...</span>
                </template>
                <template x-for="page in pagesAroundCurrent">
                    <button className="flex h-10 w-10 items-center justify-center rounded-lg text-sm font-medium hover:bg-blue-500/[0.08] hover:text-brand-500 dark:hover:text-brand-500">
                        <span x-text="page"></span>
                    </button>
                </template>
                <template x-if="currentPage < totalPages - 2">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg text-sm font-medium text-gray-700 hover:bg-blue-500/[0.08] hover:text-brand-500 dark:text-gray-400 dark:hover:text-brand-500" >...</span>
                </template>
                <button className="ml-2.5 flex items-center justify-center rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 text-gray-700 shadow-theme-xs hover:bg-gray-50 disabled:opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03]" > Next </button>
            </div>
            <p className="border-t border-gray-100 pt-3 text-center text-sm font-medium text-gray-500 dark:border-gray-800 dark:text-gray-400 xl:border-t-0 xl:pt-0 xl:text-left" >
                Showing <span x-text="startEntry"></span> to
                <span x-text="endEntry"></span> of
                <span x-text="totalEntries"></span> entries
            </p>
        </div>
    </div>
        {/* Pagination Controls  */}
    </>)
}