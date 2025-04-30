import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";
import { FindAllPostsUseCase } from "@/application/use-case/find-all-post";
import { PaginatedPostsDTO } from "@/domain/dtos/post.dto";

export const revalidate = 3600;

type Props = {
  searchParams: {
    page?: string;
  };
};

export default async function UsersPage({ searchParams }: Props) {
  const { page } = await searchParams;
  const pageNo = Number(page) || 1;
  const limit = 9;

  const useCase = new FindAllPostsUseCase();
  const posts: PaginatedPostsDTO = await useCase.execute(pageNo, limit);
  if (!posts.posts.length) {
    redirect("/posts");
  }

  return (
    <div className="min-h-screen p-6 sm:p-12 font-[family-name:var(--font-geist-sans)] bg-white text-black">
      <h1 className="text-2xl font-bold mb-8 text-center sm:text-left">
        Latest Posts
      </h1>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {posts.posts.map((post) => (
          <Link
            key={post.id}
            href={`/posts/${post.slug}`}
            className="bg-gray-100 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
          >
            {post.featureImage ? (
              <Image
                src={post.featureImage}
                alt={post.title}
                width={400}
                height={200}
                className="object-cover w-full h-48"
              />
            ) : (
              <div className="w-full h-48 bg-gray-300 flex items-center justify-center text-sm text-gray-600">
                No image
              </div>
            )}
            <div className="p-4 flex flex-col flex-grow">
              <h2 className="text-lg font-semibold mb-2">{post.title}</h2>
              <p className="text-sm text-gray-600 mt-auto">
                Authors: {post.authors?.join(", ")}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex justify-center gap-4 mt-10">
        {pageNo > 1 && (
          <Link
            href={`?page=${pageNo - 1}`}
            className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition"
          >
            ← Previous
          </Link>
        )}
        {pageNo < posts.pages && (
          <Link
            href={`?page=${pageNo + 1}`}
            className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition"
          >
            Next →
          </Link>
        )}
      </div>
    </div>
  );
}
