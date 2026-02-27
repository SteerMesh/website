# SteerMesh Marketing Site

Production-ready Next.js marketing site for SteerMesh, deployed to Firebase Hosting with a minimal waitlist backend.

## Stack
- Next.js (App Router) + TypeScript + TailwindCSS
- Firebase Hosting (static export)
- Firebase Functions + Firestore for waitlist

## Node Version
This repo uses Node 22. If you use `nvm`, run:

```bash
nvm use
```

## Local Development
1. Install dependencies:

```bash
npm install
npm install --prefix functions
```

2. Run the site:

```bash
npm run dev
```

3. (Optional) Run emulators for waitlist API:

```bash
npm run emulators
```

If you use emulators, set the environment variable:

```bash
NEXT_PUBLIC_WAITLIST_ENDPOINT=http://localhost:5001/<PROJECT_ID>/us-central1/waitlist
```

## Build

```bash
npm run build
npm run build --prefix functions
```

This produces a static export in `out/` (see `next.config.ts`).

## Firebase Setup
1. Create a Firebase project.
2. Update `.firebaserc` with your Firebase project ID.
3. Ensure Firestore is enabled.
4. Deploy:

```bash
npm install -g firebase-tools
firebase login
firebase deploy --only hosting,functions
```

### Waitlist API
- Endpoint: `POST /api/waitlist`
- Payload:
  - `email` (required)
  - `company` (optional)
  - `role` (optional)
  - `website` (honeypot, should be empty)

Rate limiting is enforced per IP (3 requests / 15 min), and a honeypot field helps filter bots.

### Email Confirmation
The function includes a stub for email confirmation. To enable:
- Set `SENDGRID_API_KEY` and `SENDGRID_FROM` on the Functions runtime.
- Replace the TODO in `functions/src/index.ts` with your provider integration.

### Environment Variables
Frontend:
- `NEXT_PUBLIC_WAITLIST_ENDPOINT` (optional; defaults to `/api/waitlist`)
- `NEXT_PUBLIC_GA_ID` (optional; Google Analytics)

Functions:
- `SENDGRID_API_KEY` (optional)
- `SENDGRID_FROM` (optional)
- `RATE_LIMIT_SALT` (optional)

## GitHub Actions Deployment
The workflow in `.github/workflows/firebase-deploy.yml` deploys on pushes to `main`.

Required GitHub secrets:
- `FIREBASE_PROJECT_ID`
- `FIREBASE_SERVICE_ACCOUNT` (full JSON service account key)

## Firebase Hosting
Configured in `firebase.json`:
- Serves from `out/`
- Rewrites `/api/waitlist` to the `waitlist` function

## License
All rights reserved.
