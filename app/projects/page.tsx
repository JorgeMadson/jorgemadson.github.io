import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { getAllProjects } from "@/lib/projects"

export default function ProjectsPage() {
  const projects = getAllProjects()

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2">Projects</h1>
      <p className="text-muted-foreground mb-8">A collection of my work and side projects</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="flex flex-col h-full">
            <div className="aspect-video w-full overflow-hidden">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover transition-transform hover:scale-105"
              />
            </div>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
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
            <CardFooter className="flex gap-2">
              {project.link && (
                <Button variant="outline" size="sm" asChild>
                  <Link href={project.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> View Live
                  </Link>
                </Button>
              )}
              {project.github && (
                <Button variant="outline" size="sm" asChild>
                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> GitHub
                  </Link>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
