## NextJS 14 Blog App (Tutorial)

This repository is the product of having followed the video of [Next.js 14 Complete Course 2024 | Next.js 14 Full Stack App Tutorial for Beginners](https://www.youtube.com/watch?v=vCOSTG10Y4o&t=8s&ab_channel=LamaDev). Which serves as a fairly complete introduction to Next Js in version 14.

### **What will be seen?**

* How to install it
* Folder Structure of the app
* App Router
* Layouts
* How to Style the App
* Rendering: Client vs Server Components
* Hydration errors (how to solve them)
* Navigation (Link, useRouter, useParams, useSearchParams, etc)
* How to Fetch Data
* SEO
* Server Actions
* API Routes
* Authentication
* Hook: useFormState
* Middlewares

### **Stack**

* Next
* MongoDB (Mongoose)
* Next-Auth

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```


run the development server:

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

### **Important aspects to take into consideration**

* Unlogged users will only be able to access the following pages: Homepage, About & Contact

* Logged in users will be able to access the Blogs site, where the list of publications and their details is located.

* Admin users are the ones who can access the 'Admin' section, where they can create and delete publications or users.