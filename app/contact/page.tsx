"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  Clock,
} from "lucide-react";
import { Button, Card, Badge } from "@/components/ui";

const contactInfo = [
  {
    icon: Mail,
    title: "אימייל",
    value: "support@y-community.com",
    href: "mailto:support@y-community.com",
  },
  {
    icon: Phone,
    title: "טלפון",
    value: "052-854-0475",
    href: "tel:+972528540475",
  },
  {
    icon: MapPin,
    title: "מיקום",
    value: "ישראל 🇮🇱",
    href: null,
  },
  {
    icon: Clock,
    title: "זמני מענה",
    value: "א׳-ה׳, 9:00-18:00",
    href: null,
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("תודה על פנייתך! נחזור אליך בהקדם.");
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Badge className="mb-6">
                <MessageSquare className="w-4 h-4" />
                נשמח לשמוע ממך
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black mb-6"
            >
              <span className="text-white">צור</span>{" "}
              <span className="text-brand-lime">קשר</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/60"
            >
              יש לך שאלה? רעיון לשיתוף פעולה? או סתם רוצה להגיד שלום?
              נשמח לשמוע ממך!
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section bg-black/20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-white mb-8">
                דרכי התקשרות
              </h2>

              <div className="space-y-4 mb-12">
                {contactInfo.map((item) => (
                  <Card key={item.title} className="p-4">
                    {item.href ? (
                      <a
                        href={item.href}
                        className="flex items-center gap-4 hover:text-brand-lime transition-colors"
                      >
                        <div className="w-12 h-12 rounded-xl bg-brand-lime/10 flex items-center justify-center">
                          <item.icon className="w-6 h-6 text-brand-lime" />
                        </div>
                        <div>
                          <div className="text-white/50 text-sm">
                            {item.title}
                          </div>
                          <div className="text-white font-medium">
                            {item.value}
                          </div>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-brand-lime/10 flex items-center justify-center">
                          <item.icon className="w-6 h-6 text-brand-lime" />
                        </div>
                        <div>
                          <div className="text-white/50 text-sm">
                            {item.title}
                          </div>
                          <div className="text-white font-medium">
                            {item.value}
                          </div>
                        </div>
                      </div>
                    )}
                  </Card>
                ))}
              </div>

              <Card className="p-6 bg-brand-lime/10 border-brand-lime/30">
                <h3 className="text-lg font-bold text-brand-lime mb-2">
                  תמיכה טכנית
                </h3>
                <p className="text-white/70 text-sm">
                  לתמיכה טכנית בשלוחות השונות, אנא פנה ישירות דרך האפליקציה
                  הרלוונטית או שלח אימייל ל-support@y-community.com
                </p>
              </Card>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-white mb-8">
                  שלח הודעה
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-white/70 text-sm mb-2">
                      שם מלא
                    </label>
                    <input
                      type="text"
                      required
                      className="input"
                      placeholder="השם שלך"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <label className="block text-white/70 text-sm mb-2">
                      אימייל
                    </label>
                    <input
                      type="email"
                      required
                      className="input"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <label className="block text-white/70 text-sm mb-2">
                      נושא
                    </label>
                    <input
                      type="text"
                      required
                      className="input"
                      placeholder="במה נוכל לעזור?"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <label className="block text-white/70 text-sm mb-2">
                      הודעה
                    </label>
                    <textarea
                      required
                      rows={5}
                      className="input resize-none"
                      placeholder="ספר לנו יותר..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    rightIcon={<Send className="w-5 h-5" />}
                  >
                    שלח הודעה
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
