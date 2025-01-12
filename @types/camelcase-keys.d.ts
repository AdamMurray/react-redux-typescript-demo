// Type definitions for camelcase-keys 4.0
// Project: https://github.com/sindresorhus/camelcase-keys#readme
// Definitions by: Mohamed Hegazy <https://github.com/mhegazy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// export default camelcaseKeys
// declare function camelcaseKeys(
//   input: any,
//   options?: { exclude?: string[] | RegExp[]; deep?: boolean }
// ): any

declare module 'camelcase-keys' {
  export default function camelcaseKeys(
    input: any,
    options?: { exclude?: string[] | RegExp[]; deep?: boolean }
  ): any
}
