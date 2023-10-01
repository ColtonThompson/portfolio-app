
export default function Intro() {
    return (
        <div>
            <div className="container flex items-center justify-center mx-auto ">
                <div className="grid grid-cols-2 grid-rows-1 -space-x-10 space-y-12 gap-2">
                    <div className="pl-20">
                        <img className="rounded-lg" src="me-small.png" style={{ width: 174, height: 190 }}></img>
                    </div>
                    <div>
                        <h1 className="text-center text-5xl font-bold text-slate-300">
                            Colton Thompson
                            <h2 className="text-2xl text-slate-500">
                                Software Engineer
                            </h2>
                        </h1>
                    </div>
                </div>
            </div>
            <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
        </div>
    );
}