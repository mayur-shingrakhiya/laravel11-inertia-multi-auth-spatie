import { useState } from "react";
import ImgOne from "./IMG-LOGO/ImgOne";
import ImgTwo from "./IMG-LOGO/ImgTwo";
import ImgThree from "./IMG-LOGO/ImgThree";
import { Link, usePage } from "@inertiajs/react";
import SVG from "../SVG/SVG";

export default function Sidebar({sidebarToggle,asideRef}) {
    const usepageData = usePage();
    const [openDropdow , setOpenDropdow] = useState(null);
    function handleMenuClick(menu) {
        setOpenDropdow((prev) => (prev === menu ? null : menu));
    }
    return (<>
            <aside ref={asideRef}  className={`sidebar fixed top-0 left-0 z-9999 flex h-screen w-[290px] flex-col overflow-y-auto border-r border-gray-200 bg-white px-5 transition-all duration-300 lg:static lg:translate-x-0 dark:border-gray-800 dark:bg-black ${sidebarToggle ? 'translate-x-0 lg:w-[90px]' : '-translate-x-full'}`}>
            {/* SIDEBAR HEADER START */}
            <div className={`sidebar-header flex items-center gap-2 pt-8 pb-7 ${sidebarToggle ? 'justify-center' : 'justify-between'}`}>
                <a href="index.html">
                    <span className={`logo ${sidebarToggle ? 'hidden' : ''}`}>
                        <ImgOne></ImgOne>
                        <ImgTwo></ImgTwo>
                    </span>
                    <ImgThree sidebarToggle={sidebarToggle}></ImgThree>
                    
                </a>
            </div>
            {/* SIDEBAR HEADER END */}

            <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
                {/* Sidebar Menu START */}
                    <nav>
                        <div>
                            <ul className="mb-6 flex flex-col gap-4">
                                <li>
                                    <Link href={route('admin.dashboard')} className={`menu-item group ${usepageData.url == '/admin/dashboard' ?  'menu-item-active' : 'menu-item-inactive'}`}  >
                                        <SVG wiwidth="24" height="24" className={`${usepageData.url === '/admin/dashboard' ? `menu-item-icon-active`  : `menu-item-icon-inactive` }`} svgicon={`M8 2C8.41421 2 8.75 2.33579 8.75 2.75V3.75H15.25V2.75C15.25 2.33579 15.5858 2 16 2C16.4142 2 16.75 2.33579 16.75 2.75V3.75H18.5C19.7426 3.75 20.75 4.75736 20.75 6V9V19C20.75 20.2426 19.7426 21.25 18.5 21.25H5.5C4.25736 21.25 3.25 20.2426 3.25 19V9V6C3.25 4.75736 4.25736 3.75 5.5 3.75H7.25V2.75C7.25 2.33579 7.58579 2 8 2ZM8 5.25H5.5C5.08579 5.25 4.75 5.58579 4.75 6V8.25H19.25V6C19.25 5.58579 18.9142 5.25 18.5 5.25H16H8ZM19.25 9.75H4.75V19C4.75 19.4142 5.08579 19.75 5.5 19.75H18.5C18.9142 19.75 19.25 19.4142 19.25 19V9.75Z`}></SVG>
                                        <span className={`menu-item-text ${sidebarToggle ? 'lg:hidden' : ''}`} > Dashboard </span>
                                    </Link>
                                </li>

                               

                               
                                {/* Menu Item Dashboard */}
                                    <li>
                                        <a onClick={(e) => {e.preventDefault();handleMenuClick("role-permissions");}} href="#"  className={`menu-item group ${openDropdow === 'role-permissions' || usepageData.url.startsWith('/admin/role-permissions') ? `menu-item-active` : `menu-item-inactive`}`} >
                                            
                                            <svg className={`${ openDropdow === 'role-permissions' || usepageData.url.startsWith('/admin/role-permissions') ? 'menu-item-icon-active' : 'menu-item-icon-inactive'}`} width="24" height="24" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.338 1.59a61 61 0 0 0-2.837.856.48.48 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.7 10.7 0 0 0 2.287 2.233c.346.244.652.42.893.533q.18.085.293.118a1 1 0 0 0 .101.025 1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56"/>
                                                <path d="M9.5 6.5a1.5 1.5 0 0 1-1 1.415l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99a1.5 1.5 0 1 1 2-1.415z" fill="currentColor" />
                                            </svg>
                                            
                                            <span className={`menu-item-text ${sidebarToggle ? 'lg:hidden' : ''}`}> Role Permissions </span>
                                            
                                            <svg className={`menu-item-arrow ${openDropdow === 'role-permissions' || usepageData.url.startsWith('/admin/role-permissions') ? `menu-item-arrow-active` : `menu-item-arrow-inactive`} ${sidebarToggle ? 'lg:hidden' : ''}`} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.79175 7.39584L10.0001 12.6042L15.2084 7.39585" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </a>
                                         <div className={`translate transform overflow-hidden ${openDropdow === 'role-permissions' || usepageData.url.startsWith('/admin/role-permissions') ? `block` : `hidden`}`} >
                                            <ul className="menu-dropdown mt-2 flex flex-col gap-1 pl-9">
                                                <li>
                                                    <Link href={route('permissions.index')} className={`menu-dropdown-item group ${usepageData.url.startsWith('/admin/role-permissions/permissions') ? 'menu-dropdown-item-active' : 'menu-dropdown-item-inactive'}`}  >
                                                        Permissions
                                                    </Link>
                                                </li>

                                                <li>
                                                    <Link href={route('roles.index')} className={`menu-dropdown-item group ${usepageData.url.startsWith('/admin/role-permissions/roles') ? 'menu-dropdown-item-active' : 'menu-dropdown-item-inactive'}`}  >
                                                        Roles
                                                    </Link>
                                                </li>

                                                <li>
                                                    <Link href={route('admins.index')} className={`menu-dropdown-item group ${usepageData.url.startsWith('/admin/role-permissions/admins') ? 'menu-dropdown-item-active' : 'menu-dropdown-item-inactive'}`}  >
                                                        Admins
                                                    </Link>
                                                </li>

                                            </ul>
                                         </div>
                                    </li>
                                {/* Menu Item Dashboard */}

                                
                            </ul>
                        </div>
                    </nav>
                {/* Sidebar Menu END */}

            </div>
         </aside>
    </>)
}