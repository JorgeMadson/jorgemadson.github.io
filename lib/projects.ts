import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface Project {
  title: string
  description: string
  status: string
  tags: string[]
  link: string | null
  github: string | null
  image: string
  featured: boolean
  order: number
}

const projectsDirectory = path.join(process.cwd(), 'content/projects')

export function getAllProjects(): Project[] {
  try {
    const fileNames = fs.readdirSync(projectsDirectory)
    const allProjectsData = fileNames
      .filter((fileName) => fileName.endsWith('.mdx'))
      .map((fileName) => {
        const fullPath = path.join(projectsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const matterResult = matter(fileContents)

        return {
          title: matterResult.data.title,
          description: matterResult.data.description,
          status: matterResult.data.status,
          tags: matterResult.data.tags || [],
          link: matterResult.data.link,
          github: matterResult.data.github,
          image: matterResult.data.image,
          featured: matterResult.data.featured ?? false,
          order: matterResult.data.order ?? 999,
        } as Project
      })
      .sort((a, b) => a.order - b.order) // Sort by order field

    return allProjectsData
  } catch (error) {
    console.error('Error reading projects:', error)
    return []
  }
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter(project => project.featured)
}