type ExperienceProps = {
  // title: string;
  // company: string;
  // startDate: string;
  // endDate: string;
  // technologies: string[];
  // description: string;
  // prevTitles: string[];
};

const ExperienceCard = (data: ExperienceProps) => {
  return (
    <div className="w-full grid grid-cols-8 gap-2 mt-4">
      <div className="h-full border-none border-2 border-sky-500 col-span-2 flex flex-col">
        <div>data range here</div>
        <div>time here</div>
      </div>
      <div className="h-full flex flex-col border-none border-2 border-sky-500 col-span-6">
        <div>
          <a href="companywebsite.com">Clickable Title</a>
          <a href="companywebsite.com"> Clickable Company</a>
        </div>
        <div className="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div className="mt-4">technologies are listed here</div>
      </div>
    </div>
  );
};

export default ExperienceCard;
