This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

---

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

# Related to 📦 `.tsx` Components in the Next.js Project

This document provides an updated and organized index of all `.tsx` components developed for your application using Next.js with App Router, TypeScript, Tailwind CSS, and modern best practices.

---

## 🧩 Component Structure

### 🟣 `components/layout/`

These components define the visual and structural foundation of pages:

- **`Container.tsx`** – Responsive wrapper with max-width and horizontal paddings.
- **`Footer.tsx`** – Site-wide footer section.
- **`HeroSection.tsx`** – Prominent hero section (e.g., landing/homepage).
- **`Layout.tsx`** – Global wrapper including Navbar, Footer, and children.
- **`Navbar.tsx`** – Top navigation bar with links and brand.
- **`Section.tsx`** – Semantic page section with spacing.
- **`Sidebar.tsx`** – Sidebar for secondary navigation or filters.

---

### 🟢 `components/ui/`

Reusable interface components to build accessible and interactive UIs:

#### 🔘 Buttons & Toggles
- `Button.tsx`
- `ButtonGroup.tsx`
- `IconButton.tsx`
- `LinkButton.tsx`
- `ThemeToggle.tsx`
- `Toggle.tsx`

#### 📝 Forms & Inputs
- `Checkbox.tsx`
- `Input.tsx`
- `Radio.tsx`
- `SearchBar.tsx`
- `Select.tsx`
- `Textarea.tsx`

#### 🧭 Navigation & i18n
- `LocaleSwitcher.tsx`
- `Stepper.tsx`
- `StepperStep.tsx`
- `Tabs.tsx`

#### 💬 UI Feedback / Interaction
- `AlertDialog.tsx`
- `LoadingSpinner.tsx`
- `Modal.tsx`
- `Notification.tsx`
- `Popover.tsx`
- `Skeleton.tsx`
- `Toast.tsx`
- `Tooltip.tsx`

#### 📈 Metrics & Visual Display
- `Avatar.tsx`
- `Badge.tsx`
- `KPIBox.tsx`
- `ProgressBar.tsx`

#### 🧩 Page-Level Components
- `Accordion.tsx`
- `AccordionItem.tsx`
- `Calendar.tsx`
- `Card.tsx`
- `CardEvent.tsx`
- `Dropdown.tsx`
- `FAQSection.tsx`
- `VideoCarousel.tsx` – Carousel of embedded videos from YouTube.
- `ScrollBox.tsx` – Container with customized scroll.
  - Props:
    - `direction`: `'y'` | `'x'` | `'both'` – Scroll direction (default `'y'`).
    - `thin`: `boolean` – If you apply the `scrollbar-thin` style.
    - `className`: Additional styles.
  - Scroll adapted with `---color-border`, `--color-accent`, and `--color-bg` colors.
- `LoopColumn`
- `SlotMachine`

### 🧰 Utilities
- `Divider.tsx` – Horizontal or vertical spacing line using `var(--color-border)` and optional Tailwind spacing.

---

## ⚙️ Technologies & Conventions Used

- `Next.js` with `App Router`
- `TypeScript`
- `Tailwind CSS`
- `Turbopack`
- `next/image` for optimized image handling
- `next-intl@^4.3.4` for internationalization
- `next/navigation` instead of `next-intl/navigation`
- `Dark/light` theme mode using CSS variables (`var(--color-bg)`, `var(--color-fg)`)
- Hydration control **only when necessary**
- Modular file structure inside `src/components/`
- Logical grouping by folders: `layout/`, `ui/`, etc.

---

## 🧩 Additional Notes

We use `react-icons` (`FaInstagram`, `FaYoutube`) as it is lightweight and efficient.

---

This document will be updated as new components are developed.
