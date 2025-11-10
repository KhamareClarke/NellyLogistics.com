# Nelly's Logistics - Setup Guide

## Quick Start Checklist

Follow these steps to get your website live:

### 1. Database Setup (5 minutes)

1. Open your Supabase dashboard: https://supabase.com/dashboard
2. Navigate to your project
3. Click on "SQL Editor" in the left sidebar
4. Copy the entire contents of `supabase-schema.sql`
5. Paste into the SQL Editor
6. Click "Run" to create the reviews table

The database is now ready! Reviews will be stored here.

### 2. Environment Variables (2 minutes)

The `.env` file is already configured with your Supabase credentials. Update these values:

```env
NEXT_PUBLIC_PRIMARY_PHONE="+44XXXXXXXXXX"  # Replace with your actual phone
NEXT_PUBLIC_GOOGLE_REVIEW_URL="https://g.page/r/..."  # Add your Google review link
```

To get your Google Review link:
1. Go to Google Business Profile
2. Click "Get more reviews"
3. Copy the short URL (looks like: https://g.page/r/XXX)

### 3. Update Contact Information (10 minutes)

Search and replace these placeholders throughout the codebase:

**Phone Number:**
- Search for: `+44XXXXXXXXXX`
- Replace with your actual phone number
- Files affected: Header, Footer, all page files

**Email Address:**
- Search for: `info@nellyslogistics.com`
- Replace with your actual email
- Files affected: Footer, contact pages

**Company Number:**
- Edit `components/Footer.tsx`
- Find: `Company No: XXXXXXXX`
- Replace with your actual company registration number

### 4. Customize Branding (Optional, 10 minutes)

**Add Your Logo:**
1. Replace the "N" placeholder in `components/Header.tsx`
2. Replace the "N" placeholder in `components/Footer.tsx`
3. Use an image file or SVG for your actual logo

**Adjust Colors (if needed):**
- The site uses amber/gold (`amber-600`, `amber-700`)
- To change: Search/replace `amber-` with your preferred Tailwind color
- Example: `blue-`, `green-`, `red-`, etc.

### 5. Deploy to Vercel (10 minutes)

1. Create a GitHub account if you don't have one
2. Create a new repository and push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

3. Go to https://vercel.com and sign up/login
4. Click "New Project"
5. Import your GitHub repository
6. Add environment variables:
   - `NEXT_PUBLIC_SITE_NAME`
   - `NEXT_PUBLIC_PRIMARY_PHONE`
   - `NEXT_PUBLIC_GOOGLE_REVIEW_URL`
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`

7. Click "Deploy"

Your site will be live in 2-3 minutes!

### 6. Custom Domain (Optional, 15 minutes)

1. In Vercel project settings, go to "Domains"
2. Add your domain (e.g., nellyslogistics.com)
3. Follow the DNS configuration instructions
4. Wait for DNS propagation (can take up to 24 hours)

### 7. Managing Reviews

**To approve reviews:**
1. Log into Supabase dashboard
2. Go to "Table Editor" > "reviews"
3. Find the review you want to publish
4. Change `published` from `false` to `true`
5. Click "Save"

The review will now appear on your website!

**To delete spam reviews:**
1. In Table Editor, click the trash icon next to the review

## Testing Your Site

Before going live, test these features:

- [ ] All pages load correctly
- [ ] Contact form submits successfully
- [ ] Review form submits successfully
- [ ] Phone numbers are clickable and correct
- [ ] Email links work
- [ ] Mobile menu works on phone
- [ ] All internal links work
- [ ] Google Review button opens your review page

## Need Help?

Common issues and solutions:

**Reviews not showing?**
- Make sure `published` is set to `true` in Supabase
- Check browser console for errors

**Contact form not working?**
- Verify Supabase credentials in `.env`
- Check API route is deployed

**Images not loading?**
- Replace placeholder images with actual files
- Use Next/Image component for optimization

## Next Steps

After launch:
1. Set up Google Analytics (add to layout.tsx)
2. Create and submit sitemap to Google Search Console
3. Monitor reviews and approve legitimate ones
4. Gather customer testimonials
5. Add more detailed service pages as needed

## Support Resources

- Next.js Documentation: https://nextjs.org/docs
- Supabase Documentation: https://supabase.com/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Vercel Deployment: https://vercel.com/docs

---

**Estimated Total Setup Time: 45-60 minutes**

Your professional courier website will be live and ready to accept bookings!
