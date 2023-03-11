// import { Skill } from "typing";

// export const fetchSkills = async () => {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`);

//   const data = await res.json();
//   const skills: Skill[] = data.skills;

//   return skills;
// };

import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "sanity";
import { Skill } from "typing";

const query = groq`
*[_type == "skill"]`;

type Data = {
  skills: Skill[];
};

export const fetchSkills = async () => {
  const res = await sanityClient.fetch(query);

  const skills: Skill[] = res;
  return skills;
};

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   const skills: Skill[] = await sanityClient.fetch(query);
//   res.status(200).json({ skills });
// }
