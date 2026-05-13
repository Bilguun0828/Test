import AlexMorgan from "../assets/FitZoneAssets/AlexMorgan.avif";
import SophieLee from "../assets/FitZoneAssets/SophieLee.avif";

export const menuLinks = [
    { name: "Home", href: "#" },
    { name: "Programs", href: "#" },
    { name: "Trainers", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Contact", href: "#" },
];

export const programs = [
    {
        id: 1,
        title: "Strength Training",
        description: "Build muscle and improve your full body strength.",
        icon: "🏋️",
    },
    {
        id: 2,
        title: "Yoga Class",
        description: "Increase flexibility and relax your mind and body.",
        icon: "🧘",
    },
    {
        id: 3,
        title: "Cardio Workout",
        description: "Boost endurance and improve heart health.",
        icon: "🏃",
    },
];

export const programmingCourses = [
  {
    id: 1,
    title: "Strength Training",
    duration: "6 weeks",
    lessons: "18 guided sessions",
    schedule: "Mon, Wed, Fri",
    description:
      "Build strength and muscle with a structured program...",
    highlights: [
      "Full-body starter routine",
      "Safe form and technique guidance",
      "Weekly progress tracking and adjustments",
    ],
  },

  {
    id: 2,
    title: "Yoga Class",
    duration: "5 weeks",
    lessons: "15 sessions",
    schedule: "Tue, Thu",
    description:
      "Improve flexibility and reduce stress...",
    highlights: [
      "Stretching and flexibility routines",
      "Breathing techniques for relaxation",
      "Beginner-friendly sessions with modifications",
    ],
  },

  {
    id: 3,
    title: "Cardio Workout",
    duration: "4 weeks",
    lessons: "12 sessions",
    schedule: "Weekend Plan",
    description:
      "Boost your endurance and improve your heart health...",
    highlights: [
      "Short, high-intensity workouts",
      "Heart rate monitoring and improvement tips",
      "Simple routines at home or outdoors",
    ],
  },
];

export const trainers = [
    {
        name: "Alex Morgan",
        specialty: "Strength Coach",
        image: AlexMorgan,
    },
    {
        name: "Sophie Lee",
        specialty: "Yoga Trainer",
        image: SophieLee,
    },
];

export const footerItems = ["About", "Classes", "Membership", "Support"];
export const authContent = {
    signup: {
        eyebrow: "Join FitZone",
        title: "Register for your program",
        description:
            "Create your membership profile to book classes, save your schedule, and join your favorite training programs.",
        primaryLabel: "Join Program",
        secondaryText: "Already a member?",
        secondaryAction: "Login",
        fields: [
            { label: "Full Name", type: "text", placeholder: "Enter your full name" },
            { label: "Email", type: "email", placeholder: "Enter your email" },
            { label: "Preferred Program", type: "text", placeholder: "Strength Training" },
            { label: "Password", type: "password", placeholder: "Create a password" },
        ],
    },
    login: {
        eyebrow: "Welcome Back",
        title: "Login to your fitness account",
        description:
            "Continue your workouts, check trainer updates, and manage your active membership plan.",
        primaryLabel: "Login",
        secondaryText: "Need to register first?",
        secondaryAction: "Join Now",
        fields: [
            { label: "Email", type: "email", placeholder: "Enter your email" },
            { label: "Password", type: "password", placeholder: "Enter your password" },
        ],
    },
};
export type AuthMode = "login" | "signup";
export const activePrograms = [
    {
      title: "Strength Training",
      coach: "Alex Morgan",
      schedule: "Mon, Wed, Fri",
      completed: 8,
      total: 12,
    },
    {
      title: "Yoga Class",
      coach: "Sophie Lee",
      schedule: "Tue, Thu",
      completed: 3,
      total: 10,
    },
  ];