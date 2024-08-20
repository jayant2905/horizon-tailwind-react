import React, { useState } from "react";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { FaAws, FaJira, FaMicrosoft, FaSlack, FaGithub, FaSalesforce, FaGoogleDrive, FaTrello, FaDropbox } from "react-icons/fa";
import Card from "components/card";
import { useNavigate } from "react-router-dom";

const integrationTypes = [
  { id: 1, name: "Jira", icon: <FaJira />, description: "Track your issues with Jira.", path: "/admin/integrations/create/jira" },
  { id: 2, name: "AWS", icon: <FaAws />, description: "Manage your cloud infrastructure.", path: "/admin/integrations/create/aws" },
  { id: 3, name: "Azure", icon: <FaMicrosoft />, description: "Microsoft's cloud platform.", path: "/admin/integrations/create/azure" },
  { id: 4, name: "Slack", icon: <FaSlack />, description: "Team communication tool.", path: "/admin/integrations/create/slack" },
  { id: 5, name: "GitHub", icon: <FaGithub />, description: "Host and review code.", path: "/admin/integrations/create/github" },
  { id: 6, name: "Salesforce", icon: <FaSalesforce />, description: "Customer relationship management.", path: "/admin/integrations/create/salesforce" },
  { id: 7, name: "Google Drive", icon: <FaGoogleDrive />, description: "Store and share files.", path: "/admin/integrations/create/googledrive" },
  { id: 8, name: "Trello", icon: <FaTrello />, description: "Organize your projects.", path: "/admin/integrations/create/trello" },
  { id: 10, name: "Dropbox", icon: <FaDropbox />, description: "File hosting service.", path: "/admin/integrations/create/dropbox" },
];

const CreateIntegrations = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIntegrations, setSelectedIntegrations] = useState([]);
  const navigate = useNavigate();

  const handleHeartClick = (id) => {
    setSelectedIntegrations((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleTileClick = (path) => {
    navigate(path);
  };

  const filteredIntegrations = integrationTypes.filter((type) =>
    type.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="py-6">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search for an integration..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredIntegrations.map((type) => (
          <Card
            key={type.id}
            extra="flex flex-col w-full h-full p-4 bg-white rounded-xl shadow-sm hover:shadow-md cursor-pointer"
            onClick={() => handleTileClick(type.path)}
          >
            <div className="relative w-full h-24 flex items-center justify-center bg-gray-100 rounded-lg mb-3">
              <div className="text-4xl text-brand-500">{type.icon}</div>
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevent navigation when clicking heart
                  handleHeartClick(type.id);
                }}
                className="absolute top-3 right-3 flex items-center justify-center rounded-full bg-white p-2 text-brand-500 hover:cursor-pointer"
              >
                <div className="flex h-full w-full items-center justify-center rounded-full text-xl hover:bg-gray-50">
                  {selectedIntegrations.includes(type.id) ? (
                    <IoHeart className="text-brand-500" />
                  ) : (
                    <IoHeartOutline />
                  )}
                </div>
              </button>
            </div>
            <div className="flex flex-col items-start">
              <p className="text-lg font-bold text-navy-700 dark:text-white">
                {type.name}
              </p>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                {type.description}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CreateIntegrations;
