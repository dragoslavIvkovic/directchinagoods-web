import { useParams } from 'react-router-dom';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, User, Tag, ArrowLeft } from "lucide-react";
import blogPostList from "../blogText/blogPostList.json";
import { Link } from 'react-router-dom';

export const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPostList.posts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="container py-24 text-center">
        <h1 className="text-4xl font-bold mb-4">Post not found</h1>
        <Button asChild>
          <Link to="/blog">Back to Blog</Link>
        </Button>
      </div>
    );
  }

  return (
    <article className="container py-24 max-w-4xl mx-auto">
      <Button variant="ghost" className="mb-8" asChild>
        <Link to="/blog">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>
      </Button>

      <header className="space-y-8 mb-12">
        <div className="flex flex-wrap gap-2">
          {post.tags.map(tag => (
            <Badge key={tag} variant="secondary">
              <Tag className="w-3 h-3 mr-1" />
              {tag}
            </Badge>
          ))}
        </div>

        <h1 className="text-5xl font-bold">{post.title}</h1>

        <div className="flex items-center gap-4 text-muted-foreground">
          <div className="flex items-center">
            <User className="w-5 h-5 mr-2" />
            {post.author}
          </div>
          <div className="flex items-center">
            <Clock className="w-5 h-5 mr-2" />
            {post.readTime}
          </div>
        </div>
      </header>

      <div className="aspect-video relative overflow-hidden rounded-lg mb-12">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        {post.content.split('\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
};

export default BlogPost;