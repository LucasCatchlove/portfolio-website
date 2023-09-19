import Hashtags from "./Hashtags";
import Image from "next/image";

export type ProjectProps = {
  title: string;
  description: string;
  technologies: string[];
  imageurl: string;
};

const ProjectCard = ({ technologies, title, description, imageurl }: ProjectProps) => {
  return (
    <div className="w-full grid grid-cols-8 gap-2 mt-12  hover:shadow-md rounded-lg">
      <div className="h-full border-none border-2 border-sky-500 col-span-2 flex flex-col">
        <Image src={imageurl} width={200} height={100} alt="project picture" />
      </div>
      <div className="h-full flex flex-col border-none border-2 border-sky-500 col-span-6">
        <a className="text-teal-200 text-bold">{title}</a>
        <div className="mt-4 opacity-50">{description}</div>
        <Hashtags tags={technologies} />
      </div>
    </div>
  );
};

export default ProjectCard;
