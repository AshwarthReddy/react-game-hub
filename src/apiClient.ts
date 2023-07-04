import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "d956f2efaa734cc593b12ef521e4d9fc",
  },
});
