# Lab: Product Dashboard Manager

## Introduction

Your company is developing an **e-commerce platform**, and you have been assigned to create a **Product Dashboard**. This dashboard will dynamically display a list of products, allow users to filter products by availability, and apply **conditional rendering** to display different UI states.

Your goal is to structure the React components, apply styles using **CSS Modules and Material UI**, and ensure that the dashboard passes all pre-written automated tests using **Jest and React Testing Library**.

## First, Some Feedback

- The forked README instructions don't really match the exercise for the lab, which is applying rendering conventions and styling. The forked instructions include tasks with DOM manipulation instead of using React app structing best practices. 
- The "remove elements" task is included as a challenge but it is a requirement to pass the AutoTest: remove product from dashboard when "Remove" button is clicked.  
- Both filtering and removing products tasks requires prior knowledge on state and event handlers, which had not been covered yet in the prior modules.
- It would have been nice to have instructions on using Material UI, since it it recommended to use both CSS styling and Material UI to style the application. 
- (As we saw together) The out-of-stock test is not very clear. 

##  Component Files

Contains following component files:
- `App.jsx`
- `/src/components/ProductList.jsx`
- `/src/components/ProductCard.jsx`

## Styling

Contains the following styling files:
- `App.css`
- `/src/styles/ProductCard.module.css`

## Setup

Run the following commands to render the UI:
```
   npm install
   npm run dev

```
To terminate the UI rendering, go the open terminal and click Ctrl + C, then click Y to confirm.

## Testing

In a new terminal, run the following command:
```
   npm run test

```