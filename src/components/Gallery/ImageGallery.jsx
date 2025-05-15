import { useEffect, useRef, useState } from "react"

const ImageGallery = ({ firstRowImages, secondRowImages }) => {
  const [containerWidth, setContainerWidth] = useState(0)
  const containerRef = useRef(null)

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth)
      }
    }
    updateWidth()
    window.addEventListener("resize", updateWidth)
    return () => window.removeEventListener("resize", updateWidth)
  }, [])

  return (
    <div ref={containerRef} className="w-full overflow-hidden">
      {/* First row - left to right */}
      <div className="relative mb-4 h-[200px] overflow-hidden">
        <div className="animate-marquee-left-to-right flex absolute">
          {[...firstRowImages, ...firstRowImages].map((image, index) => (
            <div key={`${image.id}-${index}`} className="flex-shrink-0 px-2">
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="h-[200px] w-[300px] rounded-lg object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Second row - right to left */}
      <div className="relative h-[200px] overflow-hidden">
        <div className="animate-marquee-right-to-left flex absolute">
          {[...secondRowImages, ...secondRowImages].map((image, index) => (
            <div key={`${image.id}-${index}`} className="flex-shrink-0 px-2">
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="h-[200px] w-[300px] rounded-lg object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ImageGallery