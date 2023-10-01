import InfoBox from "./InfoBox";
import ProjectList from "./ProjectList";

export default function ShowProjects() {
    return(
        <div>
            <div className="container flex mx-auto pb-4">
                <h2 className="text-4xl text-slate-300">
                    PROJECTS
                </h2>   
                           
            </div>
            <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
            <ProjectList/>
            <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
        </div>
    );
}