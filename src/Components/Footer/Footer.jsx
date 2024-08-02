export default function Footer() {
  return (
    <div className="static bottom-0 inset-x-0 text-white">
      <div className="top bg-[#2c3e50] p-12">
        <div className="container">
          <div className="row flex-col justify-center items-center gap-y-14 md:flex-row">
            <div className="md:w-1/3 text-center space-y-3">
              <h3 className="text-2xl font-medium">LOCATION</h3>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
            <div className="md:w-1/3 text-center space-y-2">
              <h3 className="text-2xl font-medium">AROUND THE WEB</h3>
              <ul className="row space-x-2 justify-center ">
                <li>
                  <i className="fa-brands fa-facebook mx-1 icon"></i>
                </li>
                <li>
                  <i className="fa-brands fa-twitter mx-1 icon"></i>
                </li>
                <li>
                  <i className="fa-brands fa-linkedin mx-1 icon"></i>
                </li>
                <li>
                  <i className="fa-solid fa-globe mx-1 icon"></i>
                </li>
              </ul>
            </div>
            <div className="md:w-1/3 text-center space-y-2">
              <h3 className="text-2xl font-medium">ABOUT FREELANCER</h3>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom text-center bg-[#1a252f] p-3">
        <p>Copyright © Your Website 2021</p>
      </div>
    </div>
  );
}
