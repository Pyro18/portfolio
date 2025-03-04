"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { TypeAnimation } from "react-type-animation"

export function HeroSection() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <section className="min-h-screen flex flex-col justify-center pt-16 relative overflow-hidden">
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute top-[20%] left-[10%] w-[300px] h-[300px] rounded-full bg-purple-600/40 blur-[100px] opacity-60 -z-10"
                />

                <div
                    className="absolute bottom-[20%] right-[10%] w-[250px] h-[250px] rounded-full bg-violet-500/30 blur-[120px] opacity-50 -z-10"
                />

                <div
                    className="absolute top-[50%] right-[20%] w-[200px] h-[200px] rounded-full bg-purple-400/30 blur-[80px] opacity-40 -z-10"
                />

                <div
                    className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-600/40 rounded-full blur-[120px] opacity-70 -z-10"
                />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative text-center space-y-6 z-10"
            >
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-4xl md:text-6xl font-bold"
                >
                    Hey there! I&apos;m{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-600">Marius</span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl md:text-2xl text-muted-foreground h-12"
                >
                    <TypeAnimation
                        sequence={[
                            "Full Stack Developer",
                            1500,
                            "Code Artisan",
                            1500,
                            "Software Developer",
                            1500,
                            "Coffee to Code Converter",
                            1500,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Number.POSITIVE_INFINITY}
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex justify-center gap-4 pt-6"
                >
                    <Button
                        size="lg"
                        className="bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 text-white"
                        onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                    >
                        View My Work
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                        onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    >
                        Contact Me
                    </Button>
                </motion.div>
            </motion.div>

            <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                    className="rounded-full"
                >
                    <ChevronDown size={24} />
                </Button>
            </div>
        </section>
    )
}