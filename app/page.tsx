import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SimpleBlogCard } from "./components/lib/interface";
import { client, urlFor } from "./components/lib/sanity";

export const revalidate = 30; // revalidate at most 30 seconds

async function getData() {
  const query = `*[_type == 'blog'] | order(cratedAt desc) {
  title,
    smallDescription,
    "currentSlug": slug.current,
    titleImage
}`;

  const data = await client.fetch(query);

  return data;
}

export default async function Home() {
  const data: SimpleBlogCard[] = await getData();

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 mt-5 gap-5'>
      {data.map((post, idx) => (
        <Card key={idx}>
          <Image
            className='rounded-t-lg h-[200px] object-cover'
            width={500}
            height={500}
            src={urlFor(post.titleImage).url()}
            alt='image'
          />
          <CardContent className='mt-5'>
            <h3 className='text-lg line-clamp-2 font-bold'>{post.title}</h3>
            <p className='text-sm line-clamp-3 mt-2 text-gray-600 dark:text-gray300'>
              {post.smallDescription}
            </p>
            <Button asChild className='w-full mt-7'>
              <Link href={`/blog/${post.currentSlug}`}>Read More</Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
