import React from 'react';
import { ExternalLink, Github, BookOpen, Play, Download, Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Resources = () => {
  const resourceCategories = [
    {
      title: 'Learning Materials',
      description: 'Curated courses, tutorials, and documentation',
      resources: [
        {
          title: 'Full Stack Web Development Course',
          description: 'Complete guide to modern web development with React, Node.js, and MongoDB',
          url: 'https://example.com/fullstack-course',
          type: 'Course',
          difficulty: 'Intermediate',
          tags: ['React', 'Node.js', 'MongoDB']
        },
        {
          title: 'Python for Data Science',
          description: 'Learn Python programming specifically for data analysis and machine learning',
          url: 'https://example.com/python-datascience',
          type: 'Tutorial Series',
          difficulty: 'Beginner',
          tags: ['Python', 'Data Science', 'ML']
        },
        {
          title: 'System Design Interview Prep',
          description: 'Essential concepts and patterns for technical interviews at top tech companies',
          url: 'https://example.com/system-design',
          type: 'Documentation',
          difficulty: 'Advanced',
          tags: ['System Design', 'Interviews']
        }
      ]
    },
    {
      title: 'GitHub Repositories',
      description: 'Open source projects and code examples',
      resources: [
        {
          title: 'Club Project Templates',
          description: 'Starter templates for common project types with best practices',
          url: 'https://github.com/alanturingclub/project-templates',
          type: 'Repository',
          difficulty: 'All Levels',
          tags: ['Templates', 'Best Practices'],
          stars: 124
        },
        {
          title: 'Algorithm Implementations',
          description: 'Common algorithms and data structures implemented in multiple languages',
          url: 'https://github.com/alanturingclub/algorithms',
          type: 'Repository',
          difficulty: 'Intermediate',
          tags: ['Algorithms', 'Data Structures'],
          stars: 89
        },
        {
          title: 'Web Security Toolkit',
          description: 'Tools and examples for web application security testing',
          url: 'https://github.com/alanturingclub/security-toolkit',
          type: 'Repository',
          difficulty: 'Advanced',
          tags: ['Security', 'Web Development'],
          stars: 67
        }
      ]
    },
    {
      title: 'Recorded Sessions',
      description: 'Past workshops and tech talks from club events',
      resources: [
        {
          title: 'Introduction to Machine Learning Workshop',
          description: 'Complete workshop covering ML fundamentals and practical implementation',
          url: 'https://example.com/ml-workshop',
          type: 'Video',
          difficulty: 'Beginner',
          tags: ['Machine Learning', 'Workshop'],
          duration: '2h 30m'
        },
        {
          title: 'Building Scalable APIs with Node.js',
          description: 'Tech talk on API design patterns and scalability best practices',
          url: 'https://example.com/api-talk',
          type: 'Video',
          difficulty: 'Intermediate',
          tags: ['Node.js', 'API Design'],
          duration: '1h 15m'
        },
        {
          title: 'Career in Tech Panel Discussion',
          description: 'Industry professionals share insights about tech careers and job hunting',
          url: 'https://example.com/career-panel',
          type: 'Video',
          difficulty: 'All Levels',
          tags: ['Career', 'Industry Insights'],
          duration: '1h 45m'
        }
      ]
    }
  ];

  const projectShowcases = [
    {
      title: 'Smart Campus Navigation App',
      description: 'AI-powered indoor navigation system for university buildings',
      team: ['Sarah Chen', 'Marcus Johnson', 'Emily Rodriguez'],
      technologies: ['React Native', 'TensorFlow', 'Firebase'],
      githubUrl: 'https://github.com/alanturingclub/campus-nav',
      liveUrl: 'https://campus-nav.demo.com',
      imageUrl: '/api/placeholder/400/200'
    },
    {
      title: 'Climate Data Visualization Platform',
      description: 'Interactive dashboard for exploring climate change data trends',
      team: ['David Kim', 'Alex Thompson'],
      technologies: ['D3.js', 'Python', 'PostgreSQL'],
      githubUrl: 'https://github.com/alanturingclub/climate-viz',
      liveUrl: 'https://climate-viz.demo.com',
      imageUrl: '/api/placeholder/400/200'
    },
    {
      title: 'Blockchain Voting System',
      description: 'Secure, transparent voting system built on Ethereum',
      team: ['Lisa Wang', 'Marcus Johnson'],
      technologies: ['Solidity', 'Web3.js', 'React'],
      githubUrl: 'https://github.com/alanturingclub/blockchain-voting',
      liveUrl: 'https://voting.demo.com',
      imageUrl: '/api/placeholder/400/200'
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    const colors = {
      'Beginner': 'bg-success/20 text-success border-success/30',
      'Intermediate': 'bg-primary/20 text-primary border-primary/30',
      'Advanced': 'bg-destructive/20 text-destructive border-destructive/30',
      'All Levels': 'bg-muted/50 text-muted-foreground border-muted'
    };
    return colors[difficulty as keyof typeof colors] || colors['All Levels'];
  };

  const getTypeIcon = (type: string) => {
    const icons = {
      'Course': BookOpen,
      'Tutorial Series': Play,
      'Documentation': BookOpen,
      'Repository': Github,
      'Video': Play
    };
    return icons[type as keyof typeof icons] || BookOpen;
  };

  return (
    <div className="container mx-auto px-6 py-8">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">Tech Resources</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Explore our curated collection of learning materials, project showcases, and development resources 
          to advance your technical skills and knowledge.
        </p>
      </div>

      {/* Resource Categories */}
      {resourceCategories.map((category, categoryIndex) => (
        <div key={categoryIndex} className="mb-12">
          <div className="mb-8">
            <h2 className="text-2xl font-display font-semibold mb-2">{category.title}</h2>
            <p className="text-muted-foreground">{category.description}</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {category.resources.map((resource, resourceIndex) => {
              const TypeIcon = getTypeIcon(resource.type);
              return (
                <Card key={resourceIndex} className="tech-card tech-glow h-full">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <TypeIcon className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <div className="flex items-center gap-2">
                        {'stars' in resource && (
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Star className="h-3 w-3 fill-current" />
                            {resource.stars}
                          </div>
                        )}
                        {'duration' in resource && (
                          <Badge variant="outline" className="text-xs">
                            {resource.duration}
                          </Badge>
                        )}
                      </div>
                    </div>
                    <CardTitle className="text-lg">{resource.title}</CardTitle>
                    <CardDescription className="leading-relaxed">
                      {resource.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className={getDifficultyColor(resource.difficulty)}>
                        {resource.difficulty}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        {resource.type}
                      </Badge>
                    </div>
                    
                    <div className="flex flex-wrap gap-1">
                      {resource.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button 
                      asChild 
                      className="tech-button-primary w-full"
                    >
                      <a href={resource.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Access Resource
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      ))}

      {/* Project Showcases */}
      <div className="mb-12">
        <div className="mb-8">
          <h2 className="text-2xl font-display font-semibold mb-2">Project Showcases</h2>
          <p className="text-muted-foreground">
            Innovative projects created by our club members demonstrating real-world applications of technology
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectShowcases.map((project, index) => (
            <Card key={index} className="tech-card tech-glow">
              <div className="aspect-video bg-muted rounded-t-lg flex items-center justify-center">
                <div className="text-muted-foreground text-sm">Project Preview</div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-medium mb-2">Team Members:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.team.map((member) => (
                      <Badge key={member} variant="secondary" className="text-xs">
                        {member}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <p className="text-sm font-medium mb-2">Technologies:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3 pt-4">
                  <Button asChild variant="outline" size="sm" className="flex-1">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button asChild size="sm" className="tech-button-primary flex-1">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Contribution CTA */}
      <Card className="tech-card bg-gradient-secondary/5 border-secondary/20">
        <CardContent className="py-12 text-center">
          <h3 className="text-2xl font-display font-bold mb-4">Contribute to Our Resources</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Have a great learning resource, tutorial, or project to share? Help grow our community knowledge base 
            by contributing your own resources and project showcases.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="tech-button-secondary">
              <Github className="mr-2 h-4 w-4" />
              Submit Resource
            </Button>
            <Button variant="outline" size="lg">
              <Download className="mr-2 h-4 w-4" />
              Download Resources
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Resources;