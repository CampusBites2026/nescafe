const SalaryCard = ({
  totalSalary,
  paidSalary,
  pendingSalary
}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow">

      <h2 className="text-xl font-semibold mb-4">
        Salary Overview
      </h2>

      <div className="space-y-3">

        <p>
          Total Salary :
          ₹{totalSalary}
        </p>

        <p>
          Paid :
          ₹{paidSalary}
        </p>

        <p>
          Pending :
          ₹{pendingSalary}
        </p>

      </div>

    </div>
  );
};

export default SalaryCard;