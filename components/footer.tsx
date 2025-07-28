import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col md:flex-row items-center justify-between py-10 gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link href="/" className="font-bold text-xl">
            Jorge Madson
          </Link>
          <p className="text-sm text-muted-foreground text-center md:text-left">
            Software Engineer transitioning from Frontend to Backend Development
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/jorgemadson" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://linkedin.com/in/jorgemadson" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="mailto:contact@jorgemadson.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Jorge Madson. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
