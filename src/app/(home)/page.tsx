// "use client";

// import React, { useState } from "react";
// import { useRouter } from "next/navigation";
// import axios from "axios";
// import JSZip from "jszip"; // For ZIP file extraction

// import { Navbar } from "./navbar";
// import { TemplateGallery } from "./templates-gallery";

// const HomePage = () => {
//   const [uploading, setUploading] = useState(false);
//   const [htmlContent, setHtmlContent] = useState<string | null>(null);
//   const router = useRouter();

//   // Handle template selection
//   const onTemplateSelect = (templateId: string) => {
//     if (templateId === "upload") {
//       handleFileUpload(); // Trigger file upload
//     } else if (templateId === "blank") {
//       localStorage.removeItem("htmlContent"); // Clear localStorage when creating a new document
//       router.push("/documents/new"); // Navigate to create a new document (fresh editor)
//     }
//   };

//   // Handle file upload
//   const handleFileUpload = async () => {
//     const fileInput = document.createElement("input");
//     fileInput.type = "file";
//     fileInput.accept = ".doc,.docx";

//     fileInput.onchange = async (event) => {
//       const input = event.target as HTMLInputElement; // Assert event.target as HTMLInputElement
//       const file = input?.files?.[0]; // Now TypeScript knows 'files' exists

//       if (!file) return;
//       if (
//         ![
//           "application/msword",
//           "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
//         ].includes(file.type)
//       ) {
//         alert("Please upload a valid .doc or .docx file.");
//         return;
//       }

//       const formData = new FormData();
//       formData.append("file", file);

//       try {
//         setUploading(true);
//         const response = await axios.post(
//           "http://172.16.117.47:7001/upload-docx/",
//           formData,
//           {
//             headers: {
//               "Content-Type": "multipart/form-data",
//             },
//             responseType: "blob", // Server responds with ZIP file
//           }
//         );

//         const zipFile = new Blob([response.data], { type: "application/zip" });
//         const zip = await JSZip.loadAsync(zipFile);
//         let extractedHtmlContent = null;

//         zip.forEach((filename, file) => {
//           if (filename.endsWith(".html")) {
//             file.async("text").then((content) => {
//               extractedHtmlContent = content;
//               setHtmlContent(content);
//               localStorage.setItem("htmlContent", content); // Store in localStorage
//               router.push("/documents/new"); // Redirect to the editor with the loaded content
//             });
//           }
//         });
//       } catch (error) {
//         console.error("Error uploading file:", error);
//         alert("Failed to upload and process the file.");
//       } finally {
//         setUploading(false);
//       }
//     };

//     fileInput.click(); // Open file dialog
//   };

//   return (
//     <div className="min-h-screen flex flex-col">
//       <div className="fixed top-0 left-0 right-0 z-10 h-16 bg-white p-4">
//         <Navbar />
//       </div>
//       <div className="mt-16">
//         <TemplateGallery onTemplateSelect={onTemplateSelect} />
//       </div>
//       <div className="flex flex-col items-center justify-center mt-10">
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


// ===================================================================================
// ROOM20241220_Backendda v1 nd v2 happa

"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

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
          "http://172.16.117.201:7002/api/v2/convert/upload-docx/",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
            responseType: "text", // Server now responds with HTML content directly
          }
        );

        const extractedHtmlContent = response.data;

        setHtmlContent(extractedHtmlContent);
        localStorage.setItem("htmlContent", extractedHtmlContent); // Store in localStorage
        router.push("/documents/new"); // Redirect to the editor with the loaded content

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
