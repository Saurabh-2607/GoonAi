
interface BtnLinkProps {
    href: string;
    text: string;
    className?: string;
}

export const BtnLink = ({ href, text, className = "" }: BtnLinkProps) => {
    return (
        <li>
            <a href={href}>
                <span> { text }</span>
            </a>
         </li>
    )
}