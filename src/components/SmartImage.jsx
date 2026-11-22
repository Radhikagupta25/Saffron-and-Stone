import { useState } from 'react'
import { ImageOff } from 'lucide-react'

export default function SmartImage({ src, alt, className = '', ...rest }) {
    const [failed, setFailed] = useState(false)
    if (failed) {
        return (
            <div role="img" aria-label={alt} className={`flex items-center justify-center bg-forest-light/40 text-ivory/50 ${className}`}>
                <ImageOff size={28} aria-hidden="true" />
            </div>
        )
    }
    return <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} className={className} {...rest} />
}