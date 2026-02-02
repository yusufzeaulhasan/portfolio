# Portfolio Website

A modern, responsive portfolio website showcasing projects, experience, and skills.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean design with gradient backgrounds and smooth animations
- **Interactive Navigation**: Fixed navbar with smooth scrolling to sections
- **About Section**: Personal introduction and skills showcase
- **Projects Section**: Grid layout displaying project cards with descriptions and technologies
- **Experience Section**: Timeline view of professional experience with achievements
- **Contact Section**: Contact information and social media links
- **Performance Optimized**: Consolidated scroll handlers with requestAnimationFrame for smooth performance

## Structure

```
portfolio/
├── index.html       # Main HTML structure
├── styles.css       # Styling and responsive design
├── script.js        # Interactive features and animations
└── README.md        # Documentation
```

## Sections

### 1. Hero Section
- Eye-catching introduction with gradient background
- Call-to-action buttons
- Parallax effect on scroll

### 2. About Me
- Personal introduction
- Profile placeholder
- Skills and technologies tags

### 3. Projects
- 4 featured projects
- Project descriptions
- Technology stack tags
- Links to live demos and GitHub repositories

### 4. Experience
- Timeline view of professional experience
- Job titles and companies
- Key achievements for each role
- Date ranges

### 5. Contact
- Email, phone, and location information
- Social media links (GitHub, LinkedIn, Twitter, CodePen)

## Technologies Used

- HTML5
- CSS3 (Custom Properties, Flexbox, Grid)
- Vanilla JavaScript
- Font Awesome Icons (via CDN)

## Customization

To customize this portfolio for your own use:

1. **Personal Information**: Update the name, title, and description in `index.html`
2. **About Section**: Modify the bio and skills in the About section
3. **Projects**: Replace the sample projects with your actual projects
4. **Experience**: Update the timeline with your work experience
5. **Contact Info**: Add your real email, phone, location, and social media links
6. **Colors**: Modify CSS custom properties in `:root` in `styles.css`
7. **Profile Image**: Replace the icon placeholder with your photo

## Running Locally

Simply open `index.html` in a web browser, or use a local server:

```bash
# Using Python 3
python3 -m http.server 8000

# Using Node.js http-server
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This portfolio template is open source and available for personal and commercial use.

## Credits

Built with ❤️ and passion for code
