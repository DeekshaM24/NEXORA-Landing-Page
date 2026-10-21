// All page copy lives here so you can edit text without touching components.
import {
  ListChecks, CalendarRange, LineChart, Users, Workflow, Lightbulb,
} from "lucide-react";

export const navLinks = [
  { label: "Features", id: "features" },
  { label: "How It Works", id: "how-it-works" },
  { label: "Testimonials", id: "testimonials" },
  { label: "Pricing", id: "pricing" },
];

export const brands = ["Lumen&Co", "Northwind", "Brightpath", "Fieldstone", "Kiteworks", "Oakline"];

export const features = [
  { icon: ListChecks, title: "Task management", text: "Capture tasks in seconds, set priorities and due dates, and see what to do next." },
  { icon: CalendarRange, title: "Project planning", text: "Break big goals into milestones and plan timelines your whole team can follow." },
  { icon: LineChart, title: "Progress tracking", text: "Live progress bars show how every project is moving, with no status meetings." },
  { icon: Users, title: "Team collaboration", text: "Assign owners, share notes, and keep every conversation next to the work." },
  { icon: Workflow, title: "Workflow automation", text: "Automate repeat steps like handoffs and reminders so work keeps moving." },
  { icon: Lightbulb, title: "Productivity insights", text: "Weekly reports show where your focus time goes and when you do your best work." },
];

export const steps = [
  { title: "Create your workspace", text: "Name your workspace and invite teammates. Setup takes about two minutes." },
  { title: "Organize your projects", text: "Add projects, split them into tasks, and assign owners and due dates." },
  { title: "Track your progress", text: "Watch progress update as tasks are completed and review insights each week." },
];

export const testimonials = [
  { quote: "Our weekly planning went from an hour of juggling tabs to ten minutes in one place.", name: "Maya Fernandez", role: "Product Lead, Sample Studio" },
  { quote: "The progress view lets me answer 'where are we?' without asking anyone for an update.", name: "Daniel Okafor", role: "Operations Manager, Demo Labs" },
  { quote: "Finally a planning tool that stays out of the way and keeps the team focused.", name: "Priya Raman", role: "Founder, Example Co." },
];

export const plans = [
  { name: "Free", price: "$0", period: "forever", blurb: "For individuals getting organized.", features: ["Up to 3 projects", "Unlimited personal tasks", "Basic progress tracking", "Community support"], cta: "Start for free" },
  { name: "Pro", price: "$12", period: "per user / month", blurb: "For professionals who plan every week.", features: ["Unlimited projects", "Workflow automation", "Productivity insights", "Priority support"], cta: "Choose Pro", featured: true },
  { name: "Team", price: "$24", period: "per user / month", blurb: "For teams that work together.", features: ["Everything in Pro", "Shared workspaces", "Roles and permissions", "Team reports"], cta: "Choose Team" },
];

export const footerColumns = [
  { title: "Product", links: [{ label: "Features", id: "features" }, { label: "How It Works", id: "how-it-works" }, { label: "Pricing", id: "pricing" }, { label: "Dashboard", id: "dashboard" }] },
  { title: "Company", links: [{ label: "About" }, { label: "Careers" }, { label: "Blog" }] },
  { title: "Support", links: [{ label: "Help center" }, { label: "Contact us" }, { label: "Privacy" }] },
];

export const initialTasks = [
  { id: 1, title: "Draft Q4 roadmap", project: "Roadmap", due: "Today", done: true },
  { id: 2, title: "Review design handoff", project: "Website", due: "Today", done: false },
  { id: 3, title: "Write launch announcement", project: "Launch", due: "Tomorrow", done: false },
  { id: 4, title: "Update onboarding checklist", project: "Onboarding", due: "Wed", done: false },
  { id: 5, title: "Sync with the support team", project: "Launch", due: "Thu", done: true },
];

export const projects = [
  { name: "Website redesign", team: "Design", progress: 72, tasks: "18 / 25 tasks", color: "#7c4dff" },
  { name: "Mobile app launch", team: "Product", progress: 45, tasks: "9 / 20 tasks", color: "#9a6cf0" },
  { name: "Customer onboarding", team: "Success", progress: 88, tasks: "22 / 25 tasks", color: "#4c1d95" },
];

export const weekly = [{ d: "Mon", v: 55 }, { d: "Tue", v: 80 }, { d: "Wed", v: 65 }, { d: "Thu", v: 92 }, { d: "Fri", v: 70 }];
