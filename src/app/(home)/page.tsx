"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import JSZip from "jszip"; // For ZIP file extraction

import { Navbar } from "./navbar";
import { TemplateGallery } from "./templates-gallery";

const HomePage = () => {
  const [uploading, setUploading] = useState(false);
  const [htmlContent, setHtmlContent] = useState<string | null>(null);
  const router = useRouter();

  // Handle template selection
  const onTemplateSelect = (templateId: string) => {
    if (templateId === "upload") {
      handleFileUpload(); // Trigger file upload
    } else if (templateId === "blank") {
      localStorage.removeItem("htmlContent"); // Clear localStorage when creating a new document
      router.push("/documents/new"); // Navigate to create a new document (fresh editor)
    }
  };

  // Handle file upload
  const handleFileUpload = async () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = ".doc,.docx";

    fileInput.onchange = async (event) => {
      const input = event.target as HTMLInputElement; // Assert event.target as HTMLInputElement
      const file = input?.files?.[0]; // Now TypeScript knows 'files' exists

      if (!file) return;
      if (
        ![
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ].includes(file.type)
      ) {
        alert("Please upload a valid .doc or .docx file.");
        return;
      }

      const formData = new FormData();
      formData.append("file", file);

      try {
        setUploading(true);
        const response = await axios.post(
          "http://172.16.117.47:7001/upload-docx/",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
            responseType: "blob", // Server responds with ZIP file
          }
        );

        const zipFile = new Blob([response.data], { type: "application/zip" });
        const zip = await JSZip.loadAsync(zipFile);
        let extractedHtmlContent = null;

        zip.forEach((filename, file) => {
          if (filename.endsWith(".html")) {
            file.async("text").then((content) => {
              extractedHtmlContent = content;
              setHtmlContent(content);
              localStorage.setItem("htmlContent", content); // Store in localStorage
              router.push("/documents/new"); // Redirect to the editor with the loaded content
            });
          }
        });
      } catch (error) {
        console.error("Error uploading file:", error);
        alert("Failed to upload and process the file.");
      } finally {
        setUploading(false);
      }
    };

    fileInput.click(); // Open file dialog
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed top-0 left-0 right-0 z-10 h-16 bg-white p-4">
        <Navbar />
      </div>
      <div className="mt-16">
        <TemplateGallery onTemplateSelect={onTemplateSelect} />
      </div>
      <div className="flex flex-col items-center justify-center mt-10">
        {uploading && (
          <p className="mt-4 text-blue-500">
            Uploading and processing your file...
          </p>
        )}
      </div>
    </div>
  );
};

export default HomePage;

// 20241216_03=========================================================

// "use client";

// import React, { useState } from "react";
// import { useRouter } from "next/navigation";
// import axios from "axios";
// import JSZip from "jszip"; // Import JSZip to handle ZIP file extraction

// import { Navbar } from "./navbar";
// import { TemplateGallery } from "./templates-gallery";

// const HomePage = () => {
//   const [uploading, setUploading] = useState(false);
//   const [htmlContent, setHtmlContent] = useState<string | null>(null); // Store extracted HTML content
//   const router = useRouter();

//   const handleFileUpload = async (
//     event: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     const file = event.target.files?.[0];

//     if (!file) return;
//     if (
//       ![
//         "application/msword",
//         "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
//       ].includes(file.type)
//     ) {
//       alert("Please upload a valid .doc or .docx file.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("file", file);

//     try {
//       setUploading(true);
//       const response = await axios.post(
//         "http://172.16.117.47:7001/upload-docx/",
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//           responseType: "blob", // The server responds with a ZIP file
//         }
//       );

//       // Create a Blob from the response and prepare to unzip it
//       const zipFile = new Blob([response.data], { type: "application/zip" });

//       // Use JSZip to load and extract the ZIP file contents
//       const zip = await JSZip.loadAsync(zipFile);
//       let extractedHtmlContent = null;

//       // Iterate over each file and extract the HTML content
//       zip.forEach((filename, file) => {
//         if (filename.endsWith(".html")) {
//           // If it's an HTML file, extract its content as text
//           file.async("text").then((content) => {
//             extractedHtmlContent = content; // Set HTML content to state
//             setHtmlContent(content); // Update state with the extracted HTML content

//             // Store the extracted content in localStorage
//             localStorage.setItem("htmlContent", content);
//           });
//         }
//       });
//     } catch (error) {
//       console.error("Error uploading file:", error);
//       alert("Failed to upload and process the file.");
//     } finally {
//       setUploading(false);
//     }
//   };

//   const handleCreateNewDocument = () => {
//     // Clear the localStorage content to ensure the editor starts with an empty document
//     localStorage.removeItem("htmlContent");
//     // Navigate to the editor page (this should be the route for your editor)
//     router.push("/documents/new");
//   };

//   const handleTemplateSelect = (templateId: string) => {
//     // Handle template selection here
//     console.log(`Selected Template: ${templateId}`);
//     if (templateId === "upload") {
//       // Trigger file upload logic if the user selects "Upload A Document" template
//       document.getElementById("file-upload-input")?.click();
//     } else {
//       // Navigate to the editor for a blank document
//       handleCreateNewDocument();
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col">
//       <div className="fixed top-0 left-0 right-0 z-10 h-16 bg-white p-4">
//         <Navbar />
//       </div>
//       <div className="mt-16">
//         <TemplateGallery onTemplateSelect={handleTemplateSelect} />
//       </div>
//       <div className="flex flex-col items-center justify-center mt-10">
//         <h1 className="text-3xl font-bold mb-6">Welcome to Doc. Editor</h1>
//         <div className="space-y-4">
//           <label className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-md">
//             Upload .doc/.docx File
//             <input
//               type="file"
//               id="file-upload-input"
//               accept=".doc,.docx"
//               className="hidden"
//               onChange={handleFileUpload}
//             />
//           </label>
//           <button
//             className="bg-green-500 text-white px-4 py-2 rounded-md"
//             onClick={handleCreateNewDocument}
//           >
//             Create New Document
//           </button>
//         </div>
//         {uploading && (
//           <p className="mt-4 text-blue-500">
//             Uploading and processing your file...
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default HomePage;
