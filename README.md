# 🎫 Customer Support Ticket System

<div align="center">

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-5.0.8-646CFF?logo=vite)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4.0-38B2AC?logo=tailwind-css)

A modern, responsive customer support ticket management system built with React, featuring real-time ticket tracking, priority management, and an intuitive user interface.

[🚀 Live Demo](https://mission-restart-assignment-7.vercel.app/) • [📂 Repository](https://github.com/maksudulhaque2000/Mission-Restart-Assignment-7)

</div>

---

## ✨ Features

### 🎯 Core Functionality

- **📋 Ticket Management** - Create, view, and organize customer support tickets
- **📊 Task Status Tracking** - Real-time monitoring of in-progress and resolved tickets
- **🏷️ Priority System** - Three-tier priority levels (HIGH, MEDIUM, LOW)
- **🔄 Status Workflow** - Seamless transition from Open → In-Progress → Resolved
- **💾 Data Persistence** - Automatic state saving using LocalStorage
- **🔔 Smart Notifications** - Toast notifications for user actions and feedback
- **📱 Fully Responsive** - Optimized for desktop, tablet, and mobile devices

### 🎨 User Interface

- **🎭 Modern Design** - Clean, professional interface with gradient accents
- **✨ Smooth Animations** - Hover effects and transitions for better UX
- **📈 Visual Statistics** - Dashboard with in-progress and resolved ticket counts
- **🎨 Color-Coded Priorities** - Visual differentiation for ticket priorities
- **🖱️ Click-to-Action** - Intuitive ticket card interactions

### 🌐 Additional Pages

- **❓ FAQ** - Comprehensive frequently asked questions
- **📝 Blog** - Latest updates and announcements
- **📜 Changelog** - Version history and updates
- **📥 Download** - Resources and documentation
- **📧 Contact** - Get in touch with support

---

## 🛠️ Tech Stack

| Technology                                                                                           | Purpose            | Version |
| ---------------------------------------------------------------------------------------------------- | ------------------ | ------- |
| ![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=black)                      | Frontend Framework | 18.2.0  |
| ![Vite](https://img.shields.io/badge/-Vite-646CFF?logo=vite&logoColor=white)                         | Build Tool         | 5.0.8   |
| ![TailwindCSS](https://img.shields.io/badge/-Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)  | Styling            | 3.4.0   |
| ![React Router](https://img.shields.io/badge/-React_Router-CA4245?logo=react-router&logoColor=white) | Routing            | 6.21.1  |
| ![React Toastify](https://img.shields.io/badge/-React_Toastify-FF6B35)                               | Notifications      | 9.1.3   |

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/maksudulhaque2000/Mission-Restart-Assignment-7.git
   ```

2. **Navigate to project directory**

   ```bash
   cd Mission-Restart-Assignment-7
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

4. **Start development server**

   ```bash
   npm run dev
   ```

   or

   ```bash
   yarn dev
   ```

5. **Open your browser**

   Navigate to `http://localhost:5173` to see the application running.

### Building for Production

```bash
npm run build
```

or

```bash
yarn build
```

The optimized production build will be available in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

---

## 📖 How It Works

### 🎫 Ticket Workflow

```
┌─────────────┐      ┌──────────────┐      ┌──────────────┐
│   OPEN      │ ───► │ IN-PROGRESS  │ ───► │   RESOLVED   │
│  (Tickets)  │      │ (Task Status)│      │ (Completed)  │
└─────────────┘      └──────────────┘      └──────────────┘
```

1. **Create/View Tickets** - All open customer support tickets are displayed as cards
2. **Click to Start** - Click on any ticket card to move it to "In-Progress"
3. **Active Work** - In-progress tickets appear in the Task Status panel
4. **Complete Task** - Click the "Complete" button to mark as resolved
5. **Track Progress** - View statistics in the dashboard banner

### 💾 Data Persistence

The application uses **LocalStorage** to maintain state across sessions:

- All tickets (open, in-progress, resolved)
- User preferences and settings
- Automatic save on every state change
- Fallback to default data if storage is unavailable

---

## 📂 Project Structure

```
Mission-Restart-Assignment-7/
├── public/                 # Static assets
├── src/
│   ├── components/        # Reusable React components
│   │   ├── Banner.jsx     # Dashboard statistics banner
│   │   ├── Footer.jsx     # Footer component
│   │   ├── Navbar.jsx     # Navigation bar
│   │   ├── NewTicketModal.jsx    # Modal for creating tickets
│   │   ├── ResolvedList.jsx      # Resolved tickets list
│   │   ├── TaskStatus.jsx        # In-progress tasks panel
│   │   └── TicketCard.jsx        # Individual ticket card
│   ├── data/
│   │   └── tickets.json   # Initial ticket data
│   ├── pages/             # Page components
│   │   ├── Home.jsx       # Main dashboard
│   │   ├── FAQ.jsx        # FAQ page
│   │   ├── Blog.jsx       # Blog page
│   │   ├── Changelog.jsx  # Changelog page
│   │   ├── Contact.jsx    # Contact page
│   │   └── Download.jsx   # Download page
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles
├── index.html             # HTML template
├── package.json           # Dependencies
├── tailwind.config.js     # Tailwind configuration
├── vite.config.js         # Vite configuration
└── vercel.json            # Vercel deployment config
```

---

## 🎨 Features Walkthrough

### 🏠 Dashboard (Home)

- **Customer Tickets Grid** - 2-column responsive layout displaying all open tickets
- **Task Status Panel** - Sticky sidebar showing currently in-progress tasks
- **Resolved List** - Quick view of completed tickets
- **Interactive Cards** - Click any ticket to move it to in-progress

### 🎫 Ticket Card

- **Title & Description** - Clear ticket information
- **Customer Name** - Who submitted the ticket
- **Priority Badge** - Visual priority indicator (HIGH/MEDIUM/LOW)
- **Status Badge** - Current ticket status
- **Creation Date** - When the ticket was created
- **Ticket ID** - Unique identifier

### ➕ New Ticket Modal

- **Form Validation** - Ensures all required fields are filled
- **Priority Selection** - Choose ticket priority level
- **Auto-generation** - Automatic ID and timestamp creation
- **Toast Feedback** - Success notification on creation

### 📊 Statistics Banner

- **In-Progress Count** - Number of tickets being worked on
- **Resolved Count** - Number of completed tickets
- **Gradient Design** - Eye-catching purple gradient cards
- **Decorative Elements** - SVG patterns and wave effects

---

## 🎯 Key Components Explained

### App.jsx

Central state management and routing logic:

- Manages tickets, in-progress tasks, and resolved tasks
- Handles LocalStorage integration
- Defines routing structure
- Implements main business logic

### TicketCard.jsx

Displays individual ticket information:

- Priority-based color coding
- Status badges
- Customer information
- Click-to-action functionality

### TaskStatus.jsx

Shows active work items:

- In-progress ticket list
- Complete button for each task
- Sticky positioning for easy access
- Empty state handling

### NewTicketModal.jsx

Form for creating new tickets:

- Controlled form inputs
- Validation logic
- Date and ID auto-generation
- Modal overlay with backdrop

---

## 🌟 Usage Examples

### Creating a New Ticket

1. Click the **"New Ticket"** button in the navigation bar
2. Fill in the ticket details:
   - Title (required)
   - Description (required)
   - Customer name (required)
   - Priority level (HIGH/MEDIUM/LOW)
3. Click **"Create Ticket"** to submit
4. The new ticket appears in the Customer Tickets section

### Managing Ticket Workflow

1. **Open Tickets** are displayed in the main grid
2. **Click** on any ticket card to move it to "In-Progress"
3. The ticket appears in the **Task Status** panel on the right
4. Click **"Complete"** button to resolve the ticket
5. Resolved tickets appear in the **Resolved List**

---

## 🔧 Configuration

### Tailwind CSS

Customize styles in `tailwind.config.js`:

```javascript
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      // Add custom colors, fonts, etc.
    },
  },
  plugins: [],
};
```

### Vite

Configure build settings in `vite.config.js`:

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Add custom configurations
});
```

---

## 🌐 Deployment

### Vercel (Recommended)

This project is deployed on Vercel. To deploy your own:

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Deploy!

The `vercel.json` file includes SPA routing configuration.

---

## 📱 Browser Support

| Browser | Support   |
| ------- | --------- |
| Chrome  | ✅ Latest |
| Firefox | ✅ Latest |
| Safari  | ✅ Latest |
| Edge    | ✅ Latest |
| Opera   | ✅ Latest |

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. 🍴 Fork the repository
2. 🌿 Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. 💾 Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. 📤 Push to the branch (`git push origin feature/AmazingFeature`)
5. 🔃 Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 👨‍💻 Author

**Maksudulhaque**

- GitHub: [@maksudulhaque2000](https://github.com/maksudulhaque2000)
- Project Link: [Mission-Restart-Assignment-7](https://github.com/maksudulhaque2000/Mission-Restart-Assignment-7)

---

## 🙏 Acknowledgments

- React community for excellent documentation
- Tailwind CSS for the utility-first CSS framework
- Vercel for seamless deployment
- Icons and design inspiration from modern UI trends

---

## 📞 Support

If you have any questions or need help, feel free to:

- 🐛 Open an issue on GitHub
- 📧 Contact through the Contact page
- 💬 Start a discussion in the repository

---

<div align="center">

### ⭐ Star this repository if you find it helpful!

**[Live Demo](https://mission-restart-assignment-7.vercel.app/)** | **[Documentation](https://github.com/maksudulhaque2000/Mission-Restart-Assignment-7)**

Made with ❤️ using React & Tailwind CSS

</div>
