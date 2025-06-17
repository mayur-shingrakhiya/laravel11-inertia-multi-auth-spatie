import MainLayout from "../../Layouts/MainLayout"

export default function Index() {
    return  (<>
            <div className="grid grid-cols-12 gap-4 md:gap-6">
                <div className="col-span-12">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 xl:grid-cols-4">
                        <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]">
                            <p className="text-theme-sm text-gray-500 dark:text-gray-400"> Unique Visitors</p>
                            <div className="mt-3 flex items-end justify-between">
                                <div>
                                    <h4 className="text-2xl font-bold text-gray-800 dark:text-white/90">24.7K</h4>
                                </div>
                                
                                <div className="flex items-center gap-1">
                                    <span className="flex items-center gap-1 rounded-full bg-success-50 px-2 py-0.5 text-theme-xs font-medium text-success-600 dark:bg-success-500/15 dark:text-success-500">+20%</span>
                                    <span className="text-theme-xs text-gray-500 dark:text-gray-400"> Vs last month </span>
                                </div>
                            </div>
                        </div>
                    
                        <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]">
                            <p className="text-theme-sm text-gray-500 dark:text-gray-400">
                                Total Pageviews
                            </p>
                            <div className="mt-3 flex items-end justify-between">
                                <div>
                                    <h4 className="text-2xl font-bold text-gray-800 dark:text-white/90">55.9K</h4>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span className="flex items-center gap-1 rounded-full bg-success-50 px-2 py-0.5 text-theme-xs font-medium text-success-600 dark:bg-success-500/15 dark:text-success-500">+4%</span>
                                    <span className="text-theme-xs text-gray-500 dark:text-gray-400">Vs last month</span>
                                </div>
                            </div>
                        </div>
                    
                        <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]">
                            <p className="text-theme-sm text-gray-500 dark:text-gray-400">Bounce Rate</p>
                            
                            <div className="mt-3 flex items-end justify-between">
                                <div>
                                    <h4 className="text-2xl font-bold text-gray-800 dark:text-white/90">54%</h4>
                                </div>
                                
                                <div className="flex items-center gap-1">
                                    <span className="flex items-center gap-1 rounded-full bg-error-50 px-2 py-0.5 text-theme-xs font-medium text-error-600 dark:bg-error-500/15 dark:text-error-500"> -1.59%</span>
                                    <span className="text-theme-xs text-gray-500 dark:text-gray-400"> Vs last month</span>
                                </div>
                            </div>
                        </div>
                    
                        <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]">
                            <p className="text-theme-sm text-gray-500 dark:text-gray-400">Visit Duration</p>
                            <div className="mt-3 flex items-end justify-between">
                                <div>
                                    <h4 className="text-2xl font-bold text-gray-800 dark:text-white/90">2m 56s</h4>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span className="flex items-center gap-1 rounded-full bg-success-50 px-2 py-0.5 text-theme-xs font-medium text-success-600 dark:bg-success-500/15 dark:text-success-500"> +7% </span>
                                    <span className="text-theme-xs text-gray-500 dark:text-gray-400"> Vs last month</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

    </>)
}
