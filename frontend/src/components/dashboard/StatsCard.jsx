const StatsCard = ({
  title,
  value,
  icon,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 border border-slate-100">
      <div className="flex items-center justify-between">
        
        <div>
          <p className="text-sm font-medium text-gray-500">
            {title}
          </p>

          <h2 className="text-3xl font-bold text-slate-800 mt-2">
            {value}
          </h2>
        </div>

        <div className="h-14 w-14 flex items-center justify-center rounded-xl bg-blue-50 text-blue-600">
          {icon}
        </div>

      </div>
    </div>
  );
};

export default StatsCard;