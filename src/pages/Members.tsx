import React from 'react';
import { Linkedin, Github } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
// import memberPhoto from '@/assets/member-photo.jpg';
import bhargav from '@/assets/bhargav.jpg';
import prasanna from '@/assets/lakshmi prasanna.jpg';
import shravya from '@/assets/sravss4.jpg';
import me from '@/assets/sait.jpg';
import pawan from '@/assets/pawan.jpg';
import shammi from '@/assets/shammi.jpg';
import danish from '@/assets/danish.jpg';
import kerti from '@/assets/keerthi.jpg';
import harshaV from '@/assets/harsha.jpg';
import hiteesh from '@/assets/hitesh.jpg';
import bavaaja from '@/assets/bavaja.jpg';
import manoj from '@/assets/Mmanoj.jpg';
import swetha from '@/assets/Swethasri.png';
import sujitha from '@/assets/sujithasree.jpg';
import gopi from '@/assets/gopi.jpg';

const Members = () => {
  const boardMembers = [
    {
      id: '1',
      name: 'Vailla Bhargav',
      role: 'President',
      linkedin: 'https://www.linkedin.com/in/bhargav-vailla-85318831b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      github: 'https://github.com/vaillaBhargav',
      avatar: bhargav
      // avatar: memberPhoto
    },
    {
      id: '2',
      name: 'Y. Lakshmi Prasanna',
      role: 'Vice President',
      linkedin: 'https://www.linkedin.com/in/y-lakshmi-prasanna-12b840334?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      github: 'https://github.com/YellamatiLakshmi',
      avatar: prasanna
    },
    {
      id: '3',
      name: 'D Shravya Reddy',
      role: 'Secretary',
      linkedin: 'https://www.linkedin.com/in/doddamreddy-shravya-reddy-1a1041346?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      github: 'https://github.com/emilyrodriguez',
      avatar: shravya
    },
    {
      id: '4',
      name: 'Raolo Pawan',
      role: 'General Secretary',
      linkedin: 'https://www.linkedin.com/in/pawan-raulo-349526326?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      github: 'https://github.com/pawan-raulo7',
      avatar: pawan
    },
    {
      id: '5',
      name: 'A Saiteja ',
      role: 'Technical Lead',
      linkedin: 'https://www.linkedin.com/in/saitejaa5/',
      github: 'https://github.com/Saitejaa5/n',
      avatar: me
    },
    {
      id: '6',
      name: 'Shammi Kumar Singh',
      role: 'Technical Lead',
      linkedin: 'https://in.linkedin.com/in/shammi-kumar-2a1592372',
      github: 'https://github.com/lisawang',
      avatar: shammi
    },
    {
      id: '7',
      name: 'Danish Ahmed Khan',
      role: 'Treasurer',
      linkedin: 'https://www.linkedin.com/in/danishkhan2005?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      github: 'https://github.com/Danishheheh',
      avatar: danish
    },
    {
      id: '8',
      name: 'Sai keerthi',
      role: 'Design And Content Lead',
      linkedin: 'https://www.linkedin.com/in/sai-keerthi-rompally-290b30370?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      github: 'https://github.com/saikeerthi8586',
      avatar: kerti
    },
    {
      id: '9',
      name: 'Chindam Harsha Vardhan',
      role: 'Design And Content Lead',
      linkedin: 'https://www.linkedin.com/in/harsha-vardhan-chindam?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      github: 'https://share.google/gsKEFpiRy7AHY4za7',
      avatar: harshaV
    },
    {
      id: '10',
      name: ' Nelakuduru Hitheesh Chowdary',
      role: 'Social Media And Content Creator',
      linkedin: 'https://in.linkedin.com/in/hitheesh-chowdary-3a91951bb',
      github: 'https://github.com/hitheeshchowdary',
      avatar: hiteesh
    },
    {
      id: '11',
      name: 'S Bhavaja',
      role: 'Social Media And Content Creator',
      linkedin: 'http://linkedin.com/in/s-bhavaja-b6706130a/',
      github: 'https://github.com/bhavajas19',
      avatar: bavaaja
    },
    {
      id: '12',
      name: 'PV Sujitha Shree',
      role: 'Campaining And Logistics',
      linkedin: 'https://www.linkedin.com/in/sujitha-shree-a2693434a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      github: 'https://github.com/Sujithashree',
      avatar: sujitha
    },
    {
      id: '13',
      name: 'Maruthi Gopichand',
      role: 'Campaining And Logistics',
      linkedin: 'https://www.linkedin.com/in/maruthi-gopichand-a2718a358?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      github: 'https://github.com/danielgarcia',
      avatar: gopi
    },
    {
      id: '14',
      name: 'Malyala Manoj',
      role: 'Event Coordinator',
      linkedin: 'https://www.linkedin.com/in/manoj-malyala-b102a02a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      github: 'https://github.com/',
      avatar: manoj
    },
    {
      id: '15',
      name: 'R. Swetha Sri',
      role: 'Event Coordinator',
      linkedin: 'https://www.linkedin.com/in/swetha-sri-ravuri-087804354/',
      github: 'https://github.com/SwethaR2706',
      avatar: swetha
    }
  ];

  const getRoleBadgeColor = (role: string) => {
    const roleColors = {
      // 'President': 'bg-primary text-primary-foreground',
      'President': 'bg-accent text-accent-foreground',
      // 'Vice President': 'bg-secondary text-secondary-foreground',
      'Vice President': 'bg-accent text-accent-foreground',
      'Secretary': 'bg-accent text-accent-foreground',
      'Treasurer': 'bg-muted text-muted-foreground',
      'Technical Lead': 'bg-accent text-accent-foreground',
      'Events Coordinator': 'bg-primary text-primary-foreground'
    };
    return roleColors[role as keyof typeof roleColors] || 'bg-muted text-muted-foreground';
  };

  return (
    <div className="container mx-auto px-6 py-8">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">Club Members</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Meet the dedicated board members who lead the Alan Turing Club and drive our mission 
          of fostering innovation and technical excellence.
        </p>
      </div>

      {/* Board Members Grid */}
      <div className="mb-12">
        <h2 className="text-2xl font-display font-semibold mb-8">Board Members</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {boardMembers.map((member) => (
            <Card key={member.id} className="tech-card tech-glow h-full">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-6 ">
                  <Avatar className="w-40 h-40 tech-glow overflow-hidden">
  <AvatarImage
    src={member.avatar}
    alt={member.name}
    className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
  />
  <AvatarFallback className="bg-primary text-primary-foreground text-2xl">
    {member.name.split(' ').map(n => n[0]).join('')}
  </AvatarFallback>
</Avatar>

                </div>
                <CardTitle className="text-xl mb-3">{member.name}</CardTitle>
                <div className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${getRoleBadgeColor(member.role)}`}>
                  {member.role}
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex justify-center space-x-4">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-secondary/20 hover:bg-secondary hover:text-secondary-foreground transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-secondary/20 hover:bg-secondary hover:text-secondary-foreground transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Member Statistics */}
      <Card className="tech-card">
        <CardHeader>
          <CardTitle>Membership Overview</CardTitle>
          <CardDescription>
            Current club membership statistics and growth metrics
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">15</div>
              <div className="text-sm text-muted-foreground">Board Members</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-secondary mb-2">200+</div>
              <div className="text-sm text-muted-foreground">Total Members</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">85%</div>
              <div className="text-sm text-muted-foreground">Active Rate</div>
            </div>
            {/* <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-secondary mb-2">25+</div>
              <div className="text-sm text-muted-foreground">New This Semester</div>
            </div> */}
          </div>
        </CardContent>
      </Card>

      {/* Join CTA */}
      <div className="mt-12 text-center">
        <Card className="tech-card bg-gradient-primary/5 border-primary/20">
          <CardContent className="py-12">
            <h3 className="text-2xl font-display font-bold mb-4">Want to Join Our Community?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Connect with like-minded tech enthusiasts, participate in exciting projects, 
              and grow your skills in a supportive environment.
            </p>
            <Button 
  size="lg" 
  className="tech-button-primary" 
  asChild
>
  <a 
    href="https://forms.gle/b8xnFL697jkN8vTj7" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    Become a Member
  </a>
</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Members;