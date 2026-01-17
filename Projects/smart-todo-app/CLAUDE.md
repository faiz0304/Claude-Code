# Smart To-Do List App

A beginner-friendly to-do list application built with HTML, CSS, and vanilla JavaScript. This project demonstrates structured AI-driven development practices and provides a foundation for learning web development fundamentals.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [HTML Structure](#html-structure)
- [CSS Styling](#css-styling)
- [JavaScript Functionality](#javascript-functionality)
- [AI-Driven Development Process](#ai-driven-development-process)
- [Learning Objectives](#learning-objectives)

## Features

- Add new tasks with descriptions
- Mark tasks as complete/incomplete
- Delete tasks
- Local storage persistence
- Responsive design
- Clean, minimal interface
- Task filtering (all/active/completed)
- Task counter

## Tech Stack

- **HTML5**: Semantic markup and structure
- **CSS3**: Styling, layout, and animations
- **Vanilla JavaScript**: Core functionality and DOM manipulation
- **Local Storage API**: Data persistence

## Project Structure

```
smart-todo-app/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
├── README.md           # Project documentation
└── CLAUDE.md           # AI development guide
```

## Getting Started

### Prerequisites
- Basic understanding of HTML, CSS, and JavaScript
- Text editor or IDE
- Modern web browser

### Setup
1. Create a new directory for the project
2. Create the three main files: `index.html`, `styles.css`, and `script.js`
3. Copy the provided code into each file
4. Open `index.html` in your web browser

## HTML Structure

The HTML structure follows semantic markup principles:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Smart To-Do List</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <header class="header">
            <h1>Smart To-Do List</h1>
            <p>Organize your tasks efficiently</p>
            <button id="dark-mode-toggle" class="theme-toggle">🌙 Dark Mode</button>
        </header>

        <div class="input-section">
            <input type="text" id="task-input" placeholder="Add a new task...">
            <button id="add-task-btn">Add Task</button>
        </div>

        <div class="filters">
            <button class="filter-btn active" data-filter="all">All</button>
            <button class="filter-btn" data-filter="active">Active</button>
            <button class="filter-btn" data-filter="completed">Completed</button>
        </div>

        <ul id="task-list" class="task-list"></ul>

        <div class="task-stats">
            <span id="task-count">0 tasks remaining</span>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
```

### Key Elements Explained:
- **Semantic containers**: Proper use of divs and semantic elements
- **Input section**: Task input field and add button
- **Filter buttons**: Allow filtering tasks by status
- **Task list**: Unordered list to display tasks
- **Task stats**: Shows remaining task count
- **Dark mode toggle**: Button to switch between light and dark themes

## CSS Styling

The CSS provides a clean, minimal design with responsive layout:

```css
/* Reset and base styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    /* Light theme colors */
    --bg-gradient-start: #667eea;
    --bg-gradient-end: #764ba2;
    --container-bg: white;
    --header-bg: #4a5568;
    --text-color: #2d3748;
    --text-secondary: #4a5568;
    --border-color: #e2e8f0;
    --filter-bg: #f7fafc;
    --filter-hover: #edf2f7;
    --completed-text: #a0aec0;
    --delete-bg: #e53e3e;
    --delete-hover: #c53030;
    --primary: #667eea;
    --primary-hover: #5a67d8;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, var(--bg-gradient-start) 0%, var(--bg-gradient-end) 100%);
    min-height: 100vh;
    padding: 20px;
    color: var(--text-color);
    transition: background 0.3s ease;
}

/* Dark mode styles */
body.dark-mode {
    --bg-gradient-start: #1a202c;
    --bg-gradient-end: #2d3748;
    --container-bg: #2d3748;
    --header-bg: #4a5568;
    --text-color: #f7fafc;
    --text-secondary: #e2e8f0;
    --border-color: #4a5568;
    --filter-bg: #4a5568;
    --filter-hover: #2d3748;
    --completed-text: #a0aec0;
    --delete-bg: #e53e3e;
    --delete-hover: #c53030;
    --primary: #667eea;
    --primary-hover: #5a67d8;
}

.container {
    max-width: 600px;
    margin: 0 auto;
    background: var(--container-bg);
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    transition: background 0.3s ease, color 0.3s ease;
}

/* Header styles */
.header {
    background: var(--header-bg);
    color: white;
    padding: 30px;
    text-align: center;
    position: relative;
}

.header h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
}

.header p {
    opacity: 0.8;
    margin-bottom: 15px;
}

.theme-toggle {
    background: rgba(255, 255, 255, 0.2);
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.3);
    padding: 8px 15px;
    border-radius: 20px;
    cursor: pointer;
    font-size: 0.9rem;
    transition: all 0.3s ease;
}

.theme-toggle:hover {
    background: rgba(255, 255, 255, 0.3);
}

/* Input section */
.input-section {
    padding: 30px;
    display: flex;
    gap: 10px;
}

#task-input {
    flex: 1;
    padding: 15px;
    border: 2px solid var(--border-color);
    border-radius: 5px;
    font-size: 1rem;
    outline: none;
    transition: border-color 0.3s;
    background: var(--container-bg);
    color: var(--text-color);
}

#task-input:focus {
    border-color: var(--primary);
}

#add-task-btn {
    padding: 15px 25px;
    background: var(--primary);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    transition: background 0.3s;
}

#add-task-btn:hover {
    background: var(--primary-hover);
}

/* Filters */
.filters {
    display: flex;
    border-bottom: 1px solid var(--border-color);
    background: var(--filter-bg);
}

.filter-btn {
    flex: 1;
    padding: 15px;
    border: none;
    background: transparent;
    cursor: pointer;
    font-size: 0.9rem;
    transition: all 0.3s;
    color: var(--text-secondary);
}

.filter-btn.active {
    background: var(--primary);
    color: white;
}

.filter-btn:not(.active):hover {
    background: var(--filter-hover);
}

/* Task list */
.task-list {
    list-style: none;
    max-height: 400px;
    overflow-y: auto;
}

.task-item {
    display: flex;
    align-items: center;
    padding: 15px;
    border-bottom: 1px solid var(--border-color);
    animation: fadeIn 0.3s ease-in;
    background: var(--container-bg);
    color: var(--text-color);
}

.task-item:last-child {
    border-bottom: none;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
}

.task-checkbox {
    margin-right: 15px;
    width: 18px;
    height: 18px;
    cursor: pointer;
}

.task-text {
    flex: 1;
    font-size: 1.1rem;
    transition: all 0.3s;
}

.task-item.completed .task-text {
    text-decoration: line-through;
    color: var(--completed-text);
}

.delete-btn {
    background: var(--delete-bg);
    color: white;
    border: none;
    padding: 8px 12px;
    border-radius: 3px;
    cursor: pointer;
    font-size: 0.8rem;
    transition: background 0.3s;
}

.delete-btn:hover {
    background: var(--delete-hover);
}

/* Task stats */
.task-stats {
    padding: 20px;
    background: var(--filter-bg);
    text-align: center;
    font-size: 0.9rem;
    color: var(--text-secondary);
}

/* Responsive design */
@media (max-width: 768px) {
    .input-section {
        flex-direction: column;
    }

    .header h1 {
        font-size: 2rem;
    }

    .filters {
        flex-direction: column;
    }

    .header {
        padding: 20px;
    }

    .theme-toggle {
        position: absolute;
        top: 15px;
        right: 15px;
    }
}
```

### Key CSS Features:
- **Modern gradient background**: Creates visual appeal
- **Responsive design**: Adapts to different screen sizes
- **Smooth animations**: Enhances user experience
- **Clean typography**: Easy to read text
- **Interactive states**: Hover effects for buttons
- **Flexbox layout**: Modern CSS layout techniques
- **CSS Variables**: For easy theming and dark mode support
- **Dark mode support**: Complete theme with different color scheme
- **Smooth transitions**: Between themes and states

## JavaScript Functionality

The JavaScript handles all interactive functionality:

```javascript
class SmartTodoApp {
    constructor() {
        this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        this.currentFilter = 'all';
        this.darkMode = JSON.parse(localStorage.getItem('darkMode')) || false;
        this.initializeElements();
        this.bindEvents();
        this.applyDarkMode();
        this.render();
    }

    initializeElements() {
        this.taskInput = document.getElementById('task-input');
        this.addTaskBtn = document.getElementById('add-task-btn');
        this.taskList = document.getElementById('task-list');
        this.taskCount = document.getElementById('task-count');
        this.filterButtons = document.querySelectorAll('.filter-btn');
        this.darkModeToggle = document.getElementById('dark-mode-toggle');
    }

    bindEvents() {
        this.addTaskBtn.addEventListener('click', () => this.addTask());
        this.taskInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.addTask();
        });

        this.filterButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                this.setFilter(e.target.dataset.filter);
            });
        });

        // Dark mode toggle event
        if (this.darkModeToggle) {
            this.darkModeToggle.addEventListener('click', () => this.toggleDarkMode());
        }
    }

    addTask() {
        const text = this.taskInput.value.trim();
        if (text) {
            const task = {
                id: Date.now(),
                text: text,
                completed: false,
                createdAt: new Date()
            };
            this.tasks.unshift(task);
            this.taskInput.value = '';
            this.saveTasks();
            this.render();
        }
    }

    deleteTask(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
        this.saveTasks();
        this.render();
    }

    toggleTask(id) {
        this.tasks = this.tasks.map(task => {
            if (task.id === id) {
                return { ...task, completed: !task.completed };
            }
            return task;
        });
        this.saveTasks();
        this.render();
    }

    setFilter(filter) {
        this.currentFilter = filter;
        this.filterButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.filter === filter);
        });
        this.render();
    }

    getFilteredTasks() {
        switch (this.currentFilter) {
            case 'active':
                return this.tasks.filter(task => !task.completed);
            case 'completed':
                return this.tasks.filter(task => task.completed);
            default:
                return this.tasks;
        }
    }

    saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

    // Dark mode functionality
    toggleDarkMode() {
        this.darkMode = !this.darkMode;
        localStorage.setItem('darkMode', JSON.stringify(this.darkMode));
        this.applyDarkMode();
    }

    applyDarkMode() {
        if (this.darkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }

    render() {
        this.renderTasks();
        this.renderTaskCount();
    }

    renderTasks() {
        const filteredTasks = this.getFilteredTasks();
        this.taskList.innerHTML = '';

        if (filteredTasks.length === 0) {
            this.taskList.innerHTML = '<li class="no-tasks">No tasks found</li>';
            return;
        }

        filteredTasks.forEach(task => {
            const li = document.createElement('li');
            li.className = `task-item ${task.completed ? 'completed' : ''}`;
            li.innerHTML = `
                <input type="checkbox" class="task-checkbox" ${task.completed ? 'checked' : ''}>
                <span class="task-text">${this.escapeHtml(task.text)}</span>
                <button class="delete-btn">Delete</button>
            `;

            const checkbox = li.querySelector('.task-checkbox');
            const deleteBtn = li.querySelector('.delete-btn');

            checkbox.addEventListener('change', () => this.toggleTask(task.id));
            deleteBtn.addEventListener('click', () => this.deleteTask(task.id));

            this.taskList.appendChild(li);
        });
    }

    renderTaskCount() {
        const activeTasks = this.tasks.filter(task => !task.completed).length;
        this.taskCount.textContent = `${activeTasks} ${activeTasks === 1 ? 'task' : 'tasks'} remaining`;
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}

// Initialize the app when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new SmartTodoApp();
});
```

### Key JavaScript Features:
- **ES6 Class structure**: Organized code with clear methods
- **Local storage**: Persists tasks between sessions
- **Task filtering**: Filter by all/active/completed
- **Event delegation**: Efficient event handling
- **Input validation**: Prevents empty tasks
- **Security**: HTML escaping to prevent XSS
- **Responsive design**: Works on all devices
- **Dark mode support**: Toggle between light and dark themes

## Implementation Goals

This Smart To-Do List App implements the following core goals:

### 1. Task Input UI
- Clean, accessible input field with placeholder text
- Visual feedback on focus with border color change
- Support for both button click and Enter key submission
- Input validation to prevent empty tasks
- Proper semantic HTML structure for accessibility

### 2. Task List Rendering
- Dynamic rendering of tasks using JavaScript DOM manipulation
- Visual distinction between completed and active tasks
- Smooth animations for task addition
- Filter functionality to show all/active/completed tasks
- Empty state handling when no tasks exist

### 3. Complete / Delete Actions
- Checkbox toggle to mark tasks as complete/incomplete
- Visual styling changes for completed tasks (line-through, color change)
- Delete button with confirmation-free removal
- Immediate UI update after actions
- Proper event delegation for dynamically added elements

### 4. LocalStorage Persistence
- Save tasks to browser's localStorage
- Load tasks on app initialization
- Maintain data between browser sessions
- Separate storage for dark mode preference
- JSON serialization for complex data structures

### 5. Dark Mode Support
- Toggle button to switch between light and dark themes
- Automatic preference saving to localStorage
- CSS variables for consistent theming
- Smooth transitions between themes
- System preference awareness (optional enhancement)

## AI-Driven Development Process

This project demonstrates structured AI-driven development:

### 1. Planning Phase
- Define clear requirements and features
- Plan the tech stack (HTML, CSS, vanilla JS)
- Consider user experience and accessibility

### 2. Implementation Phase
- Create semantic HTML structure
- Implement clean, responsive CSS
- Build modular JavaScript functionality
- Ensure cross-browser compatibility

### 3. Testing Phase
- Test functionality across browsers
- Verify responsive design
- Check local storage persistence
- Validate form inputs

### 4. Optimization Phase
- Improve performance
- Enhance user experience
- Add accessibility features
- Optimize for maintainability

### 5. Documentation Phase
- Create comprehensive documentation
- Explain code structure and functionality
- Provide clear setup instructions

## Design System

This Smart To-Do List App follows a consistent design system to ensure visual harmony and maintainability.

### Color Palette

#### Primary Colors
- **Blue (Primary)**: `#667eea` - Used for primary buttons, active states, and highlights
- **Blue Dark**: `#5a67d8` - Hover states for primary elements
- **Blue Light**: `#c3dafe` - Subtle backgrounds and borders

#### Secondary Colors
- **Gray (Secondary)**: `#4a5568` - Headers, borders, and secondary elements
- **Gray Light**: `#718096` - Text on light backgrounds
- **Gray Medium**: `#a0aec0` - Disabled states and subtle borders
- **Gray Lighter**: `#e2e8f0` - Backgrounds and dividers
- **Gray Extra Light**: `#f7fafc` - Page backgrounds and subtle highlights

#### Status Colors
- **Red**: `#e53e3e` - Delete buttons and error states
- **Red Dark**: `#c53030` - Hover states for delete buttons
- **Green**: `#48bb78` - Success states (optional)
- **Yellow**: `#ecc94b` - Warning states (optional)

### Spacing System

The app uses an 8px base spacing system for consistent layout:

- **Base Unit**: 8px
- **Extra Small**: 4px (0.5rem) - Small padding, margins
- **Small**: 8px (1rem) - Default padding, small margins
- **Medium**: 16px (2rem) - Section padding, element spacing
- **Large**: 24px (3rem) - Large margins, container padding
- **Extra Large**: 32px (4rem) - Major section spacing

CSS Variables:
```css
:root {
  --spacing-xs: 0.25rem; /* 4px */
  --spacing-sm: 0.5rem;  /* 8px */
  --spacing-md: 1rem;   /* 16px */
  --spacing-lg: 1.5rem; /* 24px */
  --spacing-xl: 2rem;   /* 32px */
}
```

### Typography Scale

A simple, readable typography scale based on the golden ratio:

- **Heading 1**: 2.5rem (40px) - Main page title
- **Heading 2**: 2rem (32px) - Section headings
- **Heading 3**: 1.5rem (24px) - Subsection headings
- **Body Large**: 1.25rem (20px) - Important text
- **Body**: 1rem (16px) - Standard text
- **Body Small**: 0.875rem (14px) - Secondary text
- **Caption**: 0.75rem (12px) - Labels, metadata

CSS Variables:
```css
:root {
  --font-size-h1: 2.5rem;
  --font-size-h2: 2rem;
  --font-size-h3: 1.5rem;
  --font-size-large: 1.25rem;
  --font-size-base: 1rem;
  --font-size-small: 0.875rem;
  --font-size-caption: 0.75rem;
}
```

### Button Styles

#### Primary Button
- Background: `#667eea` (blue)
- Hover: `#5a67d8` (darker blue)
- Text: White
- Padding: 15px 25px
- Border-radius: 5px
- Font-size: 1rem
- Transition: background 0.3s

#### Secondary Button (Filter)
- Background: Transparent
- Hover: `#edf2f7` (light gray)
- Active: `#667eea` (blue) with white text
- Text: `#4a5568` (gray) or white when active
- Padding: 15px
- Border: None
- Cursor: pointer

#### Danger Button (Delete)
- Background: `#e53e3e` (red)
- Hover: `#c53030` (darker red)
- Text: White
- Padding: 8px 12px
- Border-radius: 3px
- Font-size: 0.8rem

### Card Styles

#### Container Card
- Background: White
- Border-radius: 10px
- Box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2)
- Overflow: Hidden
- Max-width: 600px
- Margin: 0 auto

#### Task Item Card
- Display: Flex
- Align-items: center
- Padding: 15px
- Border-bottom: 1px solid `#e2e8f0` (light gray)
- Animation: fadeIn 0.3s ease-in
- Background: White

#### Completed Task Style
- Text: Line-through decoration
- Color: `#a0aec0` (medium gray)
- Opacity: 0.7

### Responsive Breakpoints

- **Mobile**: Up to 768px
- **Tablet**: 769px to 1024px
- **Desktop**: 1025px and above

## Learning Objectives

By completing this project, you will learn:

1. **HTML Fundamentals**
   - Semantic markup
   - Form elements
   - List structures

2. **CSS Skills**
   - Flexbox layout
   - Responsive design
   - Animations and transitions
   - Modern CSS techniques
   - Design system implementation

3. **JavaScript Concepts**
   - ES6 classes
   - DOM manipulation
   - Event handling
   - Local storage API
   - Array methods

4. **Development Best Practices**
   - Code organization
   - Security considerations (XSS prevention)
   - Accessibility
   - Performance optimization
   - Design system consistency

5. **AI Integration**
   - Structured development approach
   - Planning and documentation
   - Iterative improvement

## Next Steps

To extend this project, consider adding:

- Task categories or tags
- Due dates and reminders
- Priority levels
- Drag and drop reordering
- Export functionality
- Dark mode toggle
- Search functionality
- Task editing
- Collaboration features

## Conclusion

This Smart To-Do List App provides a solid foundation for learning web development with vanilla JavaScript. The clean, minimal design focuses on functionality while demonstrating modern development practices. The structured approach makes it easy to extend and maintain.