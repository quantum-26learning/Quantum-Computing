# QMC Laboratory

**Interactive 3D visualization of a Quantum Measurement and Control Laboratory — built for public science outreach and education.**

![Status](https://img.shields.io/badge/status-in%20development-yellow)

---

## About

Quantum computing is one of the most talked-about technologies of our time, yet very few people — including most engineering students — have ever seen what an actual quantum measurement lab looks like. These labs are rare, expensive, and largely inaccessible to the public.

**QMC Laboratory** is an interactive, web-based 3D experience that recreates a real quantum measurement and control lab setup, allowing anyone to explore the equipment, understand the experiments, and see how qubits are characterized and measured — without needing physical access to a lab.

This project is being built in collaboration with a research team, with the goal of making quantum experimental physics visually understandable to students and the general public.

## Features

- **Interactive 3D lab model** — explore a dilution refrigerator, control electronics, and measurement setup, built entirely with Three.js
- **Laboratory Overview** — a guided visual walkthrough of the full signal chain, from classical control hardware to qubit readout
- **Experiments** — explore real measurement protocols:
  - **Frequency Domain:** 1-Tone Spectroscopy, 2-Tone Spectroscopy
  - **Time Domain** *(coming soon)*: Rabi Oscillations, Ramsey Interference, T1 Relaxation
- **About Us** — meet the team behind the project

## Tech Stack

- [Vite](https://vitejs.dev/) — build tool & dev server
- [Three.js](https://threejs.org/) — 3D rendering
- [GSAP](https://gsap.com/) — animation
- HTML / CSS / JavaScript

## Getting Started

Clone the repo and install dependencies:

```bash
git clone https://github.com/quantum-26learning/quantum-measurement-lab.git
cd quantum-measurement-lab
npm install
```

Run the development server:

```bash
npm run dev
```

Then open the local URL shown in your terminal (usually `http://localhost:5173`) in your browser.

## Project Status

 This project is in active development. The 3D lab model and camera navigation are functional; the guided signal-flow animation, interactive experiment controls, and website structure are currently being built.

## Team
...

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

## Acknowledgements

Inspired by real quantum measurement and control laboratory work, built to make quantum experimental physics accessible to students and the public.
