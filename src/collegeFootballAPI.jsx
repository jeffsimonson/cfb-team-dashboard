import axios from "axios";

const url = "https://api.collegefootballdata.com";

export const fetchCollegeFootballData= async (fetchType, queryString) => {
  try {

    const res = await axios.get(`${url}${queryString}`);

    return res.data;

  } catch (error) {
    console.log(`Fetch${fetchType} Error`);
    console.log(error);
  }
};
