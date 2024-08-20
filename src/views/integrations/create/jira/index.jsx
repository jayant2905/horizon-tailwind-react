import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "components/card";
import authImg from "assets/img/auth/auth.png"; // Example background image

const CreateJiraIntegration = () => {
  const [formData, setFormData] = useState({
    projectName: "",
    apiKey: "",
    jiraUrl: "",
    assignee: "",
    priority: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form data submitted:", formData);
  };

  return (
    <div className="relative min-h-screen bg-white dark:bg-navy-900">
      <div
        className="absolute inset-0 hidden lg:block"
      />
      <div className="relative flex flex-col lg:flex-row min-h-screen lg:items-center lg:justify-center px-4 py-6 lg:px-8">
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
          <Link to="/integrations" className="mb-6 flex items-center text-gray-600 dark:text-gray-300 hover:cursor-pointer">
            <svg
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.70994 2.11997L2.82994 5.99997L6.70994 9.87997C7.09994 10.27 7.09994 10.9 6.70994 11.29C6.31994 11.68 5.68994 11.68 5.29994 11.29L0.709941 6.69997C0.319941 6.30997 0.319941 5.67997 0.709941 5.28997L5.29994 0.699971C5.68994 0.309971 6.31994 0.309971 6.70994 0.699971C7.08994 1.08997 7.09994 1.72997 6.70994 2.11997V2.11997Z"
                fill="#A3AED0"
              />
            </svg>
            <p className="ml-3 text-sm">Back to Integrations</p>
          </Link>
          <h1 className="text-2xl font-bold text-navy-700 dark:text-white mb-6">
            Create Jira Integration
          </h1>
          <Card extra="w-full p-6 bg-white shadow-md rounded-lg dark:bg-navy-800">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col">
                <label htmlFor="projectName" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Project Name
                </label>
                <input
                  type="text"
                  name="projectName"
                  value={formData.projectName}
                  onChange={handleChange}
                  className="mt-1 p-3 border border-gray-300 rounded"
                  placeholder="Enter your project name"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="apiKey" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  API Key
                </label>
                <input
                  type="text"
                  name="apiKey"
                  value={formData.apiKey}
                  onChange={handleChange}
                  className="mt-1 p-3 border border-gray-300 rounded"
                  placeholder="Enter your Jira API Key"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="jiraUrl" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Jira URL
                </label>
                <input
                  type="url"
                  name="jiraUrl"
                  value={formData.jiraUrl}
                  onChange={handleChange}
                  className="mt-1 p-3 border border-gray-300 rounded"
                  placeholder="https://yourcompany.atlassian.net"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="assignee" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Assignee
                </label>
                <input
                  type="text"
                  name="assignee"
                  value={formData.assignee}
                  onChange={handleChange}
                  className="mt-1 p-3 border border-gray-300 rounded"
                  placeholder="Enter assignee username"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="priority" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Priority
                </label>
                <select
                  name="priority"
                  value={formData.priority}
                  onChange={handleChange}
                  className="mt-1 p-3 border border-gray-300 rounded"
                >
                  <option value="" disabled>Select priority</option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>

              <button
                type="submit"
                className="mt-4 w-full p-3 bg-brand-500 text-white font-bold rounded hover:bg-brand-600"
              >
                Create Integration
              </button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CreateJiraIntegration;
