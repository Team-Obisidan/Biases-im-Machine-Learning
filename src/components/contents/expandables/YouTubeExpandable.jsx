import React from "react"

export const YouTubeExpandable = ({slug = 'dQw4w9WgXcQ'}) => {
    return (<iframe 
        width="100%" 
        height="300" 
        src={`https://www.youtube-nocookie.com/embed/${slug}`}
        title="YouTube video player" 
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen>
        </iframe>
    )
}