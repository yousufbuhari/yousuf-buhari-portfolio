# Yousuf Buhari — Android Developer Portfolio

A modern, responsive single-page portfolio showcasing Android development projects, technical skills, and professional contact information.

## 🚀 Live Demo

[View Portfolio](https://yousufbuhari.github.io) *(Update with your actual deployment URL)*

## 🛠️ Tech Stack

### Core Framework
- **React 18.1.0** - Modern React with hooks and functional components
- **React Scripts 5.0.1** - Create React App build tooling

### UI & Styling
- **Bootstrap 5.3.8** - Responsive grid system and utilities
- **React Bootstrap 2.10.10** - Bootstrap components for React
- **Custom CSS** - Advanced animations, gradients, and responsive design
- **Custom Fonts** - Centra font family (Bold, Medium, Book weights)

### Animations & Effects
- **AOS (Animate On Scroll) 2.3.4** - Scroll-triggered animations
- **Animate.css 4.1.1** - CSS animation library
- **Custom CSS Animations** - Gradient animations, floating effects, and transitions

### UI Components
- **Material-UI 7.3.1** - Snackbar notifications for form feedback
- **Emotion** - CSS-in-JS styling support for MUI

### Functionality
- **EmailJS 4.4.1** - Contact form email service integration
- **React Router DOM 6.3.0** - Client-side routing
- **React Router Hash Link 2.4.3** - Smooth scrolling to page sections
- **React Multi Carousel 2.8.1** - Skills carousel component
- **Swiper 12.0.2** - Touch slider functionality

## 📁 Project Structure

```
src/
├── components/
│   ├── AboutMe.js          # Personal introduction and resume button
│   ├── Banner.js           # Hero section with animated name
│   ├── Contact.js          # Contact form with EmailJS integration
│   ├── Loader.js           # Initial page loading animation
│   ├── NavBar.js           # Navigation with active section highlighting
│   ├── Projects.js         # Project showcase with detailed metadata
│   └── Skills.js           # Technical skills grid with tooltips
├── assets/
│   ├── font/               # Custom Centra font files
│   └── img/                # Project images, icons, and graphics
├── App.js                  # Main application component
├── App.css                 # Global styles and component styling
├── index.js                # Application entry point
└── index.css               # Base CSS reset
```

## ✨ Features

### 🎨 Visual Design
- **Dark Theme** - Modern dark color scheme with gradient accents
- **Responsive Layout** - Mobile-first design with Bootstrap grid system
- **Custom Animations** - Gradient text effects, floating elements, and scroll animations
- **Glassmorphism** - Backdrop blur effects on navigation and cards
- **Interactive Elements** - Hover effects, expanding buttons, and smooth transitions

### 🧭 Navigation
- **Fixed Navigation** - Floating navbar with backdrop blur
- **Active Section Highlighting** - Dynamic navigation highlighting based on scroll position
- **Smooth Scrolling** - Hash link navigation between sections
- **Mobile Responsive** - Collapsible navigation for mobile devices

### 📱 Sections

#### Hero Banner
- Animated gradient text with name
- Typing effect styling
- Responsive typography scaling

#### About Me
- Personal introduction with experience details
- Interactive resume download button with hover expansion
- Professional background information

#### Skills Showcase
- Grid layout of technical skills with icons
- Hover tooltips showing technology names
- Responsive grid that adapts to screen size

#### Projects Portfolio
- Detailed project cards with comprehensive metadata
- Technology stacks and architecture details
- Interactive "View in Play Store" buttons
- Project descriptions and feature highlights

#### Contact Form
- EmailJS integration for form submissions
- Real-time form validation
- Success/error notifications with Material-UI Snackbars
- Social media links with hover effects

### 🔧 Technical Features
- **Loading Animation** - Custom dot animation during initial load
- **Scroll Animations** - AOS animations triggered on scroll
- **Form Handling** - Controlled form inputs with state management
- **Error Handling** - Comprehensive error handling for email service
- **Performance Optimized** - Efficient React patterns and lazy loading

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yousufbuhari/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   Create a `.env` file in the root directory:
   ```env
   REACT_APP_EMAILJS_SERVICE_ID=your_service_id
   REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
   REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Start development server**
   ```bash
   npm start
   ```
   Opens at [http://localhost:3000](http://localhost:3000)

5. **Build for production**
   ```bash
   npm run build
   ```

## ⚙️ Configuration

### EmailJS Setup
1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Set up email service (Gmail, Outlook, etc.)
3. Create email template with these variables:
   ```json
   {
     "name": "{{name}}",
     "email": "{{email}}",
     "message": "{{message}}",
     "time": "{{time}}"
   }
   ```
4. Add your credentials to environment variables

### Customization

#### Personal Information
- Update personal details in `src/components/AboutMe.js`
- Replace project information in `src/components/Projects.js`
- Modify skills in `src/components/Skills.js`

#### Contact Links
Update social media links in `src/components/Contact.js`:
```javascript
// LinkedIn
href="https://www.linkedin.com/in/your-profile"

// GitHub  
href="https://github.com/your-username"

// Email
href="mailto:your-email@domain.com"
```

#### Resume Button
Update resume link in `src/components/AboutMe.js`:
```javascript
onClick={() => window.open("https://your-resume-url.pdf", "_blank")}
```

#### Project Links
Update Play Store links in `src/components/Projects.js`:
```javascript
onClick={() => window.open("https://play.google.com/store/apps/details?id=your.app.package", "_blank")}
```

### Styling Customization
- **Colors**: Modify CSS custom properties in `src/App.css`
- **Fonts**: Replace font files in `src/assets/font/`
- **Animations**: Adjust AOS settings and custom animations
- **Layout**: Modify Bootstrap classes and custom CSS

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px  
- **Mobile**: 320px - 767px

Key responsive features:
- Adaptive navigation (collapsible on mobile)
- Flexible grid layouts
- Scalable typography
- Touch-friendly interactive elements

## 🚀 Deployment

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yousufbuhari.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Deploy: `npm run deploy`

### Firebase Hosting
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login to Firebase: `firebase login`
3. Initialize Firebase: `firebase init hosting`
4. Build project: `npm run build`
5. Deploy: `firebase deploy`

## 📋 Available Scripts

- `npm start` - Start development server
- `npm run build` - Create production build
- `npm test` - Run test suite
- `npm run eject` - Eject from Create React App (irreversible)

## 🔒 Security Notes

- **Environment Variables**: Never commit EmailJS keys to public repositories
- **Form Validation**: Client-side validation with server-side verification recommended
- **HTTPS**: Ensure HTTPS deployment for production

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Yousuf Buhari — Android Developer**

- **LinkedIn**: [yousufbuhari](https://www.linkedin.com/in/yousufbuhari)
- **GitHub**: [yousufbuhari](https://github.com/yousufbuhari)
- **Email**: [iyousufbuhari@gmail.com](mailto:iyousufbuhari@gmail.com)

## 🙏 Acknowledgments

- Design inspiration from modern portfolio templates
- AOS library for smooth scroll animations
- Bootstrap for responsive framework
- EmailJS for seamless form integration
- React community for excellent documentation

---

*Built with ❤️ using React and modern web technologies*