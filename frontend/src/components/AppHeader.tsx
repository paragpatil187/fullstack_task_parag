import React from "react";

const AppHeader: React.FC = () => {
  return (
    <header className="flex items-center gap-2 mb-4">
        <span className="text-2xl">📝</span>
        <h1 className="text-lg font-semibold">Note App</h1>
     
    </header>
  );
};

export default AppHeader;
