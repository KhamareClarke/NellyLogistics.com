# Nelly's Logistics - Premium Courier & Logistics Website

A world-class, enterprise-grade logistics website built with Next.js 14, featuring modern design, real-time reviews, and comprehensive courier services for Birmingham and the UK.

## 🚀 Features

- **Modern Premium Design**: Glass morphism, gradients, and micro-interactions
- **100% Mobile Responsive**: Optimized for all devices and screen sizes
- **Real-time Reviews System**: Powered by Supabase with carousel display
- **SEO Optimized**: Local SEO for Birmingham logistics and courier services
- **Contact Forms**: Integrated contact and quote request functionality
- **Performance Optimized**: Fast loading with optimized images and animations
- **Accessibility Ready**: WCAG compliant with proper semantic HTML
- **Review System**: Integrated on-site reviews + Google Reviews link
- **SEO Optimized**: Schema.org markup, meta tags, and semantic HTML
- **Performance**: Built with Next.js 13 for optimal speed and SEO
- **Modern UI**: Clean, professional design using Tailwind CSS and shadcn/ui

## Tech Stack

- **Framework**: Next.js 13 (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Database**: Supabase (PostgreSQL)
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- Supabase account (database already configured)

### Installation

1. Clone the repository or download the files

2. Install dependencies:
```bash
npm install
```

3. Set up your environment variables in `.env`:
```env
NEXT_PUBLIC_SITE_NAME="Nelly's Logistics"
NEXT_PUBLIC_PRIMARY_PHONE="+44XXXXXXXXXX"
NEXT_PUBLIC_GOOGLE_REVIEW_URL="https://g.page/r/your-google-review-link"

NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Set up the Supabase database:
   - Open your Supabase project dashboard
   - Go to the SQL Editor
   - Run the SQL from `supabase-schema.sql`

5. Update contact details:
   - Replace `+44XXXXXXXXXX` with your actual phone number throughout the site
   - Update `info@nellyslogistics.com` with your real email
   - Add your Google Review link URL

6. Run the development server:
```bash
npm run dev
```

7. Open [http://localhost:3000](http://localhost:3000) in your browser

## Configuration

### Phone Number
Update the phone number in:
- `.env` file: `NEXT_PUBLIC_PRIMARY_PHONE`
- All page files (search for `+44XXXXXXXXXX`)

### Google Reviews Link
1. Get your Google Business review link
2. Update `.env` file: `NEXT_PUBLIC_GOOGLE_REVIEW_URL`

### Company Details
Update in `components/Footer.tsx`:
- Company number
- Social media links
- Email address

## Pages

- `/` - Home page with hero, services overview, and trust signals
- `/services` - Detailed service information
- `/about` - Company information and values
- `/contact` - Quote request form and contact details
- `/reviews` - Customer reviews and review submission form
- `/legal/privacy` - Privacy policy
- `/legal/terms` - Terms of service

## Review Management

Reviews are stored in Supabase and start as unpublished. To moderate reviews:

1. Log into your Supabase dashboard
2. Go to Table Editor > reviews
3. Set `published` to `true` for approved reviews

For a more advanced admin interface, you can build a simple admin page using Supabase Auth.

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables in Vercel project settings
4. Deploy!

Vercel will automatically:
- Build and optimize your site
- Set up SSL
- Configure CDN
- Enable automatic deployments

## SEO

The site includes:
- Schema.org LocalBusiness markup on the homepage
- Service markup on the services page
- OpenGraph meta tags
- Semantic HTML structure
- Optimized meta descriptions

To add:
- Generate and add a sitemap using `next-sitemap`
- Add `robots.txt`
- Create an OpenGraph image (og-image.jpg)

## Customization

### Colors
The site uses an amber/gold color scheme. To change:
- Update Tailwind classes from `amber-` to your preferred color
- Modify `tailwind.config.ts` for custom colors

### Content
All content is in the page files. Simply edit the text to match your business needs.

### Logo
Replace the logo placeholder in `components/Header.tsx` and `components/Footer.tsx` with your actual logo image.

## Support

For questions or issues:
- Check Next.js docs: https://nextjs.org/docs
- Check Supabase docs: https://supabase.com/docs
- Check Tailwind docs: https://tailwindcss.com/docs

## License

This project is private and proprietary to Nelly's Logistics.
