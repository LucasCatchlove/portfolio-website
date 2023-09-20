import Hashtags from "./Hashtags";

type ExperienceProps = {
  title: string;
  company: string;
  company_website: string;
  start_date: string;
  end_date: string;
  technologies: string[];
  description: string;
  prev_titles: string[];
};

const abbMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const ExperienceCard = ({ ...ExperienceProps }) => {
  const start_date = new Date(ExperienceProps.start_date);
  const end_date = new Date(ExperienceProps.end_date);
  return (
    <div className="w-full grid grid-cols-8 gap-2 mt-12 hover:shadow-md p-4 rounded-lg">
      <div className="h-full col-span-2 flex flex-col opacity-50">
        <div className="text-md">{`${abbMonths[start_date.getMonth()]} ${start_date.getFullYear()} - ${
          abbMonths[end_date.getMonth()]
        } ${end_date.getFullYear()}`}</div>
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
        <Hashtags tags={ExperienceProps.technologies} />
      </div>
    </div>
  );
};

export default ExperienceCard;
