import { groq } from "next-sanity";
import { client } from "../lib/client";

export async function getHomePage() {
  const getPageQuery = groq`*[_type == "page"][slug == 'home'][0]{
		slug,
		'hero':pageBuilder[][_type == "hero"][0]{
			heading,
			tagline
		},
		'promotion':pageBuilder[][_type == "promotion"][0]{
			link,
			title
		},
		'solutions':pageBuilder[][_type == "solutions"][0]{
			heading,
			tagline,
			cta,
			solutions
		}

	}`;

  return await client.fetch(getPageQuery, {
    revalidate: new Date().getSeconds(),
  });
}
