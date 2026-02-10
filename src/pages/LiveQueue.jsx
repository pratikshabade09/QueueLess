export default function LiveQueue() {
  const queue = [
    { id: "A-036", status: "done" },
    { id: "A-037", status: "done" },
    { id: "A-038", status: "serving" },
    { id: "A-039", status: "waiting" },
    { id: "A-040", status: "waiting" },
    { id: "A-041", status: "waiting" },
    { id: "A-042", status: "you" },
  ];

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">
        Live Queue · Window 3
      </h2>

      {queue.map((q) => (
        <div
          key={q.id}
          className={`mb-3 p-4 rounded-2xl shadow-sm transition
            ${q.status === "serving" ? "bg-primary text-white" : "bg-white"}
            ${q.status === "you" ? "border-2 border-primary" : ""}
          `}
        >
          <div className="flex justify-between">
            <span>{q.id}</span>
            <span className="text-xs">
              {q.status === "serving"
                ? "Now Serving"
                : q.status === "you"
                ? "You"
                : q.status === "done"
                ? "Done"
                : "Waiting"}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}