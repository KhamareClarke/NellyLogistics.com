'use client';

import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Upload, X, User } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FileUploadProps {
  onFileSelect: (file: File | null) => void;
  accept?: string;
  maxSize?: number; // in MB
  preview?: string | null;
  required?: boolean;
  className?: string;
}

export function FileUpload({
  onFileSelect,
  accept = 'image/*',
  maxSize = 5,
  preview,
  required = false,
  className
}: FileUploadProps) {
  const [dragActive, setDragActive] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const validateFile = (file: File): string | null => {
    // Check file type
    if (!file.type.startsWith('image/')) {
      return 'Please select an image file';
    }

    // Check file size
    const fileSizeMB = file.size / (1024 * 1024);
    if (fileSizeMB > maxSize) {
      return `File size must be less than ${maxSize}MB`;
    }

    return null;
  };

  const handleFile = (file: File) => {
    const validationError = validateFile(file);
    if (validationError) {
      setError(validationError);
      return;
    }

    setError(null);
    onFileSelect(file);
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleButtonClick = () => {
    inputRef.current?.click();
  };

  const handleRemove = () => {
    setError(null);
    onFileSelect(null);
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  return (
    <div className={cn('space-y-2', className)}>
      <Label className="text-sm sm:text-base">
        Profile Picture {required && <span className="text-red-500">*</span>}
      </Label>
      
      <div
        className={cn(
          'relative border-2 border-dashed rounded-lg p-6 transition-colors',
          dragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300',
          error ? 'border-red-500 bg-red-50' : '',
          preview ? 'border-green-500 bg-green-50' : ''
        )}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          onChange={handleChange}
          className="hidden"
          required={required}
        />

        {preview ? (
          <div className="flex items-center justify-center space-x-4">
            <div className="relative">
              <img
                src={preview}
                alt="Profile preview"
                className="w-20 h-20 rounded-full object-cover border-2 border-white shadow-lg"
              />
              <button
                type="button"
                onClick={handleRemove}
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="text-center">
              <p className="text-sm text-green-600 font-medium">Profile picture uploaded</p>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={handleButtonClick}
                className="mt-2"
              >
                Change Picture
              </Button>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <User className="w-8 h-8 text-gray-400" />
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">
                Drag and drop your profile picture here, or
              </p>
              <Button
                type="button"
                variant="outline"
                onClick={handleButtonClick}
                className="flex items-center gap-2"
              >
                <Upload className="w-4 h-4" />
                Choose File
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              PNG, JPG, GIF up to {maxSize}MB
            </p>
          </div>
        )}
      </div>

      {error && (
        <p className="text-sm text-red-600 flex items-center gap-1">
          <X className="w-4 h-4" />
          {error}
        </p>
      )}
    </div>
  );
}
