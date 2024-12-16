// import Link from "next/link";

// import { Navbar } from "./navbar";
// import { TemplateGallery } from "./templates-gallery";
// const Home = () => {
//   return (
//     <div className="min-h-screen flex flex-col">
//       <div className="fixed top-0 left-0 right-0 z-10 h-16 bg-white p-4">
//         <Navbar />
//       </div>
//       <div className="mt-16">
//         <TemplateGallery />
//       </div>
//     </div>
//   );
// };

// export default Home;

// 1st===============================================

// "use client"; // Add this directive at the top

// import React, { useState } from "react";
// import { useRouter } from "next/navigation"; // Use the App Router navigation API
// import axios from "axios";
// import Link from "next/link";

// import { Navbar } from "./navbar";
// import { TemplateGallery } from "./templates-gallery";

// const HomePage = () => {
//   const [uploading, setUploading] = useState(false);
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
//           responseType: "blob",
//         }
//       );

//       // Assuming the backend response is a ZIP file.
//       const zipFile = new Blob([response.data], { type: "application/zip" });

//       // Prepare URL for the editor page to handle zip extraction.
//       const fileURL = URL.createObjectURL(zipFile);
//       router.push(`/documents/editor?zipUrl=${encodeURIComponent(fileURL)}`);
//     } catch (error) {
//       console.error("Error uploading file:", error);
//       alert("Failed to upload and process the file.");
//     } finally {
//       setUploading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col">
//       <div className="fixed top-0 left-0 right-0 z-10 h-16 bg-white p-4">
//         <Navbar />
//       </div>
//       <div className="mt-16">
//         <TemplateGallery />
//       </div>
//       <div className="flex flex-col items-center justify-center mt-10">
//         <h1 className="text-3xl font-bold mb-6">Welcome to Doc. Editor</h1>
//         <div className="space-y-4">
//           <label className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-md">
//             Upload .doc/.docx File
//             <input
//               type="file"
//               accept=".doc,.docx"
//               className="hidden"
//               onChange={handleFileUpload}
//             />
//           </label>
//           <button
//             className="bg-green-500 text-white px-4 py-2 rounded-md"
//             onClick={() => router.push("/documents/new")}
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

// 2nd=======================================================

// "use client"; // Ensures this file is treated as a Client Component.

// import React, { useState } from "react";
// import { useRouter } from "next/navigation"; // Updated to App Router navigation API
// import axios from "axios";
// import Link from "next/link";

// import { Navbar } from "./navbar";
// import { TemplateGallery } from "./templates-gallery";

// const HomePage = () => {
//   const [uploading, setUploading] = useState(false);
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
//           responseType: "blob",
//         }
//       );

//       const zipFile = new Blob([response.data], { type: "application/zip" });
//       const fileURL = URL.createObjectURL(zipFile);
//       console.log("fileURL: " + fileURL);
//       router.push(`/documents/editor?zipUrl=${encodeURIComponent(fileURL)}`);
//     } catch (error) {
//       console.error("Error uploading file:", error);
//       alert("Failed to upload and process the file.");
//     } finally {
//       setUploading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col">
//       <div className="fixed top-0 left-0 right-0 z-10 h-16 bg-white p-4">
//         <Navbar />
//       </div>
//       <div className="mt-16">
//         <TemplateGallery />
//       </div>
//       <div className="flex flex-col items-center justify-center mt-10">
//         <h1 className="text-3xl font-bold mb-6">Welcome to Doc. Editor</h1>
//         <div className="space-y-4">
//           <label className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-md">
//             Upload .doc/.docx File
//             <input
//               type="file"
//               accept=".doc,.docx"
//               className="hidden"
//               onChange={handleFileUpload}
//             />
//           </label>
//           <button
//             className="bg-green-500 text-white px-4 py-2 rounded-md"
//             onClick={() => router.push("/documents/new")}
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

// 3rd+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// "use client"; // Ensures this file is treated as a Client Component.

// import React, { useState } from "react";
// import { useRouter } from "next/navigation"; // Updated to App Router navigation API
// import axios from "axios";
// import JSZip from "jszip"; // Import JSZip to handle ZIP file extraction

// import { Navbar } from "./navbar";
// import { TemplateGallery } from "./templates-gallery";
// import { Editor } from "../documents/[documentId]/editor";

// // HomePage component to upload and extract files
// const HomePage = () => {
//   const [uploading, setUploading] = useState(false);
//   const [filesContent, setFilesContent] = useState<any[]>([]); // Store extracted file content
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
//       const extractedFiles: any[] = [];

//       // Iterate over each file and extract the content
//       zip.forEach((filename, file) => {
//         if (filename.endsWith(".html")) {
//           // If it's an HTML file, extract its content as text
//           file.async("text").then((content) => {
//             extractedFiles.push({ filename, content, type: "html" });
//           });
//         } else if (filename.endsWith(".png") || filename.endsWith(".gif")) {
//           // For images, create base64 data URL
//           file.async("base64").then((content) => {
//             extractedFiles.push({ filename, content, type: "image" });
//           });
//         }
//       });

//       // Set the extracted files content to state after all files are processed
//       setFilesContent(extractedFiles);
//     } catch (error) {
//       console.error("Error uploading file:", error);
//       alert("Failed to upload and process the file.");
//     } finally {
//       setUploading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col">
//       <div className="fixed top-0 left-0 right-0 z-10 h-16 bg-white p-4">
//         <Navbar />
//       </div>
//       <div className="mt-16">
//         <TemplateGallery />
//       </div>
//       <div className="flex flex-col items-center justify-center mt-10">
//         <h1 className="text-3xl font-bold mb-6">Welcome to Doc. Editor</h1>
//         <div className="space-y-4">
//           <label className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-md">
//             Upload .doc/.docx File
//             <input
//               type="file"
//               accept=".doc,.docx"
//               className="hidden"
//               onChange={handleFileUpload}
//             />
//           </label>
//           <button
//             className="bg-green-500 text-white px-4 py-2 rounded-md"
//             onClick={() => router.push("/documents/new")}
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

//       {/* Pass filesContent to the editor */}
//       {filesContent.length > 0 && <Editor filesContent={filesContent} />}
//     </div>
//   );
// };

// export default HomePage;

// ===================================no image

// In the HomePage.tsx file
// "use client";

// import React, { useState } from "react";
// import { useRouter } from "next/navigation";
// import axios from "axios";
// import JSZip from "jszip"; // Import JSZip to handle ZIP file extraction

// import { Navbar } from "./navbar";
// import { TemplateGallery } from "./templates-gallery";
// import { Editor } from "../documents/[documentId]/editor"; // Assuming this is where Editor is located

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

//   return (
//     <div className="min-h-screen flex flex-col">
//       <div className="fixed top-0 left-0 right-0 z-10 h-16 bg-white p-4">
//         <Navbar />
//       </div>
//       <div className="mt-16">
//         <TemplateGallery />
//       </div>
//       <div className="flex flex-col items-center justify-center mt-10">
//         <h1 className="text-3xl font-bold mb-6">Welcome to Doc. Editor</h1>
//         <div className="space-y-4">
//           <label className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-md">
//             Upload .doc/.docx File
//             <input
//               type="file"
//               accept=".doc,.docx"
//               className="hidden"
//               onChange={handleFileUpload}
//             />
//           </label>
//           <button
//             className="bg-green-500 text-white px-4 py-2 rounded-md"
//             onClick={() => router.push("/documents/new")}
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

//       {/* Pass extracted HTML content to the editor */}
//       {htmlContent && <Editor htmlContent={htmlContent} />}
//     </div>
//   );
// };

// export default HomePage;

// ===========================================

// In the HomePage.tsx file
// "use client";

// import React, { useState } from "react";
// import { useRouter } from "next/navigation";
// import axios from "axios";
// import JSZip from "jszip"; // Import JSZip to handle ZIP file extraction

// import { Navbar } from "./navbar";
// import { TemplateGallery } from "./templates-gallery";
// import { Editor } from "../documents/[documentId]/editor"; // Assuming this is where Editor is located

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

//   return (
//     <div className="min-h-screen flex flex-col">
//       <div className="fixed top-0 left-0 right-0 z-10 h-16 bg-white p-4">
//         <Navbar />
//       </div>
//       <div className="mt-16">
//         <TemplateGallery />
//       </div>
//       <div className="flex flex-col items-center justify-center mt-10">
//         <h1 className="text-3xl font-bold mb-6">Welcome to Doc. Editor</h1>
//         <div className="space-y-4">
//           <label className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-md">
//             Upload .doc/.docx File
//             <input
//               type="file"
//               accept=".doc,.docx"
//               className="hidden"
//               onChange={handleFileUpload}
//             />
//           </label>
//           <button
//             className="bg-green-500 text-white px-4 py-2 rounded-md"
//             onClick={() => router.push("/documents/new")}
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

//       {/* Pass extracted HTML content to the editor */}
//       {htmlContent && <Editor htmlContent={htmlContent} />}
//     </div>
//   );
// };

// export default HomePage;

// local storage

// ======================================================================
// Roomda touba upload amadi new document button yaoba code. khradi yare

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

//   return (
//     <div className="min-h-screen flex flex-col">
//       <div className="fixed top-0 left-0 right-0 z-10 h-16 bg-white p-4">
//         <Navbar />
//       </div>
//       <div className="mt-16">
//         <TemplateGallery />
//       </div>
//       <div className="flex flex-col items-center justify-center mt-10">
//         <h1 className="text-3xl font-bold mb-6">Welcome to Doc. Editor</h1>
//         <div className="space-y-4">
//           <label className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-md">
//             Upload .doc/.docx File
//             <input
//               type="file"
//               accept=".doc,.docx"
//               className="hidden"
//               onChange={handleFileUpload}
//             />
//           </label>
//           <button
//             className="bg-green-500 text-white px-4 py-2 rounded-md"
//             onClick={() => router.push("/documents/new")}
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

//       {/* Pass extracted HTML content to the editor
//       {htmlContent && <Editor htmlContent={htmlContent} />} */}
//     </div>
//   );
// };

// export default HomePage;

// lab20241216_01============================================================
// Template the click touba yare adubu new document click toubada file load toudana leire

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
//       router.push("/documents/new"); // Navigate to create a new document
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
//         <h1 className="text-3xl font-bold mb-6">Welcome to Doc. Editor</h1>
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

// 20241216_02=====================================================
// Upload documentgeedi chumme ado new documentgi yadri

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
