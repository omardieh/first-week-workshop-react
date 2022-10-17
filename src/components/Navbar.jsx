export const Navbar = ({title,navElements}) => {
    return(
        <nav>
        <h1 id="workshop"> {title} </h1>
        <ul>
            {navElements?.map((e,i)=><li key={i}><a href={e.href} > {e.label} </a></li>)}
        </ul>
    </nav>
    )
}