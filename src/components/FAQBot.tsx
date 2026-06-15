"use client";
import { useState, useRef, useEffect } from "react";
import { MessageCircle, Send, ChevronDown, HardHat, Sparkles, Phone } from "lucide-react";
import { faqData, searchFAQ, suggestedQuestions, FAQItem } from "@/data/faqData";

interface Message {
  id: string;
  role: "bot" | "user";
  text: string;
  faqItem?: FAQItem;
  suggestions?: string[];
  isGreeting?: boolean;
}

// ── Time-aware greeting ──────────────────────────────────────────────────────
function getGreeting(): { salutation: string; emoji: string } {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return { salutation: "Good morning", emoji: "🌅" };
  if (hour >= 12 && hour < 17) return { salutation: "Good afternoon", emoji: "☀️" };
  if (hour >= 17 && hour < 21) return { salutation: "Good evening", emoji: "🌆" };
  return { salutation: "Good evening", emoji: "🌙" };
}

// ── Warm, varied acknowledgement phrases ────────────────────────────────────
const acknowledgements = [
  "Great question! Here's what you need to know:",
  "Absolutely happy to help with that! 😊",
  "Wonderful question — let me explain:",
  "Of course! Here's a clear breakdown:",
  "Thank you for asking — this is important to know:",
  "Happy to clarify that for you!",
];
const getAck = () => acknowledgements[Math.floor(Math.random() * acknowledgements.length)];

// ── Friendly fallback messages ───────────────────────────────────────────────
const fallbacks = [
  "Hmm, I don't have a specific answer for that just yet — but our team definitely does! 😊\n\nPlease feel free to reach out directly:",
  "That's a great question, and it deserves a personal answer from our experts!\n\nYou can connect with us anytime:",
  "I'd love to help more, but this one is best answered by Mr. N.N. Pawar personally.\n\nHere's how to reach us:",
];
const getFallback = () => fallbacks[Math.floor(Math.random() * fallbacks.length)];

// ── Text formatter (bold, line breaks) ──────────────────────────────────────
function formatText(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i} className="font-semibold">{part.slice(2, -2)}</strong>;
    }
    return part.split("\n").map((line, j, arr) => (
      <span key={`${i}-${j}`}>
        {line}
        {j < arr.length - 1 && <br />}
      </span>
    ));
  });
}

export default function FAQBot() {
  const { salutation, emoji } = getGreeting();

  const WELCOME_MSG: Message = {
    id: "welcome-1",
    role: "bot",
    isGreeting: true,
    text: `${emoji} **${salutation}! Welcome to N.N. Pawar & Associates.**\n\nI'm your personal civil engineering assistant — here to help you with any questions about building approvals, structural design, construction costs, materials, and more in Pune & Maharashtra.\n\nFeel free to type your question, or pick a topic below. We're delighted to assist you! 🏛️`,
    suggestions: suggestedQuestions.slice(0, 4),
  };

  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME_MSG]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [previewDismissed, setPreviewDismissed] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const messageCount = useRef(0);

  // Auto-scroll on new messages
  useEffect(() => {
    if (open) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [open, messages]);

  // Show a friendly preview bubble after 6s to invite engagement
  useEffect(() => {
    const t = setTimeout(() => {
      if (!open && !previewDismissed) setShowPreview(true);
    }, 6000);
    return () => clearTimeout(t);
  }, [open, previewDismissed]);

  const addBotMessage = (text: string, faqItem?: FAQItem, suggestions?: string[], delay = 700) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      messageCount.current += 1;
      setMessages((prev) => [
        ...prev,
        { id: `bot-${Date.now()}`, role: "bot", text, faqItem, suggestions },
      ]);
    }, delay);
  };

  // After every few exchanges, offer to connect with the team
  const maybeAddCTA = (afterCount: number) => {
    if (afterCount === 4) {
      setTimeout(() => {
        addBotMessage(
          "💬 **Enjoying our chat?**\n\nFor a more detailed consultation, our team is just a call away. Mr. N.N. Pawar offers a **free initial discussion** for new projects!",
          undefined,
          ["📞 Call us: +91 9422322195", "💬 WhatsApp us", "Explore our services →"],
          1400
        );
      }, 1200);
    }
  };

  const handleSend = (query: string) => {
    const q = query.trim();
    if (!q) return;

    // Special CTA options
    if (q === "📞 Call us: +91 9422322195") {
      window.open("tel:+919422322195");
      return;
    }
    if (q === "💬 WhatsApp us") {
      window.open("https://wa.me/919422322195?text=Hello%20N.N.%20Pawar%20Associates%2C%20I%20would%20like%20to%20know%20more.", "_blank");
      return;
    }
    if (q === "Explore our services →") {
      window.location.href = "/services";
      return;
    }

    setInput("");
    setMessages((prev) => [
      ...prev,
      { id: `user-${Date.now()}`, role: "user", text: q },
    ]);

    messageCount.current += 1;

    const results = searchFAQ(q);

    if (results.length === 0) {
      addBotMessage(
        `${getFallback()}\n\n📞 **+91 9422322195** / +91 8788285434\n📧 narsingpawar@yahoo.com\n\nOr pick a topic I can help you with right now:`,
        undefined,
        suggestedQuestions.slice(0, 4)
      );
      return;
    }

    const top = results[0];
    const related = results.slice(1).map((r) => r.question);
    const ack = getAck();

    // First send acknowledgement, then the answer with a stagger
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      messageCount.current += 1;
      const count = messageCount.current;
      setMessages((prev) => [
        ...prev,
        {
          id: `bot-ack-${Date.now()}`,
          role: "bot",
          text: `${ack}`,
          suggestions: undefined,
        },
      ]);
      // Then add the actual answer after a short delay
      setTimeout(() => {
        setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
          messageCount.current += 1;
          setMessages((prev) => [
            ...prev,
            {
              id: `bot-ans-${Date.now()}`,
              role: "bot",
              text: top.answer,
              faqItem: top,
              suggestions: related.length > 0
                ? [...related.slice(0, 2), "🔄 Explore more topics"]
                : ["🔄 Explore more topics"],
            },
          ]);
          maybeAddCTA(count);
        }, 600);
      }, 400);
    }, 650);
  };

  const handleSuggestionClick = (s: string) => {
    if (s === "🔄 Explore more topics" || s === "Ask another question" || s === "Show more topics") {
      addBotMessage(
        "Of course! Here are some more things I can help you with. Just pick a topic or type your own question anytime 😊",
        undefined,
        suggestedQuestions
      );
      return;
    }
    const match = faqData.find((f) => f.question === s);
    if (match) {
      setMessages((prev) => [
        ...prev,
        { id: `user-${Date.now()}`, role: "user", text: match.question },
      ]);
      messageCount.current += 1;
      const ack = getAck();
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        messageCount.current += 1;
        setMessages((prev) => [
          ...prev,
          { id: `bot-ack-${Date.now()}`, role: "bot", text: ack },
        ]);
        setTimeout(() => {
          setIsTyping(true);
          setTimeout(() => {
            setIsTyping(false);
            messageCount.current += 1;
            const related = faqData
              .filter((f) => f.id !== match.id && f.category === match.category)
              .slice(0, 2)
              .map((f) => f.question);
            setMessages((prev) => [
              ...prev,
              {
                id: `bot-ans-${Date.now()}`,
                role: "bot",
                text: match.answer,
                faqItem: match,
                suggestions: related.length > 0
                  ? [...related, "🔄 Explore more topics"]
                  : ["🔄 Explore more topics"],
              },
            ]);
            maybeAddCTA(messageCount.current);
          }, 600);
        }, 400);
      }, 650);
    } else {
      handleSend(s);
    }
  };

  const handleOpen = () => {
    setOpen(true);
    setShowPreview(false);
    setPreviewDismissed(true);
  };

  const handleClose = () => {
    setOpen(false);
    // Send a warm goodbye if user had a conversation
    if (messageCount.current > 1 && !messages.some((m) => m.text.includes("Thank you"))) {
      setMessages((prev) => [
        ...prev,
        {
          id: `bot-bye-${Date.now()}`,
          role: "bot",
          text: "Thank you for chatting with us! 🙏\n\nFeel free to come back anytime. We'd love to help you bring your dream project to life. Have a wonderful day! 😊",
          suggestions: ["📞 Call: +91 9422322195", "🌐 View our projects"],
        },
      ]);
    }
  };

  const categoryColors: Record<FAQItem["category"], string> = {
    approvals: "bg-blue-50 text-blue-700 border-blue-200",
    structural: "bg-orange-50 text-orange-700 border-orange-200",
    materials: "bg-green-50 text-green-700 border-green-200",
    process: "bg-purple-50 text-purple-700 border-purple-200",
    costs: "bg-yellow-50 text-yellow-800 border-yellow-200",
    general: "bg-gray-50 text-gray-700 border-gray-200",
  };
  const categoryLabels: Record<FAQItem["category"], string> = {
    approvals: "📋 Approvals",
    structural: "🏗️ Structural",
    materials: "🧱 Materials",
    process: "⚙️ Process",
    costs: "💰 Costs",
    general: "ℹ️ General",
  };

  return (
    <>
      {/* ── PREVIEW TOOLTIP ───────────────────────────────────────────── */}
      {showPreview && !open && (
        <div className="fixed bottom-24 right-6 z-50 animate-in slide-in-from-bottom-4 fade-in duration-500">
          <div className="bg-white border border-gray-100 shadow-xl rounded-2xl rounded-br-sm px-4 py-3 max-w-[220px] relative">
            <button
              onClick={() => { setShowPreview(false); setPreviewDismissed(true); }}
              className="absolute -top-2 -right-2 w-5 h-5 bg-gray-200 rounded-full text-gray-500 hover:bg-gray-300 flex items-center justify-center text-[10px] font-bold transition-colors"
              aria-label="Dismiss"
            >✕</button>
            <p className="text-xs text-primary font-medium leading-snug">
              {emoji} {salutation}! Have a civil engineering question? <span className="text-accent font-semibold">Ask me anything!</span>
            </p>
            <div className="absolute bottom-[-6px] right-4 w-3 h-3 bg-white border-r border-b border-gray-100 rotate-45" />
          </div>
        </div>
      )}

      {/* ── FLOATING BUBBLE ───────────────────────────────────────────── */}
      <button
        onClick={handleOpen}
        id="faq-bot-bubble"
        aria-label="Open civil engineering FAQ assistant"
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 group ${open ? "hidden" : "flex"}`}
        style={{ background: "linear-gradient(135deg, #b8935a 0%, #8a6635 100%)" }}
      >
        <MessageCircle size={24} className="text-white group-hover:scale-110 transition-transform" />
        {showPreview && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse" />
        )}
      </button>

      {/* ── CHAT WINDOW ───────────────────────────────────────────────── */}
      <div
        className={`fixed bottom-6 right-6 z-50 w-[370px] max-w-[calc(100vw-1.5rem)] bg-white shadow-2xl rounded-2xl flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right ${
          open ? "scale-100 opacity-100 pointer-events-auto" : "scale-90 opacity-0 pointer-events-none"
        }`}
        style={{ maxHeight: "min(620px, calc(100vh - 5rem))" }}
      >
        {/* HEADER */}
        <div className="shrink-0 px-4 py-3.5 flex items-center justify-between"
          style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)" }}>
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                style={{ background: "linear-gradient(135deg, #b8935a, #8a6635)" }}>
                <HardHat size={17} className="text-white" />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-[#1a1a2e]" />
            </div>
            <div>
              <p className="text-white text-sm font-semibold leading-none tracking-wide">Ask an Expert</p>
              <div className="flex items-center gap-1.5 mt-0.5">
                <Sparkles size={9} className="text-yellow-400" />
                <p className="text-white/50 text-[10px]">N.N. Pawar &amp; Associates</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a href="tel:+919422322195"
              className="w-7 h-7 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-colors"
              aria-label="Call us">
              <Phone size={14} />
            </a>
            <button
              onClick={handleClose}
              className="w-7 h-7 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-colors"
              aria-label="Minimise chat"
            >
              <ChevronDown size={18} />
            </button>
          </div>
        </div>

        {/* MESSAGES */}
        <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3"
          style={{ background: "linear-gradient(180deg, #f9f8f6 0%, #ffffff 100%)" }}>
          {messages.map((msg) => (
            <div key={msg.id} className={`flex flex-col gap-2 ${msg.role === "user" ? "items-end" : "items-start"}`}>
              {/* Avatar for bot */}
              {msg.role === "bot" && (
                <div className="flex items-end gap-2">
                  <div className="w-6 h-6 rounded-full shrink-0 flex items-center justify-center text-[10px]"
                    style={{ background: "linear-gradient(135deg, #b8935a, #8a6635)" }}>
                    🏛️
                  </div>
                  <div className={`max-w-[84%] rounded-2xl rounded-tl-sm px-4 py-3 text-sm leading-relaxed shadow-sm border ${
                    msg.isGreeting
                      ? "bg-gradient-to-br from-amber-50 to-orange-50 border-amber-100 text-primary"
                      : "bg-white border-gray-100 text-primary"
                  }`}>
                    <p>{formatText(msg.text)}</p>
                    {msg.faqItem && (
                      <span className={`mt-2.5 inline-block text-[9px] tracking-widest uppercase border px-2 py-0.5 rounded-full font-medium ${categoryColors[msg.faqItem.category]}`}>
                        {categoryLabels[msg.faqItem.category]}
                      </span>
                    )}
                  </div>
                </div>
              )}

              {/* User bubble */}
              {msg.role === "user" && (
                <div className="max-w-[84%] rounded-2xl rounded-tr-sm px-4 py-3 text-sm leading-relaxed text-white"
                  style={{ background: "linear-gradient(135deg, #b8935a, #8a6635)" }}>
                  <p>{msg.text}</p>
                </div>
              )}

              {/* Suggestion chips */}
              {msg.suggestions && msg.suggestions.length > 0 && (
                <div className={`flex flex-col gap-1.5 ${msg.role === "bot" ? "ml-8 w-[84%]" : "w-full max-w-[84%]"}`}>
                  {msg.suggestions.map((s) => (
                    <button
                      key={s}
                      onClick={() => handleSuggestionClick(s)}
                      className="text-left text-xs text-primary bg-white border border-gray-200 rounded-xl px-3.5 py-2 hover:border-accent hover:text-accent hover:bg-accent/5 hover:shadow-sm transition-all duration-150 leading-snug"
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
            <div className="flex items-end gap-2">
              <div className="w-6 h-6 rounded-full shrink-0 flex items-center justify-center text-[10px]"
                style={{ background: "linear-gradient(135deg, #b8935a, #8a6635)" }}>
                🏛️
              </div>
              <div className="bg-white shadow-sm border border-gray-100 rounded-2xl rounded-tl-sm px-4 py-3">
                <div className="flex gap-1 items-center h-4">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="w-1.5 h-1.5 rounded-full animate-bounce"
                      style={{ background: "#b8935a", animationDelay: `${i * 0.15}s` }}
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
              placeholder={`${salutation.split(" ")[1] ? "Ask your civil engineering question..." : "Ask anything about construction..."}`}
              className="flex-1 text-sm text-primary placeholder:text-muted/40 border border-gray-200 rounded-full px-4 py-2.5 focus:outline-none focus:border-accent transition-colors"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              aria-label="Send"
              className="w-9 h-9 shrink-0 rounded-full flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed transition-all hover:scale-105"
              style={{ background: "linear-gradient(135deg, #b8935a, #8a6635)" }}
            >
              <Send size={14} className="text-white" />
            </button>
          </form>
          <p className="text-[9px] text-muted/35 text-center mt-2 tracking-wide">
            🏛️ N.N. Pawar &amp; Associates • Free consultation: +91 9422322195
          </p>
        </div>
      </div>

      {/* Mobile backdrop */}
      {open && (
        <button
          className="fixed inset-0 z-40 md:hidden bg-black/20 backdrop-blur-sm"
          onClick={handleClose}
          aria-label="Close chat"
        />
      )}
    </>
  );
}
