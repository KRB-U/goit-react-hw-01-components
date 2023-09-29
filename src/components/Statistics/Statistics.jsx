import { data } from 'components/Statistics/data.json';

const Statistics = () => {
  return (
    <section classname="statistics">
      <h2 classname="title">Upload stats</h2>

      <ul classname="stat-list">
        <li classname="item">
          <span classname="label">.docx</span>
          <span classname="percentage">4%</span>
        </li>
        <li classname="item">
          <span classname="label">.mp3</span>
          <span classname="percentage">14%</span>
        </li>
        <li classname="item">
          <span classname="label">.pdf</span>
          <span classname="percentage">41%</span>
        </li>
        <li classname="item">
          <span classname="label">.mp4</span>
          <span classname="percentage">12%</span>
        </li>
      </ul>
    </section>
  );
};

export { Statistics };
