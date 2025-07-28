import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
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
            With 5+ years of experience in web development, I'm now focusing on backend technologies like Python, C#,
            JavaScript, and Go to build robust, scalable applications.
          </p>
          <div className="flex flex-wrap gap-3">
            <Badge className="px-3 py-1 text-sm">Python</Badge>
            <Badge className="px-3 py-1 text-sm">JavaScript</Badge>
            <Badge className="px-3 py-1 text-sm">C#</Badge>
            <Badge className="px-3 py-1 text-sm">Go</Badge>
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
          <AvatarImage src="/jorgemadson.github.io/JorgeMadsonFoto.webp?height=256&width=256" alt="Jorge Madson" />
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
          <Card>
            <CardHeader>
              <CardTitle>Canote Bike Shop Management</CardTitle>
              <CardDescription>SaaS for small bike businesses</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                A SaaS solution to help small bike businesses thrive by managing inventory, customers, and marketing.
              </p>
            </CardContent>
            <CardFooter>
              <Badge>SaaS</Badge>
              <Badge className="ml-2">In Progress</Badge>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>SeedCapital</CardTitle>
              <CardDescription>Crowdfunding token on ETH network</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                A token created on the Ethereum network designed for crowdfunding projects.
              </p>
            </CardContent>
            <CardFooter>
              <Badge>Web3</Badge>
              <Badge className="ml-2">Ethereum</Badge>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Samba Protocol</CardTitle>
              <CardDescription>Blockchain project (Coming Soon)</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Currently in development and about to be released. More information coming soon.
              </p>
            </CardContent>
            <CardFooter>
              <Badge>Web3</Badge>
              <Badge className="ml-2">Coming Soon</Badge>
            </CardFooter>
          </Card>
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
          <Card>
            <CardHeader>
              <CardTitle>My Journey from Frontend to Backend</CardTitle>
              <CardDescription>Posted on April 20, 2025</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                After years of creating beautiful user interfaces, I'm diving into the world of backend development.
                Here's why and how I'm making the transition...
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild>
                <Link href="/blog/frontend-to-backend">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Getting Started with Python for Web Development</CardTitle>
              <CardDescription>Posted on April 15, 2025</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Python has become my go-to language for backend development. In this post, I share my learning path and
                some useful resources for beginners...
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild>
                <Link href="/blog/python-web-development">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
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
