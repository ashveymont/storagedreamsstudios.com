# Rich Rosales Website

Premium multi-page talent brand website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Install

```bash
npm install
```

## Run Locally

```bash
npm run dev
```

## Update Website Copy

All editable copy is centralized in:

`/lib/constants.ts`

Update only that file when replacing placeholders with final copy from the client document.

## Environment Variables

Optional runtime variables:

- `NEXT_PUBLIC_MEDIA_KIT_URL` - media kit button destination on `/brands`
- `NEXT_PUBLIC_SITE_URL` - canonical public site URL used for metadata
- `NEXT_PUBLIC_OG_IMAGE_URL` - absolute URL for social preview image

Example local setup:

```bash
cp .env.example .env.local
```

## Deploy to Vercel

```bash
vercel deploy
```
