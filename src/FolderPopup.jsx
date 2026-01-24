import { useState } from "react"

function FolderPopup({ images, onClose }) {
  const [activeImage, setActiveImage] = useState(null)

  return (
    <>

      <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
        <div className="relative bg-zinc-900 p-6 rounded-xl w-[80%] max-w-4xl">
          
          {/* close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white text-xl"
          >
            ✕
          </button>

          {/* grid */}
          <div className="grid grid-cols-2 z-20 lg:grid-cols-3 place-items-center gap-4 lg:gap-5 px-4 lg:px-30 py-6">
  {images.map((img, i) => (
    <img
      key={i}
      src={img}
      onClick={() => setActiveImage(img)}
      className="
        cursor-pointer
        rounded-lg
        hover:scale-105
        w-full aspect-square
        lg:w-32 lg:h-32
        border
        object-cover
        transition
      "
    />
  ))}
</div>

        </div>
      </div>

      {/* full image preview */}
      {activeImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={() => setActiveImage(null)}
        >
          <img
  src={activeImage}
  className="
    max-h-[85%] max-w-[90%]
    lg:max-h-[50%] lg:max-w-[50%]
    rounded-xl
  "
/>

        </div>
      )}
    </>
  )
}

export default FolderPopup
