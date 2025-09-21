import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

const Events = () => {
  const { isAuthenticated } = useAuth();
  const { toast } = useToast();
  const [registeredEvents, setRegisteredEvents] = useState<string[]>([]);

  const upcomingEvents = [
    {
      id: '1',
      title: 'Club Inaugural Ceremony',
      description: 'Join us for the official launch of our tech club! Meet fellow members, learn about upcoming events, and get inspired for an amazing journey ahead.',
      date: '2024-09-23',
      time: '14:00',
      duration: '2 hours',
      location: 'SOE 2 Auditorium',
      maxAttendees: 150,
      currentAttendees: 0,
      tags: ['Ceremony', 'Welcome', 'Networking'],
      instructor: 'Club Board Members',
      type: 'Ceremony'
    },
    {
      id: '2',
      title: 'Tech Treasure Hunt & Top 50 AI Tools',
      description: 'Interactive treasure hunt followed by a comprehensive session on the top 50 AI tools every tech enthusiast must know.',
      date: '2024-10-15',
      time: '15:00',
      duration: '3 hours',
      location: 'Campus Wide & Tech Lab',
      maxAttendees: 60,
      currentAttendees: 0,
      tags: ['Interactive', 'AI', 'Learning'],
      instructor: 'Senior Members',
      type: 'Workshop'
    },
    {
      id: '3',
      title: 'Generative AI & The Dark Side of AI',
      description: 'Explore the fascinating world of Generative AI and understand the ethical challenges and dark aspects of artificial intelligence.',
      date: '2024-11-20',
      time: '14:00',
      duration: '3 hours',
      location: 'Main Auditorium',
      maxAttendees: 100,
      currentAttendees: 0,
      tags: ['AI', 'Ethics', 'Technology'],
      instructor: 'Dr. Priya Sharma',
      type: 'Tech Talk'
    },
    {
      id: '4',
      title: 'Debug Duel & Agentic AI',
      description: 'Competitive debugging competition paired with insights into autonomous AI agents and their applications.',
      date: '2024-12-18',
      time: '13:00',
      duration: '3 hours',
      location: 'Computer Lab Complex',
      maxAttendees: 40,
      currentAttendees: 0,
      tags: ['Competition', 'Debugging', 'AI'],
      instructor: 'Industry Experts',
      type: 'Competition'
    },
    {
      id: '5',
      title: 'Meme-a-thon & The Future of Generative AI',
      description: 'Create the best tech memes while learning about the cutting-edge developments in generative artificial intelligence.',
      date: '2025-01-25',
      time: '11:00',
      duration: '5 hours',
      location: 'Innovation Hub',
      maxAttendees: 80,
      currentAttendees: 0,
      tags: ['Creative', 'AI', 'Fun'],
      instructor: 'Creative Tech Team',
      type: 'Creative Event'
    },
    {
      id: '6',
      title: 'UI/UX with AI & Portfolio Building',
      description: 'Learn how AI is revolutionizing UI/UX design and build your professional portfolio with GitHub best practices.',
      date: '2025-02-22',
      time: '14:00',
      duration: '4 hours',
      location: 'Design Studio',
      maxAttendees: 50,
      currentAttendees: 0,
      tags: ['Design', 'Portfolio', 'Career'],
      instructor: 'UX Professionals',
      type: 'Workshop'
    },
    {
      id: '7',
      title: 'AIthon - AI Innovation Challenge',
      description: '12-hour AI-focused hackathon where teams compete to build innovative AI solutions for real-world problems.',
      date: '2025-03-15',
      time: '09:00',
      duration: '12 hours',
      location: 'Entire Campus',
      maxAttendees: 100,
      currentAttendees: 0,
      tags: ['Hackathon', 'AI', 'Innovation'],
      instructor: 'Industry Mentors',
      type: 'Hackathon'
    }
  ];

  const pastEvents = [];

  const handleEventRegistration = (eventId: string, eventTitle: string) => {
    if (!isAuthenticated) {
      toast({
        title: "Authentication required",
        description: "Please log in to register for events.",
        variant: "destructive",
      });
      return;
    }

    if (registeredEvents.includes(eventId)) {
      setRegisteredEvents(prev => prev.filter(id => id !== eventId));
      toast({
        title: "Registration cancelled",
        description: `You have unregistered from "${eventTitle}".`,
      });
    } else {
      setRegisteredEvents(prev => [...prev, eventId]);
      toast({
        title: "Registration successful!",
        description: `You are now registered for "${eventTitle}".`,
      });
    }
  };

  const getEventTypeColor = (type: string) => {
      const colors = {
        'Workshop': 'bg-primary/20 text-primary border-primary/30',
        'Competition': 'bg-secondary/20 text-secondary border-secondary/30',
        'Tech Talk': 'bg-accent/50 text-accent-foreground border-accent',
        'Showcase': 'bg-muted/50 text-muted-foreground border-muted',
        'Bootcamp': 'bg-primary/20 text-primary border-primary/30',
        'Ceremony': 'bg-destructive/20 text-destructive border-destructive/30',
        'Creative Event': 'bg-success/20 text-success border-success/30',
        'Hackathon': 'bg-secondary/20 text-secondary border-secondary/30'
      };
    return colors[type as keyof typeof colors] || 'bg-muted/50 text-muted-foreground border-muted';
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="container mx-auto px-6 py-8">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">Events & Activities</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Join our exciting events, workshops, and activities designed to enhance your technical skills 
          and connect with the tech community.
        </p>
      </div>

      {/* Upcoming Events */}
      <div className="mb-12">
        <h2 className="text-2xl font-display font-semibold mb-8">Upcoming Events</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {upcomingEvents.map((event) => (
            <Card key={event.id} className="tech-card tech-glow h-full">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{event.title}</CardTitle>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge variant="outline" className={getEventTypeColor(event.type)}>
                        {event.type}
                      </Badge>
                      {event.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                <CardDescription className="text-sm leading-relaxed">
                  {event.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Event Details */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-sm">
                    <Calendar className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    <span>{formatDate(event.date)}</span>
                  </div>
                  
                  <div className="flex items-center space-x-3 text-sm">
                    <Clock className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    <span>{event.time} ({event.duration})</span>
                  </div>
                  
                  <div className="flex items-center space-x-3 text-sm">
                    <MapPin className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    <span>{event.location}</span>
                  </div>
                  
                  <div className="flex items-center space-x-3 text-sm">
                    <Users className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    <span>{event.currentAttendees}/{event.maxAttendees} registered</span>
                  </div>
                </div>

                {/* Instructor */}
                <div className="pt-2 border-t border-border/50">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium">Instructor:</span> {event.instructor}
                  </p>
                </div>

                {/* Registration Button */}
                <div className="pt-4">
                  <Button
                    onClick={() => handleEventRegistration(event.id, event.title)}
                    className={`w-full ${
                      registeredEvents.includes(event.id)
                        ? 'bg-success hover:bg-success/90 text-success-foreground'
                        : 'tech-button-primary'
                    }`}
                    disabled={event.currentAttendees >= event.maxAttendees && !registeredEvents.includes(event.id)}
                  >
                    {registeredEvents.includes(event.id) ? (
                      <>
                        <CheckCircle className="mr-2 h-4 w-4" />
                        Registered
                      </>
                    ) : event.currentAttendees >= event.maxAttendees ? (
                      'Event Full'
                    ) : (
                      'Register Now'
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Past Events */}
      <div className="mb-12">
        <h2 className="text-2xl font-display font-semibold mb-8">Recent Past Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pastEvents.map((event) => (
            <Card key={event.id} className="tech-card">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">{event.title}</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(event.date)}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4" />
                    <span>{event.attendees} attendees</span>
                  </div>
                  <Badge variant="outline" className={getEventTypeColor(event.type)}>
                    {event.type}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Event Calendar CTA */}
      <Card className="tech-card bg-gradient-secondary/5 border-secondary/20">
        <CardContent className="py-12 text-center">
          <h3 className="text-2xl font-display font-bold mb-4">Stay Updated</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Never miss an event! Follow our social media channels and join our WhatsApp group 
            for real-time updates on upcoming activities and last-minute announcements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg">Join WhatsApp Group</Button>
           <Button size="lg" className="tech-button-secondary" asChild>
  <a
    href="https://www.linkedin.com/in/alan-turing-club-mru-22b166385/"
    target="_blank"
    rel="noopener noreferrer"
  >
    Follow on Social Media
  </a>
</Button>

          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Events;