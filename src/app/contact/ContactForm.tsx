"use client";
import { useState } from "react";
import { Send, AlertCircle } from "lucide-react";

interface FormError {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
}

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", projectType: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormError>({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormError = {};
    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    } else if (form.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }
    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9\s+\-()]{10,}$/.test(form.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Enter a valid phone number";
    }
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    } else if (form.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (errors[name as keyof FormError]) {
      setErrors({ ...errors, [name]: undefined });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsLoading(true);
    const msg = encodeURIComponent(
      `Hello N.N. Pawar & Associates,\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nProject Type: ${form.projectType}\n\nMessage: ${form.message}`
    );
    window.open(`https://wa.me/919422322195?text=${msg}`, "_blank");
    setTimeout(() => {
      setIsLoading(false);
      setSubmitted(true);
      setForm({ name: "", phone: "", email: "", projectType: "", message: "" });
    }, 1000);
  };

  if (submitted) {
    return (
      <div className="bg-secondary p-10 text-center animate-in fade-in duration-300">
        <p className="text-accent text-3xl mb-3 animate-bounce">✓</p>
        <p className="font-serif text-xl text-primary mb-2">Message Sent!</p>
        <p className="text-sm text-muted">Your message has been sent via WhatsApp. We&apos;ll get back to you shortly.</p>
        <button onClick={() => setSubmitted(false)} className="mt-6 text-xs tracking-widest uppercase text-primary border-b border-primary pb-0.5 hover:text-accent hover:border-accent transition-colors">
          Send Another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <label className="text-[9px] tracking-widest uppercase text-muted/60 mb-2 block">Your Name *</label>
          <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="Full name"
            className={`w-full border px-4 py-3 text-sm text-primary placeholder:text-muted/40 focus:outline-none transition-colors ${errors.name ? "border-red-500 focus:border-red-500" : "border-gray-200 focus:border-accent"}`} />
          {errors.name && <p className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertCircle size={12} /> {errors.name}</p>}
        </div>
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
          <label className="text-[9px] tracking-widest uppercase text-muted/60 mb-2 block">Phone Number *</label>
          <input type="tel" name="phone" required value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX"
            className={`w-full border px-4 py-3 text-sm text-primary placeholder:text-muted/40 focus:outline-none transition-colors ${errors.phone ? "border-red-500 focus:border-red-500" : "border-gray-200 focus:border-accent"}`} />
          {errors.phone && <p className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertCircle size={12} /> {errors.phone}</p>}
        </div>
      </div>
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
        <label className="text-[9px] tracking-widest uppercase text-muted/60 mb-2 block">Email Address</label>
        <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com"
          className={`w-full border px-4 py-3 text-sm text-primary placeholder:text-muted/40 focus:outline-none transition-colors ${errors.email ? "border-red-500 focus:border-red-500" : "border-gray-200 focus:border-accent"}`} />
        {errors.email && <p className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertCircle size={12} /> {errors.email}</p>}
      </div>
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
        <label className="text-[9px] tracking-widest uppercase text-muted/60 mb-2 block">Project Type</label>
        <select name="projectType" value={form.projectType} onChange={handleChange}
          className="w-full border border-gray-200 px-4 py-3 text-sm text-primary focus:outline-none focus:border-accent transition-colors bg-white">
          <option value="">Select a type...</option>
          <option>Residential Bungalow</option>
          <option>Apartment / Township</option>
          <option>Commercial Building</option>
          <option>Structural Engineering</option>
          <option>Building Approval / Licence</option>
          <option>Interior Design</option>
          <option>Other</option>
        </select>
      </div>
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-400">
        <label className="text-[9px] tracking-widest uppercase text-muted/60 mb-2 block">Your Message *</label>
        <textarea name="message" required value={form.message} onChange={handleChange} rows={5}
          placeholder="Tell us about your project, site location, and requirements..."
          className={`w-full border px-4 py-3 text-sm text-primary placeholder:text-muted/40 focus:outline-none transition-colors resize-none ${errors.message ? "border-red-500 focus:border-red-500" : "border-gray-200 focus:border-accent"}`} />
        {errors.message && <p className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertCircle size={12} /> {errors.message}</p>}
      </div>
      <button type="submit" disabled={isLoading} className="inline-flex items-center justify-center gap-2 bg-primary text-white text-xs tracking-widest uppercase px-8 py-4 hover:bg-accent disabled:opacity-50 disabled:cursor-not-allowed transition-all animate-in fade-in slide-in-from-bottom-4 duration-500 delay-500">
        {isLoading ? "Sending..." : <><Send size={13} /> Send via WhatsApp</>}
      </button>
      <p className="text-[10px] text-muted/50 text-center">Submitting opens WhatsApp with your message pre-filled.</p>
    </form>
  );
}
