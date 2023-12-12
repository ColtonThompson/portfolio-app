
import Image from "next/image"

export default function Intro() {
    return (
        <div className="container px-4 mx-auto">
            <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
                <div className="lg:px-4 lg:mt-12 ">
                    <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white">
                        Hey, I&apos;m Colton.
                    </h1>
                    <div className="mt-6 text-slate-400">
                        <p className="mb-4">
                        I&apos;m a software engineer from Utah in the United States. I like to create a wide variety of projects from desktop apps to websites to video games!
                        </p>
                    </div>
                </div>
                <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10">
                    <Image
                        src="/me-small.png"
                        alt="Profile"
                        className="rounded-lg"
                        width={174}
                        height={190}
                    />
                </div>
            </div>
            <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
        </div>
    );
}

