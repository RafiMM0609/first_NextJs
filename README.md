# Learn "NextJs" for front-end

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.


## Basic knowloedge

1. pages/: Contains the application's pages. Each file in this directory becomes a route in your app.
1. public/: Stores static assets like images, which are served from the root URL.
1. styles/: Contains global and component-level styles.

## My Notes (cmiww)

1. put my code about pages in src/pages
2. name it like the directory for example ('/login') so you can give it name login.tsx
3. if you want to add css style, just add login.module.css
4. it can be more help full if each page has its own css ( i think )
5. _app.tsx like something that help me to easyly apply navbar to all my pages, maybe we can also add footbar


## nextjs using ts

1. usualy in every top of page i do 

```
import React from 'react';
```

2. then add variable that return something (like pages landscape)

```
const AboutPage: React.FC = () => {
  return (
    // make your own page here buddy
  );
};
export default AboutPage;
```

3. honestly i still learn, what the meaning of React.FC
4. usually i use <main> at start and </main> for the end
5. then we can add <section> or <div> what ever we want
6. if we use variable that will be proccesed using ts (not only html) we must state it like 

```
  const [firstName, setName] = useState('xixixr');
  const [password, setPass] = useState('password123');
```
7. also if we want to use logic we need to declare var function for example

```
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the default form submission
    // Handle form submission logic here
    console.log('Submitted:', { firstName, password });
  };
```

8. selected css style (usually we use it by do ```className```) can be used in 
    - <main>
    - <div>

