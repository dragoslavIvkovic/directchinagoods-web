import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, User, Tag, ChevronRight } from "lucide-react";
import blogPostList from "../blogText/blogPostList.json";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  imageUrl: string;
  slug: string;
}

export const BlogList = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const blogPosts = blogPostList.posts;

  const allTags = Array.from(
    new Set(blogPosts.flatMap(post => post.tags))
  );

  const filteredPosts = selectedTag
    ? blogPosts.filter(post => post.tags.includes(selectedTag))
    : blogPosts;

  return (
    <section id="blog" className="container py-24 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Our Blog</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Stay up to date with the latest news, tutorials, and insights from our team.
        </p>
      </div>

      <div className="flex flex-wrap gap-2 justify-center">
        <Button
          variant={selectedTag === null ? "default" : "outline"}
          onClick={() => setSelectedTag(null)}
          className="rounded-full"
        >
          All Posts
        </Button>
        {allTags.map(tag => (
          <Button
            key={tag}
            variant={selectedTag === tag ? "default" : "outline"}
            onClick={() => setSelectedTag(tag)}
            className="rounded-full"
          >
            {tag}
          </Button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map(post => (
          <Card key={post.id} className="overflow-hidden group">
            <CardHeader className="p-0">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </CardHeader>
            <CardContent className="space-y-4 p-6">
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <Badge key={tag} variant="secondary">
                    <Tag className="w-3 h-3 mr-1" />
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <h2 className="text-2xl font-semibold group-hover:text-primary transition-colors">
                {post.title}
              </h2>
              
              <p className="text-muted-foreground">
                {post.excerpt}
              </p>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-1" />
                  {post.author}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {post.readTime}
                </div>
              </div>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <Button variant="ghost" className="ml-auto group" asChild>
                <Link to={`/blog/${post.slug}`}>
                  Read More 
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default BlogList;