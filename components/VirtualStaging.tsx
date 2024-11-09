// components/VirtualStaging.tsx
import { useState } from "react";
import { Image, Upload, Check } from "lucide-react";

interface StagingOptions {
  style: string;
  room: string;
  furnishingLevel: string;
}

const VirtualStaging = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");
  const [stagingOptions, setStagingOptions] = useState<StagingOptions>({
    style: "",
    room: "",
    furnishingLevel: "moderate",
  });
  const [processedImage, setProcessedImage] = useState<string>("");

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with your virtual staging API
    // For now, we'll just use the preview image
    setProcessedImage(imagePreview);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <Image className="h-6 w-6 text-blue-600 mr-2" />
          Virtual Staging
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageSelect}
              className="hidden"
              id="image-upload"
            />
            <label
              htmlFor="image-upload"
              className="cursor-pointer flex flex-col items-center"
            >
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Room preview"
                  className="max-h-64 mb-4 rounded"
                />
              ) : (
                <Upload className="h-12 w-12 text-gray-400 mb-2" />
              )}
              <span className="text-sm text-gray-600">
                Click to upload room image
              </span>
            </label>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Room Type
              </label>
              <select
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={stagingOptions.room}
                onChange={(e) =>
                  setStagingOptions({
                    ...stagingOptions,
                    room: e.target.value,
                  })
                }
              >
                <option value="">Select room</option>
                <option value="living">Living Room</option>
                <option value="bedroom">Bedroom</option>
                <option value="kitchen">Kitchen</option>
                <option value="dining">Dining Room</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Style
              </label>
              <select
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={stagingOptions.style}
                onChange={(e) =>
                  setStagingOptions({
                    ...stagingOptions,
                    style: e.target.value,
                  })
                }
              >
                <option value="">Select style</option>
                <option value="modern">Modern</option>
                <option value="traditional">Traditional</option>
                <option value="contemporary">Contemporary</option>
                <option value="minimalist">Minimalist</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Furnishing Level
              </label>
              <select
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={stagingOptions.furnishingLevel}
                onChange={(e) =>
                  setStagingOptions({
                    ...stagingOptions,
                    furnishingLevel: e.target.value,
                  })
                }
              >
                <option value="minimal">Minimal</option>
                <option value="moderate">Moderate</option>
                <option value="full">Full</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            disabled={!selectedImage}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
          >
            <Check className="h-4 w-4" />
            <span>Generate Staged Image</span>
          </button>
        </form>

        {processedImage && (
          <div className="mt-6">
            <h3 className="font-medium mb-2">Staged Result:</h3>
            <div className="border rounded-lg overflow-hidden">
              <img src={processedImage} alt="Staged room" className="w-full" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VirtualStaging;
