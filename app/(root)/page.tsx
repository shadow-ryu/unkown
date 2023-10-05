"use client ";
import PostCard from "@/components/custom-ui/cards/PostCard";
import { SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";


const dummyPostCard = {
  id: '1',
  currentUserId: 'user123',
  parentId: null,
  content: 'This is a sample post.',
  text:"loremhjvbfdhofhvbehrbfdohb",
  author: {
    name: 'John Doe',
    image: 'https://unsplash.com/photos/a-person-sitting-on-a-bench-on-a-beach-DYOrw2-eMqs',
    id: 'author123',
  },
  community: {
    id: 'community123',
    name: 'Sample Community',
    image: 'https://cdn.pixabay.com/photo/2023/09/19/12/34/dog-8262506_1280.jpg',
  },
  createdAt: '2023-09-30T10:00:00Z',
  comments: [
    {
      author: {
        image: 'https://cdn.pixabay.com/photo/2023/09/01/20/06/spa-8227623_1280.jpg',
      },
    },
    {
      author: {
        image: 'https://cdn.pixabay.com/photo/2023/09/01/20/06/spa-8227623_1280.jpg',
      },
    },
  ],
  isComment: true,
};

export default function Home() {
  return (
      <>
        <h1 className='head-text text-left'>Home</h1>
  
        <section className='mt-9 flex flex-col gap-10'>
          {/* {result.posts.length === 0 ? (
            <p className='no-result'>No threads found</p>
          ) : (
            <> */}
             
                <PostCard
                  key={dummyPostCard._id}
                  id={dummyPostCard._id}
                  currentUserId={dummyPostCard.id}
                  parentId={dummyPostCard.parentId}
                  content={dummyPostCard.text}
                  author={dummyPostCard.author}
                  community={dummyPostCard.community}
                  createdAt={dummyPostCard.createdAt}
                  comments={dummyPostCard.comments}
                />
              {/* ))}
            </>
          )} */}
        </section>
  
        {/* <Pagination
          path='/'
          pageNumber={searchParams?.page ? +searchParams.page : 1}
          isNext={result.isNext}
        /> */}
      </>
  
  );
}
