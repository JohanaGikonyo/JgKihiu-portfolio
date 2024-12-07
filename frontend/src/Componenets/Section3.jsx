import img1 from "./images/e-commerce.png";
import img2 from "./images/cluster.png";
import img3 from "./images/travel.png";
import img4 from './images/brain_bird.png'
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
function Section3() {
  return (
    <div className="text-slate-400 ml-5 mt-40">
      <div>
        <span className="flex items-center gap-4 mt-10 text-3xl text-slate-300">
          <h1 className="flex">
            <span className="text-teal-400">03.</span>My Projects
          </h1>
          <div className="lg:w-60  bg-slate-400 h-0.5"></div>
        </span>
      </div>
      <div className="flex lg:flex-row flex-col items-center gap-5  justify-around lg:flex-wrap">

      <div className="relative ">
          <a href="https://brain-bird.vercel.app/">
            {" "}
            <img src={img4} alt="" className="h-60  w-80 object-contain rounded-lg p-2" />
          </a>
          <div className="bg-slate-300 text-black rounded-lg p-2 absolute -my-20   flex flex-col">
            <p>
            Brain-Bird is a social PWA designed for everyone to connect with like-minded people from around the world. Spark discussions, share your ideas, and build your network. Create posts, view feeds, manage your profile, and more. Meet new friends, find mentors, or collaborate with potential clients. Join public communities or chat privately. Brain-Bird offers a seamless and engaging experience, accessible from any device.</p>
            <div className="flex justify-end">
              <a href="https://github.com/JohanaGikonyo/brain_bird">
                <GitHubIcon />
              </a>

              <span>
                <a href="https://brain-bird.vercel.app/">
                  <OpenInNewIcon />
                </a>
              </span>
            </div>
          </div>
        </div>


        <div className="relative ">
          <a href="https://mulefoods.com/">
            {" "}
            <img src={img1} alt="" className="h-60  w-80 object-contain rounded-lg p-2" />
          </a>
          <div className="bg-slate-300 text-black rounded-lg p-2 absolute -my-20   flex flex-col">
            <p>
            Mule Foods simplifies your grocery shopping experience. Order your favorite food items online from your preferred local stores and have them delivered right to your doorstep. Say goodbye to the hassle of phone calls and long queues.
            </p>
            <div className="flex justify-end">
              <a href="https://github.com/JohanaGikonyo/Mule-Foods">
                <GitHubIcon />
              </a>

              <span>
                <a href="https://mulefoods.com/">
                  <OpenInNewIcon />
                </a>
              </span>
            </div>
          </div>
        </div>

        <div className="relative mt-16 lg:mt-0">
          <div className="">
            <a href="https://traveapp.vercel.app/">
              {" "}
              <img src={img3} alt="" className="h-80 w-80 object-contain rounded-lg p-2 " />
            </a>
          </div>
          <div className="bg-slate-300 text-black rounded-lg p-2 absolute -my-20">
            <p>
            Hilink: Your Personalized Travel Companion <br></br>

Experience the world with Hilink, your go-to travel app. Discover stunning destinations, plan your trips with ease, and book unforgettable experiences.
            </p>
            <div className="flex justify-end items-center m-0.5">
              <a href="https://github.com/JohanaGikonyo/testapp">
                <GitHubIcon />
              </a>
              <span>
                {" "}
                <a href="https://traveapp.vercel.app/">
                  {" "}
                  <OpenInNewIcon />{" "}
                </a>{" "}
              </span>
            </div>
          </div>
        </div>

        <div className="relative mt-16 ">
          <div className="">
            <a href="https://clustercalculator.vercel.app/">
              {" "}
              <img src={img2} alt="" className="h-80 w-80 object-contain rounded-lg p-2 " />
            </a>
          </div>
          <div className="bg-slate-300 text-black rounded-lg p-2 absolute -my-20">
            <p>
            Make Informed Course Choices<br></br>
            Our cluster point calculator helps you easily determine your eligibility for various courses, saving you time and effort. </p>
            <div className="flex justify-end items-center m-0.5">
              <a href="https://github.com/JohanaGikonyo/clusterCalculations2024">
                <GitHubIcon />
              </a>
              <span>
                {" "}
                <a href="https://clustercalculator.vercel.app/">
                  {" "}
                  <OpenInNewIcon />{" "}
                </a>{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;
