export type ExperienceProps = {
  title: string;
  company: string;
  start_date: string;
  end_date: string;
  technologies: string[];
  description: string;
  prev_titles: string[];
};

const ExperienceCard = async ({ ...ExperienceProps }) => {
  return (
    <div className="w-full grid grid-cols-8 gap-2 mt-12 hover:shadow-md p-8 rounded-lg">
      <div className="h-full col-span-2 flex flex-col opacity-50">
        <div className="text-md">
          {new Date(ExperienceProps.start_date).getFullYear()} - {new Date(ExperienceProps.end_date).getFullYear()}
        </div>
      </div>
      <div className="h-full flex flex-col col-span-6">
        <div>
          <a href="https://google.ca/" className="font-bold text-teal-200">
            {ExperienceProps.title}
          </a>
          ·
          <a href="companywebsite.com" className="opacity-80">
            {ExperienceProps.company}
          </a>
        </div>
        <div className="mt-4 opacity-50 text-sm">{ExperienceProps.description}</div>
        <div className="mt-4 text-yellow-200">
          {ExperienceProps.technologies.map((e: string, i: number) => (
            <a className="mr-2" key={i}>
              #{e.replace(" ", "")}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
