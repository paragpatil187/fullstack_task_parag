import React from "react";

const AppHeader: React.FC = () => {
  return (
    <header className="flex items-center gap-2 mb-4">
         <img src="/notesIcon.svg" alt="Note Icon" className="w-[86px] h-[86px]" />
        <div className="text-5xl font-bold">Note App</div>
     
    </header>
  );
};

export default AppHeader;
