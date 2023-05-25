import 'react'

const Plan = () => {
  return (
    <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4 '>
        {/* left side */}
        <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>

            <img className='row-span-3 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/4078072/pexels-photo-4078072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <img className='row-span-2 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/1078983/pexels-photo-1078983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <img className='row-span-2 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/1021074/pexels-photo-1021074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <img className='row-span-3 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/130879/pexels-photo-130879.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <img className='row-span-2 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/3601422/pexels-photo-3601422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            
        </div >
        {/* right side */}
        <div className='flex flex-col h-full justify-center'>
            <h3 className='text-5xl md:text-6xl font bold'>Plan Your Next Trip</h3>
            <p className='text-2xl py-6 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum labore totam  </p>
            <p className='pb-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex perspiciatis commodi delectus at dolorum ratione iste, aut sequi mollitia aliquam!</p>
          
          <div>
              <button className='border-black mr-4 hover:shadow-xl'>Learn More</button>
              <button className='bg-black text-white border-black hover:shadow-xl'>Book Your Trip</button>
          </div>
        </div>
    </div>
  )
}

export default Plan