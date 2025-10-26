import React from 'react'

export default function Icon({ name, className = 'h-5 w-5' }) {
  switch (name) {
    case 'instagram':
      return (<svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5z"/></svg>)
    case 'facebook':
      return (<svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden><path d="M13 3h4a1 1 0 0 1 1 1v3h-4v3h4v11h-4v-7h-3v7H7V10h3V7a4 4 0 0 1 3-4z"/></svg>)
    case 'x':
      return (<svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden><path d="M3 3h4.6l4.1 6 4.6-6H21l-6.9 9.1L21 21h-4.6l-4.4-6.4L7.1 21H3l7-8.9z"/></svg>)
    case 'pinterest':
      return (<svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden><path d="M12 2a10 10 0 0 0-3.6 19.3c-.1-.8-.2-2 .1-2.8l1.7-7s-.4-.8-.4-1.9c0-1.8 1.1-3.1 2.5-3.1 1.2 0 1.8.9 1.8 2 0 1.2-.8 3-1.2 4.6-.3 1.3.7 2.3 2 2.3 2.4 0 4.2-2.5 4.2-6 0-3.1-2.2-5.3-5.4-5.3-3.7 0-5.9 2.8-5.9 5.7 0 1.1.4 2.3 1 3l-.4 1.6c-.1.2-.2.2-.4.1-1.5-.7-2.4-2.8-2.4-4.5 0-3.7 2.7-7.1 7.9-7.1 4.2 0 7.5 3 7.5 7.1 0 4.2-2.6 7.6-6.2 7.6-1.2 0-2.4-.6-2.8-1.4l-.8 3c-.3 1.1-1 2.5-1.5 3.3A10 10 0 1 0 12 2z"/></svg>)
    case 'grid9':
      return (<svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden><path d="M3 3h5v5H3V3zm6.5 0H15v5H9.5V3zM17 3h4v5h-4V3zM3 9.5h5V15H3V9.5zm6.5 0H15V15H9.5V9.5zM17 9.5h4V15h-4V9.5zM3 17h5v4H3v-4zm6.5 0H15v4H9.5v-4zM17 17h4v4h-4v-4z"/></svg>)
    case 'close':
      return (<svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden><path d="M18.3 5.7L12 12l6.3 6.3-1.4 1.4L10.6 13.4 4.3 19.7 2.9 18.3 9.2 12 2.9 5.7 4.3 4.3l6.3 6.3 6.3-6.3z"/></svg>)
    case 'mail':
    default:
      return (<svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden><path d="M3 5h18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zm9 7 10-7H2l10 7zm-2 1-8 6h20l-8-6-2 1.4-2-1.4z"/></svg>)
  }
}
