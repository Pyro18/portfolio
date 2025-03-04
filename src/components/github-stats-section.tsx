"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Github, GitFork, Star, Code } from "lucide-react"

export function GithubStatsSection() {
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

    // Sample GitHub stats data
    const topLanguages = [
        {name: "Dart", percentage: 33.9, color: "#00B4AB"},
        {name: "JavaScript", percentage: 14.2, color: "#f1e05a"},
        {name: "TypeScript", percentage: 19.7, color: "#3178c6"},
        {name: "Java", percentage: 12.6, color: "#b07219"},
        {name: "C++", percentage: 7.9, color: "#f34b7d"},
        {name: "PHP", percentage: 6.3, color: "#4F5D95"},
        {name: "Python", percentage: 5.4, color: "#3572A5"},
    ]

    const githubStats = {
        repos: 24,
        stars: 48,
        forks: 12,
        contributions: 782,
    }

    // Sample contribution data for the chart
    const contributionMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const contributionData = [25, 32, 41, 38, 65, 78, 95, 115, 90, 102, 68, 35]

    return (
        <section id="github" className="py-20">
            <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="space-y-12"
            >
                <motion.div variants={itemVariants} className="text-center">
                    <Badge variant="outline" className="mb-2 text-purple-500 border-purple-500">
                        GitHub
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">GitHub Stats</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        A visual representation of my GitHub activity and contributions.
                    </p>
                </motion.div>

                <motion.div variants={itemVariants}>
                    <Tabs defaultValue="languages" className="w-full">
                        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
                            <TabsTrigger value="languages">Top Languages</TabsTrigger>
                            <TabsTrigger value="activity">Activity</TabsTrigger>
                        </TabsList>
                        <TabsContent value="languages" className="mt-6">
                            <Card>
                                <CardContent className="p-6">
                                    <div className="space-y-6">
                                        {topLanguages.map((language) => (
                                            <div key={language.name} className="space-y-2">
                                                <div className="flex justify-between items-center">
                                                    <span className="font-medium">{language.name}</span>
                                                    <span className="text-sm text-muted-foreground">{language.percentage}%</span>
                                                </div>
                                                <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                                                    <div
                                                        className="h-full rounded-full"
                                                        style={{
                                                            width: `${language.percentage}%`,
                                                            backgroundColor: language.color,
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="activity" className="mt-6">
                            <Card>
                                <CardContent className="p-6">
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                                        <div className="flex flex-col items-center p-4 bg-card rounded-lg border border-purple-500/20">
                                            <Code className="h-6 w-6 text-purple-500 mb-2" />
                                            <span className="text-2xl font-bold">{githubStats.repos}</span>
                                            <span className="text-sm text-muted-foreground">Repositories</span>
                                        </div>
                                        <div className="flex flex-col items-center p-4 bg-card rounded-lg border border-purple-500/20">
                                            <Star className="h-6 w-6 text-purple-500 mb-2" />
                                            <span className="text-2xl font-bold">{githubStats.stars}</span>
                                            <span className="text-sm text-muted-foreground">Stars</span>
                                        </div>
                                        <div className="flex flex-col items-center p-4 bg-card rounded-lg border border-purple-500/20">
                                            <GitFork className="h-6 w-6 text-purple-500 mb-2" />
                                            <span className="text-2xl font-bold">{githubStats.forks}</span>
                                            <span className="text-sm text-muted-foreground">Forks</span>
                                        </div>
                                        <div className="flex flex-col items-center p-4 bg-card rounded-lg border border-purple-500/20">
                                            <Github className="h-6 w-6 text-purple-500 mb-2" />
                                            <span className="text-2xl font-bold">{githubStats.contributions}</span>
                                            <span className="text-sm text-muted-foreground">Contributions</span>
                                        </div>
                                    </div>

                                    <div className="h-64">
                                        <div className="flex justify-between mb-2">
                                            <span className="text-sm font-medium">Contribution Activity</span>
                                            <span className="text-sm text-muted-foreground">
                        {contributionData.reduce((a, b) => a + b, 0)} contributions in the last year
                      </span>
                                        </div>
                                        <div className="relative h-48">
                                            <div className="absolute inset-0 flex items-end justify-between">
                                                {contributionData.map((value, index) => (
                                                    <div
                                                        key={index}
                                                        className="w-full mx-0.5 bg-purple-500 rounded-t-sm"
                                                        style={{
                                                            height: `${(value / Math.max(...contributionData)) * 100}%`,
                                                            opacity: 0.5 + (value / Math.max(...contributionData)) * 0.5,
                                                        }}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                        <div className="flex justify-between mt-2">
                                            {contributionMonths.map((month) => (
                                                <span key={month} className="text-xs text-muted-foreground">
                          {month}
                        </span>
                                            ))}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </motion.div>

                <motion.div variants={itemVariants} className="flex justify-center">
                    <a
                        href="https://github.com/pyro18"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-purple-500 hover:text-purple-600 transition-colors"
                    >
                        <Github size={20} />
                        <span className="font-medium">View my full GitHub profile</span>
                    </a>
                </motion.div>
            </motion.div>
        </section>
    )
}

