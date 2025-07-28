import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="md:col-span-1 flex flex-col items-center">
          <Avatar className="h-48 w-48 mb-6">
            <AvatarImage src="/JorgeMadsonFoto.webp?height=192&width=192" alt="Jorge Madson" />
            <AvatarFallback>JM</AvatarFallback>
          </Avatar>
          <div className="flex gap-4 mt-4">
            <Button variant="outline" size="icon" asChild>
              <Link href="https://github.com/jorgemadson" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link href="https://linkedin.com/in/jorgemadson" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link href="mailto:contact@jorgemadson.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
        </div>

        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-4">Hi, I'm Jorge Madson</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              I'm a software developer with 5 years of experience creating apps, websites, and software. I like to work
              on impactful things that make a difference.
            </p>
            <p>
              After spending several years focused on frontend development, I'm now transitioning to backend
              technologies. I'm proficient in Python and am expanding my skills in C#, JavaScript, and Go to build more
              robust and scalable applications.
            </p>
            <p>
              Right now my main focus is the development of SaaS and Web3 dApps. I'm passionate about creating solutions
              that solve real problems and help businesses grow.
            </p>
            <p>
              When I'm not coding, I enjoy writing technical articles, giving talks at conferences, and contributing to
              open-source projects.
            </p>
            <blockquote className="border-l-4 pl-4 italic">"Don't let your dreams be dreams" - Shia Labeouf</blockquote>
          </div>
        </div>
      </div>

      <Separator className="my-8" />

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">My Journey</h2>
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-1/3">
              <h3 className="text-xl font-semibold">Frontend Beginnings</h3>
              <p className="text-sm text-muted-foreground">2016 - 2020</p>
            </div>
            <div className="md:w-2/3">
              <p className="text-muted-foreground">
                I started my career focusing on frontend technologies, building user interfaces with React, Vue.js, and
                other modern frameworks. During this time, I developed a strong understanding of UI/UX principles and
                responsive design.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-1/3">
              <h3 className="text-xl font-semibold">Full-Stack Experience</h3>
              <p className="text-sm text-muted-foreground">2020 - 2023</p>
            </div>
            <div className="md:w-2/3">
              <p className="text-muted-foreground">
                As I progressed in my career, I began working on full-stack projects, gaining experience with backend
                technologies and databases. This period at CrossKnowledge allowed me to work with international teams
                and build platforms used by millions of learners worldwide.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-1/3">
              <h3 className="text-xl font-semibold">Backend Transition</h3>
              <p className="text-sm text-muted-foreground">2023 - Present</p>
            </div>
            <div className="md:w-2/3">
              <p className="text-muted-foreground">
                Currently, I'm focusing on deepening my backend skills, particularly in Python, Go, and C#. I'm
                passionate about building robust, scalable systems and am working on several SaaS and Web3 projects that
                challenge me to grow as a developer.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Let's Connect</h2>
        <Card>
          <CardContent className="p-6">
            <p className="text-muted-foreground mb-4">
              If you have a project in mind that excites you, or if you're looking for a developer to join your team,
              I'd love to hear from you. Let's discuss how I can help bring your ideas to life.
            </p>
            <Button asChild>
              <Link href="/contact">
                Contact Me <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
