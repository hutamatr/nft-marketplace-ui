import React, { useEffect, useState } from "react";

import Card from "../../UI/Card";
import useGet from "../../../hooks/use-get";
import artistAvatar from "../../UI/Avatars";

const RecentActivity = () => {
  const { isError, requestHttp } = useGet();
  const [recentActivity, setRecentActivity] = useState([]);

  useEffect(() => {
    const recentActivityConf = (dataRecentActivity) => {
      setRecentActivity(dataRecentActivity);
    };

    requestHttp(
      {
        method: "get",
        url: "https://6196ed95af46280017e7e326.mockapi.io/waveast/api/nft-marketplace/recent-activities",
      },
      recentActivityConf
    );
  }, [requestHttp]);

  return (
    <Card className={"mb-6 rounded-xl bg-sub-background-1 p-5"}>
      <h1 className="mb-4 text-xl font-semibold text-white">Recent Activity</h1>

      <ul className="flex flex-col gap-y-6 overflow-auto">
        {recentActivity.map((activity, index) => {
          return (
            <li className="flex flex-row gap-x-2" key={activity.id}>
              <Card
                className={
                  "flex min-w-full flex-row items-center gap-x-5 rounded-xl bg-slate-700 p-3 hover:bg-violet-900"
                }
              >
                {/* can't get the avatar artist image from the API, because the image link in the "avatar" property doesn't work */}
                <img src={artistAvatar[index]} alt="" className="h-12 w-12" />
                <div className="flex flex-col items-start justify-start gap-y-1">
                  <p className="font-medium text-white">{activity.name}</p>
                  <span className="text-sm text-slate-400">
                    {activity.message}
                  </span>
                </div>
              </Card>
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default RecentActivity;
