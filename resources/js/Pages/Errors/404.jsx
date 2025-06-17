import ErrorLayout from '../../Layouts/ErrorLayout';
import { Link } from '@inertiajs/react';

function Error404({ status = 404, message = "The page you are looking for doesn't exist." }) {
  return (
    <main className="bg-white dark:bg-gray-900 min-h-screen flex items-center justify-center px-4">
      <section className="max-w-screen-sm text-center">
        <h1 className="mb-4 text-7xl font-extrabold tracking-tight text-blue-600 lg:text-9xl dark:text-blue-500">
          {status}
        </h1>
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl dark:text-white">
          Page Not Found
        </h2>
        <p className="mb-6 text-lg font-light text-gray-500 dark:text-gray-400">
          {message}
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
         
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-blue-600 border border-blue-600 hover:bg-blue-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg dark:border-blue-500 dark:text-blue-400 dark:hover:bg-gray-800 dark:focus:ring-blue-900"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M3 12l7-7M3 12l7 7" />
            </svg>
            Go to Homepage
          </Link>
        </div>
      </section>
    </main>
  );
}

// Attach Error Layout
Error404.layout = page => <ErrorLayout children={page} title="404 - Not Found" />;

export default Error404;
