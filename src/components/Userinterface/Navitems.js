import React from "react";
import { Link } from "react-router-dom";
import * as Icons from "react-icons/fa";
import "./Navbar.css";
import Button from "./button";
import { handleShow } from "./testChatbox";

export const navItems = [
  {
    id: 1,
    title: "Home",
    path: "/",
    icon: <Icons.FaHome />,
    nName: "nav-item",
    sName: "sidebar-item",
    onClick: () => {},
  },
  {
    id: 2,
    title: "Payment",
    path: "/payment",
    icon: <Icons.FaCreditCard />,
    nName: "nav-item",
    sName: "sidebar-item",
    onClick: () => {},
  },
  {
    id: 3,
    title: "Support",
    path: "/support",
    icon: <Icons.FaHeadset />,
    nName: "nav-item",
    sName: "sidebar-item",
    onClick: () => {},
    
  },
  {
    id: 4,
    title: "About",
    path: "/about",
    icon: <Icons.FaInfoCircle />,
    nName: "nav-item",
    sName: "sidebar-item",
    onClick: () => {},
  },
  {
    id: 5,
    title: "History",
    path: "/ride-history",
    icon: <Icons.FaHistory />,
    nName: "nav-item",
    sName: "sidebar-item",
    onClick: () => {},
  },
];