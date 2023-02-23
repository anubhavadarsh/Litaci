import { useContext, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import clsx from 'clsx';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import Page from 'containers/Page';
import styles from './Project.module.scss';
import Banner from 'containers/Banner';
import Stats from 'components/RepoStats';
import { IRepoResponse, Repos } from 'services/api/Repos';
import { themeCtx } from 'context/theme-context';
import { ReactComponent as LinkIcon } from 'assets/icons/link.svg';
import { getColor } from './util';
import { Lang, useGetLang, useGetReadme } from './hook';

const Project = () => {
  const data = useLoaderData() as IRepoResponse;
  const ctx = useContext(themeCtx);

  const { makeRequest: mkReqReadme, readMe } = useGetReadme();
  const { makeRequest: mkReqLang, langs } = useGetLang();

  useEffect(() => {
    const ac = new AbortController();
    (async () => {
      mkReqReadme({ repo: data.name, ac }, Repos.singleContentReadme);
      mkReqLang({ repo: data.name, ac }, Repos.singlelanguages);
    })();

    return () => ac.abort();
  }, []);

  return (
    <Page className={styles.page}>
      <Cover
        name={data.name}
        isDark={ctx.dark}
      />
      <div className={styles.contentBox}>
        <div>
          <article>
            <div className={styles.boxHeader}>
              <h2>README.md</h2>
            </div>
            <main className={styles.readme}>
              <ReactMarkdown
                children={readMe}
                remarkPlugins={[remarkGfm]}
              />
            </main>
          </article>
          <Sidebar
            deployLink={data.homepage}
            description={data.description || ''}
            forkCount={data.forks_count}
            langs={langs}
            starCount={data.stargazers_count}
            topics={data.topics}
            watchCount={data.watchers_count}
          />
        </div>
      </div>
    </Page>
  );
};

const Cover = ({ name, isDark }: { name: string; isDark: boolean }) => {
  return (
    <div className={styles.cover}>
      <div className={clsx(styles.background, isDark && styles.dark)} />
      <div className={clsx(styles.backdrop, styles.gradient)} />
      <Banner
        className={styles.banner}
        main={name}
      />
    </div>
  );
};

const Sidebar = ({
  description,
  deployLink,
  topics,
  starCount,
  watchCount,
  forkCount,
  langs,
}: {
  description: string;
  deployLink: string;
  topics: string[];
  starCount: number;
  watchCount: number;
  forkCount: number;
  langs: Lang[];
}) => {
  return (
    <aside>
      <section className={styles.about}>
        <h2>About</h2>
        <p>{description}</p>
        <div className={styles.link}>
          <LinkIcon />
          <span>
            <a
              role='link'
              target='_blank'
              rel='noopener noreferrer nofollow'
              href={deployLink}>
              {deployLink.substring(8)}
            </a>
          </span>
        </div>
        <div>
          {topics.map((topic) => (
            <span
              key={topic}
              className={styles.topicTag}>
              {topic}
            </span>
          ))}
        </div>
        <Stats
          forkCount={forkCount}
          starCount={starCount}
          watchCount={watchCount}
        />
      </section>
      <section className={styles.languages}>
        <h2>Languages</h2>
        <div>
          {langs.map((l) => (
            <span key={l.code}>
              <span
                className={styles.color}
                style={{ background: `${getColor(l.name)}` }}
              />
              <span>{l.name}</span>
            </span>
          ))}
        </div>
      </section>
    </aside>
  );
};

export default Project;
