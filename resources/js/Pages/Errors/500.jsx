import ErrorLayout from '../../Layouts/ErrorLayout';

function Error500({ status = 500, message = "Oops! Something went wrong on our end. Please try again later." }) {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-red-600 dark:text-red-500">{status}</h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
            Something Went Wrong
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            {message}
          </p>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-red-900 my-4"
          >
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

Error500.layout = page => <ErrorLayout children={page} title="500 - Internal Server Error" />;

export default Error500;
