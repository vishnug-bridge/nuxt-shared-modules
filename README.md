# nuxt-shared-modules

---

## 📦 Installation

Install from GitHub:

```bash
npm install git+ssh://git@github.com:your-org/nuxt-shared-modules.git
```

Or (if public):

```bash
npm install https://github.com/your-org/nuxt-shared-modules.git
```

---

## 🚀 Usage

In your **Nuxt 2 parent project**, add the shared module like this:

### Example: Importing Dashboard module

```js
// nuxt.config.js
export default {
  modules: [[
    'nuxt-shared-modules/dashboard', {
      base_url: 'https://api.project1.com',
      token: 'Bearer 12345',
      api: '/dashboard'
    }]
  ],
};
```

Now you can use the shared **Dashboard** components in your pages:

```vue
<template>
  <div>
    <DashboardHome name="hello" />
  </div>
</template>
```

### Example: Importing Tasks module

```js
// nuxt.config.js
export default {
  modules: [[
    'nuxt-shared-modules/tasks', {
      base_url: 'https://api.project2.com',
      token: 'Bearer 67890',
      api: '/tasks'
    }]
  ],
};
```

---

## 📂 Project Structure (inside this package)

```
nuxt-shared-modules/
├── dashboard/
│   └── index.js
├── tasks/
│   └── index.js
├── index.js
├── package.json
└── README.md
```

* `dashboard/` → contains the shared dashboard module
* `tasks/` → contains the shared tasks module
* `index.js` → entry point that exports available modules

---

## 📜 package.json (with exports)

```json
{
  "name": "nuxt-shared-modules",
  "version": "1.0.3",
  "main": "index.js",
  "files": [
    "dashboard",
    "tasks",
    "index.js"
  ],
  "peerDependencies": {
    "nuxt": "^2.15.0"
  },
  "exports": {
    "./dashboard": "./dashboard/index.js",
    "./tasks": "./tasks/index.js"
  }
}
```

---

## 🔧 Local Development (using npm link)

While building your shared module, you can use `npm link` for live development.

```bash
# In shared module project
cd nuxt-shared-modules
npm link

# In parent Nuxt project
cd ../your-parent-project
npm link nuxt-shared-modules
```

✅ Now, any changes you make inside `nuxt-shared-modules` will reflect instantly in the parent project without pushing to GitHub or reinstalling.

To undo the link later:

```bash
cd ../your-parent-project
npm unlink nuxt-shared-modules
npm install
```

---

## 🛠 Updating via GitHub

If not using `npm link`, after making changes:

```bash
# In shared module repo
cd nuxt-shared-modules
git add .
git commit -m "update: added new feature to dashboard"
git push origin main
```

Then in your parent Nuxt project:

```bash
cd your-parent-project
npm install git+ssh://git@github.com:your-org/nuxt-shared-modules.git
```

---

## 🛠 Publishing to npm (optional)

To publish a new version:

```bash
# Bump version in package.json (major | minor | patch)
npm version patch

# Publish
npm publish --access public
```
