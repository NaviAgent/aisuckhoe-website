Correct and Optimized: 
The code must work accurately, follow the requested logic, and be optimized for performance.

Beautiful and Clean:
Use consistent syntax and clear indentation (2 or 4 spaces).
Name variables and functions using camelCase or PascalCase as appropriate (camelCase for variables/functions, PascalCase for components/classes).
Add concise, clear comments when explaining complex logic.
Avoid code duplication (follow DRY - Don't Repeat Yourself).

Follow the Mobile First: 
layout and styles apply mobile design and responsive on small screen.

Follow the General Style:
Read the global.css file to apply existing CSS classes or styles (e.g., colors, fonts, spacing) that align with the overall design.
Do not create new styles if a suitable class already exists in global.css.

Based on package.json:
Read the package.json file to identify installed libraries (e.g., React, Tailwind, Axios, etc.) and prioritize using them instead of suggesting new ones.
If a new library is needed, notify me and explain why.

File Structure:
If it’s a component, place it in the components/ directory (if applicable).
If it’s a utility/helper, place it in the utils/ directory.
Separate business logic from the UI whenever possible.
Example: If I request a button, create a <Button /> component using styles from global.css, leveraging libraries from package.json (e.g., React), and ensuring the code is clean and readable.