
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface EmailDownloadProps {
  onSendEmail: (email: string) => Promise<void>;
}

const EmailDownload: React.FC<EmailDownloadProps> = ({ onSendEmail }) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSendEmail = async () => {
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    try {
      await onSendEmail(email);
      toast({
        title: "Email Sent!",
        description: "Your flight ticket has been sent to your email",
      });
      setEmail('');
    } catch (error) {
      toast({
        title: "Failed to Send",
        description: "Could not send email. Please try downloading instead.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-3 items-center">
      <div className="flex items-center space-x-2 flex-1">
        <Mail className="h-5 w-5 text-gray-500" />
        <Input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1"
        />
      </div>
      <Button 
        onClick={handleSendEmail}
        disabled={isLoading}
        className="bg-blue-600 hover:bg-blue-700"
      >
        <Send className="h-4 w-4 mr-2" />
        {isLoading ? 'Sending...' : 'Send to Email'}
      </Button>
    </div>
  );
};

export default EmailDownload;
