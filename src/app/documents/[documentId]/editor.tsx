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

//   // Load the content from localStorage or set an empty document if nothing is in localStorage
//   useEffect(() => {
//     const storedHtmlContent = localStorage.getItem("htmlContent");

//     if (storedHtmlContent) {
//       setContent(storedHtmlContent); // Use stored content if available
//     } else {
//       // Start with an empty document if no content is stored
//       setContent("");
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



// ====================combine dangerouslysetinnerhtml========================

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
        <div style={{ position: 'relative', width: '100%' }}>
          {/* DOCX Content Rendered for Visual Accuracy */}
          <div
            dangerouslySetInnerHTML={{ __html: content || '' }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 1,
              pointerEvents: 'none', // Disable interaction on the underlying HTML
            }}
          />
          
          {/* Tiptap Editor for Editing */}
          <div style={{ position: 'relative', zIndex: 2 }}>
            <EditorContent editor={editor} />
          </div>
        </div>
      </div>
    </div>
  );
};


// =========================== v0.1 ============================


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

// // Define a custom mark for inline styles (font-size, font-family, color)
// import { Mark } from '@tiptap/core';

// const CustomTextMark = Mark.create({
//   name: 'customText',
//   parseHTML() {
//     return [
//       {
//         tag: 'span',
//         getAttrs: (node) => {
//           const style = node.getAttribute('style');
//           let attrs = {};
//           if (style) {
//             const styles = style.split(';').map(s => s.trim());
//             styles.forEach((s) => {
//               if (s.startsWith('font-family')) attrs['font-family'] = s.split(':')[1].trim();
//               if (s.startsWith('font-size')) attrs['font-size'] = s.split(':')[1].trim();
//               if (s.startsWith('color')) attrs['color'] = s.split(':')[1].trim();
//             });
//           }
//           return attrs;
//         },
//       },
//     ];
//   },
//   renderHTML({ node }) {
//     const { 'font-family': fontFamily, 'font-size': fontSize, color } = node.attrs;
//     let style = '';
//     if (fontFamily) style += `font-family: ${fontFamily};`;
//     if (fontSize) style += `font-size: ${fontSize};`;
//     if (color) style += `color: ${color};`;

//     return ['span', { style }, 0];
//   },
// });

// export const Editor = () => {
//   const { setEditor } = useEditorStore();
//   const [content, setContent] = useState<string | null>(null);

//   // Load stored DOCX content
//   useEffect(() => {
//     const storedHtmlContent = localStorage.getItem("htmlContent");
//     if (storedHtmlContent) {
//       setContent(storedHtmlContent); // Use stored content if available
//     } else {
//       setContent(""); // Start with an empty document if no content is stored
//     }
//   }, []);

//   const editor = useEditor({
//     extensions: [
//       StarterKit,
//       CustomTextMark,  // Add the custom text mark extension here
//       FontSizeExtension,
//       LineHeightExtension,
//       TextAlign.configure({ types: ["heading", "paragraph"] }),
//       Color,
//       Highlight.configure({ multicolor: true }),
//       FontFamily,
//       TextStyle,
//       Underline,
//       Image,
//       ImageResize,
//       Table,
//       TableCell,
//       TableHeader,
//       TableRow,
//       TaskItem.configure({ nested: true }),
//       Import.configure({ appId: "your-app-id", token: "your-token" }),
//       TaskList,
//     ],
//     onCreate({ editor }) {
//       setEditor(editor); // Set editor when created
//     },
//     onDestroy() {
//       setEditor(null); // Clean up when editor is destroyed
//     },
//   });

//   // Handle content loading into the editor
//   useEffect(() => {
//     if (editor && content) {
//       editor.commands.setContent(content); // Set the DOCX content
//     }
//   }, [editor, content]);

//   return (
//     <div className="size-full overflow-x-auto bg-[#F9FBFD] px-4 print:p-0 print:bg-white print:overflow-visible">
//       <Ruler />
//       <div className="min-w-max flex justify-center py-4 print:py-0 mx-auto print:w-full print:min-w-0">
//         {/* Editor container with A4 size (794px by 1123px) */}
//         <div
//           style={{
//             position: 'relative',
//             width: '794px',  // A4 width in pixels (for 96 DPI)
//             height: '1123px', // A4 height in pixels (for 96 DPI)
//             backgroundColor: 'white',  // White background for A4 look
//             border: '1px solid #ccc',  // Optional border for visualization
//             padding: '20px', // Optional padding to give content space
//           }}
//         >
//           {/* Display DOCX content with dangerouslySetInnerHTML */}
//           <div
//             dangerouslySetInnerHTML={{ __html: content || '' }}
//             style={{
//               position: 'absolute',
//               top: 0,
//               left: 0,
//               right: 0,
//               bottom: 0,
//               zIndex: 1,
//               pointerEvents: 'none', // Prevent interaction with DOCX content
//             }}
//           />
//           {/* Render Tiptap Editor */}
//           <div style={{ position: 'relative', zIndex: 2 }}>
//             <EditorContent editor={editor} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };


// ========================= v0.2 ==========================

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

// // Define a custom mark for inline styles (font-size, font-family, color)
// import { Mark } from '@tiptap/core';

// const CustomTextMark = Mark.create({
//   name: 'customText',
//   parseHTML() {
//     return [
//       {
//         tag: 'span',
//         getAttrs: (node) => {
//           const style = node.getAttribute('style');
//           let attrs = {};
//           if (style) {
//             const styles = style.split(';').map(s => s.trim());
//             styles.forEach((s) => {
//               if (s.startsWith('font-family')) attrs['font-family'] = s.split(':')[1].trim();
//               if (s.startsWith('font-size')) attrs['font-size'] = s.split(':')[1].trim();
//               if (s.startsWith('color')) attrs['color'] = s.split(':')[1].trim();
//             });
//           }
//           return attrs;
//         },
//       },
//     ];
//   },
//   renderHTML({ node }) {
//     const { 'font-family': fontFamily, 'font-size': fontSize, color } = node.attrs;
//     let style = '';
//     if (fontFamily) style += `font-family: ${fontFamily};`;
//     if (fontSize) style += `font-size: ${fontSize};`;
//     if (color) style += `color: ${color};`;

//     return ['span', { style }, 0];
//   },
// });

// export const Editor = () => {
//   const { setEditor } = useEditorStore();
//   const [content, setContent] = useState<string | null>(null);

//   // Load stored DOCX content
//   useEffect(() => {
//     const storedHtmlContent = localStorage.getItem("htmlContent");
//     if (storedHtmlContent) {
//       setContent(storedHtmlContent); // Use stored content if available
//     } else {
//       setContent(""); // Start with an empty document if no content is stored
//     }
//   }, []);

//   const editor = useEditor({
//     extensions: [
//       StarterKit,
//       CustomTextMark,  // Add the custom text mark extension here
//       FontSizeExtension,
//       LineHeightExtension,
//       TextAlign.configure({ types: ["heading", "paragraph"] }),
//       Color,
//       Highlight.configure({ multicolor: true }),
//       FontFamily,
//       TextStyle,
//       Underline,
//       Image,
//       ImageResize,
//       Table,
//       TableCell,
//       TableHeader,
//       TableRow,
//       TaskItem.configure({ nested: true }),
//       Import.configure({ appId: "your-app-id", token: "your-token" }),
//       TaskList,
//     ],
//     onCreate({ editor }) {
//       setEditor(editor); // Set editor when created
//     },
//     onDestroy() {
//       setEditor(null); // Clean up when editor is destroyed
//     },
//   });

//   // Handle content loading into the editor
//   useEffect(() => {
//     if (editor && content) {
//       editor.commands.setContent(content); // Set the DOCX content
//     }
//   }, [editor, content]);

//   return (
//     <div className="size-full overflow-x-auto bg-[#F9FBFD] px-4 print:p-0 print:bg-white print:overflow-visible">
//       <Ruler />
//       <div className="min-w-max flex justify-center py-4 print:py-0 mx-auto print:w-full print:min-w-0">
//         {/* Editor container with fixed A4 size */}
//         <div
//           style={{
//             position: 'relative',
//             width: '794px',  // A4 width in pixels (for 96 DPI)
//             height: '1123px', // A4 height in pixels (for 96 DPI)
//             backgroundColor: 'white',  // White background for A4 look
//             border: '1px solid #ccc',  // Optional border for visualization
//             padding: '20px', // Optional padding to give content space
//             overflow: 'hidden',  // Prevent overflowing content
//             boxSizing: 'border-box', // Ensure padding and borders don't affect size
//           }}
//         >
//           {/* Display DOCX content with dangerouslySetInnerHTML */}
//           <div
//             dangerouslySetInnerHTML={{ __html: content || '' }}
//             style={{
//               position: 'absolute',
//               top: 0,
//               left: 0,
//               right: 0,
//               bottom: 0,
//               zIndex: 1,
//               pointerEvents: 'none', // Prevent interaction with DOCX content
//               overflow: 'auto', // Allow scrolling if content overflows
//             }}
//           />
//           {/* Render Tiptap Editor */}
//           <div
//             style={{
//               position: 'absolute',
//               top: 0,
//               left: 0,
//               right: 0,
//               bottom: 0,
//               zIndex: 2, // Make sure the editor is on top
//               pointerEvents: 'auto', // Enable interaction with the Tiptap editor
//             }}
//           >
//             <EditorContent editor={editor} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
