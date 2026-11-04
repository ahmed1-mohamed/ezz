import { Circle, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/ui/empty-state";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export interface MeetingRequest {
  id: number;
  clientName: string;
  clientAvatar: string;
  relatedTo: string;
  email: string;
  preferredDate: string;
  requestDate: string;
  status: "Pending" | "Approved" | "Rejected" | "Active";
}

interface MeetingsTableProps {
  meetingRequests: MeetingRequest[];
  meetingRequestsWithUser: any[];
  onApprove: (id: number) => void;
  onReject: (id: number) => void;
  isApprovePending: boolean;
  isRejectPending: boolean;
  onViewUser: (userId: number) => void;
}

const avatarColors = [
  "bg-pink-500",
  "bg-blue-500",
  "bg-green-500",
  "bg-yellow-500",
  "bg-purple-500",
  "bg-indigo-500",
  "bg-red-500",
  "bg-cyan-500",
  "bg-orange-500",
  "bg-teal-500",
];

const statusDotColors = {
  Pending: "bg-yellow-500",
  Approved: "bg-green-500",
  Rejected: "bg-red-500",
  Active: "bg-green-500",
};

export function MeetingsTable({
  meetingRequests,
  meetingRequestsWithUser,
  onApprove,
  onReject,
  isApprovePending,
  isRejectPending,
  onViewUser,
}: MeetingsTableProps) {
  const getAvatarColor = (index: number) => {
    return avatarColors[index % avatarColors.length];
  };

  return (
    <div className="rounded-lg border border-gray-200 bg-white overflow-hidden overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-50 hover:bg-gray-50">
            <TableHead className="font-semibold text-gray-900 w-[130px] px-2 text-sm">
              Client
            </TableHead>
            <TableHead className="font-semibold text-gray-900 w-[100px] px-2 text-sm">
              Related To
            </TableHead>
            <TableHead className="font-semibold text-gray-900 w-[120px] px-2 text-sm">
              Email
            </TableHead>
            <TableHead className="font-semibold text-gray-900 w-[90px] px-2 text-sm">
              Pref. Date
            </TableHead>
            <TableHead className="font-semibold text-gray-900 w-[110px] px-2 text-sm">
              Request Date
            </TableHead>
            <TableHead className="font-semibold text-gray-900 w-[80px] px-2 text-sm">
              Status
            </TableHead>
            <TableHead className="font-semibold text-gray-900 w-[120px] px-2 text-sm">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {meetingRequests.length === 0 ? (
            <TableRow>
              <TableCell colSpan={7} className="p-0">
                <EmptyState type="default" title="No meeting requests found." />
              </TableCell>
            </TableRow>
          ) : (
            meetingRequests.map((request, index) => {
              const originalItem = meetingRequestsWithUser[index];
              return (
                <TableRow key={request.id}>
                  <TableCell className="px-2">
                    <div className="flex items-center gap-2">
                      <div
                        className={`h-8 w-8 rounded-full ${getAvatarColor(
                          index,
                        )} flex items-center justify-center flex-shrink-0`}
                      >
                        <span className="text-white text-[10px] font-medium">
                          {request.clientAvatar}
                        </span>
                      </div>
                      <span className="text-gray-900 text-xs font-medium truncate">
                        {request.clientName}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="text-teal-600 px-2 text-xs truncate">
                    {request.relatedTo}
                  </TableCell>
                  <TableCell className="text-gray-900 px-2 text-xs truncate">
                    {request.email}
                  </TableCell>
                  <TableCell className="text-gray-900 px-2 text-xs">
                    {request.preferredDate}
                  </TableCell>
                  <TableCell className="text-gray-900 px-2 text-xs">
                    {request.requestDate}
                  </TableCell>
                  <TableCell className="px-2">
                    <div className="flex items-center gap-1.5">
                      <Circle
                        className={`h-2 w-2 ${statusDotColors[request.status]} fill-current flex-shrink-0`}
                      />
                      <span className="text-gray-900 text-xs truncate">
                        {request.status}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="px-2">
                    <div className="flex items-center gap-1">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 px-1.5 text-teal-600 hover:text-teal-700 hover:bg-teal-50 text-[10px]"
                        onClick={() => {
                          if (originalItem?.user_id) {
                            onViewUser(originalItem.user_id);
                          }
                        }}
                        title="View User"
                      >
                        <Eye className="h-3 w-3" />
                      </Button>
                      {request.status === "Active" ? (
                        <span className="text-xs font-medium text-green-600">
                          Active
                        </span>
                      ) : (
                        <div className="flex items-center gap-0.5">
                          {request.status === "Pending" && (
                            <>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-6 px-1.5 bg-teal-600 text-white hover:bg-teal-700 text-[10px]"
                                onClick={() => onApprove(request.id)}
                                disabled={isApprovePending}
                              >
                                <Circle className="h-1.5 w-1.5 fill-current mr-0.5" />
                                Approve
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-6 px-1.5 bg-red-500 text-white hover:bg-red-600 text-[10px]"
                                onClick={() => onReject(request.id)}
                                disabled={isRejectPending}
                              >
                                <Circle className="h-1.5 w-1.5 fill-current mr-0.5" />
                                Reject
                              </Button>
                            </>
                          )}
                        </div>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              );
            })
          )}
        </TableBody>
      </Table>
    </div>
  );
}