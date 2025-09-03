import type { SanityImageSource } from "@sanity/image-url";
import type { PortableTextBlock } from "sanity";

export interface SimpleBlogCard {
  title: string;
  smallDescription: string;
  currentSlug: string;
  titleImage: SanityImageSource; 
}

export interface FullBlog {
  currentSlug: string;
  title: string;
  content: PortableTextBlock[]; 
  titleImage: SanityImageSource; 
}
