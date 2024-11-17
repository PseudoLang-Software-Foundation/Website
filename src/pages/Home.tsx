import { Button } from "@/components/ui/button";
import {Terminal, Zap, GitBranch} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white w-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center">
        <a className="flex items-center justify-center" href="#">
          <img src="./pl_logo.png" alt="PseudoLang" className="w-8 h-8" />
          <span className="ml-3 text-xl font-bold text-black">PseudoLang</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="https://docs.pseudo-lang.org"
          >
            Documentation
          </a>
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="https://github.com/PseudoLang-Software-Foundation/Pseudolang"
          >
            GitHub
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container mx-auto px-0 px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Write Code That Makes Sense
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  PseudoLang is a modern programming language designed for
                  clarity and simplicity.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-[#E066FF] hover:bg-[#D15FEE]">
                  <a
                    href="https://github.com/PseudoLang-Software-Foundation/Pseudolang"
                    className="text-white"
                  >
                    Get Started
                  </a>
                </Button>
                <Button variant="outline">
                  <a href="https://docs.pseudo-lang.org">Learn More</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container mx-auto px-0 px-4 md:px-6">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="p-3 rounded-full bg-[#E066FF]/10">
                  <Terminal className="w-6 h-6 text-[#E066FF]" />
                </div>
                <h2 className="text-xl font-bold">Intuitive Syntax</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Write code that reads like natural language while maintaining
                  professional-grade performance.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="p-3 rounded-full bg-[#E066FF]/10">
                  <Zap className="w-6 h-6 text-[#E066FF]" />
                </div>
                <h2 className="text-xl font-bold">Lightning Fast</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Built with performance in mind, PseudoLang compiles to highly
                  optimized machine code.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="p-3 rounded-full bg-[#E066FF]/10">
                  <GitBranch className="w-6 h-6 text-[#E066FF]" />
                </div>
                <h2 className="text-xl font-bold">Modern Tooling</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Coming Soon. All the features of a modern language now with
                  modern syntax.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-0 px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Start Building with PseudoLang
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Get up and running in minutes with our comprehensive
                  documentation and tutorials.
                </p>
                <div className="space-x-4">
                  <Button className="bg-[#E066FF] hover:bg-[#D15FEE]">
                    <a
                      className="text-white"
                      href="https://docs.pseudo-lang.org"
                    >
                      Documentation
                    </a>
                  </Button>
                </div>
              </div>
              <div className="rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
                <pre className="text-sm text-gray-800 dark:text-gray-200 text-left">
                  <code>{`PROCEDURE displayInput()
{
    DISPLAY("Enter a String to print out")\n    text <- INPUT()\n    DISPLAY(text)
}\ndisplayInput()`}</code>
                </pre>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#E066FF]">
          <div className="container mx-auto px-0 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Ready to Get Started?
                </h2>
                <p className="mx-auto max-w-[600px] text-white/80">
                  Start using PseudoLang today!
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-white text-[#E066FF] hover:bg-gray-100">
                  <a
                    className=""
                    href="https://nightly.link/PseudoLang-Software-Foundation/Pseudolang/workflows/build/main"
                  >
                    Download Now
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
                  <a className="" href="https://docs.pseudo-lang.org">
                    View Documentation
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">
          © 2024 PseudoLang. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a
            className="text-xs hover:underline underline-offset-4"
            href="https://legal.pseudo-lang.org/tos"
          >
            Terms of Service
          </a>
          <a
            className="text-xs hover:underline underline-offset-4"
            href="https://legal.pseudo-lang.org/privacy"
          >
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  );
}
