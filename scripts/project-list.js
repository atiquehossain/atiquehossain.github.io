import { t as automationThumbnail, a as aiThumbnail, b as mobileThumbnail, c as webThumbnail } from "./project-thumbnails-map.js";

const projects = [
  {
    title: "AI Document Translation & QA",
    slug: "cubewar",
    thumbnail: automationThumbnail,
    description: "Production-minded translation workflow using NLLB, M2M100 and COMET quality evaluation.",
  },
  {
    title: "Privacy-First Contact Platform",
    slug: "quibbo",
    thumbnail: aiThumbnail,
    description: "QR contact platform built with Next.js, PostgreSQL, Prisma, Docker and a Flutter owner app.",
  },
  {
    title: "Multilingual Android Voice",
    slug: "sharkie",
    thumbnail: mobileThumbnail,
    description: "Reusable Kotlin speech-to-text and text-to-speech framework with multilingual, offline-friendly support.",
  },
  {
    title: "Excel-to-App Automation",
    slug: "particles",
    thumbnail: webThumbnail,
    description: "Dart and Flutter tooling that converts structured Excel specifications into application models and UI code.",
  },
];

export default projects;
