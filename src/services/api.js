const BASE_URL = "http://localhost:8080/api";

export const apiCall = async (endpoint, method = "GET", body = null) => {
  try {
    const token = localStorage.getItem("token");

    const options = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (token) {
      options.headers.Authorization = `Bearer ${token}`;
    }

    if (body) {
      options.body = JSON.stringify(body);
    }

    const response = await fetch(`${BASE_URL}${endpoint}`, options);

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("API Error:", error);
    return { status: "error", message: "Something went wrong" };
  }
};