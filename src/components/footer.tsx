import Link from "next/link"
import { Github, Twitter, Instagram, Coffee } from "lucide-react"

export function Footer() {
    return (
        <footer className="border-t border-border/40 py-6 md:py-0">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:h-16">
                    <div className="flex items-center gap-2">
                        <Link
                            href="/"
                            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                        >
                            © {new Date().getFullYear()} Marius Noroaca
                        </Link>
                    </div>
                    <div className="flex items-center gap-4">
                        <a
                            href="https://github.com/pyro18"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                            <Github className="h-5 w-5" />
                            <span className="sr-only">GitHub</span>
                        </a>
                        <a
                            href="https://twitter.com/MNoroaca"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                            <Twitter className="h-5 w-5" />
                            <span className="sr-only">Twitter</span>
                        </a>
                        <a
                            href="https://instagram.com/marius__noroaca"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                            <Instagram className="h-5 w-5" />
                            <span className="sr-only">Instagram</span>
                        </a>
                        <a
                            href="https://buymeacoffee.com/pyro18"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                            <Coffee className="h-5 w-5" />
                            <span className="sr-only">Buy Me a Coffee</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

