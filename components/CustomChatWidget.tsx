"use client";

import React, { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send, Phone, User, Globe, FileText, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Types
type Message = {
  id: number;
  text: string;
  sender: "user" | "bot";
  options?: { label: string; value: string }[]; // Options for the user to click
};

// Predefined Responses & Logic
const WELCOME_MESSAGE: Message = {
  id: 0,
  text: "👋 Hello! Welcome to Smokshita Educational Consultancy. How can I help you today?",
  sender: "bot",
  options: [
    { label: "🎓 Study Abroad", value: "study abroad" },
    { label: "🗣 Language Classes", value: "language classes" },
    { label: "📅 Book Counseling", value: "book counseling" },
    { label: "📞 Contact Info", value: "contact info" },
  ],
};

export default function CustomChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen, isTyping]);

  // Handle User Input (Text or Button Click)
  const handleUserAction = (text: string) => {
    if (!text.trim()) return;

    // 1. Add User Message
    const userMsg: Message = { id: Date.now(), text, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    // 2. Process Bot Response (Delayed for realism)
    setTimeout(() => {
      const botResponse = getBotResponse(text);
      setMessages((prev) => [...prev, { ...botResponse, id: Date.now() + 1 }]);
      setIsTyping(false);
    }, 1500);
  };

  // Bot Logic / Intent Detection
  const getBotResponse = (input: string): Message => {
    const lowerInput = input.toLowerCase();

    // -- 3. Study Abroad Flow --
    if (lowerInput.includes("study") || lowerInput.includes("abroad") || lowerInput.includes("visa")) {
      return {
        id: 0,
        text: "🌍 Which country are you interested in?",
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

    // Country Specifics
    if (lowerInput.includes("japan")) {
      return {
        id: 0,
        text: "🇯🇵 **Study in Japan**\n✔ N5 / N4 required\n✔ Part-time work allowed\n✔ Full visa & document support",
        sender: "bot",
        options: [
           { label: "📅 Book Counseling", value: "book counseling" },
           { label: "💬 WhatsApp Us", value: "whatsapp" }
        ]
      };
    }
    if (lowerInput.includes("australia")) {
      return {
        id: 0,
        text: "🇦🇺 **Study in Australia**\n✔ High acceptance rate\n✔ Post-study work rights\n✔ GAP accepted up to 5-10 years",
        sender: "bot",
        options: [
           { label: "📅 Book Counseling", value: "book counseling" },
           { label: "💬 WhatsApp Us", value: "whatsapp" }
        ]
      };
    }
    if (lowerInput.includes("canada")) {
      return {
        id: 0,
        text: "🇨🇦 **Study in Canada**\n✔ Top-tier universities\n✔ PGWP available\n✔ Spouse Visa allowed",
        sender: "bot",
        options: [
           { label: "📅 Book Counseling", value: "book counseling" },
           { label: "💬 WhatsApp Us", value: "whatsapp" }
        ]
      };
    }
    if (lowerInput.includes("usa")) {
      return {
        id: 0,
        text: "🇺🇸 **Study in USA**\n✔ Scholarship opportunities\n✔ SAT/IELTS guidance\n✔ STEM courses available",
        sender: "bot",
        options: [
           { label: "📅 Book Counseling", value: "book counseling" },
           { label: "💬 WhatsApp Us", value: "whatsapp" }
        ]
      };
    }
    if (lowerInput.includes("korea")) {
      return {
        id: 0,
        text: "🇰🇷 **Study in Korea**\n✔ Affordable tuition\n✔ Top technology universities\n✔ Language support provided",
        sender: "bot",
        options: [
           { label: "📅 Book Counseling", value: "book counseling" },
           { label: "💬 WhatsApp Us", value: "whatsapp" }
        ]
      };
    }

    // -- 4. Language Classes Flow --
    if (lowerInput.includes("language") || lowerInput.includes("class") || lowerInput.includes("jlpt") || lowerInput.includes("nat")) {
      return {
        id: 0,
        text: "🗣 **Japanese Language Classes**\n📘 Levels: N5 & N4\n⏰ Morning: 7:00–10:00\n⏰ Day: 1:00–3:00",
        sender: "bot",
        options: [
          { label: "📅 Book Trial Class", value: "book counseling" },
          { label: "💬 WhatsApp Us", value: "whatsapp" },
        ],
      };
    }

    // -- 5. Book Counseling Flow --
    if (lowerInput.includes("book") || lowerInput.includes("counseling") || lowerInput.includes("appointment")) {
      return {
        id: 0,
        text: "📅 **Book a Counseling Session**\nPlease visit our office or contact us directly. Leaving your name and number here is also fine!",
        sender: "bot",
        options: [
          { label: "📞 Call Now", value: "contact info" },
          { label: "💬 WhatsApp Us", value: "whatsapp" },
        ],
      };
    }

    // -- 6. Contact Info --
    if (lowerInput.includes("contact") || lowerInput.includes("phone") || lowerInput.includes("email") || lowerInput.includes("location")) {
      return {
        id: 0,
        text: "📞 **Contact Info**\nPhone: +977-9851173982\n📧 Email: info@smokshita.com\n🕘 Office Hours: 10 AM – 6 PM\n📍 Location: Bagbazar, Kathmandu",
        sender: "bot",
        options: [
          { label: "💬 WhatsApp Directly", value: "whatsapp" },
          { label: "📍 View on Map", value: "map" }, // Placeholder logic
        ],
      };
    }

    // -- 8. WhatsApp Redirect --
    if (lowerInput === "whatsapp") {
      window.open("https://wa.me/9779851173982?text=Hello%20I%20want%20to%20book%20counseling", "_blank");
      return {
        id: 0,
        text: "✅ I've opened WhatsApp for you. Feel free to send your query there!",
        sender: "bot",
      };
    }

    // Fallback
    return {
      id: 0,
      text: "I didn't quite catch that. Could you please select an option from below?",
      sender: "bot",
      options: [
        { label: "🎓 Study Abroad", value: "study abroad" },
        { label: "🗣 Language Classes", value: "language classes" },
        { label: "📅 Book Counseling", value: "book counseling" },
        { label: "📞 Contact Info", value: "contact info" },
      ],
    };
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] font-sans">
      {/* Floating Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all hover:scale-110"
          >
            <MessageCircle size={28} />
            <span className="hidden md:inline font-semibold">Chat with Us</span>
            <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full animate-ping" />
            <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: 20, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.95 }}
            className="bg-white w-[350px] md:w-[380px] rounded-2xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col h-[550px]"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-700 to-blue-900 p-4 flex justify-between items-center text-white shadow-md">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                     <span className="text-xl">🤖</span>
                  </div>
                  <strong className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-blue-800 rounded-full"></strong>
                </div>
                <div>
                  <h3 className="font-bold text-sm">Smokshita Assistant</h3>
                  <p className="text-[10px] text-blue-100 opacity-90">Online | Replies Instantly</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="hover:bg-white/20 p-2 rounded-full transition-colors"
                aria-label="Close Chat"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4 scroll-smooth">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm whitespace-pre-wrap ${
                      msg.sender === "user"
                        ? "bg-blue-600 text-white rounded-tr-none"
                        : "bg-white text-gray-800 border border-gray-200 rounded-tl-none"
                    }`}
                  >
                    {msg.text}
                  </div>
                  
                  {/* Options (if any) */}
                  {msg.options && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {msg.options.map((option, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleUserAction(option.value)}
                          className="bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-2 rounded-lg border border-blue-100 hover:bg-blue-100 hover:border-blue-300 transition-all flex items-center gap-1"
                        >
                          {option.label}
                          {/* <ChevronRight size={12} /> */}
                        </button>
                      ))}
                    </div>
                  )}
                  
                  {/* Timestamp (Optional) */}
                   <span className="text-[10px] text-gray-400 mt-1 px-1">
                      {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                   </span>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-start"
                >
                   <div className="bg-white text-gray-800 border border-gray-200 rounded-tl-none p-4 rounded-2xl shadow-sm">
                      <div className="flex gap-2">
                         <motion.div
                           animate={{ y: [0, -5, 0] }}
                           transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                           className="w-2 h-2 bg-gray-400 rounded-full"
                         />
                         <motion.div
                           animate={{ y: [0, -5, 0] }}
                           transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                           className="w-2 h-2 bg-gray-400 rounded-full"
                         />
                         <motion.div
                           animate={{ y: [0, -5, 0] }}
                           transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                           className="w-2 h-2 bg-gray-400 rounded-full"
                         />
                      </div>
                   </div>
                   <span className="text-[10px] text-gray-400 mt-1 px-1">Smokshita Assistant typing...</span>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-3 bg-white border-t border-gray-100">
              <div className="flex items-center gap-2 bg-gray-50 p-2 rounded-full border border-gray-200 focus-within:ring-2 focus-within:ring-blue-100 transition-all">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleUserAction(inputValue)}
                  placeholder="Type a message..."
                  className="flex-1 bg-transparent border-none outline-none text-sm px-2 text-gray-700 placeholder:text-gray-400"
                />
                <button
                  onClick={() => handleUserAction(inputValue)}
                  disabled={!inputValue.trim()}
                  className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white p-2 rounded-full transition-all shadow-sm"
                >
                  <Send size={16} />
                </button>
              </div>
              <div className="text-center mt-2">
                 <p className="text-[10px] text-gray-400">Powered by Smokshita Tech</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
