"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Coffee, Code, BookOpen, Lightbulb } from "lucide-react"

export function AboutSection() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

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

    return (
        <section id="about" className="py-20">
            <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="space-y-12"
            >
                <motion.div variants={itemVariants} className="text-center">
                    <Badge variant="outline" className="mb-2 text-purple-500 border-purple-500">
                        About Me
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Who I Am</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        I&apos;m a passionate Full Stack Developer who loves turning complex problems into elegant solutions. With
                        expertise in both frontend and backend technologies, I create seamless digital experiences.
                    </p>
                </motion.div>

                <motion.div variants={itemVariants}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card className="overflow-hidden border-purple-500/20 hover:border-purple-500/50 transition-colors">
                            <CardContent className="p-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-purple-500/10 p-3 rounded-lg">
                                        <Code className="h-6 w-6 text-purple-500" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Currently Working On</h3>
                                        <p className="text-muted-foreground mb-4">
                                            CublyMC - A Minecraft server project with custom features and optimizations.
                                        </p>
                                        <a
                                            href="https://github.com/CublyMC"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-purple-500 hover:text-purple-600 transition-colors"
                                        >
                                            View on GitHub →
                                        </a>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="overflow-hidden border-purple-500/20 hover:border-purple-500/50 transition-colors">
                            <CardContent className="p-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-purple-500/10 p-3 rounded-lg">
                                        <BookOpen className="h-6 w-6 text-purple-500" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Currently Learning</h3>
                                        <p className="text-muted-foreground">
                                            <span className="block mb-1">• Clean Code practices</span>
                                            <span className="block mb-1">• Performance Optimization</span>
                                            <span className="block mb-1">• System Design</span>
                                            <span className="block">• Design Patterns</span>
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="overflow-hidden border-purple-500/20 hover:border-purple-500/50 transition-colors">
                            <CardContent className="p-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-purple-500/10 p-3 rounded-lg">
                                        <Coffee className="h-6 w-6 text-purple-500" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Fun Fact</h3>
                                        <p className="text-muted-foreground">
                                            I spend more time customizing my IDE than actually coding in it.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="overflow-hidden border-purple-500/20 hover:border-purple-500/50 transition-colors">
                            <CardContent className="p-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-purple-500/10 p-3 rounded-lg">
                                        <Lightbulb className="h-6 w-6 text-purple-500" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">My Philosophy</h3>
                                        <p className="text-muted-foreground">
                                            I believe in writing clean, maintainable code that solves real problems. Every line of code should
                                            have a purpose and contribute to the overall solution.
                                        </p>
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

