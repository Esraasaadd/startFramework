export default function About() {
  return (
    <>
      <div className="flex justify-center items-center h-screen mb-[-20px] bg-[#1abc9c]">
        <div className="container flex flex-col items-center justify-center space-y-5 text-white pt-9 mt-[-150px] md:mt-0">
          <h2 className="font-bold text-4xl">ABOUT COMPONENT</h2>
          <div className="flex justify-between space-x-4 items-center	">
            <div className="h-[4px] w-[80px] bg-white"></div>
            <i className="fa-solid fa-star"></i>
            <div className="h-[4px] w-[80px] bg-white"></div>
          </div>
          <div className="container w-3/4">
            <div className="row flex-col md:flex-row space-x-3 space-y-7 md:space-y-0">
              <div className="md:w-1/2">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </div>
              <div className="md:w-1/2	">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
