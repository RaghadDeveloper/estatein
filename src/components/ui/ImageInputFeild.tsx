import { useState, useRef, type ChangeEvent } from "react";
import {
  inputDevStyleBase,
  inputLabelStyleBase,
  inputStyleBase,
} from "../../data/propertiesData";
import type { ImageInputFieldProps } from "../../interfaces";

const PropertyImageUpload = ({
  onImagesChange,
  onImageChange,
  multi,
  title,
  value,
}: ImageInputFieldProps) => {
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // فتح ملف picker عند النقر على الصورة
  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  // معالجة اختيار الملفات
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    if (multi) {
      const newImages: File[] = Array.from(files);
      const newPreviews: string[] = [];

      // إنشاء preview لكل صورة
      newImages.forEach((file) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          if (e.target?.result) {
            newPreviews.push(e.target.result as string);

            // تحديث الحالة عند اكتمال جميع القراءات
            if (newPreviews.length === newImages.length) {
              const allImages = [...selectedImages, ...newImages];
              const allPreviews = [...imagePreviews, ...newPreviews];

              setSelectedImages(allImages);
              setImagePreviews(allPreviews);

              if (onImagesChange) {
                onImagesChange(allPreviews);
                // onImagesChange(allImages);
              }

              console.log("Images stored in state:", allImages);
            }
          }
        };
        reader.readAsDataURL(file);
      });

      // إعادة تعيين قيمة input للسماح باختيار نفس الملف مجدداً
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } else {
      const file = files[0];

      // image preview
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          const preview = e.target.result as string;

          console.log(file, preview);

          setSelectedImages([file]);
          setImagePreviews([preview]);

          if (onImageChange) {
            onImageChange(preview);
          }

          console.log("Image stored in state: ", [preview]);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // إزالة صورة
  const removeImage = (index: number) => {
    if (multi) {
      const newImages = selectedImages.filter((_, i) => i !== index);
      const newPreviews = imagePreviews.filter((_, i) => i !== index);

      setSelectedImages(newImages);
      setImagePreviews(newPreviews);

      if (onImagesChange) {
        onImagesChange(newPreviews);
      }
    } else {
      setSelectedImages([]);
      setImagePreviews([]);
      if (onImageChange) {
        onImageChange("");
      }
    }
  };

  return (
    <div
      className={`${inputDevStyleBase} ${multi ? "md:col-span-2 lg:col-span-4 row-span-10" : "flex-1"}`}>
      <label className={`${inputLabelStyleBase}`} htmlFor="photos">
        {title}
      </label>

      <div className={`flex-1 ${inputStyleBase} relative min-h-50`}>
        {/* عرض الصور المحددة أو الصورة الافتراضية */}
        {imagePreviews.length > 0 ? (
          <>
            {multi ? (
              <div className="absolute inset-0 p-4 overflow-auto">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                  {imagePreviews.map((preview, index) => (
                    <div key={index} className="relative group">
                      <div className="aspect-square rounded-lg overflow-hidden bg-gray-10 border border-gray-15">
                        <img
                          src={preview}
                          alt={`Property ${index + 1}`}
                          className="w-full h-full object-cover cursor-pointer"
                          onClick={handleImageClick}
                        />

                        {/* Overlay مع زر الإزالة */}
                        <div
                          className="absolute inset-0 bg-black/0 rounded-lg group-hover:bg-black/40 
                                  transition-all duration-300 flex items-center justify-center">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              removeImage(index);
                            }}
                            className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 
                                 transition-all duration-300 w-8 h-8 bg-red-500 text-white rounded-full 
                                 flex items-center justify-center hover:bg-red-600 cursor-pointer">
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>

                      {/* معلومات الملف */}
                      {selectedImages[index] && (
                        <p className="mt-1 text-xs text-gray-60 text-center truncate">
                          {selectedImages[index].name}
                        </p>
                      )}
                    </div>
                  ))}

                  {/* زر إضافة المزيد */}
                  <div
                    className="aspect-square rounded-lg border-2 border-dashed border-gray-15 
                         flex flex-col items-center justify-center gap-2 cursor-pointer
                         hover:border-primary-60 hover:bg-gray-10 transition-all duration-200"
                    onClick={handleImageClick}>
                    <svg
                      className="w-6 h-6 text-gray-60"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                    <p className="text-xs font-medium">Add More</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center">
                <div className="relative group w-full max-w-[150px]">
                  <div className="aspect-square rounded-lg overflow-hidden bg-gray-10 border border-gray-15 p-2">
                    <img
                      src={imagePreviews[0]}
                      alt={`Team Member Photo`}
                      className="w-full h-full object-cover cursor-pointer"
                      onClick={handleImageClick}
                    />
                    {/* Overlay مع زر الإزالة */}
                    <div
                      className="absolute inset-0 bg-black/0 rounded-lg group-hover:bg-black/40 
                                  transition-all duration-300 flex items-center justify-center">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          removeImage(0);
                        }}
                        className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 
                                 transition-all duration-300 w-8 h-8 bg-red-500 text-white rounded-full 
                                 flex items-center justify-center hover:bg-red-600 cursor-pointer">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <p className="mt-1 text-xs text-gray-60 text-center truncate">
                    {selectedImages[0].name}
                  </p>
                </div>
              </div>
            )}
          </>
        ) : (
          // الصورة الافتراضية (عند عدم وجود صور)
          <div className="absolute inset-0 flex items-center justify-center py-5 lg:py-10 2xl:py-12.5">
            <img
              className="h-full cursor-pointer hover:grayscale-0 transition-all duration-300"
              src={value ? value : "/assets/images/uploadImage.png"}
              alt="upload"
              onClick={handleImageClick}
            />
          </div>
        )}

        {/* Input File المخفي */}
        <input
          ref={fileInputRef}
          id="photos"
          name="photos"
          type="file"
          multiple={multi}
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
          required
        />
      </div>

      {/* معلومات عن الصور المحددة */}
      {multi && selectedImages.length > 0 && (
        <div className="mt-3 p-3 bg-gray-10 rounded-lg border border-gray-15">
          <div className="flex justify-between items-center">
            <p className="text-sm font-medium">
              {selectedImages.length} image
              {selectedImages.length !== 1 ? "s" : ""} selected
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedImages([]);
                setImagePreviews([]);
                {
                  if (onImagesChange) onImagesChange([]);
                }
              }}
              className="text-xs text-red-500 hover:text-red-600">
              Clear All
            </button>
          </div>
          <p className="text-xs text-gray-60 mt-1">
            Click on any image to change it or add more
          </p>
        </div>
      )}
    </div>
  );
};

export default PropertyImageUpload;
