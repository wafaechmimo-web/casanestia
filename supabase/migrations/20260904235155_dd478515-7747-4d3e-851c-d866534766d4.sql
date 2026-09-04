ALTER TABLE public.estimate_requests
  ADD COLUMN IF NOT EXISTS bedrooms text,
  ADD COLUMN IF NOT EXISTS consent_legal boolean NOT NULL DEFAULT false,
  ADD COLUMN IF NOT EXISTS consent_marketing boolean NOT NULL DEFAULT false;