export const BOOKING_URL = 'https://calendly.com/revextract/discover';

/** Prefix a root-relative asset path with the configured base (needed when served from a subpath). */
export const asset = (path: string) => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
