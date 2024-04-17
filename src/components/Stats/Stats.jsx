const Stats = () => {
  return (
    <div className="stats stats-vertical text-violet-600  uppercase shadow">
      <div className="stat">
        <div className="stat-title  uppercase">Investors</div>
        <div className="stat-value ">31K</div>
        <div className="stat-desc ">Jan 1st - Feb 1st</div>
      </div>

      <div className="stat">
        <div className="stat-title ">Monthly Listeners</div>
        <div className="stat-value ">4,200</div>
        <div className="stat-desc">↗︎ 400 (22%)</div>
      </div>

      <div className="stat ">
        <div className="stat-title ">Community Members</div>
        <div className="stat-value ">1,200</div>
        <div className="stat-desc ">↘︎ 90 (14%)</div>
      </div>
    </div>
  );
};

export default Stats;
