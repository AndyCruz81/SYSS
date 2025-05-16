'use client';

import { toast } from 'sonner';
import { CheckCircle, AlertTriangle, XCircle, Info } from 'lucide-react';

type NotifyType = 'success' | 'warning' | 'error' | 'info';

interface NotifyProps {
    type?: NotifyType;
    title: string;
    description?: string;
    duration?: number;
}

export function notify({ // destructuración de props
    type = 'info',
    title,
    description,
    duration = 4000,
}: NotifyProps) {
    const iconMap = {
        success: <CheckCircle className="text-green-500 dark:text-green-400 w-5 h-5" />,
        warning: <AlertTriangle className="text-yellow-500 dark:text-yellow-300 w-5 h-5" />,
        error: <XCircle className="text-red-500 dark:text-red-400 w-5 h-5" />,
        info: <Info className="text-blue-500 dark:text-blue-300 w-5 h-5" />,
    };

    toast.custom(() => (
        <div className="flex items-start gap-4 border border-border bg-background rounded-lg shadow-md p-4 w-[320px]">
            <div className="mt-1">{iconMap[type]}</div>
            <div className="flex flex-col">
                <p className="font-semibold text-foreground">{title}</p>
                {description && (
                    <p className="text-sm text-muted-foreground">{description}</p>
                )}
            </div>
        </div>
    ), { duration });
}
