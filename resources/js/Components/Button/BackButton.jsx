import { Link } from "@inertiajs/react";

export default function BackButton({href,text}) {
    return(<>
        <Link href={href} className="flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
            {text}
        </Link>
    </>)
}