import ModalWrapper from "../../app/common/modal/ModalWrapper";

export default function TestModal({ count }) {
  return (
    <ModalWrapper size="mini" header="Test Modal">
      <div>The data is: {count}</div>
    </ModalWrapper>
  );
}
