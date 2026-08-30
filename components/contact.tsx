"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { contactInfo } from "@/lib/data";
import { Mail, Phone, MapPin, ArrowUpRight, Send } from "lucide-react";

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-heading text-neutral-500 tracking-[0.3em] uppercase">
            Get In Touch
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mt-4 tracking-tight">
            Let&apos;s Work
            <br />
            <span className="text-neutral-500">Together</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-neutral-400 leading-relaxed mb-10 font-body">
              Have a project in mind? I&apos;m always open to discussing new opportunities,
              creative collaborations, podcast productions, and ways to bring your vision to life.
            </p>

            <div className="space-y-6 mb-10">
              <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-4 text-white hover:text-neutral-400 transition-colors group">
                <div className="w-11 h-11 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center group-hover:border-neutral-600 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="font-heading text-sm">{contactInfo.email}</span>
              </a>
              <div className="flex items-center gap-4 text-white">
                <div className="w-11 h-11 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="font-heading text-sm">{contactInfo.phone}</span>
              </div>
              <div className="flex items-center gap-4 text-white">
                <div className="w-11 h-11 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="font-heading text-sm">{contactInfo.location}</span>
              </div>
            </div>

            <div className="flex gap-4">
              {contactInfo.social.map((s) => (
                <a
                  key={s.platform}
                  href={s.url}
                  className="px-4 py-2.5 bg-neutral-900 border border-neutral-800 rounded-lg text-xs font-heading text-neutral-400 hover:text-white hover:border-neutral-600 transition-all flex items-center gap-1.5"
                >
                  {s.platform}
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-heading text-neutral-500 mb-2 tracking-widest uppercase">Name</label>
                <input
                  type="text"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4 py-3.5 bg-neutral-900 border border-neutral-800 rounded-xl text-white text-sm font-body outline-none focus:border-neutral-600 transition-colors placeholder:text-neutral-700"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-heading text-neutral-500 mb-2 tracking-widest uppercase">Email</label>
                <input
                  type="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-4 py-3.5 bg-neutral-900 border border-neutral-800 rounded-xl text-white text-sm font-body outline-none focus:border-neutral-600 transition-colors placeholder:text-neutral-700"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-heading text-neutral-500 mb-2 tracking-widest uppercase">Project Type</label>
              <select
                value={formState.project}
                onChange={(e) => setFormState({ ...formState, project: e.target.value })}
                className="w-full px-4 py-3.5 bg-neutral-900 border border-neutral-800 rounded-xl text-white text-sm font-body outline-none focus:border-neutral-600 transition-colors appearance-none"
              >
                <option value="" className="bg-neutral-900">Select a project type</option>
                <option value="brand" className="bg-neutral-900">Brand Film</option>
                <option value="social" className="bg-neutral-900">Social Media Content</option>
                <option value="doc" className="bg-neutral-900">Documentary</option>
                <option value="motion" className="bg-neutral-900">Motion Design</option>
                <option value="commercial" className="bg-neutral-900">Commercial / Ad</option>
                <option value="other" className="bg-neutral-900">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-heading text-neutral-500 mb-2 tracking-widest uppercase">Message</label>
              <textarea
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-3.5 bg-neutral-900 border border-neutral-800 rounded-xl text-white text-sm font-body outline-none focus:border-neutral-600 transition-colors resize-none placeholder:text-neutral-700"
                placeholder="Tell me about your project..."
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-white text-black font-heading text-sm rounded-xl hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2"
            >
              {submitted ? (
                "Message Sent!"
              ) : (
                <>
                  Send Message
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}