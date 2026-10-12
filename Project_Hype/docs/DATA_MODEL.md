# Data model

Creator fields include `creator_id`, `creator_name`, `primary_platform`, `instagram_url`, `youtube_url`, `other_profile_urls`, `primary_niche`, `secondary_niches`, `content_language`, `state`, `city`, `followers_or_subscribers`, `engagement_rate`, `metric_source_url`, `metric_observed_date`, `creator_source_url`, `location_evidence_url`, `language_evidence_url`, `verification_status`, `data_confidence`, and `research_notes`.

## Discovery eligibility

`Verified` is a human review state, not a self-reported claim. The frontend only includes a record in discovery when the status is `Verified`, a public profile URL and creator source URL exist, both location and language evidence URLs exist, the state is Telangana or Andhra Pradesh, and language is Telugu, English or Hindi. A source-linked candidate remains excluded until all checks pass.

## State storage

`data/creators.json` stores candidate records. `data/runtime-state.json` stores the saved creator IDs, campaign briefs, campaign tracker entries, message drafts and review status overrides. The Node API exposes `/api/data`, `/api/state` and `/api/candidates`. This is a single-workspace demo store, not a multi-tenant production database.
