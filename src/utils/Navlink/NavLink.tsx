// "use client";
// import Link from "next/link";
// import classes from "./nav-link.module.css";
// import { usePathname } from "next/navigation";

// const NavLink: React.FC<{ href: string , children:string }> = (props) => {
//   const path = usePathname();
//   const href = props.href;
//   return (
//     <Link
//       href={href}
//       className={
//        `${ path.endsWith(href) ? classes.active : ''}  `
//       }
//     >
//       {props.children}
//     </Link>
//   );
// };

// export default NavLink;


"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./nav-link.module.css";

const NavLink: React.FC<{ href: string, children: React.ReactNode }> = ({ href, children }) => {
  const path = usePathname();

  // Check if the current pathname ends with the href to determine if the link is active
  const isActive = path.endsWith(href);

  return (
    <Link href={href} className={`${isActive ? classes.active : ''}`}>
      {children}
    </Link>
  );
};

export default NavLink;
