import { useState } from "react";

function Alogin() {
  const [email, setEmail] = useState("admin@coffeeshop.com");
  const [password, setPassword] = useState("admin123");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit =async (e) => {
    e.preventDefault();
    console.log({ email, password });
    // yahan API / auth logic aayega
     const obj = await axios.get(`http://localhost:3001/admin?email=${email}`);
        //console.log(obj.data);
        if (obj.data.length > 0) {
            if (obj.data[0].password == obj_cate.password) {
                //session created
                sessionStorage.setItem('s_aid', obj.data[0].id);
                sessionStorage.setItem('s_aname', obj.data[0].name);

                toast.success('Login Success ');
                redirect('/dashboard');
            }
            else {
                toast.error('Login Failed Due to Wrong Password');
                return false;
            }
        }
        else {
            toast.error('Login Failed Due to Wrong Email');
            return false;
        }
        return false;
  };

  return (
    <div className="login-page">
      {/* Logo */}
      <div className="logo-box">☕</div>

      <h1 className="title">Coffee Shop Admin</h1>
      <p className="subtitle">Sign in to manage your coffee shop</p>

      {/* Card */}
      <div className="login-card">
        <h2>Welcome back</h2>
        <p className="card-subtitle">
          Enter your credentials to access the admin panel
        </p>

        <form onSubmit={handleSubmit}>
          <div className="field">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="field password-field">
            <label>Password</label>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="eye"
              onClick={() => setShowPassword(!showPassword)}
            >
              👁
            </span>
          </div>

          <button type="submit" className="signin-btn">
            Sign In
          </button>
        </form>

        <div className="demo-box">
          <strong>Demo Credentials:</strong>
          <p>Email: admin@coffeeshop.com</p>
          <p>Password: admin123</p>
        </div>
      </div>

      <p className="footer">
        Protected admin area. Unauthorized access is prohibited.
      </p>
    </div>
  );
}

export default Alogin;
