# Stack

This is an opinionated and extended t3-turbo stack, which includes:

### ⏱️ [T3-TURBO](https://github.com/t3-oss/create-t3-turbo)

- [x] WebUI:
  - [x] [ReactJS](https://react.dev/) / [NextJS](https://nextjs.org/)
  - [x] [NextAuth](https://next-auth.js.org/)
    - [ ] 2fa (with Google Athenticator Codes)
    - [ ] email / password auth
    - [ ] Auth with Facebook
    - [ ] Auth with Google
    - [ ] Auth with Apple
    - [ ] Auth with Microsoft
    - [ ] Auth with Twitter
    - [ ] JWT
    - [ ] Roles + RBAC (Role Based Access Control)
- [x] Mobile: [ReactNative](https://reactnative.dev/) / [Expo](https://expo.dev/)
- [x] API Query / cache / state managment: [tRPC](https://trpc.io/) with [React Query](https://tanstack.com/query/v3/)
  - [ ] Global state management: [Zustand](https://zustand-demo.pmnd.rs/)
- [x] JavaScript superset with strong typying: [TypeScript](https://www.typescriptlang.org/)
  - [x] Fix some TS issues: [ts-reset](https://github.com/total-typescript/ts-reset)
- [x] CSS library: [TailwindCSS](https://tailwindcss.com/)
- [x] Param validation: [Zod](https://zod.dev/)
- [x] ORM for SQL and NoSQL: [Prisma](https://www.prisma.io/)
- [x] Monorepo: [Turborepo](https://turbo.build/repo)
- [x] Package Manager: [pnpm](https://pnpm.io/)

_plus more:_

### 🪪 UI

- [ ] [Figma](https://www.figma.com/)
- [ ] [Atomic Design](https://atomicdesign.bradfrost.com/chapter-2/)
- [ ] [Storybook](https://storybook.js.org/)
- [ ] [shadcn/ui](https://ui.shadcn.com/) ([RadixUI](https://www.radix-ui.com/) + [TailwindCSS](https://tailwindcss.com/) + [tailwind-merge](https://github.com/dcastil/tailwind-merge) + [Class Variance Authority](https://github.com/joe-bell/cva) + [clsx](https://github.com/lukeed/clsx))
- [ ] Snackbar / notifications: [React Hot Toast](https://react-hot-toast.com/)
- [ ] Form handler: [Formik](https://formik.org/) or [React Hook Form](https://react-hook-form.com/) (both works with Zod)
- [ ] Icons: [Lucide](https://lucide.dev/) and / or [react-icons](https://react-icons.github.io/react-icons/)
- [ ] Animations: [Framer Motion](https://www.framer.com/motion/) and / or [react-spring](https://www.react-spring.dev/) and / or [react-animations](https://github.com/FormidableLabs/react-animations) and / or [GreenSock](https://greensock.com/)
- [ ] _DreamUI (customly build UI library on top of shancn, with form handlers, snackbar, i18n/rtl, etc.)_

### ✅ Quality

- [x] Git hooks: [husky](https://typicode.github.io/husky/#/)
  - [x] [lint-staged](https://github.com/okonet/lint-staged) & .lintstagedrc
  - [x] [lintcommit](https://commitlint.js.org/)
- [x] Code formatter: [Prettier](https://prettier.io/)
- [x] Code linting: [ESLint](https://eslint.org/)
- [x] Code linting: [SonarLint](https://www.sonarsource.com/products/sonarlint/) (added as recommended VSCode extension)
- [ ] Static code analysis: [SonarQube](https://www.sonarsource.com/products/sonarqube/)
- [x] Git Commit messages: [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) & [lintcommit](https://commitlint.js.org/)
- [x] Git Branch Name Convesions: [validate-branch-name](https://github.com/JsonMa/validate-branch-name#readme)
- [ ] Code monitoring, logging and alerting: [Sentry](https://sentry.io/welcome/)
- [ ] System metrics, monitoring and alerting [Prometheus](https://prometheus.io/) + [Grafana](https://grafana.com/)
- [ ] Vulnerabilities checker: [Snyk](https://snyk.io/)
- [ ] Audits for performance, accessibility, progressive web apps, SEO, and more: [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/#cli)

### 🔍 Tesing

- [ ] Unit / Integration testing: [Jest](https://jestjs.io/)
- [ ] UI testing: [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) & [React Native Testing Library](https://testing-library.com/docs/react-native-testing-library/intro)
- [ ] e2e testing: [Cypress](https://www.cypress.io/)
- [ ] API testing: [Postman](https://www.postman.com/)

### 📚 Documentation

- [ ] UI documentation: [Storybook](https://storybook.js.org/)
- [ ] API documentation: [Swagger](https://swagger.io/) & [Postman](https://www.postman.com/)
- [ ] Other markdown docs: [Docusaurus](https://docusaurus.io/) or [Nextra](https://nextra.site/)

### 💭 Backend / Cloud

- [ ] Microservices: [NestJS](https://nestjs.com/)
- [ ] Realtime notifications / chat: [Pusher](https://pusher.com/)
- [ ] Caching: [Redis](https://redis.io/) + [Upstash](https://upstash.com/)
- [ ] File upload: [S3](https://aws.amazon.com/s3/?nc1=h_ls)
- [ ] Send emails: [Nodemailer](https://nodemailer.com/about/) + [SendGrid](https://sendgrid.com/)
- [ ] Full text serach: [ElasticSearch](https://www.elastic.co/enterprise-search)

### 🛠️ Other

- [ ] i18n / rtl support
- [ ] [Row Level Security](https://www.postgresql.org/docs/current/ddl-rowsecurity.html)

# Useful resources:

- [NPM Trends](https://npmtrends.com/) can be used if you need to complare multiple npm packages to pick from
