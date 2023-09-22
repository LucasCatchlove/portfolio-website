import Hashtags from "./Hashtags";
import Image from "next/image";

export type ProjectProps = {
  title: string;
  description: string;
  technologies: string[];
  imageurl: string;
  repourl?: string;
  demourl?: string;
};

const ProjectCard = ({ technologies, title, description, imageurl, repourl, demourl }: ProjectProps) => {
  return (
    <div className="w-full grid grid-cols-8 gap-2 mt-12  hover:shadow-md rounded-lg">
      <div className="h-full border-none border-2 border-sky-500 col-span-2 flex flex-col">
        {imageurl ? <Image className="rounded-md" src={imageurl} width={200} height={100} alt="project picture" /> : "no image available"}
      </div>
      <div className="h-full flex flex-col border-none border-2 border-sky-500 col-span-6">
        <a className="text-teal-200 text-bold" href={repourl}>
          {title}
        </a>
        <div className="mt-4 opacity-50">{description}</div>

        <div className="mt-2">
          {repourl ? (
            <a className="transition ease-in-out hover:text-yellow-200 duration-300" href={repourl}>
              repository
            </a>
          ) : (
            <></>
          )}
          {demourl ? (
            <>
              {" · "}{" "}
              <a className="transition ease-in-out hover:text-yellow-200 duration-300" href={demourl}>
                demo
              </a>
            </>
          ) : (
            <></>
          )}
        </div>

        <Hashtags tags={technologies} />
      </div>
    </div>
  );
};

export default ProjectCard;
