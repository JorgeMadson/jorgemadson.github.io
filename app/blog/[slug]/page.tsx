import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { getAllPostSlugs, getPostBySlug } from "@/lib/blog"
import { remark } from 'remark'
import html from 'remark-html'

export async function generateStaticParams() {
  const slugs = getAllPostSlugs()
  return slugs.map((slug) => ({ slug }))
}

async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown)
  return result.toString()
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const contentHtml = await markdownToHtml(post.content)

  return (
    <div className="container mx-auto px-4 py-12">
      <Button variant="ghost" asChild className="mb-8">
        <Link href="/blog">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
        </Link>
      </Button>

      <article className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex flex-wrap items-center gap-2 text-muted-foreground mb-6">
          <span>By {post.author}</span>
          <span>•</span>
          <span>{post.date}</span>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags.map((tag, index) => (
            <Badge key={index} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>

        <div 
          className="prose dark:prose-invert max-w-none mb-8" 
          dangerouslySetInnerHTML={{ __html: contentHtml }} 
        />

        <Separator className="my-8" />

        <div className="flex flex-col items-center text-center p-6 bg-muted rounded-lg">
          <h3 className="text-xl font-bold mb-2">Enjoyed this post?</h3>
          <p className="text-muted-foreground mb-4">
            If you found this article helpful, consider sharing it with others who might benefit.
          </p>
          <div className="flex gap-4">
            <Button variant="outline" asChild>
              <Link href="/contact">Contact Me</Link>
            </Button>
            <Button asChild>
              <Link href="/blog">Read More Articles</Link>
            </Button>
          </div>
        </div>
      </article>
    </div>
  )
}