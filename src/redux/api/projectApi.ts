import { baseApi } from "./baseApi"

const projectApi = baseApi.injectEndpoints({
  endpoints: (build) => ({

    // get all project
    getAllProjects: build.query({
      query: () =>({
        url: `/project/all-projects`,
        method: 'GET',
      }),
     
    }),
  

  }),
})

export const { useGetAllProjectsQuery} = projectApi