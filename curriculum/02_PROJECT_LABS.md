# Project Labs — 3 Hands-On Builds

Applied projects that transform module knowledge into deployed, portfolio-ready applications. Each lab follows a consistent structure: Overview → Prerequisites → Build Steps → Stretch Goals → Deployment → Assessment Criteria.

---

## Lab 1 — Build a Marketing Website

**Duration:** ~4 hours | **Difficulty:** Beginner | **Cost:** Free

### Overview

Your first hands-on project. Apply techniques from Modules 1-4 to build a complete, polished marketing website for a fictional (or real) product using any hosted builder (Lovable, v0.dev, or Bolt.new). Deploy to a live URL.

### Prerequisites

- Module 1: What Is AI (basic AI literacy)
- Module 2: What Is Vibe Coding (the loop)
- Module 3: The Toolkit (tool selection)
- Module 4: Prompt Chaining (basics)

### Learning Objectives

- Scaffold a multi-page website from a single prompt
- Iterate on design using natural language feedback
- Structure content for marketing conversion
- Deploy to a public URL
- Implement responsive design

### Build Steps

#### Step 1: Define Your Product (30 min)

Before generating any code, write a one-paragraph product description:

```
Product name, target audience, core value proposition, key features, brand personality.
```

Example:
> "LaunchKit is a landing page builder for non-technical founders. It offers drag-and-drop templates, one-click deployment, and built-in analytics. The brand is modern, approachable, and confident."

#### Step 2: Scaffold the Site (45 min)

Using your chosen tool (recommended: v0.dev for speed or Lovable for full-stack), prompt:

```
Build a marketing website for [product name].
Target audience: [description]
Pages needed: Home, Features, Pricing, About, Contact
Brand personality: [description]
Include: hero section, feature grid, pricing table, testimonial carousel, FAQ accordion, contact form
Style: modern, clean, responsive, [primary color] accent
```

Review the output. Does it match your vision? Note specific things to change.

#### Step 3: Refine the Design (45 min)

Iterate using targeted prompts:

- "Make the hero section taller with a gradient background"
- "Change pricing cards to 3-column layout with featured plan highlighted"
- "Add hover animations to all buttons"
- "Make the testimonial section use a horizontal scroll on mobile"

Focus on one change at a time. Review after each.

#### Step 4: Add Content (30 min)

Replace placeholder content with your actual copy:

- Write headlines that convert
- Add real feature descriptions
- Include authentic testimonials
- Add team photos or avatars

#### Step 5: Deploy (30 min)

- Connect your GitHub repository
- Deploy via Vercel or Netlify
- Set up a custom domain (optional)
- Enable HTTPS

### Stretch Goals

- Add a blog page with at least 2 articles
- Implement dark mode toggle
- Add analytics (Plausible or Umami)
- Create a "waitlist" signup form connected to Supabase
- Add page transition animations

### Assessment Criteria

| Criterion | Pass | Distinction |
|-----------|------|-------------|
| Pages | 3+ pages, all linked | 5+ pages, custom 404 |
| Responsive | Works on mobile/desktop | Tablet optimized, no horizontal scroll |
| Performance | Loads in <3s | Lighthouse score >85 |
| Design | Clean, on-brand | Custom animations, polished spacing |
| Code | No console errors | TypeScript, accessible HTML |
| Deployed | Live on public URL | Custom domain, HTTPS enforced |

---

## Lab 2 — Build an E-Commerce Store

**Duration:** ~6 hours | **Difficulty:** Intermediate | **Cost:** Free (Stripe test mode)

### Prerequisites

- Lab 1 completed
- Module 5: Context Engineering
- Basic understanding of databases (Supabase helps)

### Learning Objectives

- Build a multi-page store with product catalog
- Implement cart and checkout flow
- Integrate payment processing
- Handle user authentication
- Manage product inventory via database

### Build Steps

#### Step 1: Product Catalog (1 hour)

Prompt the scaffold:

```
Build an e-commerce store for [product category].
Features needed:
- Product listing page with grid view
- Product detail page with images, description, price
- Category filtering
- Search bar
- Sort by price/name/popularity

Use: [tool name], Tailwind CSS, [database if applicable]
```

#### Step 2: Shopping Cart (1 hour)

Add cart functionality:

- Add to cart button
- Cart sidebar or page
- Quantity adjustment
- Remove items
- Price calculation (subtotal, tax, total)
- Cart persistence (local storage or database)

#### Step 3: Checkout Flow (1.5 hours)

- Checkout page with address form
- Order summary
- Payment integration (Stripe test mode)
- Order confirmation page
- Email receipt notification (optional)

#### Step 4: Authentication (1 hour)

- Sign up / log in
- User profile page
- Order history
- Address management

#### Step 5: Polish and Deploy (1.5 hours)

- Loading states for all async operations
- Empty states (empty cart, no orders)
- Error states (payment failed, network error)
- Success states (order confirmed)
- Deploy to production

### Stretch Goals

- Product reviews and ratings
- Wishlist functionality
- Inventory management dashboard
- Discount codes
- Abandoned cart recovery
- Multi-currency support

### Assessment Criteria

| Criterion | Pass | Distinction |
|-----------|------|-------------|
| Catalog | 10+ products, filterable | 50+ products, faceted search |
| Cart | Add/remove, quantity, persist | Synced across devices |
| Checkout | Address + payment flow | Guest checkout + account |
| Auth | Sign up/log in | OAuth, password reset |
| Deployed | Live store | Real products, custom domain |

---

## Lab 3 — Build a Directory/Marketplace

**Duration:** ~8 hours | **Difficulty:** Advanced | **Cost:** Free

### Prerequisites

- Labs 1 and 2 completed
- Module 6: Process Engineering
- Comfortable with databases and authentication

### Learning Objectives

- Build a multi-tenant platform
- Implement user-generated content
- Design search and filtering systems
- Handle file uploads and media
- Build admin/moderator features
- Apply process engineering to a complex project

### Build Steps

#### Step 1: Define the Platform (30 min)

Choose your niche:
- **Directory:** Local services, AI tools, courses, events
- **Marketplace:** Digital products, freelance services, rental items

Define: Who lists? Who searches? What's the transaction model?

#### Step 2: Database Schema (1 hour)

Design your schema:

```
users: id, email, name, role (user/admin), avatar
listings: id, title, description, price, category, images[], status, user_id, created_at
categories: id, name, slug, parent_id
reviews: id, rating, text, listing_id, user_id
```

Implement with Supabase or Convex.

#### Step 3: Listing Management (1.5 hours)

- Create listing form with image upload
- Edit/delete listings
- Listing detail page
- User dashboard for managing listings
- Listing status workflow (draft → published → featured)

#### Step 4: Search and Discovery (1.5 hours)

- Full-text search
- Category filtering
- Price range filter
- Location filter (if applicable)
- Sort by relevance, date, price, rating
- Pagination

#### Step 5: User Profiles and Reviews (1 hour)

- Public profile pages
- Review and rating system
- Seller/member reputation
- Contact or inquiry system

#### Step 6: Admin Features (1 hour)

- Admin dashboard
- Listing moderation (approve/reject)
- User management
- Basic analytics

#### Step 7: Polish and Deploy (1 hour)

- Responsive design audit
- Performance optimization
- SEO basics (meta tags, sitemap)
- Accessibility check
- Production deploy

### Stretch Goals

- Payment processing for marketplace transactions
- Messaging system between users
- Saved searches and alerts
- Featured/boosted listings
- API for third-party access
- i18n support

### Assessment Criteria

| Criterion | Pass | Distinction |
|-----------|------|-------------|
| Listings | C/U/D with images | Bulk import, rich editor |
| Search | Text + category filter | Full-text + facet + geo |
| Auth | User accounts + roles | OAuth, admin dashboard |
| UX | Responsive, all states | Animations, empty states, onboarding |
| Code | Organized components | Custom hooks, typed APIs |
| Deployed | Live platform | Real listings, custom domain |
