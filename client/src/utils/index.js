import axios from "axios";
import { SetPosts } from "../redux/postSlice";
const APP_URL = "http://localhost:5500";

export const API = axios.create({
  baseURL: APP_URL,
  responseType: "json",
});

export const apiRequest = async ({ url, token, data, method }) => {
  //console.log("getdata fucn",method,url,data)
  try {
    const result = await API(url, {
      method: method || "GET",
      data: data,
      headers: {
        "content-type": "application/json",
        Authorization: token ? `Bearer ${token}` : "",
      },
    });
    //console.log("result",result.data.data);
    return result?.data;
  } catch (error) {
    const err = error.response.data;
    console.log(err);
    return { status: err.success, message: err.message };
  }
};

export const handleFileUpload = async (uploadFile) => {
  console.log("Cloudinary ID:", process.env.REACT_APP_CLOUDINARY_ID);

  const formData = new FormData();
  formData.append("file", uploadFile);
  formData.append("upload_preset", "social");
  try {
    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_ID}/auto/upload`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data.secure_url;
  } catch (error) {
    console.log(error);
  }
};

export const fetchPosts = async (token, dispatch, uri, data) => {
  try {
    const res = await apiRequest({
      url: uri || "/posts",
      token: token,
      method: "POST",
      data: data || {},
    });

    dispatch(SetPosts(res?.data));
    return;
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};

export const likePost = async ({ uri, token }) => {
  try {
    const res = await apiRequest({
      url: uri,
      token: token,
      method: "POST",
    });
    console.log("likepost", res);
    return;
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = async (id, token) => {
  try {
    const res = await apiRequest({
      url: "/posts/" + id,
      token: token,
      method: "DELETE",
    });
    return;
  } catch (error) {
    console.log(error);
  }
};

export const getUserInfo = async (token, id) => {
  try {
    const uri = id === undefined ? "/users/get-user" : "users/get-user/" + id;
    const res = await apiRequest({
      url: uri,
      token: token,
      method: "POST",
    });
    if (res?.message === "Authentication failed") {
      localStorage.removeItem("user");
      window.alert("User session expired.login again.");
      window.location.replace("/login");
    }
    console.log("get user info", res);
    return res?.user;
  } catch (error) {}
};

export const sendFriendRequest = async (token, id) => {
  try {
    const res = await apiRequest({
      url: "/users/friend-request",
      token: token,
      method: "POST",
      data: { requestTo: id },
    });
    console.log("responce", res);
    return;
  } catch (error) {
    console.log(error);
  }
};

export const viewUserProfile = async (token, id) => {
  try {
    const res = await apiRequest({
      url: "/users/profile-view",
      token: token,
      method: "POST",
      data: { id },
    });
    console.log("view user profile", res);
    return;
  } catch (error) {
    console.log(error);
  }
};
