# Quick Start Guide - Nelly's Logistics

## 🚀 5-Minute Setup

### 1. Update Contact Information (2 minutes)
```bash
# Find and replace throughout the project:
Find: +44XXXXXXXXXX
Replace: YOUR_ACTUAL_PHONE_NUMBER

Find: info@nellyslogistics.com
Replace: YOUR_ACTUAL_EMAIL (if different)

Find: Company No: XXXXXXXX
Replace: YOUR_COMPANY_REGISTRATION_NUMBER
```

**Files to check:**
- All page files in `/app`
- `components/Header.tsx`
- `components/Footer.tsx`
- Schema.org markup in pages

### 2. Set Environment Variables (1 minute)
Edit `.env`:
```env
NEXT_PUBLIC_PRIMARY_PHONE="+44XXXXXXXXXX"  ← YOUR PHONE
NEXT_PUBLIC_GOOGLE_REVIEW_URL="https://g.page/r/..."  ← YOUR GOOGLE REVIEW LINK
```

### 3. Set Up Database (2 minutes)
1. Open Supabase dashboard
2. Go to SQL Editor
3. Copy contents of `supabase-schema.sql`
4. Paste and click "Run"
5. ✅ Done! Reviews table is ready

## 🎨 What's Included

### Sky Blue Theme
- Professional sky blue color scheme throughout
- Gradient buttons and hover effects
- Modern dark hero sections
- Smooth animations on all pages

### Complete Pages
- ✅ Home (hero, services, reviews, CTAs)
- ✅ Services (8 detailed service descriptions)
- ✅ About (company info, values, stats)
- ✅ Contact (quote form with validation)
- ✅ Reviews (submission form + display)
- ✅ Privacy Policy
- ✅ Terms of Service

### SEO Optimized
- Unique meta titles and descriptions
- Open Graph tags for social sharing
- Schema.org LocalBusiness markup
- Sitemap.xml and robots.txt
- Location-based keywords (Birmingham)

## 🔗 All Links Working

**Navigation Links:**
- Home, Services, About, Reviews, Contact ✅
- Privacy Policy, Terms of Service ✅
- All internal page links functional ✅
- Phone and email links ready ✅

## 📦 Deployment to Vercel

```bash
# 1. Push to GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_REPO_URL
git push -u origin main

# 2. Go to Vercel.com
# 3. Import your repository
# 4. Add environment variables:
#    - NEXT_PUBLIC_PRIMARY_PHONE
#    - NEXT_PUBLIC_GOOGLE_REVIEW_URL
#    - NEXT_PUBLIC_SUPABASE_URL
#    - NEXT_PUBLIC_SUPABASE_ANON_KEY

# 5. Click Deploy!
```

Your site will be live in 2-3 minutes! 🎉

## 🎯 What to Do After Launch

### Day 1
- [ ] Test contact form (send yourself a test quote)
- [ ] Test review submission
- [ ] Verify all links work on mobile
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Business Profile
- [ ] Get Google Review link and update .env

### Week 1
- [ ] Set up Google Analytics
- [ ] Add conversion tracking
- [ ] List on UK business directories
- [ ] Start collecting customer reviews
- [ ] Add actual company photos

### Ongoing
- [ ] Approve reviews in Supabase
- [ ] Monitor Google Search Console
- [ ] Update service pages as needed
- [ ] Collect testimonials
- [ ] Build local citations

## 🆘 Common Issues & Fixes

**Reviews not showing?**
- Go to Supabase → Table Editor → reviews
- Set `published` to `true` for reviews you want visible

**Forms not working?**
- Check Supabase connection in `.env`
- Verify API routes deployed
- Check browser console for errors

**Phone links not clickable?**
- Make sure you replaced `+44XXXXXXXXXX` with real number
- No spaces in phone number string

**Build errors?**
```bash
npm run build
# Check for TypeScript errors
# All should compile successfully
```

## 📞 Need Help?

Check these files:
- `README.md` - Full technical documentation
- `SETUP-GUIDE.md` - Detailed setup instructions
- `DEPLOYMENT-CHECKLIST.md` - Pre-launch checklist
- `SEO-CHECKLIST.md` - SEO optimization guide
- `FINAL-SUMMARY.md` - Complete feature list

## ✅ Pre-Launch Checklist

Quick verification before going live:

- [ ] Phone number updated everywhere
- [ ] Email address confirmed
- [ ] Company number in footer
- [ ] Supabase database created
- [ ] Environment variables set
- [ ] Test contact form
- [ ] Test review form
- [ ] All navigation links work
- [ ] Mobile responsive check
- [ ] Create og-image.jpg
- [ ] Google verification code added

**When all checked** → Ready for deployment! 🚀

---

**Estimated Setup Time:** 10-15 minutes
**Deployment Time:** 5 minutes
**Total Time to Live:** Under 30 minutes!
