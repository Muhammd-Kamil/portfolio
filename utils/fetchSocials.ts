// import { Social } from "typing";

// export const fetchSocials = async () => {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`);

//   const data = await res.json();
//   const socials: Social[] = data.socials;

//   return socials;
// };

import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "sanity";
import { Social } from "typing";

const query = groq`
*[_type == "social"]`;

type Data = {
  socials: Social[];
};

export const fetchSocials = async () => {
  const res = await sanityClient.fetch(query);

  const socials: Social[] = res;
  return socials;
};

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   const socials: Social[] = await sanityClient.fetch(query);
//   res.status(200).json({ socials });
// }
