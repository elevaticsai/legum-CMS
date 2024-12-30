import type { FileState, DataState } from '../types';

const STORAGE_KEYS = {
  FILES: 'legum_cms_files',
  DATA: 'legum_cms_data'
};

export const storageService = {
  saveFiles(files: FileState) {
    // Convert File objects to storable format
    const storableFiles = Object.entries(files).reduce((acc, [key, file]) => ({
      ...acc,
      [key]: file ? {
        name: file.name,
        lastModified: file.lastModified,
        size: file.size,
        type: file.type
      } : null
    }), {});
    
    localStorage.setItem(STORAGE_KEYS.FILES, JSON.stringify(storableFiles));
  },

  saveData(data: DataState) {
    localStorage.setItem(STORAGE_KEYS.DATA, JSON.stringify(data));
  },

  getData(): DataState | null {
    const stored = localStorage.getItem(STORAGE_KEYS.DATA);
    return stored ? JSON.parse(stored) : null;
  },

  clearStorage() {
    localStorage.removeItem(STORAGE_KEYS.FILES);
    localStorage.removeItem(STORAGE_KEYS.DATA);
  }
};