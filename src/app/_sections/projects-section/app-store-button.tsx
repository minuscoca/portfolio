"use client";

import { Button } from "@/components/ui/button";

export function AppStoreButton({ href }: { href?: string }) {
  if (!href) return null;
  return (
    <Button variant="link" onClick={() => window.open(href, "_blank")}>
      前往 App Store
    </Button>
  );
}
