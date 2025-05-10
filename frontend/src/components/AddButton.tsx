import React from "react";

interface AddButtonProps {
  onClick: () => void;
}

const AddButton: React.FC<AddButtonProps> = ({ onClick }) => {
  return (
    
    <button
      className="bg-[#92400E] text-white px-4 py-1 rounded text-base flex items-center gap-2 "
      onClick={onClick}
      aria-label="Add new note"
    >
        <div className="bg-white text-orange-600 rounded-full w-4 h-4 flex items-center justify-center">
       <svg className="w-3 h-3" fill="none" stroke="currentColor" stroke-width="4" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
                </svg>
                </div>
      <span className="font-bold text-lg">Add</span>
    </button>
    
  );
};

export default AddButton;
