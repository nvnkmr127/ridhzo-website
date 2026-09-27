import { appUrl } from "@/lib/config";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, CheckCircle2 } from "lucide-react";
import { CornerTicks } from "@/components/marketing/decor";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Ambient glow behind the panel */}
          <div
            className="glow-blob left-1/2 top-1/2 h-[30rem] w-[46rem] -translate-x-1/2 -translate-y-1/2 bg-white/5"
            aria-hidden="true"
          />
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-6 sm:p-14 text-center shadow-card">
            <CornerTicks />
            {/* Dot-grid wash rising from the panel floor */}
            <div
              className="bg-dots-faint pointer-events-none absolute inset-x-0 bottom-0 h-40 [mask-image:linear-gradient(to_top,black,transparent)]"
              aria-hidden="true"
            />
            <div className="relative">
            <span className="section-label">
              <Zap className="h-3.5 w-3.5 fill-current" />
              Join High-Velocity Closers
            </span>

            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
              Stop Losing Deals to <span className="text-gradient">Slow Response Times</span>
            </h2>

            <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground leading-relaxed">
              Get your leads delivered to your phone in seconds. Trigger personalized WhatsApp messages in one tap
              and start converting more high-intent prospects today.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto h-11 rounded-full px-8 font-semibold text-sm shadow-glow"
              >
                <Link href={appUrl("/signup")} className="flex items-center justify-center gap-2">
                  <span>Start Free Trial</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full sm:w-auto h-11 rounded-full px-8 border-border bg-card hover:bg-accent text-foreground text-sm"
              >
                <Link href={appUrl("/login")}>Sign In</Link>
              </Button>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-6 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-foreground" /> 100 Free Leads Forever
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-foreground" /> No Credit Card Required
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-foreground" /> Setup in 60 Seconds
              </span>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
