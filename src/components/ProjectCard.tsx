export type ProjectProps = {
  title: string;
  description: string;
  technologies: string[];
};

const ProjectCard = ({ ...ProjectProps }) => {
  return (
    <div className="w-full grid grid-cols-8 gap-2 mt-12  hover:shadow-md p-8 rounded-lg">
      <div className="h-full border-none border-2 border-sky-500 col-span-2 flex flex-col">image here</div>
      <div className="h-full flex flex-col border-none border-2 border-sky-500 col-span-6">
        <a className="text-teal-200 text-bold">{ProjectProps.title}</a>
        <div className="mt-4 opacity-50">{ProjectProps.description}</div>
        <div className="mt-4 text-yellow-200">
          {ProjectProps.technologies.map((e: string, i: number) => (
            <a className="mr-2 hover:text-yellow-400" key={i} href={`https://www.google.com/search?q=${e}`}>
              #{e.replace(" ", "")}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
