import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const teamMembers = [
  {
    name: "John Doe",
    role: "Project Lead",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
    description: "Experienced project manager with 10+ years of expertise in leading successful teams."
  },
  {
    name: "Jane Smith",
    role: "Frontend Developer",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane",
    description: "Skilled in React and modern frontend technologies with a passion for user experience."
  },
  {
    name: "Mike Johnson",
    role: "Backend Developer",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
    description: "Backend specialist with expertise in scalable architecture and database optimization."
  },
  {
    name: "Sarah Williams",
    role: "UI/UX Designer",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    description: "Creative designer focused on creating intuitive and beautiful user interfaces."
  },
  {
    name: "David Brown",
    role: "DevOps Engineer",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    description: "Infrastructure expert ensuring smooth deployment and system reliability."
  },
  {
    name: "Emily Davis",
    role: "Quality Assurance",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
    description: "Dedicated QA engineer ensuring the highest quality standards for our products."
  }
]

export function TeamMembers() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Our Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Meet the talented individuals who make our projects successful. Each team member brings unique skills and expertise to the table.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription>{member.role}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
} 