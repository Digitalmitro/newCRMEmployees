import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PayslipViewer.css';

const PayslipViewer = ({ employeeId }) => {
  const [payslips, setPayslips] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  useEffect(() => {
    fetchPayslips();
  }, [employeeId]);

  const fetchPayslips = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/payslips/my-payslips`,
        {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        }
      );

      if (response.data.success) {
        // Group by year and month
        const grouped = response.data.data.sort((a, b) => {
          if (b.year !== a.year) return b.year - a.year;
          return months.indexOf(b.month) - months.indexOf(a.month);
        });
        setPayslips(grouped);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to load payslips');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = async (payslipId) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/payslips/download/${payslipId}`,
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
      link.setAttribute('download', `payslip-${payslipId}.pdf`);
      document.body.appendChild(link);
      link.click();
      link.parentElement.removeChild(link);
    } catch (err) {
      setError('Failed to download payslip');
    }
  };

  if (isLoading) {
    return <div className="payslip-viewer loading">Loading payslips...</div>;
  }

  return (
    <div className="payslip-viewer">
      <h2>My Payslips</h2>

      <button onClick={fetchPayslips} className="btn-refresh">
        Refresh
      </button>

      {error && <p className="error-message">{error}</p>}

      {payslips.length > 0 ? (
        <div className="payslips-container">
          {payslips.map((payslip) => (
            <div key={payslip._id} className="payslip-card">
              <div className="payslip-info">
                <span className="month-year">
                  {payslip.month} {payslip.year}
                </span>
                <span className="upload-date">
                  Uploaded: {new Date(payslip.uploadedAt).toLocaleDateString()}
                </span>
              </div>
              <button
                onClick={() => handleDownload(payslip._id)}
                className="btn-download"
              >
                ⬇️ Download
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-data">No payslips available yet</p>
      )}
    </div>
  );
};

export default PayslipViewer;
