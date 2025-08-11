import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Link from "next/link"

export default function ResumePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">Resume</h1>
          <p className="text-muted-foreground">Software Engineer with {new Date().getFullYear() - 2017}+ years of experience</p>
        </div>
        <Button asChild>
          <Link href="/resume.pdf" target="_blank">
            <Download className="mr-2 h-4 w-4" /> Download PDF
          </Link>
        </Button>
      </div>

      {/* Skills Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Frontend Development</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              <Badge>HTML5</Badge>
              <Badge>CSS3</Badge>
              <Badge>JavaScript</Badge>
              <Badge>TypeScript</Badge>
              <Badge>React</Badge>
              <Badge>Vue.js</Badge>
              <Badge>Responsive Design</Badge>
              <Badge>UI/UX</Badge>
              <Badge>Three.js</Badge>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Backend Development</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              <Badge>Python</Badge>
              <Badge>C#</Badge>
              <Badge>Node.js</Badge>
              <Badge>Go</Badge>
              <Badge>RESTful APIs</Badge>
              <Badge>GraphQL</Badge>
              <Badge>SQL</Badge>
              <Badge>NoSQL</Badge>
              <Badge>Docker</Badge>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Web3 & Blockchain</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              <Badge>Ethereum</Badge>
              <Badge>Smart Contracts</Badge>
              <Badge>Solidity</Badge>
              <Badge>Web3.js</Badge>
              <Badge>Token Development</Badge>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Other Skills</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              <Badge>Git</Badge>
              <Badge>CI/CD</Badge>
              <Badge>Agile</Badge>
              <Badge>Project Management</Badge>
              <Badge>Technical Writing</Badge>
              <Badge>Public Speaking</Badge>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Work Experience */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row justify-between">
                <div>
                  <CardTitle>CrossKnowledge (Wiley Brand)</CardTitle>
                  <CardDescription>Software Engineer</CardDescription>
                </div>
                <CardDescription className="mt-2 md:mt-0">2020 - 2023</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Part of an international team responsible for building platforms and infrastructure accessed by millions
                of learners every day around the world (12 million users in 130 countries). Created impactful learning
                experiences on high-performing software.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <Badge variant="outline">Vue.js</Badge>
                <Badge variant="outline">PHP</Badge>
                <Badge variant="outline">Python</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row justify-between">
                <div>
                  <CardTitle>Contraktor</CardTitle>
                  <CardDescription>Frontend Developer</CardDescription>
                </div>
                <CardDescription className="mt-2 md:mt-0">2018 - 2020</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Worked on a platform that helps companies close deals via digital contracts with the best possible
                experience. Contributed to making Contraktor LATAM's leading company in technological solutions for
                managing contracts and digital transactions.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <Badge variant="outline">ReactJS</Badge>
                <Badge variant="outline">Phoenix</Badge>
                <Badge variant="outline">Elixir</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row justify-between">
                <div>
                  <CardTitle>Stefanini</CardTitle>
                  <CardDescription>Software Developer</CardDescription>
                </div>
                <CardDescription className="mt-2 md:mt-0">2016 - 2018</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Worked at Stefanini, a private Brazilian multinational service provider, computer software and
                consulting company founded in 1987 with 24,000 employees (in 2018).
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <Badge variant="outline">.NET</Badge>
                <Badge variant="outline">C#</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Education & Talks */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Education & Talks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Education</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Bachelor's in Computer Science</h3>
                  <p className="text-sm text-muted-foreground">University Name, 2012-2016</p>
                </div>
                <div>
                  <h3 className="font-semibold">Relevant Certifications</h3>
                  <ul className="list-disc list-inside text-sm text-muted-foreground mt-2 space-y-1">
                    <li>Web Development Bootcamp</li>
                    <li>Advanced Python Programming</li>
                    <li>Blockchain Development</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Technical Talks</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Contributing with Free Software</h3>
                  <p className="text-sm text-muted-foreground">Conference Name, 2022</p>
                  <Link
                    href="/talks/contributing-with-free-software.pdf"
                    className="text-sm text-primary hover:underline"
                    target="_blank"
                  >
                    View PDF
                  </Link>
                </div>
                <div>
                  <h3 className="font-semibold">GraphQL is what RESTs</h3>
                  <p className="text-sm text-muted-foreground">Conference Name, 2021</p>
                  <Link
                    href="/talks/graphql-is-what-rests.pdf"
                    className="text-sm text-primary hover:underline"
                    target="_blank"
                  >
                    View PDF
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
