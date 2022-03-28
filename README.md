# github-users-test

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

## Project Comments
1. For better performance in a real project it would be reasonable to handle button clicks with throttle
1. In a real project I would rather use prepared tools like cross-fetch to use it with the same interface on both server and client side for SSR-projects
1. For better UI token might be placed to cookies to not make user authorize every time after page reloading
1. Request and render only 20 first repost, but there might be different solutions depending on customer's wishes:
    1. paging
    1. button to download more results
    1. filter results
    1. add another input to dynamically set the amount of requested repos
1. Searching for repositories contributors is impossible or at list my account does not have a permission for it. It would be an important point to discuss with a Customer.
1. I added settings for unit tests. Despite I did not write tests, for a real project it is a crucial point. There is also a good approach to create CI/CD pipelines with E2E-tests.
