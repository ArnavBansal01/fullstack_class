# College Web Projects Collection

This repository contains multiple small web projects collected for college submissions. Each folder is a separate project (HTML, CSS, JavaScript, and one React project). Use the instructions below to preview or run each project locally.

## Projects Overview

- `class/` — small static pages and examples (index.html, script.js, style.css).
- `Job portal/` — job portal static site (home, login, signup, post pages, styles, and JS).
- `job portal in react/` — React-based job portal (see `react/` inside for sources and `package.json`).
- `lab mst/` — single-page example with `index.html` and `script.js`.
- `resume/` — resume HTML and CSS.
- `pyt.py` — a Python file included in the root (not used by the HTML projects).

## How to Preview

Option 1 — Open in browser

- Open the relevant `index.html` file in a browser (double-click or right-click → Open with...).

Option 2 — Use a simple local server (recommended)

From the repository root run one of the following commands and open http://localhost:8000:

```bash
# Python 3
python -m http.server 8000

# Or using Node.js serve (if installed)
npx serve -s . 8000
```

Then navigate to the subfolder you want to view, e.g. `class/index.html` or `Job portal/home.html`.

## Running the React Project

The React project is under `job portal in react/react`.

```bash
cd "job portal in react/react"
npm install
npm start
```

## Structure (root)

See the workspace folders at the repository root for each mini-project. Each folder contains its own `index.html` or entry point.

## Contribution

- This repository is for personal/college submission use. If you want to improve the projects, open an issue or submit a pull request with clear descriptions of changes.

## License

This collection is provided under the MIT License — see LICENSE or add one if required by your college.

---

If you'd like, I can (1) improve one specific project's README, (2) add a LICENSE file, or (3) generate brief comments in the JS files explaining their behavior. Which would you prefer next?
