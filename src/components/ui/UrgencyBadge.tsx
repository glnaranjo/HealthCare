import { UrgencyLevel } from '../../types';
import { AlertTriangle, AlertCircle, Clock, ShieldCheck } from 'lucide-react';

interface UrgencyBadgeProps {
  urgency: UrgencyLevel;
  showIcon?: boolean;
}

export function UrgencyBadge({ urgency, showIcon = true }: UrgencyBadgeProps) {
  const configs = {
    critical: {
      label: 'Critical Emergency',
      style: 'bg-red-50 text-red-700 border-red-200 ring-1 ring-red-500/20',
      icon: AlertTriangle,
    },
    urgent: {
      label: 'Urgent Care',
      style: 'bg-amber-50 text-amber-800 border-amber-200 ring-1 ring-amber-500/20',
      icon: AlertCircle,
    },
    moderate: {
      label: 'Moderate Attention',
      style: 'bg-blue-50 text-blue-700 border-blue-200 ring-1 ring-blue-500/20',
      icon: Clock,
    },
    precautionary: {
      label: 'Everyday Safety',
      style: 'bg-emerald-50 text-emerald-800 border-emerald-200 ring-1 ring-emerald-500/20',
      icon: ShieldCheck,
    },
  };

  const current = configs[urgency] || configs.moderate;
  const Icon = current.icon;

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold border transition ${current.style}`}
    >
      {showIcon && <Icon className="w-3.5 h-3.5 flex-shrink-0" />}
      <span>{current.label}</span>
    </span>
  );
}

