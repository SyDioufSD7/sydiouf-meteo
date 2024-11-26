import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface AlertBannerProps {
  message: string;
  type: 'warning' | 'danger';
}

export function AlertBanner({ message, type }: AlertBannerProps) {
  const bgColor = type === 'warning' ? 'bg-yellow-50' : 'bg-red-50';
  const textColor = type === 'warning' ? 'text-yellow-800' : 'text-red-800';
  const borderColor = type === 'warning' ? 'border-yellow-200' : 'border-red-200';

  return (
    <div className={`${bgColor} ${textColor} border ${borderColor} rounded-lg p-4 mb-4`}>
      <div className="flex items-center">
        <AlertTriangle className="h-5 w-5 mr-2" />
        <p className="font-medium">{message}</p>
      </div>
    </div>
  );
}