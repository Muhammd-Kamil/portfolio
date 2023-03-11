// import { Experience } from "typing";

// export const fetchExperiences = async () => {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperiences`);

//   const data = await res.json();
//   const experiences: Experience[] = data.experiences;

//   return experiences;
// };

import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "sanity";
import { Experience } from "typing";

const query = groq`
*[_type == "experience"] {
  ...,
  technologies[]
}
`;

type Data = {
  experiences: Experience[];
};

export const fetchExperiences = async () => {
  const res = await sanityClient.fetch(query);

  const experiences: Experience[] = res;
  return experiences;
};

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   const experiences: Experience[] = await sanityClient.fetch(query);
//   res.status(200).json({ experiences });
// }
