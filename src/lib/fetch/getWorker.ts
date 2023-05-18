import { createServerClient } from "@/utils/supabase-server";
import { Worker_task_connected } from "../general/generalTypes";


export async function getWorkerTaskConnections({ planId, contentId }: { planId: number, contentId: number }) {
    const supabase = createServerClient()
    const { data, error } = await supabase.from("worker_task_connected").select(`*, worker_id!inner(*), task_provided_id!inner(*), workers_added(*), worker_tasks_provided(*)`).eq("is_used", true).eq("task_provided_id.content_provided", contentId).eq("worker_id.plan_id", planId)


    if (error) {
        throw new Error(error.message);
    }
    const workerTaskConnectionsData: Worker_task_connected[] = JSON.parse(
        JSON.stringify(data)
    );
    return workerTaskConnectionsData;
}

export async function getAllWorkerTasks() {
    const supabase = createServerClient()
    const { data, error } = await supabase.from("worker_task_connected").select(`*, workers_added(*), worker_tasks_provided(*)`).eq("is_used", true)


    if (error) {
        throw new Error(error.message);
    }
    const workerTaskConnectionsData: Worker_task_connected[] = JSON.parse(
        JSON.stringify(data)
    );
    return workerTaskConnectionsData;
}