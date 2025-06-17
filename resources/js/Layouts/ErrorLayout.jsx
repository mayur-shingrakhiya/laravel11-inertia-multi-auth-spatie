import { Head, Link, usePage } from "@inertiajs/react";

export default function ErrorLayout({children}) {
    const pageName = usePage().props.pageName
    return (<>
        <Head>
            <link rel="icon" href="favicon.ico"></link>
            <title>{`${pageName ? `${pageName} | ` : ''}Inertia React`}</title>
        </Head>

        <div className="relative z-1 flex min-h-screen flex-col items-center justify-center overflow-hidden p-6">
            <div className="absolute right-0 top-0 -z-1 w-full max-w-[250px] xl:max-w-[450px]">
                <img src="/assets/shape/grid-01.svg" alt="grid" />
            </div>
            <div className="absolute bottom-0 left-0 -z-1 w-full max-w-[250px] rotate-180 xl:max-w-[450px]">
                <img src="/assets/shape/grid-01.svg" alt="grid" />
            </div>
        
            {/* Centered Content */}
            <div className="mx-auto w-full max-w-[242px] text-center sm:max-w-[472px]">
                {children}
         </div>
         {/* Footer */}
         <p
            className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-sm text-gray-500 dark:text-gray-400"
            >
            &copy; <span id="year"></span> - TailAdmin
         </p>
      </div>


    </>)
}