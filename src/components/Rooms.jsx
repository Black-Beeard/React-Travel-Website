import 'react'

const Rooms = () => {
  return (
    <div className='max-w-[1400px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4 '>
        <div className='lg:top-20 lg:col-span-1 col-span-2 '>
            <h3 className='text-2xl lg:text-4xl font-bold '>Fine Interior Rooms</h3>
            <p className='pt-4 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus veritatis quidem eius provident inventore laboriosam nesciunt adipisci sapiente dolor. Cum error, vitae perferendis doloremque voluptas ipsum quaerat voluptatibus quas incidunt officia quod cumque facilis placeat blanditiis, similique libero nihil ducimus?</p>
        </div>
        <div className='grid grid-cols-2 col-span-2 gap-2 '>

            <img className='object-cover h-full w-full ' src="https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

            <img className='object-cover h-full w-full ' src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

            <img className='object-cover h-full w-full row-span-2 ' src="https://images.pexels.com/photos/2598638/pexels-photo-2598638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

            <img className='object-cover h-full w-full ' src="https://images.pexels.com/photos/376531/pexels-photo-376531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

            <img className='object-cover h-full w-full ' src="https://images.pexels.com/photos/2121120/pexels-photo-2121120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
    </div>
  )
}

export default Rooms