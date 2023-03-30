import React from 'react'

const about = () => {
  return (
    <div>
        <div className="container px-4 md:px-0 max-w-6xl mx-auto mt-10 py-10">
            <div className="mx-0 sm:mx-6">
                <div className="flex h-full bg-white rounded overflow-hidden shadow-lg pt-10 mt-10">
                        <a href="post.html" className="flex flex-wrap no-underline hover:no-underline">
                            <div className="w-full md:w-2/3 rounded-t">	
                                <img src="https://source.unsplash.com/collection/494263/800x600"/>
                            </div>

                            <div className="w-full md:w-1/3 flex flex-col flex-grow flex-shrink">
                                <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                                    <p className="w-full text-gray-600 text-xs md:text-lg pt-6 px-6">About Us</p>
                                    <br></br>
                                    <div className="w-full font-bold text-xl text-gray-900 px-6">👋 Welcome to FreelancePH</div>
                                    <br></br>
                                    <p className="text-gray-800 font-serif text-base px-6 mb-5">
                                    We are thrilled that you have taken some time to get acquainted with our brand. Here you will find important information about our company, values, mission, and the
                                    people behind it that make us who we are. We believe that by getting to know us, you'll better understand what drives us to be the best in our industry. Our story is 
                                    one of passion, dedication, and innovation – and we are excited to share it with you.
                                    </p>
                                </div>
                            </div>
                        </a>
                 </div>
            </div>
            <br></br>
            <br></br>
            <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto grid max-w-7xl gap-y-20 gap-x-8 px-6 lg:px-8 xl:grid-cols-3">
                    <div className="max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our Team</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">"Get to know the faces behind our success"</p>
                </div>
            <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                <li>
                    <div className="flex items-center gap-x-6">
                        <img className="h-16 w-16 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                        <div>
                            <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Christian Sanchez</h3>
                            <p className="text-sm font-semibold leading-6 text-indigo-600">Co-Founder / CEO</p>
                        </div>
                    </div>
                </li>  
                <li>
                    <div className="flex items-center gap-x-6">
                        <img className="h-16 w-16 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                        <div>
                            <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Albert Kico Lim</h3>
                            <p className="text-sm font-semibold leading-6 text-indigo-600">Co-Founder / CEO</p>
                        </div>
                    </div>
                </li>  
                <li>
                    <div className="flex items-center gap-x-6">
                        <img className="h-16 w-16 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                        <div>
                            <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Eliezer Banares</h3>
                            <p className="text-sm font-semibold leading-6 text-indigo-600">Co-Founder / CEO</p>
                        </div>
                    </div>
                </li>  
                <li>
                    <div className="flex items-center gap-x-6">
                        <img className="h-16 w-16 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                        <div>
                            <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Jonnely Dela Torre</h3>
                            <p className="text-sm font-semibold leading-6 text-indigo-600">Co-Founder / CEO</p>
                        </div>
                    </div>
                </li>  
            </ul>       
        </div>        
        </div>
        </div> 
    </div>
  )
}

export default about