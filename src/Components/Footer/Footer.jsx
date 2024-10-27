import { FaRedditAlien, FaFacebookF, FaGithub } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-gray-800 dark:bg-gray-900">
    <div className="container p-6 mx-auto">
      <div className="lg:flex ">
        <div className="w-full -mx-6 lg:w-2/5">
          <div className="px-6">
          <div className="flex-none -ml-4">
          <a className="btn btn-ghost text-white normal-case text-lg lg:text-2xl">
            <span className="text-red-600 -mr-2">𝔼</span>𝕧𝕒𝕟
            <span className="text-yellow-800 -mr-2">𝕊</span>𝕥𝕠𝕣𝕖
          </a>
        </div>
            <p className="max-w-sm mt-2 text-white dark:text-gray-400">
              Join 31,000+ other and never miss out on new tips, tutorials, and
              more.
            </p>
            <div className="flex text-white mt-6 -mx-2">
              <a
                href="#"
                className="mx-2  transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                aria-label="Reddit"
              >
                <FaRedditAlien className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="mx-2 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                aria-label="Facebook"
              >
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="mx-2  transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                aria-label="Github"
              >
                <FaGithub className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 lg:mt-0 lg:flex-1">
          <div className="grid grid-cols-2 text-white gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div>
              <h3 className="text-white uppercase dark:text-white">About</h3>
              <a
                href="#"
                className="block mt-2 text-sm text-white dark:text-gray-400 hover:underline"
              >
                Company
              </a>
              <a
                href="#"
                className="block mt-2 text-sm text-white dark:text-gray-400 hover:underline"
              >
                Community
              </a>
              <a
                href="#"
                className="block mt-2 text-sm text-white dark:text-gray-400 hover:underline"
              >
                Careers
              </a>
            </div>
            <div>
              <h3 className="text-white uppercase dark:text-white">Blog</h3>
              <a
                href="#"
                className="block mt-2 text-sm text-white dark:text-gray-400 hover:underline"
              >
                Tech
              </a>
              <a
                href="#"
                className="block mt-2 text-sm text-white dark:text-gray-400 hover:underline"
              >
                Music
              </a>
              <a
                href="#"
                className="block mt-2 text-sm text-white dark:text-gray-400 hover:underline"
              >
                Videos
              </a>
            </div>
            <div>
              <h3 className="text-white uppercase dark:text-white">
                Products
              </h3>
              <a
                href="#"
                className="block mt-2 text-sm text-white dark:text-gray-400 hover:underline"
              >
                Mega Cloud
              </a>
              <a
                href="#"
                className="block mt-2 text-sm text-white dark:text-gray-400 hover:underline"
              >
                Aperion UI
              </a>
              <a
                href="#"
                className="block mt-2 text-sm text-white dark:text-gray-400 hover:underline"
              >
                Meraki UI
              </a>
            </div>
            <div>
              <h3 className="text-white uppercase dark:text-white">
                Contact
              </h3>
              <span className="block mt-2 text-sm text-white dark:text-gray-400 hover:underline">
                +1 526 654 8965
              </span>
              <span className="block mt-2 text-sm text-white dark:text-gray-400 hover:underline">
                example@email.com
              </span>
            </div>
          </div>
        </div>
      </div>

      <hr className="h-px my-6 bg-gray-200 border-none dark:bg-gray-700" />

      <div>
        <p className="text-center text-yellow-500 dark:text-gray-400">
          © Brand 2020 - All rights reserved
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
