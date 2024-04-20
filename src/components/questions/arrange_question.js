import React from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function Item({ id, content, index, moveItem }) {
  const ref = React.useRef(null);

  const [, drop] = useDrop({
    accept: "item",
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      moveItem(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: "item",
    item: { id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;

  drag(drop(ref));

  return (
    <div ref={ref} style={{ opacity, padding: 3 }}>
      <text className="bg-app-LightTeal rounded-md px-3 mr-3 text-app-Teal">
        {id}
      </text>
      <text>{content}</text>
    </div>
  );
}

export const ArrangeQuestion = ({ ans, changeAns, optionsList, no }) => {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    // Fetch data from API
    const fetchData = async () => {
      //   let arry = ans === null ? optionsList : ans;

      try {
        const formattedData = optionsList.map((item, index) => ({
          id: index + 1,
          content: item,
        }));
        setItems(formattedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [no]);

  const moveItem = (dragIndex, hoverIndex) => {
    const dragItem = items[dragIndex];
    const newItems = [...items];
    newItems.splice(dragIndex, 1);
    newItems.splice(hoverIndex, 0, dragItem);
    setItems(newItems);
    saveData(newItems);
  };

  const saveData = (newItems) => {
    const newArray = newItems.map((item) => item.content);
    changeAns(newArray);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        {items.map((item, index) => (
          <Item
            key={item.id}
            id={item.id}
            content={item.content}
            index={index}
            moveItem={moveItem}
          />
        ))}
      </div>
    </DndProvider>
  );
};
