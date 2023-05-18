import {
  getAllWorkerTasks,
  getWorkerTaskConnections,
} from "@/lib/fetch/getWorker";

export default async function TeamPage({
  params: { planId },
}: {
  params: { planId: number };
}) {
  const contentId = 17;

  const workers = await getAllWorkerTasks();
  const workersNameList = workers.map((obj) => ({
    id: obj.workers_added?.id,
    workerName: obj.workers_added?.worker,
  }));
  const workersList = workers.map((obj) => obj.workers_added?.id);
  const workersSorted = workersNameList.filter((value, index) => {
    return workersList.indexOf(value.id) === index;
  });

  return (
    <div>
      <table className="basic-chapter-table team-table">
        <thead>
          <tr>
            <td colSpan={2}>Töörühma liikmed</td>
          </tr>
          <tr>
            <td>Ametinimetus</td>
            <td>Ülesanded </td>
          </tr>
        </thead>
        <tbody>
          {workersSorted.map((worker, index) => {
            const filteredTasks = workers.map((work) => {
              if (
                work.workers_added?.id === worker.id &&
                work.worker_tasks_provided?.task !== undefined
              ) {
                return work.worker_tasks_provided.task;
              }
            });

            const filteredArray = filteredTasks.filter(
              (value) => value !== undefined
            );
            return (
              <tr key={index}>
                <td>{worker.workerName}</td>
                <td>
                  {filteredArray.map((task, index) => {
                    return <li key={index}>{task}</li>;
                  })}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
