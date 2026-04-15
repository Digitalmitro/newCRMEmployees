import React, { useState } from 'react';
import './FilePreview.css';

const FilePreview = ({ fileUrl, fileType, fileName }) => {
  const [showPreview, setShowPreview] = useState(false);
  const [error, setError] = useState(null);

  const getFileIcon = () => {
    if (!fileType) return '📄';
    
    if (fileType.includes('pdf')) return '📕';
    if (fileType.includes('image')) return '🖼️';
    if (fileType.includes('video')) return '🎬';
    if (fileType.includes('audio')) return '🎵';
    if (fileType.includes('zip') || fileType.includes('rar')) return '📦';
    if (fileType.includes('text')) return '📝';
    
    return '📄';
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.setAttribute('download', fileName || 'file');
    document.body.appendChild(link);
    link.click();
    link.parentElement.removeChild(link);
  };

  const renderPreview = () => {
    if (!fileType) return null;

    if (fileType.includes('image')) {
      return (
        <div className="preview-container image">
          <img 
            src={fileUrl} 
            alt={fileName} 
            onError={() => setError('Failed to load image')}
          />
        </div>
      );
    }

    if (fileType.includes('video')) {
      return (
        <div className="preview-container video">
          <video 
            controls 
            width="100%" 
            height="300"
            onError={() => setError('Failed to load video')}
          >
            <source src={fileUrl} type={fileType} />
            Your browser does not support the video tag.
          </video>
        </div>
      );
    }

    if (fileType.includes('audio')) {
      return (
        <div className="preview-container audio">
          <audio 
            controls 
            style={{ width: '100%' }}
            onError={() => setError('Failed to load audio')}
          >
            <source src={fileUrl} type={fileType} />
            Your browser does not support the audio tag.
          </audio>
        </div>
      );
    }

    if (fileType.includes('pdf')) {
      return (
        <div className="preview-container pdf">
          <p>PDF Document</p>
          <p className="file-name">{fileName}</p>
          <p className="preview-note">Click download to view full PDF</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="file-preview">
      <div className="file-header">
        <span className="file-icon">{getFileIcon()}</span>
        <span className="file-name">{fileName}</span>
        <button 
          onClick={handleDownload}
          className="btn-download"
          title="Download file"
        >
          ⬇️
        </button>
      </div>

      {fileType && (
        <button 
          onClick={() => setShowPreview(!showPreview)}
          className="btn-preview"
        >
          {showPreview ? '▼ Hide Preview' : '▶ Show Preview'}
        </button>
      )}

      {showPreview && (
        <div className="preview-section">
          {error ? (
            <p className="error-message">{error}</p>
          ) : (
            renderPreview()
          )}
        </div>
      )}
    </div>
  );
};

export default FilePreview;
