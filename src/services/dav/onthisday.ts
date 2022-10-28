import { generateUrl } from "@nextcloud/router";
import { IDay, IPhoto } from "../../types";
import axios from "@nextcloud/axios";

/**
 * Get original onThisDay response.
 */
export async function getOnThisDayRaw() {
  const dayIds: number[] = [];
  const now = new Date();
  const nowUTC = new Date(now.getTime() - now.getTimezoneOffset() * 60000);

  // Populate dayIds
  for (let i = 1; i <= 120; i++) {
    // +- 3 days from this day
    for (let j = -3; j <= 3; j++) {
      const d = new Date(nowUTC);
      d.setFullYear(d.getFullYear() - i);
      d.setDate(d.getDate() + j);
      const dayId = Math.floor(d.getTime() / 1000 / 86400);
      dayIds.push(dayId);
    }
  }

  return (
    await axios.post<IPhoto[]>(generateUrl("/apps/memories/api/days"), {
      body_ids: dayIds.join(","),
    })
  ).data;
}

/**
 * Get the onThisDay data
 * Query for last 120 years; should be enough
 */
export async function getOnThisDayData(): Promise<IDay[]> {
  // Query for photos
  let data = await getOnThisDayRaw();

  // Group photos by day
  const ans: IDay[] = [];
  let prevDayId = Number.MIN_SAFE_INTEGER;
  for (const photo of data) {
    if (!photo.dayid) continue;

    // This works because the response is sorted by date taken
    if (photo.dayid !== prevDayId) {
      ans.push({
        dayid: photo.dayid,
        count: 0,
        detail: [],
      });
      prevDayId = photo.dayid;
    }

    // Add to last day
    const day = ans[ans.length - 1];
    day.detail.push(photo);
    day.count++;
  }

  return ans;
}
