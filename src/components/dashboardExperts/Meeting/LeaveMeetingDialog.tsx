import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface LeaveMeetingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirmLeave: () => void;
}

export function LeaveMeetingDialog({
  open,
  onOpenChange,
  onConfirmLeave,
}: LeaveMeetingDialogProps) {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className="bg-zinc-900 border border-zinc-800 text-white">
        <AlertDialogHeader>
          <AlertDialogTitle>Leave the meeting?</AlertDialogTitle>
          <AlertDialogDescription className="text-zinc-400">
            You will be disconnected from the current session.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="bg-zinc-800 text-white border-zinc-700 hover:bg-zinc-700">
            Stay
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={onConfirmLeave}
            className="bg-red-600 hover:bg-red-500 text-white"
          >
            Leave
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
