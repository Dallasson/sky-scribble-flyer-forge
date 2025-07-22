
import React from 'react';
import Navbar from '../components/Navbar';
import { Plane, Shield, Download, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="bg-primary p-4 rounded-full">
                <Plane className="h-12 w-12 text-primary-foreground" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              About Flight Ticket Generator
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your go-to platform for creating realistic flight tickets for entertainment, 
              educational, and creative purposes.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <Card>
              <CardHeader>
                <div className="bg-primary/10 p-3 rounded-lg w-fit mb-2">
                  <Plane className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Realistic Design</CardTitle>
                <CardDescription>
                  Generate professional-looking flight tickets that mirror real airline designs
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="bg-primary/10 p-3 rounded-lg w-fit mb-2">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Instant Generation</CardTitle>
                <CardDescription>
                  Create your custom flight tickets in seconds with our intuitive form
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="bg-primary/10 p-3 rounded-lg w-fit mb-2">
                  <Download className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Easy Download</CardTitle>
                <CardDescription>
                  Download your tickets as high-quality PDFs ready for sharing or printing
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* What We Do Section */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">What We Do</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-4">
                Flight Ticket Generator is a web-based tool designed to create realistic-looking 
                flight tickets for various non-commercial purposes. Whether you're working on a 
                creative project, need props for a film or theater production, or want to create 
                educational materials, our platform provides an easy and efficient solution.
              </p>
              <p className="text-muted-foreground mb-4">
                Our advanced form allows you to customize every aspect of your flight ticket, 
                including passenger details, flight information, airlines, seats, and more. 
                The generated tickets feature authentic-looking designs that closely resemble 
                real airline tickets.
              </p>
            </CardContent>
          </Card>

          {/* Important Notice */}
          <Card className="border-destructive/50 bg-destructive/5">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-destructive" />
                <CardTitle className="text-destructive">Important Disclaimer</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-foreground">
                <strong>For Entertainment Purposes Only:</strong> All tickets generated on this 
                platform are completely fake and intended solely for entertainment, educational, 
                and creative purposes. These tickets have no monetary value and cannot be used 
                for actual travel.
              </p>
              <p className="text-foreground mt-2">
                <strong>Legal Notice:</strong> Using these fake tickets for fraudulent activities, 
                attempting to board aircraft, or any other illegal purposes is strictly prohibited 
                and may result in serious legal consequences.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
