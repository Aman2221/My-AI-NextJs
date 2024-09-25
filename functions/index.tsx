import { ErrorToast } from "@/service/toast";

export const init_sign_up = {
  firstname: "",
  lastname: "",
  email_id: "",
  mobile_number: "",
  password: "",
};

export const init_login = {
  email_id: "",
  password: "",
};

export const check_req_feilds = (userData: { [key: string]: string }) => {
  if (
    userData.firstname &&
    userData.lastname &&
    userData.email_id &&
    userData.password &&
    userData.mobile_number
  ) {
    return true;
  } else {
    return false;
  }
};

export const login_formdata = (userData: { [key: string]: string }) => {
  const formData = new URLSearchParams();
  formData.append("email_id", userData.email_id);
  formData.append("password", userData.password);
  return formData;
};

export const signup_formdata = (userData: { [key: string]: string }) => {
  const formData = new URLSearchParams();
  formData.append("firstname", userData.firstname);
  formData.append("lastname", userData.lastname);
  formData.append("email_id", userData.email_id);
  formData.append("password", userData.password);
  formData.append("mobile_number", userData.mobile_number);
  return formData;
};

export const signout_formdata = (session_id: string) => {
  const formData = new URLSearchParams();
  formData.append("session_id", session_id);
  return formData;
};

export const file_formdata = (file: any) => {
  const formData = new FormData();
  const user_uuid = "4e216b58-fc19-4002-940e-56511dac4cb9"; //this will come from localStorage
  formData.append("uuid", user_uuid);
  formData.append("file", file);
  return formData;
};

export const setUserToLocal = (data: { [key: string]: string }) => {
  localStorage.setItem("isUserLoggedin", "true");
  localStorage.setItem("user", JSON.stringify(data));
};

export const getUserFromLocal = () => {
  const user = JSON.parse(localStorage.getItem("user") as string);
  return user.user;
};

export const removeUserToLocal = () => {
  return localStorage.removeItem("isUserLoggedin");
};

export const getSessionId = () => {
  return localStorage.getItem("session_id");
};

export const handleSendMessage = async (query: string) => {
  const user = getUserFromLocal();
  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/smart_engine/chat_with_docs_faiss`;
  try {
    const response = await fetch(url, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        uuid: user.uuid,
        question: query,
      }), // body data type must match "Content-Type" header
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const result = await response.json(); // or text(), depending on the response type

    return result;
  } catch (error) {
    ErrorToast("There was an error with the POST request:");
  }
};
