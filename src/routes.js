import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import DataTables from "views/admin/tables";
import Integrations from "views/integrations";
import CreateIntegrations from "views/integrations/create";

// Auth Imports
import SignIn from "views/auth/SignIn";

// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdLock,
} from "react-icons/md";
import CreateJiraIntegration from "views/integrations/create/jira";

const routes = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  {
    name: "NFT Marketplace",
    layout: "/admin",
    path: "nft-marketplace",
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,
    component: <NFTMarketplace />,
    secondary: true,
  },
  {
    name: "Data Tables",
    layout: "/admin",
    icon: <MdBarChart className="h-6 w-6" />,
    path: "data-tables",
    component: <DataTables />,
  },
  {
    name: "Profile",
    layout: "/admin",
    path: "profile",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Profile />,
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "sign-in",
    icon: <MdLock className="h-6 w-6" />,
    component: <SignIn />,
  },
  {
    name: "Integrations",
    layout: "/admin",
    path: "integrations",
    icon: <MdHome className="h-6 w-6" />,
    component: <Integrations />,
  },
  {
    name: "Create Integrations",
    layout: "/admin",
    path: "integrations/create",
    icon: <MdHome className="h-6 w-6" />,
    component: <CreateIntegrations />,
  },
  {
    name: "Create JIRA Integrations",
    layout: "/admin",
    path: "integrations/create/jira",
    icon: <MdHome className="h-6 w-6" />,
    component: <CreateJiraIntegration />,
  },
];
export default routes;
