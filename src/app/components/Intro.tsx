
'use client'

import Image from "next/image"
import { useRouter } from 'next/navigation'

export default function Intro() {
    const router = useRouter()
    return (
        <div className="container px-4 mx-auto flex-wrap">
            <div className="lg:space-x-3 lg:flex lg:flex-row item-center lg:-mx-2 flex flex-col-reverse text-center lg:text-left">
                <div className="lg:px-2 lg:mt-10 ">
                    <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white">
                        Hey, I&apos;m Colton.
                    </h1>
                    <div className="mt-6 mr-10 ml-10 text-slate-400">
                        <p className="mr-36 ml-36">
                        I&apos;m a software engineer from Utah! I am a self taught software engineer that loves to create a myriad of projects ranging from single page web applications to video games.
                        </p>
                    </div>
                </div>
                <div className="flex-shrink-0 lg:mt-5 lg:px-4 mb-5">
                    <Image
                        src="/me-small.png"
                        alt="Profile"
                        className="rounded-lg"
                        width={174}
                        height={190}
                    />
                </div>
            </div>
            <div className="flex flex-wrap flex-row place-content-center">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-5 mr-5 rounded-lg" onClick={() => router.push("/projects")}>
                        View My Projects
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-5 mr-5 rounded-lg" onClick={() => router.push("https://www.linkedin.com/in/coltonmthompson/")}>
                        View My LinkedIn
                </button>
            </div>
            <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
        </div>
    );
}

