import { Modal } from "../patterns/layout-pattern/Modal";
import { LargeListBooks } from "./List.stories";

const meta = {
  title: "Components/Layout/Modal",
  component: Modal,
};

export default meta;

export const ModalList = () => {
  return (
    <Modal>
      <LargeListBooks />
    </Modal>
  );
};
