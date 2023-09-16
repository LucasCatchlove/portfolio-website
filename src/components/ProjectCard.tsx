type ProjectProps = {
  // title: string;
  // description: string;
  // technologies: string[];
};

const ProjectCard = (data: ProjectProps) => {
  return (
    <div className="w-full grid grid-cols-8 gap-2 mt-12  hover:shadow-md p-8 rounded-lg">
      <div className="h-full border-none border-2 border-sky-500 col-span-2 flex flex-col">image here</div>
      <div className="h-full flex flex-col border-none border-2 border-sky-500 col-span-6">
        <a href="companywebsite.com" className="text-teal-200 text-bold">
          {" "}
          Clickable Project Name{" "}
        </a>
        <div className="mt-4 opacity-50">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div className="mt-4 text-yellow-200">#example #hashtags #here</div>
      </div>
    </div>
  );
};

export default ProjectCard;
//fetch data server side
