import { useLoaderData } from 'react-router-dom';
import clsx from 'clsx';

import styles from './Work.module.scss';
import Page from 'containers/Page';
import { metadataType } from './utils';
import Banner from 'containers/Banner';
import { useContext } from 'react';
import { themeCtx } from 'context/theme-context';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';

interface IData extends metadataType {
  name: string;
  content: string;
}

const Work = () => {
  const data = useLoaderData() as IData;
  const ctx = useContext(themeCtx);

  return (
    <Page className={styles.workPage}>
      <Cover
        isDark={ctx.dark}
        name={data.name.replace('-', ' ')}
      />
      <div className={styles.contentBox}>
        <div>
          <article>
            <main className={styles.readme}>
              <ReactMarkdown
                children={data.content}
                remarkPlugins={[remarkGfm]}
              />
            </main>
          </article>
          <Sidebar
            role={data.role}
            highlights={data.highlights}
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
  role,
  highlights,
}: {
  role: string;
  highlights: string[];
}) => {
  return (
    <aside>
      <h3>tl;dr</h3>
      <section>
        <h4>role</h4>
        <p>{role}</p>
      </section>
      <section>
        <h4>highlights</h4>
        <ul>
          {highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      </section>
    </aside>
  );
};

export default Work;
