import ErrorLayout from '../../Layouts/ErrorLayout';

function Error403({ status, message }) {
  return (
    <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center">
                <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-blue-600 dark:text-blue-500">{status}</h1>
                <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Access denied.</p>
                <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">{message}</p>
                <button onClick={() => window.history.back()} className="inline-flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-blue-900 my-4">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                    Go Back to Previous Page
                </button>
            </div>   
        </div>
    </section>
  );
}

Error403.layout = page => <ErrorLayout children={page} title="403" />


export default Error403