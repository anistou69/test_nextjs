interface MetaTags {
  title: string;
  description: string;
  keywords: string[];
}

export const updateMetaTags = (tags: MetaTags): void => {
  document.title = tags.title;
  
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', tags.description);
  } else {
    const meta = document.createElement('meta');
    meta.name = 'description';
    meta.content = tags.description;
    document.head.appendChild(meta);
  }

  const metaKeywords = document.querySelector('meta[name="keywords"]');
  if (metaKeywords) {
    metaKeywords.setAttribute('content', tags.keywords.join(', '));
  } else {
    const meta = document.createElement('meta');
    meta.name = 'keywords';
    meta.content = tags.keywords.join(', ');
    document.head.appendChild(meta);
  }
};