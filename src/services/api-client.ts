import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "28efbc2319bf4fe99539b009e1211d82",
  },
});
