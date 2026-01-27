/// <reference types="vite/client" />

declare module '*.png' {
  const src: string
  export default src
}

declare module '*.md?url' {
  const src: string
  export default src
}

declare module '*.md?raw' {
  const src: string
  export default src
}

