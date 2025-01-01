import React from 'react';
import { NotificationList } from './NotificationList';
import { NotificationFilters } from './NotificationFilters';
import { useNotifications } from '../../hooks/useNotifications';

export const NotificationPage = () => {
  const { notifications, markAsRead } = useNotifications();

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
      <NotificationFilters />
      <NotificationList 
        notifications={notifications}
        onMarkAsRead={markAsRead}
      />
    </div>
  );
};