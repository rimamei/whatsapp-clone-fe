import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const register = createAsyncThunk("api/api", async () => {
    const response = await axios.get("api");
  
    return response.data;
  });
  