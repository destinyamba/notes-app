const Footer = () => {
  return (
    <section className=" left-0 bottom-0 right-0">
      <footer className="bg-gray-100/0">
        <div className="w-full mx-auto p-12 md:flex md:items-center md:justify-between h-1/5">
          <span className="text-sm text-gray-700 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="home" className="hover:underline">
              Notes™
            </a>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
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
