interface DynamicContentProps {
  initialValue: string[];
}

const VerticalScrollServer: React.FC<DynamicContentProps> = ({initialValue}) => {
  return (
    <div className="mb-8 text-center">
      <h2 className="text-2xl font-bold mb-4">tools we use</h2>
          <div
            className="h-full overflow-x-auto overflow-y-hidden scrollbar-hidden flex gap-4 p-4"
          >
            <div className="flex gap-20 p-4 h-full">
              {/* Add your horizontally scrollable content here */}
              {[1,2,3,4,5].map((item) => (
                <div key={item} className="flex-none w-[160px] h-[100px] p-4 rounded-lg scrollbar-hidden overflow-y-auto bg-custom-gradient">
                  <h3 className="text-xl font-semibold mb-2">Item {item}</h3>
                  <p>This is the content for item {item}. It can scroll vertically if it overflows.</p>
                </div>
              ))}
            </div>
          </div>
          <div
            className="h-full overflow-x-auto overflow-y-hidden scrollbar-hidden flex gap-4 p-4"
          >
            <div className="flex gap-20 p-4 h-full">
              {/* Add your horizontally scrollable content here */}
              {[1,2,3,4,5].map((item) => (
                <div key={item} className="flex-none w-[160px] h-[100px] p-4 rounded-lg scrollbar-hidden overflow-y-auto bg-custom-gradient">
                  <h3 className="text-xl font-semibold mb-2">Item {item}</h3>
                  <p>This is the content for item {item}. It can scroll vertically if it overflows.</p>
                </div>
              ))}
            </div>
          </div>
      </div>
  );
};

export default VerticalScrollServer;
