import React from 'react'

const marketing = () => {
  return (
  <div>
    <div>
    <div className="container mx-auto flex flex-wrap py-6 pt-10">
      <section className="w-full md:w-2/3 flex flex-col items-center px-3 pt-10">
        <article className="flex flex-col shadow my-4">
            <a href="#" className="hover:opacity-75">
                <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"/>
            </a>
            <div className="bg-white flex flex-col justify-start p-6 pt-10">
                <a href="#" className="text-blue-700 text-sm font-bold uppercase pb-4">Marketing</a>
                <a href="#" className="text-3xl font-bold hover:text-gray-700 pb-4">"Market Your Own Self"</a>
                <p className="text-sm pb-3">By <a href="#" className="font-semibold hover:text-gray-800">Albert Kico Lim</a>, Published on March 29th, 2023</p>
                <a href="#" className="pb-6">It's important to market yourself to potential clients. Utilize social media platforms to showcase your skills, join online freelance directories, and create a website to promote your services.
                                            Develop Your Personal Brand: Determine who you are, what you represent, and what sets you apart from others. Once you have established your brand, consistently reflect it in all aspects of your professional life.
                                            Build a Strong Social Media Presence: Establishing a strong social media presence is crucial for marketing yourself in today's digital era. Make sure to regularly engage with your followers, and create content that is engaging and informative.
                                            Attend Networking Events: Attend events related to your field or industry, and network with people who can help you further your career. Carry business cards and be prepared to discuss your skills and qualifications.
                                            Ask for Referrals: Ask current and past colleagues for referrals or recommendations. This is a great way to showcase your talents and connect with others who may be able to help your career.
                                            Showcase Your Skills: If you have a portfolio or examples of your work, showcase them online or in a physical portfolio. This will allow potential employers or clients to see your abilities firsthand. </a>
                            <br></br>
                            <button><a href="/Jonnely/Support/blog" className="uppercase text-gray-800 hover:text-black">Go Back <i className="fas fa-arrow-right"></i></a></button>
            </div>
            
        </article>
      </section>
      <aside className="w-full md:w-1/3 flex flex-col items-center px-3 pt-10">

            <div className="w-full bg-white shadow flex flex-col my-4 p-6">
                <p className="text-xl font-semibold pb-5">About Us</p>
                <p className="pb-2">We are thrilled that you have taken some time to get acquainted with our brand. Here you will find important information about our company, values, mission, and the people behind it that make us who we are. We believe that by getting to know us, you'll better understand what drives us to be the best in our industry. Our story is one of passion, dedication, and innovation – and we are excited to share it with you.</p>
                <a href="#" className="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-4">
                    Get to know us
                </a>
            </div>

            <div className="w-full bg-white shadow flex flex-col my-4 p-6">
                <p className="text-xl font-semibold pb-5">Instagram</p>
                <div className="grid grid-cols-3 gap-3">
                    <img className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=1"/>
                    <img className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=2"/>
                    <img className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=3"/>
                    <img className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=4"/>
                    <img className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=5"/>
                    <img className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=6"/>
                    <img className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=7"/>
                    <img className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=8"/>
                    <img className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=9"/>
                </div>
                <a href="#" className="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-6">
                    <i className="fab fa-instagram mr-2"></i> Follow @dgrzyb
                </a>
            </div>
        </aside>
    </div>
  </div>

    </div>
  )
}

export default marketing