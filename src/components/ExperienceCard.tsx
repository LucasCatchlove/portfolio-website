export type ExperienceProps = {
  title: string;
  company: string;
  company_website: string;
  start_date: string;
  end_date: string;
  technologies: string[];
  description: string;
  prev_titles: string[];
};

const ExperienceCard = ({ ...ExperienceProps }) => {
  const start_date = new Date(ExperienceProps.start_date);
  const end_date = new Date(ExperienceProps.end_date);
  return (
    <div className="w-full grid grid-cols-8 gap-2 mt-12 hover:shadow-md p-4 rounded-lg">
      <div className="h-full col-span-2 flex flex-col opacity-50">
        <div className="text-md">{`${start_date.getFullYear()} - ${end_date.getFullYear()}`}</div>
      </div>
      <div className="h-full flex flex-col col-span-6">
        <div>
          <a className="font-bold text-teal-200">{ExperienceProps.title}</a>
          {" · "}
          <a href={ExperienceProps.company_website} className="opacity-80">
            {ExperienceProps.company}
          </a>
        </div>
        <div className="mt-4 opacity-50 text-sm">{ExperienceProps.description}</div>
        <div className="mt-4 text-yellow-200">
          {ExperienceProps.technologies.map((e: string, i: number) => (
            <a className="mr-2 hover:text-yellow-400" key={i} href={`https://www.google.com/search?q=${e}`}>
              #{e.replace(" ", "")}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
