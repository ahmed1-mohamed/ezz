export default function Spinner({ className, size, inline }) {
    if (inline || className || size) {
        return (
            <span className={`inline-block animate-spin rounded-full border-2 border-current border-t-transparent shrink-0 ${size || 'h-4 w-4'} ${className || ''}`}></span>
        );
    }
    return (
        <div className="flex min-h-screen items-center justify-center px-4 py-12">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full border-4 border-brand-500 border-t-transparent text-brand-600">
                <span className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-current border-t-transparent"></span>
            </div>
        </div>
    )
}