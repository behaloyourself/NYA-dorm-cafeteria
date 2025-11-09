# Design Guidelines: Boarding Cafeteria Menu Website

## Design Approach
**Selected Approach:** Design System (Material Design-inspired)
**Rationale:** This is a utility-focused application for students to quickly access cafeteria information and submit feedback. Clarity, scannability, and accessibility are paramount over visual flair.

## Core Design Principles
1. **Information Hierarchy:** Menu items must be immediately scannable
2. **Approachability:** Friendly, non-institutional feel despite being a school service
3. **Efficiency:** Minimal clicks to access key information

---

## Typography System

**Primary Font:** 'Inter' or 'Roboto' (Google Fonts)
**Secondary Font:** Same as primary for consistency

**Type Scale:**
- H1 (Page Title): 2.5rem (40px), bold, letter-spacing: -0.02em
- H2 (Section Headers): 1.75rem (28px), semibold
- Body Text: 1rem (16px), regular, line-height: 1.6
- Menu Items: 1.125rem (18px), medium
- Navigation Links: 0.875rem (14px), medium, uppercase, letter-spacing: 0.05em
- Form Labels: 0.875rem (14px), medium

---

## Layout System

**Spacing Units:** Tailwind spacing of 4, 6, 8, 12, 16, 20 (e.g., p-4, mt-8, gap-6)

**Container Strategy:**
- Max width: 1200px centered
- Mobile: Full width with 16px horizontal padding
- Desktop: 80px horizontal padding

**Section Rhythm:**
- Section vertical padding: py-12 (mobile), py-20 (desktop)
- Inter-section gaps: 16px (mobile), 24px (desktop)

---

## Component Library

### Header
- Full-width green header with white text
- Site title prominently displayed
- Horizontal navigation with pipe separators
- Sticky positioning on scroll
- Height: 80px (desktop), 64px (mobile)

### Menu Display (Weekly Menu)
- Card-based layout with subtle elevation
- Each day as a distinct row with:
  - Day label (bold, larger)
  - Meal items in comma-separated inline format
  - Subtle divider between days
- Background: white cards on light gray page background
- Rounded corners: 12px
- Padding: 24px

### Survey Section
- Centered content with icon (fork/spoon or dessert icon from Material Icons)
- Descriptive text explaining the survey purpose
- Primary CTA button linking to external Google Form
- Button styling: Green background, white text, 48px height, 16px horizontal padding, 8px border-radius

### Feedback Form
- Single column layout
- Textarea: 
  - Min-height: 120px
  - Border: 1px solid light gray
  - Border-radius: 8px
  - Padding: 12px
  - Focus state: green border (2px)
- Submit button matches primary button style
- Character counter below textarea (optional): "0/500 characters"

### Navigation
- Inline horizontal links in header
- Active state: underline decoration
- Hover state: slight opacity change (0.8)
- Smooth scroll behavior to anchor sections

---

## Imagery

**Hero Section:** No large hero image required for this utility-focused site.

**Icon Usage:**
- Material Icons CDN for section icons
- Menu section: restaurant_menu icon
- Survey section: cake or emoji_food_beverage icon  
- Feedback section: rate_review or feedback icon
- Icons displayed above section headings, 40px size, green color

**Decorative Elements:**
- Subtle food pattern background (repeating vegetables/fruits) at 5% opacity in page background
- OR keep clean with solid light gray (#f7f7f7) background

---

## Interaction Patterns

**Form Submission:**
- On submit: Browser alert confirmation (as per existing JS)
- Form resets after submission
- No complex validation beyond HTML5 required attributes

**Scroll Behavior:**
- Smooth scroll when clicking navigation anchors
- Offset scroll position by header height

**Responsive Breakpoints:**
- Mobile: < 768px (single column, stacked sections)
- Desktop: ≥ 768px (maintain layout as designed)

---

## Accessibility Standards
- WCAG AA contrast ratios (green #4CAF50 on white passes)
- Form inputs have visible labels or aria-labels
- Keyboard navigation fully supported
- Focus indicators visible on all interactive elements

---

## Key Design Decisions
1. **No multi-column layout needed** - content is sequential and best consumed vertically
2. **Minimal animations** - instant feedback on form submission only
3. **Icon-driven section headers** - improves scannability and visual interest
4. **Card-based menu display** - creates clear separation between days while maintaining cohesion

This design prioritizes speed of information access and ease of interaction for students checking menus and providing feedback.