import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Users, 
  MessageSquare, 
  BookOpen, 
  Trophy, 
  ExternalLink,
  Instagram,
  Linkedin,
  Github
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import clubLogo from '@/assets/alan-turing-logo.jpg';

const Dashboard = () => {
  const { user, isAuthenticated } = useAuth();

  const quickActions = [
    {
      title: 'Upcoming Events',
      description: 'View and register for club events',
      icon: Calendar,
      path: '/events',
      color: 'primary'
    },
    {
      title: 'Members Directory',
      description: 'Connect with fellow club members',
      icon: Users,
      path: '/members',
      color: 'secondary'
    },
    {
      title: 'Announcements',
      description: 'Latest news and updates',
      icon: MessageSquare,
      path: '/announcements',
      color: 'primary'
    },
    {
      title: 'Tech Resources',
      description: 'Learning materials and project showcases',
      icon: BookOpen,
      path: '/resources',
      color: 'secondary'
    },
    {
      title: 'Leaderboard',
      description: 'Member rankings and achievements',
      icon: Trophy,
      path: '/leaderboard',
      color: 'primary'
    }
  ];

  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/alanturingclub',
      description: 'Follow our latest updates'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/alan-turing-club-mru-22b166385/',
      description: 'Professional networking'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/alanturingclub',
      description: 'Open source projects'
    }
  ];

  return (
    <div className="container mx-auto px-6 py-8">
      {/* Welcome Section */}
      <div className="mb-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex items-center space-x-6">
            <img 
              src={clubLogo} 
              alt="Alan Turing Club" 
              className="w-20 h-20 pulse-glow rounded-xl"
            />
            <div>
              <h1 className="text-3xl md:text-4xl font-display font-bold mb-2">
                {isAuthenticated ? `Welcome back, ${user?.name}!` : 'Welcome to Alan Turing Club'}
              </h1>
              <p className="text-xl text-muted-foreground">
                "Sometimes it is the people no one imagines anything of who do the things that no one can imagine."
              </p>
              <p className="text-sm text-muted-foreground/80 mt-1">- Alan Turing</p>
            </div>
          </div>
          
          {!isAuthenticated && (
            <div className="flex items-center space-x-4">
              <Link to="/login">
                <Button variant="outline" size="lg">Login</Button>
              </Link>
              <Link to="/signup">
                <Button size="lg" className="tech-button-primary">Join Club</Button>
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Quick Actions Grid */}
      <div className="mb-12">
        <h2 className="text-2xl font-display font-semibold mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <Link key={action.path} to={action.path}>
                <Card className="tech-card tech-glow cursor-pointer transition-all duration-300 hover:scale-105 h-full">
                  <CardHeader className="pb-4">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-3 ${
                      action.color === 'primary' ? 'bg-primary' : 'bg-secondary'
                    }`}>
                      <Icon className={`h-6 w-6 ${
                        action.color === 'primary' ? 'text-primary-foreground' : 'text-secondary-foreground'
                      }`} />
                    </div>
                    <CardTitle className="text-lg">{action.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground">
                      {action.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Social Media & Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Social Media Links */}
        <Card className="tech-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ExternalLink className="h-5 w-5" />
              Connect With Us
            </CardTitle>
            <CardDescription>
              Stay updated with our latest activities and connect with the community
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-3 rounded-lg bg-accent/50 hover:bg-accent transition-colors group"
                >
                  <div className="flex-shrink-0">
                    <Icon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{social.name}</p>
                    <p className="text-sm text-muted-foreground">{social.description}</p>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              );
            })}
          </CardContent>
        </Card>

        {/* Club Stats */}
        <Card className="tech-card">
          <CardHeader>
            <CardTitle>Club Statistics</CardTitle>
            <CardDescription>
              Current membership and activity metrics
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">200+</div>
                <div className="text-sm text-muted-foreground">Active Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Events This Year</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Active Projects</div>
              </div>
              {/* <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">3</div>
                <div className="text-sm text-muted-foreground">Years Running</div>
              </div> */}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;