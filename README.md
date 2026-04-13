# Ishwaryam Physiotherapy Clinic — Production Website

This is the production-grade website for Ishwaryam Physiotherapy Speciality Clinic & Rehabilitation Center.

## Tech Stack
- **Framework**: Next.js 14/16 (App Router)
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Email**: Resend API
- **Forms**: React Hook Form + Zod

## Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Environment Variables**:
   Create a `.env.local` file and add your keys:
   ```env
   RESEND_API_KEY=re_your_api_key
   FROM_EMAIL=contact@ishwaryamphysio.com
   TO_EMAIL=ishwaryamphysio@gmail.com
   ```

3. **Run Development Server**:
   ```bash
   npm run dev
   ```

4. **Build for Production**:
   ```bash
   npm run build
   ```

## Key Configuration Locations
- **Clinic Data**: `src/lib/clinic-data.ts` (Edit hours, phone, addresses here)
- **Services**: `src/components/sections/ServicesSection.tsx`
- **Testimonials**: `src/lib/clinic-data.ts` (Update Google reviews here)

## Deployment (Vercel)
1. Push this repository to GitHub.
2. Link the repository to your Vercel account.
3. Add the `RESEND_API_KEY`, `FROM_EMAIL`, and `TO_EMAIL` variables in the Vercel Dashboard.
4. Deploy!

## Image Placeholders
- **Hero Image**: `src/components/sections/HeroSection.tsx`
- **Doctor Image**: `src/components/sections/AboutSection.tsx`
Please replace these Unsplash links with actual clinic photos for final delivery.
