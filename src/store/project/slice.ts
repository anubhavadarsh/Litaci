import {
  createAsyncThunk,
  createSlice,
  SerializedError,
  current,
} from '@reduxjs/toolkit';
import { repo as repoAPI, IRepo, IRepoResponse } from 'services/api/repo';

interface projectState {
  entities: IRepo[];
  loading: 'idle' | 'succeeded' | 'loading' | 'failed';
  currentRequestId: string | undefined;
  error: null | SerializedError;
}

const initialState: projectState = {
  entities: [],
  loading: 'idle',
  currentRequestId: undefined,
  error: null,
};

export const fetchProjects = createAsyncThunk<
  IRepoResponse[],
  void,
  {
    state: {
      projects: projectState;
    };
    requestId: string;
  }
>('projects/fetchAll', async (_, thunkAPI) => {
  const { currentRequestId, loading } = thunkAPI.getState().projects;
  if (loading !== 'loading' && thunkAPI.requestId !== currentRequestId) return;
  const response = await repoAPI.index(thunkAPI.signal);
  const json = await response.json();
  return json;
});

export const projectSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    check: (state) => {
      console.log(current(state));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state, action) => {
        if (state.loading === 'idle') {
          state.loading = 'loading';
          state.currentRequestId = action.meta.requestId;
        }
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        if (
          state.loading === 'loading' &&
          state.currentRequestId === action.meta.requestId
        ) {
          state.loading = 'succeeded';
          const entities: IRepo[] = action.payload
            .filter(({ topics }) => topics.includes('showcase'))
            .map(
              ({
                id,
                created_at,
                description,
                html_url,
                language,
                name,
                stargazers_count,
                topics,
              }) => {
                return {
                  id,
                  created_at,
                  description,
                  html_url,
                  language,
                  name,
                  stargazers_count,
                  topics,
                };
              }
            );

          state.entities = entities;
          state.currentRequestId = undefined;
        }
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        if (
          state.loading === 'loading' &&
          state.currentRequestId === action.meta.requestId
        ) {
          state.loading = 'failed';
          state.error = action.error;
          state.currentRequestId = undefined;
        }
      });
  },
});

export const { check } = projectSlice.actions;
export default projectSlice.reducer;
