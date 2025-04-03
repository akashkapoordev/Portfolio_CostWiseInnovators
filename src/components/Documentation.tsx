import React, { useState } from 'react';
import { FileText, Download, ExternalLink, CheckSquare, Search, Clock, Filter, Image, Eye, FileDown } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { cn } from '@/lib/utils';

const documents = [
  {
    title: "Project Proposal",
    description: "Initial project scope, objectives, and planned methodology",
    fileName: "project-proposal.pdf",
    fileSize: "2.4 MB",
    date: "January 15, 2023",
    category: "Planning",
    icon: "📋"
  },
  {
    title: "Requirements Document",
    description: "Detailed functional and technical requirements specification",
    fileName: "requirements-document.pdf",
    fileSize: "3.7 MB",
    date: "February 28, 2023",
    category: "Planning",
    icon: "📝"
  },
  {
    title: "Technical Architecture",
    description: "System architecture, data flow diagrams, and API documentation",
    fileName: "technical-documentation.pdf",
    fileSize: "5.2 MB",
    date: "April 10, 2023",
    category: "Technical",
    icon: "⚙️"
  },
  {
    title: "User Manual",
    description: "Comprehensive guide to using the platform and all features",
    fileName: "user-manual.pdf",
    fileSize: "8.1 MB",
    date: "July 5, 2023",
    category: "Guides",
    icon: "📚"
  },
  {
    title: "Final Report",
    description: "Project outcomes, lessons learned, and future recommendations",
    fileName: "final-project-report.pdf",
    fileSize: "4.6 MB",
    date: "August 30, 2023",
    category: "Reports",
    icon: "📊"
  },

];

const categories = ["All", "Planning", "Technical", "Guides", "Reports"];

const Documentation = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredDoc, setHoveredDoc] = useState<string | null>(null);

  const handleView = (fileName: string, imageUrl?: string) => {
    if (imageUrl) {
      window.open(imageUrl, '_blank');
    } else {
      window.open(`/docs/${fileName}`, '_blank');
    }
  };

  const handleDownload = (fileName: string, title: string, imageUrl?: string) => {
    if (imageUrl) {
      const link = document.createElement('a');
      link.href = imageUrl;
      link.download = `CostWise-${title.replace(/\s+/g, '-')}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      const link = document.createElement('a');
      link.href = `/docs/${fileName}`;
      link.download = `CostWise-${title.replace(/\s+/g, '-')}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doc.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || doc.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="documentation" className="py-16 min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-blue-600 mb-2 block">Project Resources</span>
          <h2 className="text-4xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
            Project Documentation
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Comprehensive documentation of our project's journey from concept to completion
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Search and Filter Section */}
          <div className="mb-12 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
              <div className="relative w-full md:w-96">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search documents..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 border-gray-200 focus:border-blue-500 transition-colors"
                />
              </div>
              <div className="flex items-center gap-3">
                <Filter size={16} className="text-gray-500" />
                <div className="flex gap-2 flex-wrap">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                      className={cn(
                        "min-w-[100px] transition-all duration-200",
                        selectedCategory === category && "shadow-md"
                      )}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Documents Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {filteredDocuments.map((doc, index) => (
              <Card 
                key={index} 
                className={cn(
                  "group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1",
                  "border-l-4 bg-white/50 backdrop-blur-sm",
                  doc.category === "Planning" && "border-l-blue-500",
                  doc.category === "Technical" && "border-l-purple-500",
                  doc.category === "Guides" && "border-l-green-500",
                  doc.category === "Reports" && "border-l-amber-500"
                )}
                onMouseEnter={() => setHoveredDoc(doc.fileName)}
                onMouseLeave={() => setHoveredDoc(null)}
              >
                <CardHeader>
                  <div className="flex items-start gap-4 mb-3">
                    <div className={cn(
                      "p-3 rounded-xl text-2xl transition-all duration-300",
                      "bg-gray-50 group-hover:scale-110",
                      hoveredDoc === doc.fileName && "rotate-12"
                    )}>
                      {doc.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                          {doc.title}
                        </CardTitle>
                        <span className={cn(
                          "text-xs font-medium px-3 py-1 rounded-full",
                          "transition-colors duration-300",
                          doc.category === "Planning" && "bg-blue-100 text-blue-700",
                          doc.category === "Technical" && "bg-purple-100 text-purple-700",
                          doc.category === "Guides" && "bg-green-100 text-green-700",
                          doc.category === "Reports" && "bg-amber-100 text-amber-700"
                        )}>
                          {doc.category}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                        <Clock size={14} />
                        <span>{doc.date}</span>
                        <span>•</span>
                        <span>{doc.fileSize}</span>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="line-clamp-2">{doc.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className={cn(
                        "flex-1 flex items-center justify-center gap-2",
                        "hover:bg-gray-50 transition-all duration-200",
                        "group-hover:border-gray-400"
                      )}
                      onClick={() => handleView(doc.fileName, doc.imageUrl)}
                    >
                      {doc.imageUrl ? (
                        <Image size={16} className="group-hover:scale-110 transition-transform duration-200" />
                      ) : (
                        <Eye size={16} className="group-hover:scale-110 transition-transform duration-200" />
                      )}
                      {doc.imageUrl ? 'View Image' : 'Preview PDF'}
                    </Button>
                    <Button
                      variant="default"
                      size="sm"
                      className={cn(
                        "flex-1 flex items-center justify-center gap-2 transition-all duration-200",
                        doc.category === "Planning" && "bg-blue-500 hover:bg-blue-600",
                        doc.category === "Technical" && "bg-purple-500 hover:bg-purple-600",
                        doc.category === "Guides" && "bg-green-500 hover:bg-green-600",
                        doc.category === "Reports" && "bg-amber-500 hover:bg-amber-600",
                        "shadow-sm hover:shadow-md"
                      )}
                      onClick={() => handleDownload(doc.fileName, doc.title, doc.imageUrl)}
                    >
                      <FileDown size={16} className="group-hover:scale-110 transition-transform duration-200" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Project Milestones */}
          <div className="bg-white shadow-sm rounded-xl p-8 border border-gray-100">
            <div className="flex flex-col md:flex-row items-start justify-between gap-6">
              <div className="w-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <CheckSquare size={24} className="text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl text-gray-900">Project Milestones</h3>
                    <p className="text-gray-600">Track our progress through key development phases</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Research & Requirements Analysis",
                    "Architecture Design & Technology Stack Selection",
                    "UI/UX Design & Prototyping",
                    "Core Feature Development",
                    "Testing & Quality Assurance",
                    "Deployment & Documentation"
                  ].map((milestone, index) => (
                    <div 
                      key={index}
                      className="group flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-green-50 transition-all duration-200 cursor-pointer"
                    >
                      <CheckSquare size={18} className="text-green-500 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-medium group-hover:text-green-700 transition-colors">{milestone}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Documentation;
