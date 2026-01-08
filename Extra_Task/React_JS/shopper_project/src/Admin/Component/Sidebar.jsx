import { LayoutDashboard, Package, ShoppingCart, Users } from "lucide-react";
import styles from "../styles/adminStyles";

const Sidebar = ({ currentPage, setCurrentPage }) => {
  const menu = [
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={18}/> },
    { id: 'products', label: 'Products', icon: <Package size={18}/> },
    { id: 'orders', label: 'Orders', icon: <ShoppingCart size={18}/> },
    { id: 'users', label: 'Users', icon: <Users size={18}/> },
  ];

  return (
    <div style={styles.sidebar}>
      {menu.map(m => (
        <div key={m.id} onClick={() => setCurrentPage(m.id)}>
          {m.icon} {m.label}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
