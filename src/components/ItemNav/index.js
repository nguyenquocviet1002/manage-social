import { NavLink } from 'react-router-dom';
import itemNavStyles from './ItemNav.module.scss';

const ItemNav = ({ href, icon, children, closeSidebar }) => {
  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        isActive ? `${itemNavStyles['item']} ${itemNavStyles['active']}` : itemNavStyles['item']
      }
      onClick={closeSidebar}
    >
      <span
        className={itemNavStyles['icon']}
        style={{
          WebkitMaskImage: `url(${process.env.PUBLIC_URL}/images/${icon})`,
          maskImage: `url(${process.env.PUBLIC_URL}/images/${icon})`,
        }}
      ></span>
      {children}
    </NavLink>
  );
};

export default ItemNav;
