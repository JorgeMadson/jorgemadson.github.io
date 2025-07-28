import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

// This would typically come from a CMS or database
 export async function generateStaticParams() {
  return [
    { slug: "frontend-to-backend" },
    { slug: "python-web-development" },
  ]
 }

const getBlogPost = (slug: string) => {
  const posts = {
    "frontend-to-backend": {
      title: "My Journey from Frontend to Backend",
      date: "April 20, 2025",
      author: "Jorge Madson",
      tags: ["Career", "Backend", "Development"],
      content: `
        <p>After spending several years focused on frontend development, I decided it was time for a change. In this post, I want to share my journey transitioning from frontend to backend development, the challenges I've faced, and the lessons I've learned along the way.</p>
        
        <h2>Why I Decided to Make the Switch</h2>
        <p>Frontend development has been rewarding. I've enjoyed creating beautiful, interactive user interfaces and seeing immediate visual results of my work. However, I found myself increasingly curious about what happens behind the scenes. How does data flow through an application? How are APIs structured? How can I build more scalable systems?</p>
        <p>This curiosity, combined with a desire to become a more well-rounded developer, led me to explore backend technologies.</p>
        
        <h2>Starting with Python</h2>
        <p>I chose Python as my entry point into backend development for several reasons:</p>
        <ul>
          <li>Readable syntax that makes it approachable for beginners</li>
          <li>Versatility across web development, data analysis, and machine learning</li>
          <li>Strong community support and extensive documentation</li>
          <li>Powerful frameworks like Django and Flask</li>
        </ul>
        <p>I started with small projects, building simple APIs and command-line tools. This hands-on approach helped me grasp the fundamentals without feeling overwhelmed.</p>
        
        <h2>Expanding to Other Languages</h2>
        <p>While Python remains my primary backend language, I've also begun exploring:</p>
        <ul>
          <li>Go for its performance and concurrency features</li>
          <li>C# for its strong typing and integration with .NET</li>
          <li>Node.js to leverage my existing JavaScript knowledge</li>
        </ul>
        <p>Each language has its strengths, and I believe in using the right tool for the job rather than limiting myself to a single technology.</p>
        
        <h2>Challenges Along the Way</h2>
        <p>The transition hasn't been without challenges:</p>
        <ul>
          <li>Shifting from visual feedback to more abstract problem-solving</li>
          <li>Learning database design and optimization</li>
          <li>Understanding server architecture and deployment</li>
          <li>Developing a security-first mindset</li>
        </ul>
        <p>I've tackled these challenges through a combination of online courses, documentation, and building increasingly complex projects.</p>
        
        <h2>What I've Gained</h2>
        <p>This journey has provided numerous benefits:</p>
        <ul>
          <li>A deeper understanding of how applications work end-to-end</li>
          <li>The ability to build more robust, scalable systems</li>
          <li>Greater confidence in tackling complex technical problems</li>
          <li>More career opportunities as a full-stack developer</li>
        </ul>
        <p>Perhaps most importantly, I've rekindled my excitement for learning and growth in my career.</p>
        
        <h2>Advice for Others Making the Switch</h2>
        <p>If you're considering a similar transition, here's my advice:</p>
        <ul>
          <li>Start small with projects that interest you</li>
          <li>Don't abandon your frontend skills—they provide valuable perspective</li>
          <li>Focus on understanding core concepts rather than specific frameworks</li>
          <li>Build projects that solve real problems</li>
          <li>Connect with other backend developers for mentorship and guidance</li>
        </ul>
        <p>Remember that becoming proficient takes time. Be patient with yourself and celebrate small victories along the way.</p>
        
        <h2>What's Next</h2>
        <p>As I continue this journey, I'm focusing on:</p>
        <ul>
          <li>Deepening my knowledge of database optimization</li>
          <li>Learning more about microservices architecture</li>
          <li>Contributing to open-source backend projects</li>
          <li>Building a SaaS application that showcases my full-stack abilities</li>
        </ul>
        <p>I'm excited about the road ahead and look forward to sharing more of my experiences in future posts.</p>
        
        <p>If you're on a similar journey or have advice to share, I'd love to hear from you in the comments or via email.</p>
      `,
    },
    "python-web-development": {
      title: "Getting Started with Python for Web Development",
      date: "April 15, 2025",
      author: "Jorge Madson",
      tags: ["Python", "Web Development", "Tutorial"],
      content: `
        <p>Python has become my go-to language for backend development. In this post, I'll share my learning path and some useful resources for beginners looking to get started with Python for web development.</p>
        
        <h2>Why Python for Web Development?</h2>
        <p>Python offers several advantages for web development:</p>
        <ul>
          <li>Clean, readable syntax that's easy to learn</li>
          <li>Powerful web frameworks like Django and Flask</li>
          <li>Extensive library support for common tasks</li>
          <li>Strong community and documentation</li>
          <li>Versatility beyond web development (data science, automation, etc.)</li>
        </ul>
        
        <h2>Setting Up Your Python Environment</h2>
        <p>Before diving into web development, you'll need to set up your environment:</p>
        <ol>
          <li>Install Python (I recommend the latest stable version)</li>
          <li>Set up a virtual environment for project isolation</li>
          <li>Install pip for package management</li>
          <li>Choose a code editor or IDE (I prefer VS Code with Python extensions)</li>
        </ol>
        
        <h2>Choosing a Framework</h2>
        <p>For web development in Python, you'll likely use one of these frameworks:</p>
        
        <h3>Django</h3>
        <p>Django is a high-level, "batteries-included" framework that provides:</p>
        <ul>
          <li>An ORM for database interactions</li>
          <li>Built-in admin interface</li>
          <li>Authentication system</li>
          <li>URL routing</li>
          <li>Template engine</li>
        </ul>
        <p>It's ideal for larger applications where you want rapid development and don't mind some conventions.</p>
        
        <h3>Flask</h3>
        <p>Flask is a lightweight, "micro" framework that gives you:</p>
        <ul>
          <li>Basic routing</li>
          <li>Development server</li>
          <li>Debugger</li>
          <li>Template support</li>
        </ul>
        <p>You add other components as needed, making it perfect for smaller projects or when you want more control.</p>
        
        <h3>FastAPI</h3>
        <p>A newer option, FastAPI focuses on:</p>
        <ul>
          <li>High performance</li>
          <li>Easy API development</li>
          <li>Automatic documentation</li>
          <li>Type hints and validation</li>
        </ul>
        <p>It's excellent for building APIs, especially if performance is a concern.</p>
        
        <h2>My Learning Path</h2>
        <p>Here's the path I followed to learn Python web development:</p>
        <ol>
          <li>Learn Python basics (syntax, data structures, functions)</li>
          <li>Understand HTTP and web fundamentals</li>
          <li>Build simple command-line applications</li>
          <li>Create basic web applications with Flask</li>
          <li>Learn database concepts and ORM usage</li>
          <li>Build more complex applications with Django</li>
          <li>Study authentication, security, and deployment</li>
        </ol>
        
        <h2>Recommended Resources</h2>
        <p>These resources helped me on my journey:</p>
        <ul>
          <li>Python Documentation - The official docs are excellent</li>
          <li>Django Documentation - Comprehensive and well-organized</li>
          <li>Flask Mega-Tutorial by Miguel Grinberg - A thorough introduction to Flask</li>
          <li>Real Python - Great tutorials on various Python topics</li>
          <li>Full Stack Python - A guide to Python web development concepts</li>
        </ul>
        
        <h2>Building Your First Web Application</h2>
        <p>I recommend starting with a simple project like a to-do list or blog. This will help you learn:</p>
        <ul>
          <li>Routing and URL handling</li>
          <li>Database models and queries</li>
          <li>Form processing</li>
          <li>Templates and rendering</li>
          <li>User authentication</li>
        </ul>
        
        <h2>Next Steps</h2>
        <p>Once you're comfortable with the basics, consider exploring:</p>
        <ul>
          <li>API development with Django REST Framework or FastAPI</li>
          <li>Asynchronous Python with asyncio</li>
          <li>Testing and test-driven development</li>
          <li>Deployment to cloud platforms</li>
          <li>Containerization with Docker</li>
        </ul>
        
        <p>Python web development has been a rewarding journey for me, opening up new career opportunities and allowing me to build more complex applications. I hope this guide helps you get started on your own path!</p>
      `,
    },
  }

  return posts[slug as keyof typeof posts] || null
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

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

        <div className="prose dark:prose-invert max-w-none mb-8" dangerouslySetInnerHTML={{ __html: post.content }} />

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
