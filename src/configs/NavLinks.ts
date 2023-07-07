interface NavLink {
    name: string;
    href: string;
    target?: string;
    rel?: string;
}

const links: NavLink[] = [
    {
        "name": "Projects",
        "href": "https://github.com/shubham399/",
        "target": "_blank",
        "rel": "noopener noreferrer"
    },
    {
        "name": "Contact",
        "href": "/contact"
    }
]

export default links;