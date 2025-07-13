import Background from '../assets/ContactBackground.jpg';

export function Contact() {
    return (
        <div className="mx-auto px-4 py-10 flex flex-wrap items-center justify-center min-h-screen bg-white shadow-lg rounded-lg ">
            {/* Text Content - now properly centered */}
            <div className="flex flex-col items-center justify-center p-8 w-full md:w-1/2 md:border-r border-gray-600">
                <h1 className="text-4xl font-bold text-center text-green-900">Contact Us</h1>
                <p className="text-center mt-4 text-gray-600 text-xl">
                    We would love to hear from you!<br />
                    For inquiries, suggestions, or feedback, please reach out to us at:<br />
                   
            
                </p>
                <p className='text-center mt-4 text-gray-600 text-xl"'>
                    Lower East Side People Care<br />25 Rudgers Street, New York, NY 10002. <br /> (Between Madison Street and Henry Street) <br />
                     LESPCNYC@gmail.com
                </p>
            </div>

            {/* Image - properly constrained and centered */}
            <div className="flex justify-center p-4 w-full md:w-1/2">
                <img 
                    src={Background} 
                    alt="Member"
                    className="object-cover rounded-lg shadow-lg  max-h-[50vh] w-auto max-w-full"
                />
            </div>
        </div>
    );
}