import type { RecognitionItem } from "@/lib/types";

/**
 * News & Highlights (formerly "Recognition") — DEFERRED from the initial launch.
 * ------------------------------------------------------------------------------
 * This page is a PLANNED POST-LAUNCH enhancement (see PROJECT_STATUS.md). Its nav
 * link and route are intentionally NOT in the launch site. This file is the
 * structured content home so the page can be built later without re-deriving the
 * plan — the `RecognitionItem` schema and the category structure are preserved
 * here.
 *
 * STATUS: no verified items yet. The Recognition page was deferred during the
 * overnight build and its content was never extracted into the repo. The source
 * content lives on the live site (https://sarinlab.stanford.edu/ — "As Seen In" /
 * press stories and Awards & Honors for Jeffrey Sagun and Kavita Sarin) and is
 * noted in content-audit.md as "Reuse + Verify". Populate the arrays below ONLY
 * with items verified against the original outlet/awarding body — do NOT invent
 * titles, dates, outlets, or links.
 *
 * When building the page, add its route + nav entry back and generate/refresh
 * any sitemap to include it.
 */

/** Planned display name for the deferred page. */
export const NEWS_HIGHLIGHTS_TITLE = "News & Highlights";

/**
 * Awards, honors, and grants. TODO: VERIFY — extract from the live site's
 * Awards & Honors section (Jeffrey Sagun, Kavita Sarin) and confirm each
 * title / awarding organization / year against the official source.
 */
export const AWARDS_AND_HONORS: RecognitionItem[] = [];

/**
 * Press & media ("As Seen In" + the ~8 stories on the live site).
 * TODO: VERIFY — confirm each outlet, publication date, and link before use.
 */
export const PRESS_AND_MEDIA: RecognitionItem[] = [];

/** Convenience: everything, for a future combined view. */
export const RECOGNITION: RecognitionItem[] = [...AWARDS_AND_HONORS, ...PRESS_AND_MEDIA];
