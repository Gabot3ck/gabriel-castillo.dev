import Link from "next/link";

interface Props {
  href: string;
  title: string;
  icon?: JSX.Element;
}

export const NavLink = ( { href, title, icon }: Props ) => {


  return (
    <Link
      className=" hover:text-primary-400 
      flex items-center gap-2 text-sm md:text-base font-normal md:font-medium
      transition-colors duration-300 ease-out"
      href={ href }
    >
      <span className="md:hidden">
        { icon }
      </span>
      { title }
    </Link>
  )
}