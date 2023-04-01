import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import styles from "../styles/inventory.module.css";
import { Container } from "./Container";

const UploadInventory = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className={styles.drag}>
        <DndProvider backend={HTML5Backend}>
          <Container />
        </DndProvider>
        <div>
          <h1 className='font-bold text-6xl'>Drag & drop Inventory.</h1>
          <p className='text-black-400 mt-5'>Drop a csv file with your inventory items. We’ll help process and upload it.</p>
        </div>
      </div>
    </div>
  );
};

export default UploadInventory;
