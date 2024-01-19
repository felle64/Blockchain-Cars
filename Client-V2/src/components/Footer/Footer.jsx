const Footer = () => {
  return (
    <div className="gradient-bg-footer p-6 pt-1">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <h1 className="text-white text-2xl font-bold">
            Car Ownership on Chain
          </h1>
          <p className="text-white text-sm">by Felle64</p>
        </div>
        <div className="flex flex-col">
          <p className="text-white text-sm"></p>
        </div>

        <div className="flex flex-col">
          <p className="text-white text-sm">
            <a
              href="https://github.com/felle64/Blockchain-Cars"
              className="text-white text-sm mr-3"
            >
              Github
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
