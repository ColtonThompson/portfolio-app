import Link from "next/link";

const navigation = [
    { name: "HOME", href: "/" },
    { name: "MY PROJECTS", href: "/projects" },
    { name: "CONTACT", href: "mailto:colton.thompson@live.com" },
];

export default function Navbar() {
    return (
        <div>
            <div className="w-full h-20 sticky top-0">
                <div className="container mx-auto px-4 h-full">
                    <div className="flex justify-between items-center h-full">
                        <h3 className="font-bold text-white text-2xl">COLTON&apos;S PORTFOLIO</h3>
                        <ul className="hidden md:flex gap-x-6 text-white">
                            <Link 
                                key="/"
                                href="/">
                            Homepage
                            </Link>

                            <Link 
                                key="/projects"
                                href="/projects">
                            My Projects
                            </Link>
                            
                            <Link 
                                key="mailto:colton.thompson@live.com"
                                href="mailto:colton.thompson@live.com">
                            Contact Me
                            </Link>    
                        </ul>    
                    </div>    
                </div>            
            </div>
            <br />
        </div>
    );
}