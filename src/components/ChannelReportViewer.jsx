import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ChannelReportViewer.css';

const ChannelReportViewer = ({ channelId }) => {
  const [reports, setReports] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchReports();
  }, [channelId]);

  const fetchReports = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/channel-reports/channel/${channelId}`,
        {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        }
      );

      if (response.data.success) {
        setReports(response.data.data);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to load reports');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = async (reportId, fileName) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/channel-reports/download/${reportId}`,
        {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          },
          responseType: 'blob'
        }
      );

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', fileName || `report-${reportId}.pdf`);
      document.body.appendChild(link);
      link.click();
      link.parentElement.removeChild(link);
    } catch (err) {
      setError('Failed to download report');
    }
  };

  if (isLoading) {
    return <div className="channel-report-viewer loading">Loading reports...</div>;
  }

  return (
    <div className="channel-report-viewer">
      <h3>Channel Reports</h3>

      <button onClick={fetchReports} className="btn-refresh">
        Refresh
      </button>

      {error && <p className="error-message">{error}</p>}

      {reports.length > 0 ? (
        <div className="reports-container">
          {reports.map((report) => (
            <div key={report._id} className="report-card">
              <div className="report-info">
                <span className="month-year">
                  {report.month} {report.year}
                </span>
                {report.description && (
                  <p className="description">{report.description}</p>
                )}
                <span className="uploaded-by">
                  Uploaded by: {report.uploadedBy?.name}
                </span>
                <span className="upload-date">
                  {new Date(report.uploadedAt).toLocaleDateString()}
                </span>
              </div>
              <button
                onClick={() => handleDownload(report._id, report.fileName)}
                className="btn-download"
              >
                ⬇️ Download
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-data">No reports available</p>
      )}
    </div>
  );
};

export default ChannelReportViewer;
