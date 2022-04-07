# Typescript tutorial workthrough
Brushing up my typescript skills with a free YT course on TS. 
[Link](https://www.youtube.com/watch?v=BwuLxPH8IDs)

ToDo:
- [x] Installing TypeScript
- [x] Basic Examples
- [ ]  Course Structure:
    - [ ]  Basics
    - [ ]  Compiler Config & Deep dive
    - [ ]  Working with next-gen code
    - [ ]  classes & interfaces
    - [ ]  advanced types & typescript features
    - [ ]  generics
    - [ ]  decorators
    - [ ]  sample project
    - [ ]  namespaces & modules
    - [ ]  webpack & typescript
    - [ ]  3rd party libs
    - [ ]  react & nodejs with typescript
- [ ]  Auto-Compilation Scripts
- [ ]  Testing in Typescript

## Notes
- use `!` to signal that the variable always fetches a value
- use `as` to typecast into a specific type
- Interfaces & Generics
- Meta programming: Decorators
- `<script src="file.js" defer></script>`
    - If `async` is present: The script is downloaded in parallel to parsing the page, and executed as soon as it is available (before parsing completes)
    - If  `defer` is present (and not `async`): The script is downloaded in parallel to parsing the page, and executed after the page has finished parsing
    - If neither `async` or  `defer` is present: The script is downloaded and executed immediately, blocking parsing until the script is completed