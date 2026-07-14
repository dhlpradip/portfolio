"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { AiFillPhone } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { MdEmail } from "react-icons/md";
import { siteData } from "@/lib/data";
import { postContact } from "@/lib/contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Reveal } from "@/components/site/reveal";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await postContact({
        email: formData.get("email") as string,
        subject: formData.get("subject") as string,
        message: formData.get("message") as string,
        website: formData.get("website") as string,
      });
      setSent(true);
      toast.success("Thank you", {
        description: "I have received your message",
      });
      form.reset();
      setTimeout(() => router.push("/"), 1500);
    } catch {
      toast.error("Something went wrong", {
        description: "Please try again later",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-12">
      <Reveal>
        <div>
          <h1 className="font-display text-4xl font-medium md:text-5xl">
            {siteData.contactHeading}
          </h1>
          <p className="mt-3 max-w-lg font-body text-muted-foreground">
            {siteData.contactSubheading}
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <Reveal>
          <div className="space-y-3">
            <a
              href={`mailto:${siteData.email}`}
              className="flex items-center gap-4 px-4 py-4 ring-1 ring-border transition-colors hover:bg-secondary/50 hover:ring-primary/30"
            >
              <MdEmail className="h-4 w-4 text-primary" />
              <span className="font-body text-sm">{siteData.email}</span>
            </a>
            <a
              href={`tel:${siteData.phoneTel}`}
              className="flex items-center gap-4 px-4 py-4 ring-1 ring-border transition-colors hover:bg-secondary/50 hover:ring-primary/30"
            >
              <AiFillPhone className="h-4 w-4 text-primary" />
              <span className="font-body text-sm">{siteData.phone}</span>
            </a>
            <div className="flex items-center gap-4 px-4 py-4 ring-1 ring-border">
              <GoLocation className="h-4 w-4 text-primary" />
              <span className="font-body text-sm">{siteData.address}</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
              <label htmlFor="website">Leave this field empty</label>
              <input
                type="text"
                id="website"
                name="website"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block font-body text-sm text-muted-foreground"
              >
                Your email
              </label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="name@email.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="mb-2 block font-body text-sm text-muted-foreground"
              >
                Subject
              </label>
              <Input
                type="text"
                id="subject"
                name="subject"
                placeholder="Let me know how I can help you"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-2 block font-body text-sm text-muted-foreground"
              >
                Your message
              </label>
              <Textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Leave a comment..."
                required
              />
            </div>
            <Button type="submit" disabled={loading || sent} className="w-full sm:w-auto">
              {sent ? "Message sent" : loading ? "Sending..." : "Send message"}
            </Button>
          </form>
        </Reveal>
      </div>
    </div>
  );
}
