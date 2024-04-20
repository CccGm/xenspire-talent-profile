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
    <div
      ref={ref}
      style={{
        opacity,
        padding: 3,
      }}>
      <text className=" pr-2 text-app-Teal text-2xl">&#x2022;</text>
      <text>{content}</text>
    </div>
  );
}

export const ArrangeQuestion = ({ changeAns, optionsList, no }) => {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    // Fetch data from API
    fetchData();
    changeAns(null);
  }, [no]);

  const fetchData = async () => {
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

  const moveItem = (dragIndex, hoverIndex) => {
    const dragItem = items[dragIndex];
    const newItems = [...items];
    newItems.splice(dragIndex, 1);
    newItems.splice(hoverIndex, 0, dragItem);
    setItems(newItems);
    saveData();
  };

  const saveData = () => {
    if (items.length === 0) {
      changeAns(optionsList);
      return;
    }
    const newArray = items.map((item) => item.content);
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
