import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  author: string
  tags: string[]
  image: string
  published: boolean
  content: string
}

const postsDirectory = path.join(process.cwd(), 'content/blog')

export function getAllPosts(): BlogPost[] {
  try {
    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames
      .filter((fileName) => fileName.endsWith('.mdx'))
      .map((fileName) => {
        const slug = fileName.replace(/\.mdx$/, '')
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const matterResult = matter(fileContents)

        return {
          slug,
          title: matterResult.data.title,
          description: matterResult.data.description,
          date: matterResult.data.date,
          author: matterResult.data.author,
          tags: matterResult.data.tags || [],
          image: matterResult.data.image,
          published: matterResult.data.published ?? true,
          content: matterResult.content,
        } as BlogPost
      })
      .filter((post) => post.published)
      .sort((a, b) => {
        const dateA = new Date(a.date).getTime()
        const dateB = new Date(b.date).getTime()
        return dateB - dateA // Most recent first
      })

    return allPostsData
  } catch (error) {
    console.error('Error reading blog posts:', error)
    return []
  }
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`)
    
    if (!fs.existsSync(fullPath)) {
      return null
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    const post: BlogPost = {
      slug,
      title: matterResult.data.title,
      description: matterResult.data.description,
      date: matterResult.data.date,
      author: matterResult.data.author,
      tags: matterResult.data.tags || [],
      image: matterResult.data.image,
      published: matterResult.data.published ?? true,
      content: matterResult.content,
    }

    return post.published ? post : null
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error)
    return null
  }
}

export function getAllPostSlugs(): string[] {
  return getAllPosts().map((post) => post.slug)
}

export function getDraftPosts(): BlogPost[] {
  try {
    const fileNames = fs.readdirSync(postsDirectory)
    const draftPosts = fileNames
      .filter((fileName) => fileName.endsWith('.mdx'))
      .map((fileName) => {
        const slug = fileName.replace(/\.mdx$/, '')
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const matterResult = matter(fileContents)

        return {
          slug,
          title: matterResult.data.title,
          description: matterResult.data.description,
          date: matterResult.data.date,
          author: matterResult.data.author,
          tags: matterResult.data.tags || [],
          image: matterResult.data.image,
          published: matterResult.data.published ?? true,
          content: matterResult.content,
        } as BlogPost
      })
      .filter((post) => !post.published)

    return draftPosts
  } catch (error) {
    console.error('Error reading draft posts:', error)
    return []
  }
}