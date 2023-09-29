const Statistics = ({ title, stats }) => {
  return (
    <>
      <section className="statistics">
        <h2 className="title">ghfgh</h2>
        {/* для title тре якась умова, щоб пушила title коли він перелається*/}
        {/* Щось тупу якщо title не пустий - зарендерити */}
        <ul className="stat-list">
          {stats.map(stat => (
            <li className="item" key={stat.id}>
              <span className="label">{stat.label}</span>
              <span className="percentage">{stat.percentage}%</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export { Statistics };
