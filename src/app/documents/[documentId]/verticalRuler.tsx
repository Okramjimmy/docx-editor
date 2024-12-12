import { useRef, useState } from "react";
import { FaCaretDown } from "react-icons/fa";

const markers = Array.from({ length: 83 }, (_, i) => i);

export const VerticalRuler = () => {
  const [topMargin, setTopMargin] = useState(56);
  const [bottomMargin, setBottomMargin] = useState(56);

  const [isDraggingTop, setIsDraggingTop] = useState(false);
  const [isDraggingBottom, setIsDraggingBottom] = useState(false);

  const rulerRef = useRef<HTMLDivElement>(null);

  const handleTopMouseDown = () => setIsDraggingTop(true);
  const handleBottomMouseDown = () => setIsDraggingBottom(true);

  const handleMouseMove = (e: React.MouseEvent) => {
    const PAGE_HEIGHT = 816; // Fixed A4 height at 96 DPI
    const MINIMUM_SPACE = 100;

    if ((isDraggingTop || isDraggingBottom) && rulerRef.current) {
      const containerRect = rulerRef.current.getBoundingClientRect();
      const relativeY = e.clientY - containerRect.top;
      const rawPosition = Math.max(0, Math.min(PAGE_HEIGHT, relativeY));

      if (isDraggingTop) {
        const maxTopPosition = PAGE_HEIGHT - bottomMargin - MINIMUM_SPACE;
        const constrainedTopPosition = Math.min(rawPosition, maxTopPosition);
        setTopMargin(constrainedTopPosition);
      }

      if (isDraggingBottom) {
        const maxBottomPosition = PAGE_HEIGHT - (topMargin + MINIMUM_SPACE);
        const constrainedBottomPosition = Math.min(Math.max(PAGE_HEIGHT - rawPosition, 0), maxBottomPosition);
        setBottomMargin(constrainedBottomPosition);
      }
    }
  };

  const handleMouseUp = () => {
    setIsDraggingTop(false);
    setIsDraggingBottom(false);
  };

  const handleTopDoubleClick = () => setTopMargin(56);
  const handleBottomDoubleClick = () => setBottomMargin(56);

  return (
    <div
      ref={rulerRef}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      className="w-6 mx-auto h-[816px] border-r border-gray-300 flex items-start relative select-none print:hidden"
    >
      <div id="ruler-container" className="w-full h-full relative">
        {/* Top margin draggable marker */}
        <Marker
          position={topMargin}
          isTop={true}
          isDragging={isDraggingTop}
          onMouseDown={handleTopMouseDown}
          onDoubleClick={handleTopDoubleClick}
        />

        {/* Bottom margin draggable marker */}
        <Marker
          position={bottomMargin}
          isTop={false}
          isDragging={isDraggingBottom}
          onMouseDown={handleBottomMouseDown}
          onDoubleClick={handleBottomDoubleClick}
        />

        {/* Render markers */}
        <div className="absolute inset-0 left-0 w-full">
          {markers.map((marker) => {
            const position = (marker * 1024) / 82; // Map markers evenly across A4's 816px height
            return (
              <div
                key={marker}
                className="absolute left-0"
                style={{ top: `${position}px` }}
              >
                {marker % 10 === 0 && (
                  <>
                    <div className="absolute left-0 w-2 h-[1px] bg-neutral-500" />
                    <span className="absolute left-2 text-[10px] text-neutral-500 transform -translate-y-1/2">
                      {marker / 10 + 1}
                    </span>
                  </>
                )}
                {marker % 5 === 0 && marker % 10 !== 0 && (
                  <div className="absolute left-0 w-1.5 h-[1px] bg-neutral-500" />
                )}
                {marker % 5 !== 0 && (
                  <div className="absolute left-0 w-1 h-[1px] bg-neutral-500" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

interface MarkerProps {
  position: number;
  isTop: boolean;
  isDragging: boolean;
  onMouseDown: () => void;
  onDoubleClick: () => void;
}

const Marker = ({
  position,
  isTop,
  isDragging,
  onMouseDown,
  onDoubleClick,
}: MarkerProps) => {
  return (
    <div
      className="absolute left-0 w-full h-4 cursor-ns-resize z-[5] group -mt-2"
      style={{ [isTop ? "top" : "bottom"]: `${position}px` }}
      onMouseDown={onMouseDown}
      onDoubleClick={onDoubleClick}
    >
      <FaCaretDown className="absolute left-1/2 top-0 h-full fill-blue-500 transform -translate-x-1/2" />
      <div
        className="absolute left-1/2 top-4 transform -translate-x-1/2"
        style={{
          height: "100%",
          width: "1px",
          transform: "scaleY(0.5)",
          backgroundColor: "#3b72f6",
          display: isDragging ? "block" : "none",
        }}
      />
    </div>
  );
};
