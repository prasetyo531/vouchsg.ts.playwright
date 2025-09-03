# Snake Game 🐍

A classic Snake game built with Node.js and HTML5 Canvas, featuring modern web technologies and a clean, responsive design.

## What We're Looking For:

- Your approach to identifying test scenarios:
  `in this case, i separate scenario functional and end to end. its align with concept atomic test, so test will cheaper in terms of effort.`
- How you structure your test code:
  `i put test in same repository of app, so we dont need clone again`
- Your creativity in finding edge cases:
  `you can just refer to /e2e for scenario end to end and /ui for scenario functional`
- Your code organization and readability:
  `it can separated into base layer, page layer with pom`

## Installation

1. Clone the repository:
```bash
git clone git@github.com:josephvouch/vouch_snake.git
cd vouch_snake
```

2. Install dependencies:
```bash
npm install
```

3. Start the server: (optional = during test, server will run automatically)
```bash
npm start
```

4. Open your browser and navigate to:
```
http://localhost:3456
```

## How to Test

1. Change to directory test
```bash
cd test
```

2. Install dependencies:
```bash
npm install
```

3. Run test
```bash
npm run test
```

4. Run debug
```bash
npm run test:debug
```

---

Enjoy the testing