export default function ToggleSwitch({ checked, onChange, isRtl }) {
    return (
        <button
            onClick={onChange}
            className={`w-12 h-6 rounded-full flex items-center p-1 transition-colors ${checked ? 'bg-[#0f7a6c]' : 'bg-slate-300 dark:bg-slate-600'}`}
        >
            <div className={`w-4 h-4 rounded-full bg-white shadow-sm transform transition-transform ${checked ? (isRtl ? '-translate-x-6' : 'translate-x-6') : 'translate-x-0'}`} />
        </button>
    );
}
