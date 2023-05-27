import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { serverUrl } from "../serverUrl";

const initialState = {
  error: null,
  load: false,
  token: localStorage.getItem("token"),
  id: localStorage.getItem("id"),
  role: localStorage.getItem("role"),
  fermers: [],
  authData: null,
  bascket: [],
  users: [],
  isVisible:false
};

export const fetchAllUsers = createAsyncThunk(
  "fetch/AllUsers/",
  async (_, thunkAPI) => {
    try {
      const res = await fetch(`${serverUrl}/users`);
      const data = await res.json();
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
export const authThunk = createAsyncThunk(
  "fetch/auth",
  async (
    { login, password, name, surname, phone, mail, selectValue },
    thunkAPI
  ) => {
    try {
      const res = await fetch(`${serverUrl}/auth`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          login,
          password,
          name,
          surname,
          phone,
          mail,
          role: selectValue,
        }),
      });
      const token = await res.json();

      return token;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const authSignUp = createAsyncThunk(
  "auth/signUp",
  async ({ name, phone, mail, login, password }, thunkAPI) => {
    try {
    } catch (e) {}
  }
);

export const fetchFermersThunk = createAsyncThunk(
  "fetch/fermers",
  async (_, thunkAPI) => {
    try {
      const res = await fetch(`${serverUrl}/oneUser`);
      const data = await res.json();

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const fetchAuthUser = createAsyncThunk(
  "fetch/auth22",
  async (id, thunkAPI) => {
    try {
      const res = await fetch(`${serverUrl}/authUser/${id}`);
      const data = await res.json();

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const updateUser = createAsyncThunk(
  "fetch/auth22",
  async ({ name, surname, phone, mail, id }, thunkAPI) => {
    try {
      const res = await fetch(`${serverUrl}/updateUser/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, surname, phone, mail }),
      });
      const data = await res.json();
      thunkAPI.dispatch(fetchAuthUser);

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const following = createAsyncThunk(
  "following/fermer",
  async ({ idUser, myId }, thunkAPI) => {
    try {
      const res = await fetch(`${serverUrl}/following`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ idUser, myId }),
      });
      const data = await res.json();
      thunkAPI.dispatch(fetchAuthUser);

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const loginThunk = createAsyncThunk(
  "fetch/login",
  async ({ login, password }, thunkAPI) => {
    const {dispatch} = thunkAPI
    try {
      const res = await fetch(`${serverUrl}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ login, password }),
      });
      const token = await res.json();
      console.log(token)
      if (token.error) {
        return thunkAPI.rejectWithValue(token.error);
      }
      localStorage.setItem("token", token.token);
      localStorage.setItem("id", token.id);

      localStorage.setItem("user", JSON.stringify(token.user));

            dispatch(userActions.setAuthData(token.user));
      localStorage.setItem("role", token.role);


      return token;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const addToBascket = createAsyncThunk(
  "addToCascket/user",
  async ({ id, bascket }, thunkAPI) => {
    try {
      const res = await fetch(`${serverUrl}/addProduct/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ bascket }),
      });

      const data = await res.json();

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
export const rateMovie = createAsyncThunk(
  "rate/movies",
  async ({ rating, fermer,myId }, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:3030/fermer/rate`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ rating, fermerId:fermer,id:myId}),
      });
      const data = await res.json();

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const applicationSlice = createSlice({
  name: "application",
  initialState,
  reducers: {
    setAuthData:(state,action)=> {
      state.authData = action.payload
    },
    initAuthData: (state) => {
      const user = localStorage.getItem("user");
      if (user) {
          state.authData = JSON.parse(user);
      }
      
  },
  showRating: (state, action) => {
    state.isVisible = !state.isVisible;
  },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        state.users = action.payload;
      })
      .addCase(authThunk.pending, (state, action) => {
        state.load = true;
      })
      .addCase(authThunk.fulfilled, (state, action) => {
        state.load = false;
      })
      .addCase(loginThunk.pending, (state, action) => {
        state.load = true;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.error = action.payload;
        state.load = false;
      })

      .addCase(loginThunk.fulfilled, (state, action) => {
        state.load = false;
        state.error = null;
        state.token = action.payload.token;
        state.id = action.payload.id;
      })

      .addCase(fetchFermersThunk.pending, (state, action) => {
        state.load = true;
      })
      .addCase(fetchFermersThunk.rejected, (state, action) => {
        state.error = action.payload;
        state.load = false;
      })

      .addCase(fetchFermersThunk.fulfilled, (state, action) => {
        state.load = false;
        state.error = null;
        state.fermers = action.payload;
      })

      .addCase(fetchAuthUser.pending, (state, action) => {
        state.load = true;
      })
      .addCase(fetchAuthUser.rejected, (state, action) => {
        state.error = action.payload;
        state.load = false;
      })

      .addCase(fetchAuthUser.fulfilled, (state, action) => {
        state.load = false;
        state.error = null;
        // state.authData = action.payload;
        state.bascket = action.payload.bascket;
      })

      .addCase(addToBascket.fulfilled, (state, action) => {
        state.load = false;
        state.error = null;
        state.bascket = action.payload.bascket;
      })
      .addCase(rateMovie.fulfilled, (state, action) => {
        state.fermers = state.fermers.map((item) => {
          if (item._id === action.payload._id) {
            item.rating = action.payload.rating;
          }
          return item;
        });
      })
  },
});
export const { actions: userActions } = applicationSlice;

export default applicationSlice.reducer;
