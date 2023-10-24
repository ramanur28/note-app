import { push } from "../redux/slices/noteSlice";
import { useDispatch, useSelector } from "react-redux";

const pushNote = (data) => {
  const dispatch = useDispatch();
  dispatch(push(data));
};

export { pushNote };
