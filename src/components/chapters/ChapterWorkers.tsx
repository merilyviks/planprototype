import { getWorkerTaskConnections } from "@/lib/fetch/getWorker";

export default async function ChapterWorkers({
  planId,
  contentId,
}: {
  planId: number;
  contentId: number;
}) {
  const workers = await getWorkerTaskConnections({ planId, contentId });
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
      <h2>Vastutajad</h2>
      {workersSorted.map((obj, index) => {
        const checkId = obj.id;
        /*         const filteredTasksId = workers.filter((task, index) => {
          return task.?.id === obj.id;
        });
        console.log(filteredTasksId); */
        const filteredTasks = workers.map((work) => {
          if (
            work.workers_added?.id === checkId &&
            work.worker_tasks_provided?.task !== undefined
          ) {
            return work.worker_tasks_provided.task;
          }
        });
        const filteredArray = filteredTasks.filter(
          (value) => value !== undefined
        );
        return (
          <div key={index}>
            <div className="worker">
              <p>{obj.workerName}</p>
            </div>

            <div className="tasks">
              {filteredArray.map((task, index) => {
                return <p key={index}>{task}</p>;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
