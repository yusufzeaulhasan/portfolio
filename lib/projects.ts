export type ProjectImage = { src: string; alt: string; caption?: string };

export type ProjectSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  images?: ProjectImage[];
  table?: { header: [string, string]; rows: [string, string][] };
  video?: { src: string; caption: string };
};

export type Project = {
  slug: string;
  numeral: string;
  title: string;
  medium: string;
  year: string;
  summary: string;
  plateImage: string | null;
  plateAlt: string;
  platePlaceholder?: string;
  sections: ProjectSection[];
};

export const projects: Project[] = [
  {
    slug: "multi-sensor-fusion",
    numeral: "I",
    title: "Multi-Sensor Fusion Unit",
    medium: "UWB ranging · MEMS IMU · Error-State Kalman Filter · C · custom PCB",
    year: "2025 – 26",
    summary:
      "A real-time indoor localization system fusing inertial and ultra-wideband measurements with an Error-State Kalman Filter, implemented in C on HYLO — a custom MCU board carrying a DWM3000 UWB module and MEMS IMUs. UBC capstone in partnership with Bosch.",
    plateImage: "/images/hylo_3d.png",
    plateAlt: "3D render of the HYLO Rev 1 localization PCB",
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "A real-time indoor localization system that fuses high-rate inertial measurements with Ultra-Wideband (UWB) ranging using an Error-State Kalman Filter (ESKF). The system targets robust positioning in GNSS-denied environments such as indoor robotics and warehouses.",
          "Built as UBC Electrical Engineering capstone PL-206 in partnership with Bosch, with a team of five. The project spans embedded firmware, estimation theory, PCB design, and offline data analysis.",
        ],
      },
      {
        heading: "Constraints & Approach",
        bullets: [
          "IMU prediction runs at a much higher rate than UWB updates, with asynchronous range arrivals per anchor",
          "Nominal state propagation by IMU integration; error-state formulation keeps the linearized update stable",
          "Sequential UWB measurement updates applied as ranges arrive, with residual gating to reject outliers and packet drops",
          "Attitude represented as a quaternion in the nominal state with small-angle error states",
        ],
        images: [
          {
            src: "/images/ESKF.png",
            alt: "Error-State Kalman Filter structure diagram",
            caption: "ESKF structure — IMU-driven prediction, UWB-driven correction",
          },
        ],
      },
      {
        heading: "HYLO Rev 1 — the hardware",
        paragraphs: [
          "A custom PCB integrating the STM32 MCU, a DWM3000 UWB module, MEMS IMUs, micro-SD logging, and an ESP8266 for wireless telemetry, powered from a 9V–6V6 external input through onboard regulation.",
        ],
        images: [
          {
            src: "/images/hylo_layout.png",
            alt: "Altium 2D layout of the HYLO Rev 1 PCB",
            caption: "Altium layout — Rev 1",
          },
          {
            src: "/images/hylo_3d.png",
            alt: "3D render of the HYLO Rev 1 PCB",
            caption: "3D render — STM32, DWM3000, MEMS IMUs",
          },
        ],
      },
      {
        heading: "Firmware",
        paragraphs: [
          "The embedded firmware schedules fixed-rate IMU prediction and event-driven UWB corrections, with real-time logging for offline evaluation of convergence, drift behavior, and sensitivity to measurement noise.",
        ],
        images: [
          {
            src: "/images/firmware-block-diagram.png",
            alt: "Firmware architecture block diagram",
            caption: "Firmware architecture",
          },
          {
            src: "/images/sensor-data.png",
            alt: "Raw and processed sensor data from the fusion pipeline",
            caption: "Raw and processed sensor data in the fusion pipeline",
          },
        ],
      },
      {
        heading: "Demonstration",
        paragraphs: [
          "The system running live — real-time position estimates from fused IMU and UWB measurements.",
        ],
        video: { src: "/images/fusion-demo.mp4", caption: "Live localization demo" },
      },
      {
        heading: "Showcase",
        paragraphs: [
          "Presented as PL-206 at the UBC Electrical and Computer Engineering capstone showcase with our partner Bosch.",
        ],
        images: [
          {
            src: "/images/capstone-team.jpg",
            alt: "The PL-206 team beside the Multi-Sensor Fusion poster at the UBC capstone showcase",
            caption: "The PL-206 team at the capstone showcase",
          },
        ],
      },
    ],
  },
  {
    slug: "cmos-opamp",
    numeral: "II",
    title: "Two-Stage CMOS Operational Amplifier",
    medium: "Cadence Virtuoso · 45 nm CMOS · fully differential + CMFB",
    year: "2025",
    summary:
      "A two-stage op-amp in a 45 nm process: fully differential first stage with common-mode feedback and a common-source second stage — 47.5 dB DC gain, 616 MHz unity-gain frequency, 61° phase margin.",
    plateImage: "/images/OPAMP_topology.png",
    plateAlt: "Op-amp topology schematic",
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "Designed and simulated a two-stage CMOS operational amplifier in a 45 nm process using Cadence Virtuoso, targeting high open-loop gain, wide unity-gain bandwidth, and stable closed-loop operation under strict power requirements.",
          "The fully differential first stage provides high gain and common-mode rejection, with a dedicated CMFB loop regulating the output common-mode voltage. The common-source second stage increases output swing and load-driving capability.",
        ],
        images: [
          {
            src: "/images/OPAMP_topology.png",
            alt: "Overall two-stage op-amp topology",
            caption: "Overall topology",
          },
          {
            src: "/images/opamp-schematic.png",
            alt: "Transistor-level schematic in Cadence Virtuoso",
            caption: "Transistor-level implementation",
          },
        ],
      },
      {
        heading: "Biasing & DC operating points",
        paragraphs: [
          "DC operating-point simulations verified that every device operates in its intended region and that the CMFB loop establishes the desired output common-mode level. Extracted small-signal parameters were checked against hand calculations of gain and pole locations.",
        ],
        images: [
          { src: "/images/opamp-dc.png", alt: "DC operating points of the op-amp core", caption: "Op-amp core" },
          { src: "/images/cmfb-dc.png", alt: "DC operating points of the CMFB circuit", caption: "CMFB network" },
        ],
      },
      {
        heading: "Frequency response & stability",
        paragraphs: [
          "Small-signal AC simulations evaluated open-loop gain, unity-gain bandwidth, and phase margin; the closed-loop configuration verified stable unity-gain operation. Large-signal transient simulations confirmed slew and settling behavior without sustained oscillation.",
        ],
        images: [
          { src: "/images/open-loop-bode.png", alt: "Open-loop gain and phase response", caption: "Open-loop gain & phase" },
          { src: "/images/closed-loop-bode.png", alt: "Closed-loop Bode plot", caption: "Closed-loop response" },
          { src: "/images/large-signal.png", alt: "Large-signal transient response", caption: "Large-signal step response" },
        ],
      },
      {
        heading: "Achieved performance",
        table: {
          header: ["Parameter", "Achieved"],
          rows: [
            ["Low-frequency gain", "47.5 dB"],
            ["Unity-gain frequency", "616.6 MHz"],
            ["Phase margin", "≈ 61°"],
            ["Slew rate", "28.8 V/µs"],
            ["Total power", "0.396 mW"],
            ["CMFB power", "12.3 µW"],
            ["Differential output swing", "0.5 V"],
            ["Output common-mode", "0.4997 V"],
          ],
        },
        paragraphs: [
          "Values reported from simulation for the final tuned design; results depend on testbench loading, feedback configuration, and process assumptions.",
        ],
      },
    ],
  },
  {
    slug: "rc4-accelerator",
    numeral: "III",
    title: "RC4 Cryptanalysis Accelerator",
    medium: "SystemVerilog · FPGA · coordinated finite-state machines",
    year: "2025",
    summary:
      "A hardware RC4 stream-cipher accelerator implementing the KSA and PRGA across coordinated FSMs, with an automated brute-force system that sweeps 16.7 million keys using dual-port memory and pipelined state machines.",
    plateImage: "/images/fpga-de1soc.jpg",
    plateAlt: "Terasic DE1-SoC FPGA development board (Cyclone V)",
    platePlaceholder: "KSA → PRGA → 16.7M keys",
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "A hardware implementation of the RC4 stream cipher and an automated cryptanalysis engine, written in SystemVerilog and synthesized to an FPGA. The Key-Scheduling Algorithm (KSA) and Pseudo-Random Generation Algorithm (PRGA) run as coordinated finite-state machines sharing the cipher's S-array state.",
        ],
        images: [
          {
            src: "/images/fpga-de1soc.jpg",
            alt: "Terasic DE1-SoC FPGA development board",
            caption: "Terasic DE1-SoC — Cyclone V FPGA",
          },
        ],
      },
      {
        heading: "Brute-force cryptanalysis",
        paragraphs: [
          "An automated search sweeps the full 24-bit keyspace — 16.7 million keys — decrypting a captured ciphertext under each candidate and validating the plaintext in real time against printable-character constraints until the key is recovered.",
        ],
        bullets: [
          "Dual-port on-chip memory blocks let the KSA/PRGA datapath and the validation logic access cipher state concurrently",
          "Pipelined state machines keep the search datapath busy every cycle, maximizing keys tested per second",
          "Multiple decryption cores can be instantiated to partition the keyspace and search in parallel",
        ],
      },
    ],
  },
  {
    slug: "laser-projector",
    numeral: "IV",
    title: "2-DoF Laser Projector",
    medium: "ESP32 · Embedded C · SystemVerilog · SPI · PID",
    year: "2024",
    summary:
      "A two-axis laser projection system built in a team of four: a SystemVerilog digital-logic decoder for closed-loop modelling, an ESP32 interrupt service routine driving SPI communication and dual motors, and a real-time PID controller projecting still images and animations.",
    plateImage: "/images/laser_image.jpg",
    plateAlt: "Laser projector output",
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "A two-degree-of-freedom laser projection system capable of rendering static shapes and dynamic animations, built in a team of four. Two motor-driven axes steer the beam horizontally and vertically; an ESP32 executes the real-time control loop while quadrature encoders provide position feedback.",
        ],
      },
      {
        heading: "Control & signal processing",
        paragraphs: [
          "Quadrature encoder signals are decoded by digital logic written in SystemVerilog and communicated to the ESP32 over SPI inside an interrupt service routine. The decoded position feeds a discrete-time PID controller whose gains were tuned experimentally for responsiveness, stability, and tracking accuracy.",
        ],
        images: [
          {
            src: "/images/quadrature-decoding.png",
            alt: "Quadrature encoder decoding logic",
            caption: "Quadrature decoding",
          },
          { src: "/images/pid-controller.png", alt: "PID controller structure", caption: "PID control loop" },
        ],
      },
      {
        heading: "Hardware",
        paragraphs: [
          "A custom mechanical assembly mounts the laser and actuators for stable, repeatable motion; encoder feedback gives precise shaft position and velocity for the closed loop.",
        ],
        images: [
          { src: "/images/laser_image.jpg", alt: "Physical laser projector prototype", caption: "The prototype" },
          { src: "/images/laser-mech.png", alt: "Mechanical design of the projector", caption: "Mechanical design" },
        ],
      },
      {
        heading: "Demonstration",
        paragraphs: [
          "The system projected a range of shapes and animations by tracking time-varying reference trajectories, with minimal overshoot and consistent tracking across both axes after tuning.",
        ],
        video: { src: "/images/laser-demo.mov", caption: "Real-time projection demo" },
      },
    ],
  },
  {
    slug: "magnetic-field-car",
    numeral: "V",
    title: "Magnetic Field Controlled Car",
    medium: "C · 8051 assembly · EFM8 / PIC32 · circuit design",
    year: "2023",
    summary:
      "Wireless control over a magnetic field link: custom transmitter and receiver circuits, with EFM8 and PIC32 microcontrollers programmed in C and assembly to encode and decode driving instructions.",
    plateImage: null,
    plateAlt: "",
    platePlaceholder: "TX ∿ B-field ∿ RX",
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "A remote-controlled car driven over a magnetic-field link instead of a conventional radio: custom transmitter and receiver circuits couple through an inductive channel, carrying encoded driving commands from the handheld controller to the car.",
        ],
      },
      {
        heading: "Implementation",
        bullets: [
          "Designed and built the transmitter and receiver circuits for wireless communication between controller and car",
          "PIC32 on the transmitter encodes commands; an EFM8 on the receiver decodes them and drives the motors",
          "Firmware written in C and 8051 assembly, with Makefile-driven instruction encoding and decoding",
        ],
      },
    ],
  },
];
