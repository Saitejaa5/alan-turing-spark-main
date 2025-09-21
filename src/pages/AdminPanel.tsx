import React, { useState } from 'react';
import { 
  Users, 
  Calendar, 
  MessageSquare, 
  BookOpen, 
  Settings, 
  Plus, 
  Edit, 
  Trash2,
  BarChart3,
  Shield
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

const AdminPanel = () => {
  const { user, isAdmin } = useAuth();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('overview');

  if (!isAdmin) {
    return (
      <div className="container mx-auto px-6 py-8">
        <Card className="tech-card text-center py-12">
          <CardContent>
            <Shield className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h1 className="text-2xl font-display font-bold mb-2">Access Denied</h1>
            <p className="text-muted-foreground">
              You need administrator privileges to access this panel.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const stats = {
    totalMembers: 152,
    activeMembers: 128,
    upcomingEvents: 3,
    totalEvents: 28,
    announcements: 12,
    resources: 45,
    monthlyGrowth: 15
  };

  const recentMembers = [
    { name: 'Alice Johnson', email: 'alice@student.com', joinDate: '2024-10-01', status: 'Active' },
    { name: 'Bob Smith', email: 'bob@student.com', joinDate: '2024-09-28', status: 'Active' },
    { name: 'Carol Davis', email: 'carol@student.com', joinDate: '2024-09-25', status: 'Pending' },
  ];

  const upcomingEvents = [
    { title: 'AI Workshop', date: '2024-10-15', attendees: 18, status: 'Published' },
    { title: 'Hackathon', date: '2024-10-22', attendees: 67, status: 'Published' },
    { title: 'Tech Talk', date: '2024-10-28', attendees: 89, status: 'Draft' },
  ];

  const handleQuickAction = (action: string) => {
    toast({
      title: "Action triggered",
      description: `${action} functionality would be implemented here.`,
    });
  };

  return (
    <div className="container mx-auto px-6 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">
          <Settings className="inline mr-3 h-8 w-8 text-primary" />
          Admin Panel
        </h1>
        <p className="text-xl text-muted-foreground">
          Manage club operations, members, events, and content.
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="members">Members</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
          <TabsTrigger value="content">Content</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="tech-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Members</p>
                    <p className="text-2xl font-bold">{stats.totalMembers}</p>
                  </div>
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div className="mt-2 text-xs text-success">
                  +{stats.monthlyGrowth}% from last month
                </div>
              </CardContent>
            </Card>

            <Card className="tech-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Active Members</p>
                    <p className="text-2xl font-bold">{stats.activeMembers}</p>
                  </div>
                  <BarChart3 className="h-8 w-8 text-secondary" />
                </div>
                <div className="mt-2 text-xs text-muted-foreground">
                  {Math.round((stats.activeMembers / stats.totalMembers) * 100)}% activity rate
                </div>
              </CardContent>
            </Card>

            <Card className="tech-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Upcoming Events</p>
                    <p className="text-2xl font-bold">{stats.upcomingEvents}</p>
                  </div>
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <div className="mt-2 text-xs text-muted-foreground">
                  {stats.totalEvents} total events
                </div>
              </CardContent>
            </Card>

            <Card className="tech-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Resources</p>
                    <p className="text-2xl font-bold">{stats.resources}</p>
                  </div>
                  <BookOpen className="h-8 w-8 text-secondary" />
                </div>
                <div className="mt-2 text-xs text-muted-foreground">
                  {stats.announcements} announcements
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <Card className="tech-card">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Common administrative tasks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Button 
                  className="tech-button-primary h-auto p-4 flex-col space-y-2"
                  onClick={() => handleQuickAction('Create Event')}
                >
                  <Plus className="h-6 w-6" />
                  <span>Create Event</span>
                </Button>
                <Button 
                  variant="outline" 
                  className="h-auto p-4 flex-col space-y-2"
                  onClick={() => handleQuickAction('New Announcement')}
                >
                  <MessageSquare className="h-6 w-6" />
                  <span>New Announcement</span>
                </Button>
                <Button 
                  variant="outline" 
                  className="h-auto p-4 flex-col space-y-2"
                  onClick={() => handleQuickAction('Add Resource')}
                >
                  <BookOpen className="h-6 w-6" />
                  <span>Add Resource</span>
                </Button>
                <Button 
                  variant="outline" 
                  className="h-auto p-4 flex-col space-y-2"
                  onClick={() => handleQuickAction('Member Management')}
                >
                  <Users className="h-6 w-6" />
                  <span>Manage Members</span>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="tech-card">
              <CardHeader>
                <CardTitle>Recent Members</CardTitle>
                <CardDescription>Latest member registrations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentMembers.map((member, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-accent/30">
                      <div>
                        <p className="font-medium">{member.name}</p>
                        <p className="text-sm text-muted-foreground">{member.email}</p>
                        <p className="text-xs text-muted-foreground">{member.joinDate}</p>
                      </div>
                      <Badge variant={member.status === 'Active' ? 'default' : 'secondary'}>
                        {member.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="tech-card">
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
                <CardDescription>Events requiring attention</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-accent/30">
                      <div>
                        <p className="font-medium">{event.title}</p>
                        <p className="text-sm text-muted-foreground">{event.date}</p>
                        <p className="text-xs text-muted-foreground">{event.attendees} registered</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant={event.status === 'Published' ? 'default' : 'secondary'}>
                          {event.status}
                        </Badge>
                        <Button size="sm" variant="ghost">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Members Tab */}
        <TabsContent value="members" className="space-y-6">
          <Card className="tech-card">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Member Management</CardTitle>
                  <CardDescription>Manage club members and their roles</CardDescription>
                </div>
                <Button className="tech-button-primary">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Member
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12 text-muted-foreground">
                <Users className="h-16 w-16 mx-auto mb-4 opacity-50" />
                <p>Member management interface would be implemented here</p>
                <p className="text-sm">Features: Add/remove members, assign roles, view profiles</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Events Tab */}
        <TabsContent value="events" className="space-y-6">
          <Card className="tech-card">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Event Management</CardTitle>
                  <CardDescription>Create and manage club events</CardDescription>
                </div>
                <Button className="tech-button-primary">
                  <Plus className="mr-2 h-4 w-4" />
                  Create Event
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12 text-muted-foreground">
                <Calendar className="h-16 w-16 mx-auto mb-4 opacity-50" />
                <p>Event management interface would be implemented here</p>
                <p className="text-sm">Features: Create events, manage registrations, track attendance</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Content Tab */}
        <TabsContent value="content" className="space-y-6">
          <Card className="tech-card">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Content Management</CardTitle>
                  <CardDescription>Manage announcements, resources, and content</CardDescription>
                </div>
                <Button className="tech-button-primary">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Content
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12 text-muted-foreground">
                <MessageSquare className="h-16 w-16 mx-auto mb-4 opacity-50" />
                <p>Content management interface would be implemented here</p>
                <p className="text-sm">Features: Create announcements, manage resources, moderate content</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Settings Tab */}
        <TabsContent value="settings" className="space-y-6">
          <Card className="tech-card">
            <CardHeader>
              <CardTitle>Club Settings</CardTitle>
              <CardDescription>Configure club settings and preferences</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12 text-muted-foreground">
                <Settings className="h-16 w-16 mx-auto mb-4 opacity-50" />
                <p>Settings interface would be implemented here</p>
                <p className="text-sm">Features: Club info, social media links, notification settings</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminPanel;