# DemoTodoList — Intro to React Workshop

This is a small Todo app demo for our Intro to React workshop. 

It demonstrates foundational React concepts like component composition, state, and simple event handling.

## Try It Out

You can see the final product [here](https://shivaunbartoo.github.io/Intro-to-React-Demo-Todo-List/)

## Project structure

```
DemoTodoList/
    .gitignore       — ignored files for git
    package.json     — scripts + deps
    vite.config.js   — Vite + React plugin
    eslint.config.js — eslint rules
    index.html       — Entry point: React mounts here
    readme.md        — project README
    src/             — app source
        main.jsx        — app bootstrap script (mounts App)
        index.css       — global fonts / root styles
        App.jsx         — top-level page; renders TodoList
        App.css         — global layout styles
        components/     — UI pieces
            TodoList/
                TodoList.jsx — parent component: renders todo list and manages list state.
                TodoList.css — styles for TodoList
            ListItem/
                ListItem.jsx — component representing a single row of the todo list
                ListItem.css — styles for the ListItem
```

## Run the demo
1. Install deps:
   `npm install`
2. Start dev server:
   `npm run dev`
3. Open the URL Vite prints (usually http://localhost:5173)

