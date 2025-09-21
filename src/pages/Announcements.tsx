import React from 'react';
import { Bell, Pin, Calendar, User, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Announcements = () => {
  const announcements = [
    {
      id: '1',
      title: 'Welcome to the Alan Turing Tech Club!',
      content: `Dear tech enthusiasts, I am delighted to welcome each and every one of you to our incredible tech community! The Alan Turing Tech Club is more than just an organization - it's a launchpad for innovation, creativity, and technological excellence.

Here's what we provide to empower your tech journey:
• Hands-on workshops covering cutting-edge technologies like AI, ML, and Web Development
• Networking opportunities with industry professionals and like-minded peers
• Mentorship programs to guide your career growth
• Access to state-of-the-art labs and resources
• Competitive programming and hackathon opportunities
• Career guidance and placement assistance
• A supportive community that celebrates learning and innovation

Together, we will push the boundaries of technology and create solutions that make a difference. Let's embark on this exciting journey of discovery and innovation!`,
      author: 'Vailla Bhargav',
      role: 'President',
      date: '2025-09-15',
      category: 'Welcome',
      priority: 'high',
      pinned: true,
      responses: 47
    },
    {
      id: '2',
      title: 'Club Inaugural Ceremony - September 23rd',
      content: `Mark your calendars! We are excited to announce our Club Inaugural Ceremony on Tuesday, September 23rd at 2:00 PM in SOE 2 Auditorium.

This momentous event will officially launch our tech club and set the tone for an amazing academic year ahead. The ceremony will include:
• Welcome address by distinguished faculty members
• Introduction of club board members and their vision
• Overview of our exciting 6-month event roadmap
• Networking session with refreshments
• Interactive demos of ongoing projects
• Q&A session about club activities and opportunities

This is your chance to connect with fellow tech enthusiasts, learn about upcoming opportunities, and become part of something extraordinary. Whether you're a coding novice or a seasoned developer, this event is designed to inspire and unite our tech community.

Don't miss this opportunity to be part of history in the making!`,
      author: 'Y Lakshmi Prasanna',
      role: 'Vice President',
      date: '2025-09-18',
      category: 'Events',
      priority: 'high',
      pinned: false,
      responses: 32
    },
    {
      id: '3',
      title: 'Exciting 6-Month Event Calendar Unveiled!',
      content: `Fellow members, I am thrilled to share our meticulously planned 6-month event calendar that promises to be both educational and exhilarating!

Our journey begins with the Tech Treasure Hunt in October, followed by deep dives into Generative AI in November. December brings competitive programming with our Debug Duel, while January kicks off the new year with our creative Meme-a-thon.

February focuses on design and professional development with UI/UX workshops and portfolio building sessions. Our calendar culminates with the grand AIthon in March - a 12-hour innovation challenge that will test your creativity and technical skills.

Each event is carefully designed to build upon the previous one, creating a comprehensive learning experience. We have partnered with industry experts, secured cutting-edge resources, and prepared hands-on activities that will enhance your practical skills.

This roadmap represents months of planning and coordination with various departments and industry partners. Get ready for an unforgettable journey of learning, networking, and innovation!`,
      author: 'D shravya Reddy',
      role: 'Secretary',
      date: '2025-09-20',
      category: 'Planning',
      priority: 'medium',
      pinned: false,
      responses: 28
    }
  ];

  const getPriorityColor = (priority: string) => {
    const colors = {
      high: 'bg-destructive/20 text-destructive border-destructive/30',
      medium: 'bg-primary/20 text-primary border-primary/30',
      low: 'bg-muted/50 text-muted-foreground border-muted'
    };
    return colors[priority as keyof typeof colors] || colors.low;
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      Event: 'bg-secondary/20 text-secondary border-secondary/30',
      Partnership: 'bg-primary/20 text-primary border-primary/30',
      Meeting: 'bg-accent/50 text-accent-foreground border-accent',
      Funding: 'bg-success/20 text-success border-success/30',
      Welcome: 'bg-muted/50 text-muted-foreground border-muted'
    };
    return colors[category as keyof typeof colors] || colors.Welcome;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatContent = (content: string) => {
    return content.split('\n').map((paragraph, index) => (
      <p key={index} className="mb-3 last:mb-0">
        {paragraph}
      </p>
    ));
  };

  return (
    <div className="container mx-auto px-6 py-8">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">
          <Bell className="inline mr-3 h-8 w-8 text-primary" />
          Announcements
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Stay up to date with the latest news, updates, and important information from the Alan Turing Club leadership.
        </p>
      </div>

      {/* Pinned Announcements */}
      <div className="mb-8">
        <h2 className="text-xl font-display font-semibold mb-6 flex items-center">
          <Pin className="mr-2 h-5 w-5 text-primary" />
          Pinned Announcements
        </h2>
        <div className="space-y-6">
          {announcements
            .filter(announcement => announcement.pinned)
            .map((announcement) => (
              <Card key={announcement.id} className="tech-card tech-glow border-primary/30">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-3 flex items-center gap-2">
                        <Pin className="h-4 w-4 text-primary" />
                        {announcement.title}
                      </CardTitle>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge variant="outline" className={getPriorityColor(announcement.priority)}>
                          {announcement.priority.toUpperCase()} PRIORITY
                        </Badge>
                        <Badge variant="outline" className={getCategoryColor(announcement.category)}>
                          {announcement.category}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>{announcement.author} • {announcement.role}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(announcement.date)}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MessageCircle className="h-4 w-4" />
                      <span>{announcement.responses} responses</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed">
                    {formatContent(announcement.content)}
                  </div>
                  <div className="mt-6 pt-4 border-t border-border/50">
                    <Button variant="outline" size="sm">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      View Responses
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>

      {/* Recent Announcements */}
      <div>
        <h2 className="text-xl font-display font-semibold mb-6">Recent Announcements</h2>
        <div className="space-y-6">
          {announcements
            .filter(announcement => !announcement.pinned)
            .map((announcement) => (
              <Card key={announcement.id} className="tech-card">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-3">{announcement.title}</CardTitle>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge variant="outline" className={getPriorityColor(announcement.priority)}>
                          {announcement.priority.toUpperCase()}
                        </Badge>
                        <Badge variant="outline" className={getCategoryColor(announcement.category)}>
                          {announcement.category}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>{announcement.author} • {announcement.role}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(announcement.date)}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MessageCircle className="h-4 w-4" />
                      <span>{announcement.responses} responses</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed">
                    {formatContent(announcement.content)}
                  </div>
                  <div className="mt-6 pt-4 border-t border-border/50">
                    <Button variant="outline" size="sm">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      View Responses ({announcement.responses})
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>

      {/* Notification Settings CTA */}
      <div className="mt-12">
        <Card className="tech-card bg-gradient-primary/5 border-primary/20">
          <CardContent className="py-8 text-center">
            <h3 className="text-xl font-display font-bold mb-4">Stay in the Loop</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Get instant notifications for important announcements, event updates, and club news 
              by joining our WhatsApp group and following our social media channels.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="tech-button-primary">
                <Bell className="mr-2 h-4 w-4" />
                Enable Notifications
              </Button>
              <Button variant="outline" size="lg">
                Manage Preferences
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Announcements;