import { useRef, useState } from 'react';

import { repo } from 'services/api/repo';

const useDownloadResume = () => {
  const resumeRef = useRef<HTMLAnchorElement>(null);

  const makeRequest = async () => {
    const ac = new AbortController();
    const response = await repo.getRepoContent(
      'litaci-work',
      'resume/resume.pdf',
      ac.signal
    );
    const result = await response.json();
    const content = result.content;
    const binaryData = atob(content);
    const pdfData = new Uint8Array(binaryData.length);

    for (let i = 0; i < binaryData.length; ++i) {
      pdfData[i] = binaryData.charCodeAt(i);
    }

    const blob = new Blob([pdfData], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    return url;
  };

  return {
    resumeRef,
    makeRequest,
  };
};

export { useDownloadResume };
