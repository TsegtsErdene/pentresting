import React from 'react'
import DashboardStatsGrid from '../components/DashboardStatsGrid'
import TransactionChart from '../components/TransactionChart'
import RecentOrders from '../components/RecentOrders'
import BuyerProfilePieChart from '../components/BuyerProfilePieChart'
import PopularProducts from '../components/PopularProducts'

export default function Dashboard() {
	return (
		   <form>
		   <div className="space-y-12">
			   <div className="border-b border-gray-900/10 pb-2">
				   <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
					   <div className="sm:col-span-4">
						   <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
							   URL Link
						   </label>
						   <div className="mt-2">
							   <input
								   id="email"
								   name="email"
								   hint
								   type="email"
								   autoComplete="email"
								   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							   />
						   </div>
					   </div>
					   <div className="mt-7 flex items-center gap-x-3">
						   <button
							   type="button"
							   htmlFor="file-upload"
							   className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
						   >
							   File Upload
							   <input id="file-upload" name="file-upload" type="file" className="sr-only" />
						   </button>
					   </div>
				   </div>
				   <fieldset>
					   <div className="mt-6 space-y-3  ">
						   <div className="relative flex gap-x-3">
							   <div className="flex h-6 items-center">
								   <input
									   id="shoden"
									   name="shoden"
									   type="checkbox"
									   className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
								   />
							   </div>
							   <div className="text-sm leading-6">
								   <label htmlFor="comments" className="font-medium text-gray-900">
									   Shoden
								   </label>
							   </div>
						   </div>
						   <div className="relative flex gap-x-3">
							   <div className="flex h-6 items-center">
								   <input
									   id="google"
									   name="google"
									   type="checkbox"
									   className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
								   />
							   </div>
							   <div className="text-sm leading-6">
								   <label htmlFor="comments" className="font-medium text-gray-900">
									   Google
								   </label>
							   </div>
						   </div>
						   <div className="relative flex gap-x-3">
							   <div className="flex h-6 items-center">
								   <input
									   id="searchdir"
									   name="searchdir"
									   type="checkbox"
									   className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
								   />
							   </div>
							   <div className="text-sm leading-6">
								   <label htmlFor="comments" className="font-medium text-gray-900">
									   Search Directories
								   </label>
							   </div>
						   </div>
						   <div className="relative flex gap-x-3">
							   <div className="flex h-6 items-center">
								   <input
									   id="virustotal"
									   name="virustotal"
									   type="checkbox"
									   className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
								   />
							   </div>
							   <div className="text-sm leading-6">
								   <label htmlFor="virustotal" className="font-medium text-gray-900">
									   Virus Total
								   </label>
							   </div>
						   </div>
						   <div className="relative flex gap-x-3">
							   <div className="flex h-6 items-center">
								   <input
									   id="adminpagefind"
									   name="adminpagefind"
									   type="checkbox"
									   className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
								   />
							   </div>
							   <div className="text-sm leading-6">
								   <label htmlFor="adminpagefind" className="font-medium text-gray-900">
									   Admin Page Find
								   </label>
							   </div>
						   </div>
					   </div>
				   </fieldset>
				   <div className="mt-6 flex items-center justify-end gap-x-6">
			   <button
				   type="submit"
				   className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
			   >
				   Scan
			   </button>
		   </div>
			   </div>
		   </div>

		<RecentOrders />
	   </form>
	)
}
