import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="bg-[#2C313F]">
      <footer className="bg-[#2C313F] text-white py-16">
        <div className="container mx-auto text-center px-4">
          {/* Social Media Links */}
          <div className="flex justify-center space-x-8 mb-8">
            <a href="https://twitter.com" className="text-white hover:text-blue-500">
              <FaTwitter size={24} />
            </a>
            <a href="https://facebook.com" className="text-white hover:text-blue-500">
              <FaFacebookF size={24} />
            </a>
            <a href="https://instagram.com" className="text-white hover:text-blue-500">
              <FaInstagram size={24} />
            </a>
            <a href="https://github.com" className="text-white hover:text-blue-500">
              <FaGithub size={24} />
            </a>
          </div>

          {/* Sign Up Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold">Sign up for personalized offers</h3>
            <form className="flex justify-center mt-4 space-x-4">
              <input
                type="email"
                className="px-4 py-3 text-gray-800 rounded-md border border-gray-500"
                placeholder="Enter your email"
              />
              <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">Subscribe</button>
            </form>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-left">
            {/* Links Section */}
            <div>
              <h4 className="font-semibold mb-4">Links</h4>
              <ul>
                <li><a href="#" className="hover:text-blue-500">Home</a></li>
                <li><a href="#" className="hover:text-blue-500">Projects</a></li>
                <li><a href="#" className="hover:text-blue-500">Blog</a></li>
                <li><a href="#" className="hover:text-blue-500">Category</a></li>
              </ul>
            </div>

            {/* Features Section */}
            <div>
              <h4 className="font-semibold mb-4">Features</h4>
              <ul>
                <li><a href="#" className="hover:text-blue-500">About Us</a></li>
                <li><a href="#" className="hover:text-blue-500">Instructions</a></li>
                <li><a href="#" className="hover:text-blue-500">Catalog</a></li>
                <li><a href="#" className="hover:text-blue-500">Contact Us</a></li>
              </ul>
            </div>

            {/* Company Section */}
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul>
                <li><a href="#" className="hover:text-blue-500">Privacy</a></li>
                <li><a href="#" className="hover:text-blue-500">Terms</a></li>
                <li><a href="#" className="hover:text-blue-500">Security</a></li>
              </ul>
            </div>

            {/* Legal & Terms Section */}
            <div>
              <h4 className="font-semibold mb-4">Legal & Terms</h4>
              <ul>
                <li><a href="#" className="hover:text-blue-500">Privacy</a></li>
                <li><a href="#" className="hover:text-blue-500">Terms</a></li>
                <li><a href="#" className="hover:text-blue-500">Security</a></li>
              </ul>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="mt-8 text-sm">
            <p>© Copyright 2022 Fifty®. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}