import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Users, 
  FolderTree, 
  Star, 
  Settings, 
  LogOut,
  Search,
  Bell,
  ChevronDown,
  Plus,
  Edit,
  Trash2,
  Eye,
  DollarSign,
  TrendingUp,
  ShoppingBag
} from 'lucide-react';

// Dummy Data
const dummyProducts = [
  { id: 1, name: 'Tank Top', category: 'Women', price: 50, stock: 120, status: 'Active', image: 'https://via.placeholder.com/60' },
  { id: 2, name: 'Corater Shoes', category: 'Men', price: 75, stock: 45, status: 'Active', image: 'https://via.placeholder.com/60' },
  { id: 3, name: 'Polo Shirt', category: 'Men', price: 60, stock: 80, status: 'Active', image: 'https://via.placeholder.com/60' },
  { id: 4, name: 'T-Shirt Mockup', category: 'Women', price: 40, stock: 150, status: 'Active', image: 'https://via.placeholder.com/60' },
  { id: 5, name: 'Running Shoes', category: 'Children', price: 55, stock: 0, status: 'Out of Stock', image: 'https://via.placeholder.com/60' },
];

const dummyOrders = [
  { id: '#ORD-001', customer: 'John Doe', date: '2024-12-28', total: 150, status: 'Pending', items: 3 },
  { id: '#ORD-002', customer: 'Jane Smith', date: '2024-12-27', total: 280, status: 'Shipped', items: 5 },
  { id: '#ORD-003', customer: 'Mike Johnson', date: '2024-12-27', total: 95, status: 'Delivered', items: 2 },
  { id: '#ORD-004', customer: 'Sarah Wilson', date: '2024-12-26', total: 420, status: 'Pending', items: 8 },
  { id: '#ORD-005', customer: 'Tom Brown', date: '2024-12-26', total: 180, status: 'Shipped', items: 4 },
];

const dummyUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Customer', joined: '2024-01-15', orders: 12 },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Customer', joined: '2024-02-20', orders: 8 },
  { id: 3, name: 'Admin User', email: 'admin@shoppers.com', role: 'Admin', joined: '2023-12-01', orders: 0 },
  { id: 4, name: 'Mike Johnson', email: 'mike@example.com', role: 'Customer', joined: '2024-03-10', orders: 15 },
];

const dummyCategories = [
  { id: 1, name: 'Women', products: 45, status: 'Active' },
  { id: 2, name: 'Men', products: 38, status: 'Active' },
  { id: 3, name: 'Children', products: 22, status: 'Active' },
  { id: 4, name: 'Shoes', products: 30, status: 'Active' },
  { id: 5, name: 'Accessories', products: 18, status: 'Active' },
];

const dummyReviews = [
  { id: 1, product: 'Tank Top', customer: 'John Doe', rating: 5, comment: 'Great quality!', date: '2024-12-20' },
  { id: 2, product: 'Corater Shoes', customer: 'Jane Smith', rating: 4, comment: 'Good fit, comfortable.', date: '2024-12-19' },
  { id: 3, product: 'Polo Shirt', customer: 'Mike Johnson', rating: 5, comment: 'Perfect for summer!', date: '2024-12-18' },
];

// Main App Component
const Alogin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  if (!isLoggedIn) {
    return <LoginPage onLogin={() => setIsLoggedIn(true)} />;
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard': return <Dashboard />;
      case 'products': return <ProductsList />;
      case 'add-product': return <AddProduct onBack={() => setCurrentPage('products')} />;
      case 'orders': return <OrdersList />;
      case 'users': return <UsersList />;
      case 'categories': return <CategoriesList />;
      case 'reviews': return <ReviewsList />;
      case 'settings': return <Settings />;
      default: return <Dashboard />;
    }
  };

  return (
    <div style={styles.container}>
      <Sidebar 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}
        isOpen={sidebarOpen}
      />
      <div style={styles.mainContent}>
        <TopNavbar 
          onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
          showProfileMenu={showProfileMenu}
          setShowProfileMenu={setShowProfileMenu}
          onLogout={() => setIsLoggedIn(false)}
        />
        <div style={styles.pageContent}>
          {renderPage()}
        </div>
      </div>
    </div>
  );
};

// Login Page Component
const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div style={styles.loginContainer}>
      <div style={styles.loginCard}>
        <div style={styles.loginHeader}>
          <h1 style={styles.loginLogo}>Shoppers</h1>
          <p style={styles.loginSubtitle}>Admin Panel</p>
        </div>
        <form onSubmit={handleSubmit} style={styles.loginForm}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              placeholder="admin@shoppers.com"
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              placeholder="••••••••"
              required
            />
          </div>
          <button type="submit" style={styles.loginButton}>
            Sign In
          </button>
          <p style={styles.loginHint}>Hint: Click "Sign In" to access the admin panel</p>
        </form>
      </div>
    </div>
  );
};

// Sidebar Component
const Sidebar = ({ currentPage, setCurrentPage, isOpen }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
    { id: 'products', label: 'Products', icon: <Package size={20} /> },
    { id: 'orders', label: 'Orders', icon: <ShoppingCart size={20} /> },
    { id: 'users', label: 'Users', icon: <Users size={20} /> },
    { id: 'categories', label: 'Categories', icon: <FolderTree size={20} /> },
    { id: 'reviews', label: 'Reviews', icon: <Star size={20} /> },
    { id: 'settings', label: 'Settings', icon: <Settings size={20} /> },
  ];

  return (
    <div style={{...styles.sidebar, width: isOpen ? '260px' : '0', overflow: 'hidden'}}>
      <div style={styles.sidebarHeader}>
        <h2 style={styles.sidebarLogo}>Shoppers</h2>
        <p style={styles.sidebarSubtitle}>Admin Dashboard</p>
      </div>
      <nav style={styles.sidebarNav}>
        {menuItems.map(item => (
          <div
            key={item.id}
            onClick={() => setCurrentPage(item.id)}
            style={{
              ...styles.menuItem,
              backgroundColor: currentPage === item.id ? '#7971ea' : 'transparent',
              color: currentPage === item.id ? '#fff' : '#8492a6'
            }}
          >
            {item.icon}
            <span style={styles.menuLabel}>{item.label}</span>
          </div>
        ))}
      </nav>
    </div>
  );
};

// Top Navbar Component
const TopNavbar = ({ onToggleSidebar, showProfileMenu, setShowProfileMenu, onLogout }) => {
  return (
    <div style={styles.topNavbar}>
      <div style={styles.navLeft}>
        <button onClick={onToggleSidebar} style={styles.menuToggle}>☰</button>
        <div style={styles.searchBar}>
          <Search size={18} color="#8492a6" />
          <input 
            type="text" 
            placeholder="Search..." 
            style={styles.searchInput}
          />
        </div>
      </div>
      <div style={styles.navRight}>
        <button style={styles.iconButton}>
          <Bell size={20} />
          <span style={styles.badge}>3</span>
        </button>
        <div style={styles.profileSection}>
          <div 
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            style={styles.profileTrigger}
          >
            <div style={styles.avatar}>A</div>
            <span style={styles.profileName}>Admin User</span>
            <ChevronDown size={16} />
          </div>
          {showProfileMenu && (
            <div style={styles.profileMenu}>
              <div style={styles.profileMenuItem}>Profile</div>
              <div style={styles.profileMenuItem}>Settings</div>
              <div 
                onClick={onLogout}
                style={{...styles.profileMenuItem, color: '#f56565'}}
              >
                <LogOut size={16} />
                <span>Logout</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Dashboard Page
const Dashboard = () => {
  const stats = [
    { label: 'Total Revenue', value: '$45,231', icon: <DollarSign size={24} />, color: '#7971ea', change: '+12%' },
    { label: 'Total Orders', value: '356', icon: <ShoppingCart size={24} />, color: '#48bb78', change: '+8%' },
    { label: 'Total Products', value: '153', icon: <Package size={24} />, color: '#ed8936', change: '+3%' },
    { label: 'Total Users', value: '2,543', icon: <Users size={24} />, color: '#4299e1', change: '+18%' },
  ];

  return (
    <div>
      <h1 style={styles.pageTitle}>Dashboard</h1>
      <div style={styles.statsGrid}>
        {stats.map((stat, index) => (
          <div key={index} style={styles.statCard}>
            <div style={styles.statContent}>
              <div>
                <p style={styles.statLabel}>{stat.label}</p>
                <h3 style={styles.statValue}>{stat.value}</h3>
                <span style={styles.statChange}>{stat.change} from last month</span>
              </div>
              <div style={{...styles.statIcon, backgroundColor: stat.color + '20', color: stat.color}}>
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div style={styles.chartsGrid}>
        <div style={styles.chartCard}>
          <h3 style={styles.cardTitle}>Recent Orders</h3>
          <table style={styles.table}>
            <thead>
              <tr style={styles.tableHeader}>
                <th style={styles.th}>Order ID</th>
                <th style={styles.th}>Customer</th>
                <th style={styles.th}>Total</th>
                <th style={styles.th}>Status</th>
              </tr>
            </thead>
            <tbody>
              {dummyOrders.slice(0, 5).map(order => (
                <tr key={order.id} style={styles.tableRow}>
                  <td style={styles.td}>{order.id}</td>
                  <td style={styles.td}>{order.customer}</td>
                  <td style={styles.td}>${order.total}</td>
                  <td style={styles.td}>
                    <span style={getStatusStyle(order.status)}>{order.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Products List Page
const ProductsList = () => {
  const [products, setProducts] = useState(dummyProducts);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div style={styles.pageHeader}>
        <h1 style={styles.pageTitle}>Products Management</h1>
        <button style={styles.primaryButton}>
          <Plus size={18} />
          Add New Product
        </button>
      </div>
      
      <div style={styles.card}>
        <div style={styles.tableControls}>
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={styles.searchInput2}
          />
        </div>
        
        <table style={styles.table}>
          <thead>
            <tr style={styles.tableHeader}>
              <th style={styles.th}>Image</th>
              <th style={styles.th}>Name</th>
              <th style={styles.th}>Category</th>
              <th style={styles.th}>Price</th>
              <th style={styles.th}>Stock</th>
              <th style={styles.th}>Status</th>
              <th style={styles.th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map(product => (
              <tr key={product.id} style={styles.tableRow}>
                <td style={styles.td}>
                  <img src={product.image} alt={product.name} style={styles.productImage} />
                </td>
                <td style={styles.td}>{product.name}</td>
                <td style={styles.td}>{product.category}</td>
                <td style={styles.td}>${product.price}</td>
                <td style={styles.td}>{product.stock}</td>
                <td style={styles.td}>
                  <span style={getStatusStyle(product.status)}>{product.status}</span>
                </td>
                <td style={styles.td}>
                  <div style={styles.actionButtons}>
                    <button style={styles.iconBtn} title="View">
                      <Eye size={16} />
                    </button>
                    <button style={styles.iconBtn} title="Edit">
                      <Edit size={16} />
                    </button>
                    <button style={styles.iconBtnDanger} title="Delete">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Add Product Page
const AddProduct = ({ onBack }) => {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    stock: '',
    description: '',
    status: 'Active'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Product added successfully!');
    onBack();
  };

  return (
    <div>
      <button onClick={onBack} style={styles.backButton}>← Back to Products</button>
      <h1 style={styles.pageTitle}>Add New Product</h1>
      
      <div style={styles.card}>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formRow}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Product Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                style={styles.input}
                placeholder="Enter product name"
                required
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Category</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value})}
                style={styles.input}
                required
              >
                <option value="">Select category</option>
                <option value="Women">Women</option>
                <option value="Men">Men</option>
                <option value="Children">Children</option>
                <option value="Shoes">Shoes</option>
              </select>
            </div>
          </div>
          
          <div style={styles.formRow}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Price ($)</label>
              <input
                type="number"
                value={formData.price}
                onChange={(e) => setFormData({...formData, price: e.target.value})}
                style={styles.input}
                placeholder="0.00"
                required
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Stock Quantity</label>
              <input
                type="number"
                value={formData.stock}
                onChange={(e) => setFormData({...formData, stock: e.target.value})}
                style={styles.input}
                placeholder="0"
                required
              />
            </div>
          </div>
          
          <div style={styles.formGroup}>
            <label style={styles.label}>Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              style={{...styles.input, minHeight: '100px', resize: 'vertical'}}
              placeholder="Enter product description"
            />
          </div>
          
          <div style={styles.formGroup}>
            <label style={styles.label}>Status</label>
            <select
              value={formData.status}
              onChange={(e) => setFormData({...formData, status: e.target.value})}
              style={styles.input}
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
          
          <div style={styles.formActions}>
            <button type="button" onClick={onBack} style={styles.secondaryButton}>
              Cancel
            </button>
            <button type="submit" style={styles.primaryButton}>
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Orders List Page
const OrdersList = () => {
  return (
    <div>
      <h1 style={styles.pageTitle}>Orders Management</h1>
      <div style={styles.card}>
        <table style={styles.table}>
          <thead>
            <tr style={styles.tableHeader}>
              <th style={styles.th}>Order ID</th>
              <th style={styles.th}>Customer</th>
              <th style={styles.th}>Date</th>
              <th style={styles.th}>Items</th>
              <th style={styles.th}>Total</th>
              <th style={styles.th}>Status</th>
              <th style={styles.th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {dummyOrders.map(order => (
              <tr key={order.id} style={styles.tableRow}>
                <td style={styles.td}>{order.id}</td>
                <td style={styles.td}>{order.customer}</td>
                <td style={styles.td}>{order.date}</td>
                <td style={styles.td}>{order.items}</td>
                <td style={styles.td}>${order.total}</td>
                <td style={styles.td}>
                  <span style={getStatusStyle(order.status)}>{order.status}</span>
                </td>
                <td style={styles.td}>
                  <div style={styles.actionButtons}>
                    <button style={styles.iconBtn} title="View">
                      <Eye size={16} />
                    </button>
                    <button style={styles.iconBtn} title="Edit">
                      <Edit size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Users List Page
const UsersList = () => {
  return (
    <div>
      <h1 style={styles.pageTitle}>Users Management</h1>
      <div style={styles.card}>
        <table style={styles.table}>
          <thead>
            <tr style={styles.tableHeader}>
              <th style={styles.th}>Name</th>
              <th style={styles.th}>Email</th>
              <th style={styles.th}>Role</th>
              <th style={styles.th}>Joined</th>
              <th style={styles.th}>Orders</th>
              <th style={styles.th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {dummyUsers.map(user => (
              <tr key={user.id} style={styles.tableRow}>
                <td style={styles.td}>{user.name}</td>
                <td style={styles.td}>{user.email}</td>
                <td style={styles.td}>
                  <span style={getRoleStyle(user.role)}>{user.role}</span>
                </td>
                <td style={styles.td}>{user.joined}</td>
                <td style={styles.td}>{user.orders}</td>
                <td style={styles.td}>
                  <div style={styles.actionButtons}>
                    <button style={styles.iconBtn} title="View">
                      <Eye size={16} />
                    </button>
                    <button style={styles.iconBtn} title="Edit">
                      <Edit size={16} />
                    </button>
                    <button style={styles.iconBtnDanger} title="Delete">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Categories List Page
const CategoriesList = () => {
  return (
    <div>
      <div style={styles.pageHeader}>
        <h1 style={styles.pageTitle}>Categories Management</h1>
        <button style={styles.primaryButton}>
          <Plus size={18} />
          Add Category
        </button>
      </div>
      <div style={styles.card}>
        <table style={styles.table}>
          <thead>
            <tr style={styles.tableHeader}>
              <th style={styles.th}>Category Name</th>
              <th style={styles.th}>Products</th>
              <th style={styles.th}>Status</th>
              <th style={styles.th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {dummyCategories.map(category => (
              <tr key={category.id} style={styles.tableRow}>
                <td style={styles.td}>{category.name}</td>
                <td style={styles.td}>{category.products}</td>
                <td style={styles.td}>
                  <span style={getStatusStyle(category.status)}>{category.status}</span>
                </td>
                <td style={styles.td}>
                  <div style={styles.actionButtons}>
                    <button style={styles.iconBtn} title="Edit">
                      <Edit size={16} />
                    </button>
                    <button style={styles.iconBtnDanger} title="Delete">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Reviews List Page
const ReviewsList = () => {
  return (
    <div>
      <h1 style={styles.pageTitle}>Reviews Management</h1>
      <div style={styles.card}>
        <table style={styles.table}>
          <thead>
            <tr style={styles.tableHeader}>
              <th style={styles.th}>Product</th>
              <th style={styles.th}>Customer</th>
              <th style={styles.th}>Rating</th>
              <th style={styles.th}>Comment</th>
              <th style={styles.th}>Date</th>
              <th style={styles.th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {dummyReviews.map(review => (
              <tr key={review.id} style={styles.tableRow}>
                <td style={styles.td}>{review.product}</td>
                <td style={styles.td}>{review.customer}</td>
                <td style={styles.td}>
                  <div style={styles.rating}>
                    {'⭐'.repeat(review.rating)}
                  </div>
                </td>
                <td style={styles.td}>{review.comment}</td>
                <td style={styles.td}>{review.date}</td>
                <td style={styles.td}>
                  <div style={styles.actionButtons}>
                    <button style={styles.iconBtn} title="View">
                      <Eye size={16} />
                    </button>
                    <button style={styles.iconBtnDanger} title="Delete">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// // Settings Page
// const Settings = () => {
//   return (
//     <div>
//       <h1 style={styles.pageTitle}>Settings</h1>
//       <div style={styles.card}>
//         <h3 style={styles.cardTitle}>General Settings</h3>
//         <form style={styles.form}>
//           <div style={styles.formGroup}>
//             <label style={styles.label}>Store Name</label>
//             <input
//               type="text"
//               defaultValue="Shoppers"
//               style={styles.input}
//             />
//           </div>
//           <div style={styles.formGroup}>
//             <label style={styles.label}>Store Email</label>
//             <input
//               type="email"
//               defaultValue="support@shoppers.com"
//               style={styles.input}
//             />
//           </div>
//           <div style={styles.formGroup}>
//             <label style={styles.label}>Currency</label>
//             <select style={styles.input}>
//               <option value="USD">USD ($)</option>
//               <option value="EUR">EUR (€)</option>
//               <option value="GBP">GBP (£)</option>
//             </select>
//           </div>
//           <div style={styles.formActions}>
//             <button type="submit" style={styles.primaryButton}>
//               Save Changes
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// Helper Functions
const getStatusStyle = (status) => {
  const baseStyle = {
    padding: '4px 12px',
    borderRadius: '12px',
    fontSize: '12px',
    fontWeight: '500',
  };
  
  if (status === 'Active' || status === 'Delivered') {
    return {...baseStyle, backgroundColor: '#c6f6d5', color: '#22543d'};
  } else if (status === 'Pending') {
    return {...baseStyle, backgroundColor: '#feebc8', color: '#7c2d12'};
  } else if (status === 'Shipped') {
    return {...baseStyle, backgroundColor: '#bee3f8', color: '#1e4e8c'};
  } else {
    return {...baseStyle, backgroundColor: '#fed7d7', color: '#742a2a'};
  }
};

const getRoleStyle = (role) => {
  const baseStyle = {
    padding: '4px 12px',
    borderRadius: '12px',
    fontSize: '12px',
    fontWeight: '500',
  };
  
  if (role === 'Admin') {
    return {...baseStyle, backgroundColor: '#e9d8fd', color: '#44337a'};
  } else {
    return {...baseStyle, backgroundColor: '#e2e8f0', color: '#2d3748'};
  }
};

// Styles Object
const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    backgroundColor: '#f7fafc',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
  sidebar: {
    backgroundColor: '#2d3748',
    color: '#fff',
    transition: 'width 0.3s ease',
    overflowY: 'auto',
  },
  sidebarHeader: {
    padding: '24px 20px',
    borderBottom: '1px solid #4a5568',
  },
  sidebarLogo: {
    fontSize: '24px',
    fontWeight: '700',
    margin: 0,
    color: '#7971ea',
  },
  sidebarSubtitle: {
    fontSize: '12px',
    color: '#a0aec0',
    margin: '4px 0 0 0',
  },
  sidebarNav: {
    padding: '20px 0',
  },
  menuItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '12px 20px',
    cursor: 'pointer',
    transition: 'all 0.2s',
    gap: '12px',
  },
  menuLabel: {
    fontSize: '14px',
    fontWeight: '500',
  },
  mainContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  topNavbar: {
    height: '64px',
    backgroundColor: '#fff',
    borderBottom: '1px solid #e2e8f0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 24px',
  },
  navLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  },
  menuToggle: {
    background: 'none',
    border: 'none',
    fontSize: '24px',
    cursor: 'pointer',
    color: '#4a5568',
  },
  searchBar: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: '#f7fafc',
    padding: '8px 16px',
    borderRadius: '8px',
    width: '300px',
  },
  searchInput: {
    border: 'none',
    backgroundColor: 'transparent',
    outline: 'none',
    fontSize: '14px',
    width: '100%',
  },
  searchInput2: {
    border: '1px solid #e2e8f0',
    padding: '8px 16px',
    borderRadius: '8px',
    fontSize: '14px',
    width: '300px',
    outline: 'none',
  },
  navRight: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  iconButton: {
    position: 'relative',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '8px',
    borderRadius: '8px',
    color: '#4a5568',
    transition: 'background-color 0.2s',
  },
  badge: {
    position: 'absolute',
    top: '4px',
    right: '4px',
    backgroundColor: '#f56565',
    color: '#fff',
    fontSize: '10px',
    padding: '2px 5px',
    borderRadius: '10px',
  },
  profileSection: {
    position: 'relative',
  },
  profileTrigger: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    cursor: 'pointer',
    padding: '4px 8px',
    borderRadius: '8px',
    transition: 'background-color 0.2s',
  },
  avatar: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    backgroundColor: '#7971ea',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '600',
    fontSize: '14px',
  },
  profileName: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#2d3748',
  },
  profileMenu: {
    position: 'absolute',
    top: '100%',
    right: 0,
    marginTop: '8px',
    backgroundColor: '#fff',
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    minWidth: '180px',
    zIndex: 1000,
  },
  profileMenuItem: {
    padding: '12px 16px',
    cursor: 'pointer',
    fontSize: '14px',
    color: '#2d3748',
    transition: 'background-color 0.2s',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  pageContent: {
    flex: 1,
    overflow: 'auto',
    padding: '24px',
  },
  pageTitle: {
    fontSize: '28px',
    fontWeight: '700',
    color: '#2d3748',
    marginBottom: '24px',
  },
  pageHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '24px',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
    marginBottom: '24px',
  },
  statCard: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
  },
  statContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  statLabel: {
    fontSize: '14px',
    color: '#718096',
    margin: '0 0 8px 0',
  },
  statValue: {
    fontSize: '28px',
    fontWeight: '700',
    color: '#2d3748',
    margin: '0 0 4px 0',
  },
  statChange: {
    fontSize: '12px',
    color: '#48bb78',
  },
  statIcon: {
    width: '48px',
    height: '48px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chartsGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '20px',
  },
  chartCard: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
  },
  cardTitle: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#2d3748',
    marginBottom: '16px',
  },
  card: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  tableHeader: {
    borderBottom: '2px solid #e2e8f0',
  },
  th: {
    padding: '12px',
    textAlign: 'left',
    fontSize: '12px',
    fontWeight: '600',
    color: '#718096',
    textTransform: 'uppercase',
  },
  tableRow: {
    borderBottom: '1px solid #e2e8f0',
    transition: 'background-color 0.2s',
  },
  td: {
    padding: '12px',
    fontSize: '14px',
    color: '#2d3748',
  },
  primaryButton: {
    backgroundColor: '#7971ea',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    transition: 'background-color 0.2s',
  },
  secondaryButton: {
    backgroundColor: '#e2e8f0',
    color: '#2d3748',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  },
  backButton: {
    background: 'none',
    border: 'none',
    color: '#7971ea',
    fontSize: '14px',
    cursor: 'pointer',
    marginBottom: '16px',
    padding: '8px 0',
  },
  actionButtons: {
    display: 'flex',
    gap: '8px',
  },
  iconBtn: {
    background: 'none',
    border: '1px solid #e2e8f0',
    padding: '6px',
    borderRadius: '6px',
    cursor: 'pointer',
    color: '#4a5568',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s',
  },
  iconBtnDanger: {
    background: 'none',
    border: '1px solid #fed7d7',
    padding: '6px',
    borderRadius: '6px',
    cursor: 'pointer',
    color: '#f56565',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s',
  },
  productImage: {
    width: '40px',
    height: '40px',
    borderRadius: '8px',
    objectFit: 'cover',
  },
  tableControls: {
    marginBottom: '16px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  formRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  label: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#2d3748',
  },
  input: {
    padding: '10px 12px',
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    fontSize: '14px',
    outline: 'none',
    transition: 'border-color 0.2s',
  },
  formActions: {
    display: 'flex',
    gap: '12px',
    justifyContent: 'flex-end',
    marginTop: '8px',
  },
  rating: {
    fontSize: '16px',
  },
  loginContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#f7fafc',
    padding: '20px',
  },
  loginCard: {
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px',
  },
  loginHeader: {
    textAlign: 'center',
    marginBottom: '32px',
  },
  loginLogo: {
    fontSize: '32px',
    fontWeight: '700',
    color: '#7971ea',
    margin: '0 0 8px 0',
  },
  loginSubtitle: {
    fontSize: '14px',
    color: '#718096',
    margin: 0,
  },
  loginForm: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  loginButton: {
    backgroundColor: '#7971ea',
    color: '#fff',
    border: 'none',
    padding: '12px',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  },
  loginHint: {
    fontSize: '12px',
    color: '#a0aec0',
    textAlign: 'center',
    margin: 0,
  },
};

export default Alogin;