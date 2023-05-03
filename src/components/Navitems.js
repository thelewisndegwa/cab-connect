import * as Icons from "react-icons/fa";

export const navItems = [
  {
    id: 1,
    title: "Home",
    path: "/",
    icon: <Icons.FaHome />,
    nName: "nav-item",
    sName: "sidebar-item",
  },
  {
    id: 4,
    title: "About",
    path: "/about",
    icon: <Icons.FaInfoCircle />,
    nName: "nav-item",
    sName: "sidebar-item",
  },
  {
    id: 2,
    title: "Payment",
    path: "/payment",
    icon: <Icons.FaCreditCard />,
    nName: "nav-item",
    sName: "sidebar-item",
  },
  {
    id: 5,
    title: "Ride History",
    path: "/ride-history",
    icon: <Icons.FaHistory />,
    nName: "nav-item",
    sName: "sidebar-item",
  },
  {
    id: 3,
    title: "Support",
    path: "/support",
    icon: <Icons.FaHeadset />,
    nName: "nav-item",
    sName: "sidebar-item",
  },
];
