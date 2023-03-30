
import React from 'react'


const portfolio = () => {
  return (
  <div>
    <div className="container mx-auto flex flex-wrap py-6 pt-10">
      <section className="w-full md:w-2/3 flex flex-col items-center px-3 pt-10">
        <article className="flex flex-col shadow my-4">
            <a href="#" className="hover:opacity-75">
                <img src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"/>
            </a>
            <div className="bg-white flex flex-col justify-start p-6 pt-10">
                <a href="#" className="text-blue-700 text-sm font-bold uppercase pb-4">Strong Portfolio</a>
                <a href="#" className="text-3xl font-bold hover:text-gray-700 pb-4">"Creating a Strong Portfolio"</a>
                <p className="text-sm pb-3">By <a href="#" className="font-semibold hover:text-gray-800">Christian Sanchez</a>, Published on March 29th, 2023</p>
                <a href="#" className="pb-6">Show your best work: A strong portfolio should showcase your best work. Be selective and only include pieces that demonstrate your skills and accomplishments.
                                            Consider your audience tailor your portfolio to the type of job or client you are seeking. Show pieces that are relevant to the industry or field you are interested in.
                                            Choose a consistent format, Your portfolio should have a consistent and professional format. Use the same font, colors, and layout for all of your pieces.
                                            Include a diversity of work, Your portfolio should show that you have a range of skills and abilities. Include a variety of projects with different styles and techniques.
                                            Show your process, Many employers and clients also want to see your creative process. Include sketches, ideas, and drafts that show how you came up with your final product.
                                            Keep it updated, Continuously update your portfolio with your latest work to show your growth and development as a creative professional.
                                            Get feedback from peers and mentors to improve your portfolio and identify areas for improvement. </a>
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
  )
}

export default portfolio