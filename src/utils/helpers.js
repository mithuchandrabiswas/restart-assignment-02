export function getBadgeClass(status) {
  if (status === "Open") return "badge-open";
  if (status === "In-Progress") return "badge-prog";
  return "badge-done";
}

export function getPriorityClass(priority) {
  if (priority === "HIGH") return "p-high";
  if (priority === "MEDIUM") return "p-medium";
  return "p-low";
}

export function formatDate() {
  const now = new Date();
  return `${now.getMonth() + 1}/${now.getDate()}/${now.getFullYear()}`;
}
