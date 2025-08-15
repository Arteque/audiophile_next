# 🎧 Audiophile E-Commerce Platform

A modern, responsive e-commerce web application for premium audio equipment built with Next.js and TypeScript, integrated with Shopware 6 backend.

## 🚀 Project Overview

Audiophile is a full-featured e-commerce platform specializing in high-end audio equipment including headphones, speakers, and earphones. The application provides a seamless shopping experience with modern web technologies and performance optimizations.

### ✨ Key Features

- **🛍️ Product Catalog**: Browse premium audio equipment by categories
- **🔍 Product Details**: Detailed product pages with image galleries and specifications
- **🛒 Shopping Cart**: Add/remove items with quantity management
- **📱 Responsive Design**: Optimized for mobile, tablet, and desktop
- **⚡ Performance**: Next.js optimizations with lazy loading and image optimization
- **🔐 Type Safety**: Full TypeScript implementation
- **🎨 Modern UI**: Clean, minimalist design with accessibility features

## 🛠️ Tech Stack

### Frontend

- **Framework**: Next.js 15.3.2 (App Router)
- **Language**: TypeScript 5.0
- **Styling**: TailwindCSS 4.0 + SCSS Modules
- **UI Components**: Custom component library
- **Fonts**: Manrope (Google Fonts)
- **Image Optimization**: Next.js Image component

### Backend Integration

- **E-Commerce Platform**: Shopware 6
- **API Client**: Custom Shopware API integration
- **Data Handling**: JSON-based data exchange
- **Authentication**: API key-based authentication

### Additional Libraries

- **Animation**: Motion (12.16.0)
- **HTML Sanitization**: sanitize-html (2.17.0)
- **Development**: ESLint, TypeScript

## 📁 Project Structure

```
audiophile_next/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with Header/Footer
│   ├── page.tsx                 # Homepage
│   ├── products/[slug]/         # Product category pages
│   └── singleproduct/[slug]/    # Individual product pages
├── _components/                  # Reusable UI components
│   ├── Assets/                  # Basic UI elements
│   ├── Pages/                   # Page-specific components
│   └── shared/                  # Shared layout components
├── _data/                       # Static data and fallbacks
├── pages/api/                   # API routes for Shopware integration
├── public/                      # Static assets (images, icons)
├── styles/                      # Global styles
├── Tools/                       # Utility functions
└── types/                       # TypeScript type definitions
```

## 🏗️ Architecture

### Routing Strategy

- **Homepage** (`/`): Hero section, categories, and product showcases
- **Categories** (`/products/[slug]`): Product listings by category
- **Product Details** (`/singleproduct/[slug]`): Individual product information
- **API Routes**: Serverless functions for Shopware integration

### Data Management

- **Primary Source**: Shopware 6 API for live product data
- **Fallback Data**: Local JSON files for development/offline usage
- **Image Assets**: Organized by device breakpoints (mobile/tablet/desktop)

### Component Architecture

- **Atomic Design**: Modular component structure
- **Responsive Components**: Mobile-first design approach
- **Type Safety**: Comprehensive TypeScript interfaces

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- Shopware 6 instance (for production)
- Environment variables configured

### Installation

1. **Clone the repository**

   ```bash
   git clone [repository-url]
   cd audiophile_next
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup**
   Create a `.env.local` file:

   ```env
   SHOPWARE_ACCESS_KEY=your_shopware_access_key
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

4. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open the application**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📱 Responsive Design

The application is fully responsive with breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

All images and layouts adapt seamlessly across devices.

## 🔌 API Integration

### Shopware 6 Integration

- **Product Catalog**: Fetch products by category
- **Product Details**: Individual product information with media
- **Custom Fields**: Extended product attributes
- **Stock Management**: Real-time inventory tracking

### API Endpoints

- `GET /api/productlisting?id=[categoryId]` - Product listings
- `GET /api/single?id=[productId]` - Single product details
- `GET /api/navigation` - Navigation data
- `GET /api/cart` - Cart operations

## 🎨 UI/UX Features

### Design System

- **Typography**: Consistent heading and text styles
- **Color Palette**: Premium audio equipment aesthetic
- **Spacing**: Systematic margin and padding scales
- **Components**: Reusable button, card, and layout components

### Accessibility

- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Keyboard Navigation**: Full keyboard accessibility
- **Alt Text**: Comprehensive image descriptions
- **Screen Reader Support**: ARIA labels and descriptions

## 🛒 E-Commerce Features

### Product Management

- **Categories**: Headphones, Speakers, Earphones
- **Product Attributes**: Name, price, description, features, gallery
- **Inventory**: Stock tracking and availability status
- **Pricing**: Dynamic pricing with currency formatting

### Shopping Experience

- **Product Discovery**: Category-based browsing
- **Product Details**: Comprehensive product information
- **Cart Functionality**: Add/remove items with quantity selection
- **Responsive Images**: Optimized for all screen sizes

## 🔧 Development

### Code Quality

- **TypeScript**: Full type coverage
- **ESLint**: Code linting and formatting
- **Component Structure**: Modular and reusable components
- **Error Handling**: Comprehensive error boundaries

### Performance Optimizations

- **Next.js Image**: Automatic image optimization
- **Lazy Loading**: Components and images
- **Code Splitting**: Automatic bundle optimization
- **Caching**: Strategic caching for API responses

## 📊 Current Status

### ✅ Completed Features

- Product catalog and browsing
- Category-based navigation
- Product detail pages
- Responsive design implementation
- Shopware 6 API integration
- Basic cart functionality

### 🚧 In Development

- Complete checkout process
- User authentication
- Order management
- Payment integration

### 📋 Planned Features

- User accounts and profiles
- Order history
- Product reviews and ratings
- Advanced filtering and search
- Wishlist functionality

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is part of a Frontend Mentor challenge. Please refer to their terms of service for usage guidelines.

## 👨‍💻 Developer

**Ahmed Lemssiah** - _Full Stack Developer_

---

Built with ❤️ using Next.js and modern web technologies.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
