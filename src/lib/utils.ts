import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string | Date): string {
  const d = new Date(date);
  return d.toLocaleDateString('ar-SA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

export function generateWhatsAppLink(message?: string): string {
const phone = "962791532016";

if (!message) {
return `https://wa.me/${phone}`;
}

return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
