# nuxt-shared-modules

---

## 📦 Installation

Install from npm:

```bash
npm install nuxt-shared-modules
```

---

## 🚀 Usage

In your **Nuxt 2 parent project**, add the shared module as you would any other Nuxt module.

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

```vue / nuxt
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

## 🔧 Local Development

While building your shared module, you can use `npm link` to test it locally:

```bash
cd nuxt-shared-modules
npm link

# In your parent Nuxt project
cd ../your-parent-project
npm link nuxt-shared-modules
```

Now any changes you make in `nuxt-shared-modules` will instantly be available in your parent project without republishing.

---

## 🛠 Publishing to npm

To publish a new version:

```bash
# Bump version in package.json (major | minor | patch)
npm version patch

# Publish
npm publish --access public
```
# nuxt-shared-modules
