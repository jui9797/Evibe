import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

const Login = () => {
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [allUsers, setAllUsers] = useState([]);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(
          "https://evibe-server-mz4t.vercel.app/allUsers"
        );
        setAllUsers(res.data);
      } catch (err) {
        console.error("Error fetching users:", err);
      }
    };

    fetchUsers();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleLogin = async (e) => {
    e.preventDefault();

    const matchedUser = allUsers.find(
      (u) => u.email === formData.email && u.password === formData.password
    );

    if (matchedUser) {
      setUser(matchedUser);
      localStorage.setItem("event_user", JSON.stringify(matchedUser));
      Swal.fire("Success", "Login Successful!", "success");
      navigate("/");
    } else {
      Swal.fire("Error", "Invalid email or password", "error");
    }
  };

  return (
    <div className=" flex items-center justify-center bg-gray-100 p-8">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-indigo-600">
          Login
        </h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
