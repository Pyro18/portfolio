"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Twitter, Instagram, Coffee, Mail, Send } from "lucide-react"

export function ContactSection() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        setTimeout(() => {
            setIsSubmitting(false)
            setIsSubmitted(true)
            setFormState({
                name: "",
                email: "",
                message: "",
            })
        }, 1500)
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    }

    const socialLinks = [
        {
            name: "Twitter",
            icon: <Twitter className="h-5 w-5" />,
            url: "https://twitter.com/MNoroaca",
            color: "bg-[#1DA1F2]/10 text-[#1DA1F2]",
        },
        {
            name: "Instagram",
            icon: <Instagram className="h-5 w-5" />,
            url: "https://instagram.com/marius__noroaca",
            color: "bg-[#E4405F]/10 text-[#E4405F]",
        },
        {
            name: "Buy Me a Coffee",
            icon: <Coffee className="h-5 w-5" />,
            url: "https://buymeacoffee.com/pyro18",
            color: "bg-[#FFDD00]/10 text-[#FFDD00]",
        },
    ]

    return (
        <section id="contact" className="py-20">
            <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="space-y-12"
            >
                <motion.div variants={itemVariants} className="text-center">
                    <Badge variant="outline" className="mb-2 text-purple-500 border-purple-500">
                        Contact
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Have a project in mind or just want to say hello? Feel free to reach out!
                    </p>
                </motion.div>

                <motion.div variants={itemVariants}>
                    <div className="grid md:grid-cols-5 gap-8">
                        <Card className="md:col-span-3 border-purple-500/20">
                            <CardContent className="p-6">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Name</Label>
                                        <Input
                                            id="name"
                                            name="name"
                                            placeholder="Your name"
                                            value={formState.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="your.email@example.com"
                                            value={formState.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="message">Message</Label>
                                        <Textarea
                                            id="message"
                                            name="message"
                                            placeholder="Your message"
                                            rows={5}
                                            value={formState.message}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <Button
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700"
                                        disabled={isSubmitting || isSubmitted}
                                    >
                                        {isSubmitting ? (
                                            <span className="flex items-center gap-2">
                        <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                          <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                          ></circle>
                          <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </span>
                                        ) : isSubmitted ? (
                                            <span className="flex items-center gap-2">Message Sent!</span>
                                        ) : (
                                            <span className="flex items-center gap-2">
                        <Send size={16} />
                        Send Message
                      </span>
                                        )}
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>

                        <Card className="md:col-span-2 border-purple-500/20">
                            <CardContent className="p-6">
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-lg font-semibold mb-4">Connect With Me</h3>
                                        <div className="space-y-4">
                                            <a
                                                href="mailto:marius.noroaca@gmail.com"
                                                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                                            >
                                                <div className="bg-purple-500/10 p-2 rounded-full">
                                                    <Mail className="h-5 w-5 text-purple-500" />
                                                </div>
                                                <span>marius.noroaca@gmail.com</span>
                                            </a>
                                            {socialLinks.map((link, index) => (
                                                <a
                                                    key={index}
                                                    href={link.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                                                >
                                                    <div className={`${link.color} p-2 rounded-full`}>{link.icon}</div>
                                                    <span>{link.name}</span>
                                                </a>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-semibold mb-4">Support My Work</h3>
                                        <p className="text-muted-foreground mb-4">
                                            If you find my work valuable, consider supporting me with a coffee.
                                        </p>
                                        <Button
                                            variant="outline"
                                            className="w-full border-purple-500/50 hover:bg-purple-500/10 transition-colors"
                                            asChild
                                        >
                                            <a
                                                href="https://buymeacoffee.com/pyro18"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center gap-2"
                                            >
                                                <Coffee size={16} />
                                                Buy Me a Coffee
                                            </a>
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    )
}

