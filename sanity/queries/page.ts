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
		},
		'aboutUs':pageBuilder[][_type == "aboutUs"][0]{
      heading,
      tagline,
      excerpt,
	  solutions,
      cta,
      'slider':slider.images[].asset->{
        'url':url
      }
    }, 'metrics':pageBuilder[][_type == "metrics"][0]{
      heading,
      tagline,
      'metrics':Metrics[]
    },
    'ourExperts':pageBuilder[][_type == "ourExperts"][0]{
      heading,
      tagline,
      excerpt,
      'ourExperts':ourExperts[]{
      'link': cta.link, 
      'image': image.asset-> url,
      tagline,
      heading
      }
    },

	}`;

  return await client.fetch(getPageQuery, {
    revalidate: new Date().getSeconds(),
  });
}
