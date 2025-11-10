# Pre-Deployment Checklist for Nelly's Logistics

## Critical Updates Required Before Launch

### 1. Contact Information
- [ ] Replace `+44XXXXXXXXXX` with real phone number in ALL files
- [ ] Replace `info@nellyslogistics.com` with real email
- [ ] Update company registration number in Footer.tsx
- [ ] Add real business address details

### 2. Environment Variables (.env)
- [ ] Set `NEXT_PUBLIC_PRIMARY_PHONE` to your phone number
- [ ] Set `NEXT_PUBLIC_GOOGLE_REVIEW_URL` to your Google review link
- [ ] Verify Supabase URL and key are correct

### 3. Database Setup
- [ ] Run `supabase-schema.sql` in Supabase SQL Editor
- [ ] Verify `reviews` table is created
- [ ] Test adding a review manually
- [ ] Test setting `published` to true

### 4. Branding
- [ ] Replace logo placeholder with actual logo image
- [ ] Update favicon (create favicon.ico and place in /app)
- [ ] Create og-image.jpg (1200x630px) for social sharing
- [ ] Verify brand colors match your guidelines

### 5. Content Review
- [ ] Review all page copy for accuracy
- [ ] Check service descriptions match your offerings
- [ ] Verify coverage areas are correct
- [ ] Update insurance amounts if different
- [ ] Review about page company history

### 6. Legal Pages
- [ ] Customize Privacy Policy with specific details
- [ ] Customize Terms of Service with actual terms
- [ ] Add cookie policy if using analytics
- [ ] Verify company registration details

### 7. Testing
- [ ] Test contact form submission
- [ ] Test review form submission
- [ ] Test all phone number links (tap on mobile)
- [ ] Test all email links
- [ ] Test navigation on mobile
- [ ] Test on iPhone Safari
- [ ] Test on Android Chrome
- [ ] Test on desktop Chrome, Firefox, Safari
- [ ] Check all pages load without errors

### 8. SEO Setup
- [ ] Update metadataBase URL in layout.tsx
- [ ] Create and upload og-image.jpg
- [ ] Verify all page titles are correct
- [ ] Verify all meta descriptions are unique
- [ ] Test with Google's Rich Results Test
- [ ] Submit sitemap to Google Search Console

### 9. Performance
- [ ] Run Lighthouse audit (aim for 90+ on all metrics)
- [ ] Optimize any images over 100KB
- [ ] Test page load speed
- [ ] Verify mobile performance

### 10. Vercel Deployment
- [ ] Create Vercel account
- [ ] Connect GitHub repository
- [ ] Add all environment variables
- [ ] Deploy to production
- [ ] Verify deployment successful
- [ ] Test live site thoroughly

### 11. Domain Setup
- [ ] Add custom domain in Vercel
- [ ] Configure DNS records
- [ ] Wait for SSL certificate
- [ ] Test HTTPS works
- [ ] Set up www redirect

### 12. Post-Launch
- [ ] Set up Google Analytics (optional)
- [ ] Submit to Google Search Console
- [ ] Submit sitemap
- [ ] Set up email notifications for forms
- [ ] Monitor error logs in Vercel
- [ ] Create backup of database
- [ ] Document login credentials securely

## Optional Enhancements

### Marketing
- [ ] Set up Google Ads conversion tracking
- [ ] Add Facebook Pixel
- [ ] Set up LinkedIn Insight Tag
- [ ] Create social media share images

### Features
- [ ] Add live chat widget
- [ ] Add instant quote calculator
- [ ] Add vehicle tracking map
- [ ] Add customer portal

### Integrations
- [ ] Set up email service (Resend, SendGrid)
- [ ] Configure contact form to send emails
- [ ] Add SMS notifications
- [ ] Integrate with booking system

## Emergency Contacts

Document these for reference:
- Vercel Account: _______________
- Supabase Account: _______________
- Domain Registrar: _______________
- GitHub Repository: _______________

## Launch Timeline

1. **Week 1**: Complete Critical Updates (items 1-4)
2. **Week 2**: Content & Testing (items 5-9)
3. **Week 3**: Deploy & Monitor (items 10-12)

## Sign-Off

- [ ] Technical review complete
- [ ] Content review complete
- [ ] Legal review complete
- [ ] Final approval from stakeholders
- [ ] Ready for launch!

---

**Remember**: You can launch with basic setup and add enhancements later. The critical items ensure the site works correctly and represents your business professionally.
