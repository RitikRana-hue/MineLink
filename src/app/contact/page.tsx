"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Container } from "@/components/layout/container"

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic
    alert("Thank you for your message. We will get in touch with you soon.")
  }

  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Contact Hero */}
      <section className="bg-muted/30 py-20 md:py-32">
        <Container className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl space-y-6"
          >
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
              Let's <span className="text-accent">Work Together</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl leading-relaxed">
              Interested in implementing intelligent mining solutions? Get in touch with us to explore how we can help.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Contact Content */}
      <section>
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-bold tracking-tight">Get in Touch</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team of experts is ready to discuss your mining technology needs. Whether you're looking for environmental monitoring, worker safety systems, or AI integration, we're here to help.
              </p>
              <div className="space-y-6">
                {[
                  {
                    title: "Email Us",
                    content: "support@nodesio.in",
                    icon: Mail
                  },
                  {
                    title: "Call Us",
                    content: "+91 72918-97879",
                    icon: Phone
                  },
                  {
                    title: "Visit Us",
                    content: "Ballabgarh, Faridabad",
                    icon: MapPin
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold">{item.title}</h3>
                      <p className="text-muted-foreground">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <Card className="border-muted/50 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl">Send a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="first-name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          First name
                        </label>
                        <Input id="first-name" placeholder="John" required />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="last-name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          Last name
                        </label>
                        <Input id="last-name" placeholder="Doe" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Email address
                      </label>
                      <Input id="email" type="email" placeholder="john.doe@example.com" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Subject
                      </label>
                      <Input id="subject" placeholder="Inquiry about Environmental Monitoring" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Message
                      </label>
                      <Textarea id="message" placeholder="How can we help you?" className="min-h-[150px]" required />
                    </div>
                    <Button type="submit" className="w-full h-12 text-lg font-bold">
                      <Send className="mr-2 h-5 w-5" /> Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Global Presence Statement */}
      <section>
        <Container className="text-center">
          <div className="mx-auto max-w-3xl space-y-8">
            <h2 className="text-3xl font-bold md:text-5xl">Our Global Presence</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              MineLink is an emerging provider of intelligent mining solutions, currently piloting our technology with early partners in India and expanding globally.
            </p>
          </div>
        </Container>
      </section>
    </div>
  )
}
