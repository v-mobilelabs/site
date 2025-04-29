import Image from "next/image";
import { notFound } from "next/navigation";
import { FindPostBySlugUseCase } from "@/application/use-case/find-post-by-slug";
import { PostDTO } from "@/domain/dtos/post.dto";

export const revalidate = 3600;

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const useCase = new FindPostBySlugUseCase();
  const { slug } = await params;
  const post: PostDTO | null = await useCase.execute(slug);

  if (!post) return notFound();

  return (
    <div className="min-h-screen p-6 sm:p-12 font-[family-name:var(--font-geist-sans)] bg-white text-black">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6">{post.title}</h1>

        {post.featureImage && (
          <Image
            src={post.featureImage}
            alt={post.title}
            width={800}
            height={400}
            className="w-full h-auto rounded-xl mb-6 object-cover"
          />
        )}

        <article
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content || "" }}
        />

        <p className="mt-10 text-sm text-gray-500">
          Author ID: {post.authorId}
        </p>
      </div>
    </div>
  );
}
