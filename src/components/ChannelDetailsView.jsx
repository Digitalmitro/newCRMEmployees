import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ChannelDetailsView.css';

const ChannelDetailsView = ({ channelId }) => {
  const [details, setDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchChannelDetails();
  }, [channelId]);

  const fetchChannelDetails = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/channel-management/${channelId}/details`,
        {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        }
      );

      if (response.data.success) {
        setDetails(response.data.data);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to load channel details');
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <div className="channel-details-view loading">Loading channel details...</div>;
  }

  if (error) {
    return <div className="channel-details-view error">{error}</div>;
  }

  return (
    <div className="channel-details-view">
      <div className="details-header">
        {details?.channelImage && (
          <img src={details.channelImage} alt={details.name} className="channel-avatar" />
        )}
        <div className="header-info">
          <h2>{details?.name}</h2>
          {details?.description && (
            <p className="description">{details.description}</p>
          )}
        </div>
      </div>

      <div className="details-section">
        <h4>Channel Status</h4>
        <div className="tags">
          {details?.tags?.map(tag => (
            <span key={tag} className="tag status-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {details?.customTags?.length > 0 && (
        <div className="details-section">
          <h4>Tags</h4>
          <div className="tags">
            {details.customTags.map(tag => (
              <span key={tag} className="tag custom-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {details?.details?.purpose && (
        <div className="details-section">
          <h4>Purpose</h4>
          <p>{details.details.purpose}</p>
        </div>
      )}

      {details?.details?.guidelines && (
        <div className="details-section">
          <h4>Guidelines</h4>
          <p>{details.details.guidelines}</p>
        </div>
      )}

      {details?.details?.additionalInfo && (
        <div className="details-section">
          <h4>Additional Information</h4>
          <p>{details.details.additionalInfo}</p>
        </div>
      )}

      <div className="details-section">
        <h4>Members ({details?.memberCount})</h4>
        {details?.members?.length > 0 ? (
          <ul className="members-list">
            {details.members.map(member => (
              <li key={member._id} className="member-item">
                {member.profilePicture && (
                  <img src={member.profilePicture} alt={member.name} className="member-avatar" />
                )}
                <span>{member.name}</span>
                {details.owner?._id === member._id && (
                  <span className="owner-badge">Owner</span>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p>No members</p>
        )}
      </div>

      <div className="details-section">
        <h4>Created</h4>
        <p>{new Date(details?.createdAt).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default ChannelDetailsView;
