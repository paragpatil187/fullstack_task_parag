import React from "react";

interface AddButtonProps {
  onClick: () => void;
}

const AddButton: React.FC<AddButtonProps> = ({ onClick }) => {
  return (
    
    <button
      className="bg-orange-600 text-white px-3 py-1 rounded text-sm flex items-center gap-2"
      onClick={onClick}
      aria-label="Add new note"
    >
        <div className="bg-white text-orange-600 rounded-full w-3 h-3 flex items-center justify-center">
       <svg className="w-2 h-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
                </svg>
                </div>
      <span className="w-12">Add</span>
    </button>
    
  );
};

export default AddButton;
