/* eslint-disable react/no-unescaped-entities */
import "./globals.css";
import ExperienceCard, { ExperienceProps } from "@/components/ExperienceCard";
import ProjectCard from "@/components/ProjectCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { sql } from "@vercel/postgres";

export default async function Home() {
  const projectsData = await sql`SELECT * from projects`;
  const experienceData = await sql`SELECT * from experience`;

  return (
    <div className="grid lg:grid-cols-2 font-montserrat md:mx-12 mx-4">
      <header className="lg:sticky max-h-screen flex flex-col lg:top-0 py-24 lg:ml-12">
        <div id="basics" className="mx-4">
          <h1 className="text-5xl font-bold mb-4 text-slate-200">Lucas Catchlove</h1>
          <h2 className="text-2xl mb-8 text-teal-200">Software Engineer</h2>
          <p className="opacity-75 leading-relaxed mx-4">I enjoy designing and building software professionally and at home :)</p>
        </div>

        <div id="socials" className="mt-24 md:flex md:justify-items-center">
          <ol className="flex flex-col space-evenly xs:text-3xl text-xl">
            <li className="transition ease-in-out hover:text-yellow-200 duration-300 flex flex-items-center">
              <a className="ml-2" href="mailto:lucascatchlove@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} />
                <p className="ml-2 inline-block">Email</p>
              </a>
            </li>
            <li className="transition ease-in-out hover:text-yellow-200 duration-300">
              <a className="ml-2" href="https://github.com/LucasCatchlove">
                <FontAwesomeIcon icon={faGithub} />
                <p className="ml-2 inline-block">Github</p>
              </a>
            </li>
            <li className="transition ease-in-out hover:text-yellow-200 duration-300">
              <a className="ml-2" href="https://www.linkedin.com/in/lucascatchlove/">
                <FontAwesomeIcon icon={faLinkedin} />
                <p className="ml-2 inline-block">LinkedIn</p>
              </a>
            </li>
          </ol>
        </div>
      </header>

      <main className="lg:mt-24 lg:mr-12 mb-24">
        <section id="about" className="mx-4">
          <h2 className="uppercase mb-12 lg:hidden opacity-80 text-2xl">About</h2>
          <p className="opacity-75">
            As a recent graduate in Software Engineering from Concordia University in Montreal, I am eager to kick-start my career in software development.
            During my free time, I enjoy developing all types of software, however I tend to focus on web application development and robotics.
          </p>
          <p className="opacity-75 mt-2">
            It is my belief that getting ones hands dirty and nurturing an appetite for learning is the key to improving engineering skills. These pursuits have
            significantly helped me improve my own problem-solving skills, and through work experiences, I've become familiar with the software development life
            cycle within an industry context.
          </p>

          {/* <pre>{JSON.stringify(experienceData, null, 2)}</pre> */}
        </section>

        <section id="experience" className="lg:mt-28 pt-24">
          <h2 className="uppercase mb-12 text-2xl opacity-80">Experience</h2>
          {experienceData.rows
            .sort((a: any, b: any) => {
              const yearA = new Date(a.start_date);
              const yearB = new Date(b.start_date);

              if (yearA < yearB) return 1;
              else if (yearA > yearB) return -1;
              else return 0;
            })
            .map((p, i) => (
              <ExperienceCard key={i} {...p} />
            ))}
        </section>

        <section id="projects" className="pt-24">
          <h2 className="uppercase mb-12 text-2xl opacity-80">Projects</h2>
          {projectsData.rows.map((e, i) => (
            <ProjectCard title={e.title} description={e.description} technologies={e.technologies} key={i} />
          ))}
        </section>
      </main>
    </div>
  );
}

// const [navhighlight, setNav] = useState("");
// useEffect(() => {
//   function handleIntersection(
//     entries: IntersectionObserverEntry[],
//     observer: IntersectionObserver
//   ) {
//     entries.forEach((entry) => {

//       if (entry.isIntersecting) {
//         console.log(entry.target.id)
//         switch (entry.target.id) {
//           case "experience":
//             setNav("experience");
//             break;
//           case "projects":
//             setNav("projects");
//             break;
//         }
//       }
//     });
//   }

//   const options: IntersectionObserverInit = {
//     root: null,
//     rootMargin: "0px",
//     threshold: 0,
//   };

//   const observer = new IntersectionObserver(handleIntersection, options);

//   const experienceElement = document.getElementById("experience");
//   const projectsElement = document.getElementById("projects");

//   if (experienceElement && projectsElement) {
//     observer.observe(projectsElement);
//     observer.observe(experienceElement);
//   }
//   // eslint-disable-next-line react-hooks/exhaustive-deps
// }, []);
{
  /* <nav className="mt-24">
          <ol className="flex flex-col space-evenly text-xl">
            <li>
              <a
                href="#experience"
                className={navhighlight === "experience" ? "text-4xl" : ""}
              >
                experience
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={navhighlight === "projects" ? "text-4xl" : ""}
              >
                projects
              </a>
            </li>
          </ol>
        </nav> */
}
