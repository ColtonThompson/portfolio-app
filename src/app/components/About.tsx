export default function About() {
    return (
        <div>
            <div className="container justify-center items-center mx-auto">
                <h2 className="text-4xl font-bold text-center text-gray-200">EDUCATION</h2>
                <br/>
                <p className="pl-6 text-center text-gray-200">Bachelor of Science - Major: Computer Science</p>
                <p className="pl-6 text-center text-slate-400">
                    Graduated Cum Laude with an overall GPA of 3.65 at Southern New Hampshire University on May 1st, 2021.
                    <br />
                    <br />
                    <h2 className="text-4xl font-bold text-center text-gray-200">SKILLS</h2>

                </p>
                <div className="flex justify-center items-center">
                    <table className="border-separate border-spacing-2 border border-slate-500 content-center">
                        <tbody>
                            <tr>
                                <td className="border border-slate-700 text-slate-400">JAVA</td>
                                <td className="border border-slate-700 text-slate-400">JAVASCRIPT</td>
                                <td className="border border-slate-700 text-slate-400">PHP</td>
                                <td className="border border-slate-700 text-slate-400">HTML</td>
                                <td className="border border-slate-700 text-slate-400">CSS</td>
                                <td className="border border-slate-700 text-slate-400">SPRINGBOOT</td>
                                <td className="border border-slate-700 text-slate-400">REACT.JS</td>
                                <td className="border border-slate-700 text-slate-400">TAILWIND</td>
                                <td className="border border-slate-700 text-slate-400">MYSQL</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
        </div>
    );
}