import Link from 'next/link'

export default  function Profile() {
    return <figure className=" md:flex bg-gray-200 rounded-xl p-8 md:p-0 shadow-2xl  site-text-main dark:bg-gray-800 ">
        <img className="w-32 h-32 md:w-48 md:h-auto md:rounded-full rounded-full mx-auto shadow-2xl" src="adem_cilgin.jpg" alt=""
             width="384" height="512"/>
            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                <blockquote>
                    <p className="text-lg font-semibold">
                        “Tailwind CSS is the only framework that I've seen scale
                        on large teams. It’s easy to customize, adapts to any design,
                        and the build size is tiny.”
                    </p>
                </blockquote>
                <figcaption className="font-medium">
                    <div className="text-cyan-600">
                        Adem Çılgın
                    </div>
                    <div className="text-gray-500">
                        Staff Engineer, Turkey
                    </div>
                    <div className="text-gray-50 b  justify-center items-center w-1/4">
                        <Link href="/room" >
                                <button className="bg-pink-500 hover:bg-pink-400 w-auto justify-center items-center text-center w-auto  rounded-xl mt-2 p-3"> Join Chat With Me </button>  
                            
                        </Link>
                    </div>
                </figcaption>
            </div>
    </figure>

}