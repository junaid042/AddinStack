# AddinStack

> Open Source Office Add-in Framework  
> Building the foundation for a “Next.js for Office”

---

## Vision

AddinStack aims to become a modern, extensible framework for building Microsoft Office Add-ins with:

- Structured architecture
- Plugin-based extensibility
- Strict runtime validation
- Developer-first API
- Official host plugins (Excel, Word, Outlook)
- Future CLI & dev tooling

This project is currently in early foundational stage.

---

# What Has Been Built So Far

## 1. Core Runtime (`@addinstack/core`)

Provides:

- `createAddinStack()`
- Config system
- Strict mode
- Lifecycle management
- Plugin architecture
- Context injection system

---

## 🔧 Core Usage

```ts
import { createAddinStack } from "@addinstack/core";

const app = createAddinStack({
  strict: true,
  debug: true
});

await app.start();
````

---

## ⚙️ Configuration

```ts
createAddinStack({
  strict: true,     // throw errors instead of logging
  debug: true,      // enable debug logs
  requiredHost: "Excel"
});
```

---

## 🔌 Plugin System

AddinStack supports a structured plugin architecture.

```ts
import type { AddinStackPlugin } from "@addinstack/core";

const myPlugin: AddinStackPlugin = {
  name: "my-plugin",

  setup({ config, app }) {
    console.log("Setup", config);
  },

  onReady() {
    console.log("Ready");
  },

  onError(error) {
    console.error(error);
  }
};

app.use(myPlugin);
```

### Plugin Lifecycle

| Hook      | Purpose                   |
| --------- | ------------------------- |
| `setup`   | Runs before Office ready  |
| `onReady` | Runs after initialization |
| `onError` | Global error handler      |

---

## Official Excel Plugin (`@addinstack/excel`)

The first official host plugin.

### Features:

* Ensures host = Excel
* Wraps `Excel.run`
* Injects `app.excel` API
* Works with strict mode

### Usage:

```ts
import { createAddinStack } from "@addinstack/core";
import { excelPlugin } from "@addinstack/excel";

const app = createAddinStack({ strict: true });

app.use(excelPlugin());

await app.start();

await app.excel.run(async (ctx) => {
  const sheet = ctx.workbook.worksheets.getActiveWorksheet();
  sheet.getRange("A1").values = [["Hello AddinStack"]];
});
```

---

# Architecture Overview

```
packages/
 ├── core
 │   ├── runtime
 │   ├── plugins
 │   ├── init
 │   └── requirements
 │
 └── excel
     └── Excel host plugin
```

### Core Responsibilities

* Office initialization
* Config management
* Strict runtime mode
* Plugin management
* App extension system

---

# Current Status

AddinStack is currently:

✔ Runtime foundation
✔ Plugin-based architecture
✔ Excel host integration
✔ Strict validation support

It is **not yet**:

* CLI-based framework
* Dev server
* Manifest generator
* File-based routing
* Production build system

Those are part of the long-term vision.

---

# Roadmap (Planned)

* Word Plugin
* Outlook Plugin
* Requirement auto-check system
* Event Bus system
* Middleware system
* CLI (`addinstack create`, `addinstack dev`)
* Dev server with hot reload
* Manifest builder
* Production bundler

---

# 🤝 Contributing

AddinStack is early-stage and evolving.

Ideas, issues, and contributions are welcome.
