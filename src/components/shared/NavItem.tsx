
interface NavItemProps {
    href: string;
    label: string;
}

export const NavItem = ({ href, label }: NavItemProps) => {
    return (
        <li>
            <a href={href} className="duration-300 font-medium ease-linear hover:text-primary py-3">
                {label}
            </a>
        </li>
    )
}