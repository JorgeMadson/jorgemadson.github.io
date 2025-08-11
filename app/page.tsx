import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { getAllPosts } from "@/lib/blog"
import { getFeaturedProjects } from "@/lib/projects"

export default function Home() {
  const latestPosts = getAllPosts().slice(0, 2) // Últimos 2 posts
  const featuredProjects = getFeaturedProjects()
  
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 py-12">
        <div className="space-y-6 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Hi, I'm Jorge Madson</h1>
          <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground">
            Software Engineer transitioning from Frontend to Backend Development
          </h2>
          <p className="text-lg text-muted-foreground">
            With {new Date().getFullYear() - 2017}+ years of experience in web development, I'm now focusing on backend technologies like Python, C#,
            JavaScript, and Go to build robust, scalable applications.
          </p>
          <div className="flex flex-wrap gap-3">
            <Badge className="px-3 py-1 text-sm">JavaScript</Badge>
            <Badge className="px-3 py-1 text-sm">TypeScript</Badge>
            <Badge className="px-3 py-1 text-sm">Python</Badge>
            <Badge className="px-3 py-1 text-sm">React</Badge>
            <Badge className="px-3 py-1 text-sm">Vue.js</Badge>
            <Badge className="px-3 py-1 text-sm">Web3</Badge>
            <Badge className="px-3 py-1 text-sm">SaaS</Badge>
          </div>
          <div className="flex gap-4">
            <Button asChild>
              <Link href="/resume">
                View Resume <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/contact">Contact Me</Link>
            </Button>
          </div>
        </div>
        <Avatar className="h-40 w-40 md:h-64 md:w-64 rounded-full">
          <AvatarImage src="/JorgeMadsonFoto.webp?height=256&width=256" alt="Jorge Madson" />
          <AvatarFallback>JM</AvatarFallback>
        </Avatar>
      </section>

      {/* Featured Projects */}
      <section className="py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured Projects</h2>
          <Button variant="ghost" asChild>
            <Link href="/projects">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tags.slice(0, 2).map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Badge
                  className={
                    project.status === "Completed"
                      ? "bg-green-500"
                      : project.status === "In Progress"
                        ? "bg-yellow-500"
                        : "bg-blue-500"
                  }
                >
                  {project.status}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Latest from the Blog</h2>
          <Button variant="ghost" asChild>
            <Link href="/blog">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {latestPosts.map((post) => (
            <Card key={post.slug}>
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>Posted on {post.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {post.description}
                </p>
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
      </section>

      {/* Contact CTA */}
      <section className="py-12">
        <Card className="bg-muted">
          <CardContent className="flex flex-col md:flex-row justify-between items-center gap-6 p-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Let's Build Something Together</h2>
              <p className="text-muted-foreground max-w-2xl">
                Whether you need a website, a SaaS application, or help with a backend project, I'm here to help. Let's
                turn your ideas into reality.
              </p>
            </div>
            <Button size="lg" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
