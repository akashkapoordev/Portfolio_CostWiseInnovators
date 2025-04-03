import React from 'react';
import { FileDown, Eye } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const documents = [
  {
    title: "Project Proposal",
    description: "Comprehensive project overview and implementation strategy",
    fileName: "project-proposal.pdf",
    fileSize: "125 KB"
  },
  {
    title: "Technical Documentation",
    description: "Detailed technical specifications and system architecture",
    fileName: "technical-documentation.pdf",
    fileSize: "76 KB"
  },
  {
    title: "User Manual",
    description: "Complete guide for end-users and system administrators",
    fileName: "user-manual.pdf",
    fileSize: "91 KB"
  },
  {
    title: "Requirements Document",
    description: "Detailed project requirements and specifications",
    fileName: "requirements-document.pdf",
    fileSize: "73 KB"
  }
];

const ProjectDocuments = () => {
  const handleView = (fileName: string) => {
    window.open(`/docs/${fileName}`, '_blank');
  };

  const handleDownload = (fileName: string, title: string) => {
    const link = document.createElement('a');
    link.href = `/docs/${fileName}`;
    link.download = `CostWise-${title.replace(/\s+/g, '-')}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-12 bg-white" id="documents">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight mb-2">Project Documentation</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Access our comprehensive project documentation, including proposals, technical specifications, and user guides
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {documents.map((doc, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <svg
                    className="w-8 h-8 text-red-500 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <line x1="10" y1="9" x2="8" y2="9" />
                  </svg>
                  <div>
                    <CardTitle className="text-xl">{doc.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">PDF • {doc.fileSize}</p>
                  </div>
                </div>
                <CardDescription className="line-clamp-2">{doc.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 flex items-center justify-center gap-2"
                    onClick={() => handleView(doc.fileName)}
                  >
                    <Eye size={16} />
                    Preview PDF
                  </Button>
                  <Button
                    variant="default"
                    size="sm"
                    className="flex-1 flex items-center justify-center gap-2"
                    onClick={() => handleDownload(doc.fileName, doc.title)}
                  >
                    <FileDown size={16} />
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectDocuments; 