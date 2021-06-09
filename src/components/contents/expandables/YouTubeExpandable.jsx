import React from 'react';

export const YouTubeExpandable = ({slug = 'dQw4w9WgXcQ', title = 'Never gonny give you up', autoplay = true}) => {
	return (
		<iframe
			allowFullScreen
			width="100%"
			height="500vh"
			src={`https://www.youtube-nocookie.com/embed/${slug}?autoplay=${autoplay ? 1 : 0}`}
			title={title}
			frameBorder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
		/>
	);
};
