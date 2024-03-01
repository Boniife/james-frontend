import { createSlice } from "@reduxjs/toolkit";

const projectSlice = createSlice({
  name: "projects",
  initialState: [{ key: "", img: "", title: "", link: "", description: "" }],
  reducer: {},
});

export default projectSlice.reducer;
