import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from "@sanity/image-url";

export const client = createClient({
  apiVersion: "2025-09-01", 
  dataset: "production",
  projectId: "2uzh6kvs",
  useCdn: false,
});

const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
    return builder.image(source)
}
