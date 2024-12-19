import React, { useState } from 'react';

const SubSection = () => {
  // Define the tabs array with title and id
  const tabs = [
    { id: 'Basic Details', title: 'Basic Details' },
    { id: 'Legal Documents', title: 'Legal Documents' },
    { id: 'Demographics', title: 'Demographics' },
  ];

  // Set the first tab as active by default
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="flex justify-center">
      <div className="mb-4 border-b-2 border-gray-300 w-1.8/3">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" role="tablist">
          {tabs.map((tab) => (
            <li key={tab.id} className="me-2" role="presentation">
              <button
                className={`inline-block p-4 text-md rounded-t-lg 
                  ${activeTab === tab.id 
                    ? 'border-b-2 text-gray-800 border-gray-600' // Active tab style
                    : 'text-gray-500 hover:text-gray-600 dark:text-gray-400 hover:border-gray-300 dark:border-transparent' // Inactive tab style
                  }`}
                onClick={() => handleTabChange(tab.id)}
                role="tab"
                aria-controls={tab.id}
                aria-selected={activeTab === tab.id ? 'true' : 'false'}
              >
                {tab.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
        </div>
  );
};

export default SubSection;
