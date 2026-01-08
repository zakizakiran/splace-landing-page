import Logo from "../../assets/images/Logo.png";

const Footer = () => {
  return (
    <footer className="py-12 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-8">
          <div className="flex flex-col gap-4">
            <img
              src={Logo}
              alt="Splace Classroom Logo"
              className="h-10 object-contain"
            />
            <p className="font-medium text-sm text-black-lighter">
              © 2026 - Splace Classroom
            </p>
          </div>

          <div className="flex flex-wrap gap-4 sm:gap-6 text-sm">
            <a
              href="#"
              className="text-black-lighter hover:text-primary transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-black-lighter hover:text-primary transition-colors"
            >
              Cookies
            </a>
            <a
              href="#"
              className="text-black-lighter hover:text-primary transition-colors"
            >
              Terms & Conditions
            </a>
          </div>
        </div>

        <div className="pt-6 border-t border-grey">
          <p className="text-sm text-black-lighter leading-relaxed max-w-4xl">
            Splace Classroom empowers educators to create smarter and more
            engaging learning experiences. By combining AI-driven quiz
            generation and text annotation tools, it helps teachers save time,
            personalize content, and support students in learning with
            confidence and curiosity.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
