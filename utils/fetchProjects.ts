// import { Project } from "typing";

// export const fetchProjects = async () => {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`);

//   const data = await res.json();
//   const projects: Project[] = data.projects;

//   return projects;
// };

import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "sanity";
import { Project } from "typing";

const query = groq`
*[_type == "project"] {
    ...,
    technologies[]
}`;

type Data = {
  projects: Project[];
};

export const fetchProjects = async () => {
  const res = await sanityClient.fetch(query);

  const projects: Project[] = res;
  return projects;
};

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   const projects: Project[] = await sanityClient.fetch(query);
//   res.status(200).json({ projects });
// }
