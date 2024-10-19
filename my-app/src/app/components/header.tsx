import Link from "next/link";
export default function Header(){
    return(
        <div className="header">
        <ul className="header-buttons">
            <li><Link href="/"> Portfolio</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact-us">Contact Us</Link></li>
            <li><Link href="skills">Skills</Link></li>
            <li><Link href="projects">Projects</Link></li>

        </ul>
        </div>

    )
}