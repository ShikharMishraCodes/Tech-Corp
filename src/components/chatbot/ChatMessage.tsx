
import { Bot, User } from 'lucide-react';

interface ChatMessageProps {
  message: string;
  isBot: boolean;
}

const ChatMessage = ({ message, isBot }: ChatMessageProps) => {
  return (
    <div className={`flex items-start gap-2 mb-4 ${isBot ? 'mr-12' : 'ml-12'}`}>
      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isBot ? 'bg-primary/10 text-primary' : 'bg-accent/10 text-accent'}`}>
        {isBot ? <Bot size={20} /> : <User size={20} />}
      </div>
      <div className={`rounded-lg p-3 ${isBot ? 'bg-primary/10' : 'bg-accent/10'}`}>
        <p className="text-sm">{message}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
