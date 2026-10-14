import ImageTabs from "@/components/imageTabs";
import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, CheckCircle2, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex-1">
        {/* Hero section */}
        <section className="container mx-auto px-4 py-32">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-black mb-6 text-6xl font-bold">
              A better way to track you job application.
            </h1>
            <p className="text-muted-foreground mb-10 text-xl">
              Capture, organize, and manage your job search in one place.
            </p>
            <div className="flex flex-col items-center gap-4">
              <Link href={"/sign-up"}>
                <Button className="h-12 px-8 text-lg font-medium" size="lg">
                  Start for free <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <p className="text-sm text-muted-foreground">
                Free forever. No Credit card required
              </p>
            </div>
          </div>
        </section>

        {/* Hero Image section with tabs*/}
        <ImageTabs />

        {/* Feature Section */}

        <section className="border-t bg-white py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 md:grid-cols-3">
              <div className="flex flex-col">
                <div className="md-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <h1 className="mb-3 text-2xl font-semibold text-black ">
                  Organize Application
                </h1>
                <p className="text-muted-foreground">
                  Create custom boards and column to track your job application
                  at every stage of the process.
                </p>
              </div>
              <div className="flex flex-col">
                <div className="md-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h1 className="mb-3 text-2xl font-semibold text-black">
                  Track Process
                </h1>
                <p className="text-muted-foreground">
                  Monitor your application status from applied to interview to
                  offer with visual kanban boards.
                </p>
              </div>
              <div className="flex flex-col">
                <div className="md-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <h1 className="mb-3 text-2xl font-semibold text-black">
                  Stay Organized
                </h1>
                <p className="text-muted-foreground">
                  Never lose track of an application. Keep all your search
                  information in one centralized place.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
