"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Code2, Layout, Server, Smartphone, Database, Wrench } from "lucide-react"

export function SkillsSection() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    }

    const skillCategories = [
        {
            title: "Programming Languages",
            icon: <Code2 className="h-6 w-6 text-purple-500" />,
            skills: ["C++", "JavaScript", "TypeScript", "Java", "PHP", "Python", "Dart"],
        },
        {
            title: "Frontend Development",
            icon: <Layout className="h-6 w-6 text-purple-500" />,
            skills: ["React", "Next.js", "Bootstrap", "Bulma", "jQuery", "Tailwind CSS", "HTML5", "CSS3"],
        },
        {
            title: "Backend Development",
            icon: <Server className="h-6 w-6 text-purple-500" />,
            skills: ["Node.js", "Express.js", "Fastify", "Apache", "Nginx"],
        },
        {
            title: "Mobile App Development",
            icon: <Smartphone className="h-6 w-6 text-purple-500" />,
            skills: ["Flutter"],
        },
        {
            title: "Database",
            icon: <Database className="h-6 w-6 text-purple-500" />,
            skills: ["MongoDB", "MySQL", "MariaDB", "PostgreSQL", "Redis", "SQLite"],
        },
        {
            title: "Other Tools",
            icon: <Wrench className="h-6 w-6 text-purple-500" />,
            skills: ["GitHub", "Git", "Twilio", "Jenkins", "Linux", "Firebase", "Bash", "Prisma"],
        },
    ]

    return (
        <section id="skills" className="py-20">
            <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="space-y-12"
            >
                <motion.div variants={itemVariants} className="text-center">
                    <Badge variant="outline" className="mb-2 text-purple-500 border-purple-500">
                        Skills
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Tech Stack</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        A comprehensive collection of technologies I work with to build robust and scalable applications.
                    </p>
                </motion.div>

                <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((category, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <Card className="h-full border-purple-500/20 hover:border-purple-500/50 transition-colors">
                                <CardContent className="p-6">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="bg-purple-500/10 p-2 rounded-lg">{category.icon}</div>
                                        <h3 className="text-lg font-semibold">{category.title}</h3>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {category.skills.map((skill, skillIndex) => (
                                            <Badge
                                                key={skillIndex}
                                                variant="secondary"
                                                className="bg-purple-500/10 hover:bg-purple-500/20 text-foreground transition-colors"
                                            >
                                                {skill}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    )
}

