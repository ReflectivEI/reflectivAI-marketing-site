const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/_404-DmIAU4St.js","assets/vendor-qUWCXkpv.js","assets/preload-gUuZ1Ujf.js"])))=>i.map(i=>d[i]);
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { t as twMerge, c as clsx, j as jsxRuntimeExports, r as reactExports, S as Slot, a as cva, R as Root2, L as List, T as Trigger, C as ChevronDown, b as Content, V as Viewport, I as Indicator, d as Item, e as Link, u as useNavigate, f as useLocation, g as Link$1, X, M as Menu, h as Root, i as Viewport$1, k as Corner, l as ScrollAreaScrollbar, m as ScrollAreaThumb, n as MessageCircle, o as Sparkles, p as Send, O as Overlay, P as Portal, q as Content$1, s as Close, v as Title, D as Description, w as Root$1, x as List$1, y as Trigger$1, z as Content$2, A as Root2$1, B as Play, E as CircleCheck, F as Target, G as TrendingUp, H as Award, U as Users, J as Root$2, K as Image, N as Fallback, Q as Quote, W as Item$1, Y as Header$1, Z as Trigger2, _ as Content2, $ as Root2$2, a0 as Zap, a1 as TrendingDown, a2 as CircleCheckBig, a3 as Star, a4 as Trophy, a5 as Root$3, a6 as Root$4, a7 as Track, a8 as Range, a9 as Thumb, aa as Calculator, ab as DollarSign, ac as Building2, ad as Calendar, ae as ArrowRight, af as Brain, ag as Activity, ah as MessageSquare, ai as Lightbulb, aj as ChartColumn, ak as Mail, al as Phone, am as MapPin, an as Root$5, ao as Indicator$1, ap as CircleAlert, aq as ChevronRight, ar as createBrowserRouter, as as RouterProvider2, at as Outlet, au as QueryClient, av as ReactDOM, aw as React, ax as QueryClientProvider } from "./vendor-qUWCXkpv.js";
import { _ as __vitePreload } from "./preload-gUuZ1Ujf.js";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function Website({
  children,
  config = {},
  className
}) {
  const {
    layout = {
      maxWidth: "full",
      padding: "md",
      background: "default",
      minHeight: true
    }
  } = config;
  const getBackgroundClass = () => {
    switch (layout.background) {
      case "muted":
        return "bg-muted";
      case "gradient":
        return "bg-gradient-to-b from-background to-muted/20";
      default:
        return "bg-background";
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn(layout.minHeight !== false && "min-h-screen", getBackgroundClass(), "flex flex-col", className), children });
}
const buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground hover:bg-primary/90",
      destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      outline: "border border-input bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline"
    },
    size: {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-11 rounded-md px-8",
      icon: "h-10 w-10"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
});
const Button = reactExports.forwardRef(({
  className,
  variant,
  size,
  asChild = false,
  ...props
}, ref) => {
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { className: cn(buttonVariants({
    variant,
    size,
    className
  })), ref, ...props });
});
Button.displayName = "Button";
const NavigationMenu = reactExports.forwardRef(({
  className,
  children,
  ...props
}, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Root2, { ref, className: cn("relative z-10 flex max-w-max flex-1 items-center justify-center", className), ...props, children: [
  children,
  /* @__PURE__ */ jsxRuntimeExports.jsx(NavigationMenuViewport, {})
] }));
NavigationMenu.displayName = Root2.displayName;
const NavigationMenuList = reactExports.forwardRef(({
  className,
  ...props
}, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(List, { ref, className: cn("group flex flex-1 list-none items-center justify-center space-x-1", className), ...props }));
NavigationMenuList.displayName = List.displayName;
const NavigationMenuItem = Item;
const navigationMenuTriggerStyle = cva("group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:text-accent-foreground data-[state=open]:bg-accent/50 data-[state=open]:hover:bg-accent data-[state=open]:focus:bg-accent");
const NavigationMenuTrigger = reactExports.forwardRef(({
  className,
  children,
  ...props
}, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Trigger, { ref, className: cn(navigationMenuTriggerStyle(), "group", className), ...props, children: [
  children,
  " ",
  /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180", "aria-hidden": "true" })
] }));
NavigationMenuTrigger.displayName = Trigger.displayName;
const NavigationMenuContent = reactExports.forwardRef(({
  className,
  ...props
}, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Content, { ref, className: cn("left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ", className), ...props }));
NavigationMenuContent.displayName = Content.displayName;
const NavigationMenuLink = Link;
const NavigationMenuViewport = reactExports.forwardRef(({
  className,
  ...props
}, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Viewport, { className: cn("origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]", className), ref, ...props }) }));
NavigationMenuViewport.displayName = Viewport.displayName;
const NavigationMenuIndicator = reactExports.forwardRef(({
  className,
  ...props
}, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Indicator, { ref, className: cn("top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in", className), ...props, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" }) }));
NavigationMenuIndicator.displayName = Indicator.displayName;
function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = reactExports.useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const handleFAQClick = (e) => {
    var _a;
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        var _a2;
        (_a2 = document.getElementById("faq")) == null ? void 0 : _a2.scrollIntoView({
          behavior: "smooth"
        });
      }, 100);
    } else {
      (_a = document.getElementById("faq")) == null ? void 0 : _a.scrollIntoView({
        behavior: "smooth"
      });
    }
    setIsMobileMenuOpen(false);
  };
  const navLinks = [{
    href: "/",
    label: "Platform"
  }, {
    href: "/demo",
    label: "Interactive Demo"
  }, {
    href: "/ai-coach",
    label: "AI Coach"
  }, {
    href: "/role-play",
    label: "Role Play"
  }, {
    href: "/#faq",
    label: "FAQ"
  }];
  const learnMoreLinks = [{
    href: "/signal-intelligence",
    label: "Signal Intelligence",
    description: "Learn more about our core capabilities"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-16 items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link$1, { to: "/", className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://img1.wsimg.com/isteam/ip/1de1dc96-7231-4608-aa4f-91d58be98037/83AD436E-122D-4EE6-BF94-AE7A018FBE00.png", alt: "ReflectivAI Logo", className: "h-14 w-auto" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl font-bold", children: "ReflectivAI" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden md:flex gap-8 items-center", children: [
        navLinks.map((link) => link.label === "FAQ" ? /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#faq", onClick: handleFAQClick, className: "text-sm font-medium hover:text-primary transition-colors cursor-pointer", children: link.label }, link.href) : /* @__PURE__ */ jsxRuntimeExports.jsx(Link$1, { to: link.href, className: "text-sm font-medium hover:text-primary transition-colors", children: link.label }, link.href)),
        /* @__PURE__ */ jsxRuntimeExports.jsx(NavigationMenu, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(NavigationMenuList, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(NavigationMenuItem, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(NavigationMenuTrigger, { className: "text-sm font-medium bg-transparent hover:bg-transparent data-[state=open]:bg-transparent", children: "Learn More" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(NavigationMenuContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid w-[400px] gap-3 p-4", children: learnMoreLinks.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(NavigationMenuLink, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link$1, { to: link.href, className: "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium leading-none", children: link.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "line-clamp-2 text-sm leading-snug text-muted-foreground", children: link.description })
          ] }) }) }, link.href)) }) })
        ] }) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden md:flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link$1, { to: "/contact", children: "Sign In" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link$1, { to: "/contact", children: "Request Demo" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setIsMobileMenuOpen(!isMobileMenuOpen), className: "md:hidden p-2 hover:bg-accent rounded-md", "aria-label": "Toggle menu", children: isMobileMenuOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 20 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { size: 20 }) })
    ] }),
    isMobileMenuOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden py-4 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "flex flex-col gap-4", children: [
      navLinks.map((link) => link.label === "FAQ" ? /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#faq", onClick: handleFAQClick, className: "text-sm font-medium hover:text-primary transition-colors cursor-pointer", children: link.label }, link.href) : /* @__PURE__ */ jsxRuntimeExports.jsx(Link$1, { to: link.href, className: "text-sm font-medium hover:text-primary transition-colors", onClick: () => setIsMobileMenuOpen(false), children: link.label }, link.href)),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border pt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold text-muted-foreground mb-2 px-2", children: "Learn More" }),
        learnMoreLinks.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx(Link$1, { to: link.href, className: "block text-sm font-medium hover:text-primary transition-colors px-2 py-2", onClick: () => setIsMobileMenuOpen(false), children: link.label }, link.href))
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 pt-4 border-t border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", className: "w-full", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link$1, { to: "/contact", children: "Sign In" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", className: "w-full", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link$1, { to: "/contact", children: "Request Demo" }) })
      ] })
    ] }) })
  ] }) });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "mt-auto border-t border-border bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://img1.wsimg.com/isteam/ip/1de1dc96-7231-4608-aa4f-91d58be98037/83AD436E-122D-4EE6-BF94-AE7A018FBE00.png", alt: "ReflectivAI Logo", className: "h-10 w-auto" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl font-bold", children: "ReflectivAI" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Signal Intelligence™ for sales professionals in high-stakes conversations. Built on clarity and restraint, designed for teams where judgment matters." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-4", children: "Platform" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link$1, { to: "/", className: "hover:text-foreground transition-colors", children: "Overview" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link$1, { to: "/ai-coach", className: "hover:text-foreground transition-colors", children: "AI Coach" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link$1, { to: "/role-play", className: "hover:text-foreground transition-colors", children: "Role Play" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link$1, { to: "/contact", className: "hover:text-foreground transition-colors", children: "Pricing" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-4", children: "Resources" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link$1, { to: "/ai-coach", className: "hover:text-foreground transition-colors", children: "AI Coach Guide" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link$1, { to: "/role-play", className: "hover:text-foreground transition-colors", children: "Role Play Scenarios" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link$1, { to: "/", className: "hover:text-foreground transition-colors", children: "Signal Intelligence™" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link$1, { to: "/contact", className: "hover:text-foreground transition-colors", children: "Support" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-4", children: "Company" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link$1, { to: "/", className: "hover:text-foreground transition-colors", children: "About Us" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link$1, { to: "/contact", className: "hover:text-foreground transition-colors", children: "Careers" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link$1, { to: "/contact", className: "hover:text-foreground transition-colors", children: "Contact" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link$1, { to: "/", className: "hover:text-foreground transition-colors", children: "Privacy Policy" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 pt-8 border-t border-border space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground text-center max-w-4xl mx-auto", children: "Signal Intelligence™ focuses on observable interaction changes and response principles; it does not infer or diagnose a person's intent, emotion, motivation, or psychological state. AI may surface patterns, but people remain responsible for judgment and decisions." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row justify-between items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-muted-foreground", children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " ReflectivAI. All rights reserved."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-6 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "HIPAA Compliant" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "SOC 2 Type II" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "ISO 27001" })
        ] })
      ] })
    ] })
  ] }) });
}
const Input = reactExports.forwardRef(({
  className,
  type,
  ...props
}, ref) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type, className: cn("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className), ref, ...props });
});
Input.displayName = "Input";
const ScrollArea = reactExports.forwardRef(({
  className,
  children,
  ...props
}, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Root, { ref, className: cn("relative overflow-hidden", className), ...props, children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(Viewport$1, { className: "h-full w-full rounded-[inherit]", children }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollBar, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsx(Corner, {})
] }));
ScrollArea.displayName = Root.displayName;
const ScrollBar = reactExports.forwardRef(({
  className,
  orientation = "vertical",
  ...props
}, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollAreaScrollbar, { ref, orientation, className: cn("flex touch-none select-none transition-colors", orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]", orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]", className), ...props, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-border" }) }));
ScrollBar.displayName = ScrollAreaScrollbar.displayName;
const SIGNAL_INTELLIGENCE_KB = {
  // Core Definitions
  definitions: {
    signalIntelligence: `Signal Intelligence™ is a behavior-based capability framework designed for professional development, coaching, and skill-building in high-stakes conversations. It focuses exclusively on observable conversation behaviors and does not infer psychological states, personality traits, protected attributes, or mental health status.

Signal Intelligence™ is:
• Non-clinical
• Non-diagnostic
• Explainable
• Auditable
• Human-led

It is NOT used for:
• Employment decisions
• Performance evaluation
• Live call monitoring
• Psychological inference`,
    threeLayerSystem: `Signal Intelligence™ operates as a three-layer system:

**Layer 1: Human Decision Drivers Framework (Interpretive Lens)**
Explains WHY conversational behaviors change by describing internal forces like confidence, motivation, and perceived risk. These drivers are NOT measured directly—they serve only as explanatory context.

**Layer 2: Signal Intelligence™ Capabilities (Skill Layer)**
Defines 8 core conversational skills that can be developed through practice:
1. Signal Awareness
2. Signal Interpretation
3. Value Connection
4. Customer Engagement Monitoring
5. Objection Navigation
6. Conversation Management
7. Adaptive Response
8. Commitment Generation

**Layer 3: Behavioral Metrics (Visibility Layer)**
Observable behaviors that show how each capability appears during structured practice sessions (role play, simulations). These are never used for live monitoring or surveillance.`
  },
  // Capabilities with Behavioral Metrics
  capabilities: {
    signalAwareness: {
      name: "Signal Awareness",
      definition: "The capability to notice relevant customer cues and use those cues to shape purposeful, well-sequenced questions.",
      metric: "Question Quality",
      observableBehaviors: ["Purposeful, customer-centered questioning", "Logical sequencing", "Effective follow-up", "Open vs. closed question ratio", "Relevance to customer goals"],
      relatedDrivers: ["Cognitive Empathy", "Metacognition"]
    },
    signalInterpretation: {
      name: "Signal Interpretation",
      definition: "The capability to make sense of what a customer is communicating and adjust responses as new information emerges.",
      metric: "Listening & Responsiveness",
      observableBehaviors: ["Accurate paraphrasing", "Explicit acknowledgment of concerns", "Behavioral adjustment based on new information", "Paraphrase accuracy", "Observable response shifts"],
      relatedDrivers: ["Cognitive Empathy", "Emotional Intelligence"]
    },
    valueConnection: {
      name: "Value Connection",
      definition: "The capability to link discussion to what matters to the customer by translating priorities into outcome-based value.",
      metric: "Value Framing",
      observableBehaviors: ["Connecting to customer priorities", "Outcome-based language", "Translating features to benefits", "Relevance to stated goals"],
      relatedDrivers: ["Cognitive Empathy", "Motivation"]
    },
    customerEngagement: {
      name: "Customer Engagement Monitoring",
      definition: "The capability to recognize when engagement shifts and adjust pacing, tone, or approach accordingly.",
      metric: "Engagement Cues",
      observableBehaviors: ["Recognizing participation changes", "Adjusting pacing", "Tone modulation", "Response to engagement shifts"],
      relatedDrivers: ["Emotional Intelligence", "Social Threat Awareness"]
    },
    objectionNavigation: {
      name: "Objection Navigation",
      definition: "The capability to address concerns without defensiveness while maintaining credibility and trust.",
      metric: "Objection Handling",
      observableBehaviors: ["Acknowledging concerns without defensiveness", "Staying calm under pressure", "Reframing objections constructively", "Maintaining credibility"],
      relatedDrivers: ["Emotional Intelligence", "Social Threat Awareness"]
    },
    conversationManagement: {
      name: "Conversation Management",
      definition: "The capability to maintain purpose and structure while remaining flexible to customer needs.",
      metric: "Conversation Control & Structure",
      observableBehaviors: ["Maintaining conversation purpose", "Logical flow", "Flexibility within structure", "Time management"],
      relatedDrivers: ["Metacognition", "Motivation"]
    },
    adaptiveResponse: {
      name: "Adaptive Response",
      definition: "The capability to recognize when an approach isn't working and adjust strategy mid-conversation.",
      metric: "Adaptability",
      observableBehaviors: ["Recognizing ineffective approaches", "Strategy shifts", "Flexible response patterns", "Real-time adjustment"],
      relatedDrivers: ["Metacognition", "Emotional Intelligence"]
    },
    commitmentGeneration: {
      name: "Commitment Generation",
      definition: "The capability to secure realistic next steps that preserve autonomy and build momentum.",
      metric: "Commitment Gaining",
      observableBehaviors: ["Securing specific next steps", "Realistic commitments", "Preserving customer autonomy", "Building momentum"],
      relatedDrivers: ["Motivation", "Autonomy"]
    }
  },
  // Human Decision Drivers
  humanDrivers: {
    cognitiveEmpathy: {
      name: "Cognitive Empathy / Perspective Taking",
      description: "The capacity to accurately infer another person's perspective and adjust behavior accordingly.",
      influences: ["Question quality", "Listening", "Adaptive response"],
      notMeasured: true
    },
    emotionalIntelligence: {
      name: "Emotional Intelligence",
      description: "The ability to perceive, understand, and regulate emotions in oneself and others.",
      influences: ["Objection navigation", "Engagement monitoring", "Tone regulation"],
      notMeasured: true
    },
    metacognition: {
      name: "Metacognition & Confidence Calibration",
      description: "Awareness of one's own thinking, limits of knowledge, and accuracy of self-assessment.",
      influences: ["Question quality", "Adaptive response", "Commitment generation"],
      notMeasured: true
    },
    motivation: {
      name: "Motivation, Autonomy & Commitment",
      description: "Internal drivers governing engagement, ownership, and follow-through.",
      influences: ["Commitment generation", "Conversation management", "Value connection"],
      notMeasured: true
    },
    socialThreat: {
      name: "Social Threat, Status & Identity",
      description: "How perceived risk to competence, autonomy, or identity affects engagement and resistance.",
      influences: ["Objection navigation", "Engagement monitoring", "Adaptive response"],
      notMeasured: true
    }
  },
  // Platform Features
  platform: {
    aiCoach: `AI Coach provides instant, actionable feedback during practice sessions. It:
• Highlights patterns in observable behavior
• Supports reflection and learning
• Leaves interpretation and judgment with the human
• Operates only in simulated, safe environments

AI Coach does NOT:
• Infer what someone feels
• Make decisions for you
• Evaluate real customers
• Monitor live calls`,
    rolePractice: `Role Play provides unlimited practice in a safe environment where you can:
• Practice high-stakes conversations
• Build muscle memory for detecting customer signals
• Get instant feedback on conversational skills
• Try different approaches without risk

All practice occurs in simulated scenarios—never with real customers.`,
    dashboard: `The ReflectivAI dashboard provides:
• Real-time visibility into skill development
• Behavioral metrics from practice sessions
• Coaching cards with actionable guidance
• Progress tracking across capabilities

All metrics are based on structured practice, not live call monitoring.`
  },
  // Ethics & Safeguards
  ethics: {
    boundaries: `Signal Intelligence™ maintains strict ethical boundaries:

• **Non-clinical**: Not used for mental health assessment
• **Non-diagnostic**: Does not diagnose psychological conditions
• **Behavior-only**: Focuses exclusively on observable conversation behaviors
• **Explainable**: All metrics are transparent and auditable
• **Human-led**: AI detects patterns; humans exercise judgment

**Ethical Principle**: "If a response would feel inappropriate if the roles were reversed, it is outside the Signal Intelligence™ boundary."`,
    whatNotMeasured: `Signal Intelligence™ does NOT measure, infer, or predict:
• Emotions or feelings
• Intent or motivation
• Personality traits
• Psychological states
• Protected attributes
• Mental health status

Human Decision Drivers are NOT latent variables—they are explanatory context only.`,
    practiceOnly: `Behavioral metrics are observed ONLY during structured practice:
• Role play sessions
• Simulations
• Coached conversations

They are NEVER used for:
• Live call monitoring
• Surveillance
• Performance evaluation
• Employment decisions`
  },
  // Use Cases
  useCases: {
    salesReps: `For Sales Reps:
• Practice high-stakes conversations in a safe environment
• Get instant, actionable feedback on conversational skills
• Build muscle memory for detecting customer signals
• Available 24/7 for unlimited practice
• 89% of reps report increased confidence after practice`,
    managers: `For Sales Managers:
• Structured coaching framework based on observable behaviors
• Real-time visibility into team skill development
• Coaching cards that translate scores into actionable guidance
• Scalable training across entire field force`,
    enablement: `For Enablement Leaders:
• Accelerate onboarding and certification
• Identify skill gaps across teams
• Measure training effectiveness with behavioral metrics
• Ensure compliance with built-in guardrails
• 3x faster ramp time for new sales reps`
  }
};
class AloraResponseEngine {
  constructor() {
    __publicField(this, "kb", SIGNAL_INTELLIGENCE_KB);
    __publicField(this, "conversationContext", []);
  }
  detectIntent(query) {
    const lowerQuery = query.toLowerCase();
    const intents = [];
    if (lowerQuery.match(/^(yes|yeah|sure|tell me more|more|elaborate|explain|how|show me|examples?|what about|go on|continue|that sounds|interesting|i'd like|i want|please|ok|okay)\b/)) {
      if (this.conversationContext.length > 0) {
        const lastContext = this.conversationContext[this.conversationContext.length - 1];
        return [lastContext + "_followup"];
      }
    }
    if (lowerQuery.match(/what is signal intelligence|define signal intelligence|explain signal intelligence|si framework/)) {
      intents.push("si_overview");
      this.conversationContext.push("si_overview");
    }
    if (lowerQuery.match(/three layer|3 layer|system model|framework structure|how does it work/)) {
      intents.push("three_layer_system");
      this.conversationContext.push("three_layer_system");
    }
    if (lowerQuery.match(/capabilities|8 capabilities|skills|what can i learn|conversational skills/)) {
      intents.push("capabilities_overview");
      this.conversationContext.push("capabilities_overview");
    }
    if (lowerQuery.match(/signal awareness|question quality/)) {
      intents.push("capability_signal_awareness");
      this.conversationContext.push("capability_signal_awareness");
    }
    if (lowerQuery.match(/signal interpretation|listening|responsiveness/)) {
      intents.push("capability_signal_interpretation");
      this.conversationContext.push("capability_signal_interpretation");
    }
    if (lowerQuery.match(/value connection|value framing/)) {
      intents.push("capability_value_connection");
      this.conversationContext.push("capability_value_connection");
    }
    if (lowerQuery.match(/engagement monitoring|engagement cues/)) {
      intents.push("capability_customer_engagement");
      this.conversationContext.push("capability_customer_engagement");
    }
    if (lowerQuery.match(/objection|objection handling|objection navigation/)) {
      intents.push("capability_objection_navigation");
      this.conversationContext.push("capability_objection_navigation");
    }
    if (lowerQuery.match(/conversation management|conversation control|structure/)) {
      intents.push("capability_conversation_management");
      this.conversationContext.push("capability_conversation_management");
    }
    if (lowerQuery.match(/adaptive response|adaptability|flexibility/)) {
      intents.push("capability_adaptive_response");
      this.conversationContext.push("capability_adaptive_response");
    }
    if (lowerQuery.match(/commitment|commitment generation|next steps/)) {
      intents.push("capability_commitment_generation");
      this.conversationContext.push("capability_commitment_generation");
    }
    if (lowerQuery.match(/human decision drivers|decision drivers|why behaviors change|internal forces/)) {
      intents.push("human_drivers");
      this.conversationContext.push("human_drivers");
    }
    if (lowerQuery.match(/behavioral metrics|metrics|measurement|how do you measure|scoring/)) {
      intents.push("behavioral_metrics");
      this.conversationContext.push("behavioral_metrics");
    }
    if (lowerQuery.match(/ai coach|coaching|feedback|how does ai help/)) {
      intents.push("ai_coach");
      this.conversationContext.push("ai_coach");
    }
    if (lowerQuery.match(/role play|practice|simulation|training|scenarios?/)) {
      intents.push("role_practice");
      this.conversationContext.push("role_practice");
    }
    if (lowerQuery.match(/ethics|ethical|safeguards|boundaries|privacy|compliance/)) {
      intents.push("ethics");
      this.conversationContext.push("ethics");
    }
    if (lowerQuery.match(/emotion detection|predict intent|personality|psychological|mental health|feelings/)) {
      intents.push("boundary_correction");
      this.conversationContext.push("boundary_correction");
    }
    if (lowerQuery.match(/use case|who is this for|sales rep|manager|enablement/)) {
      intents.push("use_cases");
      this.conversationContext.push("use_cases");
    }
    if (lowerQuery.match(/dashboard|platform|features|what can i do/)) {
      intents.push("platform_features");
      this.conversationContext.push("platform_features");
    }
    if (lowerQuery.match(/results|effectiveness|roi|statistics|success rate/)) {
      intents.push("results");
      this.conversationContext.push("results");
    }
    return intents.length > 0 ? intents : ["general"];
  }
  generateResponse(intents) {
    const primaryIntent = intents[0];
    switch (primaryIntent) {
      case "si_overview":
        return "Signal Intelligence™ is our behavior-based framework that helps sales professionals develop conversational skills through practice. Think of it like a flight simulator for high-stakes conversations—you practice in a safe environment and get feedback on observable behaviors like question quality, listening, and adaptability.\n\nIt's completely non-clinical and non-diagnostic. We focus only on what you say and how you respond, never on emotions or psychological states.\n\nWant to know more about how it works or what skills you can develop?";
      case "si_overview_followup":
        return "Great question! Signal Intelligence™ works in three layers:\n\n**Layer 1**: Understanding why behaviors change (context like confidence or motivation)\n**Layer 2**: The 8 conversational skills you develop\n**Layer 3**: Observable behaviors we track during practice\n\nWe have 9+ pharma scenarios across HIV, Oncology, Cardiology, and more. You practice, get instant feedback, and build muscle memory for real conversations.\n\nWant to dive into the 8 skills or see how practice sessions work?";
      case "three_layer_system":
        return "Signal Intelligence™ works in three layers:\n\n**Layer 1: Why behaviors change** - We use the Human Decision Drivers Framework to understand context (like confidence or motivation), but we never measure these directly.\n\n**Layer 2: Skills you develop** - 8 core conversational capabilities like Signal Awareness, Objection Navigation, and Adaptive Response.\n\n**Layer 3: What we observe** - Behavioral metrics from your practice sessions, like question quality and listening patterns.\n\nThink of it like learning to play piano: Layer 1 is music theory, Layer 2 is the techniques, Layer 3 is what the teacher hears when you play.\n\nWant to dive deeper into any of these layers?";
      case "capabilities_overview":
        return "We help you develop 8 core conversational skills:\n\n1. Signal Awareness - Asking better questions\n2. Signal Interpretation - Active listening\n3. Value Connection - Making it relevant\n4. Customer Engagement Monitoring - Reading the room\n5. Objection Navigation - Handling pushback\n6. Conversation Management - Staying on track\n7. Adaptive Response - Pivoting when needed\n8. Commitment Generation - Securing next steps\n\nEach one is a distinct skill you can practice and improve. Which one interests you most?";
      case "capabilities_overview_followup":
        return "Each capability is measured through specific behavioral patterns during practice sessions.\n\nFor example, Signal Awareness looks at your question quality—open vs. closed questions, relevance to customer goals, and follow-up depth.\n\nObjection Navigation tracks how you acknowledge concerns, stay calm under pressure, and reframe constructively.\n\nThe beauty is you can see exactly where you're strong and where to focus improvement. Want to explore a specific capability in detail?";
      case "capability_signal_awareness":
        return "Signal Awareness is about noticing customer cues and asking better questions in response.\n\nFor example, if a doctor mentions time constraints, a rep with strong Signal Awareness might shift from broad questions to focused ones about their specific patient population.\n\nWe measure this through Question Quality—looking at things like open vs. closed questions, relevance to customer goals, and how well you follow up.\n\nWant to see how this shows up in practice scenarios?";
      case "capability_signal_interpretation":
        return `Signal Interpretation is your ability to understand what customers are really saying and adjust accordingly.

It's the difference between hearing "I don't have time" and recognizing whether that means "not interested" or "show me the value quickly."

We look at behaviors like accurate paraphrasing, acknowledging concerns, and how you shift your approach based on what you hear.

This is one of the most impactful skills for building trust. Want to know how to practice it?`;
      case "capability_value_connection":
        return "Value Connection is about linking your message to what actually matters to the customer.\n\nInstead of listing features, you're translating them into outcomes that align with their priorities. Like connecting a drug's dosing schedule to a doctor's concern about patient adherence.\n\nWe observe how well you frame value in customer terms, not product terms.\n\nWant examples of strong vs. weak value framing?";
      case "capability_customer_engagement":
        return "Customer Engagement Monitoring is your ability to read the room—noticing when engagement shifts and adjusting your approach.\n\nMaybe the customer goes quiet, starts multitasking, or suddenly gets more animated. Strong reps pick up on these cues and respond appropriately.\n\nWe track how you recognize participation changes and adjust pacing, tone, or approach.\n\nThis is especially critical in virtual calls. Want tips on improving this skill?";
      case "capability_objection_navigation":
        return `Objection Navigation is handling pushback without getting defensive—staying calm, acknowledging concerns, and reframing constructively.

The key is treating objections as information, not attacks. "I've heard that before" might mean "prove you're different" or "I'm skeptical but listening."

We look at how you acknowledge concerns, maintain credibility under pressure, and keep the conversation productive.

Want to practice with some common pharma objections?`;
      case "capability_conversation_management":
        return "Conversation Management is maintaining purpose and structure while staying flexible to customer needs.\n\nIt's the balance between having a plan and being willing to deviate when the customer takes you somewhere valuable.\n\nWe observe how you maintain conversation flow, manage time, and stay focused on outcomes without being rigid.\n\nThink of it like being a good meeting facilitator. Want to see what good looks like?";
      case "capability_adaptive_response":
        return "Adaptive Response is recognizing when your approach isn't working and pivoting mid-conversation.\n\nMaybe your clinical data isn't landing, so you shift to a patient story. Or your questions are too broad, so you get more specific.\n\nWe track how quickly you recognize ineffective patterns and adjust your strategy in real-time.\n\nThis is what separates good reps from great ones. Want to know how to build this skill?";
      case "capability_commitment_generation":
        return `Commitment Generation is securing realistic next steps that preserve customer autonomy and build momentum.

It's not about "closing"—it's about co-creating a path forward that the customer actually owns.

We look at how you secure specific commitments, keep them realistic, and maintain the customer's sense of control.

Want examples of strong commitment language?`;
      case "human_drivers":
        return `The Human Decision Drivers Framework explains why conversational behaviors change—things like confidence, motivation, emotional regulation, and perceived risk.

Here's the key: we never measure these directly. They're explanatory context, not scores.

Think of them like the "why" behind observable behaviors. If someone gets defensive during objections, social threat might be at play. But we're coaching the behavior (staying calm), not diagnosing the internal state.

Want to understand how this connects to the skills you practice?`;
      case "behavioral_metrics":
        return "Behavioral Metrics are what we observe during practice sessions—things like question quality, listening patterns, and how you handle objections.\n\nKey points:\n• Only observed during practice (role play, simulations)\n• Focus on what you say and how you respond\n• Never used for live call monitoring\n• Completely transparent and explainable\n\nWe don't detect emotions, predict intent, or assess personality. Just observable conversation behaviors.\n\nWant to see what metrics look like in action?";
      case "ai_coach":
        return "AI Coach gives you instant feedback during practice sessions—like having a personal coach available 24/7.\n\nIt highlights patterns in your conversation behaviors (question quality, listening, adaptability) and offers actionable insights. But here's what's important: the AI detects patterns, you make the judgments.\n\nIt only works in simulated practice environments, never on real customer calls.\n\nThink of it like a golf swing analyzer—it shows you the data, you decide how to improve.\n\nWant to see a sample feedback report?";
      case "ai_coach_followup":
        return 'The feedback is specific and actionable. For example:\n\n**Signal Awareness (4.2/5)**: "You asked 8 open-ended questions and followed up on customer priorities. Consider probing deeper when the customer mentions constraints."\n\n**Objection Navigation (3.8/5)**: "You acknowledged the concern but moved on quickly. Try paraphrasing to show you fully understand before responding."\n\nYou also get coaching cards that translate scores into specific actions to practice. Want to know more about any specific capability?';
      case "role_practice":
        return "Role Play lets you practice high-stakes conversations in a completely safe environment.\n\nWe have 9+ pharma scenarios across HIV, Oncology, Cardiology, Vaccines, and more. You practice, get instant feedback on your Signal Intelligence™ capabilities, and build muscle memory for real conversations.\n\nMost reps spend 15-30 minutes a day. It's like a flight simulator—practice the hard stuff when the stakes are zero.\n\nWant to try a scenario or see what the feedback looks like?";
      case "role_practice_followup":
        return "Here's how it works:\n\n1. Choose a scenario (e.g., HIV specialist objecting to switch therapy)\n2. Have a conversation with an AI customer\n3. Get instant feedback on your 8 Signal Intelligence™ capabilities\n4. See specific examples of what worked and what to improve\n\nThe AI adapts to your responses—if you handle an objection well, it might open up. If you miss a cue, it might get more guarded.\n\nMost reps see improvement after just 3-5 practice sessions. Want to know what the feedback looks like?";
      case "ethics":
        return `Ethics and safety are built into everything we do.

Our guiding principle: "If a response would feel inappropriate if the roles were reversed, it's outside our boundary."

We're non-clinical, non-diagnostic, and behavior-only. We never infer emotions, predict intent, or assess personality. All metrics are transparent, explainable, and used only for learning—never for employment decisions or performance evaluation.

Want to know more about our safeguards or compliance approach?`;
      case "boundary_correction":
        return "Just to clarify—Signal Intelligence™ focuses only on observable conversation behaviors. We don't detect emotions, predict intent, or assess personality traits.\n\nIf you're asking about how we observe and coach behaviors during practice, I'm happy to explain that. Or if you're curious about what makes our approach different from other training, I can share that too.\n\nWhat specifically were you wondering about?";
      case "use_cases":
        return "ReflectivAI works for three key groups:\n\n**Sales Reps**: Practice high-stakes conversations, get instant feedback, build confidence. 89% report feeling more prepared after using it.\n\n**Sales Managers**: Coach with a structured framework, see real-time skill development, scale training across your team.\n\n**Enablement Leaders**: Accelerate onboarding (3x faster ramp time), identify skill gaps, measure training effectiveness with behavioral data.\n\nWhich role are you most interested in learning about?";
      case "platform_features":
        return "The ReflectivAI platform includes:\n\n• AI Coach for instant, personalized feedback\n• Role Play scenarios across 9+ therapeutic areas\n• Dashboard with skill development tracking\n• Coaching cards that translate scores into actionable guidance\n• Team analytics for managers\n\nEverything is based on practice sessions, not live call monitoring. Your data stays private and is used only for learning.\n\nWant a walkthrough of any specific feature?";
      case "results":
        return "Our customers see real results:\n\n• 75% higher skill retention vs. traditional training\n• 3x faster ramp time for new reps\n• 89% of reps report increased confidence\n• 34% increase in close rates (customer testimonial)\n\nThe key is experiential learning in a safe environment. You build muscle memory through practice, not just knowledge through lectures.\n\nWant to hear more about how teams are using this?";
      case "general":
      default:
        return this.generalResponse();
    }
  }
  boundaryCorrectionResponse() {
    return `Signal Intelligence™ focuses on observable conversation behavior only. It does not infer emotions, intent, or internal states.

${this.kb.ethics.whatNotMeasured}

If you're asking about how behaviors are observed or coached during practice, I can explain that. Would you like to know more about:
• How behavioral metrics work
• What AI Coach provides
• How practice sessions are structured`;
  }
  generalResponse() {
    return `I'm here to help! I can explain:

• What Signal Intelligence™ is and how it works
• The 8 conversational skills you can develop
• How AI Coach and Role Play work
• Who uses ReflectivAI and what results they see
• Our ethics and safeguards

What are you most curious about?`;
  }
}
const responseEngine = new AloraResponseEngine();
function AloraAssistant() {
  const [isOpen, setIsOpen] = reactExports.useState(false);
  const [messages, setMessages] = reactExports.useState([{
    id: "1",
    role: "assistant",
    content: "Hi! I'm Alora, your ReflectivAI assistant. I can answer any questions about Signal Intelligence™, our platform, AI Coach, Role Play, and how we help sales professionals develop conversational skills. What would you like to know?",
    timestamp: /* @__PURE__ */ new Date()
  }]);
  const [inputValue, setInputValue] = reactExports.useState("");
  const [isTyping, setIsTyping] = reactExports.useState(false);
  const scrollAreaRef = reactExports.useRef(null);
  const inputRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);
  reactExports.useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector("[data-radix-scroll-area-viewport]");
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  }, [messages, isTyping]);
  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;
    const userMessage = {
      id: Date.now().toString(),
      role: "user",
      content: inputValue,
      timestamp: /* @__PURE__ */ new Date()
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    const intents = responseEngine.detectIntent(inputValue);
    const responseContent = responseEngine.generateResponse(intents);
    const assistantMessage = {
      id: (Date.now() + 1).toString(),
      role: "assistant",
      content: responseContent,
      timestamp: /* @__PURE__ */ new Date()
    };
    setMessages((prev) => [...prev, assistantMessage]);
    setIsTyping(false);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => setIsOpen(true), className: "fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg bg-primary hover:bg-primary/90 z-50", "aria-label": "Open Alora Assistant", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-6 w-6" }) }),
    isOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed bottom-24 right-6 w-96 h-[600px] bg-background border border-border rounded-lg shadow-2xl z-50 flex flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-4 border-b border-border bg-primary text-primary-foreground rounded-t-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-5 w-5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold", children: "Alora" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs opacity-90", children: "ReflectivAI Assistant" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "icon", onClick: () => setIsOpen(false), className: "text-primary-foreground hover:bg-primary-foreground/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollArea, { ref: scrollAreaRef, className: "flex-1 p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        messages.map((message) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex ${message.role === "user" ? "justify-end" : "justify-start"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `max-w-[80%] rounded-lg p-3 ${message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm whitespace-pre-wrap", children: message.content }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs opacity-70 mt-1", children: message.timestamp.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
          }) })
        ] }) }, message.id)),
        isTyping && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-start", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-muted rounded-lg p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 bg-foreground/40 rounded-full animate-bounce" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 bg-foreground/40 rounded-full animate-bounce", style: {
            animationDelay: "0.1s"
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 bg-foreground/40 rounded-full animate-bounce", style: {
            animationDelay: "0.2s"
          } })
        ] }) }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { ref: inputRef, value: inputValue, onChange: (e) => setInputValue(e.target.value), onKeyPress: handleKeyPress, placeholder: "Ask me anything about ReflectivAI...", className: "flex-1", disabled: isTyping }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: handleSendMessage, disabled: !inputValue.trim() || isTyping, size: "icon", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4" }) })
      ] }) })
    ] })
  ] });
}
function RootLayout({
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Website, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    children,
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AloraAssistant, {})
  ] });
}
const Dialog = Root$1;
const DialogPortal = Portal;
const DialogOverlay = reactExports.forwardRef(({
  className,
  ...props
}, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Overlay, { ref, className: cn("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className), ...props }));
DialogOverlay.displayName = Overlay.displayName;
const DialogContent = reactExports.forwardRef(({
  className,
  children,
  ...props
}, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(Content$1, { ref, className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", className), ...props, children: [
    children,
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Close" })
    ] })
  ] })
] }));
DialogContent.displayName = Content$1.displayName;
const DialogHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className), ...props });
DialogHeader.displayName = "DialogHeader";
const DialogTitle = reactExports.forwardRef(({
  className,
  ...props
}, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Title, { ref, className: cn("text-lg font-semibold leading-none tracking-tight", className), ...props }));
DialogTitle.displayName = Title.displayName;
const DialogDescription = reactExports.forwardRef(({
  className,
  ...props
}, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Description, { ref, className: cn("text-sm text-muted-foreground", className), ...props }));
DialogDescription.displayName = Description.displayName;
const Tabs = Root2$1;
const TabsList = reactExports.forwardRef(({
  className,
  ...props
}, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(List$1, { ref, className: cn("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground", className), ...props }));
TabsList.displayName = List$1.displayName;
const TabsTrigger = reactExports.forwardRef(({
  className,
  ...props
}, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Trigger$1, { ref, className: cn("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm", className), ...props }));
TabsTrigger.displayName = Trigger$1.displayName;
const TabsContent = reactExports.forwardRef(({
  className,
  ...props
}, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Content$2, { ref, className: cn("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className), ...props }));
TabsContent.displayName = Content$2.displayName;
const Card = reactExports.forwardRef(({
  className,
  ...props
}, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: cn("rounded-lg border bg-card text-card-foreground shadow-sm", className), ...props }));
Card.displayName = "Card";
const CardHeader = reactExports.forwardRef(({
  className,
  ...props
}, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: cn("flex flex-col space-y-1.5 p-6", className), ...props }));
CardHeader.displayName = "CardHeader";
const CardTitle = reactExports.forwardRef(({
  className,
  ...props
}, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: cn("text-2xl font-semibold leading-none tracking-tight", className), ...props }));
CardTitle.displayName = "CardTitle";
const CardDescription = reactExports.forwardRef(({
  className,
  ...props
}, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: cn("text-sm text-muted-foreground", className), ...props }));
CardDescription.displayName = "CardDescription";
const CardContent = reactExports.forwardRef(({
  className,
  ...props
}, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: cn("p-6 pt-0", className), ...props }));
CardContent.displayName = "CardContent";
const CardFooter = reactExports.forwardRef(({
  className,
  ...props
}, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: cn("flex items-center p-6 pt-0", className), ...props }));
CardFooter.displayName = "CardFooter";
const badgeVariants = cva("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
  variants: {
    variant: {
      default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
      secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
      destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
      outline: "text-foreground"
    }
  },
  defaultVariants: {
    variant: "default"
  }
});
function Badge({
  className,
  variant,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn(badgeVariants({
    variant
  }), className), ...props });
}
const features = [{
  id: "dashboard",
  title: "AI-Powered Dashboard",
  description: "Track your progress across all 8 Signal Intelligence™ Capabilities with real-time scored analytics and personalized insights.",
  image: "https://media.gettyimages.com/id/1621583577/photo/4k-hud-futuristic-elements-target-monitor-user-control-interface-screen-panel.jpg?b=1&s=2048x2048&w=0&k=20&c=_l9P7RzaQ3TSlIGy3sajz6hOEEEndho2OvcC2xPFLn8=",
  highlights: ["Real-time Signal Intelligence™ scores", "Personalized daily insights", "Progress tracking", "Performance trends"]
}, {
  id: "ai-coach",
  title: "AI Coach Interface",
  description: "Get instant, personalized coaching feedback on your conversations with healthcare stakeholders.",
  image: "https://media.gettyimages.com/id/1496934378/photo/ai-for-artificial-intelligence-displayed-on-a-computer-screen-against-a-background-of.jpg?b=1&s=2048x2048&w=0&k=20&c=PusTkWQGH5xvZl01jIS-pshJWCdHyf-EAt5i9JKtXqM=",
  highlights: ["10 EI dimensions analyzed", "Actionable feedback", "Conversation insights", "Improvement recommendations"]
}, {
  id: "role-play",
  title: "Role Play Simulator",
  description: "Practice with realistic pharma scenarios across multiple therapeutic areas with instant AI feedback.",
  image: "https://media.gettyimages.com/id/481401388/photo/mans-hands-on-a-tablet-pc-displaying-business-graphs.jpg?b=1&s=2048x2048&w=0&k=20&c=Xm3Un4ZWOi2ITCTzxLu71PmM51Jjy8JiPRqWHSW2Bh4=",
  highlights: ["9+ disease state scenarios", "Instant feedback", "Compliance validation", "Skill building exercises"]
}];
function PlatformShowcase() {
  const [activeTab, setActiveTab] = reactExports.useState("dashboard");
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-muted/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mb-4 bg-accent text-accent-foreground", children: "Platform Overview" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-bold mb-4", children: "See ReflectivAI in Action" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground max-w-2xl mx-auto", children: "Explore our intuitive platform designed specifically for life sciences sales professionals" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { value: activeTab, onValueChange: setActiveTab, className: "w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "grid w-full max-w-3xl mx-auto grid-cols-3 mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "dashboard", children: "Dashboard" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "ai-coach", children: "AI Coach" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "role-play", children: "Role Play" })
      ] }),
      features.map((feature) => /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: feature.id, className: "mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-2 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-[400px] md:h-auto bg-gradient-to-br from-primary/10 to-accent/10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: feature.image, alt: feature.title, className: "w-full h-full object-cover" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "lg", className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-accent hover:bg-accent/90", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "mr-2 h-5 w-5" }),
            "Watch Demo"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 md:p-12 flex flex-col justify-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl font-bold mb-4", children: feature.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground mb-6", children: feature.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: feature.highlights.map((highlight, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5 text-accent flex-shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: highlight })
          ] }, index)) })
        ] })
      ] }) }) }) }, feature.id))
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "max-w-4xl mx-auto overflow-hidden border-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative aspect-video bg-gradient-to-br from-primary/20 to-accent/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "lg", className: "bg-accent hover:bg-accent/90 mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "mr-2 h-6 w-6" }),
        "Watch Full Platform Demo"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "3 minute overview" })
    ] }) }) }) }) }) })
  ] }) });
}
const stats = [{
  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "h-8 w-8" }),
  value: 94,
  suffix: "%",
  label: "Accuracy Rate",
  color: "text-accent"
}, {
  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-8 w-8" }),
  value: 4.4,
  suffix: "/5",
  label: "Signal Interpretation",
  color: "text-primary"
}, {
  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "h-8 w-8" }),
  value: 100,
  suffix: "%",
  label: "Compliance",
  color: "text-accent"
}, {
  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-8 w-8" }),
  value: 8.5,
  suffix: "/10",
  label: "User Satisfaction",
  color: "text-primary"
}];
function useCountUp(end, duration = 2e3, isVisible) {
  const [count, setCount] = reactExports.useState(0);
  reactExports.useEffect(() => {
    if (!isVisible) return;
    let startTime;
    let animationFrame;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end * 10) / 10);
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isVisible]);
  return count;
}
function StatCard({
  stat,
  index
}) {
  const [isVisible, setIsVisible] = reactExports.useState(false);
  const ref = reactExports.useRef(null);
  const count = useCountUp(stat.value, 2e3, isVisible);
  reactExports.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.1
    });
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { ref, className: "border-2 hover:border-accent transition-all duration-300 hover:shadow-lg", style: {
    animationDelay: `${index * 100}ms`
  }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4 ${stat.color}`, children: stat.icon }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-4xl font-bold mb-2", children: [
      count.toFixed(stat.suffix === "/10" ? 1 : 0),
      stat.suffix
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground font-medium", children: stat.label })
  ] }) });
}
function AnimatedStats() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-bold mb-4", children: "Proven Results" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground max-w-2xl mx-auto", children: "Real metrics from life sciences sales professionals using ReflectivAI" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: stats.map((stat, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { stat, index }, index)) })
  ] }) });
}
const Avatar = reactExports.forwardRef(({
  className,
  ...props
}, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Root$2, { ref, className: cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className), ...props }));
Avatar.displayName = Root$2.displayName;
const AvatarImage = reactExports.forwardRef(({
  className,
  ...props
}, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { ref, className: cn("aspect-square h-full w-full", className), ...props }));
AvatarImage.displayName = Image.displayName;
const AvatarFallback = reactExports.forwardRef(({
  className,
  ...props
}, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Fallback, { ref, className: cn("flex h-full w-full items-center justify-center rounded-full bg-muted", className), ...props }));
AvatarFallback.displayName = Fallback.displayName;
const testimonials = [{
  quote: "ReflectivAI transformed how our team approaches stakeholder conversations. The real-time coaching has been invaluable.",
  author: "Sarah Chen",
  role: "Senior Medical Science Liaison",
  company: "Leading Biotech Company",
  initials: "SC"
}, {
  quote: "The role-play scenarios are incredibly realistic. I feel more confident in my HCP interactions after just two weeks.",
  author: "Michael Rodriguez",
  role: "Oncology Sales Representative",
  company: "Global Pharma Leader",
  initials: "MR"
}, {
  quote: "Finally, a platform that understands the nuances of life sciences sales. The compliance validation gives us peace of mind.",
  author: "Dr. Emily Watson",
  role: "Director of Sales Enablement",
  company: "Specialty Pharma",
  initials: "EW"
}];
function Testimonials() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-muted/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mb-4 bg-accent text-accent-foreground", children: "Testimonials" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-bold mb-4", children: "Trusted by Life Sciences Professionals" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground max-w-2xl mx-auto", children: "See what sales teams are saying about ReflectivAI" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-8", children: testimonials.map((testimonial, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-2 hover:border-accent transition-all duration-300 hover:shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "h-10 w-10 text-accent mb-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg mb-6 leading-relaxed", children: [
        '"',
        testimonial.quote,
        '"'
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { className: "h-12 w-12 bg-primary text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarFallback, { children: testimonial.initials }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: testimonial.author }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: testimonial.role }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: testimonial.company })
        ] })
      ] })
    ] }) }, index)) })
  ] }) });
}
const Accordion = Root2$2;
const AccordionItem = reactExports.forwardRef(({
  className,
  ...props
}, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Item$1, { ref, className: cn("border-b", className), ...props }));
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = reactExports.forwardRef(({
  className,
  children,
  ...props
}, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Header$1, { className: "flex", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Trigger2, { ref, className: cn("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180", className), ...props, children: [
  children,
  /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4 shrink-0 transition-transform duration-200" })
] }) }));
AccordionTrigger.displayName = Trigger2.displayName;
const AccordionContent = reactExports.forwardRef(({
  className,
  children,
  ...props
}, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Content2, { ref, className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down", ...props, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("pb-4 pt-0", className), children }) }));
AccordionContent.displayName = Content2.displayName;
const faqs = [{
  question: "How does ReflectivAI ensure regulatory compliance?",
  answer: "Every interaction is validated by human experts and aligned with FDA, EMA, and industry standards. We maintain 100% compliance through continuous monitoring and validation of all AI-generated content."
}, {
  question: "What makes ReflectivAI different from traditional sales training?",
  answer: "Unlike one-time workshops, ReflectivAI provides 24/7 AI-powered coaching, real-time feedback, and personalized learning paths. You practice with realistic scenarios and receive instant, actionable insights to improve your Signal Intelligence™ capabilities and sales effectiveness."
}, {
  question: "How long does it take to see results?",
  answer: "Most users report improved confidence and stakeholder engagement within 2 weeks. Our data shows measurable improvements in Signal Intelligence™ Capabilities (Signal Awareness, Signal Interpretation, Value Connection) after just 10 practice sessions."
}, {
  question: "Can ReflectivAI integrate with our existing CRM?",
  answer: "Yes! ReflectivAI integrates with major CRM platforms including Salesforce, Veeva, and Microsoft Dynamics. We can also provide custom integrations for your specific tech stack."
}, {
  question: "What therapeutic areas do you cover?",
  answer: "We currently offer scenarios across HIV, Oncology, Cardiology, Vaccines, COVID-19, and Rare Disease. We're continuously expanding our library and can create custom scenarios for your specific products and therapeutic areas."
}, {
  question: "Is my data secure?",
  answer: "Absolutely. We use enterprise-grade encryption, comply with HIPAA and GDPR, and never share your data with third parties. All conversations are stored securely and can be deleted at your request."
}, {
  question: "How is pricing structured?",
  answer: "We offer flexible pricing based on team size and features needed. Plans include per-user licensing, enterprise packages, and custom solutions. Contact our sales team for a personalized quote."
}, {
  question: "Do you offer a free trial?",
  answer: "Yes! We offer a 14-day free trial with full access to all features. No credit card required. Schedule a demo to get started."
}];
function FAQ() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "faq", className: "py-20 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 max-w-4xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mb-4 bg-accent text-accent-foreground", children: "FAQ" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-bold mb-4", children: "Frequently Asked Questions" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground", children: "Everything you need to know about ReflectivAI" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Accordion, { type: "single", collapsible: true, className: "w-full", children: faqs.map((faq, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionItem, { value: `item-${index}`, className: "border-2 mb-4 rounded-lg px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionTrigger, { className: "text-left font-semibold hover:text-accent", children: faq.question }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionContent, { className: "text-muted-foreground leading-relaxed", children: faq.answer })
    ] }, index)) })
  ] }) });
}
function CTASection() {
  return null;
}
function LiveMetricsDashboard() {
  const [metrics, setMetrics] = reactExports.useState([{
    id: "accuracy",
    label: "Accuracy Score",
    value: 94,
    unit: "%",
    trend: "up",
    trendValue: 2.3,
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "h-5 w-5" }),
    color: "text-green-500"
  }, {
    id: "engagement",
    label: "Customer Engagement",
    value: 88,
    unit: "%",
    trend: "up",
    trendValue: 5.1,
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "h-5 w-5" }),
    color: "text-blue-500"
  }, {
    id: "active-users",
    label: "Active Users",
    value: 1247,
    unit: "",
    trend: "up",
    trendValue: 12.5,
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-5 w-5" }),
    color: "text-purple-500"
  }, {
    id: "engagement",
    label: "Engagement Rate",
    value: 92,
    unit: "%",
    trend: "up",
    trendValue: 3.7,
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-5 w-5" }),
    color: "text-yellow-500"
  }]);
  reactExports.useEffect(() => {
    const interval = setInterval(() => {
      setMetrics((prevMetrics) => prevMetrics.map((metric) => {
        const change = (Math.random() - 0.5) * 4;
        let newValue = metric.value + change;
        if (metric.unit === "%") {
          newValue = Math.max(75, Math.min(100, newValue));
        } else {
          newValue = Math.max(1e3, Math.min(2e3, newValue));
        }
        const newTrend = change > 0.5 ? "up" : change < -0.5 ? "down" : "stable";
        const newTrendValue = Math.abs(change);
        return {
          ...metric,
          value: Math.round(newValue * 10) / 10,
          trend: newTrend,
          trendValue: Math.round(newTrendValue * 10) / 10
        };
      }));
    }, 3e3);
    return () => clearInterval(interval);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full py-16 bg-muted/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold mb-4", children: "Live Platform Metrics" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-2xl mx-auto", children: "Real-time performance data from our platform. Watch as thousands of sales professionals improve their skills every day." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: metrics.map((metric) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "relative overflow-hidden border-2 hover:border-accent transition-all duration-300 hover:shadow-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-sm font-medium text-muted-foreground flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: metric.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: metric.color, children: metric.icon })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl font-bold", children: metric.value.toLocaleString() }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl text-muted-foreground", children: metric.unit })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm", children: [
            metric.trend === "up" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-4 w-4 text-green-500" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-green-500 font-medium", children: [
                "+",
                metric.trendValue,
                "%"
              ] })
            ] }),
            metric.trend === "down" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingDown, { className: "h-4 w-4 text-red-500" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-red-500 font-medium", children: [
                "-",
                metric.trendValue,
                "%"
              ] })
            ] }),
            metric.trend === "stable" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Stable" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "vs last hour" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-2 right-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-2 bg-green-500 rounded-full animate-ping absolute" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-2 bg-green-500 rounded-full" })
        ] }) })
      ] })
    ] }, metric.id)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-card rounded-lg border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-accent", children: "2.4M+" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: "Practice Sessions" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-card rounded-lg border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-accent", children: "98%" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: "Satisfaction Rate" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-card rounded-lg border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-accent", children: "45min" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: "Avg. Session Time" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-card rounded-lg border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-accent", children: "24/7" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: "Platform Uptime" })
      ] })
    ] })
  ] }) });
}
const ACTIVITY_TEMPLATES = [{
  action: "completed a role-play scenario",
  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-4 w-4" }),
  color: "text-green-500"
}, {
  action: "achieved 4.8/5 Signal Interpretation score",
  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4" }),
  color: "text-yellow-500"
}, {
  action: "improved accuracy by 12%",
  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-4 w-4" }),
  color: "text-blue-500"
}, {
  action: "earned Compliance Master badge",
  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "h-4 w-4" }),
  color: "text-purple-500"
}, {
  action: "completed 10 coaching sessions",
  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-4 w-4" }),
  color: "text-orange-500"
}, {
  action: "joined the platform",
  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-4 w-4" }),
  color: "text-teal-500"
}];
const NAMES = ["Sarah Chen", "Michael Rodriguez", "Emily Watson", "David Kim", "Jessica Martinez", "James Thompson", "Maria Garcia", "Robert Lee", "Amanda Johnson", "Christopher Brown", "Lisa Anderson", "Daniel Wilson", "Jennifer Taylor", "Matthew Davis", "Ashley Moore"];
function generateActivity() {
  const template = ACTIVITY_TEMPLATES[Math.floor(Math.random() * ACTIVITY_TEMPLATES.length)];
  const name = NAMES[Math.floor(Math.random() * NAMES.length)];
  return {
    id: Date.now().toString() + Math.random(),
    user: name,
    action: template.action,
    timestamp: /* @__PURE__ */ new Date(),
    icon: template.icon,
    color: template.color
  };
}
function LiveActivityFeed() {
  const [activities, setActivities] = reactExports.useState(() => [generateActivity(), generateActivity(), generateActivity(), generateActivity(), generateActivity()]);
  reactExports.useEffect(() => {
    const interval = setInterval(() => {
      setActivities((prev) => {
        const newActivity = generateActivity();
        return [newActivity, ...prev.slice(0, 9)];
      });
    }, 5e3);
    return () => clearInterval(interval);
  }, []);
  const getInitials = (name) => {
    return name.split(" ").map((n) => n[0]).join("").toUpperCase();
  };
  const getTimeAgo = (timestamp) => {
    const seconds = Math.floor(((/* @__PURE__ */ new Date()).getTime() - timestamp.getTime()) / 1e3);
    if (seconds < 60) return "just now";
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    return `${hours}h ago`;
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full py-16 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold mb-4", children: "Live Activity Feed" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-2xl mx-auto", children: "See what sales professionals are achieving right now on ReflectivAI. Join thousands of users improving their skills every day." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "max-w-3xl mx-auto p-6 border-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: activities.map((activity, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-all duration-300 animate-in fade-in slide-in-from-top-2", style: {
        animationDelay: `${index * 50}ms`
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { className: "h-10 w-10 bg-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarFallback, { className: "bg-primary text-primary-foreground text-sm", children: getInitials(activity.user) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: activity.user }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
                " ",
                activity.action
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `flex-shrink-0 ${activity.color}`, children: activity.icon })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: getTimeAgo(activity.timestamp) })
        ] })
      ] }, activity.id)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-2 bg-green-500 rounded-full animate-ping absolute" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-2 bg-green-500 rounded-full" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Live updates" })
      ] })
    ] })
  ] }) });
}
const labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
const Label = reactExports.forwardRef(({
  className,
  ...props
}, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Root$3, { ref, className: cn(labelVariants(), className), ...props }));
Label.displayName = Root$3.displayName;
const Slider = reactExports.forwardRef(({
  className,
  ...props
}, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Root$4, { ref, className: cn("relative flex w-full touch-none select-none items-center", className), ...props, children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(Track, { className: "relative h-2 w-full grow overflow-hidden rounded-full bg-secondary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Range, { className: "absolute h-full bg-primary" }) }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(Thumb, { className: "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" })
] }));
Slider.displayName = Root$4.displayName;
function ROICalculator() {
  const [teamSize, setTeamSize] = reactExports.useState(50);
  const [avgDealSize, setAvgDealSize] = reactExports.useState(15e4);
  const [currentWinRate, setCurrentWinRate] = reactExports.useState(25);
  const improvedWinRate = Math.min(currentWinRate * 1.15, 45);
  const improvedDealSize = avgDealSize * 1.08;
  const timeSaved = teamSize * 10;
  const dealsPerRep = 12;
  const currentRevenue = teamSize * dealsPerRep * (currentWinRate / 100) * avgDealSize;
  const improvedRevenue = teamSize * dealsPerRep * (improvedWinRate / 100) * improvedDealSize;
  const revenueIncrease = improvedRevenue - currentRevenue;
  const platformCost = teamSize * 200 * 12;
  const netGain = revenueIncrease - platformCost;
  const roiPercentage = (netGain / platformCost * 100).toFixed(0);
  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full py-16 bg-muted/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Calculator, { className: "h-8 w-8 text-accent" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold mb-4", children: "ROI Calculator" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-2xl mx-auto", children: "See the potential impact of ReflectivAI on your sales team. Adjust the sliders to match your organization." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto grid md:grid-cols-2 gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-lg", children: "Your Team Details" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-medium", children: "Team Size" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl font-bold text-accent", children: teamSize })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Slider, { value: [teamSize], onValueChange: (value) => setTeamSize(value[0]), min: 5, max: 500, step: 5, className: "w-full" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Number of sales reps" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-medium", children: "Avg Deal Size" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl font-bold text-accent", children: formatCurrency(avgDealSize) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Slider, { value: [avgDealSize], onValueChange: (value) => setAvgDealSize(value[0]), min: 5e4, max: 1e6, step: 1e4, className: "w-full" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Average contract value" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-medium", children: "Current Win Rate" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-2xl font-bold text-accent", children: [
                currentWinRate,
                "%"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Slider, { value: [currentWinRate], onValueChange: (value) => setCurrentWinRate(value[0]), min: 10, max: 40, step: 1, className: "w-full" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Percentage of deals won" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-accent bg-accent/5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-lg flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-5 w-5 text-accent" }),
            "Annual Revenue Impact"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-1", children: "Current Annual Revenue" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold", children: formatCurrency(currentRevenue) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-1", children: "With ReflectivAI" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-bold text-accent", children: formatCurrency(improvedRevenue) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-4 border-t", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-1", children: "Revenue Increase" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl font-bold text-green-500", children: [
                "+",
                formatCurrency(revenueIncrease)
              ] })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "pt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-4 bg-muted/50 rounded-lg", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "h-6 w-6 text-accent mx-auto mb-2" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-3xl font-bold text-accent", children: [
              roiPercentage,
              "%"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "ROI" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-4 bg-muted/50 rounded-lg", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-6 w-6 text-accent mx-auto mb-2" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-3xl font-bold text-accent", children: [
              timeSaved,
              "h"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Time Saved/Month" })
          ] })
        ] }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-2 bg-primary text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "pt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm opacity-90 mb-2", children: "Net Annual Gain" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-4xl font-bold mb-4", children: formatCurrency(netGain) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm opacity-75", children: "Based on 15% win rate improvement and 8% larger deal sizes" })
        ] }) }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground max-w-2xl mx-auto", children: "These calculations are based on average improvements seen by ReflectivAI customers. Actual results may vary based on your team's starting point and engagement level." }) })
  ] }) });
}
const PROOF_ITEMS = [{
  id: "1",
  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-4 w-4" }),
  text: "Pfizer just joined ReflectivAI",
  color: "text-blue-500"
}, {
  id: "2",
  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-4 w-4" }),
  text: "23 demos scheduled this week",
  color: "text-green-500"
}, {
  id: "3",
  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "h-4 w-4" }),
  text: "Johnson & Johnson renewed for 3 years",
  color: "text-purple-500"
}, {
  id: "4",
  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-4 w-4" }),
  text: "1,247 active users this month",
  color: "text-orange-500"
}, {
  id: "5",
  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-4 w-4" }),
  text: "Novartis expanded to 500 seats",
  color: "text-teal-500"
}, {
  id: "6",
  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-4 w-4" }),
  text: "15 new teams onboarded this month",
  color: "text-pink-500"
}, {
  id: "7",
  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "h-4 w-4" }),
  text: "Merck achieved 95% team adoption",
  color: "text-yellow-500"
}, {
  id: "8",
  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-4 w-4" }),
  text: "2.4M practice sessions completed",
  color: "text-indigo-500"
}];
function SocialProofTicker() {
  const [currentIndex, setCurrentIndex] = reactExports.useState(0);
  const [isVisible, setIsVisible] = reactExports.useState(true);
  reactExports.useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % PROOF_ITEMS.length);
        setIsVisible(true);
      }, 300);
    }, 4e3);
    return () => clearInterval(interval);
  }, []);
  const currentItem = PROOF_ITEMS[currentIndex];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full bg-accent/10 border-y border-accent/20 py-3 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center gap-2 transition-all duration-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: currentItem.color, children: currentItem.icon }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-foreground", children: currentItem.text })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 ml-4", children: PROOF_ITEMS.map((_, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-1.5 rounded-full transition-all duration-300 ${index === currentIndex ? "w-6 bg-accent" : "w-1.5 bg-accent/30"}` }, index)) })
  ] }) }) });
}
const capabilityDetails = {
  "signal-awareness": {
    id: "signal-awareness",
    index: 1,
    name: "Signal Awareness",
    behavioralMetric: "Question Quality",
    exampleScore: "4.3 / 5",
    definition: "The ability to notice what matters in the conversation and ask purposeful, customer-centric questions.",
    whatScoreReflects: "How consistently questions surface customer priorities rather than gather surface information.",
    whatGoodLooksLike: ["Open-ended, diagnostic questions", "Follow-ups that build on prior answers", "Logical sequencing without interrogation"],
    howCalculated: ["Open vs. closed question ratio", "Relevance to stated customer goals", "Depth of follow-up questioning"],
    scoreCalculation: "(Open Questions Ratio: 0.92 × 2.0) + (Goal Relevance Score: 0.88 × 2.0) + (Follow-Up Depth Score: 0.85 × 1.0) = 4.30 / 5",
    howMeasured: "Question structure classification, topic-goal alignment detection, turn-to-turn continuity"
  },
  "signal-interpretation": {
    id: "signal-interpretation",
    index: 2,
    name: "Signal Interpretation",
    behavioralMetric: "Listening & Responsiveness",
    exampleScore: "4.1 / 5",
    definition: "The ability to accurately hear, acknowledge, and respond to customer input.",
    whatScoreReflects: "Whether responses demonstrate understanding and adapt to new information.",
    whatGoodLooksLike: ["Clear acknowledgment before responding", "Accurate paraphrasing", "Adjustments after new input"],
    howCalculated: ["Acknowledgment frequency", "Paraphrase accuracy", "Response alignment"],
    scoreCalculation: "(Acknowledgment Presence: 0.90 × 1.5) + (Paraphrase Accuracy: 0.85 × 2.0) + (Response Alignment: 0.80 × 1.5) = 4.10 / 5",
    howMeasured: "Turn-level response mapping, linguistic acknowledgment markers, adjustment detection"
  },
  "value-connection": {
    id: "value-connection",
    index: 3,
    name: "Value Connection",
    behavioralMetric: "Value Framing (Making It Matter)",
    exampleScore: "4.0 / 5",
    definition: "The ability to connect information to outcomes that matter to the customer.",
    whatScoreReflects: "How consistently communication emphasizes customer outcomes over product features.",
    whatGoodLooksLike: ["Outcome-based language", "Clear linkage to priorities", "Minimal feature dumping"],
    howCalculated: ["Outcome vs. feature language ratio", "Explicit goal references"],
    scoreCalculation: "(Outcome Language Ratio: 0.80 × 2.5) + (Goal Link Frequency: 0.75 × 2.5) = 4.00 / 5",
    howMeasured: "Language classification, goal-outcome linkage detection"
  },
  "customer-engagement-monitoring": {
    id: "customer-engagement-monitoring",
    index: 4,
    name: "Customer Engagement Monitoring",
    behavioralMetric: "Customer Engagement Cues",
    exampleScore: "4.2 / 5",
    definition: "The ability to notice shifts in engagement and conversational momentum.",
    whatScoreReflects: "Sensitivity to participation changes and engagement signals.",
    whatGoodLooksLike: ["Awareness of silence or pacing changes", "Recognition of forward-looking cues", "Adjustment when engagement drops"],
    howCalculated: ["Talk-time balance", "Question depth", "Forward-looking language"],
    scoreCalculation: "(Talk-Time Balance: 0.85 × 1.5) + (Question Depth: 0.90 × 1.5) + (Forward-Looking Cues: 0.88 × 2.0) = 4.20 / 5",
    howMeasured: "Participation pattern tracking, cue frequency analysis"
  },
  "objection-navigation": {
    id: "objection-navigation",
    index: 5,
    name: "Objection Navigation",
    behavioralMetric: "Objection Handling",
    exampleScore: "3.9 / 5",
    definition: "The ability to respond constructively to resistance without defensiveness.",
    whatScoreReflects: "Quality of acknowledgment and composure during objections.",
    whatGoodLooksLike: ["Acknowledgment before rebuttal", "Calm pacing", "Exploratory questioning"],
    howCalculated: ["Acknowledgment presence", "Rebuttal timing", "Defensive language absence"],
    scoreCalculation: "(Acknowledgment Score: 0.85 × 2.0) + (Rebuttal Timing Score: 0.75 × 1.5) + (Defensive Language Avoidance: 0.80 × 1.5) = 3.90 / 5",
    howMeasured: "Objection-response sequencing, tone marker detection"
  },
  "conversation-management": {
    id: "conversation-management",
    index: 6,
    name: "Conversation Management",
    behavioralMetric: "Conversation Control & Structure",
    exampleScore: "4.4 / 5",
    definition: "The ability to guide the conversation with clarity and purpose.",
    whatScoreReflects: "Structural coherence and directional control.",
    whatGoodLooksLike: ["Clear purpose setting", "Smooth transitions", "Effective summarization"],
    howCalculated: ["Purpose clarity", "Transition effectiveness", "Summary presence"],
    scoreCalculation: "(Purpose Statements: 0.95 × 1.5) + (Transition Clarity: 0.90 × 1.5) + (Summarization Quality: 0.88 × 2.0) = 4.40 / 5",
    howMeasured: "Structural markers, topic transition detection, close-out language"
  },
  "adaptive-response": {
    id: "adaptive-response",
    index: 7,
    name: "Adaptive Response",
    behavioralMetric: "Adaptability",
    exampleScore: "4.1 / 5",
    definition: "The ability to adjust approach based on what is happening in the moment.",
    whatScoreReflects: "Responsiveness to new conversational signals.",
    whatGoodLooksLike: ["Adjustments in tone, depth, or pacing", "Abandoning scripts when needed"],
    howCalculated: ["Signal-response alignment", "Degree of approach change"],
    scoreCalculation: "(Signal Detection Accuracy: 0.85 × 2.0) + (Response Adjustment Strength: 0.80 × 2.0) = 4.10 / 5",
    howMeasured: "Cue-response mapping, language shift analysis"
  },
  "commitment-generation": {
    id: "commitment-generation",
    index: 8,
    name: "Commitment Generation",
    behavioralMetric: "Commitment Gaining",
    exampleScore: "4.5 / 5",
    definition: "The ability to secure clear, voluntary next actions.",
    whatScoreReflects: "Clarity and mutuality of next steps.",
    whatGoodLooksLike: ["Specific next steps", "Clear ownership", "Mutual confirmation"],
    howCalculated: ["Next-step specificity", "Confirmation language"],
    scoreCalculation: "(Next-Step Clarity: 0.95 × 2.5) + (Mutual Confirmation: 0.90 × 2.5) = 4.50 / 5",
    howMeasured: "Commitment markers, agreement confirmation"
  }
};
function HomePage() {
  const [selectedCapability, setSelectedCapability] = reactExports.useState(null);
  const [isDialogOpen, setIsDialogOpen] = reactExports.useState(false);
  const openCapabilityDetail = (capabilityKey) => {
    setSelectedCapability(capabilityKey);
    setIsDialogOpen(true);
  };
  const currentCapability = selectedCapability ? capabilityDetails[selectedCapability] : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 lg:py-32 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[720px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[15px] md:text-[17px] uppercase tracking-[0.06em] font-medium", style: {
          color: "hsl(215, 16%, 47%)"
        }, children: "SIGNAL INTELLIGENCE™ FOR LIFE SCIENCES SALES" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1]", style: {
          color: "hsl(210, 50%, 20%)"
        }, children: "Human judgment, made visible." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-semibold", style: {
          color: "hsl(180, 50%, 45%)"
        }, children: "AI, responsibly applied." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-[1.5] max-w-[640px]", style: {
          color: "hsl(215, 16%, 27%)"
        }, children: "Signal Intelligence™ helps professionals recognize what's changing in a conversation—and respond in ways that preserve trust and credibility." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center px-4 py-2 rounded-full text-sm font-medium", style: {
          backgroundColor: "hsl(180, 50%, 45%, 0.1)",
          color: "hsl(210, 50%, 20%)"
        }, children: "Behavior-based • Human-in-the-loop by design" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 mt-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "lg", className: "text-base", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link$1, { to: "/contact", children: [
          "Request Demo",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-5 w-5" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "lg", variant: "outline", className: "text-base", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link$1, { to: "/demo", children: "Explore Platform" }) })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl lg:text-5xl font-bold", children: "How It Works" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground max-w-3xl mx-auto", children: "During role-play practice, ReflectivAI highlights patterns in how conversations unfold—such as pacing, clarity, and engagement—using the Signal Intelligence™ framework. These insights support reflection and improvement, while judgment and decisions remain with the professional." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground max-w-3xl mx-auto mt-4", children: "Reps practice in simulated conversations. After each session, ReflectivAI organizes observable behaviors into Signal Intelligence™ domains to support reflection and coaching. Managers use coaching cards in 1:1s and training programs. Signal Intelligence™ is used in structured practice sessions, not on live customer calls." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground max-w-3xl mx-auto mt-4", children: "For sales professionals, these insights reveal where conversations stay aligned with purpose—and where hesitation, overload, or disengagement may be emerging before deals are at risk." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-8 mb-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-primary/5 border-2 border-primary rounded-xl p-8 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://img1.wsimg.com/isteam/ip/1de1dc96-7231-4608-aa4f-91d58be98037/E3495A4D-3DF5-4F48-A08B-700A67979836-b2f7133.png", alt: "Signal Intelligence Logo", className: "h-16 w-auto object-contain flex-shrink-0", style: {
            marginTop: "-0.25rem"
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold", children: "Signal Intelligence™" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-semibold text-primary", children: "The Core Capabilities" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Detects patterns in observable behaviors during practice conversations and surfaces reflections for professional judgment." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 pt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5 text-primary flex-shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "Highlights behavioral patterns in practice sessions" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5 text-primary flex-shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "Surfaces insights for reflection and coaching" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5 text-primary flex-shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "Enables repeatable, scalable training" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5 text-primary flex-shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "Used in structured practice, not live calls" })
          ] })
        ] })
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SocialProofTicker, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "w-full py-16 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-sm text-muted-foreground mb-8", children: "Trusted by leading Life Sciences organizations" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-center items-center gap-12 opacity-60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-semibold", children: "Pfizer" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-semibold", children: "Novartis" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-semibold", children: "Roche" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-semibold", children: "AstraZeneca" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-semibold", children: "Merck" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl lg:text-5xl font-bold", children: "Everything You Need to Excel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground max-w-2xl mx-auto", children: "From daily coaching to realistic practice scenarios, ReflectivAI gives you the tools to master pharma sales conversations" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-lg border border-border bg-background space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { className: "h-6 w-6 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold", children: "AI Coach" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Get personalized coaching and real-time feedback on your conversations" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-lg border border-border bg-background space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "h-6 w-6 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold", children: "Role Play Simulator" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Practice with realistic pharma scenarios across HIV, Oncology, Cardiology, and more" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-lg border border-border bg-background space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-6 w-6 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold", children: "Coaching Modules" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Structured learning paths for Discovery, Stakeholder Mapping, Clinical Evidence, and more" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-lg border border-border bg-background space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-6 w-6 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold", children: "Performance Analytics" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Track progress with behavioral metrics and skill development insights" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto text-center space-y-6 mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl lg:text-5xl font-bold", children: "Why Signal Intelligence™ Matters in Pharma" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground", children: "In high-expertise, regulated conversations, deals are rarely lost on data. They are lost when signals are missed." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-8 max-w-5xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-semibold text-primary", children: "Hesitation mistaken for resistance" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "When uncertainty is misread as pushback, reps over-explain and lose credibility" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-semibold text-primary", children: "Challenge triggering defensiveness" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "When questions are met with justification instead of curiosity, trust erodes" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-semibold text-primary", children: "Expertise triggering status threat" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "When reps position themselves above HCPs, access is quietly withdrawn" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 max-w-3xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-primary text-primary-foreground rounded-xl p-8 text-center space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold", children: "Signal Intelligence™ prevents silent disengagement." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg opacity-90", children: "It turns observable behavioral cues into actionable responses so sales reps know when to advance, when to pause, and when to protect credibility and access." })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto space-y-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl lg:text-5xl font-bold", children: "How Signal Intelligence™ Works" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground", children: "A simple, powerful framework for professional judgment" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold", children: "1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold", children: "Signals" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Shifts in tone, pace, questions, interruptions, silence" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold", children: "2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold", children: "Interpretation" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Uncertainty, overload, threat, misalignment" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold", children: "3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold", children: "Response" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Pause, reframe, clarify, de-escalate, or proceed" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background border border-border rounded-lg p-8 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-semibold", children: "The Role of AI" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "AI detects patterns in conversation data—tone shifts, pacing changes, question types. But humans exercise judgment. The rep decides whether to probe deeper, pause for clarity, reframe the conversation, or move forward with confidence." })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl lg:text-5xl font-bold", children: "Structured Coaching Modules" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground max-w-2xl mx-auto", children: "Master the essential skills for pharma sales success with proven frameworks and hands-on practice" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-lg border-2 border-primary bg-white shadow-md hover:shadow-lg transition-shadow space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-foreground", children: "Discovery Questions Mastery" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Learn to ask powerful questions that uncover stakeholder needs, challenges, and priorities" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 flex-wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium", children: "Question Quality" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-1 bg-accent/10 text-accent rounded text-xs font-medium", children: "Signal Awareness" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-lg border-2 border-primary bg-white shadow-md hover:shadow-lg transition-shadow space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-foreground", children: "Stakeholder Mapping" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Identify and understand all decision-makers in the healthcare ecosystem" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 flex-wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-1 bg-secondary/10 text-secondary rounded text-xs font-medium", children: "Value Connection" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-1 bg-accent/10 text-accent rounded text-xs font-medium", children: "Customer Engagement" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-lg border-2 border-primary bg-white shadow-md hover:shadow-lg transition-shadow space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-foreground", children: "Clinical Evidence Communication" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Present clinical data effectively to different stakeholder types" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 flex-wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-1 bg-secondary/10 text-secondary rounded text-xs font-medium", children: "Signal Interpretation" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium", children: "Conversation Management" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-lg border-2 border-primary bg-white shadow-md hover:shadow-lg transition-shadow space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-foreground", children: "Objection Handling" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Address concerns and objections with evidence and responsiveness" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 flex-wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium", children: "Signal Interpretation" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-1 bg-accent/10 text-accent rounded text-xs font-medium", children: "Objection Navigation" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-lg border-2 border-primary bg-white shadow-md hover:shadow-lg transition-shadow space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-foreground", children: "Closing Techniques" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Guide stakeholders toward commitment with confidence and integrity" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 flex-wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-1 bg-accent/10 text-accent rounded text-xs font-medium", children: "Commitment Generation" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-1 bg-secondary/10 text-secondary rounded text-xs font-medium", children: "Adaptive Response" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-lg border-2 border-primary bg-white shadow-md hover:shadow-lg transition-shadow space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-foreground", children: "Signal Intelligence™ Mastery for Pharma" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Integrate all conversational intelligence frameworks for healthcare selling" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 flex-wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-1 bg-secondary/10 text-secondary rounded text-xs font-medium", children: "Value Connection" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium", children: "Signal Awareness" })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl lg:text-5xl font-bold", children: "8 Signal Intelligence™ Capabilities" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground max-w-2xl mx-auto", children: "ReflectivAI evaluates communication using eight Signal Intelligence™ capabilities. Each capability focuses on observable behaviors during structured practice." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base text-muted-foreground max-w-2xl mx-auto italic", children: "Scores shown are illustrative examples for demonstration purposes." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6", children: Object.values(capabilityDetails).map((capability) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => openCapabilityDetail(capability.id), className: "group relative p-6 rounded-xl border-2 border-primary bg-white hover:bg-white text-left transition-all duration-200 cursor-pointer hover:scale-[1.02] hover:shadow-xl hover:border-accent focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 shadow-md", "aria-label": `View details for ${capability.name}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-4 left-4 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold text-primary", children: capability.index }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-foreground group-hover:text-primary transition-colors", children: capability.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: capability.behavioralMetric })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-primary", children: capability.exampleScore }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Tap to view calculation" })
      ] }, capability.id)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto space-y-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl lg:text-4xl font-bold", children: "How Signal Intelligence™ Works" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground max-w-3xl mx-auto", children: "Signal Intelligence™ translates observable behavior into structured guidance that helps professionals navigate high-stakes conversations with consistency and credibility." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-slate-300 via-teal-400 to-slate-300 -translate-y-1/2 hidden lg:block opacity-0 animate-[fadeIn_0.8s_ease-in-out_0.3s_forwards]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-lg border border-slate-200 p-6 space-y-3 opacity-0 animate-[fadeInUp_0.6s_ease-out_0.4s_forwards]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 border-2 border-slate-300 mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3 h-3 rounded-full bg-slate-600" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-center text-slate-800", children: "Observable Signals" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-slate-600 text-center leading-relaxed", children: "What customers say, how they respond, and when engagement shifts during a conversation." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-lg border border-slate-200 p-6 space-y-3 opacity-0 animate-[fadeInUp_0.6s_ease-out_0.55s_forwards]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center w-12 h-12 rounded-full bg-teal-50 border-2 border-teal-300 mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3 h-3 rounded-full bg-teal-500" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-center text-slate-800", children: "AI Signal Detection" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-slate-600 text-center leading-relaxed", children: "AI identifies meaningful behavioral changes and separates signal from noise in structured practice." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-lg border border-slate-200 p-6 space-y-3 opacity-0 animate-[fadeInUp_0.6s_ease-out_0.7s_forwards]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 border-2 border-slate-300 mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3 h-3 rounded-full bg-slate-600" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-center text-slate-800", children: "Behavioral Guidance" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-slate-600 text-center leading-relaxed", children: "Guidance indicates when to advance, when to pause, and how to protect credibility and access." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-lg border border-slate-200 p-6 space-y-3 opacity-0 animate-[fadeInUp_0.6s_ease-out_0.85s_forwards]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 border-2 border-slate-300 mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3 h-3 rounded-full bg-slate-600" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-center text-slate-800", children: "Measured Outcomes" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-slate-600 text-center leading-relaxed", children: "Stronger conversations, clearer next steps, and more consistent performance over time." })
          ] })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto space-y-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl lg:text-5xl font-bold", children: "How You Did in This Conversation" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground max-w-2xl mx-auto", children: "Real-time feedback on your performance across all 8 Signal Intelligence™ Capabilities" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-6", children: Object.values(capabilityDetails).map((capability) => {
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => openCapabilityDetail(capability.id), className: "bg-white rounded-xl border-2 border-primary p-6 space-y-4 hover:shadow-xl transition-all duration-200 cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 shadow-md", "aria-label": `View details for ${capability.name}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-foreground mb-2", children: capability.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: capability.behavioralMetric })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-2 bg-yellow-50 border border-yellow-200 rounded-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-primary", children: capability.exampleScore }) }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-3 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: "Definition:" }),
            " ",
            capability.definition
          ] }) })
        ] }, capability.id);
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground italic", children: "Click any capability card above to see the full calculation and learn what good looks like." }) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl lg:text-5xl font-bold", children: "Real-Time Coaching in Action" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground max-w-2xl mx-auto", children: "See how ReflectivAI provides instant, actionable feedback during role-play conversations." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto grid md:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl border-2 border-primary p-6 space-y-4 shadow-md hover:shadow-xl transition-shadow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-foreground", children: "Responsiveness" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Turn 4 of conversation" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0 px-3 py-1 bg-yellow-50 border border-yellow-200 rounded-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-primary", children: "Consistently strong" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: "What you did well:" }),
              " You directly addressed the physician's concern about patient compliance by acknowledging their experience and offering a specific solution."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-primary font-medium", children: "This is a strong example of Responsiveness—you stayed on topic and provided relevant information without deflecting." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl border-2 border-border p-6 space-y-4 shadow-md hover:shadow-xl transition-shadow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-foreground", children: "Intent Alignment" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Turn 7 of conversation" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0 px-3 py-1 bg-yellow-50 border border-yellow-200 rounded-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-primary", children: "Inconsistent" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: "Opportunity to improve:" }),
              " Your response drifted into product features when the physician was asking about clinical outcomes. This shifted focus away from their core concern."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: "Try this instead:" }),
              ` "Let me address the outcomes data you're asking about. In the Phase 3 trial, we saw a 23% improvement in..."`
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl border-2 border-primary p-6 space-y-4 shadow-md hover:shadow-xl transition-shadow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-foreground", children: "Behavioral Adaptability" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Turn 9 of conversation" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0 px-3 py-1 bg-yellow-50 border border-yellow-200 rounded-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-primary", children: "Generally strong" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: "What you did well:" }),
              " When the physician expressed skepticism, you adjusted your approach by offering to share peer-reviewed data rather than continuing with your prepared talking points."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-primary font-medium", children: "This shows strong Behavioral Adaptability—you read the signal and changed course appropriately." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl border-2 border-border p-6 space-y-4 shadow-md hover:shadow-xl transition-shadow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-foreground", children: "Conversational Balance" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Turn 11 of conversation" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0 px-3 py-1 bg-yellow-50 border border-yellow-200 rounded-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-primary", children: "Generally strong" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: "Opportunity to improve:" }),
              " Your last three responses were longer than necessary. The physician tried to interject twice but you continued speaking."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: "Try this instead:" }),
              ' After making your key point, pause and ask: "Does that address your question, or would you like me to elaborate on any part?"'
            ] })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto space-y-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl lg:text-3xl font-bold", children: "Important Disclosures" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-lg p-6 border border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold mb-3 text-foreground", children: "Scoring Transparency" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Signal Intelligence™ scores reflect observable communication behaviors during structured practice. They are not assessments of personality, intent, emotional state, or professional competence, and are not used for automated decision-making." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-lg p-6 border border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold mb-3 text-foreground", children: "Illustrative Examples" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "All scores, calculations, and examples shown on this site are illustrative demonstrations for educational purposes. Actual scores vary based on individual performance during practice sessions." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-lg p-6 border border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold mb-3 text-foreground", children: "AI Role Boundary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "AI identifies behavioral patterns; interpretation and judgment remain with the professional. Signal Intelligence™ supports reflection and skill development—it does not replace human decision-making or professional expertise." })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto space-y-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl lg:text-5xl font-bold", children: "From AI-Detected Signals to Informed Action" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground max-w-3xl mx-auto", children: "ReflectivAI uses AI to detect patterns in observable behavior during structured practice. These signals do not represent intent, emotion, or motivation. They provide context that helps professionals decide how to respond in high-stakes conversations." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl p-6 border-2 border-border space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-foreground", children: "What AI Detects" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary mt-1", children: "•" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Question sequencing and structure" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary mt-1", children: "•" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Response timing and turn length" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary mt-1", children: "•" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Topic continuity or drift" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary mt-1", children: "•" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Frequency of customer participation" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground italic pt-2 border-t border-border", children: "No evaluation. No scoring." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl p-6 border-2 border-border space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-foreground", children: "What the Signal Indicates" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary mt-1", children: "•" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Alignment vs. misalignment" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary mt-1", children: "•" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Engagement vs. overload" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary mt-1", children: "•" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Progression vs. hesitation" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary mt-1", children: "•" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Clarity vs. ambiguity" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground italic pt-2 border-t border-border", children: "Situational context, not internal state." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl p-6 border-2 border-border space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-foreground", children: "What It Informs" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary mt-1", children: "•" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Whether to clarify or proceed" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary mt-1", children: "•" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Whether to pause or reframe" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary mt-1", children: "•" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Whether to summarize or ask a follow-up" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary mt-1", children: "•" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Whether to propose next steps" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground italic pt-2 border-t border-border", children: "Professional options, not recommendations." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-primary/5 border-2 border-primary rounded-xl p-6 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-semibold text-foreground", children: "ReflectivAI detects behavioral signals and provides context. Professionals interpret those signals and choose how to respond." }) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto space-y-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl lg:text-5xl font-bold", children: "Powered by Signal Intelligence™" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground", children: "Behind every coaching module and role play scenario is a science-backed framework for detecting behavioral signals and responding effectively" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-8 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl font-bold text-primary", children: "1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold", children: "Detect Signals" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "AI identifies behavioral patterns—tone shifts, hesitation, engagement cues" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl font-bold text-primary", children: "2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold", children: "Support Reflection" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Frameworks help you reflect on what signals might mean in context" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl font-bold text-primary", children: "3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold", children: "Respond Effectively" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "You choose how to respond—probe, pause, reframe, or move forward" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 border-2 border-primary rounded-xl p-8 space-y-4 mt-8 shadow-md hover:shadow-xl transition-shadow", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-semibold text-foreground", children: "Built on Behavioral Science" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Signal Intelligence™ combines conversational intelligence research, behavioral psychology, and social dynamics theory. The result: practical skills that help you read situations accurately and respond in ways that preserve trust and credibility." })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto space-y-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl lg:text-5xl font-bold", children: "Why It Matters for Life Sciences Sales Teams" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground", children: "Signal Intelligence™ helps life sciences reps protect credibility and access in high-stakes conversations." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-xl border-2 border-primary bg-white space-y-3 shadow-md hover:shadow-xl transition-shadow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-8 w-8 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold", children: "Fewer Stalled Conversations" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Fewer calls that stall or end early when the conversation goes off-track." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-xl border-2 border-primary bg-blue-50 space-y-3 shadow-md hover:shadow-xl transition-shadow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-8 w-8 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold", children: "Stronger Follow-Ups" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Stronger continuation commitments and follow-ups after clinical discussions." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-xl border-2 border-primary bg-purple-50 space-y-3 shadow-md hover:shadow-xl transition-shadow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-8 w-8 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold", children: "Compliant Next Steps" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Clearer, more compliant next-step language with HCPs and access stakeholders." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-xl border-2 border-primary bg-white space-y-3 shadow-md hover:shadow-xl transition-shadow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-8 w-8 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold", children: "Early Skill Visibility" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Managers see which conversational skills need support before performance dips." })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto space-y-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl lg:text-5xl font-bold", children: "Where This Fits in Sales Enablement" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground", children: "Signal Intelligence™ plugs into existing life sciences training and coaching workflows." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-xl border-2 border-primary bg-blue-50 space-y-3 shadow-md hover:shadow-xl transition-shadow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-6 w-6 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold", children: "Onboarding & Certification" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Reps demonstrate capability across eight Signal Intelligence™ behaviors before full territory deployment." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-xl border-2 border-primary bg-white space-y-3 shadow-md hover:shadow-xl transition-shadow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-6 w-6 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold", children: "Ongoing Coaching" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Managers use coaching cards and scores to focus 1:1s on real conversational decisions." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-xl border-2 border-primary bg-purple-50 space-y-3 shadow-md hover:shadow-xl transition-shadow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-6 w-6 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold", children: "Program Insight" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Enablement leaders see which capabilities are strong or weak across teams to target support." })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl lg:text-5xl font-bold", children: "How ReflectivAI Supports Signal Intelligence™" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground max-w-2xl mx-auto", children: "AI-powered tools that help reps detect signals, interpret behavior, and make better judgments" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://img1.wsimg.com/isteam/ip/1de1dc96-7231-4608-aa4f-91d58be98037/E8C3B8D2-A8F5-4E8E-8F5D-0B8F5E8C3B8D-0a6b0f5.png", alt: "Perception Logo", className: "h-20 w-auto object-contain flex-shrink-0", style: {
              marginTop: "-0.5rem"
            } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl font-bold", children: "Real-Time Signal Detection" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground", children: "Our AI analyzes tone, pace, questions, and silence during practice sessions. Get instant insights into customer engagement patterns, uncertainty signals, or resistance indicators—so you can refine your approach." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-6 w-6 text-primary flex-shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Detects shifts in tone, pace, and energy" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-6 w-6 text-primary flex-shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Identifies forward-looking cues vs. disengagement" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-6 w-6 text-primary flex-shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Highlights moments requiring judgment: pause, probe, or proceed" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "order-first lg:order-last", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/3] rounded-lg overflow-hidden border border-border shadow-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://media.gettyimages.com/id/1369254937/photo/horizontal-medium-shot-of-unrecognizable-young-black-man-sitting-at-desk-in-office-working.jpg?b=1&s=2048x2048&w=0&k=20&c=O5PRzIT3KLC8_HMOhp_1kNX4e1NvGKYHgvoKy3CrCUo=", alt: "Real-time signal detection dashboard", className: "w-full h-full object-cover" }) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/3] rounded-lg overflow-hidden border border-border shadow-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://media.gettyimages.com/id/2219654302/photo/teamwork-and-support-between-two-businesswomen.jpg?b=1&s=2048x2048&w=0&k=20&c=cFc7wLmOsIlxL59pYr89OwmTiawFHUGThub24Bf2gt0=", alt: "Personalized coaching sessions", className: "w-full h-full object-cover" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://img1.wsimg.com/isteam/ip/1de1dc96-7231-4608-aa4f-91d58be98037/F3E6B8BC-80B8-4AE3-A65A-D0ADC8BD9FAC-5d38294.png", alt: "Practice Logo", className: "h-20 w-auto object-contain flex-shrink-0", style: {
              marginTop: "-0.5rem"
            } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl font-bold", children: "Behavioral Coaching & Development" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground", children: "Build Signal Intelligence™ Capabilities through personalized coaching paths. Practice detecting signals, interpreting behavior, and responding effectively in safe role-play scenarios." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-6 w-6 text-primary flex-shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Adaptive learning paths based on behavioral metrics" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-6 w-6 text-primary flex-shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Role-play scenarios with AI-powered feedback on observable behaviors" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-6 w-6 text-primary flex-shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Progress tracking across all coaching modules and frameworks" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-12 lg:gap-16 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://img1.wsimg.com/isteam/ip/1de1dc96-7231-4608-aa4f-91d58be98037/864AFBE9-BF89-4048-AF45-18D6B1BC4B20-c65469f.png", alt: "Trust Logo", className: "h-20 w-auto object-contain flex-shrink-0", style: {
              marginTop: "-0.5rem"
            } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl font-bold", children: "Leadership Analytics & Behavioral Metrics" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground", children: "Give sales leaders visibility into team Signal Intelligence™ Capabilities. Track behavioral metrics like Question Quality, Listening & Responsiveness, and Objection Navigation across the team." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-6 w-6 text-primary flex-shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Team-wide Signal Intelligence™ Capability benchmarking" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-6 w-6 text-primary flex-shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Observable behavior tracking and measurement indicators" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-6 w-6 text-primary flex-shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Behavioral trend analysis for coaching prioritization" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "order-first lg:order-last", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/3] rounded-lg overflow-hidden border border-border shadow-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://media.gettyimages.com/id/1897107863/photo/part-of-office-workspace-with-laptop.jpg?b=1&s=2048x2048&w=0&k=20&c=rUJpo_-7QWmsEBDhiGqV69IgJDVPvD1ar9XSUyJ0__Y=", alt: "Leadership analytics dashboard", className: "w-full h-full object-cover" }) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 max-w-4xl mx-auto bg-muted rounded-xl p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold", children: "Plus: Knowledge Base & Resources" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground", children: "Access a comprehensive library of pharma sales resources, best practices, clinical data guides, and therapeutic area insights. Everything you need to stay informed and prepared." })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl lg:text-5xl font-bold", children: "Signal Intelligence™ Metrics" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground max-w-2xl mx-auto", children: "Observable, behavioral outcomes that drive measurable performance improvement" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-xl border-2 border-primary bg-white space-y-3 hover:shadow-xl transition-shadow shadow-md", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl font-bold text-primary", children: "92%" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-foreground", children: "Question Quality" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Open-ended, diagnostic questions that uncover needs" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-xl border-2 border-primary bg-white space-y-3 hover:shadow-xl transition-shadow shadow-md", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl font-bold text-primary", children: "88%" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-foreground", children: "Listening & Responsiveness" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Paraphrasing, acknowledging, building on customer input" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-xl border-2 border-primary bg-white space-y-3 hover:shadow-xl transition-shadow shadow-md", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl font-bold text-primary", children: "91%" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-foreground", children: "Customer Engagement Cues" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Detecting and responding to customer interest and resistance" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-xl border-2 border-primary bg-white space-y-3 hover:shadow-xl transition-shadow shadow-md", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl font-bold text-primary", children: "85%" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-foreground", children: "Conversation Control & Structure" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Guiding dialogue without dominating or losing direction" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-xl border-2 border-primary bg-white space-y-3 hover:shadow-xl transition-shadow shadow-md", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl font-bold text-primary", children: "87%" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-foreground", children: "Objection Handling" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Addressing concerns without defensiveness or avoidance" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-xl border-2 border-primary bg-white space-y-3 hover:shadow-xl transition-shadow shadow-md", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl font-bold text-primary", children: "90%" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-foreground", children: "Adaptability" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Adjusting tone, pace, and approach based on signals" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-xl border-2 border-primary bg-white space-y-3 hover:shadow-xl transition-shadow shadow-md", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl font-bold text-primary", children: "86%" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-foreground", children: "Value Framing (Making It Matter)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Connecting information to outcomes that matter to customers" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-xl border-2 border-primary bg-white space-y-3 hover:shadow-xl transition-shadow shadow-md", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl font-bold text-primary", children: "83%" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-foreground", children: "Commitment Gaining" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Securing clear, voluntary next actions with mutual agreement" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12 bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto text-center space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-semibold text-primary", children: "Always ethical • Always human-validated" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Signal Intelligence™ respects autonomy, preserves dignity, and supports professional judgment—never replacing it." })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-muted rounded-2xl p-12 space-y-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-2xl font-bold text-primary", children: "JM" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl lg:text-2xl font-medium leading-relaxed", children: "ReflectivAI transformed how our team reads customer signals. Our reps now know when to pause, when to probe, and when to proceed with confidence. We've seen a 34% increase in close rates within six months." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: "Jennifer Martinez" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", children: "VP of Sales Enablement, Global Pharma Leader" })
        ] })
      ] })
    ] }) }) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl lg:text-5xl font-bold", children: "Ethics, Privacy & Governance" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground max-w-2xl mx-auto", children: "Compliance and responsible AI built for the rigors of life-sciences training" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-lg border border-border bg-card space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-6 w-6 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold", children: "Data Privacy & Security" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "PHI is off by default; when enabled, BAA, encryption, and RBAC apply." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-lg border border-border bg-card space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-6 w-6 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold", children: "Algorithmic Bias & Fairness" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Pre-deployment bias testing with monitoring and remediation steps." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-lg border border-border bg-card space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-6 w-6 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold", children: "Transparency & Explainability" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Reason codes in-product; model cards document limits and cadence." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-lg border border-border bg-card space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-6 w-6 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold", children: "Human Oversight & Accountability" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Curated scenarios; MLR versioning for full traceability." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PlatformShowcase, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedStats, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonials, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SocialProofTicker, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LiveMetricsDashboard, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LiveActivityFeed, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ROICalculator, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto space-y-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl lg:text-5xl font-bold", children: "Trust & Transparency" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground", children: "Signal Intelligence™ is built on observable behavior, ethical boundaries, and human-led interpretation" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-8 w-8 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold", children: "Observable Behavior Only" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "We measure what can be seen and heard—not what someone might be thinking or feeling. No psychological profiling, no emotional scoring." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-8 w-8 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold", children: "Ethical Boundary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "If a response would feel inappropriate if the roles were reversed, it is outside the Signal Intelligence™ boundary." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-8 w-8 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold", children: "Human-Led Interpretation" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "AI highlights patterns. Professionals interpret meaning and decide how to respond. Judgment always stays with the human." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background border border-border rounded-lg p-8 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-semibold", children: "Our Commitment" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "ReflectivAI is designed to support professional judgment, not replace it. We provide information and suggestions, but you always maintain control. This ensures accountability, authenticity, and ethical engagement in every interaction." })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FAQ, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12 bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-3xl mx-auto text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground", children: "Developed with former life sciences field leaders and compliance partners. Informed by thousands of simulated conversations in regulated, expert-to-expert environments." }) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTASection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: isDialogOpen, onOpenChange: setIsDialogOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { className: "max-w-3xl max-h-[80vh] overflow-y-auto bg-white", children: currentCapability && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { className: "bg-primary text-primary-foreground -m-6 mb-0 p-6 rounded-t-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "text-2xl font-bold", children: currentCapability.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-primary-foreground/90 mt-2", children: [
          "Behavioral Metric: ",
          currentCapability.behavioralMetric
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 mt-6 px-6 pb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-foreground", children: currentCapability.exampleScore }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground mt-1", children: "Example score (illustrative)" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-semibold mb-2 text-foreground", children: "Definition" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: currentCapability.definition })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-semibold mb-2 text-foreground", children: "How it’s evaluated" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: currentCapability.whatScoreReflects })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-semibold mb-2 text-foreground", children: "How it’s rated" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted rounded-lg p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-semibold mb-3 text-foreground", children: "What Good Looks Like" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: currentCapability.whatGoodLooksLike.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5 text-primary flex-shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: item })
          ] }, index)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-semibold mb-2 text-foreground", children: "How It's Calculated" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1 list-disc list-inside text-muted-foreground", children: currentCapability.howCalculated.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: item }, index)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border pt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-semibold mb-2 text-foreground", children: "Score Calculation (Example)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-muted p-4 rounded-lg font-mono text-sm text-foreground", children: currentCapability.scoreCalculation })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-semibold mb-2 text-foreground", children: "How It's Measured" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: currentCapability.howMeasured })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border pt-4 space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground italic", children: "Signal Intelligence™ scores reflect observable communication behaviors during structured practice. They are not assessments of personality, intent, emotional state, or professional competence, and are not used for automated decision-making." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground italic", children: "AI identifies behavioral patterns; interpretation and judgment remain with the professional." })
        ] })
      ] })
    ] }) }) })
  ] });
}
function AICoachPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 lg:py-32 bg-gradient-to-b from-muted to-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-12 lg:gap-16 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { className: "h-4 w-4" }),
          "Signal Intelligence™ Support"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-4xl lg:text-6xl font-bold tracking-tight", children: [
            "AI Coach",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "Your Personal Pharma Sales Coach" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground italic max-w-xl", children: "For managers and enablement leaders coaching life sciences field teams." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground max-w-xl", children: "AI Coach highlights patterns in how conversations unfold—such as pacing, clarity, and engagement—using the Signal Intelligence™ framework. These insights support reflection and improvement, while judgment and decisions remain with the professional. Available 24/7." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "lg", className: "text-base", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link$1, { to: "/contact", children: [
            "Request Demo",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-5 w-5" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "lg", variant: "outline", className: "text-base", children: "Watch Demo" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/3] rounded-lg overflow-hidden border border-border shadow-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://media.gettyimages.com/id/2222332337/photo/cheerful-young-african-american-man-listing-to-a-hiring-manager-business-woman-during-job.jpg?b=1&s=2048x2048&w=0&k=20&c=uMsDL-oPZMCxQlqCjRlFFnlX28qpvRo83NIwy3X0BnI=", alt: "AI Coach in action", className: "w-full h-full object-cover" }) }) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto space-y-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl lg:text-5xl font-bold", children: "AI Detects Patterns. You Exercise Judgment." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground", children: "AI Coach analyzes conversation data to surface signals—but you decide how to respond" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "h-8 w-8 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold", children: "Detects Signals" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Shifts in tone, pace, questions, interruptions, silence—AI identifies patterns you might miss" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { className: "h-8 w-8 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold", children: "Surfaces Patterns" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Uncertainty, overload, threat, misalignment—AI highlights patterns for your reflection" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "h-8 w-8 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold", children: "Supports Your Decision" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "You choose: pause, probe, reframe, clarify, de-escalate, or proceed—AI never decides for you" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted rounded-xl p-8 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold", children: "Human Judgment Drives Action" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "AI Coach provides information and suggestions, but the rep always maintains control. This ensures accountability, authenticity, and ethical engagement. Signal Intelligence™ is about supporting professional judgment—not replacing it." })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl lg:text-5xl font-bold", children: "What You Can Do with AI Coach" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground max-w-2xl mx-auto", children: "Access your personal coaching assistant anytime through our chat interface" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto grid md:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-xl border-2 border-primary bg-blue-50 space-y-4 shadow-md hover:shadow-xl transition-shadow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "h-8 w-8 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold", children: "Ask Questions" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Get instant answers about pharma sales techniques, objection handling, stakeholder mapping, and more" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-xl border-2 border-primary bg-white space-y-4 shadow-md hover:shadow-xl transition-shadow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { className: "h-8 w-8 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold", children: "Get Personalized Feedback" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Share your conversation scenarios and receive tailored coaching on how to improve" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-xl border-2 border-primary bg-purple-50 space-y-4 shadow-md hover:shadow-xl transition-shadow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "h-8 w-8 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold", children: "Practice Scenarios" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Work through challenging situations with guidance before facing them in real calls" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-xl border-2 border-primary bg-white space-y-4 shadow-md hover:shadow-xl transition-shadow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-8 w-8 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold", children: "Track Your Progress" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Review coaching insights and see how your skills develop across all 8 Signal Intelligence™ Capabilities" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl lg:text-5xl font-bold", children: "8 Signal Intelligence™ Capabilities" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground max-w-2xl mx-auto", children: "AI Coach helps professionals develop all 8 Signal Intelligence™ Capabilities with scored feedback" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 p-6 rounded-xl border-2 border-primary bg-blue-50 shadow-md hover:shadow-xl transition-shadow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-primary", children: "1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold", children: "Signal Awareness" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Question Quality" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "How effectively questions uncover customer needs and priorities" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 p-6 rounded-xl border-2 border-primary bg-white shadow-md hover:shadow-xl transition-shadow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-primary", children: "2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold", children: "Signal Interpretation" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Listening & Responsiveness" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "How well you listen and respond to customer signals" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 p-6 rounded-xl border-2 border-primary bg-purple-50 shadow-md hover:shadow-xl transition-shadow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-primary", children: "3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold", children: "Value Connection" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Value Framing" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "How effectively you connect product benefits to customer priorities" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 p-6 rounded-xl border-2 border-primary bg-white shadow-md hover:shadow-xl transition-shadow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-primary", children: "4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold", children: "Customer Engagement Monitoring" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Customer Engagement Cues" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "How well you detect and respond to customer interest and concern" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 p-6 rounded-xl border-2 border-primary bg-blue-50 shadow-md hover:shadow-xl transition-shadow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-primary", children: "5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold", children: "Objection Navigation" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Objection Handling" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "How effectively you address customer concerns and objections" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 p-6 rounded-xl border-2 border-primary bg-white shadow-md hover:shadow-xl transition-shadow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-primary", children: "6" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold", children: "Conversation Management" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Conversation Control & Structure" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "How well you guide conversation flow and maintain focus" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 p-6 rounded-xl border-2 border-primary bg-purple-50 shadow-md hover:shadow-xl transition-shadow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-primary", children: "7" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold", children: "Adaptive Response" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Adaptability" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "How well you adjust approach based on customer reactions" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 p-6 rounded-xl border-2 border-primary bg-white shadow-md hover:shadow-xl transition-shadow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-primary", children: "8" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold", children: "Commitment Generation" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Commitment Gaining" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "How effectively you secure clear next steps and commitments" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground italic max-w-2xl mx-auto", children: "If a response would feel inappropriate if the roles were reversed, it is outside the Signal Intelligence™ boundary." }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl lg:text-5xl font-bold", children: "How the Coach Works" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground max-w-2xl mx-auto", children: "AI Coach analyzes conversations using the 8 Signal Intelligence™ Capabilities to provide scored, actionable feedback" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto space-y-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted rounded-xl p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-6 text-center", children: "8 Signal Intelligence™ Capabilities" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-lg bg-background border border-border text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold text-primary mb-2", children: "1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: "Signal Awareness" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-lg bg-background border border-border text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold text-primary mb-2", children: "2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: "Signal Interpretation" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-lg bg-background border border-border text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold text-primary mb-2", children: "3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: "Value Connection" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-lg bg-background border border-border text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold text-primary mb-2", children: "4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: "Customer Engagement Monitoring" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-lg bg-background border border-border text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold text-primary mb-2", children: "5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: "Objection Navigation" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-lg bg-background border border-border text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold text-primary mb-2", children: "6" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: "Conversation Management" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-lg bg-background border border-border text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold text-primary mb-2", children: "7" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: "Adaptive Response" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-lg bg-background border border-border text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold text-primary mb-2", children: "8" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: "Commitment Generation" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-center", children: "Real-Time Coaching Cards" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground text-center max-w-3xl mx-auto", children: 'The moment you hit "Send," the system evaluates clinical precision, behavioral signals, regulatory alignment, and conversational strategy—organizing observable behaviors into Signal Intelligence™ domains to support reflection and coaching.' }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6 max-w-4xl mx-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-lg border-2 border-green-500/30 bg-green-500/5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold", children: "Responsiveness" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-semibold text-green-600", children: "Consistently strong" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: `Strong acknowledgment: "So you're concerned about patient adherence with twice-daily dosing?" This shows you're building on their input.` })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-lg border-2 border-green-500/30 bg-green-500/5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold", children: "Communication Clarity" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-semibold text-green-600", children: "Generally strong" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Clear structure. Your explanation was easy to follow and you addressed the key concern directly." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-lg border-2 border-yellow-500/30 bg-yellow-500/5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold", children: "Intent Alignment" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-semibold text-yellow-600", children: "Inconsistent" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: `You stayed mostly on purpose, but consider tightening the focus: "Let's return to the efficacy data you asked about."` })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-lg border-2 border-green-500/30 bg-green-500/5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold", children: "Outcome Orientation" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-semibold text-green-600", children: "Generally strong" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: `Excellent close: "Would it make sense to schedule a follow-up after you've reviewed the data?" Clear next step.` })
            ] })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl lg:text-5xl font-bold", children: "How It Works: Detect, Analyze, Support" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground max-w-2xl mx-auto", children: "Signal Intelligence™ captures observable patterns in your conversation. AI Coach highlights what happened and suggests what it might mean—but you decide how to respond." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-lg border border-border bg-background space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold", children: "Regulate Tone Under Pressure" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Learn to stay calm and confident when HCPs push back or challenge your message." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-lg border border-border bg-background space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold", children: "Detect Engagement Signals" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Recognize hesitation, skepticism, or interest in HCP responses and adjust your approach accordingly." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-lg border border-border bg-background space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold", children: "Respond with Understanding" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Acknowledge HCP concerns while guiding back to approved, compliant messaging." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[3/4] rounded-lg overflow-hidden border border-border shadow-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://img1.wsimg.com/isteam/ip/1de1dc96-7231-4608-aa4f-91d58be98037/9F4B84D2-1ED2-4E75-B3C5-EB732344F88D.png", alt: "AI Coach providing real-time Signal Intelligence™ feedback", className: "w-full h-full object-cover" }) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-4xl mx-auto hidden" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 text-center max-w-3xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground", children: "The Coach doesn't just score you—it teaches you. With every simulation, reps build muscle memory for signal-aware conversations that drive trust, adherence, and long-term HCP relationships." }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto text-center space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl lg:text-5xl font-bold", children: "Real-Time, Actionable Coaching" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground", children: "The Coach doesn't just score you—it teaches you. With every simulation, reps build muscle memory for signal-aware conversations that drive trust, adherence, and long-term HCP relationships." })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl lg:text-5xl font-bold", children: "AI Coach in Action" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground max-w-2xl mx-auto", children: "Real scenarios where Signal Intelligence™ makes the difference" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-8 max-w-5xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 rounded-lg border border-border bg-background space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold", children: "Pre-Call Preparation" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Before important meetings, AI Coach provides customer history, past signal patterns, and suggests conversation strategies based on previous interactions and behavioral profiles." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5 text-primary flex-shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Customer engagement history and signal patterns" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5 text-primary flex-shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Suggested question sequences for Signal Awareness" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5 text-primary flex-shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Objection Navigation preparation based on past concerns" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 rounded-lg border border-border bg-background space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold", children: "During Practice Sessions" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Practice with simulated conversations. AI Coach highlights patterns in tone, pacing, and engagement. You reflect on what these patterns might mean and decide how to respond." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5 text-primary flex-shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Pattern detection during practice sessions" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5 text-primary flex-shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Response options: pause, probe, reframe, or proceed" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5 text-primary flex-shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Behavioral pattern highlights for reflection" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 rounded-lg border border-border bg-background space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold", children: "Post-Call Review" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "After each interaction, receive detailed feedback on Signal Intelligence™ Capabilities: which signals you detected, how you interpreted them, and how effectively you responded." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5 text-primary flex-shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Pattern recognition and opportunities for reflection" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5 text-primary flex-shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Observable behaviors: Question Quality, Listening, Objection Navigation" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5 text-primary flex-shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Specific coaching on Signal Intelligence™ Capabilities" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 rounded-lg border border-border bg-background space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold", children: "Ongoing Development" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Access personalized training on Signal Intelligence™ Capabilities, practice scenarios with AI feedback, and track your development across all 8 capabilities over time." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5 text-primary flex-shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Customized learning paths for each capability" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5 text-primary flex-shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Capability gap analysis and recommendations" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5 text-primary flex-shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Progress tracking with observable behaviors" })
            ] })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12 bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto text-center space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-semibold text-primary", children: "Always ethical • Always human-validated" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Signal Intelligence™ respects autonomy, preserves dignity, and supports professional judgment—never replacing it." })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-primary text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto text-center space-y-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl lg:text-5xl font-bold", children: "Ready to Build Signal Intelligence™?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-primary-foreground/90", children: "Join hundreds of Life Sciences sales professionals developing the human capability that preserves credibility under pressure." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "lg", variant: "secondary", className: "text-base", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link$1, { to: "/contact", children: [
          "Schedule a Signal Intelligence™ walkthrough",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-5 w-5" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "lg", variant: "outline", className: "text-base border-primary-foreground/20 hover:bg-primary-foreground/10", children: "Schedule Demo" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mb-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mb-4", children: "Explore More Features" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6 max-w-3xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link$1, { to: "/role-play", className: "p-6 rounded-lg border border-border bg-background hover:shadow-lg transition-shadow space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold", children: "Role Play Simulation" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Practice detecting and responding to signals in safe, AI-powered scenarios with instant behavioral feedback." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center text-primary font-medium", children: [
            "Learn more ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link$1, { to: "/", className: "p-6 rounded-lg border border-border bg-background hover:shadow-lg transition-shadow space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold", children: "Platform Overview" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Discover how ReflectivAI supports all 8 Signal Intelligence™ Capabilities across your sales team." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center text-primary font-medium", children: [
            "View platform ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
          ] })
        ] })
      ] })
    ] }) })
  ] });
}
function RolePlayPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 lg:py-32 bg-gradient-to-b from-muted to-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-12 lg:gap-16 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "h-4 w-4" }),
          "Interactive Training"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-4xl lg:text-6xl font-bold tracking-tight", children: [
            "Role Play Simulator",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "Practice Makes Perfect" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground italic max-w-xl", children: "For life sciences reps and MSLs practicing high-stakes clinical and access conversations." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground max-w-xl", children: "A safe practice environment for sales professionals. Engage in realistic conversations where AI highlights patterns in pacing, clarity, and engagement—helping you refine judgment before high-stakes interactions." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "lg", className: "text-base", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link$1, { to: "/contact", children: [
            "Request Demo",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-5 w-5" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "lg", variant: "outline", className: "text-base", children: "Watch Demo" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/3] rounded-lg overflow-hidden border border-border shadow-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://media.gettyimages.com/id/2179876022/photo/business-colleagues-collaborating-on-a-project.jpg?b=1&s=2048x2048&w=0&k=20&c=xgxwnYyS6nWekGplCCbzQoEh3Wv1br7ZF0IPmqhSIdI=", alt: "Role play simulation in action", className: "w-full h-full object-cover" }) }) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto text-center space-y-6 mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl lg:text-5xl font-bold", children: "Why Signal Intelligence™ Practice Works" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground", children: "Research shows that experiential learning through role play increases skill retention by 75% compared to traditional training methods. Practice builds the judgment needed to detect patterns, interpret signals, and respond effectively under pressure—in a safe environment where mistakes are learning opportunities." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-8 max-w-5xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl font-bold text-primary", children: "75%" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Higher skill retention with experiential learning" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl font-bold text-primary", children: "3x" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Faster ramp time for new sales reps" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl font-bold text-primary", children: "89%" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Of reps report increased confidence after practice" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 max-w-3xl mx-auto text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground italic", children: "If a response would feel inappropriate if the roles were reversed, it is outside the Signal Intelligence™ boundary." }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl lg:text-5xl font-bold", children: "Simulation Capabilities" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground max-w-2xl mx-auto", children: "Realistic scenarios powered by AI that adapt to your responses" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 p-6 rounded-xl border-2 border-primary bg-blue-50 shadow-md hover:shadow-xl transition-shadow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-6 w-6 text-accent" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold", children: "Realistic AI Personas" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Interact with AI-powered customer personas that exhibit authentic behaviors, objections, and conversational patterns based on real Life Sciences buyer profiles." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 p-6 rounded-xl border-2 border-primary bg-white shadow-md hover:shadow-xl transition-shadow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Lightbulb, { className: "h-6 w-6 text-accent" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold", children: "Adaptive Scenarios" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Simulations adjust difficulty and complexity based on your performance, ensuring you're always challenged at the right level for optimal learning." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 p-6 rounded-xl border-2 border-primary bg-purple-50 shadow-md hover:shadow-xl transition-shadow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChartColumn, { className: "h-6 w-6 text-accent" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold", children: "Behavioral Pattern Feedback" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Receive detailed performance analysis after each simulation, including Signal Intelligence™ Capability scores, observable behaviors (Question Quality, Listening, Objection Navigation), and improvement recommendations." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 p-6 rounded-xl border-2 border-primary bg-white shadow-md hover:shadow-xl transition-shadow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "h-6 w-6 text-accent" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold", children: "Skill Certification" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Earn certifications as you master different conversation types, from initial discovery calls to complex negotiations and contract discussions." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 p-6 rounded-xl border-2 border-primary bg-blue-50 shadow-md hover:shadow-xl transition-shadow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "h-6 w-6 text-accent" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold", children: "Unlimited Practice" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Practice as many times as you need without judgment. Repeat challenging scenarios until you build confidence and mastery." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 p-6 rounded-xl border-2 border-primary bg-white shadow-md hover:shadow-xl transition-shadow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-6 w-6 text-accent" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold", children: "Custom Scenarios" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Create custom role play scenarios based on your specific products, customer types, and common objections unique to your organization." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl lg:text-5xl font-bold", children: "Disease State Scenarios" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground max-w-2xl mx-auto", children: "Practice with realistic pharma sales scenarios across major therapeutic areas" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-xl border-2 border-primary bg-blue-50 space-y-3 shadow-md hover:shadow-xl transition-shadow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium", children: "HIV" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold", children: "Low Descovy Share with Missed PrEP Opportunity" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "IM prescriber underutilizes PrEP despite steady STI testing in young MSM" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Intermediate Level" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-xl border-2 border-primary bg-white space-y-3 shadow-md hover:shadow-xl transition-shadow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium", children: "HIV" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold", children: "Slowing Biktarvy Switches in Stable Patients" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Top HIV clinic with declining switch velocity; perception that most patients are optimized" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Advanced Level" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-xl border-2 border-primary bg-purple-50 space-y-3 shadow-md hover:shadow-xl transition-shadow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center gap-2 px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium", children: "Oncology" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold", children: "ADC Integration with IO Backbone" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Solid-tumor center evaluating ADCs; P&T scrutinizes cost/response and chair time" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Advanced Level" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-xl border-2 border-primary bg-white space-y-3 shadow-md hover:shadow-xl transition-shadow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center gap-2 px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium", children: "Oncology" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold", children: "Pathway-Driven Care with Staffing Constraints" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Community infusion site with conservative IO use and short-staffed AE clinics" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Intermediate Level" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-xl border-2 border-primary bg-blue-50 space-y-3 shadow-md hover:shadow-xl transition-shadow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-medium", children: "Cardiology" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold", children: "HFrEF Clinic GDMT Optimization" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Entresto uptake 62% of eligible HFrEF; SGLT2 at 38%; day-30 refill gaps" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Advanced Level" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-xl border-2 border-primary bg-white space-y-3 shadow-md hover:shadow-xl transition-shadow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-medium", children: "Cardiology" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold", children: "Post-MI and HF Transitions Optimization" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "SGLT2 initiation often deferred to PCP; ARNI starts delayed pending echo" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Intermediate Level" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-xl border-2 border-primary bg-purple-50 space-y-3 shadow-md hover:shadow-xl transition-shadow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center gap-2 px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs font-medium", children: "Vaccines" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold", children: "Adult Flu Program Optimization" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "ID group with LTC/high-risk adults; late clinic launches; weak reminder-recall" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Intermediate Level" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-xl border-2 border-primary bg-white space-y-3 shadow-md hover:shadow-xl transition-shadow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center gap-2 px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs font-medium", children: "COVID" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold", children: "Outpatient Antiviral Optimization" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "High-risk COPD/ILD population; Paxlovid first line but DDI triage slows prescribing" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Advanced Level" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-xl border-2 border-primary bg-blue-50 space-y-3 shadow-md hover:shadow-xl transition-shadow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center gap-2 px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs font-medium", children: "Rare Disease" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold", children: "Rare Disease Diagnosis Journey" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Help a physician recognize and diagnose a rare metabolic disorder" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Intermediate Level" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl lg:text-5xl font-bold", children: "Practice Signal Intelligence™ Across All Scenarios" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground max-w-2xl mx-auto", children: "Build capabilities for detecting signals, interpreting behavior, and responding effectively in every conversation type" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-8 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium", children: "Discovery" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold", children: "Initial Discovery Calls" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground", children: "Practice detecting signals and reflecting on patterns: asking purposeful questions, listening actively, and noticing customer engagement cues." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5 text-primary flex-shrink-0 mt-0.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Question Quality: open vs. closed ratio, sequencing" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5 text-primary flex-shrink-0 mt-0.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Listening & Responsiveness: paraphrasing, acknowledgment" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5 text-primary flex-shrink-0 mt-0.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Customer Engagement Monitoring: talk time, forward-looking cues" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-video rounded-lg overflow-hidden border border-border shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://media.gettyimages.com/id/1648451801/photo/employees-are-meeting-at-office.jpg?b=1&s=2048x2048&w=0&k=20&c=CDP0ignhH_bHtb1RpVuCy0YjIMlL-rxwJSTDDl3lMtA=", alt: "Discovery call simulation", className: "w-full h-full object-cover" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-8 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-video rounded-lg overflow-hidden border border-border shadow-lg order-first md:order-last", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://media.gettyimages.com/id/2222793401/photo/multiracial-group-collaborating-with-remote-staff-during-a-hybrid-meeting-or-conference-call.jpg?b=1&s=2048x2048&w=0&k=20&c=IHVW4A0e1uZKOMCCb54c9iORt2Hw4g4s8MG6-rC0lfY=", alt: "Objection handling simulation", className: "w-full h-full object-cover" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 order-last md:order-first", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium", children: "Objection Handling" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold", children: "Objection Navigation" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground", children: "Practice Objection Navigation capability: respond calmly to resistance, explore underlying concerns, and avoid defensive reactions that erode trust." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5 text-primary flex-shrink-0 mt-0.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Acknowledgment before response (not defensiveness)" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5 text-primary flex-shrink-0 mt-0.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Exploration of underlying concerns" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5 text-primary flex-shrink-0 mt-0.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Calm pacing and tone regulation" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-8 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium", children: "Negotiation" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold", children: "Contract Negotiation" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground", children: "Develop negotiation skills that protect margins while maintaining strong customer relationships. Practice finding win-win solutions in complex deal structures." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5 text-primary flex-shrink-0 mt-0.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Value-based pricing discussions" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5 text-primary flex-shrink-0 mt-0.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Multi-stakeholder negotiations" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5 text-primary flex-shrink-0 mt-0.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Contract terms and conditions" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-video rounded-lg overflow-hidden border border-border shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://media.gettyimages.com/id/1953319673/photo/business-presentation.jpg?b=1&s=2048x2048&w=0&k=20&c=NWT1d90SqhQpceOCPHbWrjaDYZf5UTsXfX8Ka6zTjY8=", alt: "Negotiation simulation", className: "w-full h-full object-cover" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-8 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-video rounded-lg overflow-hidden border border-border shadow-lg order-first md:order-last", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://media.gettyimages.com/id/1280309693/photo/manager-showing-presentation-details-to-boss.jpg?b=1&s=2048x2048&w=0&k=20&c=rrf5fD5CwJXOCJw3OPauuuoDwvzfhhJb6Ewl0hnbetY=", alt: "Closing simulation", className: "w-full h-full object-cover" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 order-last md:order-first", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium", children: "Closing" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold", children: "Commitment Generation" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground", children: "Practice Commitment Generation capability: secure clear, voluntary next actions with mutual agreement and ownership—never pressure or manipulation." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5 text-primary flex-shrink-0 mt-0.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Specific next steps with mutual agreement" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5 text-primary flex-shrink-0 mt-0.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Ownership clarity (not coercion)" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5 text-primary flex-shrink-0 mt-0.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Detecting hesitation signals vs. genuine commitment" })
              ] })
            ] })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl lg:text-5xl font-bold", children: "How Role Play Simulations Work" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground max-w-2xl mx-auto", children: "A simple, effective process for building sales mastery" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto grid md:grid-cols-4 gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold", children: "1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold", children: "Choose Scenario" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Select from our library or create a custom scenario based on your specific needs" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold", children: "2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold", children: "Practice Conversation" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Engage with AI personas that respond realistically to your approach and techniques" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold", children: "3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold", children: "Get Feedback" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Receive detailed analysis on your performance, Signal Intelligence™ Capabilities, and areas for improvement" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold", children: "4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold", children: "Improve & Repeat" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Apply feedback and practice again until you achieve mastery and certification" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12 bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto text-center space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-semibold text-primary", children: "Always ethical • Always human-validated" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Signal Intelligence™ respects autonomy, preserves dignity, and supports professional judgment—never replacing it." })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background border border-border rounded-2xl p-12 space-y-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl lg:text-4xl font-bold", children: "Safe Environment, Real Signal Intelligence™ Development" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground", children: "Role play simulations provide a judgment-free space to practice detecting signals, interpreting behavior, and making better judgments—without the pressure of real customer interactions." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-6 w-6" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold", children: "No Risk, High Reward" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-primary-foreground/80", children: "Practice difficult conversations without fear of losing deals or damaging relationships" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-6 w-6" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold", children: "Build Judgment Patterns" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Repetition creates pattern recognition that helps you detect signals faster in high-pressure situations" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-6 w-6" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold", children: "Accelerate Learning" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-primary-foreground/80", children: "Experience months of scenarios in days, compressing your learning curve dramatically" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-6 w-6" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold", children: "Personalized Growth" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-primary-foreground/80", children: "Focus on your specific weaknesses and build on your unique strengths" })
        ] })
      ] })
    ] }) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto text-center space-y-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl lg:text-5xl font-bold", children: "Start Building Signal Intelligence™ Today" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground", children: "Develop the human capability that preserves credibility under pressure through unlimited practice with AI-powered role play simulations." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "lg", className: "text-base", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link$1, { to: "/contact", children: [
          "Schedule a Signal Intelligence™ walkthrough",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-5 w-5" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "lg", variant: "outline", className: "text-base", children: "Schedule Demo" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mb-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mb-4", children: "Explore More Features" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6 max-w-3xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link$1, { to: "/ai-coach", className: "p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold", children: "AI Coach" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Get real-time signal detection and interpretation support during practice sessions with behavioral metrics feedback." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center text-primary font-medium", children: [
            "Learn more ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link$1, { to: "/", className: "p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold", children: "Platform Overview" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Discover how ReflectivAI supports all 8 Signal Intelligence™ Capabilities across your sales team." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center text-primary font-medium", children: [
            "View platform ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
          ] })
        ] })
      ] })
    ] }) })
  ] });
}
function SignalIntelligencePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[980px] mx-auto px-5 py-14", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "bg-gradient-to-b from-accent/10 to-transparent border border-border rounded-2xl shadow-lg p-7 mb-7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground mb-2.5", children: "Learn More" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-[34px] leading-tight mb-2", children: [
        "Signal Intelligence",
        /* @__PURE__ */ jsxRuntimeExports.jsx("sup", { className: "text-lg", children: "™" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-0 font-bold", children: "Capabilities, Behavioral Metrics & Methodology (ReflectivAI)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground border-l-3 border-l-accent pl-3 mt-3", children: [
        "Signal Intelligence",
        /* @__PURE__ */ jsxRuntimeExports.jsx("sup", { className: "text-xs", children: "™" }),
        " is behavior-first, non-clinical, and non-diagnostic. It focuses exclusively on observable conversation behaviors and does not infer protected attributes or mental health status."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "border border-border rounded-2xl bg-card p-5 mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl mb-2.5 font-bold", children: "Purpose" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "my-2.5", children: [
        "Signal Intelligence",
        /* @__PURE__ */ jsxRuntimeExports.jsx("sup", { className: "text-xs", children: "™" }),
        " (SI) is designed to make conversational skill development clearer, safer, and more effective for sales professionals, coaches, and enablement teams working in high-stakes conversations."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "my-2.5", children: "It helps coaches and learners focus on what improves conversations by grounding practice and feedback in observable behaviors—what people say, how they respond, and how they adapt in real time—making skills easier to coach, practice, and develop with consistency and confidence." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "my-2.5", children: "SI is a behavior-based capability framework grounded in the Human Decision Drivers Framework, which explains why conversational behaviors change as factors like confidence, motivation, or perceived risk shift. These drivers inform how behaviors are interpreted but are not measured directly. SI does not infer psychological states, personality traits, or protected attributes." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "my-2.5", children: "Designed to be explainable, coachable, and auditable, SI is purpose-built for professional development, training, and coaching—not for employment decisions, performance evaluation, or live call monitoring." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "border border-border rounded-2xl bg-card p-5 mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl mb-2.5 font-bold", children: "How to Read This Page" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base font-semibold my-2.5", children: "A Visual Map of the System" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "my-2.5", children: "This page is organized in three connected layers, each building on the one before it:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "my-3.5 space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: "Human Decision Drivers Framework" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "The interpretive lens" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "my-2", children: "Explains why conversational behaviors change by describing the human forces that influence thinking, engagement, emotional regulation, and commitment." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "→ These drivers are not latent variables and are not measured directly." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: "Signal Intelligence Capabilities" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "The skill layer" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "my-2", children: "Defines the core conversational skills that can be developed through practice. Each capability represents a distinct form of conversational judgment." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: "Behavioral Metrics" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "The visibility layer" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "my-2", children: "Describes the observable behaviors that show how each capability appears in real conversations, making skills easier to recognize, coach, and practice." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "my-2.5 font-medium", children: "Each layer moves from explanation → skill → observation." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "border border-border rounded-2xl bg-card p-5 mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl mb-2.5 font-bold", children: 'What We Mean by a "Signal"' }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "my-2.5", children: "In real conversations, a signal is:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "my-2.5 font-semibold", children: "An observable change in behavior or context that indicates something meaningful has shifted and may require a different conversational approach." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "my-2.5", children: "Signals are:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "my-2.5 ml-5 list-disc space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Observable" }),
          " — they can be seen or heard"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Contextual" }),
          " — their meaning depends on what has already happened"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Action-relevant" }),
          " — they suggest a need to adjust, not a diagnosis"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Non-diagnostic" }),
          " — they do not explain internal emotion, intent, or motivation"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "my-2.5", children: "Examples of signals include:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "my-2.5 ml-5 list-disc space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "a shift in the type or depth of questions being asked" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "a change in energy, pacing, or participation" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "the introduction of a new concern or objection" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "movement from exploration to next-step language" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "my-2.5 font-semibold", children: "Signals are not conclusions. They are moments of choice." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg mt-6 mb-2.5 font-bold", children: "Why Signal Intelligence — and Why Now" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "my-2.5", children: "Modern conversations are more complex, less linear, and more consequential than ever." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "my-2.5", children: "Today's professionals face:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "my-2.5 ml-5 list-disc space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "better-informed and more skeptical counterparts" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "fewer scripted paths and more situational judgment" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "higher expectations for credibility and trust" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "increasing use of AI without clear boundaries" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "my-2.5", children: "Traditional training focuses on what to say. Signal Intelligence focuses on when and how to adapt." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "my-2.5", children: [
        "Signal Intelligence",
        /* @__PURE__ */ jsxRuntimeExports.jsx("sup", { className: "text-xs", children: "™" }),
        " exists because:"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "my-2.5 ml-5 list-disc space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "the most important conversational skills are contextual and judgment-based" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "those skills are learnable but rarely taught explicitly" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "AI can support learning responsibly — if human judgment remains central" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "my-2.5 font-semibold", children: "Signal Intelligence makes the invisible moments of judgment visible, discussable, and developable." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "my-2.5", children: "Signals indicate that something has shifted; Human Decision Drivers explain why certain responses preserve credibility, trust, and access once a signal is detected." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "border border-border rounded-2xl bg-card p-5 mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl mb-2.5 font-bold", children: "Human Decision Drivers Framework" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "my-2.5", children: "The Human Decision Drivers Framework explains why conversational behaviors change in real interactions." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "my-2.5", children: "It describes internal forces—such as confidence, motivation, and perceived risk—that shape how people think, engage, regulate emotion, and decide during conversations. These drivers are not measured directly. Instead, they serve as an interpretive lens that ensures observable behaviors are understood in context, rather than treated as isolated actions." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "my-2.5", children: "By grounding Signal Intelligence in this framework, behavioral signals can be designed, interpreted, and coached in a way that reflects how people actually make decisions—without inferring psychological states, personality traits, or protected attributes." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "border border-border rounded-2xl bg-card p-5 mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl mb-2.5 font-bold", children: "Core Human Decision Drivers" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border rounded-2xl bg-muted/30 p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block px-2.5 py-1 text-xs rounded-full bg-[#1e3a8a] text-white border-2 border-accent mr-2", children: "Driver" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base mt-2 mb-2", children: "Cognitive Empathy / Perspective Taking" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "my-2.5", children: "The capacity to accurately infer another person's perspective and adjust behavior accordingly." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground border-l-3 border-l-accent pl-3 mt-3", children: [
            "References:",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://doi.org/10.1037/0022-3514.44.1.113", target: "_blank", rel: "noreferrer", className: "text-accent hover:underline", children: "Davis (1983)" }),
            ",",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://doi.org/10.1177/1534582304267187", target: "_blank", rel: "noreferrer", className: "text-accent hover:underline", children: "Decety & Jackson (2004)" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border rounded-2xl bg-muted/30 p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block px-2.5 py-1 text-xs rounded-full bg-[#1e3a8a] text-white border-2 border-accent mr-2", children: "Driver" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base mt-2 mb-2", children: "Emotional Intelligence (EI)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "my-2.5", children: "The ability to perceive, understand, and regulate emotions in oneself and others." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground border-l-3 border-l-accent pl-3 mt-3", children: [
            "References:",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://doi.org/10.1207/s15327965pli1503_02", target: "_blank", rel: "noreferrer", className: "text-accent hover:underline", children: "Mayer, Salovey & Caruso (2004)" }),
            ",",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.danielgoleman.info/working-with-emotional-intelligence/", target: "_blank", rel: "noreferrer", className: "text-accent hover:underline", children: "Goleman (1998)" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border rounded-2xl bg-muted/30 p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block px-2.5 py-1 text-xs rounded-full bg-[#1e3a8a] text-white border-2 border-accent mr-2", children: "Driver" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base mt-2 mb-2", children: "Metacognition & Confidence Calibration" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "my-2.5", children: "Awareness of one's own thinking, limits of knowledge, and accuracy of self-assessment." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground border-l-3 border-l-accent pl-3 mt-3", children: [
            "References:",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://doi.org/10.1037/0003-066X.34.10.906", target: "_blank", rel: "noreferrer", className: "text-accent hover:underline", children: "Flavell (1979)" }),
            ",",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://doi.org/10.1037/0022-3514.77.6.1121", target: "_blank", rel: "noreferrer", className: "text-accent hover:underline", children: "Kruger & Dunning (1999)" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border rounded-2xl bg-muted/30 p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block px-2.5 py-1 text-xs rounded-full bg-[#1e3a8a] text-white border-2 border-accent mr-2", children: "Driver" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base mt-2 mb-2", children: "Motivation, Autonomy & Commitment" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "my-2.5", children: "Internal drivers governing engagement, ownership, and follow-through." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground border-l-3 border-l-accent pl-3 mt-3", children: [
            "References:",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://doi.org/10.1207/S15327965PLI1104_01", target: "_blank", rel: "noreferrer", className: "text-accent hover:underline", children: "Deci & Ryan (2000)" }),
            ",",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.influenceatwork.com/principles-of-persuasion/", target: "_blank", rel: "noreferrer", className: "text-accent hover:underline", children: "Cialdini (resource)" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border rounded-2xl bg-muted/30 p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block px-2.5 py-1 text-xs rounded-full bg-[#1e3a8a] text-white border-2 border-accent mr-2", children: "Driver" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base mt-2 mb-2", children: "Social Threat, Status & Identity" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "my-2.5", children: "How perceived risk to competence, autonomy, or identity affects engagement and resistance." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground border-l-3 border-l-accent pl-3 mt-3", children: [
            "References:",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://doi.org/10.1037/0003-066X.52.6.613", target: "_blank", rel: "noreferrer", className: "text-accent hover:underline", children: "Steele (1997)" }),
            ",",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://doi.org/10.1016/j.tics.2004.01.010", target: "_blank", rel: "noreferrer", className: "text-accent hover:underline", children: "Eisenberger & Lieberman (2004)" }),
            ",",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://neuroleadership.com/your-brain-at-work/scarf-model", target: "_blank", rel: "noreferrer", className: "text-accent hover:underline", children: "Rock/SCARF (overview)" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "border border-border rounded-2xl bg-card p-5 mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-xl mb-2.5 font-bold", children: [
        "Signal Intelligence",
        /* @__PURE__ */ jsxRuntimeExports.jsx("sup", { className: "text-xs", children: "™" }),
        " Capabilities"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "my-2.5", children: [
        "Signal Intelligence",
        /* @__PURE__ */ jsxRuntimeExports.jsx("sup", { className: "text-xs", children: "™" }),
        " Capabilities describe the conversational skills people develop through practice."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "my-2.5", children: "Each capability represents a distinct form of conversational judgment and reflects how underlying Human Decision Drivers shape what can be observed and coached in real conversations." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "my-2.5", children: "Each capability is supported by observable behavioral indicators used for coaching and learning." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground border-l-3 border-l-accent pl-3 mt-3", children: "Capabilities are behavior-based expressions used for coaching and learning—not psychological constructs, diagnostic tools, or classifications of individuals." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border rounded-2xl bg-muted/30 p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center px-3 py-1.5 text-sm font-semibold rounded-full bg-primary text-primary-foreground border-2 border-primary", children: "Signal Awareness" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "my-2", children: "Signal Awareness is the capability to notice relevant customer cues and use those cues to shape purposeful, well-sequenced questions." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground italic", children: "Often shows up when a seller notices relevant customer cues and uses them to shape their next question." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border rounded-2xl bg-muted/30 p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center px-3 py-1.5 text-sm font-semibold rounded-full bg-primary text-primary-foreground border-2 border-primary", children: "Signal Interpretation" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "my-2", children: "Signal Interpretation is the capability to make sense of what a customer is communicating and adjust responses as new information emerges." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground italic", children: "Often shows up when a seller reflects what they're hearing and adapts their response." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border rounded-2xl bg-muted/30 p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center px-3 py-1.5 text-sm font-semibold rounded-full bg-primary text-primary-foreground border-2 border-primary", children: "Value Connection" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "my-2", children: "Value Connection is the capability to link discussion to what matters to the customer by translating priorities into outcome-based value." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground italic", children: "Often shows up when a seller connects the conversation back to outcomes or priorities already expressed." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border rounded-2xl bg-muted/30 p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center px-3 py-1.5 text-sm font-semibold rounded-full bg-primary text-primary-foreground border-2 border-primary", children: "Customer Engagement Monitoring" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "my-2", children: "Customer Engagement Monitoring is the capability to notice and track changes in customer engagement, including participation, energy, and forward-looking behavior." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground italic", children: "Often shows up when a seller notices changes in participation, energy, or forward-looking questions." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border rounded-2xl bg-muted/30 p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center px-3 py-1.5 text-sm font-semibold rounded-full bg-primary text-primary-foreground border-2 border-primary", children: "Objection Navigation" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "my-2", children: "Objection Navigation is the capability to respond to resistance calmly by acknowledging concerns and exploring what's behind them." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground italic", children: "Often shows up when a seller acknowledges a concern before exploring it." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border rounded-2xl bg-muted/30 p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center px-3 py-1.5 text-sm font-semibold rounded-full bg-primary text-primary-foreground border-2 border-primary", children: "Conversation Management" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "my-2", children: "Conversation Management is the capability to guide a conversation with purpose through structure, transitions, and shared understanding." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground italic", children: "Often shows up when a seller summarizes, transitions, or clarifies next steps." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border rounded-2xl bg-muted/30 p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center px-3 py-1.5 text-sm font-semibold rounded-full bg-primary text-primary-foreground border-2 border-primary", children: "Commitment Generation" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "my-2", children: "Commitment Generation is the capability to secure clear, voluntary next actions while preserving autonomy." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground italic", children: "Often shows up when a seller checks readiness and aligns on next steps." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border rounded-2xl bg-muted/30 p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center px-3 py-1.5 text-sm font-semibold rounded-full bg-primary text-primary-foreground border-2 border-primary", children: "Adaptive Response" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "my-2", children: "Adaptive Response is the capability to adjust tone, depth, pacing, or approach in response to changing customer signals." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground italic", children: "Often shows up when a seller shifts their approach as signals change." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "border border-border rounded-2xl bg-card p-5 mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl mb-2.5 font-bold", children: "Behavioral Metrics" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base font-semibold my-2.5", children: "Observable behaviors that support coaching and skill development" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "my-2.5", children: "Behavioral Metrics describe how each conversational skill shows up in practice." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "my-2.5", children: "Each Signal Intelligence Capability is supported by a small set of observable behaviors that reflect how underlying Human Decision Drivers are expressed in real conversations. These behaviors make skills easier to recognize, discuss, and develop during practice, while focusing only on what can be seen and heard in the interaction." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground border-l-3 border-l-accent pl-3 mt-3 mb-4", children: "These behaviors are observed during structured practice sessions such as role play, simulations, and coached conversations." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border rounded-2xl bg-muted/30 p-5 my-3.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center px-3 py-1.5 text-sm font-semibold rounded-full bg-primary text-primary-foreground border-2 border-primary", children: "Signal Awareness" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-lg", "aria-hidden": "true", children: "→" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center px-3 py-1.5 text-sm font-semibold rounded-full bg-accent text-accent-foreground border-2 border-accent", children: "Question Quality" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold my-2.5", children: "What this looks like in conversation" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "my-2.5 ml-5 list-disc", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Purposeful, customer-centered questioning" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Logical sequencing" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Effective follow-up" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold my-2.5", children: "Examples of observable indicators" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "my-2.5 ml-5 list-disc", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Open vs. closed ratio" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Relevance to customer goals" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Follow-up depth" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border rounded-2xl bg-muted/30 p-5 my-3.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center px-3 py-1.5 text-sm font-semibold rounded-full bg-primary text-primary-foreground border-2 border-primary", children: "Signal Interpretation" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-lg", "aria-hidden": "true", children: "→" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center px-3 py-1.5 text-sm font-semibold rounded-full bg-accent text-accent-foreground border-2 border-accent", children: "Listening & Responsiveness" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold my-2.5", children: "What this looks like in conversation" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "my-2.5 ml-5 list-disc", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Accurate paraphrasing" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Explicit acknowledgment of concerns" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Behavioral adjustment based on new information" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold my-2.5", children: "Examples of observable indicators" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "my-2.5 ml-5 list-disc", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Paraphrase accuracy" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Concern acknowledgment" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Observable response shifts" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border rounded-2xl bg-muted/30 p-5 my-3.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center px-3 py-1.5 text-sm font-semibold rounded-full bg-primary text-primary-foreground border-2 border-primary", children: "Value Connection" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-lg", "aria-hidden": "true", children: "→" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center px-3 py-1.5 text-sm font-semibold rounded-full bg-accent text-accent-foreground border-2 border-accent", children: "Value Framing" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold my-2.5", children: "What this looks like in conversation" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "my-2.5 ml-5 list-disc", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Outcome-focused language" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Customer priority alignment" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Avoids feature dumping" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold my-2.5", children: "Examples of observable indicators" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "my-2.5 ml-5 list-disc", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Outcome references" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Explicit linkage to customer priorities" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Feature-to-value ratio" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border rounded-2xl bg-muted/30 p-5 my-3.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center px-3 py-1.5 text-sm font-semibold rounded-full bg-primary text-primary-foreground border-2 border-primary", children: "Customer Engagement Monitoring" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-lg", "aria-hidden": "true", children: "→" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center px-3 py-1.5 text-sm font-semibold rounded-full bg-accent text-accent-foreground border-2 border-accent", children: "Engagement Cues" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold my-2.5", children: "What this looks like in conversation" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "my-2.5 ml-5 list-disc", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Monitors energy and participation" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Identifies forward-looking signals" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Adjusts engagement strategy" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold my-2.5", children: "Examples of observable indicators" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "my-2.5 ml-5 list-disc", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Talk-time balance" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Quality of customer questions" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Forward-looking statements" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Energy/pacing shifts" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border rounded-2xl bg-muted/30 p-5 my-3.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center px-3 py-1.5 text-sm font-semibold rounded-full bg-primary text-primary-foreground border-2 border-primary", children: "Objection Navigation" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-lg", "aria-hidden": "true", children: "→" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center px-3 py-1.5 text-sm font-semibold rounded-full bg-accent text-accent-foreground border-2 border-accent", children: "Objection Handling" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold my-2.5", children: "What this looks like in conversation" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "my-2.5 ml-5 list-disc", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Calm response to resistance" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Exploration before response" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Acknowledgment before reframing" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold my-2.5", children: "Examples of observable indicators" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "my-2.5 ml-5 list-disc", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Acknowledgment-first behavior" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Depth of concern exploration" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Tone/pacing stability" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border rounded-2xl bg-muted/30 p-5 my-3.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center px-3 py-1.5 text-sm font-semibold rounded-full bg-primary text-primary-foreground border-2 border-primary", children: "Conversation Management" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-lg", "aria-hidden": "true", children: "→" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center px-3 py-1.5 text-sm font-semibold rounded-full bg-accent text-accent-foreground border-2 border-accent", children: "Conversation Control & Structure" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold my-2.5", children: "What this looks like in conversation" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "my-2.5 ml-5 list-disc", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Clear purpose setting" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Smooth transitions" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Summarizes and clarifies next steps" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold my-2.5", children: "Examples of observable indicators" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "my-2.5 ml-5 list-disc", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Purpose clarity" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Transition smoothness" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Summary accuracy" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Next-step clarity" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border rounded-2xl bg-muted/30 p-5 my-3.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center px-3 py-1.5 text-sm font-semibold rounded-full bg-primary text-primary-foreground border-2 border-primary", children: "Adaptive Response" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-lg", "aria-hidden": "true", children: "→" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center px-3 py-1.5 text-sm font-semibold rounded-full bg-accent text-accent-foreground border-2 border-accent", children: "Adaptability" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold my-2.5", children: "What this looks like in conversation" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "my-2.5 ml-5 list-disc", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Adjusts tone, depth, or pacing based on signals" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Shifts approach in response to new information" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold my-2.5", children: "Examples of observable indicators" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "my-2.5 ml-5 list-disc", children: /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Signal-aligned behavioral shifts" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border rounded-2xl bg-muted/30 p-5 my-3.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center px-3 py-1.5 text-sm font-semibold rounded-full bg-primary text-primary-foreground border-2 border-primary", children: "Commitment Generation" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-lg", "aria-hidden": "true", children: "→" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center px-3 py-1.5 text-sm font-semibold rounded-full bg-accent text-accent-foreground border-2 border-accent", children: "Commitment Gaining" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold my-2.5", children: "What this looks like in conversation" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "my-2.5 ml-5 list-disc", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Secures voluntary, explicit next actions" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Confirms mutual agreement and ownership" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold my-2.5", children: "Examples of observable indicators" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "my-2.5 ml-5 list-disc", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Explicit commitments" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Specific next steps" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Ownership clarity" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "border border-border rounded-2xl bg-card p-5 mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl mb-2.5 font-bold", children: "Methodological Safeguards" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "my-2.5", children: [
        "Signal Intelligence",
        /* @__PURE__ */ jsxRuntimeExports.jsx("sup", { className: "text-xs", children: "™" }),
        " is non-clinical and non-diagnostic. It assesses observable conversation behavior only and does not infer protected attributes or mental health status. All metrics are explainable, coachable, and auditable."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "border border-border rounded-2xl bg-card p-5 mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl mb-2.5 font-bold", children: "References (Links)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "my-2.5 ml-5 list-decimal", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "my-2", children: [
          "Davis, M. H. (1983).",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://doi.org/10.1037/0022-3514.44.1.113", target: "_blank", rel: "noreferrer", className: "text-accent hover:underline", children: "https://doi.org/10.1037/0022-3514.44.1.113" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "my-2", children: [
          "Decety, J., & Jackson, P. L. (2004).",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://doi.org/10.1177/1534582304267187", target: "_blank", rel: "noreferrer", className: "text-accent hover:underline", children: "https://doi.org/10.1177/1534582304267187" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "my-2", children: [
          "Mayer, J. D., Salovey, P., & Caruso, D. R. (2004).",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://doi.org/10.1207/s15327965pli1503_02", target: "_blank", rel: "noreferrer", className: "text-accent hover:underline", children: "https://doi.org/10.1207/s15327965pli1503_02" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "my-2", children: [
          "Goleman, D. (1998).",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.danielgoleman.info/working-with-emotional-intelligence/", target: "_blank", rel: "noreferrer", className: "text-accent hover:underline", children: "https://www.danielgoleman.info/working-with-emotional-intelligence/" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "my-2", children: [
          "Flavell, J. H. (1979).",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://doi.org/10.1037/0003-066X.34.10.906", target: "_blank", rel: "noreferrer", className: "text-accent hover:underline", children: "https://doi.org/10.1037/0003-066X.34.10.906" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "my-2", children: [
          "Kruger, J., & Dunning, D. (1999).",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://doi.org/10.1037/0022-3514.77.6.1121", target: "_blank", rel: "noreferrer", className: "text-accent hover:underline", children: "https://doi.org/10.1037/0022-3514.77.6.1121" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "my-2", children: [
          "Deci, E. L., & Ryan, R. M. (2000).",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://doi.org/10.1207/S15327965PLI1104_01", target: "_blank", rel: "noreferrer", className: "text-accent hover:underline", children: "https://doi.org/10.1207/S15327965PLI1104_01" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "my-2", children: [
          "Cialdini (resource).",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.influenceatwork.com/principles-of-persuasion/", target: "_blank", rel: "noreferrer", className: "text-accent hover:underline", children: "https://www.influenceatwork.com/principles-of-persuasion/" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "my-2", children: [
          "Steele, C. M. (1997).",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://doi.org/10.1037/0003-066X.52.6.613", target: "_blank", rel: "noreferrer", className: "text-accent hover:underline", children: "https://doi.org/10.1037/0003-066X.52.6.613" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "my-2", children: [
          "Eisenberger, N. I., & Lieberman, M. D. (2004).",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://doi.org/10.1016/j.tics.2004.01.010", target: "_blank", rel: "noreferrer", className: "text-accent hover:underline", children: "https://doi.org/10.1016/j.tics.2004.01.010" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "my-2", children: [
          "Rock/SCARF (overview).",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://neuroleadership.com/your-brain-at-work/scarf-model", target: "_blank", rel: "noreferrer", className: "text-accent hover:underline", children: "https://neuroleadership.com/your-brain-at-work/scarf-model" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "my-2", children: [
          "Cronbach, L. J., & Meehl, P. E. (1955).",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://doi.org/10.1037/h0040957", target: "_blank", rel: "noreferrer", className: "text-accent hover:underline", children: "https://doi.org/10.1037/h0040957" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "my-2", children: [
          "Messick, S. (1995).",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://doi.org/10.1037/0003-066X.50.9.741", target: "_blank", rel: "noreferrer", className: "text-accent hover:underline", children: "https://doi.org/10.1037/0003-066X.50.9.741" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "my-2", children: [
          "Doshi-Velez, F., & Kim, B. (2017).",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://arxiv.org/abs/1702.08608", target: "_blank", rel: "noreferrer", className: "text-accent hover:underline", children: "https://arxiv.org/abs/1702.08608" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "my-2", children: [
          "OECD (2019).",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://oecd.ai/en/ai-principles", target: "_blank", rel: "noreferrer", className: "text-accent hover:underline", children: "https://oecd.ai/en/ai-principles" })
        ] })
      ] })
    ] })
  ] }) });
}
const Textarea = reactExports.forwardRef(({
  className,
  ...props
}, ref) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { className: cn("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className), ref, ...props });
});
Textarea.displayName = "Textarea";
function ContactPage() {
  const [formData, setFormData] = reactExports.useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = reactExports.useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: ""
      });
    }, 3e3);
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-gradient-to-b from-primary/5 to-background py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-5xl font-bold mb-6", children: "Request a Demo" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground", children: "See how ReflectivAI can transform your life sciences sales team with AI-powered coaching and Signal Intelligence™." })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-12 max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Get in Touch" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Fill out the form below and our team will reach out within 24 hours." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: isSubmitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center py-12 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-16 w-16 text-green-500 mb-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-2", children: "Thank You!" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "We've received your request and will be in touch soon." })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "name", className: "block text-sm font-medium mb-2", children: "Full Name *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "name", name: "name", value: formData.name, onChange: handleChange, required: true, placeholder: "John Doe" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "email", className: "block text-sm font-medium mb-2", children: "Work Email *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "email", name: "email", type: "email", value: formData.email, onChange: handleChange, required: true, placeholder: "john@company.com" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "company", className: "block text-sm font-medium mb-2", children: "Company *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "company", name: "company", value: formData.company, onChange: handleChange, required: true, placeholder: "Your Company" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "phone", className: "block text-sm font-medium mb-2", children: "Phone Number" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "phone", name: "phone", type: "tel", value: formData.phone, onChange: handleChange, placeholder: "(555) 123-4567" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "message", className: "block text-sm font-medium mb-2", children: "Message" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { id: "message", name: "message", value: formData.message, onChange: handleChange, rows: 4, placeholder: "Tell us about your team and what you're looking for..." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", className: "w-full", size: "lg", children: "Request Demo" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mb-6", children: "Contact Information" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-6 w-6 text-primary" }) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold mb-1", children: "Email" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "info@reflectivai.com" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "support@reflectivai.com" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-6 w-6 text-primary" }) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold mb-1", children: "Phone" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "+1 (555) 123-4567" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Mon-Fri, 9am-6pm EST" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-6 w-6 text-primary" }) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold mb-1", children: "Office" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "123 Innovation Drive" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "San Francisco, CA 94105" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "bg-primary/5 border-primary/20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Why Choose ReflectivAI?" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5 text-primary flex-shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "Purpose-built for life sciences sales teams" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5 text-primary flex-shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "8 Signal Intelligence™ Capabilities tracked with scores" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5 text-primary flex-shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "Real-time AI coaching and feedback" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5 text-primary flex-shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "9+ realistic pharma role-play scenarios" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5 text-primary flex-shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "100% regulatory compliance guaranteed" })
            ] })
          ] }) })
        ] })
      ] })
    ] }) }) })
  ] });
}
const Progress = reactExports.forwardRef(({
  className,
  value,
  ...props
}, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Root$5, { ref, className: cn("relative h-4 w-full overflow-hidden rounded-full bg-secondary", className), ...props, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Indicator$1, { className: "h-full w-full flex-1 bg-primary transition-all", style: {
  transform: `translateX(-${100 - (value || 0)}%)`
} }) }));
Progress.displayName = Root$5.displayName;
const scenarios = [{
  id: "oncologist-discovery",
  title: "Discovery Call with Oncologist",
  description: "Navigate a time-constrained conversation while uncovering key priorities",
  persona: {
    name: "Dr. Sarah Chen",
    role: "Oncology Department Head",
    concerns: ["Patient outcomes", "Time constraints", "Evidence quality"],
    decisionStyle: "Data-driven, values efficiency"
  },
  conversation: [{
    speaker: "rep",
    text: "Dr. Chen, thanks for making time. I know you only have about 10 minutes, so I'll be mindful of that.",
    signals: [{
      capability: "Signal Awareness",
      metric: "Question Quality",
      rating: "strong",
      note: "Acknowledges time constraint upfront - shows awareness of customer context"
    }]
  }, {
    speaker: "customer",
    text: "I appreciate that. What did you want to discuss?"
  }, {
    speaker: "rep",
    text: "I wanted to understand what's top of mind for you right now when it comes to treatment options for your advanced melanoma patients.",
    signals: [{
      capability: "Signal Awareness",
      metric: "Question Quality",
      rating: "strong",
      note: "Open-ended question focused on customer priorities, not product features"
    }]
  }, {
    speaker: "customer",
    text: "Honestly, I'm seeing more patients who've failed first-line therapy. The challenge is finding options that balance efficacy with quality of life."
  }, {
    speaker: "rep",
    text: "That balance is critical. When you say quality of life, what specifically are you seeing that concerns you most?",
    signals: [{
      capability: "Signal Interpretation",
      metric: "Listening & Responsiveness",
      rating: "strong",
      note: "Picks up on key phrase and explores deeper - demonstrates active listening"
    }]
  }, {
    speaker: "customer",
    text: "Side effect profiles. Some of these therapies are so aggressive that patients struggle to maintain daily activities. I need options that work without destroying their remaining quality time."
  }, {
    speaker: "rep",
    text: "So if I'm hearing you right, you're looking for efficacy data, but the tolerability profile is equally important because it directly impacts whether patients can stay on therapy. Is that fair?",
    signals: [{
      capability: "Value Connection",
      metric: "Value Framing",
      rating: "strong",
      note: "Connects clinical need to patient adherence - frames value in doctor terms"
    }]
  }, {
    speaker: "customer",
    text: "Exactly. If they can't tolerate it, the efficacy doesn't matter."
  }, {
    speaker: "rep",
    text: "That makes complete sense. Would it be helpful if I shared some data on how our therapy performs on both dimensions—efficacy and tolerability—specifically in the second-line setting?",
    signals: [{
      capability: "Commitment Generation",
      metric: "Commitment Gaining",
      rating: "good",
      note: "Asks permission before presenting - respectful of time and builds engagement"
    }]
  }],
  coachingFeedback: {
    strengths: ["Excellent signal awareness - acknowledged time constraint immediately", 'Strong listening and responsiveness - picked up on "quality of life" and explored deeper', "Effective value framing - connected clinical need to patient adherence"],
    improvements: ['Could have explored "failed first-line therapy" comment earlier', "Opportunity to ask about decision-making process or formulary considerations"],
    recommendations: ['When a customer mentions a specific patient population ("failed first-line"), dig into that immediately - it often reveals urgency', 'Consider asking: "What would need to be true for you to consider changing your current approach?" to understand decision criteria', 'Before presenting data, confirm: "Is there anything else I should understand about your patient population before I share this?"'],
    metrics: [{
      name: "Question Quality",
      score: 9,
      max: 10
    }, {
      name: "Listening & Responsiveness",
      score: 9,
      max: 10
    }, {
      name: "Value Framing",
      score: 8,
      max: 10
    }, {
      name: "Engagement Cues",
      score: 7,
      max: 10
    }, {
      name: "Commitment Gaining",
      score: 7,
      max: 10
    }]
  }
}, {
  id: "budget-objection",
  title: "Handling Budget Objections",
  description: "Navigate cost concerns with a hospital administrator",
  persona: {
    name: "Michael Torres",
    role: "Hospital Pharmacy Director",
    concerns: ["Budget constraints", "Formulary impact", "Cost-effectiveness"],
    decisionStyle: "Analytical, risk-averse"
  },
  conversation: [{
    speaker: "customer",
    text: "I've reviewed your proposal, but I have to be honest - the cost is significantly higher than our current standard of care."
  }, {
    speaker: "rep",
    text: "I appreciate you being direct about that. Cost is absolutely a real consideration. Can I ask - what are you currently using as your standard of care?",
    signals: [{
      capability: "Objection Navigation",
      metric: "Objection Handling",
      rating: "strong",
      note: "Acknowledges objection without being defensive, then seeks to understand context"
    }]
  }, {
    speaker: "customer",
    text: "We're using Drug X. It's been on formulary for years, and while it's not perfect, it's affordable and physicians are comfortable with it."
  }, {
    speaker: "rep",
    text: "That makes sense - familiarity and cost predictability matter. You mentioned it's not perfect. What are the gaps you're seeing with Drug X?",
    signals: [{
      capability: "Signal Interpretation",
      metric: "Listening & Responsiveness",
      rating: "strong",
      note: 'Catches subtle signal ("not perfect") and explores it - turns objection into discovery'
    }]
  }, {
    speaker: "customer",
    text: "Well, we do see some patients who don't respond or have to discontinue due to side effects. Then we're scrambling for alternatives, which gets expensive."
  }, {
    speaker: "rep",
    text: "So there's a hidden cost when Drug X doesn't work - you're paying for the initial therapy plus the rescue therapy, plus the clinical time managing those transitions. Is that what you're experiencing?",
    signals: [{
      capability: "Value Connection",
      metric: "Value Framing",
      rating: "strong",
      note: "Reframes cost conversation from acquisition price to total cost of care"
    }]
  }, {
    speaker: "customer",
    text: "That's exactly it. We hadn't really quantified that, but yes - the failures are costly."
  }, {
    speaker: "rep",
    text: "Would it be useful to look at the total cost per successfully treated patient rather than just the per-unit cost? Our data shows that when you factor in response rates and tolerability, the cost per successful outcome is actually comparable - and in some cases, lower.",
    signals: [{
      capability: "Adaptive Response",
      metric: "Adaptability",
      rating: "strong",
      note: "Shifts conversation from price to value - adapts approach based on customer hidden cost insight"
    }]
  }, {
    speaker: "customer",
    text: "I'd need to see that analysis. If you can show me the math on that, it would help me make the case to the committee."
  }, {
    speaker: "rep",
    text: "Absolutely. I can pull together a cost-per-outcome analysis specific to your patient population. Would it also be helpful to include some case examples from similar institutions who've made this transition?",
    signals: [{
      capability: "Commitment Generation",
      metric: "Commitment Gaining",
      rating: "good",
      note: "Secures next step and offers additional value (peer examples) to strengthen case"
    }]
  }],
  coachingFeedback: {
    strengths: ["Excellent objection handling - acknowledged concern without defensiveness", 'Strong listening - caught "not perfect" signal and explored it', "Effective value reframing - shifted from price to total cost of care", "Good adaptability - pivoted approach based on customer insight"],
    improvements: ["Could have asked about budget cycle timing to understand urgency", "Opportunity to explore who else needs to be involved in the decision"],
    recommendations: ["When a customer mentions making the case to the committee, immediately ask who is on that committee and what matters most to each of them", "Consider asking what a successful outcome would look like for them personally in this decision to understand individual motivations", "Follow up with what concerns they think the committee will raise that should be addressed proactively"],
    metrics: [{
      name: "Objection Handling",
      score: 9,
      max: 10
    }, {
      name: "Listening & Responsiveness",
      score: 9,
      max: 10
    }, {
      name: "Value Framing",
      score: 9,
      max: 10
    }, {
      name: "Adaptability",
      score: 8,
      max: 10
    }, {
      name: "Commitment Gaining",
      score: 7,
      max: 10
    }]
  }
}, {
  id: "clinical-evidence",
  title: "Clinical Evidence Discussion",
  description: "Present complex clinical data to a skeptical pharmacy director",
  persona: {
    name: "Dr. Jennifer Patel",
    role: "Pharmacy Director",
    concerns: ["Evidence quality", "Real-world applicability", "Patient safety"],
    decisionStyle: "Evidence-focused, methodical"
  },
  conversation: [{
    speaker: "customer",
    text: "I've seen your Phase 3 data. The efficacy looks promising, but I have questions about the patient population in the trial versus who we actually treat."
  }, {
    speaker: "rep",
    text: "That's a really important question - trial populations don't always match real-world patients. What differences are you seeing that concern you?",
    signals: [{
      capability: "Signal Awareness",
      metric: "Question Quality",
      rating: "strong",
      note: "Validates concern and invites customer to articulate specific gap - builds credibility"
    }]
  }, {
    speaker: "customer",
    text: "Well, your trial excluded patients over 75 and those with significant comorbidities. That's probably 40% of the patients I see."
  }, {
    speaker: "rep",
    text: "You're right - the trial had those exclusion criteria for safety monitoring purposes. That's a real gap. We do have some emerging real-world evidence from post-marketing surveillance that includes older patients and those with comorbidities. Would that be relevant to review?",
    signals: [{
      capability: "Signal Interpretation",
      metric: "Listening & Responsiveness",
      rating: "strong",
      note: "Acknowledges limitation honestly rather than deflecting - builds trust"
    }]
  }, {
    speaker: "customer",
    text: "Yes, I'd want to see that. What's the sample size and how robust is the data?"
  }, {
    speaker: "rep",
    text: "It's about 1,200 patients so far, with a median follow-up of 8 months. It's observational, so not as controlled as the Phase 3 trial, but it does show similar efficacy trends and - importantly - no unexpected safety signals in the older or comorbid populations.",
    signals: [{
      capability: "Value Connection",
      metric: "Value Framing",
      rating: "good",
      note: "Provides transparent context about data limitations while highlighting relevant findings"
    }]
  }, {
    speaker: "customer",
    text: "That's helpful. I'd still want to see the actual data. My other concern is the dosing schedule - it's more complex than what we currently use."
  }, {
    speaker: "rep",
    text: "I hear that - dosing complexity can impact adherence and create operational challenges. Can you help me understand what specifically about the schedule concerns you? Is it the frequency, the administration requirements, or something else?",
    signals: [{
      capability: "Customer Engagement Monitoring",
      metric: "Engagement Cues",
      rating: "strong",
      note: "Recognizes shift to new concern and explores it rather than defending dosing schedule"
    }]
  }, {
    speaker: "customer",
    text: "It's the administration requirements. We'd need to ensure nursing staff are properly trained, and that takes time and resources."
  }, {
    speaker: "rep",
    text: "That's a legitimate operational consideration. We actually offer a comprehensive training program for clinical staff at no cost, including on-site support during the first few administrations. Would it be worth exploring what that looks like and whether it addresses your concern?",
    signals: [{
      capability: "Adaptive Response",
      metric: "Adaptability",
      rating: "strong",
      note: "Pivots from clinical discussion to operational solution - adapts to customer real barrier"
    }]
  }, {
    speaker: "customer",
    text: "Yes, that would help. If you can send me the real-world evidence data and information about the training program, I'll review it with my team."
  }, {
    speaker: "rep",
    text: "Absolutely. I'll get both of those to you by end of week. When you say 'review with your team,' who else should I make sure is included in this conversation?",
    signals: [{
      capability: "Commitment Generation",
      metric: "Commitment Gaining",
      rating: "good",
      note: "Secures commitment and begins to map decision-making process"
    }]
  }],
  coachingFeedback: {
    strengths: ["Excellent credibility building - acknowledged data limitations honestly", "Strong engagement monitoring - recognized shift to operational concerns", "Effective adaptability - pivoted from clinical to operational solutions", "Good listening - explored specific concerns rather than making assumptions"],
    improvements: ["Could have asked about decision timeline earlier in conversation", `Opportunity to explore what "success" looks like from customer's perspective`],
    recommendations: ['When a customer raises evidence concerns, ask: "What level of evidence would you need to feel comfortable moving forward?" to understand their threshold', 'Consider asking: "Beyond the data, what else would need to be in place for this to work in your setting?" to uncover hidden barriers', 'Before ending, confirm: "What questions do you anticipate from your team that we should address proactively?"'],
    metrics: [{
      name: "Question Quality",
      score: 8,
      max: 10
    }, {
      name: "Listening & Responsiveness",
      score: 9,
      max: 10
    }, {
      name: "Value Framing",
      score: 7,
      max: 10
    }, {
      name: "Engagement Cues",
      score: 8,
      max: 10
    }, {
      name: "Adaptability",
      score: 9,
      max: 10
    }, {
      name: "Commitment Gaining",
      score: 7,
      max: 10
    }]
  }
}];
const capabilities = [{
  name: "Signal Awareness",
  metric: "Question Quality",
  description: "Recognizing verbal and contextual cues that reveal customer priorities, concerns, and decision-making factors",
  example: {
    good: '"I notice you mentioned time constraints twice. Should we focus on the most critical aspects first?"',
    needsWork: "Launching into a full product presentation without acknowledging the customer said they only have 10 minutes"
  }
}, {
  name: "Signal Interpretation",
  metric: "Listening & Responsiveness",
  description: "Understanding the meaning and implications behind what customers say - and what they do not say",
  example: {
    good: 'Customer says "it is not perfect" - rep explores: "What gaps are you seeing?" rather than moving on',
    needsWork: "Customer mentions a concern but rep continues with scripted talking points"
  }
}, {
  name: "Value Connection",
  metric: "Value Framing",
  description: "Linking product features to specific customer needs and priorities in their language",
  example: {
    good: '"You mentioned patient adherence is critical. Our once-weekly dosing directly addresses that by reducing administration burden."',
    needsWork: "Listing product features without connecting them to customer stated priorities"
  }
}, {
  name: "Customer Engagement Monitoring",
  metric: "Engagement Cues",
  description: "Tracking customer interest, understanding, and receptivity throughout the conversation",
  example: {
    good: "Noticing customer energy shift when discussing a specific topic and exploring it further",
    needsWork: "Continuing to present information despite customer showing signs of disengagement or confusion"
  }
}, {
  name: "Objection Navigation",
  metric: "Objection Handling",
  description: "Addressing concerns and resistance in a way that maintains trust and moves the conversation forward",
  example: {
    good: '"Cost is a real consideration. Help me understand what you are comparing this to and what matters most in that comparison."',
    needsWork: "Becoming defensive or dismissive when customer raises a concern"
  }
}, {
  name: "Conversation Management",
  metric: "Conversation Control & Structure",
  description: "Guiding the conversation productively while remaining responsive to customer needs",
  example: {
    good: '"We have covered efficacy and safety. Should we discuss implementation, or is there something else more pressing?"',
    needsWork: "Letting the conversation drift without clear direction or allowing customer to dominate without addressing key topics"
  }
}, {
  name: "Adaptive Response",
  metric: "Adaptability",
  description: "Adjusting approach, messaging, and tactics based on customer feedback and changing circumstances",
  example: {
    good: "Shifting from clinical data discussion to operational implementation when customer reveals that is the real barrier",
    needsWork: "Sticking to planned presentation despite customer signals indicating different priorities"
  }
}, {
  name: "Commitment Generation",
  metric: "Commitment Gaining",
  description: "Moving the customer toward clear next steps and decisions in a natural, pressure-free way",
  example: {
    good: '"Based on what we have discussed, would it make sense to schedule time with your clinical team to review the protocol?"',
    needsWork: "Ending conversations without clear next steps or pushing for commitments that do not align with customer readiness"
  }
}];
function DemoPage() {
  const [selectedScenario, setSelectedScenario] = reactExports.useState(scenarios[0].id);
  const [currentStep, setCurrentStep] = reactExports.useState(0);
  const [activeCapability, setActiveCapability] = reactExports.useState(null);
  const scenario = scenarios.find((s) => s.id === selectedScenario) || scenarios[0];
  const maxSteps = scenario.conversation.length;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b border-border bg-gradient-to-b from-primary/5 to-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 py-16 md:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "mb-4", variant: "secondary", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3 w-3 mr-1" }),
        "Interactive Experience"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-5xl font-bold mb-6", children: "Experience ReflectivAI in Action" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground mb-8", children: "Explore our AI-powered coaching platform with interactive demos. See how Signal Intelligence™ transforms sales conversations - no signup required." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4 justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "lg", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link$1, { to: "/contact", children: [
          "Book a Live Demo",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "lg", variant: "outline", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#demos", children: "Explore Interactive Demos" }) })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "demos", className: "border-b border-border bg-muted/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#ai-coach", className: "group", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "h-full transition-all hover:shadow-lg hover:border-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 rounded-lg bg-primary/10 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-lg", children: "AI Coach Simulation" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "See personalized coaching feedback in action" })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#role-play", className: "group", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "h-full transition-all hover:shadow-lg hover:border-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 rounded-lg bg-primary/10 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-lg", children: "Role Play Sampler" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Experience practice scenarios with live metrics" })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#framework", className: "group", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "h-full transition-all hover:shadow-lg hover:border-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 rounded-lg bg-primary/10 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-lg", children: "Framework Explorer" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Explore Signal Intelligence™ capabilities" })
      ] }) }) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "ai-coach", className: "py-16 md:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mb-4", variant: "outline", children: "Demo #1" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "AI Coach Simulation" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground max-w-2xl mx-auto", children: "Watch how our AI Coach analyzes real conversations and provides actionable feedback to improve performance." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-medium mb-4", children: "Choose a scenario:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: scenarios.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
          setSelectedScenario(s.id);
          setCurrentStep(0);
        }, className: `text-left p-4 rounded-lg border-2 transition-all ${selectedScenario === s.id ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-2", children: s.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: s.description })
        ] }, s.id)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Conversation" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Step through the interaction" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", children: [
              currentStep + 1,
              " / ",
              maxSteps
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4 min-h-[400px]", children: scenario.conversation.slice(0, currentStep + 1).map((turn, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 rounded-lg ${turn.speaker === "rep" ? "bg-primary/10 ml-8" : "bg-muted mr-8"}`, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-wide", children: turn.speaker === "rep" ? "Sales Rep" : scenario.persona.name }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: turn.text })
              ] }),
              turn.signals && turn.signals.map((signal, sIdx) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-12 p-3 rounded-lg bg-accent/10 border border-accent/20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
                signal.rating === "strong" && /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" }),
                signal.rating === "good" && /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" }),
                signal.rating === "needs-work" && /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-xs", children: signal.capability }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-3 w-3 text-muted-foreground" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-xs", children: signal.metric })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: signal.note })
                ] })
              ] }) }, sIdx))
            ] }, idx)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pt-4 border-t border-border", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: () => setCurrentStep(Math.max(0, currentStep - 1)), disabled: currentStep === 0, children: "Previous" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: () => setCurrentStep(Math.min(maxSteps - 1, currentStep + 1)), disabled: currentStep === maxSteps - 1, children: [
                currentStep === maxSteps - 1 ? "View Feedback" : "Next",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "ml-2 h-4 w-4" })
              ] })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-lg", children: "Customer Profile" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: scenario.persona.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: scenario.persona.role })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium mb-2", children: "Key Concerns:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: scenario.persona.concerns.map((concern, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-xs", children: concern }, idx)) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium mb-1", children: "Decision Style:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: scenario.persona.decisionStyle })
              ] })
            ] })
          ] }),
          currentStep === maxSteps - 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-primary", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-5 w-5 text-primary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-lg", children: "AI Coach Feedback" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium mb-3", children: "Performance Metrics" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: scenario.coachingFeedback.metrics.map((metric, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium", children: metric.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
                      metric.score,
                      "/",
                      metric.max
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Progress, { value: metric.score / metric.max * 100, className: "h-2" })
                ] }, idx)) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-medium mb-2 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 text-green-600" }),
                  "What You Did Well"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: scenario.coachingFeedback.strengths.map((strength, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "text-xs text-muted-foreground pl-6 relative", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-0 top-1", children: "•" }),
                  strength
                ] }, idx)) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-medium mb-2 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-4 w-4 text-blue-600" }),
                  "Growth Opportunities"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: scenario.coachingFeedback.improvements.map((improvement, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "text-xs text-muted-foreground pl-6 relative", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-0 top-1", children: "•" }),
                  improvement
                ] }, idx)) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-medium mb-2 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4 text-primary" }),
                  "Try This Next Time"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: scenario.coachingFeedback.recommendations.map((rec, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "text-xs text-muted-foreground pl-6 relative", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-0 top-1", children: "•" }),
                  rec
                ] }, idx)) })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "bg-primary/5 border-primary/20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "py-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mb-2", children: "Want to practice with your own scenarios?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6", children: "Get personalized AI coaching on your actual customer conversations." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "lg", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link$1, { to: "/contact", children: [
          "Book a Demo",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
        ] }) })
      ] }) }) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "role-play", className: "py-16 md:py-24 bg-muted/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mb-4", variant: "outline", children: "Demo #2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "Role Play Scenario Sampler" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground max-w-2xl mx-auto", children: "Experience our practice environment where reps build skills through realistic pharma scenarios." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-16 w-16 mx-auto mb-4 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mb-2", children: "Interactive Role Play Coming Soon" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6", children: "We're building an interactive role play experience where you can practice responding to customer scenarios in real-time." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link$1, { to: "/contact", children: [
          "Request Early Access",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
        ] }) })
      ] }) }) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "framework", className: "py-16 md:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mb-4", variant: "outline", children: "Demo #3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "Signal Intelligence™ Framework Explorer" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground max-w-2xl mx-auto", children: "Explore the 8 capabilities that power our coaching system. Click any capability to see real examples." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: capabilities.map((capability, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: `cursor-pointer transition-all ${activeCapability === idx ? "border-primary shadow-lg" : "hover:border-primary/50"}`, onClick: () => setActiveCapability(activeCapability === idx ? null : idx), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", children: capability.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-3 w-3 text-muted-foreground" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-xs", children: capability.metric })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: capability.description })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: `h-5 w-5 text-muted-foreground transition-transform ${activeCapability === idx ? "rotate-90" : ""}` })
        ] }) }),
        activeCapability === idx && /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4 pt-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 text-green-600" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: "What Good Looks Like" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground pl-6", children: capability.example.good })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-4 w-4 text-orange-600" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: "What Needs Work" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground pl-6", children: capability.example.needsWork })
          ] })
        ] })
      ] }, idx)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "bg-primary/5 border-primary/20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "py-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mb-2", children: "Ready to develop these capabilities in your team?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6", children: "See how Signal Intelligence™ transforms sales performance." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4 justify-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "lg", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link$1, { to: "/contact", children: [
            "Book a Demo",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "lg", variant: "outline", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link$1, { to: "/signal-intelligence", children: "Learn More About Signal Intelligence™" }) })
        ] })
      ] }) }) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 md:py-24 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "Experience the Full Platform" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground mb-8", children: "These demos show just a glimpse of what ReflectivAI can do. Book a personalized demo to see how we can transform your team's performance." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4 justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "lg", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link$1, { to: "/contact", children: [
          "Book a Live Demo",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "lg", variant: "outline", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link$1, { to: "/", children: "Back to Home" }) })
      ] })
    ] }) }) })
  ] });
}
const NotFoundPage = reactExports.lazy(() => __vitePreload(() => import("./_404-DmIAU4St.js"), true ? __vite__mapDeps([0,1,2]) : void 0));
const routes = [{
  path: "/",
  element: /* @__PURE__ */ jsxRuntimeExports.jsx(HomePage, {})
}, {
  path: "/ai-coach",
  element: /* @__PURE__ */ jsxRuntimeExports.jsx(AICoachPage, {})
}, {
  path: "/role-play",
  element: /* @__PURE__ */ jsxRuntimeExports.jsx(RolePlayPage, {})
}, {
  path: "/signal-intelligence",
  element: /* @__PURE__ */ jsxRuntimeExports.jsx(SignalIntelligencePage, {})
}, {
  path: "/contact",
  element: /* @__PURE__ */ jsxRuntimeExports.jsx(ContactPage, {})
}, {
  path: "/demo",
  element: /* @__PURE__ */ jsxRuntimeExports.jsx(DemoPage, {})
}, {
  path: "*",
  element: /* @__PURE__ */ jsxRuntimeExports.jsx(NotFoundPage, {})
}];
function Spinner({
  className
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `inline-block ${className || ""}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "animate-spin h-8 w-8 text-gray-600", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { className: "opacity-10", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { className: "opacity-20", fill: "currentColor", d: "m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })
  ] }) });
}
const SpinnerFallback = () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center py-8 h-screen items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, {}) });
const router = createBrowserRouter([{
  path: "/",
  element: /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(SpinnerFallback, {}), children: /* @__PURE__ */ jsxRuntimeExports.jsx(RootLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }) }),
  children: routes
}], {
  basename: "/reflectivAI-marketing-site/"
});
function App() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(RouterProvider2, { router });
}
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1e3 * 60 * 5,
      // 5 minutes
      gcTime: 1e3 * 60 * 10,
      // 10 minutes (formerly cacheTime)
      retry: 1,
      refetchOnWindowFocus: false
    },
    mutations: {
      retry: 0
    }
  }
});
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Root element not found");
const root = ReactDOM.createRoot(rootElement);
root.render(/* @__PURE__ */ jsxRuntimeExports.jsx(React.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) }) }));
