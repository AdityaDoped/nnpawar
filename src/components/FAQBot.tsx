"use client";
import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, ChevronDown, HardHat } from "lucide-react";
import { faqData, searchFAQ, suggestedQuestions, FAQItem } from "@/data/faqData";

interface Message {
  id: string;
  role: "bot" | "user";
  text: string;
  faqItem?: FAQItem;
  suggestions?: string[];
}

const WELCOME_MESSAGE: Message = {
  id: "welcome",
  role: "bot",
  text: "👋 Hi! I'm the **N.N. Pawar** civil engineering assistant.\n\nAsk me anything about building approvals, structural design, construction costs, or materials in Pune — or pick a question below.",
  suggestions: suggestedQuestions.slice(0, 4),
};

function formatText(text: string) {
  // Bold: **text**
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    // Render newlines as line breaks
    return part.split("\n").map((line, j, arr) => (
      <span key={`${i}-${j}`}>
        {line}
        {j < arr.length - 1 && <br />}
      </span>
    ));
  });
}

export default function FAQBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasNewMsg, setHasNewMsg] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => inputRef.current?.focus(), 100);
      setHasNewMsg(false);
    }
  }, [open, messages]);

  // Pulse the bubble after 8 seconds to draw attention
  useEffect(() => {
    const t = setTimeout(() => setHasNewMsg(true), 8000);
    return () => clearTimeout(t);
  }, []);

  const addBotMessage = (text: string, faqItem?: FAQItem, suggestions?: string[]) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        { id: Date.now().toString(), role: "bot", text, faqItem, suggestions },
      ]);
    }, 600);
  };

  const handleSend = (query: string) => {
    const q = query.trim();
    if (!q) return;
    setInput("");

    // Add user message
    setMessages((prev) => [
      ...prev,
      { id: Date.now().toString(), role: "user", text: q },
    ]);

    // Search for answers
    const results = searchFAQ(q);

    if (results.length === 0) {
      addBotMessage(
        "I couldn't find a specific answer to that. For expert advice, please contact us directly:\n\n📞 +91 9422322195\n📧 narsingpawar@yahoo.com\n\nOr try one of the suggested questions below.",
        undefined,
        suggestedQuestions.slice(0, 4)
      );
      return;
    }

    const top = results[0];
    const moreSuggestions = results.slice(1).map((r) => r.question);

    addBotMessage(
      top.answer,
      top,
      moreSuggestions.length > 0
        ? [...moreSuggestions, "Ask another question"]
        : ["Ask another question"]
    );
  };

  const handleFAQClick = (item: FAQItem) => {
    setMessages((prev) => [
      ...prev,
      { id: Date.now().toString(), role: "user", text: item.question },
    ]);
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const related = faqData
        .filter((f) => f.id !== item.id && f.category === item.category)
        .slice(0, 2)
        .map((f) => f.question);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          role: "bot",
          text: item.answer,
          faqItem: item,
          suggestions: related.length > 0 ? [...related, "Show more topics"] : ["Show more topics"],
        },
      ]);
    }, 600);
  };

  const handleSuggestionClick = (s: string) => {
    if (s === "Ask another question" || s === "Show more topics") {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          role: "bot",
          text: "Sure! Here are some more topics you can ask about:",
          suggestions: suggestedQuestions,
        },
      ]);
      return;
    }
    // Find exact FAQ match
    const match = faqData.find((f) => f.question === s);
    if (match) {
      handleFAQClick(match);
    } else {
      handleSend(s);
    }
  };

  const categoryColors: Record<FAQItem["category"], string> = {
    approvals: "bg-blue-50 text-blue-700 border-blue-200",
    structural: "bg-orange-50 text-orange-700 border-orange-200",
    materials: "bg-green-50 text-green-700 border-green-200",
    process: "bg-purple-50 text-purple-700 border-purple-200",
    costs: "bg-yellow-50 text-yellow-700 border-yellow-200",
    general: "bg-gray-50 text-gray-700 border-gray-200",
  };

  const categoryLabels: Record<FAQItem["category"], string> = {
    approvals: "Approvals",
    structural: "Structural",
    materials: "Materials",
    process: "Process",
    costs: "Costs",
    general: "General",
  };

  return (
    <>
      {/* FLOATING BUBBLE */}
      <button
        onClick={() => { setOpen(true); setHasNewMsg(false); }}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 bg-accent text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-accent/40 ${open ? "hidden" : "flex"} ${hasNewMsg ? "animate-bounce" : ""}`}
        aria-label="Open civil engineering FAQ chatbot"
        id="faq-bot-bubble"
      >
        <MessageCircle size={24} />
        {hasNewMsg && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-[9px] font-bold">
            1
          </span>
        )}
      </button>

      {/* CHAT WINDOW */}
      <div
        className={`fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-1.5rem)] bg-white shadow-2xl rounded-2xl flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right ${
          open
            ? "scale-100 opacity-100 pointer-events-auto"
            : "scale-90 opacity-0 pointer-events-none"
        }`}
        style={{ maxHeight: "min(600px, calc(100vh - 6rem))" }}
      >
        {/* HEADER */}
        <div className="bg-primary px-4 py-3 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center shrink-0">
              <HardHat size={16} className="text-white" />
            </div>
            <div>
              <p className="text-white text-sm font-semibold leading-none">Civil Engineering FAQ</p>
              <p className="text-white/50 text-[10px] mt-0.5">N.N. Pawar &amp; Associates</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1 text-[10px] text-white/40">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
              Online
            </span>
            <button
              onClick={() => setOpen(false)}
              className="w-7 h-7 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-colors"
              aria-label="Close chatbot"
            >
              <ChevronDown size={18} />
            </button>
          </div>
        </div>

        {/* MESSAGES */}
        <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3 bg-gray-50/50">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex flex-col gap-2 ${msg.role === "user" ? "items-end" : "items-start"}`}>
              {/* Bubble */}
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "bg-accent text-white rounded-tr-sm"
                    : "bg-white text-primary shadow-sm rounded-tl-sm border border-gray-100"
                }`}
              >
                <p className="whitespace-pre-line">{formatText(msg.text)}</p>
                {/* Category badge */}
                {msg.faqItem && (
                  <span className={`mt-2 inline-block text-[9px] tracking-widest uppercase border px-2 py-0.5 rounded-full ${categoryColors[msg.faqItem.category]}`}>
                    {categoryLabels[msg.faqItem.category]}
                  </span>
                )}
              </div>
              {/* Suggestions */}
              {msg.suggestions && msg.suggestions.length > 0 && (
                <div className="flex flex-col gap-1.5 w-full max-w-[85%]">
                  {msg.suggestions.map((s) => (
                    <button
                      key={s}
                      onClick={() => handleSuggestionClick(s)}
                      className="text-left text-xs text-primary bg-white border border-gray-200 rounded-xl px-3 py-2 hover:border-accent hover:text-accent hover:bg-accent/5 transition-all duration-150 leading-snug"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Typing indicator */}
          {isTyping && (
            <div className="flex items-start">
              <div className="bg-white shadow-sm border border-gray-100 rounded-2xl rounded-tl-sm px-4 py-3">
                <div className="flex gap-1 items-center h-4">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: `${i * 0.15}s` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* INPUT */}
        <div className="px-3 py-3 border-t border-gray-100 bg-white shrink-0">
          <form
            onSubmit={(e) => { e.preventDefault(); handleSend(input); }}
            className="flex gap-2 items-center"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about civil engineering..."
              className="flex-1 text-sm text-primary placeholder:text-muted/40 border border-gray-200 rounded-full px-4 py-2.5 focus:outline-none focus:border-accent transition-colors"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="w-9 h-9 shrink-0 bg-accent text-white rounded-full flex items-center justify-center hover:bg-accent/80 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              aria-label="Send message"
            >
              <Send size={14} />
            </button>
          </form>
          <p className="text-[9px] text-muted/40 text-center mt-2">
            Powered by N.N. Pawar &amp; Associates • For complex queries, call +91 9422322195
          </p>
        </div>
      </div>

      {/* CLOSE OVERLAY (mobile) */}
      {open && (
        <button
          className="fixed inset-0 z-40 md:hidden"
          onClick={() => setOpen(false)}
          aria-label="Close"
        />
      )}
    </>
  );
}
