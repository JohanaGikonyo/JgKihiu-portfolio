import img1 from "./images/e-commerce.png";
import img2 from "./images/cluster.png";
import img3 from "./images/travel.png";
import img4 from "./images/brain_bird.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

function Section3() {
  return (
    <div className="text-slate-400 px-5 lg:px-20 py-16 ">
      {/* Section Title */}
      <div className="mb-12">
        <div className="flex items-center gap-4">
          <h1 className="flex items-center text-3xl text-slate-300 font-semibold">
            <span className="text-teal-400 mr-2">03.</span>My Projects
          </h1>
          <div className="flex-grow h-0.5 bg-slate-500"></div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {/* Brain Bird Project */}
        <div className="relative group bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transform transition duration-300">
          <a href="https://brain-bird.vercel.app/">
            <img
              src={img4}
              alt="Brain Bird"
              className="h-60 w-full object-cover"
            />
          </a>
          <div className="absolute inset-0 bg-slate-900/95 opacity-0 group-hover:opacity-100 transition duration-300 p-5 flex flex-col justify-between">
            <p className="text-sm text-slate-300">
              Brain-Bird is a social PWA designed for everyone to connect with
              like-minded people from around the world. Spark discussions,
              share your ideas, and build your network.
            </p>
            <div className="flex gap-4 justify-end mt-4">
              <a
                href="https://github.com/JohanaGikonyo/brain_bird"
                className="text-teal-400 hover:text-teal-300"
              >
                <GitHubIcon fontSize="small" />
              </a>
              <a
                href="https://brain-bird.vercel.app/"
                className="text-teal-400 hover:text-teal-300"
              >
                <OpenInNewIcon fontSize="small" />
              </a>
            </div>
          </div>
        </div>

        {/* Mule Foods Project */}
        <div className="relative group bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transform transition duration-300">
          <a href="https://mulefoods.com/">
            <img
              src={img1}
              alt="Mule Foods"
              className="h-60 w-full object-cover"
            />
          </a>
          <div className="absolute inset-0 bg-slate-900/95 opacity-0 group-hover:opacity-100 transition duration-300 p-5 flex flex-col justify-between">
            <p className="text-sm text-slate-300">
              Mule Foods simplifies your grocery shopping experience. Order
              your favorite food items online from your preferred local stores
              and have them delivered right to your doorstep.
            </p>
            <div className="flex gap-4 justify-end mt-4">
              <a
                href="https://github.com/JohanaGikonyo/Mule-Foods"
                className="text-teal-400 hover:text-teal-300"
              >
                <GitHubIcon fontSize="small" />
              </a>
              <a
                href="https://mulefoods.com/"
                className="text-teal-400 hover:text-teal-300"
              >
                <OpenInNewIcon fontSize="small" />
              </a>
            </div>
          </div>
        </div>

        {/* Travel App Project */}
        <div className="relative group bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transform transition duration-300">
          <a href="https://traveapp.vercel.app/">
            <img
              src={img3}
              alt="Travel App"
              className="h-60 w-full object-cover"
            />
          </a>
          <div className="absolute inset-0 bg-slate-900/95 opacity-0 group-hover:opacity-100 transition duration-300 p-5 flex flex-col justify-between">
            <p className="text-sm text-slate-300">
              Hilink: Your Personalized Travel Companion. Experience the world
              with Hilink, your go-to travel app. Discover stunning
              destinations, plan your trips with ease, and book unforgettable
              experiences.
            </p>
            <div className="flex gap-4 justify-end mt-4">
              <a
                href="https://github.com/JohanaGikonyo/testapp"
                className="text-teal-400 hover:text-teal-300"
              >
                <GitHubIcon fontSize="small" />
              </a>
              <a
                href="https://traveapp.vercel.app/"
                className="text-teal-400 hover:text-teal-300"
              >
                <OpenInNewIcon fontSize="small" />
              </a>
            </div>
          </div>
        </div>

        {/* Cluster Calculator Project */}
        <div className="relative group bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transform transition duration-300">
          <a href="https://clustercalculator.vercel.app/">
            <img
              src={img2}
              alt="Cluster Calculator"
              className="h-60 w-full object-cover"
            />
          </a>
          <div className="absolute inset-0 bg-slate-900/95 opacity-0 group-hover:opacity-100 transition duration-300 p-5 flex flex-col justify-between">
            <p className="text-sm text-slate-300">
              Make Informed Course Choices. Our cluster point calculator helps
              you easily determine your eligibility for various courses, saving
              you time and effort.
            </p>
            <div className="flex gap-4 justify-end mt-4">
              <a
                href="https://github.com/JohanaGikonyo/clusterCalculations2024"
                className="text-teal-400 hover:text-teal-300"
              >
                <GitHubIcon fontSize="small" />
              </a>
              <a
                href="https://clustercalculator.vercel.app/"
                className="text-teal-400 hover:text-teal-300"
              >
                <OpenInNewIcon fontSize="small" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;
