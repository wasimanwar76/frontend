import axios from "axios";

const authAPI = "https://backend-xviy.onrender.com/api/auth";

const shiftsAPI = "https://backend-xviy.onrender.com/api/shifts";

const shiftIdURL = "https://backend-xviy.onrender.com/api/student/shift";

export const registerUser = async (name, email, password, phone) => {
  try {
    const res = await axios.post(`${authAPI}/register`, {
      name,
      email,
      password,
      phone,
    });
    // console.log("response", res)
    return res.data;
  } catch (error) {
    // console.log(error.response.data)
    return error.response.data;
  }
};

export const loginUser = async (email, password) => {
  try {
    const res = await axios.post(`${authAPI}/login`, { email, password });
    console.log("response", res.data);
    return res.data;
  } catch (error) {
    console.log(error.response.data, "error");
    return error.response.data;
  }
};

export const fetchShifts = async () => {
  try {
    const res = await axios.get(shiftsAPI);
    if (res.data) {
      return res.data.shifts;
    } else {
      alert("can't find shift");
    }
  } catch (error) {
    console.log("error in fetching Shifts");
  }
};

export const fetchShiftById = async (shiftId, token) => {
  try {
    const res = await axios.get(`${shiftIdURL}/${shiftId}`, {
      headers: {
        Authorization: `${token}`,
      },
    });
    console.log(res);
    if (res.data.success) {
      console.log(res);
      return res.data.shift;
    } else {
      return error.response.data.message;
    }
  } catch (error) {
    console.log("error in fetching Shifts");
  }
};
