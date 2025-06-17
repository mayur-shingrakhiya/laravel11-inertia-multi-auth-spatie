import { Head, Link, usePage } from "@inertiajs/react";

export default function LoginLayout({children}) {
    const pageName = usePage().props.pageName
    return (<>
        <Head>
            <link rel="icon" href="favicon.ico"></link>
            <title>{`${pageName ? `${pageName} | ` : ''}Inertia React`}</title>
        </Head>

        <div className="relative p-6 bg-white z-1 dark:bg-gray-900 sm:p-0">
            <div className="relative flex flex-col justify-center w-full h-screen dark:bg-gray-900 sm:p-0 lg:flex-row">
                <div className="flex flex-col flex-1 w-full lg:w-1/2">
                    <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
                        {children}
                    </div>
                </div>

                <div className="relative items-center hidden w-full h-full bg-brand-950 dark:bg-white/5 lg:grid lg:w-1/2">
                    <div className="flex items-center justify-center z-1">
                        <div className="absolute right-0 top-0 -z-1 w-full max-w-[250px] xl:max-w-[450px]">
                            <img src="assets/shape/grid-01.svg" alt="grid" />
                        </div>
                        <div className="absolute bottom-0 left-0 -z-1 w-full max-w-[250px] rotate-180 xl:max-w-[450px]" >
                            <img src="assets/shape/grid-01.svg" alt="grid" />
                        </div>

                        <div className="flex flex-col items-center max-w-xs">
                            <Link href="/" className="block mb-4">
                                <img src="assets/logo/auth-logo.svg" alt="Logo" />
                            </Link>
                            <p className="text-center text-gray-400 dark:text-white/60">
                                Free and Open-Source Tailwind CSS Admin Dashboard Template
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </>)
}