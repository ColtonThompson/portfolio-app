import Link from "next/link";

const navigation = [
    { name: "HOME", href: "/" },
    { name: "MY PROJECTS", href: "/projects" },
    { name: "CONTACT", href: "/contact" },
];

export default function Navbar() {
    return (
        <div>
            <ul className="flex items-center justify-center gap-4 text-slate-300">
                {navigation.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                    >
                        {item.name.toUpperCase()}
                    </Link>
                ))}
            </ul>
            <br />
        </div>
    );
}