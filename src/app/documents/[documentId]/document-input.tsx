// import { BsCloudCheck } from "react-icons/bs";

// export const DocumentInput = () => {
//   return (
//     <div className="flex items-center gap-2">
//       <span className="text-lg px-1.5 cursor-pointer truncate">
//         Untitled Document
//       </span>
//       <BsCloudCheck />
//     </div>
//   );
// };

// Room20241216_01================================================
// Document Title change touba yadre

import { BsCloudCheck } from "react-icons/bs";
import { useState } from "react";

export const DocumentInput = ({ initialTitle = "Untitled Document" }) => {
  const [title, setTitle] = useState(initialTitle);
  const [isSaved, setIsSaved] = useState(true); // Initially saved

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    setIsSaved(false); // Mark as unsaved
  };

  return (
    <div className="flex items-center gap-2">
      <input
        type="text"
        value={title}
        onChange={handleTitleChange}
        className="text-lg px-0.1 cursor-pointer truncate bg-transparent border-none outline-none"
        title="Document title"
        aria-label="Document title"
      />
      {isSaved ? (
        <BsCloudCheck className="text-green-500" title="Saved" />
      ) : (
        <BsCloudCheck className="text-gray-500" title="Unsaved" />
      )}
    </div>
  );
};
