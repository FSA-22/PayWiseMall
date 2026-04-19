import { navItems } from '@/constants';
import { NavLink } from './TopNavbar';

export const NavLinksGroup = ({ vertical = false }: { vertical?: boolean }) => {
  return (
    <li
      className={`flex ${vertical ? 'flex-col gap-4' : 'items-center gap-6'}`}
    >
      {navItems.map(({ href, name }) => (
        <NavLink key={href} href={href}>
          {name}
        </NavLink>
      ))}
    </li>
  );
};
