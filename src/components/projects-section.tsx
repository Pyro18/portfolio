"use client"
import {motion} from "framer-motion"
import {useInView} from "react-intersection-observer"
import {Badge} from "@/components/ui/badge"
import {Button} from "@/components/ui/button"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import {ExternalLink, Github, ChevronRight} from "lucide-react"

export function ProjectsSection() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    const containerVariants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    }

    const itemVariants = {
        hidden: {opacity: 0, y: 20},
        visible: {
            opacity: 1,
            y: 0,
            transition: {duration: 0.6},
        },
    }

    const projects = [
        {
            id: 1,
            title: "CublyMC",
            description:
                "A Minecraft server project with custom features, plugins, and optimizations for an enhanced gaming experience.",
            image: "/cubly.webp?height=300&width=600",
            technologies: ["Java", "Redis", "MySQL", "Docker", "Linux"],
            githubUrl: "https://github.com/CublyMC",
            liveUrl: "https://cublymc.com",
            featured: true,
        },
        {
            id: 2,
            title: "Portfolio Website",
            description:
                "A modern, responsive portfolio website built with Next.js and Tailwind CSS to showcase my projects and skills.",
            image: "/portfolio.png?height=300&width=600",
            technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
            githubUrl: "https://github.com/pyro18/portfolio",
            liveUrl: "#",
        },
        {
            id: 3,
            title: "E-commerce Platform",
            description:
                "A full-stack e-commerce platform with product management, cart functionality, and secure payment processing.",
            image: "/placeholder.svg?height=300&width=600",
            technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
            githubUrl: "https://github.com/pyro18/ecommerce",
            liveUrl: "#",
        },
    ]

    return (
        <section id="projects" className="py-20">
            <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="space-y-12"
            >
                <motion.div variants={itemVariants} className="text-center">
                    <Badge variant="outline" className="mb-2 text-purple-500 border-purple-500">
                        Projects
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">My Work</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        A selection of my recent projects and contributions. Each project represents a unique challenge
                        and
                        solution.
                    </p>
                </motion.div>

                <motion.div variants={containerVariants} className="space-y-12">
                    {/* Featured Project */}
                    {projects
                        .filter((project) => project.featured)
                        .map((project) => (
                            <motion.div key={project.id} variants={itemVariants}>
                                <Card className="overflow-hidden border-purple-500/20">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="relative overflow-hidden">
                                            <img
                                                src={project.image || "/placeholder.svg"}
                                                alt={project.title}
                                                className="w-full h-full object-cover aspect-video"
                                            />
                                            <div className="absolute top-4 left-4">
                                                <Badge className="bg-purple-500 hover:bg-purple-600">Featured</Badge>
                                            </div>
                                        </div>
                                        <div className="flex flex-col justify-between p-6">
                                            <div>
                                                <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                                                <CardDescription
                                                    className="text-base mb-4">{project.description}</CardDescription>
                                                <div className="flex flex-wrap gap-2 mb-6">
                                                    {project.technologies.map((tech, index) => (
                                                        <Badge
                                                            key={index}
                                                            variant="secondary"
                                                            className="bg-purple-500/10 hover:bg-purple-500/20 text-foreground"
                                                        >
                                                            {tech}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="flex gap-4">
                                                <Button variant="outline" size="sm" className="gap-2" asChild>
                                                    <a href={project.githubUrl} target="_blank"
                                                       rel="noopener noreferrer">
                                                        <Github size={16}/>
                                                        GitHub
                                                    </a>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}

                    {/* Other Projects */}
                    <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {projects
                            .filter((project) => !project.featured)
                            .map((project) => (
                                <Card
                                    key={project.id}
                                    className="overflow-hidden border-purple-500/20 hover:border-purple-500/50 transition-colors"
                                >
                                    <div className="relative aspect-video overflow-hidden">
                                        <img
                                            src={project.image || "/placeholder.svg"}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                        />
                                    </div>
                                    <CardHeader>
                                        <CardTitle>{project.title}</CardTitle>
                                        <CardDescription>{project.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((tech, index) => (
                                                <Badge
                                                    key={index}
                                                    variant="secondary"
                                                    className="bg-purple-500/10 hover:bg-purple-500/20 text-foreground"
                                                >
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>
                                    </CardContent>
                                    <CardFooter className="flex justify-between">
                                        <Button variant="ghost" size="sm" className="gap-2" asChild>
                                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                                <Github size={16}/>
                                                GitHub
                                            </a>
                                        </Button>
                                        <Button size="sm" className="gap-2 bg-purple-500 hover:bg-purple-600" asChild>
                                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                                <ExternalLink size={16}/>
                                                Live Demo
                                            </a>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            ))}
                    </motion.div>

                    <motion.div variants={itemVariants} className="flex justify-center">
                        <Button variant="outline" className="gap-2" asChild>
                            <a href="https://github.com/pyro18" target="_blank" rel="noopener noreferrer">
                                View More on GitHub
                                <ChevronRight size={16}/>
                            </a>
                        </Button>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    )
}

