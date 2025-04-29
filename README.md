# CheckIP

A Cloudflare Workers application that provides IP address information services.

## Overview

CheckIP is built using [Hono](https://hono.dev/) framework and deployed on Cloudflare Workers. It allows you to check and analyze IP address information.

## Features

- IP address detection
- Cloudflare-powered edge deployment
- Type-safe development with TypeScript

## Getting Started

### Prerequisites

- Node.js
- npm
- A Cloudflare account

### Installation

Install all dependencies:

```txt
npm install
npm run dev
```

```txt
npm run deploy
```

[For generating/synchronizing types based on your Worker configuration run](https://developers.cloudflare.com/workers/wrangler/commands/#types):

```txt
npm run cf-typegen
```

Pass the `CloudflareBindings` as generics when instantiation `Hono`:

```ts
// src/index.ts
const app = new Hono<{ Bindings: CloudflareBindings }>()
```
