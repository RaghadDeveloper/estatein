import type { DeleteModalProps } from "../../interfaces";

const DeleteModal = ({
  isOpen,
  onClose,
  onConfirm,
  isDeleting,
  title = "this item",
}: DeleteModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-999 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={() => !isDeleting && onClose()}
      ></div>

      <div className="relative bg-[#1A1A1A] border border-gray-800 rounded-2xl p-6 md:p-10 max-w-md w-full shadow-2xl transform transition-all scale-100">
        <button
          onClick={onClose}
          disabled={isDeleting}
          className="absolute top-5 right-5 p-1 transition-transform hover:rotate-90 active:scale-90 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <img
            src="/assets/icons/cancel.svg"
            alt="Close"
            className="w-3 h-3  cursor-pointer object-contain opacity-50 hover:opacity-100 transition-opacity"
          />
        </button>

        <div className="flex flex-col items-center text-center">
          <p className="text-gray-400 mb-8 text-base leading-relaxed">
            Are you sure you want to delete{" "}
            <span className="text-white font-semibold">{title}</span> ?
            <br />
          </p>

          <div className="flex w-full gap-3">
            <button
              disabled={isDeleting}
              onClick={onClose}
              className="flex-1 px-6 py-3  cursor-pointer rounded-xl border border-gray-700 text-gray-300 font-semibold hover:bg-gray-800 transition-all disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              disabled={isDeleting}
              onClick={onConfirm}
              className="flex-1 px-6 py-3  cursor-pointer rounded-xl bg-red-600 text-white font-semibold hover:bg-red-700 transition-all flex items-center justify-center gap-2 disabled:opacity-50 shadow-lg shadow-red-600/20"
            >
              {isDeleting ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                  Deleting...
                </>
              ) : (
                "Yes Delete"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
