## WELCOME TO ( সহজ সরল সিম্পল ) ASSIGNMENT-02

---

# Customer Support Zone

## 🚀 Getting Started

### Installation & Setup

1. **Install Dependencies:**

```bash
npm install
```

2. **Run Development Server:**

```bash
npm run dev
```

3. **Build for Production:**

```bash
npm run build
```

4. **Preview Production Build:**

```bash
npm run preview
```

The application will be available at `http://localhost:5173/`

---

## 📚 Project Overview

This project is a React-based **Customer Support Zone** designed to display customer tickets, track progress, and mark them as resolved. It follows a Figma design and includes additional features like status management, responsiveness, and toast notifications using **React-Toastify**.

---

## 📌 Features & Requirements

### ✅ Navbar

- Website name/logo on the **left**.
- Menu items and **New Ticket** button on the **right**.

### ✅ Banner

- Banner section designed according to Figma.
- Shows a **linear gradient** background.
- Displays ticket statistics:
  - **In Progress Count**
  - **Resolved Count** (default = 0).

### ✅ Main Section

1. **JSON Data **
   - Created **10–15 tickets** with the following properties:
     - `id`, `title`, `description`, `customer`, `priority`, `status`, `createdAt`.

2. **Ticket Cards**
   - Display all ticket information in a **card layout**.
   - Cards arranged in a **2-column grid** (left side).

3. **Task Status Section**
   - Clicking a card adds it to the **Task Status Section** (right side) and shows alert. It will increase the count of in-progress in banner
   - Task Status shows:
     - Ticket Title
     - **Complete Button**

   - Clicking **Complete Button**:
     - show alert

### ✅ Footer

- Designed according to Figma.

### ✅ Responsiveness

- The entire website is **responsive** for mobile devices.

### ✅ Readme:

Create a README file to answer the following question-

#### What is JSX, and why is it used?

**JSX (JavaScript XML)** is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript. It makes React code more readable and expressive by combining markup with logic.

**Why is it used?**

- Makes component structure more intuitive and easier to understand
- Allows embedding JavaScript expressions within curly braces `{}`
- Provides better error messages and warnings
- Gets transpiled to `React.createElement()` calls by Babel

**Example:**

```jsx
const element = <h1>Hello, {name}!</h1>;
```

#### What is the difference between State and Props?

| **State**                                    | **Props**                                 |
| -------------------------------------------- | ----------------------------------------- |
| Mutable (can be changed)                     | Immutable (read-only)                     |
| Managed within the component                 | Passed from parent to child               |
| Can be updated using `setState` or hooks     | Cannot be modified by the child component |
| Used for dynamic data that changes over time | Used for configuration and passing data   |
| Private to the component                     | Accessible in child components            |

**Example:**

```jsx
// State
const [count, setCount] = useState(0);

// Props
<ChildComponent name="John" age={25} />;
```

#### What is the useState hook, and how does it work?

**useState** is a React Hook that allows you to add state variables to functional components.

**Syntax:**

```jsx
const [state, setState] = useState(initialValue);
```

**How it works:**

- Returns an array with two elements: current state value and a function to update it
- The initial value is set only on the first render
- When `setState` is called, React re-renders the component with the new state
- State updates are asynchronous and may be batched for performance

**Example:**

```jsx
const [count, setCount] = useState(0);
const increment = () => setCount(count + 1);
```

#### How can you share state between components in React?

There are several ways to share state between components:

1. **Lifting State Up**: Move state to the closest common parent component and pass it down via props
2. **Context API**: Create a context to share data globally without prop drilling
3. **State Management Libraries**: Use Redux, Zustand, or other libraries for complex state management
4. **Custom Hooks**: Create reusable hooks that encapsulate shared logic
5. **Component Composition**: Use children props to compose components with shared state

**Example (Lifting State Up):**

```jsx
function Parent() {
  const [data, setData] = useState("");
  return (
    <>
      <ChildA data={data} setData={setData} />
      <ChildB data={data} />
    </>
  );
}
```

#### How is event handling done in React?

React uses **camelCase** naming convention for events and passes functions as event handlers.

**Key Points:**

- Event names use camelCase: `onClick`, `onChange`, `onSubmit`
- Pass functions as handlers, not strings
- Use arrow functions or bind to preserve `this` context
- React uses synthetic events (cross-browser wrapper)
- Can call `preventDefault()` and `stopPropagation()`

**Examples:**

```jsx
// Inline handler
<button onClick={() => console.log('Clicked!')}>Click</button>

// Function reference
const handleClick = (e) => {
  e.preventDefault();
  console.log('Button clicked');
};
<button onClick={handleClick}>Click</button>

// With parameters
<button onClick={() => handleDelete(id)}>Delete</button>
```

---

###

## 📌 Challenge Requirements

### 🔔 React-Toastify

- Used **React-Toastify** to replace all alerts with stylish toast notifications.

### 📝 Task Completion Logic

Clicking **Complete Button**:

1. It is **removed from Task Status**.
2. It is added to the **Resolved List**.
3. The **In Progress count decreases**.
4. The **Resolved count increases**.
5. It is removed from the **Customer Tickets list**.

## 🧰 Required Technology Stack

- **HTML**
- **CSS** (Vanilla / Tailwind / DaisyUI)
- **JavaScript**
- **React.js** (Mandatory)

> ⚠️ **Important:** The project must be built using **React.js**. Other frameworks such as Vue are not permitted.

---

## 📌 Project Rules

- ✅ At least **5 meaningful commits** are required.
- ❌ Do not use dummy text where real data can be displayed.

---

## 🔗 Submission

- **Live Link :** YOUR_DEPLOYED_URL_HERE
- **GitHub Repository:** YOUR_REPO_URL_HERE

### 📅 Deadline For 60 marks: 5th March, 2026 (11:59 pm ⏱️)

### 📅 Deadline For 50 marks: 6th March, 2026 (11:59 pm ⏱️)

### 📅 Deadline For 30 marks: Until the next assignment is published.

---

## 📁 Project Structure

```
Mission-Restart-A2/
├── public/
│   ├── vector1.png          # Decorative SVG for In-Progress card
│   └── vector2.png          # Decorative SVG for Resolved card
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Navigation bar component
│   │   ├── Banner.jsx       # Stats banner with gradient backgrounds
│   │   ├── TicketCard.jsx   # Individual ticket card component
│   │   ├── TaskStatus.jsx   # In-progress tasks sidebar
│   │   ├── ResolvedList.jsx # Resolved tasks display
│   │   └── Footer.jsx       # Footer component
│   ├── data/
│   │   └── tickets.json     # Mock ticket data (10 tickets)
│   ├── App.jsx              # Main application component
│   ├── main.jsx             # Application entry point
│   └── index.css            # Global styles with Tailwind
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

---

## ✨ Key Features Implemented

### State Management with LocalStorage

- All state changes (tickets, in-progress tasks, resolved tasks) are automatically saved to localStorage
- Data persists across browser sessions
- Automatically loads saved state on page refresh

### React-Toastify Integration

- Success notifications when tickets are moved to in-progress
- Success notifications when tasks are completed
- Info notifications for duplicate actions
- Styled toast notifications with auto-dismiss

### Responsive Design

- Mobile-first approach using Tailwind CSS
- Grid layout adapts from 1 column (mobile) to 2-3 columns (desktop)
- Touch-friendly interface for mobile devices
- Sticky navigation and task status sidebar on desktop

### Dynamic Counter Updates

- In-Progress count automatically updates when tickets are added to Task Status
- Resolved count automatically updates when tasks are completed
- Real-time synchronization between all components

---

## 🎨 Design Implementation

The project follows the Figma design with:

- **Purple gradient** (#8B5CF6 to #7C3AED) for In-Progress cards
- **Green gradient** (#10B981 to #059669) for Resolved cards
- **Wave patterns** as decorative backgrounds
- **Vector graphics** (SVG) for visual enhancement
- **Clean card-based layout** with shadows and hover effects
- **Color-coded priority badges** (High: Red, Medium: Yellow, Low: Green)
- **Status indicators** with dot notation

---

## 🛠️ Technologies Used

- **React 18.2** - UI Library
- **Vite 5** - Build tool and dev server
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **React-Toastify 9.1** - Toast notifications
- **LocalStorage API** - Client-side data persistence
- **JSON** - Mock data storage

---

## 💡 Implementation Highlights

### State Lifting Pattern

State is managed at the App level and passed down to child components via props, following React best practices.

### Event Handling

All user interactions (clicking tickets, completing tasks) are handled through event handlers passed as props.

### Component Composition

The application is split into reusable, single-responsibility components that can be easily maintained and tested.

### Data Persistence

Using localStorage ensures that user actions persist across sessions without needing a backend.

---

## 📝 Development Notes

- All commits are meaningful and follow conventional commit standards
- No dummy text is used - all data is contextual and realistic
- Code is well-commented and follows React best practices
- The project uses modern ES6+ JavaScript features
- Responsive breakpoints are handled using Tailwind's utility classes

---

## 🐛 Known Issues & Future Enhancements

### Potential Enhancements:

- Add ability to create new tickets through a form
- Implement ticket editing functionality
- Add search and filter options
- Implement sorting by priority/date
- Add user authentication
- Connect to a real backend API
- Add animations for smoother transitions
- Implement undo functionality

---

## 📄 License

This project is created as part of an academic assignment.

---

**Created with ❤️ using React + Vite + Tailwind CSS**
