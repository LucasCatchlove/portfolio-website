type ExperienceProps = {
    // title: string; 
    // company: string; 
    // startDate: string;
    // endDate: string;
    // technologies: string[];
    // description: string;
    // prevTitles: string[];
}

const ExperienceCard = (data: ExperienceProps) => {
    return <div className="w-full grid grid-cols-8 gap-2">
            <div className="h-full border-solid border-2 border-sky-500 col-span-2">
                date range here
                
            </div>
            <div className="h-full flex flex-col border-solid border-2 border-sky-500 col-span-6">
                <a href="companywebsite.com">Clickable Title</a>
                <div>company</div>
                <div>description text goes here</div>
                <div>technologies are listed here</div>
            </div>
        </div>

}

export default ExperienceCard;