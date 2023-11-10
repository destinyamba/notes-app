const Footer = () => {
  return (
    <section className="flex flex-col h-1/6 ">
      {/* Page Content */}

      {/* Footer */}
      <footer className="bg-gray-100/0 mt-auto">
        <div className="w-full p-12 mx-auto md:flex md:items-center md:justify-between">
          {/* Copyright */}
          <span className="text-sm text-gray-700 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="home" className="hover:underline">
              NotesTM
            </a>
            . All Rights Reserved.
          </span>

          {/* Menu */}
          <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
