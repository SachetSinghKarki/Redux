import { updateStart, updateSuccess, updateError } from "./userSlice";
import axios from 'axios'

export const updateUser = async (user, dispatch) => {
  dispatch(updateStart());
  try {
    const res = await axios.post(
      "http://localhost:4000/api/users/123/update",
      user
    );
    dispatch(updateSuccess(res.data));
    console.log(updateSuccess(res.data))
  } catch (error) {
    dispatch(updateError());console.log(error)

  }
};
