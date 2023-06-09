import axios from "axios";

const BASE_URL = "https://attryb-one.vercel.app";

export const GetAPICALL = async (endpoint) => {
  const url = BASE_URL + `/${endpoint}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const PostAPICALL = async (endpoint, payload) => {
  const url = BASE_URL + `/${endpoint}`;
  try {
    const response = await axios.post(url, payload);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const DeleteAPICALL = async (endpoint) => {
  const url = BASE_URL + `/${endpoint}`;
  try {
    const response = await axios.delete(url);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const PutAPICALL = async (endpoint, payload) => {
  const url = BASE_URL + `/${endpoint}`;
  try {
    const response = await axios.put(url, payload);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const PatchAPICALL = async (endpoint, payload) => {
  const url = BASE_URL + `/${endpoint}`;
  try {
    const response = await axios.patch(url, payload);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
