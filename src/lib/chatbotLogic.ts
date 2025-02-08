
type Intent = {
  patterns: string[];
  responses: string[];
  followUp?: string;
};

export const chatbotIntents: Record<string, Intent> = {
  greeting: {
    patterns: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening'],
    responses: [
      "Hello! Welcome to TechCorp. How can I assist you today?",
      "Hi there! I'm here to help with any questions about our services.",
      "Welcome! How may I help you today?"
    ],
    followUp: "Are you interested in learning about our services, or do you have a specific question?"
  },
  services: {
    patterns: ['services', 'what do you offer', 'what services', 'help with'],
    responses: [
      "We offer various IT services including: \n1. Web Development\n2. Cloud Solutions\n3. Mobile Development\nWhich service would you like to learn more about?",
      "Our main services include web development, cloud solutions, and mobile app development. Would you like specific information about any of these?"
    ]
  },
  pricing: {
    patterns: ['price', 'cost', 'how much', 'pricing'],
    responses: [
      "Our pricing varies based on project requirements. Would you like to schedule a consultation to discuss your specific needs?",
      "We offer customized solutions with flexible pricing. Should I connect you with our sales team for a detailed quote?"
    ]
  },
  contact: {
    patterns: ['contact', 'speak', 'human', 'representative', 'support'],
    responses: [
      "You can reach our team at contact@techcorp.com or call us at (555) 123-4567. Would you like me to schedule a callback?",
      "I'll be happy to connect you with our support team. You can also visit our contact page for all communication channels."
    ]
  },
  default: {
    patterns: [],
    responses: [
      "I'm not sure I understand. Could you please rephrase that?",
      "I apologize, but I'm having trouble understanding. Would you like to know about our services or speak with a representative?",
      "I might not have caught that. Can you try asking in a different way?"
    ]
  }
};

export const findIntent = (input: string): string => {
  const normalizedInput = input.toLowerCase().trim();
  
  for (const [intentName, intent] of Object.entries(chatbotIntents)) {
    if (intent.patterns.some(pattern => normalizedInput.includes(pattern))) {
      return intentName;
    }
  }
  
  return 'default';
};

export const getResponse = (intentName: string): string => {
  const intent = chatbotIntents[intentName];
  const response = intent.responses[Math.floor(Math.random() * intent.responses.length)];
  return intent.followUp ? `${response}\n\n${intent.followUp}` : response;
};
