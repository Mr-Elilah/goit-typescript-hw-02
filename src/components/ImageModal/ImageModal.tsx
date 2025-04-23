import Modal from "react-modal";
import { UnsplashImage } from "../../apiService";

Modal.setAppElement("#root");

type ImageModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
  image: UnsplashImage | null;
};

export default function ImageModal({
  isOpen,
  onRequestClose,
  image,
}: ImageModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      style={{
        overlay: { backgroundColor: "rgba(0, 0, 0, 0.75)" },
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          maxHeight: "90vh",
          overflow: "hidden",
          padding: "0px",
          borderRadius: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      {image && (
        <div
          style={{
            maxWidth: "90vw",
            maxHeight: "90vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={image.urls.regular}
            alt={image.alt_description ?? "image"}
            style={{
              maxWidth: "90vw",
              maxHeight: "90vh",
              width: "auto",
              height: "auto",
              display: "block",
              margin: "auto",
            }}
          />
        </div>
      )}
    </Modal>
  );
}
