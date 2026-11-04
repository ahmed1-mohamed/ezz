interface StageCommentsListProps {
  comments: any[];
  t: (key: string) => string;
}

export function StageCommentsList({ comments, t }: StageCommentsListProps) {
  if (!comments || comments.length === 0) return null;

  return (
    <div className="space-y-2 pt-2 border-t border-gray-100">
      <h4 className="text-xs font-semibold text-gray-700">
        {t("reservations.details.commentsHistory")}
      </h4>
      {comments.map((comment: any, cIdx: number) => (
        <div key={cIdx} className="bg-gray-50 p-3 rounded-lg border border-gray-200 text-xs">
          <div className="flex items-center justify-between text-gray-500 mb-1">
            <span className="font-medium text-gray-700">{comment.author}</span>
            <span>{comment.date ? new Date(comment.date).toLocaleDateString() : ""}</span>
          </div>
          <p className="text-gray-800">{comment.text}</p>
        </div>
      ))}
    </div>
  );
}
