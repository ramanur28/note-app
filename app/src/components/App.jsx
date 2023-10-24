import { useSelector, useDispatch } from "react-redux";
import { login } from "../redux/slices/authSlice";
import { getNote } from "../api/api";
import { push } from "../redux/slices/noteSlice";

function App() {
  const dispatch = useDispatch();
  const login = useSelector((state) => state.auth.value);
  const note = useSelector((state) => state.note.data);
  console.log(login);
  console.log(note);
  if (login) {
    try {
      let notes = getNote();
    } catch (error) {}
    return <></>;
  }
  return (
    <div className="text-center">
      <h1>Anda Belum login</h1>
      <a href="/login">silahkan login disini</a>
    </div>
  );
}

export default App;
