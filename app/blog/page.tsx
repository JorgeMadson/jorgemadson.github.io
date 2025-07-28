import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function BlogPage() {
  const posts = [
    {
      title: "My Journey from Frontend to Backend",
      description:
        "After years of creating beautiful user interfaces, I'm diving into the world of backend development. Here's why and how I'm making the transition...",
      date: "April 20, 2025",
      tags: ["Career", "Backend", "Development"],
      slug: "frontend-to-backend",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Getting Started with Python for Web Development",
      description:
        "Python has become my go-to language for backend development. In this post, I share my learning path and some useful resources for beginners...",
      date: "April 15, 2025",
      tags: ["Python", "Web Development", "Tutorial"],
      slug: "python-web-development",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Understanding Web3 and Blockchain Technology",
      description:
        "A comprehensive guide to understanding the basics of Web3 and blockchain technology for developers...",
      date: "April 5, 2025",
      tags: ["Web3", "Blockchain", "Ethereum"],
      slug: "web3-blockchain-basics",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Building a SaaS Application from Scratch",
      description: "A step-by-step guide on how to build a SaaS application from idea to deployment...",
      date: "March 28, 2025",
      tags: ["SaaS", "Development", "Business"],
      slug: "building-saas-application",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "The Power of Go for Backend Development",
      description: "Exploring the benefits of using Go for building efficient and scalable backend services...",
      date: "March 15, 2025",
      tags: ["Go", "Backend", "Performance"],
      slug: "go-backend-development",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Migrating from REST to GraphQL",
      description: "My experience transitioning from REST APIs to GraphQL and the lessons learned along the way...",
      date: "March 5, 2025",
      tags: ["GraphQL", "API", "REST"],
      slug: "rest-to-graphql",
      image: "/placeholder.svg?height=200&width=400",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2">Blog</h1>
      <p className="text-muted-foreground mb-8">Thoughts, tutorials, and insights on software development</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <Card key={index} className="flex flex-col h-full">
            <div className="aspect-video w-full overflow-hidden">
              <img
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                className="w-full h-full object-cover transition-transform hover:scale-105"
              />
            </div>
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
              <CardDescription>Posted on {post.date}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground mb-4">{post.description}</p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild>
                <Link href={`/blog/${post.slug}`}>
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
