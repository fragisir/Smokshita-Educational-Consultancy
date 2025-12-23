"use client";

import React, { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send, Bot, User, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Types
type Message = {
  id: string;
  text: string;
  sender: "user" | "bot";
  options?: { label: string; value: string }[];
};

// Predefined Responses & Logic
const WELCOME_MESSAGE: Message = {
  id: "welcome",
  text: "👋 Namaste! Welcome to Smokshita Educational Consultancy. I'm your virtual assistant. How can I guide you today?",
  sender: "bot",
  options: [
    { label: "🎓 Study Abroad", value: "study abroad" },
    { label: "🗣 Language Classes", value: "language classes" },
    { label: "✉️ Email Us", value: "contact info" },
    { label: "📞 Contact Info", value: "contact info" },
  ],
};

export default function CustomChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTeaser, setShowTeaser] = useState(true);
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen, isTyping]);

  useEffect(() => {
    // Hide teaser after 10 seconds or when opened
    const timer = setTimeout(() => setShowTeaser(false), 10000);
    if (isOpen) setShowTeaser(false);
    return () => clearTimeout(timer);
  }, [isOpen]);

  const handleUserAction = (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = { id: `user-${Date.now()}`, text, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = getBotResponse(text);
      setMessages((prev) => [...prev, { ...botResponse, id: `bot-${Date.now()}` }]);
      setIsTyping(false);
    }, 1500);
  };

  const getBotResponse = (input: string): Omit<Message, "id"> => {
    const lowerInput = input.toLowerCase();

    if (lowerInput.includes("study") || lowerInput.includes("abroad") || lowerInput.includes("visa")) {
      return {
        text: "🌍 We facilitate study opportunities in premium destinations. Which country are you interested in?",
        sender: "bot",
        options: [
          { label: "🇯🇵 Japan", value: "japan" },
          { label: "🇦🇺 Australia", value: "australia" },
          { label: "🇨🇦 Canada", value: "canada" },
          { label: "🇺🇸 USA", value: "usa" },
          { label: "🇰🇷 Korea", value: "korea" },
        ],
      };
    }

    if (lowerInput.includes("japan")) {
      return {
        text: "🇯🇵 **Study in Japan**\n\n• Top-tier Language Schools\n• Part-time work permitted (28 hrs/week)\n• Extensive scholarship support\n\nWould you like to email us for more details?",
        sender: "bot",
        options: [
           { label: "✉️ Email Us", value: "contact info" },
           { label: "💬 WhatsApp Us", value: "whatsapp" }
        ]
      };
    }

    if (lowerInput === "whatsapp") {
      if (typeof window !== "undefined") {
        window.open("https://wa.me/9779851173982?text=Hello%20I%20want%20to%20book%20counseling", "_blank");
      }
      return {
        text: "✅ I've opened WhatsApp for you. Our experts will assist you shortly!",
        sender: "bot",
      };
    }

    if (lowerInput.includes("language") || lowerInput.includes("class")) {
      return {
        text: "🗣 **Language Success Classes**\n\nWe offer expert-led JLPT N5 & N4 preparation with flexible shifts:\n\n⏰ Morning: 7 AM - 10 AM\n⏰ Afternoon: 1 PM - 3 PM\n\nInterested in a trial class?",
        sender: "bot",
        options: [
          { label: "✉️ Email Us", value: "contact info" },
          { label: "📞 Get Details", value: "contact info" },
        ],
      };
    }

    if (lowerInput.includes("contact") || lowerInput.includes("location")) {
      return {
        text: "📞 **Smokshita Hub**\n\n📍 Bagbazar, Kathmandu (Opposite PK Campus)\n📱 +977-9851173982\n📧 info@smokshita.com\n\nWe're open Sun-Fri, 10 AM - 6 PM.",
        sender: "bot",
        options: [
          { label: "📍 View Map", value: "map" },
          { label: "💬 Chat on WhatsApp", value: "whatsapp" },
        ],
      };
    }

    return {
      text: "I want to ensure you get the best guidance. Please select an option or ask about our services!",
      sender: "bot",
      options: [
        { label: "🎓 Study Abroad", value: "study abroad" },
        { label: "🗣 Language Prep", value: "language classes" },
        { label: "📞 Support Desk", value: "contact info" },
      ],
    };
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] font-sans">
      {/* Floating Teaser Bubble */}
      <AnimatePresence>
        {!isOpen && showTeaser && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.8 }}
            className="absolute bottom-20 right-0 w-48 bg-white p-3 rounded-2xl shadow-xl border border-blue-50 cursor-pointer mb-2"
            onClick={() => setIsOpen(true)}
          >
            <p className="text-xs font-semibold text-blue-900 leading-tight">
              👋 Any questions about studying abroad? I'm here to help!
            </p>
            <div className="absolute bottom-[-6px] right-6 w-3 h-3 bg-white border-r border-b border-blue-50 rotate-45"></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.button
            key="open-btn"
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 45 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="group relative flex items-center justify-center w-16 h-16 bg-gradient-to-tr from-blue-600 to-blue-800 text-white rounded-2xl shadow-[0_8px_30px_rgb(37,99,235,0.4)] transition-all overflow-hidden"
          >
            <MessageCircle size={30} className="group-hover:scale-110 transition-transform" />
            <span className="absolute top-3 right-3 w-3 h-3 bg-green-400 rounded-full border-2 border-white animate-pulse" />
          </motion.button>
        ) : null}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: 100, opacity: 0, scale: 0.9, transformOrigin: "bottom right" }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 100, opacity: 0, scale: 0.9 }}
            className="bg-white/95 backdrop-blur-xl w-[360px] md:w-[400px] rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] border border-white/20 overflow-hidden flex flex-col h-[600px]"
          >
            {/* Premium Header */}
            <div className="bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 p-6 flex justify-between items-center text-white relative">
              <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                 <Sparkles size={100} />
              </div>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30 shadow-inner">
                     <Bot size={28} className="text-white" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 border-2 border-blue-900 rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-bold text-lg tracking-tight">Smokshita Assistant</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                    <p className="text-[11px] text-blue-100 font-medium tracking-wide uppercase opacity-80">Highly Responsive</p>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="bg-white/10 hover:bg-white/20 p-2.5 rounded-xl transition-all border border-white/10"
                aria-label="Minimize"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto px-5 py-6 space-y-6 scrollbar-hide bg-[#F8FAFC]">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex items-end gap-2.5 ${msg.sender === "user" ? "flex-row-reverse" : "flex-row"}`}
                >
                  {msg.sender === "bot" && (
                    <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0 mb-1">
                      <Bot size={16} className="text-blue-700" />
                    </div>
                  )}

                  <div className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"} max-w-[80%]`}>
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className={`p-4 shadow-sm whitespace-pre-wrap ${
                        msg.sender === "user"
                          ? "bg-blue-600 text-white rounded-2xl rounded-tr-none shadow-blue-200"
                          : "bg-white text-gray-800 rounded-2xl rounded-tl-none border border-gray-100 shadow-gray-200"
                      }`}
                    >
                      <p className="text-[14px] leading-relaxed font-medium">
                        {msg.text}
                      </p>
                    </motion.div>
                    
                    {msg.options && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {msg.options.map((option, idx) => (
                          <motion.button
                            key={idx}
                            whileHover={{ y: -2, scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => handleUserAction(option.value)}
                            className="bg-white text-blue-700 text-[13px] font-bold py-2.5 px-4 rounded-xl border border-blue-100 shadow-sm hover:border-blue-300 hover:bg-blue-50 transition-all flex items-center gap-2 group"
                          >
                            {option.label}
                            <Sparkles size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                          </motion.button>
                        ))}
                      </div>
                    )}
                    
                    <span className="text-[10px] text-gray-400 mt-1.5 px-1 font-semibold flex items-center gap-1">
                       {msg.sender === "user" ? <User size={10} /> : <Bot size={10} />}
                       {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex items-end gap-2.5">
                   <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Bot size={16} className="text-blue-700" />
                   </div>
                   <div className="bg-white border border-gray-100 p-4 rounded-2xl rounded-tl-none shadow-sm shadow-gray-200">
                      <div className="flex gap-1.5">
                         {[0, 1, 2].map((i) => (
                           <motion.div
                             key={i}
                             animate={{ y: [0, -4, 0] }}
                             transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                             className="w-1.5 h-1.5 bg-blue-400 rounded-full"
                           />
                         ))}
                      </div>
                   </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Premium Input Area */}
            <div className="p-5 bg-white border-t border-gray-100">
              <div className="flex items-center gap-3 bg-gray-50 p-2.5 rounded-[1.5rem] border border-gray-200 focus-within:ring-2 focus-within:ring-blue-100 focus-within:bg-white focus-within:border-blue-200 transition-all group">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleUserAction(inputValue)}
                  placeholder="Ask anything..."
                  className="flex-1 bg-transparent border-none outline-none text-[14px] px-3 text-gray-700 placeholder:text-gray-400 font-medium"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleUserAction(inputValue)}
                  disabled={!inputValue.trim()}
                  className="bg-blue-600 hover:bg-blue-800 disabled:bg-gray-200 text-white p-3 rounded-2xl transition-all shadow-md shadow-blue-100 active:shadow-inner"
                >
                  <Send size={18} />
                </motion.button>
              </div>
              <div className="text-center mt-3">
                 <p className="text-[10px] text-gray-400 font-bold tracking-wider uppercase">
                   Authorized Smokshita Assistant
                 </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
