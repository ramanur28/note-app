import { useState } from "react";

export default function (props) {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <div className="form-unit">
        <label className="form-label">
          Username
          <input
            type="username"
            name="username"
            value={form.username}
            onChange={handleChange}
            required
            className="form-control text-center"
          />
        </label>
      </div>
      <div className="form-unit">
        <label className="form-label">
          Password
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
            className="form-control text-center"
          />
        </label>
      </div>

      <button type="submit" className="btn btn-primary">
        submit
      </button>
    </form>
  );
}
