import { sql } from "@vercel/postgres";

type ExperienceProps = {
  // title: string;
  // company: string;
  // startDate: string;
  // endDate: string;
  // technologies: string[];
  // description: string;
  // prevTitles: string[];
};

const ExperienceCard = async (data: ExperienceProps) => {
  //const text2 = await sql`SELECT * from projects`;
  //console.log(text2);

  return (
    <div className="w-full grid grid-cols-8 gap-2 mt-12 hover:shadow-md p-8 rounded-lg">
      <div className="h-full col-span-2 flex flex-col opacity-50">
        <div className="text-md">2021 - 2022</div>
      </div>
      <div className="h-full flex flex-col col-span-6">
        <div>
          <a href="https://google.ca/" className="font-bold text-teal-200">
            {/* {text2.rows[0].title} */}
          </a>
          ·
          <a href="companywebsite.com" className="opacity-80">
            Clickable Company
          </a>
        </div>
        <div className="mt-4 opacity-50 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur.
        </div>
        <div className="mt-4 text-yellow-200">#react #postgres</div>
      </div>
    </div>
  );
};

export default ExperienceCard;
