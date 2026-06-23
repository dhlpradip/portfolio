import { features } from "@/lib/features";
import { writingsCopy } from "@/lib/writings";

export function WritingsPreviewBanner() {
  if (features.writingsPublic) {
    return null;
  }

  return (
    <div
      className="mb-10 border border-primary/30 bg-primary/5 px-4 py-3 font-mono text-xs text-muted-foreground"
      role="status"
    >
      {writingsCopy.previewBanner}
    </div>
  );
}
