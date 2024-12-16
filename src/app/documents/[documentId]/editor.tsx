// "use client";

// import { useEffect, useState } from "react";
// import { useEditor, EditorContent } from "@tiptap/react";
// import StarterKit from "@tiptap/starter-kit";
// import TaskItem from "@tiptap/extension-task-item";
// import TaskList from "@tiptap/extension-task-list";
// import Table from "@tiptap/extension-table";
// import TableCell from "@tiptap/extension-table-cell";
// import TableHeader from "@tiptap/extension-table-header";
// import TableRow from "@tiptap/extension-table-row";
// import Image from "@tiptap/extension-image";
// import TextAlign from "@tiptap/extension-text-align";
// import Link from "@tiptap/extension-link";
// import { Color } from "@tiptap/extension-color";
// import Hightlight from "@tiptap/extension-highlight";
// import FontFamily from "@tiptap/extension-font-family";
// import TextStyle from "@tiptap/extension-text-style";
// import Underline from "@tiptap/extension-underline";
// import ImageResize from "tiptap-extension-resize-image";
// import { useEditorStore } from "@/store/use-editor-store";
// import { Import } from "@tiptap-pro/extension-import";

// import { FontSizeExtension } from "@/extensions/font-size";
// import { LineHeightExtension } from "@/extensions/line-height";
// import { Ruler } from "./ruler";

// export const Editor = () => {
//   const { setEditor } = useEditorStore();
//   const [token, setToken] = useState<string | null>(null);
//   // console.log("jwt : ",process.env.JWT_SECRET);
//   // Fetch token from API
//   useEffect(() => {
//     const fetchToken = async () => {
//       try {
//         const response = await fetch("/api/getConvertToken");
//         if (!response.ok) throw new Error("Failed to fetch token");
//         const { token } = await response.json();
//         console.log(token);
//         setToken(token);
//       } catch (err) {
//         console.error("Error fetching token:", err);
//       }
//     };

//     fetchToken();
//   }, []);

//   const editor = useEditor({
//     immediatelyRender: false,
//     onCreate({ editor }) {
//       setEditor(editor);
//     },
//     onDestroy() {
//       setEditor(null);
//     },
//     onUpdate({ editor }) {
//       setEditor(editor);
//     },
//     onSelectionUpdate({ editor }) {
//       setEditor(editor);
//     },
//     onTransaction({ editor }) {
//       setEditor(editor);
//     },
//     onFocus({ editor }) {
//       setEditor(editor);
//     },
//     onBlur({ editor }) {
//       setEditor(editor);
//     },
//     onContentError({ editor }) {
//       setEditor(editor);
//     },
//     editorProps: {
//       attributes: {
//         style: "padding-left: 56px; padding-right: 56px;",
//         class:
//           "focus:outline-none print:border-0 bg-white border border-[#C7C7C7] flex flex-col min-h-[1054px] w-[816px] pt-10 pr-10 cursor-text",
//       },
//     },
//     extensions: [
//       StarterKit,
//       LineHeightExtension,
//       FontSizeExtension, // Add your custom extensions here...
//       TextAlign.configure({
//         types: ["heasding", "paragraph"],
//       }),
//       Link.configure({
//         openOnClick: false,
//         autolink: true,
//         defaultProtocol: "https",
//       }),
//       Color,
//       Hightlight.configure({
//         multicolor: true,
//       }),
//       FontFamily,
//       TextStyle,
//       Underline,
//       Image,
//       ImageResize,
//       Table,
//       TableCell,
//       TableHeader,
//       TableRow,
//       TaskItem.configure({
//         nested: true,
//       }),
//       Import.configure({
//         // The Convert App-ID from the Convert settings page: https://cloud.tiptap.dev/convert-settings
//         appId: token?.toString(),

//         // The JWT token you generated in the previous step
//         token: "8mz4xr3",
//       }),
//       TaskList,
//     ],
//   });

//   return (
//     <div className="size-full overflow-x-auto bg-[#F9FBFD] px-4 print:p-0 print:bg-white print:overflow-visible">
//       <Ruler />
//       <div className="min-w-max flex justify-center w-[816px] py-4 print:py-0 mx-auto print:w-full print:min-w-0">
//         <EditorContent editor={editor} />
//       </div>
//     </div>
//   );
// };

// 2nd ============================================
// "use client";

// import { useEffect, useState } from "react";
// import { useEditor, EditorContent } from "@tiptap/react";
// import StarterKit from "@tiptap/starter-kit";
// import TaskItem from "@tiptap/extension-task-item";
// import TaskList from "@tiptap/extension-task-list";
// import Table from "@tiptap/extension-table";
// import TableCell from "@tiptap/extension-table-cell";
// import TableHeader from "@tiptap/extension-table-header";
// import TableRow from "@tiptap/extension-table-row";
// import Image from "@tiptap/extension-image";
// import TextAlign from "@tiptap/extension-text-align";
// import Link from "@tiptap/extension-link";
// import { Color } from "@tiptap/extension-color";
// import Hightlight from "@tiptap/extension-highlight";
// import FontFamily from "@tiptap/extension-font-family";
// import TextStyle from "@tiptap/extension-text-style";
// import Underline from "@tiptap/extension-underline";
// import ImageResize from "tiptap-extension-resize-image";
// import { useEditorStore } from "@/store/use-editor-store";
// import { Import } from "@tiptap-pro/extension-import";

// import { FontSizeExtension } from "@/extensions/font-size";
// import { LineHeightExtension } from "@/extensions/line-height";
// import { Ruler } from "./ruler";

// // Define the type for the Editor props
// interface EditorProps {
//   filesContent: {
//     filename: string;
//     content: string;
//     type: "html" | "image"; // Type could be either 'html' or 'image'
//     base64Content?: string; // For image content in base64 format
//   }[];
// }

// export const Editor = ({ filesContent }: EditorProps) => {
//   const { setEditor } = useEditorStore();
//   const [token, setToken] = useState<string | null>(null);

//   // Fetch token from API
//   useEffect(() => {
//     const fetchToken = async () => {
//       try {
//         const response = await fetch("/api/getConvertToken");
//         if (!response.ok) throw new Error("Failed to fetch token");
//         const { token } = await response.json();
//         console.log(token);
//         setToken(token);
//       } catch (err) {
//         console.error("Error fetching token:", err);
//       }
//     };

//     fetchToken();
//   }, []);

//   const editor = useEditor({
//     immediatelyRender: false,
//     onCreate({ editor }) {
//       setEditor(editor);
//     },
//     onDestroy() {
//       setEditor(null);
//     },
//     onUpdate({ editor }) {
//       setEditor(editor);
//     },
//     onSelectionUpdate({ editor }) {
//       setEditor(editor);
//     },
//     onTransaction({ editor }) {
//       setEditor(editor);
//     },
//     onFocus({ editor }) {
//       setEditor(editor);
//     },
//     onBlur({ editor }) {
//       setEditor(editor);
//     },
//     onContentError({ editor }) {
//       setEditor(editor);
//     },
//     editorProps: {
//       attributes: {
//         style: "padding-left: 56px; padding-right: 56px;",
//         class:
//           "focus:outline-none print:border-0 bg-white border border-[#C7C7C7] flex flex-col min-h-[1054px] w-[816px] pt-10 pr-10 cursor-text",
//       },
//     },
//     extensions: [
//       StarterKit,
//       LineHeightExtension,
//       FontSizeExtension,
//       TextAlign.configure({
//         types: ["heading", "paragraph"],
//       }),
//       Link.configure({
//         openOnClick: false,
//         autolink: true,
//         defaultProtocol: "https",
//       }),
//       Color,
//       Hightlight.configure({
//         multicolor: true,
//       }),
//       FontFamily,
//       TextStyle,
//       Underline,
//       Image,
//       ImageResize,
//       Table,
//       TableCell,
//       TableHeader,
//       TableRow,
//       TaskItem.configure({
//         nested: true,
//       }),
//       Import.configure({
//         appId: token?.toString(),
//         token: "8mz4xr3",
//       }),
//       TaskList,
//     ],
//   });

//   // Handle filesContent update when the component mounts
//   useEffect(() => {
//     if (editor && filesContent.length > 0) {
//       filesContent.forEach((file) => {
//         if (file.type === "html") {
//           // Insert HTML content
//           editor.commands.insertContent(file.content);
//         } else if (file.type === "image" && file.base64Content) {
//           // Insert image (if base64Content is provided)
//           editor.commands.insertContent(
//             `<img src="${file.base64Content}" alt="${file.filename}" />`
//           );
//         }
//       });
//     }
//   }, [editor, filesContent]);

//   return (
//     <div className="size-full overflow-x-auto bg-[#F9FBFD] px-4 print:p-0 print:bg-white print:overflow-visible">
//       <Ruler />
//       <div className="min-w-max flex justify-center w-[816px] py-4 print:py-0 mx-auto print:w-full print:min-w-0">
//         <EditorContent editor={editor} />
//       </div>
//     </div>
//   );
// };

// ============================================================
// "use client";

// import { useEffect, useState } from "react";
// import { useEditor, EditorContent } from "@tiptap/react";
// import StarterKit from "@tiptap/starter-kit";
// import TaskItem from "@tiptap/extension-task-item";
// import TaskList from "@tiptap/extension-task-list";
// import Table from "@tiptap/extension-table";
// import TableCell from "@tiptap/extension-table-cell";
// import TableHeader from "@tiptap/extension-table-header";
// import TableRow from "@tiptap/extension-table-row";
// import Image from "@tiptap/extension-image";
// import TextAlign from "@tiptap/extension-text-align";
// import Link from "@tiptap/extension-link";
// import { Color } from "@tiptap/extension-color";
// import Highlight from "@tiptap/extension-highlight";
// import FontFamily from "@tiptap/extension-font-family";
// import TextStyle from "@tiptap/extension-text-style";
// import Underline from "@tiptap/extension-underline";
// import ImageResize from "tiptap-extension-resize-image";
// import { useEditorStore } from "@/store/use-editor-store";
// import { Import } from "@tiptap-pro/extension-import";

// import { FontSizeExtension } from "@/extensions/font-size";
// import { LineHeightExtension } from "@/extensions/line-height";
// import { Ruler } from "./ruler";

// // Define the type for the Editor props
// interface EditorProps {
//   htmlContent: string | null; // Accept htmlContent as a string or null
// }

// export const Editor = ({ htmlContent }: EditorProps) => {
//   const { setEditor } = useEditorStore();
//   const [content, setContent] = useState<string | null>(null);

//   // Set content from the prop (htmlContent) when it changes
//   useEffect(() => {
//     if (htmlContent) {
//       setContent(htmlContent); // Update state when new content is passed
//     }
//   }, [htmlContent]);

//   const editor = useEditor({
//     immediatelyRender: false,
//     onCreate({ editor }) {
//       setEditor(editor);
//     },
//     onDestroy() {
//       setEditor(null);
//     },
//     onUpdate({ editor }) {
//       setEditor(editor);
//     },
//     onSelectionUpdate({ editor }) {
//       setEditor(editor);
//     },
//     onTransaction({ editor }) {
//       setEditor(editor);
//     },
//     onFocus({ editor }) {
//       setEditor(editor);
//     },
//     onBlur({ editor }) {
//       setEditor(editor);
//     },
//     onContentError({ editor }) {
//       setEditor(editor);
//     },
//     editorProps: {
//       attributes: {
//         style: "padding-left: 56px; padding-right: 56px;",
//         class:
//           "focus:outline-none print:border-0 bg-white border border-[#C7C7C7] flex flex-col min-h-[1054px] w-[816px] pt-10 pr-10 cursor-text",
//       },
//     },
//     extensions: [
//       StarterKit,
//       LineHeightExtension,
//       FontSizeExtension,
//       TextAlign.configure({
//         types: ["heading", "paragraph"],
//       }),
//       Link.configure({
//         openOnClick: false,
//         autolink: true,
//         defaultProtocol: "https",
//       }),
//       Color,
//       Highlight.configure({
//         multicolor: true,
//       }),
//       FontFamily,
//       TextStyle,
//       Underline,
//       Image,
//       ImageResize,
//       Table,
//       TableCell,
//       TableHeader,
//       TableRow,
//       TaskItem.configure({
//         nested: true,
//       }),
//       Import.configure({
//         appId: "your-app-id",
//         token: "your-token",
//       }),
//       TaskList,
//     ],
//   });

//   // Handle inserting the HTML content if available
//   useEffect(() => {
//     if (editor && content) {
//       editor.commands.setContent(content); // Insert the HTML content into the editor
//     }
//   }, [editor, content]);

//   return (
//     <div className="size-full overflow-x-auto bg-[#F9FBFD] px-4 print:p-0 print:bg-white print:overflow-visible">
//       <Ruler />
//       <div className="min-w-max flex justify-center w-[816px] py-4 print:py-0 mx-auto print:w-full print:min-w-0">
//         <EditorContent editor={editor} />
//       </div>
//     </div>
//   );
// };

// ================================local storage=========================================

// "use client";

// import { useEffect, useState } from "react";
// import { useEditor, EditorContent } from "@tiptap/react";
// import StarterKit from "@tiptap/starter-kit";
// import TaskItem from "@tiptap/extension-task-item";
// import TaskList from "@tiptap/extension-task-list";
// import Table from "@tiptap/extension-table";
// import TableCell from "@tiptap/extension-table-cell";
// import TableHeader from "@tiptap/extension-table-header";
// import TableRow from "@tiptap/extension-table-row";
// import Image from "@tiptap/extension-image";
// import TextAlign from "@tiptap/extension-text-align";
// import Link from "@tiptap/extension-link";
// import { Color } from "@tiptap/extension-color";
// import Highlight from "@tiptap/extension-highlight";
// import FontFamily from "@tiptap/extension-font-family";
// import TextStyle from "@tiptap/extension-text-style";
// import Underline from "@tiptap/extension-underline";
// import ImageResize from "tiptap-extension-resize-image";
// import { useEditorStore } from "@/store/use-editor-store";
// import { Import } from "@tiptap-pro/extension-import";

// import { FontSizeExtension } from "@/extensions/font-size";
// import { LineHeightExtension } from "@/extensions/line-height";
// import { Ruler } from "./ruler";

// // Define the type for the Editor props
// interface EditorProps {
//   htmlContent: string | null; // Accept htmlContent as a string or null
// }

// export const Editor = () => {
//   const { setEditor } = useEditorStore();
//   const [content, setContent] = useState<string | null>(null);

//   // Fetch the content from localStorage
//   useEffect(() => {
//     const storedHtmlContent = localStorage.getItem("htmlContent");
//     if (storedHtmlContent) {
//       setContent(storedHtmlContent);
//     }
//   }, []);

//   const editor = useEditor({
//     immediatelyRender: false,
//     onCreate({ editor }) {
//       setEditor(editor);
//     },
//     onDestroy() {
//       setEditor(null);
//     },
//     onUpdate({ editor }) {
//       setEditor(editor);
//     },
//     onSelectionUpdate({ editor }) {
//       setEditor(editor);
//     },
//     onTransaction({ editor }) {
//       setEditor(editor);
//     },
//     onFocus({ editor }) {
//       setEditor(editor);
//     },
//     onBlur({ editor }) {
//       setEditor(editor);
//     },
//     onContentError({ editor }) {
//       setEditor(editor);
//     },
//     editorProps: {
//       attributes: {
//         style: "padding-left: 56px; padding-right: 56px;",
//         class:
//           "focus:outline-none print:border-0 bg-white border border-[#C7C7C7] flex flex-col min-h-[1054px] w-[816px] pt-10 pr-10 cursor-text",
//       },
//     },
//     extensions: [
//       StarterKit,
//       LineHeightExtension,
//       FontSizeExtension,
//       TextAlign.configure({
//         types: ["heading", "paragraph"],
//       }),
//       Link.configure({
//         openOnClick: false,
//         autolink: true,
//         defaultProtocol: "https",
//       }),
//       Color,
//       Highlight.configure({
//         multicolor: true,
//       }),
//       FontFamily,
//       TextStyle,
//       Underline,
//       Image,
//       ImageResize,
//       Table,
//       TableCell,
//       TableHeader,
//       TableRow,
//       TaskItem.configure({
//         nested: true,
//       }),
//       Import.configure({
//         appId: "your-app-id",
//         token: "your-token",
//       }),
//       TaskList,
//     ],
//   });

//   // Handle inserting the HTML content into the editor once it's available
//   useEffect(() => {
//     if (editor && content) {
//       editor.commands.setContent(content); // Insert the HTML content into the editor
//     }
//   }, [editor, content]);

//   return (
//     <div className="size-full overflow-x-auto bg-[#F9FBFD] px-4 print:p-0 print:bg-white print:overflow-visible">
//       <Ruler />
//       <div className="min-w-max flex justify-center w-[816px] py-4 print:py-0 mx-auto print:w-full print:min-w-0">
//         <EditorContent editor={editor} />
//       </div>
//     </div>
//   );
// };

// Lab 20241216_02======================================================================

"use client";

import { useEffect, useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TaskItem from "@tiptap/extension-task-item";
import TaskList from "@tiptap/extension-task-list";
import Table from "@tiptap/extension-table";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TableRow from "@tiptap/extension-table-row";
import Image from "@tiptap/extension-image";
import TextAlign from "@tiptap/extension-text-align";
import Link from "@tiptap/extension-link";
import { Color } from "@tiptap/extension-color";
import Highlight from "@tiptap/extension-highlight";
import FontFamily from "@tiptap/extension-font-family";
import TextStyle from "@tiptap/extension-text-style";
import Underline from "@tiptap/extension-underline";
import ImageResize from "tiptap-extension-resize-image";
import { useEditorStore } from "@/store/use-editor-store";
import { Import } from "@tiptap-pro/extension-import";

import { FontSizeExtension } from "@/extensions/font-size";
import { LineHeightExtension } from "@/extensions/line-height";
import { Ruler } from "./ruler";

// Define the type for the Editor props
interface EditorProps {
  htmlContent: string | null; // Accept htmlContent as a string or null
}

export const Editor = () => {
  const { setEditor } = useEditorStore();
  const [content, setContent] = useState<string | null>(null);

  // Load the content from localStorage or set an empty document if nothing is in localStorage
  useEffect(() => {
    const storedHtmlContent = localStorage.getItem("htmlContent");

    if (storedHtmlContent) {
      setContent(storedHtmlContent); // Use stored content if available
    } else {
      // Start with an empty document if no content is stored
      setContent("");
    }
  }, []);

  const editor = useEditor({
    immediatelyRender: false,
    onCreate({ editor }) {
      setEditor(editor);
    },
    onDestroy() {
      setEditor(null);
    },
    onUpdate({ editor }) {
      setEditor(editor);
    },
    onSelectionUpdate({ editor }) {
      setEditor(editor);
    },
    onTransaction({ editor }) {
      setEditor(editor);
    },
    onFocus({ editor }) {
      setEditor(editor);
    },
    onBlur({ editor }) {
      setEditor(editor);
    },
    onContentError({ editor }) {
      setEditor(editor);
    },
    editorProps: {
      attributes: {
        style: "padding-left: 56px; padding-right: 56px;",
        class:
          "focus:outline-none print:border-0 bg-white border border-[#C7C7C7] flex flex-col min-h-[1054px] w-[816px] pt-10 pr-10 cursor-text",
      },
    },
    extensions: [
      StarterKit,
      LineHeightExtension,
      FontSizeExtension,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Link.configure({
        openOnClick: false,
        autolink: true,
        defaultProtocol: "https",
      }),
      Color,
      Highlight.configure({
        multicolor: true,
      }),
      FontFamily,
      TextStyle,
      Underline,
      Image,
      ImageResize,
      Table,
      TableCell,
      TableHeader,
      TableRow,
      TaskItem.configure({
        nested: true,
      }),
      Import.configure({
        appId: "your-app-id",
        token: "your-token",
      }),
      TaskList,
    ],
  });

  // Handle inserting the HTML content into the editor once it's available
  useEffect(() => {
    if (editor && content) {
      editor.commands.setContent(content); // Insert the HTML content into the editor
    }
  }, [editor, content]);

  return (
    <div className="size-full overflow-x-auto bg-[#F9FBFD] px-4 print:p-0 print:bg-white print:overflow-visible">
      <Ruler />
      <div className="min-w-max flex justify-center w-[816px] py-4 print:py-0 mx-auto print:w-full print:min-w-0">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};
