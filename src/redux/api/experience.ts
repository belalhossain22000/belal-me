import { baseApi } from "./baseApi"

const projectApi = baseApi.injectEndpoints({
  endpoints: (build) => ({

    // get all project
    getAllExperience: build.query({
      query: () =>({
        url: `/experience/get-experience`,
        method: 'GET',
      }),
     
    }),
  

  }),
})

export const { useGetAllExperienceQuery} = projectApi