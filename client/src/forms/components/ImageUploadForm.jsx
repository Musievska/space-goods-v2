import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

import { uploadImage } from "../../utils/service";

export const ImageUploadForm = () => {
  const [files, setFiles] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(0);
  const { t } = useTranslation();
  
  const onDrop = useCallback(
    (acceptedFiles) => {
      if (acceptedFiles.length + files.length > 3) {
        toast.error("You can only upload up to 3 images.");
        return;
      }
      setFiles([...files, ...acceptedFiles]);
      setPreviews([
        ...previews,
        ...acceptedFiles.map((file) => URL.createObjectURL(file)),
      ]);
    },
    [files, previews]
  );

  const handleUpload = async () => {
    try {
      for (const file of files) {
        await uploadImage(file, setUploadProgress);
      }
      toast.success("Upload successful!");
      setFiles([]);
      setPreviews([]);
      setUploadProgress(0);
    } catch (error) {
      toast.error("Upload failed!");
      setUploadProgress(0);
    }
  };

  const removeImage = (index) => {
    const newFiles = files.filter((_, i) => i !== index);
    const newPreviews = previews.filter((_, i) => i !== index);
    setFiles(newFiles);
    setPreviews(newPreviews);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const renderPreviews = () => {
    return previews.map((preview, index) => (
      <div key={index} className="relative">
        <img
          src={preview}
          alt="Preview"
          className="max-w-full max-h-24 mx-auto"
        />
        <button
          onClick={() => removeImage(index)}
          className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full"
        >
          &times;
        </button>
      </div>
    ));
  };

  return (
    <div className="container mx-auto p-4">
      <div
        {...getRootProps()}
        className="dropzone border-dashed border-4 border-gray-600 p-6 rounded-md cursor-pointer"
      >
        <input {...getInputProps()} />
        <p className="text-center text-gray-600">
         {t(" Drag 'n' drop some files here, or click to select files")}
        </p>
      </div>
      <div className="my-4 grid grid-cols-3 gap-4">{renderPreviews()}</div>
      <div className="my-4 text-center">
        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-300"
          onClick={handleUpload}
          disabled={files.length === 0}
        >
          {t("Upload Images")}
        </button>
      </div>
      {uploadProgress > 0 && (
        <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
          <div
            className="bg-red-600 text-xs font-medium text-red-100 text-center p-0.5 leading-none rounded-l-full"
            style={{ width: `${uploadProgress}%` }}
          >
            Progress: {uploadProgress}%
          </div>
        </div>
      )}
    </div>
  );
};
