import { appUrl } from "@/lib/config";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, CheckCircle2 } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="py-20 relative overflow-hidden bg-background">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative">
        <div className="rounded-2xl border border-border bg-card p-8 sm:p-14 text-center shadow-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3.5 py-1 text-xs font-medium text-foreground">
            <Zap className="h-3.5 w-3.5 fill-current" />
            <span>Join High-Velocity Closers</span>
          </div>

          <h2 className="mt-6 text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight">
            Stop Losing Deals to Slow Response Times
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground leading-relaxed">
            Get your leads delivered to your phone in seconds. Trigger personalized WhatsApp messages in one tap
            and start converting more high-intent prospects today.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto h-11 px-8 bg-foreground text-background hover:bg-foreground/90 font-semibold text-sm shadow-sm"
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
              className="w-full sm:w-auto h-11 px-8 border-border bg-card hover:bg-accent text-foreground text-sm"
            >
              <Link href={appUrl("/login")}>Sign In</Link>
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-foreground" /> 50 Free Leads Forever
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
    </section>
  );
}

