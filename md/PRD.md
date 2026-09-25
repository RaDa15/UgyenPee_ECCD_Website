# UgyenPee ECCD Public Website
## Product Requirements Document (PRD)

**Version:** 1.0  
**Status:** Draft  
**Product:** Public Website  
**Platform:** Responsive Web

---

## 1. Product Vision

Create a warm, trustworthy and modern digital home for UgyenPee ECCD that helps parents understand the centre, experience its environment, explore its learning approach, and take the next step toward admission or contact.

The product should communicate:

> **Care. Play. Learning. Growth.**

without making claims that have not been verified by the organisation.

---

## 2. Product Principles

### 2.1 Parent First
The most important information should be easy for parents to find.

### 2.2 Child-Centred
The experience should visually and verbally communicate childhood, curiosity, play and development.

### 2.3 Trust Before Marketing
Authentic photographs, clear policies, real staff and transparent information are more valuable than exaggerated promotional language.

### 2.4 Bhutanese Context
The content should reflect Bhutanese ECCD values, culture and educational context.

### 2.5 Simple
A parent should not need technical knowledge to navigate the site.

### 2.6 Authentic
Use real UgyenPee photographs wherever possible.

---

## 3. Primary User Journey

```text
Google / Social Media
        ↓
     Homepage
        ↓
 About / Programme / Centre
        ↓
 Learning & Development
        ↓
 Admissions
        ↓
 Contact / Enquiry / Visit
```

---

## 4. Page Requirements

## 4.1 Homepage

### Purpose
Create a strong first impression and immediately communicate what UgyenPee ECCD is.

### Required Sections

1. Header/navigation
2. Hero
3. Introduction
4. Why UgyenPee
5. Learning & Development
6. Programme overview
7. Life at UgyenPee
8. Facilities / environment
9. Parent-focused section
10. Latest activities/news
11. Call to action
12. Contact/location
13. Footer

### Primary CTA
`Explore UgyenPee`

### Secondary CTA
`Enquire About Admission`

---

## 4.2 About

Sections:
- Who We Are
- Our Story
- Vision
- Mission
- Values
- ECCD Philosophy

All content must be approved by management.

---

## 4.3 Learning & Development

Explain development areas rather than presenting ECCD as conventional school subjects.

Suggested categories:

- Physical Development
- Social & Emotional Development
- Language & Communication
- Cognitive Development
- Creative Expression
- Exploration & Discovery

The exact terminology should be validated with the centre.

---

## 4.4 Programmes

Each programme card/page should contain:

- Programme name
- Age group
- Short description
- Learning objectives
- Typical activities
- Schedule, if applicable
- Photos
- Parent information
- Enquiry CTA

---

## 4.5 Our Centre

Show:

- Classrooms
- Play spaces
- Outdoor areas
- Learning resources
- Safety/environment
- Facilities
- Team

The page should rely heavily on authentic photography.

---

## 4.6 Activities

Categories:

- Daily Learning
- Play
- Arts & Crafts
- Outdoor Activities
- Cultural Activities
- Celebrations
- Community Activities

---

## 4.7 Gallery

Requirements:
- Responsive image grid
- Category filtering
- Lightbox
- Image captions where useful
- Accessible alt text
- Optimised image sizes

Child photography must only be published where appropriate consent exists.

---

## 4.8 Admissions

This is a high-priority page.

It should answer:

- Who can apply?
- Age eligibility
- Available programmes
- Admission period
- Required documents
- Fees
- Application steps
- Opening hours
- Contact
- Frequently asked questions

### CTA

`Contact Us About Admission`

A future version may introduce online application.

---

## 4.9 Parent Resources

Potential content:

- Parenting tips
- Learning at home
- Play ideas
- Child development resources
- Nutrition guidance
- Important notices
- Downloadable documents

Only approved resources should be published.

---

## 4.10 News & Announcements

Each item should support:

- Title
- Date
- Featured image
- Summary
- Full content
- Gallery
- Related event information

Examples:
- Admissions announcement
- Holiday notice
- Centre activity
- Celebration
- Parent meeting
- Achievement

---

## 4.11 Contact

Must contain:

- Official phone
- Official email
- Address
- Opening hours
- Google Maps/location
- Contact form, if implemented
- Social links

### Quick Actions on Mobile

`Call`

`Email`

`Get Directions`

---

## 5. Navigation

### Desktop

```text
Logo | About | Learning | Programmes | Centre | Activities | Admissions | Parents | Contact
```

A prominent `Enquire` CTA may appear in the header.

### Mobile

Use a simple hamburger menu.

High-priority actions should remain easy to reach:
- Admissions
- Contact
- Call

---

## 6. Functional Requirements

### FR-01 Responsive Layout
The site must adapt to:
- Mobile
- Tablet
- Laptop
- Desktop

### FR-02 Navigation
Users must be able to move between major sections from a consistent navigation system.

### FR-03 Gallery
Users must be able to browse images.

### FR-04 Contact
Users must be able to access official contact information.

### FR-05 Map
Users should be able to open directions to the centre.

### FR-06 News
The structure must support publishing announcements.

### FR-07 SEO
Each page should support:
- Unique title
- Meta description
- Canonical URL
- Open Graph image
- Structured headings

### FR-08 Accessibility
Support:
- Keyboard navigation
- Visible focus states
- Readable text
- Sufficient contrast
- Alt text
- Semantic HTML
- Reduced-motion preferences

---

## 7. Non-Functional Requirements

### Performance
- Optimised images
- Lazy-loaded gallery images
- Minimal unnecessary JavaScript
- Fast first render

### Security
- HTTPS
- Secure forms
- No sensitive child information
- No exposed credentials

### Maintainability
- Reusable components
- Clear content structure
- Documented assets
- Consistent naming conventions

### Scalability
Architecture should allow future CMS/API integration.

---

## 8. Suggested Technology

The exact stack may be decided during implementation.

Suggested modern option:

- React
- Vite
- Tailwind CSS
- React Router
- Lucide Icons
- Framer Motion where animation adds value

Alternative:
- Next.js if SEO, content management and future server-side features justify it.

For a simple public prototype, React + Vite is sufficient.

---

## 9. Content Model

### Organisation

```text
name
logo
tagline
description
vision
mission
values
address
phone
email
socialLinks
```

### Programme

```text
title
ageGroup
description
objectives
activities
image
```

### Activity

```text
title
date
category
description
images
```

### News

```text
title
date
summary
content
featuredImage
```

### Staff

```text
name
role
shortBio
photo
```

---

## 10. Analytics

If approved by management, basic privacy-conscious analytics may measure:

- Page views
- Admission page visits
- Contact clicks
- Phone clicks
- Map/directions clicks
- Popular content
- Device type

No child-specific tracking should be implemented.

---

## 11. Acceptance Criteria

The first release is considered ready when:

- All major pages work.
- Navigation works on mobile and desktop.
- Contact information is correct.
- Location information is correct.
- All client-provided content is approved.
- Images have permission for web use.
- No placeholder text remains in production.
- Forms, if included, are tested.
- SEO metadata exists.
- Accessibility basics have been checked.
- Performance has been checked.
- Website works on current major browsers.

