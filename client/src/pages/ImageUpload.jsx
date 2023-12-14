import { ImageUploadForm } from '../forms/components/ImageUploadForm';

export const ImageUpload = () => {
    return (
      <div className="container mx-auto">
        <h1 className="text-center text-2xl font-bold text-red-500 mt-4 mb-6">
          Upload Your Images
        </h1>
        <ImageUploadForm />
      </div>
    );
  }