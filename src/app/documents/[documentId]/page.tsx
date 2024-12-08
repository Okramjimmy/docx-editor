import { Editor } from "./editor";
import { ToolBar } from "./toolbar";

interface DocumentIdPageProps {
  params: Promise<{ documentId: string }>;
}

const DocumentIdPage = async ({ params }: DocumentIdPageProps) => {
  const { documentId } = await params;
  return (
    <div className="min-h-screen bg-[#FAFBFD]">
      <ToolBar />
      <Editor />
    </div>
  );
};

export default DocumentIdPage;
