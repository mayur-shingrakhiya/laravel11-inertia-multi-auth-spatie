import { Link, useForm} from "@inertiajs/react"
import DataTable from 'datatables.net-react';
import DT from 'datatables.net-dt';
import DTResponsive from 'datatables.net-responsive-dt';
import $ from 'jquery';
import { useEffect, useRef, useState } from "react";
DataTable.use(DT);
DataTable.use(DTResponsive);
export default function List() {
    const tableRef = useRef(null);
    const datatable = useRef(null);

    useEffect(() => {
        datatable.current = $(tableRef.current).DataTable({
            scrollX: true, // Enables horizontal scroll

            ajax: {
                url: route('permissions.getData'),
                type: 'GET',
                dataSrc: 'data'
            },
            processing: true,
            serverSide: true,
            columns: [
                { data: 'DT_RowIndex', name: 'DT_RowIndex',title: '#', orderable: false, searchable: false, className: 'text-left no-sort' },
                { data: 'name', title: 'Name' },
                { data: 'action', title: 'Action' }
            ],
            createdRow: function (row, data, dataIndex) {
                $('td', row).addClass('text-theme-sm text-gray-700 dark:text-gray-400');
                $('.dt-empty-footer').addClass('overflow-hidden rounded-xl border border-gray-200 bg-white pt-4 dark:border-gray-800 dark:bg-white/[0.03]');
            },

            initComplete: function () {
                $('.dt-input').addClass('dark:bg-dark-900 h-9 rounded-lg border border-gray-300 py-2 pl-3 pr-8 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800');
                $('.dt-layout-row').addClass('text-gray-500 dark:text-gray-400');
                $('.dt-empty-footer').addClass('overflow-hidden rounded-xl border border-gray-200 bg-white pt-4 dark:border-gray-800 dark:bg-white/[0.03]');
            }
        });

        return () => {
            if (datatable.current) {
                datatable.current.destroy();
            }
        };
    }, []);

    window.reloadUserTable = () => {
        if (datatable.current) {
            datatable.current.ajax.reload();
        }
    };
    
    return (<>
            <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]" >
                <div className="px-5 py-4 sm:px-6 sm:py-5">
                    <div className="flex flex-col w-full gap-5 sm:justify-between xl:flex-row xl:items-center">
                        <h3 className="text-base font-medium text-gray-800 dark:text-white/90">
                            List
                        </h3>

                        <Link href={route('permissions.create')} className="inline-flex items-center gap-2 rounded-lg bg-brand-500 px-4 py-2.5 text-sm font-medium text-white shadow-theme-xs hover:bg-brand-600">
                            Add Permission 
                            <svg className="fill-current" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M9.2502 4.99951C9.2502 4.5853 9.58599 4.24951 10.0002 4.24951C10.4144 4.24951 10.7502 4.5853 10.7502 4.99951V9.24971H15.0006C15.4148 9.24971 15.7506 9.5855 15.7506 9.99971C15.7506 10.4139 15.4148 10.7497 15.0006 10.7497H10.7502V15.0001C10.7502 15.4143 10.4144 15.7501 10.0002 15.7501C9.58599 15.7501 9.2502 15.4143 9.2502 15.0001V10.7497H5C4.58579 10.7497 4.25 10.4139 4.25 9.99971C4.25 9.5855 4.58579 9.24971 5 9.24971H9.2502V4.99951Z"fill=""/>
                            </svg>
                        </Link>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table ref={tableRef} className="display text-sm text-left whitespace-nowrap" ></table> 
                </div>

            </div>
    </>)
}