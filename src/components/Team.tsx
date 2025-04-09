import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const Team = () => {
  const teamMembers = [
    {
      name: "Richard",
      role: "Project Manager",
      image: "/team/member1.jpg", // Person in blue Adidas jacket
      bio: "Managing the team and the project.",
      social: {
        email: "mailto:priya@costwiseinsights.com",
      },
    },
    {
      name: "Akash Kapoor",
      role: "Frontend Developer",
      image: "/team/member2.jpg", // Person in pink striped top
      bio: "Creative UX designer passionate about creating intuitive and user-friendly experiences",
      social: {
        email: "mailto:deepa@costwiseinsights.com",
      },
    },
    {
      name: "Navjot",
      role: "Backend Developer",
      image: "/team/member4.jpg", // Person in grey winter jacket
      bio: "Developing the backend of the application.",
      social: {
        email: "mailto:marcus@costwiseinsights.com",
      },
    },
    {
      name: "Visakha",
      role: " Data Analyst",
      image: "/team/member3.jpg", // Person in white patterned dress
      bio: "Analyzing the data and making it useful for the team.",
      social: {
        email: "mailto:anjali@costwiseinsights.com",
      },
    },
    {
      name: "Kiranjeet",
      role: "Data Handler",
      image: "/team/member5.jpg", // Person in white winter jacket
      bio: "Handling the data and making it useful for the team.",
      social: {
        email: "mailto:meera@costwiseinsights.com",
      },
    },
    {
      name: "Rajkarn",
      role: "QA & Documentation",
      image: "/team/member6.jpg", // Person in white winter jacket with adidas logo
      bio: "Helping the team with QA and documentation.",
      social: {
        email: "mailto:riya@costwiseinsights.com",
      },
    }
  ];

  return (
    <section id="team" className="py-12 bg-gradient-to-b from-white to-costwise-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Meet Our Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our talented team brings together expertise in development, design, and project management to deliver exceptional results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center gap-4">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={member.image} alt={member.name} className="object-cover" />
                  <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription>{member.role}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{member.bio}</p>
                <div className="flex gap-4">
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
