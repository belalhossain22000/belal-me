import { baseApi } from "./baseApi"

const skillApi = baseApi.injectEndpoints({
  endpoints: (build) => ({

   
    // get all skills
    getAllSkills: build.query({
      query: () =>({
        url: `/skill/all-skill`,
        method: 'GET',
      }),
     
    }),


  }),
})

export const { useGetAllSkillsQuery} = skillApi