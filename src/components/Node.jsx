const Node = ({ value, next, color }) => {
  return (
    <div>
      <div className={`rounded-full h-12 w-12 ${color}`}></div>
      <p>{value}</p>
      <p>{next}</p>
    </div>
  );
};

export default Node;
