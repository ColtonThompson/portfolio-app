export default function About() {
    return (
        <div>
            <div className="container flex justify-center items-center mx-auto">

                <h2 className="pr-4 text-3xl font-bold text-slate-300">ABOUT ME</h2>
                <div className="h-[250px] min-h-[1em] w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-20 dark:opacity-100"></div>
                <p className="pl-6 text-slate-300">
                    Recent B.S. graduate with a major in computer science and software development with personal experience in developing desktop & web-based applications.
                </p>
                <p className="pl-6 text-slate-300">
                    I am also a content creator, my gaming YouTube channel (<a href="https://youtube.com/@Nightleaf" target="_blank">@Nightleaf</a>) was started on April 1st, 2023 and gained over 25,000 views by August 1st, 2023.
                    I use the Adobe Creative Suite to create the artwork and illustrations, I edit my videos using Davinci Resolve but have also used Adobe Premiere in the past.
                </p>
                <p className="pl-6 text-slate-300">
                    My goal is to work in the games industry! I am currently learning how to use Godot to build 2D projects, soon you will see those projects visible in <a href="/projects">My Projects</a> on this site.
                </p>
            </div>
            <div className="container justify-center items-center mx-auto">
                <h2 className="text-4xl font-bold text-center text-slate-300">EDUCATION</h2>
                <p className="pl-6 text-center text-slate-300">
                    Graduated Cum Laude with an overall GPA of 3.65 at Southern New Hampshire University on May 1st, 2021.
                    <br />
                    <br />
                    <h2 className="text-4xl font-bold text-center text-slate-300">SKILLS</h2>

                </p>
                <div className="flex justify-center items-center">
                    <table className="border-separate border-spacing-2 border border-slate-500 content-center">
                        <tbody>
                            <tr>
                                <td className="border border-slate-700 text-slate-300">JAVA</td>
                                <td className="border border-slate-700 text-slate-300">JAVASCRIPT</td>
                                <td className="border border-slate-700 text-slate-300">PHP</td>
                                <td className="border border-slate-700 text-slate-300">HTML</td>
                                <td className="border border-slate-700 text-slate-300">CSS</td>
                                <td className="border border-slate-700 text-slate-300">SPRINGBOOT</td>
                                <td className="border border-slate-700 text-slate-300">REACT.JS</td>
                                <td className="border border-slate-700 text-slate-300">TAILWIND</td>
                                <td className="border border-slate-700 text-slate-300">MYSQL</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
}