import { memo } from 'react';
import ExplanationLanguageCard from './ExplanationLanguageCard';
import EmptyLanguagesState from './EmptyLanguagesState';

function ExplanationLanguagesList({ languages, onEdit, onDelete }) {
    if (!languages || languages.length === 0) {
        return <EmptyLanguagesState />;
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {languages.map((langItem) => (
                <ExplanationLanguageCard
                    key={langItem.id || langItem._id}
                    langItem={langItem}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
}

export default memo(ExplanationLanguagesList);
