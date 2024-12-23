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

// ====================combine dangerouslysetinnerhtml imagesu laka========================

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
//         <div style={{ position: "relative", width: "100%" }}
//         className="focus:outline-none print:border-0 bg-white border border-[#C7C7C7] flex flex-col min-h-[1054px] w-[816px] pt-10 pr-10 cursor-text">
//           {/* DOCX Content Rendered for Visual Accuracy */}
//           <div
//             dangerouslySetInnerHTML={{ __html: content || "" }}
//             style={{
//               position: "absolute",
//               top: 100,
//               left: 15,
//               right: 0,
//               paddingLeft: 65,
//               paddingRight:65,
//               bottom: 0,
//               zIndex: 6,
//             }}
//           />

//           {/* Tiptap Editor for Editing */}
//           <div style={{ position: "relative", zIndex: -1 }}>
//             <EditorContent editor={editor} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// ROOM20241220_01=========================== v0.1 ============================
// Image load toubadi yaba adubu edit touba yadaba

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

//   // Insert the content into the editor once it's available
//   useEffect(() => {
//     if (editor && content) {
//       editor.commands.setContent(content); // Insert the HTML content into the editor
//     }
//   }, [editor, content]);

//   return (
//     <div className="size-full overflow-x-auto bg-[#F9FBFD] px-4 print:p-0 print:bg-white print:overflow-visible">
//       <Ruler />
//       <div className="min-w-max flex justify-center w-[816px] py-4 print:py-0 mx-auto print:w-full print:min-w-0">
//         <div style={{ position: "relative", width: "95%" }}
//           className="focus:outline-none print:border-0 bg-white border border-[#C7C7C7] flex flex-col min-h-[1054px] w-[816px] pt-10 pr-10 cursor-text">
          
//           {/* Render HTML content first for visual accuracy */}
//           <div
//             dangerouslySetInnerHTML={{ __html: content || "" }}
//             style={{
//               position: "absolute",
//               top: 100,
//               left: 15,
//               right: 0,
//               paddingLeft: 65,
//               paddingRight: 65,
//               bottom: 0,
//               zIndex: 0,
//             }}
//           />

//           {/* Tiptap Editor for Editing */}
//           <div style={{ position: "relative", zIndex: -1 }}>
//             <EditorContent editor={editor} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// Room_20241223_01=========================================================================================
// backend V2 impaliment touba

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


