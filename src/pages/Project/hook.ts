import { useState, useRef, RefObject } from 'react';
import { Repos } from 'services/api/Repos';
import { extractContentType } from './util';

const usePointerMovement = (ref: RefObject<HTMLElement>) => {
  const [mouseMovement, setMouseMovement] = useState(0);

  const mouseAtRef = useRef(0);
  const prevMousePosRef = useRef(mouseMovement);

  const handlePointerDown = (cx: number) => {
    mouseAtRef.current = cx;
  };

  const handlePointerMove = (cx: number) => {
    if (mouseAtRef.current === 0) return;

    const mouseDelta = mouseAtRef.current - cx,
      maxDelta = window.innerWidth;

    const percentage = (mouseDelta / maxDelta) * -100,
      nextPercentage = Math.max(
        Math.min(prevMousePosRef.current + percentage, 0),
        -100
      );

    setMouseMovement(nextPercentage);
  };

  const handlePointerUp = () => {
    mouseAtRef.current = 0;
    prevMousePosRef.current = mouseMovement;
  };

  return {
    mouseMovement,
    handlePointerDown,
    handlePointerUp,
    handlePointerMove,
  };
};

class RepoUnknownError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'RepoUnkownError';
    this.message = message;
  }
}

const useGetReadme = () => {
  const [readMe, setReadMe] = useState<string>('');

  const makeRequest = async (
    config: { repo: string; ac: AbortController },
    request: typeof Repos.singleContentReadme
  ) => {
    try {
      const response = await request(config.repo, config.ac.signal);

      if (response.status === 404) {
        throw new RepoUnknownError(
          "this repository doesn't have a README.md file."
        );
      }

      const ct = response.headers.get('content-type');
      if (ct) {
        const contentType = extractContentType(ct);
        if (contentType === 'json') {
          const jsonFormat = await response.json();
          setReadMe(atob(jsonFormat.content));
        } else if (contentType === 'vnd.github.raw') {
          const textFormat = await response.text();
          setReadMe(textFormat);
        }
      }
    } catch (err) {
      if (err instanceof RepoUnknownError) {
        setReadMe(err.message);
      }
    }
  };

  return { makeRequest, readMe };
};

type Lang = {
  name: string;
  code: number;
};

const useGetLang = () => {
  const [langs, setLangs] = useState<Lang[]>([]);

  const makeRequest = async (
    config: { repo: string; ac: AbortController },
    request: typeof Repos.singleContentReadme
  ) => {
    try {
      const response = await request(config.repo, config.ac.signal);
      const jsonFormat = (await response.json()) as { [key: string]: number };

      let l: Lang[] = [];
      for (const a in jsonFormat) {
        l.push({
          name: a,
          code: jsonFormat[a],
        });
      }
      setLangs(l);
    } catch (err) {
      console.log(err);
    }
  };

  return {
    makeRequest,
    langs,
  };
};

export { usePointerMovement, useGetReadme, useGetLang };
