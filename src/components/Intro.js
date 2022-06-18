import React from 'react';
import styles from '../styles/Intro.module.scss';
import Editor from '../svgs/Editor';
import EditorMobile from '../svgs/EditorMobile';

function Intro() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Designed for the future</h1>
      <section className={styles.description}>
        <div className={styles.left}>
          <div className={styles.left_introduction}>
            <h4>Introducing an extensible editor</h4>
            <p>
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </p>
          </div>
          <div className={styles.left_robust}>
            <h4>Robust content management</h4>
            <p>
              Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by adding customized
              categories, sections, format, or flow. With this functionality,
              you're in full control
            </p>
          </div>
        </div>
        <div className={styles.right}>
          <Editor />
          <EditorMobile />
        </div>
      </section>
    </div>
  );
}

export default Intro;
