import img from '../../assets/avataaars.svg'
export default function Home() {
  return <>
  <div className='flex justify-center items-center h-screen mb-[-20px] bg-[#1abc9c]'>
    <div className="container flex flex-col items-center justify-center space-y-5 text-white pt-9">
      <img className='w-[250px] mb-3' src={img} alt="" />
      <h2 className='font-bold text-4xl'>START FRAMEWORK</h2>
      <div className='row justify-between space-x-4 items-center	'>
        <div className='h-[4px] w-[80px] bg-white'></div>
        <i className="fa-solid fa-star"></i>
        <div className='h-[4px] w-[80px] bg-white'></div>
      </div>
      <p>Graphic Artist - Web Designer - Illustrator</p>
    </div>
  </div>
  </>;
}
